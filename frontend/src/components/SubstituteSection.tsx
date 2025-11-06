import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, ArrowLeft } from "lucide-react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const SubstituteSection = () => {
  const [medicine, setMedicine] = useState("");
  const [substitutes, setSubstitutes] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSearch = async () => {
    if (!medicine) {
      toast.error("Please enter a medicine name");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/api/substitutes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ medicineName: medicine }),
      });

      const data = await response.json();

      if (data.substitutes && data.substitutes.length > 0) {
        setSubstitutes(data.substitutes);
        toast.success("Substitutes found!");
      } else {
        setSubstitutes([]);
        toast.warning("No substitutes found for this medicine");
      }
    } catch (error) {
      console.error("Error fetching substitutes:", error);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Back to Home */}
      <div className="max-w-6xl mx-auto flex justify-start mb-8">
        <Button
          variant="outline"
          onClick={() => navigate("/")}
          className="flex items-center gap-2 hover:bg-primary-light transition-colors border-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Button>
      </div>

      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-2">Find Medicine Substitutes</h2>
        <p className="text-muted-foreground mb-8">
          Enter a medicine name to discover similar alternatives with the same composition.
        </p>

        {/* Input + Button */}
        <div className="flex gap-4 justify-center">
          <Input
            placeholder="Enter medicine name..."
            value={medicine}
            onChange={(e) => setMedicine(e.target.value)}
            className="w-full max-w-md h-12 text-lg"
          />
          <Button
            onClick={handleSearch}
            disabled={loading}
            className="h-12 px-6 text-lg bg-gradient-primary hover:opacity-90 transition-opacity"
          >
            {loading ? "Searching..." : (
              <>
                <Search className="w-5 h-5 mr-2" /> Search
              </>
            )}
          </Button>
        </div>

        {/* Results Section */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {substitutes.map((sub, idx) => (
            <Card
              key={idx}
              className="p-6 shadow-md hover:shadow-xl transition-all border-t-4 border-primary hover:scale-105"
            >
              <h3 className="text-xl font-semibold mb-2">{sub}</h3>
              <p className="text-sm text-muted-foreground">
                Equivalent substitute medicine
              </p>
            </Card>
          ))}
        </div>

        {substitutes.length === 0 && !loading && (
          <p className="mt-10 text-muted-foreground text-center">
            No substitutes yet — try searching above.
          </p>
        )}
      </div>
    </div>
  );
};

export default SubstituteSection;
