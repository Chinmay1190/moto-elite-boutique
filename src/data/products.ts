
import { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "1",
    name: "Yamaha YZF R1",
    slug: "yamaha-yzf-r1",
    description: "The Yamaha YZF-R1 is a 998cc sport bike with a crossplane crankshaft, known for its exceptional handling and racing pedigree.",
    price: 2000000,
    category: "sport",
    manufacturer: "Yamaha",
    engineSize: "998cc",
    power: "200 PS",
    topSpeed: "299 km/h",
    weight: "201 kg",
    fuelCapacity: "17L",
    images: [
      "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=1170&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1558981359-219d6364c9c8?q=80&w=1170&auto=format&fit=crop",
    ],
    colors: ["#FF0000", "#000000", "#0000FF"],
    stock: 5,
    ratings: 4.8,
    reviews: 125,
    featured: true,
    bestSeller: true,
  },
  {
    id: "2",
    name: "Kawasaki Ninja ZX-10R",
    slug: "kawasaki-ninja-zx-10r",
    description: "The Kawasaki Ninja ZX-10R is a motorcycle in the Ninja sport bike series from the manufacturer Kawasaki, known for its exceptional speed and agility.",
    price: 1650000,
    category: "sport",
    manufacturer: "Kawasaki",
    engineSize: "998cc",
    power: "203 PS",
    topSpeed: "299 km/h",
    weight: "207 kg",
    fuelCapacity: "17L",
    images: [
      "https://images.unsplash.com/photo-1580310614729-ccd69652491d?q=80&w=1170&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1606811971618-18c8251f60d3?q=80&w=1170&auto=format&fit=crop",
    ],
    colors: ["#00FF00", "#000000"],
    stock: 3,
    ratings: 4.7,
    reviews: 98,
    featured: true,
  },
  {
    id: "3",
    name: "Ducati Panigale V4",
    slug: "ducati-panigale-v4",
    description: "The Ducati Panigale V4 is a sport bike with a 1,103 cc V4 engine, designed by Ducati for their high-end sport bike range.",
    price: 2650000,
    category: "sport",
    manufacturer: "Ducati",
    engineSize: "1103cc",
    power: "214 PS",
    topSpeed: "299 km/h",
    weight: "195 kg",
    fuelCapacity: "16L",
    images: [
      "https://images.unsplash.com/photo-1615172282427-9a59e4fcd037?q=80&w=1170&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631919292749-0683a5a27741?q=80&w=1170&auto=format&fit=crop",
    ],
    colors: ["#FF0000", "#FFFFFF"],
    stock: 2,
    ratings: 4.9,
    reviews: 76,
    isNew: true,
    featured: true,
  },
  {
    id: "4",
    name: "BMW S 1000 RR",
    slug: "bmw-s-1000-rr",
    description: "The BMW S 1000 RR is a race-oriented sport bike, with a powerful 999 cc inline-four engine and sophisticated electronics.",
    price: 2450000,
    category: "sport",
    manufacturer: "BMW",
    engineSize: "999cc",
    power: "207 PS",
    topSpeed: "305 km/h",
    weight: "197 kg",
    fuelCapacity: "16.5L",
    images: [
      "https://images.unsplash.com/photo-1656530743944-11c9bc4a4f50?q=80&w=1170&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1662331095564-86bdf5cd89f2?q=80&w=1170&auto=format&fit=crop",
    ],
    colors: ["#000000", "#0000FF", "#FFFFFF"],
    stock: 4,
    ratings: 4.8,
    reviews: 89,
    bestSeller: true,
  },
  {
    id: "5",
    name: "Honda CBR 1000RR-R Fireblade",
    slug: "honda-cbr-1000rr-r-fireblade",
    description: "The Honda CBR 1000RR-R Fireblade is a high-performance superbike with MotoGP-inspired aerodynamics and a powerful engine.",
    price: 2350000,
    category: "sport",
    manufacturer: "Honda",
    engineSize: "1000cc",
    power: "217 PS",
    topSpeed: "299 km/h",
    weight: "201 kg",
    fuelCapacity: "16.1L",
    images: [
      "https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?q=80&w=1171&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1552585140-bdeefd6b9d6a?q=80&w=1030&auto=format&fit=crop",
    ],
    colors: ["#FF0000", "#000000"],
    stock: 3,
    ratings: 4.7,
    reviews: 67,
    isNew: true,
  },
  {
    id: "6",
    name: "Suzuki Hayabusa",
    slug: "suzuki-hayabusa",
    description: "The Suzuki Hayabusa is a sport bike motorcycle made by Suzuki since 1999, known for being one of the world's fastest production motorcycles.",
    price: 1650000,
    category: "sport",
    manufacturer: "Suzuki",
    engineSize: "1340cc",
    power: "190 PS",
    topSpeed: "299 km/h",
    weight: "266 kg",
    fuelCapacity: "20L",
    images: [
      "https://images.unsplash.com/photo-1626093276581-35c244408ff9?q=80&w=1170&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581481615985-ba4775734a9b?q=80&w=1170&auto=format&fit=crop",
    ],
    colors: ["#000000", "#FFFFFF", "#FFD700"],
    stock: 2,
    ratings: 4.6,
    reviews: 101,
    bestSeller: true,
  },
  {
    id: "7",
    name: "Triumph Street Triple RS",
    slug: "triumph-street-triple-rs",
    description: "The Triumph Street Triple RS is a naked sport bike with a 765cc inline-three engine, known for its agility and precise handling.",
    price: 1250000,
    category: "naked",
    manufacturer: "Triumph",
    engineSize: "765cc",
    power: "123 PS",
    topSpeed: "260 km/h",
    weight: "166 kg",
    fuelCapacity: "17.4L",
    images: [
      "https://images.unsplash.com/photo-1641993685499-4b5a5a55fc71?q=80&w=1170&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1558980664-2506fca59a3a?q=80&w=1170&auto=format&fit=crop",
    ],
    colors: ["#000000", "#FFFFFF"],
    stock: 6,
    ratings: 4.5,
    reviews: 56,
    featured: true,
  },
  {
    id: "8",
    name: "KTM 1290 Super Duke R",
    slug: "ktm-1290-super-duke-r",
    description: "The KTM 1290 Super Duke R is a naked bike with a 1,301 cc V-twin engine, known as 'The Beast' for its aggressive styling and powerful performance.",
    price: 1850000,
    category: "naked",
    manufacturer: "KTM",
    engineSize: "1301cc",
    power: "180 PS",
    topSpeed: "290 km/h",
    weight: "189 kg",
    fuelCapacity: "16L",
    images: [
      "https://images.unsplash.com/photo-1591293835940-934a7c4f2d9b?q=80&w=1171&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1622185135505-2d795003994a?q=80&w=1170&auto=format&fit=crop",
    ],
    colors: ["#FFA500", "#000000"],
    stock: 3,
    ratings: 4.7,
    reviews: 42,
    isNew: true,
  },
  {
    id: "9",
    name: "Harley-Davidson Fat Boy",
    slug: "harley-davidson-fat-boy",
    description: "The Harley-Davidson Fat Boy is a V-twin softail cruiser motorcycle with solid-cast disc wheels and a powerful Milwaukee-Eight engine.",
    price: 1980000,
    category: "cruiser",
    manufacturer: "Harley-Davidson",
    engineSize: "1868cc",
    power: "93 PS",
    topSpeed: "180 km/h",
    weight: "317 kg",
    fuelCapacity: "18.9L",
    images: [
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=1170&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1558981359-219d6364c9c8?q=80&w=1170&auto=format&fit=crop",
    ],
    colors: ["#000000", "#C0C0C0", "#8B4513"],
    stock: 4,
    ratings: 4.6,
    reviews: 78,
    featured: true,
  },
  {
    id: "10",
    name: "BMW R 1250 GS Adventure",
    slug: "bmw-r-1250-gs-adventure",
    description: "The BMW R 1250 GS Adventure is a dual-sport motorcycle with a boxer engine, known for its off-road capabilities and touring comfort.",
    price: 2250000,
    category: "adventure",
    manufacturer: "BMW",
    engineSize: "1254cc",
    power: "136 PS",
    topSpeed: "220 km/h",
    weight: "268 kg",
    fuelCapacity: "30L",
    images: [
      "https://images.unsplash.com/photo-1581289011706-7669a7f8c222?q=80&w=1170&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1609630875171-b1321377ee65?q=80&w=1170&auto=format&fit=crop",
    ],
    colors: ["#000000", "#FFFFFF", "#0000FF"],
    stock: 3,
    ratings: 4.8,
    reviews: 91,
    bestSeller: true,
  },
  {
    id: "11",
    name: "Royal Enfield Interceptor 650",
    slug: "royal-enfield-interceptor-650",
    description: "The Royal Enfield Interceptor 650 is a classic roadster with a parallel-twin engine, inspired by the original Interceptor of the 1960s.",
    price: 300000,
    category: "custom",
    manufacturer: "Royal Enfield",
    engineSize: "648cc",
    power: "47 PS",
    topSpeed: "170 km/h",
    weight: "202 kg",
    fuelCapacity: "13.7L",
    images: [
      "https://images.unsplash.com/photo-1642185540449-e944e46e42ff?q=80&w=1170&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1642185539423-9a632fc70c7a?q=80&w=1171&auto=format&fit=crop",
    ],
    colors: ["#FF0000", "#000000", "#FFA500"],
    stock: 8,
    ratings: 4.5,
    reviews: 112,
    bestSeller: true,
  },
  {
    id: "12",
    name: "Ducati Multistrada V4",
    slug: "ducati-multistrada-v4",
    description: "The Ducati Multistrada V4 is an adventure touring motorcycle with a V4 engine and advanced electronic features for long-distance comfort.",
    price: 2350000,
    salePrice: 2150000,
    discount: 9,
    category: "adventure",
    manufacturer: "Ducati",
    engineSize: "1158cc",
    power: "170 PS",
    topSpeed: "250 km/h",
    weight: "215 kg",
    fuelCapacity: "22L",
    images: [
      "https://images.unsplash.com/photo-1635073908681-69d2819a8942?q=80&w=1272&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1605651202774-7d9ef9295187?q=80&w=1170&auto=format&fit=crop",
    ],
    colors: ["#FF0000", "#FFFFFF"],
    stock: 2,
    ratings: 4.9,
    reviews: 45,
    isNew: true,
    featured: true,
  },
  {
    id: "13",
    name: "TVS Apache RR 310",
    slug: "tvs-apache-rr-310",
    description: "The TVS Apache RR 310 is a sport bike with a 310cc single-cylinder engine, developed in partnership with BMW Motorrad.",
    price: 280000,
    category: "sport",
    manufacturer: "TVS",
    engineSize: "312.2cc",
    power: "34 PS",
    topSpeed: "160 km/h",
    weight: "174 kg",
    fuelCapacity: "11L",
    images: [
      "https://images.unsplash.com/photo-1502744688674-c619d1586c9e?q=80&w=1170&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1580626574134-3e3a164ef10c?q=80&w=1170&auto=format&fit=crop",
    ],
    colors: ["#FF0000", "#000000"],
    stock: 10,
    ratings: 4.4,
    reviews: 68,
  },
  {
    id: "14",
    name: "Kawasaki Z900",
    slug: "kawasaki-z900",
    description: "The Kawasaki Z900 is a naked motorcycle with a 948cc inline-four engine, known for its responsive power delivery and aggressive styling.",
    price: 825000,
    category: "naked",
    manufacturer: "Kawasaki",
    engineSize: "948cc",
    power: "125 PS",
    topSpeed: "240 km/h",
    weight: "212 kg",
    fuelCapacity: "17L",
    images: [
      "https://images.unsplash.com/photo-1580310614729-ccd69652491d?q=80&w=1170&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1635073908681-69d2819a8942?q=80&w=1272&auto=format&fit=crop",
    ],
    colors: ["#00FF00", "#000000"],
    stock: 5,
    ratings: 4.6,
    reviews: 51,
  },
  {
    id: "15",
    name: "Bajaj Dominar 400",
    slug: "bajaj-dominar-400",
    description: "The Bajaj Dominar 400 is a sports tourer with a 373.3cc single-cylinder engine, designed for comfortable long-distance touring.",
    price: 220000,
    salePrice: 200000,
    discount: 9,
    category: "touring",
    manufacturer: "Bajaj",
    engineSize: "373.3cc",
    power: "40 PS",
    topSpeed: "148 km/h",
    weight: "184 kg",
    fuelCapacity: "13L",
    images: [
      "https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?q=80&w=1171&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1552585140-bdeefd6b9d6a?q=80&w=1030&auto=format&fit=crop",
    ],
    colors: ["#008000", "#000000"],
    stock: 12,
    ratings: 4.2,
    reviews: 87,
  }
];

