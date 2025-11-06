import { Pharmacy } from "@/components/PharmacyList"; // make sure Pharmacy type is exported
import { Truck } from "lucide-react";

interface FilterSidebarProps {
  pharmacies: Pharmacy[];
}

const FilterSidebar = ({ pharmacies }: FilterSidebarProps) => {
  // Function to calculate ETA in minutes based on distance (km)
  const calculateETA = (distanceKm: number, speedKmh = 40) => {
    if (!distanceKm) return "-";
    return Math.round((distanceKm / speedKmh) * 60); // returns minutes
  };

  return (
    <div className="w-full p-4 sidebar-container">
      <h2 className="sidebar-title">Time Required</h2>
      {pharmacies.map((pharmacy) => (
        <div key={pharmacy.id} className="pharmacy-card">
          <div className="pharmacy-left">
            <Truck className="pharmacy-icon" />
            <span className="pharmacy-name">{pharmacy.pharmacy_name}</span>
          </div>
          <div className="pharmacy-eta">
            {calculateETA(pharmacy.distance)} min (4-wheeler)
          </div>
        </div>
      ))}

      {/* CSS inside same file */}
      <style>{`
        .sidebar-container {
          background: #f9fafb; /* subtle light gray background */
          border-radius: 0.5rem;
        }

        .sidebar-title {
          font-weight: 700;
          margin-bottom: 1rem;
          font-size: 1.25rem;
          color: #111827; /* dark gray */
        }

        .pharmacy-card {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem;
          margin-bottom: 0.5rem;
          background: #ffffff;
          border: 1px solid #e5e7eb;
          border-radius: 0.5rem;
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
          transition: box-shadow 0.2s ease;
          word-wrap: break-word;
        }

        .pharmacy-card:hover {
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .pharmacy-left {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .pharmacy-icon {
          width: 1.25rem;
          height: 1.25rem;
          color: #3b82f6; /* blue */
        }

        .pharmacy-name {
          font-weight: 500;
          color: #1f2937; /* dark gray */
          word-wrap: break-word;
        }

        .pharmacy-eta {
          font-size: 0.875rem;
          color: #6b7280; /* gray */
        }
      `}</style>
    </div>
  );
};

export default FilterSidebar;
