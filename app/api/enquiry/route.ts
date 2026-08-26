import { NextResponse } from 'next/server';
import { connectToDatabase, saveToFile } from '../../../lib/db';
import Enquiry from '../../../models/Enquiry';

type EnquiryBody = {
  fullName?: string;
  email?: string;
  contactNumber?: string;
  countryCode?: string;
  dateOfTravel?: string;
  numberOfPeople?: number;
  numberOfChildren?: number;
  hotelCategory?: string;
};

function validateBody(body: EnquiryBody){
  if(!body) return 'Invalid JSON body';
  const { fullName, email, contactNumber, dateOfTravel, numberOfPeople, numberOfChildren, hotelCategory } = body;
  if(!fullName || typeof fullName !== 'string') return 'fullName is required';
  if(!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return 'Valid email required';
  if(!contactNumber || typeof contactNumber !== 'string' || !/^\d{7,15}$/.test(contactNumber!.replace(/[\s()-]/g, ''))) return 'Valid contactNumber is required';
  if(!dateOfTravel || typeof dateOfTravel !== 'string' || isNaN(new Date(dateOfTravel!).getTime())) return 'Valid dateOfTravel required';
  const travel = new Date(dateOfTravel!);
  const now = new Date();
  if(travel <= new Date(now.getFullYear(), now.getMonth(), now.getDate())) return 'dateOfTravel must be in the future';
  if(!(typeof numberOfPeople === 'number') || numberOfPeople < 1) return 'numberOfPeople must be >= 1';
  if(numberOfChildren !== undefined && (typeof numberOfChildren !== 'number' || numberOfChildren < 0)) return 'numberOfChildren must be >= 0';
  if(!['Standard','Deluxe','Luxury'].includes(hotelCategory!)) return 'Invalid hotelCategory';
  return null;
}

export async function POST(req: Request){
  try{
    const body = (await req.json()) as EnquiryBody;
    const err = validateBody(body);
    if(err) return NextResponse.json({ success: false, message: err }, { status: 400 });

    const db = await connectToDatabase();
    if(!db && process.env.NODE_ENV === 'production'){
      return NextResponse.json(
        { success: false, message: 'Enquiry service is not configured. Please add MONGODB_URI in Vercel.' },
        { status: 503 },
      );
    }
    if(db){
      const created = await Enquiry.create({
        fullName: body.fullName,
        countryCode: body.countryCode,
        contactNumber: body.contactNumber,
        email: body.email,
        dateOfTravel: new Date(body.dateOfTravel!),
        numberOfPeople: body.numberOfPeople,
        hotelCategory: body.hotelCategory,
        numberOfChildren: body.numberOfChildren || 0,
      });
      return NextResponse.json({ success: true, message: 'Enquiry saved', id: created._id }, { status: 201 });
    } else {
      const ok = await saveToFile({
        fullName: body.fullName!,
        countryCode: body.countryCode,
        contactNumber: body.contactNumber!,
        email: body.email!,
        dateOfTravel: body.dateOfTravel!,
        numberOfPeople: body.numberOfPeople!,
        hotelCategory: body.hotelCategory!,
        numberOfChildren: body.numberOfChildren || 0,
        createdAt: new Date().toISOString(),
      });
      if(ok) return NextResponse.json({ success: true, message: 'Enquiry saved (local)' }, { status: 201 });
      return NextResponse.json({ success: false, message: 'Failed to save enquiry' }, { status: 500 });
    }
  }catch(err: unknown){
    console.error('API error', err);
    return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 });
  }
}