// Generate 50 more products based on the existing ones, with different variations
const generateMoreProducts = (): Product[] => {
  const additionalProducts: Product[] = [];
  const models = ["GT", "Sport", "RS", "Limited Edition", "Pro", "Touring", "Adventure", "Custom"];
  
  for (let i = 0; i < 50; i++) {
    const baseProduct = products[i % products.length];
    const modelSuffix = models[Math.floor(Math.random() * models.length)];
    
    additionalProducts.push({
      ...baseProduct,
      id: `${parseInt(baseProduct.id) + 100 + i}`,
      name: `${baseProduct.name} ${modelSuffix}`,
      slug: `${baseProduct.slug}-${modelSuffix.toLowerCase().replace(' ', '-')}`,
      price: Math.round(baseProduct.price * (0.8 + Math.random() * 0.4)),
      stock: Math.floor(Math.random() * 10) + 1,
      featured: Math.random() > 0.8,
      bestSeller: Math.random() > 0.8,
      isNew: Math.random() > 0.8,
    });
  }
  
  return additionalProducts;
};

export const allProducts = [...products, ...generateMoreProducts()];

export const getProductById = (id: string): Product | undefined => {
  return allProducts.find(product => product.id === id);
};

export const getProductBySlug = (slug: string): Product | undefined => {
  return allProducts.find(product => product.slug === slug);
};

