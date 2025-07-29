"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { DollarSign, Users, MousePointer, TrendingUp, Eye, Target } from 'lucide-react';

interface MetricsCardsProps {
  data: {
    revenue: number;
    revenueGrowth: number;
    impressions: number;
    impressionsGrowth: number;
    clicks: number;
    clicksGrowth: number;
    conversions: number;
    conversionsGrowth: number;
    ctr: number;
    ctrGrowth: number;
    roas: number;
    roasGrowth: number;
  };
}

export default function MetricsCards({ data }: MetricsCardsProps) {
  const metrics = [
    {
      title: "Total Revenue",
      value: `$${(data.revenue / 1000000).toFixed(1)}M`,
      growth: data.revenueGrowth,
      icon: DollarSign,
      gradient: "from-green-400 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20"
    },
    {
      title: "Total Impressions",
      value: `${(data.impressions / 1000000).toFixed(1)}M`,
      growth: data.impressionsGrowth,
      icon: Eye,
      gradient: "from-cyan-400 to-blue-500",
      bgGradient: "from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20"
    },
    {
      title: "Total Clicks",
      value: `${(data.clicks / 1000).toFixed(0)}K`,
      growth: data.clicksGrowth,
      icon: MousePointer,
      gradient: "from-purple-400 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20"
    },
    {
      title: "Conversions",
      value: data.conversions.toLocaleString(),
      growth: data.conversionsGrowth,
      icon: Target,
      gradient: "from-orange-400 to-red-500",
      bgGradient: "from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20"
    },
    {
      title: "Click-through Rate",
      value: `${data.ctr.toFixed(2)}%`,
      growth: data.ctrGrowth,
      icon: TrendingUp,
      gradient: "from-amber-400 to-yellow-500",
      bgGradient: "from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20"
    },
    {
      title: "ROAS",
      value: `${data.roas.toFixed(1)}x`,
      growth: data.roasGrowth,
      icon: DollarSign,
      gradient: "from-teal-400 to-cyan-500",
      bgGradient: "from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
      {metrics.map((metric, index) => {
        const Icon = metric.icon;
        const isPositive = metric.growth > 0;
        
        return (
          <Card 
            key={index} 
            className={`relative overflow-hidden backdrop-blur-sm bg-gradient-to-br ${metric.bgGradient} border-white/20 dark:border-gray-700/50 hover:scale-105 transition-all duration-300 hover:shadow-xl`}
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {metric.title}
              </CardTitle>
              <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${metric.gradient} flex items-center justify-center shadow-lg`}>
                <Icon className="h-5 w-5 text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                {metric.value}
              </div>
              <div className="flex items-center text-sm">
                <TrendingUp className={`h-4 w-4 mr-1 ${isPositive ? 'text-green-500 rotate-0' : 'text-red-500 rotate-180'}`} />
                <span className={isPositive ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}>
                  {isPositive ? '+' : ''}{metric.growth.toFixed(1)}%
                </span>
                <span className="text-gray-500 dark:text-gray-400 ml-1">vs last month</span>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}