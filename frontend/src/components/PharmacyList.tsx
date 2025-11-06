import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Navigation } from "lucide-react";
import { SearchFilters } from "@/types";

// Calculates ETA in minutes based on distance (km) and average speed (km/h)
const calculateETA = (distanceKm: number, speedKmh = 40) => {
  if (!distanceKm) return "-";
  return Math.round((distanceKm / speedKmh) * 60); // minutes
};


export interface Pharmacy {
  id: string;
  pharmacy_name: string;
  address: string;
  latitude?: number;
  longitude?: number;
  medicine_name: string;
  dosage: string;
  price: number;
  quantity: string;
  distance? : number;
}

interface PharmacyListProps {
  filters: SearchFilters;
  medicineName: string;
  pharmacies: Pharmacy[];
}

const PharmacyList = ({ filters, medicineName, pharmacies }: PharmacyListProps) => {
  if (!pharmacies || pharmacies.length === 0) {
    return (
      <p className="text-center py-8 text-gray-500">
        No pharmacies available for {medicineName}.
      </p>
    );
  }

  return (
    <div className="space-y-4">
      {pharmacies.map((pharmacy, index) => (
        <Card
          key={pharmacy.id}
          className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 border-transparent"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Left Section */}
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-1">{pharmacy.pharmacy_name}</h3>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                <MapPin className="w-4 h-4" />
                <span>{pharmacy.address}</span>
              </div>
              <div className="text-sm text-muted-foreground space-y-1">
                <p>
                  Medicine: <span className="font-semibold">{pharmacy.medicine_name}</span> ({pharmacy.dosage})
                </p>
                <p>Quantity: {pharmacy.quantity}</p>
                <p>
                  Distance: <span className="font-semibold">{pharmacy.distance?.toFixed(2)} km</span>
                </p>

              </div>
            </div>

            {/* Right Section - Price and Actions */}
            <div className="flex flex-col items-end gap-3 min-w-[200px]">
              <div className="text-right">
                <div className="text-3xl font-bold text-primary">₹{pharmacy.price}</div>
                <div className="text-sm text-muted-foreground">per unit</div>
              </div>

              <div className="flex gap-2 w-full">
                <Button variant="outline" size="sm" className="flex-1">
                  <Phone className="w-4 h-4 mr-1" />
                  Call
                </Button>
                {/* <Button size="sm" className="flex-1 bg-gradient-primary">
                  <Navigation className="w-4 h-4 mr-1" />
                  Navigate
                </Button> */}
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default PharmacyList;
