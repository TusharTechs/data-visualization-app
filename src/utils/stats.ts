// Define the structure of wine data entry
export interface WineData {
  Alcohol: number;
  Flavanoids: number;
  Class: number;
  Ash: number;
  Hue: number;
  Magnesium: number;
}

// Define the structure for flavanoids statistics
export interface FlavanoidsResult {
  mean: number;
  median: number;
  mode: number;
}

// Define the structure for gamma statistics
export interface GammaResult {
  mean: number;
  median: number;
  mode: number;
}

// Function to calculate flavanoids statistics for each class
export function calculateFlavanoidsStats(
  data: WineData[]
): Record<string, FlavanoidsResult> {
  const classStats: Record<string, FlavanoidsResult> = {};
  const uniqueClasses = Array.from(new Set(data.map((entry) => entry.Alcohol)));

  uniqueClasses.forEach((currentClass) => {
    const flavanoidsData = data
      .filter((entry) => entry.Alcohol === currentClass)
      .map((entry) => entry.Flavanoids);

    const mean = calculateMean(flavanoidsData);
    const median = calculateMedian(flavanoidsData);
    const mode = calculateMode(flavanoidsData);

    classStats[`Class ${currentClass}`] = {
      mean,
      median,
      mode,
    };
  });

  return classStats;
}

// Function to calculate gamma statistics for each class
export function calculateGammaStats(
  data: WineData[]
): Record<string, GammaResult> {
  const classStats: Record<string, GammaResult> = {};
  const uniqueClasses = Array.from(new Set(data.map((entry) => entry.Alcohol)));

  uniqueClasses.forEach((currentClass) => {
    const gammaData = data
      .filter((entry) => entry.Alcohol === currentClass)
      .map((entry) => (entry.Ash * entry.Hue) / entry.Magnesium);

    const mean = calculateMean(gammaData);
    const median = calculateMedian(gammaData);
    const mode = calculateMode(gammaData);

    classStats[`Class ${currentClass}`] = {
      mean,
      median,
      mode,
    };
  });

  return classStats;
}

// Function to calculate the mean of an array of numbers
function calculateMean(data: number[]): number {
  return data.reduce((sum, value) => sum + value, 0) / data.length;
}

// Function to calculate the median of an array of numbers
function calculateMedian(data: number[]): number {
  const sortedData = data.slice().sort((a, b) => a - b);
  const middle = Math.floor(sortedData.length / 2);

  if (sortedData.length % 2 === 0) {
    return (sortedData[middle - 1] + sortedData[middle]) / 2;
  } else {
    return sortedData[middle];
  }
}

// Function to calculate the mode of an array of numbers
function calculateMode(data: number[]): number {
  const frequencyMap: Record<number, number> = {};

  data.forEach((value) => {
    frequencyMap[value] = (frequencyMap[value] || 0) + 1;
  });

  let mode: number[] = [];
  let maxFrequency = 0;

  for (const value in frequencyMap) {
    const frequency = frequencyMap[value];
    if (frequency > maxFrequency) {
      mode = [Number(value)];
      maxFrequency = frequency;
    } else if (frequency === maxFrequency) {
      mode.push(Number(value));
    }
  }

  return mode.length > 0 ? mode[0] : NaN;
}
