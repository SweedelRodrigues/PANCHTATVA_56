import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { List, Settings2 } from "lucide-react";
import PharmacyList from "@/components/PharmacyList";
import FilterSidebar from "@/components/FilterSidebar";
import PriceComparison from "@/components/PriceComparison";
import SubstituteSuggestions from "@/components/SubstituteSuggestions";
import { SearchFilters } from "@/types";

// Pharmacy type according to backend data
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
  pharmacies?: Pharmacy[]; // optional to prevent crash
}

interface ResultsSectionProps {
  searchQuery: string;
  location: { city: string; pincode: string };
  filters: SearchFilters;
  onFilterChange: (filters: SearchFilters) => void;
  results: ResultsData | null;
}

const ResultsSection = ({
  searchQuery,
  location,
  filters,
  onFilterChange,
  results,
}: ResultsSectionProps) => {
  const [showFilters, setShowFilters] = useState(false);

  // ✅ Safe check using optional chaining
  if (!results || !results.pharmacies || results.pharmacies.length === 0) {
    return (
      <p className="text-center py-8 text-gray-500">
        No pharmacies found. Please search again.
      </p>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-3xl font-bold mb-2">
          Results for <span className="text-primary">{results.medicine}</span>
        </h2>
        <p className="text-muted-foreground">
          {results.city}, {results.pincode} • Found {results.pharmacies.length} pharmacies nearby
        </p>
      </div>

      {/* Price Comparison */}
      <PriceComparison medicineName={results.medicine} />

      <div className="grid lg:grid-cols-4 gap-6 mt-6">
        {/* Filters Sidebar */}
        <div className={`lg:col-span-1 ${showFilters ? "block" : "hidden lg:block"}`}>
          <FilterSidebar pharmacies={results.pharmacies || []} />
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          <Tabs defaultValue="list" className="w-full">
            <div className="flex justify-between items-center mb-4">
              <TabsList className="bg-muted">
                <TabsTrigger value="list" className="flex items-center gap-2">
                  <List className="w-4 h-4" />
                  List View
                </TabsTrigger>
              </TabsList>

              <button
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg"
              >
                <Settings2 className="w-4 h-4" />
                Filters
              </button>
            </div>

            <TabsContent value="list">
              <PharmacyList
                filters={filters}
                medicineName={results.medicine}
                pharmacies={results.pharmacies || []} // fallback to empty array
              />
            </TabsContent>
          </Tabs>

          {/* Substitute Suggestions
          <div className="mt-8">
            <SubstituteSuggestions medicineName={results.medicine} />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ResultsSection;
