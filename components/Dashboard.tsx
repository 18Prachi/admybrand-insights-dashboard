"use client";

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Moon, Sun, TrendingUp, Users, MousePointer, DollarSign, Radio, Tv, Smartphone, Keyboard as Billboard, UserCheck, Newspaper } from 'lucide-react';
import { useTheme } from 'next-themes';
import MetricsCards from '@/components/MetricsCards';
import ChartsSection from '@/components/ChartsSection';
import DataTable from '@/components/DataTable';
import { generateMockData } from '@/lib/mockData';
import RealTimeRevenue from "@/components/RealTimeRevenue";

export default function Dashboard() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mockData, setMockData] = useState<any>(null);

  useEffect(() => {
    setMounted(true);
    setMockData(generateMockData());
  }, []);

  if (!mounted || !mockData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-purple-50 to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cyan-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-purple-50 to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-all duration-300">
      {/* Header */}
      <header className="border-b border-white/20 dark:border-gray-700/50 backdrop-blur-xl bg-white/30 dark:bg-gray-800/30 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent">
                  ADmyBRAND Insights
                </h1>
                <p className="text-sm text-gray-600 dark:text-gray-300">Omnichannel Analytics Platform</p>
              </div>
            </div>
            
            <Button
              variant="outline"
              size="sm"
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              className="border-white/20 backdrop-blur-sm hover:bg-white/20 dark:hover:bg-gray-700/50 transition-all duration-200"
            >
              {theme === 'light' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Welcome back, Marketing Pro! 👋
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Here's your omnichannel advertising performance overview
          </p>
        </div>

        {/* Real-Time Revenue Section */}
        <div className="mb-8">
          <RealTimeRevenue />
        </div>

        {/* Metrics Cards */}
        <MetricsCards data={mockData.metrics} />

        {/* Charts Section */}
        <ChartsSection data={mockData} />

        {/* Data Table */}
        <DataTable data={mockData.campaigns} />
      </main>
    </div>
  );
}