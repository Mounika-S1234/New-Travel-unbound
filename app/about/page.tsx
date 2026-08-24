import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function About(){
  return (
    <div className="min-h-screen bg-[#f7f4ee]">
      <Navbar />
      <main>
        <section className="bg-[#193b3a] px-6 pb-20 pt-40 text-white lg:px-10"><div className="mx-auto max-w-7xl"><p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-[#f2bf83]">Our point of view</p><h1 className="max-w-3xl font-serif text-5xl font-bold leading-tight md:text-7xl">Travel is better when it feels like <em className="font-normal text-[#f2bf83]">yours.</em></h1></div></section>
        <section className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-[1fr_1.4fr] lg:px-10"><p className="text-xs font-bold uppercase tracking-[0.25em] text-[#c87537]">The story</p><div><h2 className="font-serif text-4xl font-bold text-[#193b3a]">Not a catalogue. A conversation.</h2><p className="mt-7 text-lg leading-8 text-[#617674]">Travel Unbounded was born from a simple belief: the best journeys aren&apos;t sold from a catalogue. They&apos;re built around the people taking them.</p><p className="mt-5 text-lg leading-8 text-[#617674]">Headquartered in Bengaluru with offices in Kerala and Nairobi, we design trips that blend comfort, culture, and raw nature. Every destination, resort, and activity we recommend has been personally experienced by our team.</p><p className="mt-5 text-lg leading-8 text-[#617674]">From spotting the Big Five at dawn in the Masai Mara to cruising Ha Long Bay at sunset, we go where real stories are written, and we bring you along.</p></div></section>

        <section className="bg-[#e8e3d9] px-6 py-24 lg:px-10"><div className="mx-auto max-w-7xl"><h2 className="font-serif text-4xl font-bold text-[#193b3a]">Find us in the world.</h2><div className="mt-12 grid gap-5 md:grid-cols-3">{[['Bengaluru','Headquarters','541, 7th Main Rd, HAL 2nd Stage, Indiranagar, Bengaluru - 560008'],['Kochi','Kerala office','LR Towers, S Janatha Road, Palavivatton, Kochi - 682025'],['Nairobi','Kenya office','Westpark Towers, Muthithi Road, Nairobi, P.O. Box 6950, 00100']].map(([city, label, address]) => <article key={city} className="border-t-2 border-[#c87537] pt-5"><p className="text-xs font-bold uppercase tracking-widest text-[#c87537]">{label}</p><h3 className="mt-3 font-serif text-3xl font-bold text-[#193b3a]">{city}</h3><p className="mt-3 text-sm leading-6 text-[#617674]">{address}</p></article>)}</div></div></section>

        <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10"><p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#c87537]">The difference</p><h2 className="font-serif text-4xl font-bold text-[#193b3a]">Why choose us</h2><div className="mt-10 grid gap-8 md:grid-cols-4">{[['01','Personally vetted','We only recommend places our team would send our own friends.'],['02','Local by design','Trusted local guides turn a trip into a connection.'],['03','Made for you','No two itineraries should ever look the same.'],['04','Always close','Thoughtful support, from first question to last flight.']].map(([number, title, text]) => <div key={number}><span className="text-sm font-bold text-[#c87537]">{number}</span><h3 className="mt-4 font-serif text-2xl font-bold text-[#193b3a]">{title}</h3><p className="mt-3 text-sm leading-6 text-[#617674]">{text}</p></div>)}</div></section>
      </main>
      <Footer />
    </div>
  );
}
