export type Destination = {
  id: number;
  name: string;
  country: string;
  image: string;
  description: string;
  price: number;
  category: 'india' | 'international';
};

export const destinations: Destination[] = [
  {
    id: 1,
    name: 'Kerala',
    country: 'India',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1200&q=80&auto=format&fit=crop',
    description: 'Backwaters, houseboats and lush greenery.',
    price: 25000,
    category: 'india',
  },
  {
    id: 2,
    name: 'Himachal Pradesh',
    country: 'India',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&q=80&auto=format&fit=crop',
    description: 'Snow-capped mountains and quiet hill towns.',
    price: 18000,
    category: 'india',
  },
  {
    id: 3,
    name: 'Ladakh',
    country: 'India',
    image: 'https://images.unsplash.com/photo-1470770903676-69b98201ea1c?w=1200&q=80&auto=format&fit=crop',
    description: 'High-altitude deserts, monasteries and lakes.',
    price: 40000,
    category: 'india',
  },
  {
    id: 4,
    name: 'Andaman',
    country: 'India',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80&auto=format&fit=crop',
    description: 'Tropical beaches and coral reefs.',
    price: 30000,
    category: 'india',
  },
  {
    id: 5,
    name: 'Goa',
    country: 'India',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=80&auto=format&fit=crop',
    description: 'Beaches, nightlife and Portuguese heritage.',
    price: 20000,
    category: 'india',
  },
  {
    id: 11,
    name: 'Kenya',
    country: 'Kenya',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&q=80&auto=format&fit=crop',
    description: 'Safari and wildlife adventures.',
    price: 80000,
    category: 'international',
  },
  {
    id: 12,
    name: 'Vietnam',
    country: 'Vietnam',
    image: 'https://images.unsplash.com/photo-1528127269322-539801943592?w=1200&q=80&auto=format&fit=crop',
    description: 'Halong Bay cruises and street food.',
    price: 60000,
    category: 'international',
  },
  {
    id: 13,
    name: 'Tanzania',
    country: 'Tanzania',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200&q=80&auto=format&fit=crop',
    description: 'Serengeti and Mount Kilimanjaro.',
    price: 90000,
    category: 'international',
  },
  {
    id: 14,
    name: 'Iceland',
    country: 'Iceland',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&q=80&auto=format&fit=crop',
    description: 'Waterfalls, glaciers and northern lights.',
    price: 120000,
    category: 'international',
  },
  {
    id: 15,
    name: 'Sri Lanka',
    country: 'Sri Lanka',
    image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=1200&q=80&auto=format&fit=crop',
    description: 'Tea plantations and coastal drives.',
    price: 45000,
    category: 'international',
  },
];

export const indiaDestinations = destinations.filter((d) => d.category === 'india');
export const internationalDestinations = destinations.filter((d) => d.category === 'international');
