import fs from "fs";
import path from "path";

// Load dataset once
const datasetPath = path.join(process.cwd(), "medicineDataset.json");
let medicines = [];

try {
  const data = fs.readFileSync(datasetPath, "utf-8");
  medicines = JSON.parse(data);
  console.log(`Loaded ${medicines.length} medicine records`);
} catch (err) {
  console.error("Error loading medicine dataset:", err);
}

// Normalize ingredient: lowercase, remove numbers, units, punctuation
const normalizeIngredient = (text) => {
  if (!text) return "";
  return text
    .toLowerCase()
    .replace(/\d+(\.\d+)?\s?(mg|ml|g|mcg)/g, "")
    .replace(/[^\w]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
};

// Split composition into array of normalized ingredients
const splitIngredients = (composition) => {
  if (!composition) return [];
  return composition
    .split(/,|\+|and/i)
    .map((ing) => normalizeIngredient(ing))
    .filter((ing) => ing.length > 0);
};

// Function to get substitutes
export const getSubstitutes = (req, res) => {
  const { medicineName } = req.body;

  if (!medicineName) {
    return res.status(400).json({ error: "medicineName is required" });
  }

  // Find record by name (case-insensitive)
  const record = medicines.find(
    (med) => med.name.toLowerCase() === medicineName.toLowerCase()
  );

  if (!record) {
    return res.json({ substitutes: [] });
  }

  const recordIngredients = splitIngredients(record.short_composition1);

  // Find substitutes: medicines that contain all ingredients of the original
  const substitutes = medicines
    .filter((med) => med.id !== record.id)
    .filter((med) => {
      const medIngredients = splitIngredients(med.short_composition1);
      // partial match: every ingredient in record must exist in med
      return recordIngredients.every((ing) => medIngredients.includes(ing));
    })
    .map((med) => med.name);

  return res.json({
    substitutes,
    composition: record.short_composition1,
    pack_size: record.pack_size_label,
    manufacturer: record.manufacturer_name,
  });
};
