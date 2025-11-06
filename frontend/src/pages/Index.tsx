import axios from "axios";
import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import SearchSection from "@/components/SearchSection";
import ResultsSection from "@/components/ResultsSection";
import Footer from "@/components/Footer";
import { SearchFilters } from "@/types";

interface Pharmacy {
  id: string;
  pharmacy_name: string;
  address: string;
  latitude?: number;
  longitude?: number;
  medicine_name: string;
  dosage: string;
  price: number;
  quantity: string;
}

interface ResultsData {
  medicine: string;
  city: string;
  pincode: string;
  pharmacies?: Pharmacy[];
}

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState({ city: "", pincode: "" });
  const [filters, setFilters] = useState<SearchFilters>({
    maxDistance: 10,
    maxPrice: 1000,
    sortBy: "recommended",
    inStock: true,
  });
  const [showResults, setShowResults] = useState(false);
  const [searchStatus, setSearchStatus] = useState<string>("");
  const [results, setResults] = useState<ResultsData | null>(null);

  const handleSearch = async (medicine: string, city: string, pincode: string) => {
    setSearchStatus("");
    setShowResults(false);

    try {
      // ✅ Single backend call (your /api/search handles both)
      const response = await axios.post("http://localhost:5000/api/search", {
        medicine,
        city,
        pincode,
      });

      console.log("Search API Response:", response.data);

      setResults({
        medicine,
        city,
        pincode,
        pharmacies: response.data?.pharmacies || [],
      });

      setSearchQuery(medicine);
      setLocation({ city, pincode });
      setSearchStatus("Search completed successfully!");
      setShowResults(true);
    } catch (error) {
      console.error("Search API Error:", error);
      setSearchStatus("Error fetching results. Please try again.");
      setResults(null);
      setShowResults(false);
    }
  };

  return (
    <div className="min-h-screen">
      <HeroSection onSearch={handleSearch} />

      <div className="bg-gradient-to-br from-secondary-light/20 via-background to-accent-light/20 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.05),transparent_50%),radial-gradient(circle_at_70%_60%,hsl(var(--secondary)/0.05),transparent_50%)]"></div>
        <div className="relative">
          {!showResults ? (
            <SearchSection onSearch={handleSearch} />
          ) : (
            <ResultsSection
              searchQuery={searchQuery}
              location={location}
              filters={filters}
              onFilterChange={setFilters}
              results={results}
            />
          )}
        </div>
      </div>

      {searchStatus && (
        <div
          className={`text-center py-4 font-semibold ${
            searchStatus.includes("Error") ? "text-red-600" : "text-green-600"
          }`}
        >
          {searchStatus}
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Index;
