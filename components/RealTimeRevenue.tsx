import React, { useState, useEffect } from "react";

const formatRevenue = (value: number) => {
  // Format as $12.5M (one decimal)
  return `$${(value / 1_000_000).toFixed(1)}M`;
};

export default function RealTimeRevenue() {
  // Let's start with $12.5M (12,500,000)
  const [revenue, setRevenue] = useState(12_500_000);

  useEffect(() => {
    const interval = setInterval(() => {
      setRevenue((prev) => prev + Math.floor(Math.random() * 10000 + 5000)); // Increase by $5k-$15k
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center py-8">
      <h2 className="text-lg font-semibold text-gray-500 mb-2">Revenue</h2>
      <span
        className="text-4xl font-bold transition-all duration-700 text-green-600"
      >
        {formatRevenue(revenue)}
      </span>
      <span className="mt-2 text-xs text-gray-400">
        Updated every 5 seconds
      </span>
    </div>
  );
}