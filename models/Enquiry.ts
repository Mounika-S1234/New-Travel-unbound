import mongoose from 'mongoose';

type EnquiryDocument = {
  fullName: string;
  countryCode?: string;
  contactNumber: string;
  email: string;
  dateOfTravel: Date;
  numberOfPeople: number;
  hotelCategory: string;
  numberOfChildren: number;
  createdAt: Date;
};

const EnquirySchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  countryCode: { type: String },
  contactNumber: { type: String, required: true },
  email: { type: String, required: true },
  dateOfTravel: { type: Date, required: true },
  numberOfPeople: { type: Number, required: true },
  hotelCategory: { type: String, required: true },
  numberOfChildren: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
});

export default (mongoose.models.Enquiry as mongoose.Model<EnquiryDocument>) || mongoose.model<EnquiryDocument>('Enquiry', EnquirySchema);
