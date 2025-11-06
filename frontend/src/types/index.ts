export interface Medicine {
  id: string;
  name: string;
  genericName: string;
  manufacturer: string;
  dosage: string;
  form: string;
  category: string;
}

export interface Pharmacy {
  id: string;
  name: string;
  address: string;
  city: string;
  pincode: string;
  distance: number;
  rating: number;
  phone: string;
  openNow: boolean;
  coordinates: {
    lat: number;
    lng: number;
  };
  medicines: PharmacyMedicine[];
}

export interface PharmacyMedicine {
  medicineId: string;
  medicineName: string;
  price: number;
  inStock: boolean;
  stockLevel: "high" | "medium" | "low";
  expiryDate: string;
}

export interface SearchFilters {
  maxDistance: number;
  maxPrice: number;
  sortBy: "recommended" | "price" | "distance" | "rating";
  inStock: boolean;
}

export interface SubstituteMedicine extends Medicine {
  similarity: number;
  priceDifference: number;
}
