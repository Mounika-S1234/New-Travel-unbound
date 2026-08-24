"use client";
import React, { useState } from 'react';

type FormData = {
  fullName: string;
  countryCode: string;
  contactNumber: string;
  email: string;
  dateOfTravel: string;
  numberOfPeople: number;
  hotelCategory: string;
  numberOfChildren: number;
};

const initial: FormData = {
  fullName: '',
  countryCode: '+91',
  contactNumber: '',
  email: '',
  dateOfTravel: '',
  numberOfPeople: 1,
  hotelCategory: 'Standard',
  numberOfChildren: 0,
};

export default function BookingForm(){
  const [form, setForm] = useState<FormData>(initial);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>){
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: name.includes('number') ? Number(value) : value }));
  }

  function validate(){
    setError(null);
    if(!form.fullName.trim()) return 'Full name is required';
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return 'Valid email required';
    if(!/^\d{7,15}$/.test(form.contactNumber.replace(/[\s()-]/g, ''))) return 'Enter a valid contact number';
    const travel = new Date(form.dateOfTravel);
    const now = new Date();
    if(!(form.dateOfTravel) || isNaN(travel.getTime())) return 'Valid travel date required';
    if(travel <= new Date(now.getFullYear(), now.getMonth(), now.getDate())) return 'Travel date must be in the future';
    if(form.numberOfPeople < 1) return 'Number of people must be at least 1';
    if(form.numberOfChildren < 0) return 'Number of children cannot be negative';
    if(!['Standard','Deluxe','Luxury'].includes(form.hotelCategory)) return 'Invalid hotel category';
    return null;
  }

  async function handleSubmit(e: React.FormEvent){
    e.preventDefault();
    const v = validate();
    if(v){ setError(v); return; }
    setLoading(true); setError(null); setSuccess(null);
    try{
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const body = await res.json();
      if(res.ok){
        setSuccess(body.message || 'Enquiry submitted successfully');
        setForm(initial);
      } else {
        setError(body.message || 'Submission failed');
      }
    }catch{
      setError('Network error. Please try again.');
    }finally{ setLoading(false); }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl rounded-xs border border-[#e8e3d9] bg-white p-6 shadow-[0_12px_40px_rgba(25,59,58,0.08)] md:p-9">
      <h2 className="font-serif text-3xl font-bold text-[#193b3a]">Plan your trip</h2><p className="mt-2 text-sm text-[#617674]">A few details help us make your first itinerary draft feel personal.</p>
      {error && <div role="alert" className="mt-5 border-l-4 border-red-500 bg-red-50 p-3 text-sm text-red-700">{error}</div>}
      {success && <div role="status" className="mt-5 border-l-4 border-emerald-600 bg-emerald-50 p-3 text-sm text-emerald-700">{success}. Our travel expert will contact you within 24 hours.</div>}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div>
          <label className="block text-sm font-medium text-[#193b3a]">Full Name*</label>
          <input required name="fullName" value={form.fullName} onChange={handleChange} className="mt-2 w-full border border-[#d8d3c9] px-3 py-3 outline-none focus:border-[#c87537]" />
        </div>
        <div>
          <label className="block text-sm font-medium text-[#193b3a]">Email*</label>
          <input required name="email" type="email" value={form.email} onChange={handleChange} className="mt-2 w-full border border-[#d8d3c9] px-3 py-3 outline-none focus:border-[#c87537]" />
        </div>
        <div className="md:col-span-2 flex gap-2">
          <div className="w-1/3">
            <label className="block text-sm font-medium text-[#193b3a]">Code</label>
            <select name="countryCode" value={form.countryCode} onChange={handleChange} className="mt-2 w-full border border-[#d8d3c9] bg-white px-3 py-3 outline-none focus:border-[#c87537]">
              <option>+91</option>
              <option>+1</option>
              <option>+44</option>
            </select>
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-[#193b3a]">Contact Number*</label>
            <input required name="contactNumber" type="tel" value={form.contactNumber} onChange={handleChange} className="mt-2 w-full border border-[#d8d3c9] px-3 py-3 outline-none focus:border-[#c87537]" />
          </div>
        </div>
        <div>
          <label className="block text-sm">Date of Travel*</label>
          <input required name="dateOfTravel" type="date" value={form.dateOfTravel} onChange={handleChange} className="mt-2 w-full border border-[#d8d3c9] bg-white px-3 py-3 outline-none focus:border-[#c87537]" />
        </div>
        <div>
          <label className="block text-sm">Number of People*</label>
          <input required name="numberOfPeople" type="number" min={1} value={form.numberOfPeople} onChange={handleChange} className="mt-2 w-full border border-[#d8d3c9] px-3 py-3 outline-none focus:border-[#c87537]" />
        </div>
        <div>
          <label className="block text-sm">Hotel Category</label>
          <select name="hotelCategory" value={form.hotelCategory} onChange={handleChange} className="mt-2 w-full border border-[#d8d3c9] bg-white px-3 py-3 outline-none focus:border-[#c87537]">
            <option>Standard</option>
            <option>Deluxe</option>
            <option>Luxury</option>
          </select>
        </div>
        <div>
          <label className="block text-sm">Number of Children</label>
          <input name="numberOfChildren" type="number" min={0} value={form.numberOfChildren} onChange={handleChange} className="mt-2 w-full border border-[#d8d3c9] px-3 py-3 outline-none focus:border-[#c87537]" />
        </div>
      </div>
      <div className="mt-4">
        <button type="submit" disabled={loading} className="w-full bg-[#193b3a] px-5 py-4 text-sm font-bold text-white transition hover:bg-[#c87537] disabled:cursor-wait disabled:opacity-60">
          {loading ? 'Sending your enquiry...' : 'Send enquiry'}
        </button>
      </div>
    </form>
  );
}
