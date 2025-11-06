import { useState } from "react";
import { Search, MapPin, Upload, Sparkles, TrendingDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";

interface SearchSectionProps {
  onSearch: (medicine: string, city: string, pincode: string) => void;
  onNewSearch?: () => void; // optional callback to reset previous results
}

const SearchSection = ({ onSearch, onNewSearch }: SearchSectionProps) => {
  const [medicine, setMedicine] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");

  const handleSearch = () => {
    if (!medicine || !city || !pincode) {
      toast.error("Please fill in all fields");
      return;
    }

    // Reset previous results if callback provided
    if (onNewSearch) onNewSearch();

    onSearch(medicine, city, pincode);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      toast.success("Prescription uploaded! AI extraction coming soon...");
      // In real app, this would use AI to extract medicine names
    }
  };

  const popularMedicines = [
    "Paracetamol 500mg",
    "Amoxicillin 250mg",
    "Omeprazole 20mg",
    "Metformin 500mg",
    "Aspirin 75mg",
    "Ibuprofen 400mg",
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        {/* Main Search Card */}
        <Card className="p-8 shadow-xl border-0 bg-card/80 backdrop-blur-sm">
          <div className="flex items-center justify-between mb-6">
  <div className="flex items-center gap-3">
    <div className="p-3 bg-gradient-primary rounded-xl">
      <Search className="w-6 h-6 text-white" />
    </div>
    <div>
      <h2 className="text-2xl font-bold">Search for Medicine</h2>
      <p className="text-muted-foreground">Enter medicine name and your location</p>
    </div>
  </div>

  {/* Right side button */}
  <Button
    variant="outline"
    className="text-sm border-2 hover:bg-primary hover:text-white transition-all"
    onClick={() => window.location.href = "/substitutes"} // adjust route later
  >
    View Substitutes
  </Button>
</div>


          {/* Medicine Input */}
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium">Medicine Name</label>
              <div className="relative">
                <Input
                  placeholder="e.g., Paracetamol 500mg, Aspirin, etc."
                  value={medicine}
                  onChange={(e) => setMedicine(e.target.value)}
                  className="pl-10 h-12 text-lg"
                />
                <Sparkles className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              </div>
            </div>

            {/* Location Inputs */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">City</label>
                <div className="relative">
                  <Input
                    placeholder="Enter your city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="pl-10 h-12"
                  />
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Pincode</label>
                <Input
                  placeholder="6-digit pincode"
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value)}
                  maxLength={6}
                  className="h-12"
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={handleSearch}
                className="flex-1 h-12 text-lg bg-gradient-primary hover:opacity-90 transition-opacity"
              >
                <Search className="w-5 h-5 mr-2" />
                Search Medicine
              </Button>

              <Button
                variant="outline"
                className="h-12 text-lg border-2 hover:bg-secondary-light transition-colors"
                onClick={() => document.getElementById("prescription-upload")?.click()}
              >
                <Upload className="w-5 h-5 mr-2" />
                Upload Prescription
              </Button>

              <input
                id="prescription-upload"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageUpload}
              />
            </div>
          </div>
        </Card>

        {/* Popular Medicines */}
        <div className="mt-12">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" />
            Popular Searches
          </h3>
          <div className="flex flex-wrap gap-3">
            {popularMedicines.map((med) => (
              <button
                key={med}
                onClick={() => setMedicine(med)}
                className="px-4 py-2 bg-card hover:bg-primary-light border border-border hover:border-primary rounded-full text-sm font-medium transition-all hover:scale-105"
              >
                {med}
              </button>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-white" />
            </div>
            <h4 className="font-semibold mb-2">1. Search Medicine</h4>
            <p className="text-sm text-muted-foreground">Enter medicine name or upload prescription</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-secondary rounded-2xl flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <h4 className="font-semibold mb-2">2. Find Nearby</h4>
            <p className="text-sm text-muted-foreground">AI locates pharmacies with real-time stock</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
              <TrendingDown className="w-8 h-8 text-white" />
            </div>
            <h4 className="font-semibold mb-2">3. Best Price</h4>
            <p className="text-sm text-muted-foreground">Compare prices and get recommendations</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
