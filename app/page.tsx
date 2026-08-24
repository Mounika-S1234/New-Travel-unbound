import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DestinationCard from '../components/DestinationCard';
import { indiaDestinations, internationalDestinations } from '../data/destinations';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f7f4ee]">
      <Navbar />
      <header className="relative flex min-h-[42.5rem] items-end overflow-hidden bg-[#193b3a] pb-20 pt-32 text-white">
        <Image fill priority sizes="100vw" src="https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=2200&q=85&auto=format&fit=crop" alt="Traveller looking across a mountain valley" className="object-cover opacity-60" />
        <div className="absolute inset-0 bg-linear-to-t from-[#102f2e] via-[#193b3a]/35 to-transparent" />
        <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-10">
          <p className="mb-6 text-xs font-bold uppercase tracking-[0.3em] text-[#f2bf83]">Travel, with intention</p>
          <h1 className="max-w-3xl font-serif text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">Go where the<br /><em className="font-normal text-[#f2bf83]">real stories</em> are.</h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-white/80">Thoughtfully designed journeys across India and the world, built around the people taking them.</p>
          <Link href="/contact" className="mt-9 inline-flex rounded-full bg-[#e8a05b] px-7 py-4 text-sm font-bold text-[#193b3a] transition hover:bg-white">Start planning <span className="ml-3">↗</span></Link>
        </div>
      </header>

      <main>
        <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <div className="mb-12 flex items-end justify-between gap-6"><div><p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#c87537]">The home ground</p><h2 className="font-serif text-4xl font-bold text-[#193b3a] md:text-5xl">India, deeply felt.</h2></div><p className="hidden max-w-xs text-right text-sm leading-6 text-[#617674] md:block">From the hush of the Himalayas to the pulse of the coast.</p></div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {indiaDestinations.map((d) => (
              <DestinationCard key={d.id} destination={d} />
            ))}
          </div>
        </section>

        <section className="bg-[#e8e3d9] px-6 py-24 lg:px-10">
          <div className="mx-auto max-w-7xl"><div className="mb-12"><p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#c87537]">Further afield</p><h2 className="font-serif text-4xl font-bold text-[#193b3a] md:text-5xl">The world, unfiltered.</h2></div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {internationalDestinations.map((d) => (
              <DestinationCard key={d.id} destination={d} />
            ))}
          </div>
          </div>
        </section>
        <section className="bg-[#193b3a] px-6 py-24 text-center text-white"><p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#f2bf83]">Your next chapter</p><h2 className="mx-auto max-w-2xl font-serif text-4xl font-bold md:text-6xl">Some places should be felt, not just seen.</h2><Link href="/contact" className="mt-8 inline-block rounded-full border border-[#f2bf83] px-7 py-4 text-sm font-bold text-[#f2bf83] transition hover:bg-[#f2bf83] hover:text-[#193b3a]">Tell us where you want to go</Link></section>
      </main>

      <Footer />
    </div>
  );
}
