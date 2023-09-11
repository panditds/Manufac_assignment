
// Function to calculate the mean
function calculateMean(data: number[]): number {
  const sum = data.reduce((acc, value) => acc + value, 0);
  return sum / data.length;
}

// Function to calculate the median
function calculateMedian(data: number[]): number {
  const sortedData = [...data].sort((a, b) => a - b);
  const middle = Math.floor(sortedData.length / 2);

  return sortedData.length % 2 === 0
    ? (sortedData[middle - 1] + sortedData[middle]) / 2
    : sortedData[middle];
}

// Function to calculate the mode
function calculateMode(data: number[]): number {
  const counts: Map<number, number> = new Map();
  let mode = data[0];
  let maxCount = 1;

  for (const value of data) {
    const count = (counts.get(value) || 0) + 1;
    counts.set(value, count);

    if (count > maxCount) {
      mode = value;
      maxCount = count;
    }
  }

  return mode;
}


export { calculateMean, calculateMedian, calculateMode };