export const getFeaturedProducts = (): Product[] => {
  return allProducts.filter(product => product.featured).slice(0, 10);
};

export const getBestSellerProducts = (): Product[] => {
  return allProducts.filter(product => product.bestSeller).slice(0, 10);
};

export const getNewProducts = (): Product[] => {
  return allProducts.filter(product => product.isNew).slice(0, 10);
};

export const getProductsByCategory = (category: string): Product[] => {
  return allProducts.filter(product => product.category === category);
};

export const getProductsByManufacturer = (manufacturer: string): Product[] => {
  return allProducts.filter(product => product.manufacturer === manufacturer);
};

export const getRelatedProducts = (productId: string, limit: number = 4): Product[] => {
  const product = getProductById(productId);
  if (!product) return [];
  
  return allProducts
    .filter(p => p.id !== productId && p.category === product.category)
    .sort(() => 0.5 - Math.random())
    .slice(0, limit);
};

export const categories = [
  { id: "sport", name: "Sport Bikes" },
  { id: "cruiser", name: "Cruiser Bikes" },
  { id: "touring", name: "Touring Bikes" },
  { id: "adventure", name: "Adventure Bikes" },
  { id: "naked", name: "Naked Bikes" },
  { id: "electric", name: "Electric Bikes" },
  { id: "custom", name: "Custom Bikes" },
];

export const manufacturers = [
  { id: "Honda", name: "Honda" },
  { id: "Yamaha", name: "Yamaha" },
  { id: "Kawasaki", name: "Kawasaki" },
  { id: "Suzuki", name: "Suzuki" },
  { id: "Ducati", name: "Ducati" },
  { id: "BMW", name: "BMW" },
  { id: "KTM", name: "KTM" },
  { id: "Triumph", name: "Triumph" },
  { id: "Harley-Davidson", name: "Harley-Davidson" },
  { id: "Royal Enfield", name: "Royal Enfield" },
  { id: "TVS", name: "TVS" },
  { id: "Bajaj", name: "Bajaj" },
];
