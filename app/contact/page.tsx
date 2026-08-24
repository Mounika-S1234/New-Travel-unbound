import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import BookingForm from '../../components/BookingForm';

export default function Contact(){
  return (
    <div className="min-h-screen bg-[#f7f4ee]">
      <Navbar />
      <main className="mx-auto max-w-7xl px-6 pb-24 pt-36 lg:px-10"><div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start"><div><p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#c87537]">Make it real</p><h1 className="font-serif text-5xl font-bold leading-tight text-[#193b3a]">Your next great story starts here.</h1><p className="mt-6 max-w-md text-lg leading-8 text-[#617674]">Tell us what you&apos;re dreaming of. We&apos;ll bring the route, the local knowledge and the little details that make it yours.</p></div><div className="mt-2">
          <BookingForm />
        </div></div>
      </main>
      <Footer />
    </div>
  );
}
