import { Card } from "@/components/ui/card";
import { MapPin, Navigation } from "lucide-react";

const MapView = () => {
  return (
    <Card className="p-4 h-[600px] relative overflow-hidden">
      {/* Map Placeholder - In real app, integrate Google Maps or Mapbox */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-light/20 to-secondary-light/20 flex items-center justify-center">
        <div className="text-center">
          <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
            <MapPin className="w-10 h-10 text-white" />
          </div>
          <h3 className="text-xl font-bold mb-2">Interactive Map</h3>
          <p className="text-muted-foreground max-w-md">
            Map integration ready. Connect Google Maps or Mapbox API to display pharmacy locations.
          </p>
        </div>
      </div>

      {/* Mock Map Markers */}
      <div className="absolute top-20 left-20 animate-pulse">
        <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-lg">
          <MapPin className="w-6 h-6 text-white" />
        </div>
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-white px-3 py-1 rounded-lg shadow-md text-sm font-medium whitespace-nowrap">
          HealthPlus • ₹45
        </div>
      </div>

      <div className="absolute top-40 right-32 animate-pulse" style={{ animationDelay: "0.2s" }}>
        <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center shadow-lg">
          <MapPin className="w-6 h-6 text-white" />
        </div>
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-white px-3 py-1 rounded-lg shadow-md text-sm font-medium whitespace-nowrap">
          Apollo • ₹48
        </div>
      </div>

      <div className="absolute bottom-32 left-40 animate-pulse" style={{ animationDelay: "0.4s" }}>
        <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center shadow-lg">
          <MapPin className="w-6 h-6 text-white" />
        </div>
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-white px-3 py-1 rounded-lg shadow-md text-sm font-medium whitespace-nowrap">
          MediCare • ₹52
        </div>
      </div>

      {/* User Location */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-6 h-6 bg-destructive rounded-full border-4 border-white shadow-lg animate-pulse-slow" />
      </div>

      {/* Map Controls */}
      <div className="absolute bottom-4 right-4 flex flex-col gap-2">
        <button className="w-10 h-10 bg-white rounded-lg shadow-md hover:shadow-lg flex items-center justify-center transition-shadow">
          +
        </button>
        <button className="w-10 h-10 bg-white rounded-lg shadow-md hover:shadow-lg flex items-center justify-center transition-shadow">
          −
        </button>
        <button className="w-10 h-10 bg-primary text-white rounded-lg shadow-md hover:shadow-lg flex items-center justify-center transition-shadow">
          <Navigation className="w-5 h-5" />
        </button>
      </div>
    </Card>
  );
};

export default MapView;
