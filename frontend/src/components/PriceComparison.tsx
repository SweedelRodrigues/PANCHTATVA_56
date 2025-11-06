import { Card } from "@/components/ui/card";
import { TrendingDown, TrendingUp, Minus } from "lucide-react";

interface PriceComparisonProps {
  medicineName: string;
}

const PriceComparison = ({ medicineName }: PriceComparisonProps) => {
  const priceData = {
    lowest: 45,
    highest: 60,
    average: 52,
    savings: 15,
  };

  return (
    <Card className="p-6 bg-gradient-to-r from-primary-light/40 to-secondary-light/40 border-0">
      <h3 className="text-lg font-bold mb-4">Price Comparison</h3>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-card/80 backdrop-blur-sm p-4 rounded-xl">
          <div className="flex items-center gap-2 mb-2">
            <div className="p-2 bg-success-light rounded-lg">
              <TrendingDown className="w-4 h-4 text-success" />
            </div>
            <span className="text-sm text-muted-foreground">Lowest Price</span>
          </div>
          <div className="text-2xl font-bold text-success">₹{priceData.lowest}</div>
        </div>

        <div className="bg-card/80 backdrop-blur-sm p-4 rounded-xl">
          <div className="flex items-center gap-2 mb-2">
            <div className="p-2 bg-destructive/10 rounded-lg">
              <TrendingUp className="w-4 h-4 text-destructive" />
            </div>
            <span className="text-sm text-muted-foreground">Highest Price</span>
          </div>
          <div className="text-2xl font-bold text-destructive">₹{priceData.highest}</div>
        </div>

        <div className="bg-card/80 backdrop-blur-sm p-4 rounded-xl">
          <div className="flex items-center gap-2 mb-2">
            <div className="p-2 bg-secondary-light rounded-lg">
              <Minus className="w-4 h-4 text-secondary" />
            </div>
            <span className="text-sm text-muted-foreground">Average Price</span>
          </div>
          <div className="text-2xl font-bold text-secondary">₹{priceData.average}</div>
        </div>

        <div className="bg-card/80 backdrop-blur-sm p-4 rounded-xl">
          <div className="flex items-center gap-2 mb-2">
            <div className="p-2 bg-primary-light rounded-lg">
              <TrendingDown className="w-4 h-4 text-primary" />
            </div>
            <span className="text-sm text-muted-foreground">You Can Save</span>
          </div>
          <div className="text-2xl font-bold text-primary">₹{priceData.savings}</div>
        </div>
      </div>

      <div className="mt-4 p-3 bg-success-light/50 rounded-lg border border-success/20">
        <p className="text-sm text-success-foreground">
          💡 <span className="font-semibold">Smart Tip:</span> Choosing the recommended pharmacy saves you ₹{priceData.savings} while ensuring stock availability!
        </p>
      </div>
    </Card>
  );
};

export default PriceComparison;
