import mongoose from 'mongoose';
import fs from 'fs';
import path from 'path';

const cached: { conn: mongoose.Connection | null } = { conn: null };

export type EnquiryRecord = {
  fullName: string;
  countryCode?: string;
  contactNumber: string;
  email: string;
  dateOfTravel: string | Date;
  numberOfPeople: number;
  hotelCategory: string;
  numberOfChildren: number;
  createdAt: string;
};

export async function connectToDatabase(){
  const uri = process.env.MONGODB_URI;
  if(!uri){
    // No MongoDB configured; return null and caller can fallback
    return null;
  }
  if(cached.conn) return cached.conn;
  const conn = await mongoose.connect(uri);
  cached.conn = conn.connection;
  return conn.connection;
}

export async function saveToFile(record: EnquiryRecord){
  const file = path.join(process.cwd(), 'data', 'enquiries.json');
  try{
    let arr: EnquiryRecord[] = [];
    if(fs.existsSync(file)){
      const raw = fs.readFileSync(file, 'utf-8');
      arr = JSON.parse(raw || '[]');
    }
    arr.push(record);
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, JSON.stringify(arr, null, 2));
    return true;
  }catch(err){
    console.error('saveToFile error', err);
    return false;
  }
}
