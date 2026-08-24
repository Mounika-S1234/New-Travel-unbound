import Link from 'next/link';
import Image from 'next/image';
import { Destination } from '../data/destinations';

export default function DestinationCard({ destination }: { destination: Destination }) {
  return (
    <article className="group overflow-hidden rounded-xs bg-white shadow-[0_8px_30px_rgba(25,59,58,0.08)]">
      <div className="relative h-64 w-full overflow-hidden">
        <Image fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw" src={destination.image} alt={`${destination.name} landscape`} className="object-cover transition duration-700 group-hover:scale-105" />
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#193b3a]">{destination.country}</span>
      </div>
      <div className="p-5">
        <h3 className="font-serif text-2xl font-bold text-[#193b3a]">{destination.name}</h3>
        <p className="mt-2 min-h-12 text-sm leading-6 text-[#617674]">{destination.description}</p>
        <div className="mt-5 flex items-center justify-between gap-3 border-t border-[#e8e3d9] pt-4">
          <div><span className="block text-[10px] font-bold uppercase tracking-widest text-[#8a9a96]">Starting from</span><strong className="text-sm text-[#193b3a]">₹{destination.price.toLocaleString()}</strong></div>
          <Link href="/contact" className="text-sm font-bold text-[#c87537] transition hover:text-[#193b3a]">Enquire <span aria-hidden="true">↗</span></Link>
        </div>
      </div>
    </article>
  );
}
