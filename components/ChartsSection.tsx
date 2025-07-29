"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface ChartsSectionProps {
  data: {
    revenueByMonth: any[];
    channelPerformance: any[];
    channelDistribution: any[];
    conversionFunnel: any[];
  };
}

export default function ChartsSection({ data }: ChartsSectionProps) {
  const channelColors = {
    'Outdoor': '#06B6D4',
    'TV': '#8B5CF6',
    'Radio': '#F59E0B',
    'Mobile': '#EF4444',
    'Influencer': '#10B981',
    'Newspaper': '#6366F1'
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
      {/* Revenue Trend */}
      <Card className="backdrop-blur-sm bg-white/50 dark:bg-gray-800/50 border-white/20 dark:border-gray-700/50">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-white">Revenue Trend</CardTitle>
          <CardDescription>Monthly revenue performance across all channels</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={data.revenueByMonth}>
              <defs>
                <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#06B6D4" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#06B6D4" stopOpacity={0.1}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis dataKey="month" stroke="#6B7280" />
              <YAxis stroke="#6B7280" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.95)', 
                  border: '1px solid #E5E7EB',
                  borderRadius: '8px'
                }} 
              />
              <Area 
                type="monotone" 
                dataKey="revenue" 
                stroke="#06B6D4" 
                fillOpacity={1} 
                fill="url(#revenueGradient)"
                strokeWidth={3}
              />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Channel Performance */}
      <Card className="backdrop-blur-sm bg-white/50 dark:bg-gray-800/50 border-white/20 dark:border-gray-700/50">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-white">Channel Performance</CardTitle>
          <CardDescription>ROAS comparison across advertising channels</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data.channelPerformance}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis dataKey="channel" stroke="#6B7280" />
              <YAxis stroke="#6B7280" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.95)', 
                  border: '1px solid #E5E7EB',
                  borderRadius: '8px'
                }} 
              />
              <Bar dataKey="roas" radius={[4, 4, 0, 0]}>
                {data.channelPerformance.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={channelColors[entry.channel as keyof typeof channelColors]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Channel Distribution */}
      <Card className="backdrop-blur-sm bg-white/50 dark:bg-gray-800/50 border-white/20 dark:border-gray-700/50">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-white">Budget Distribution</CardTitle>
          <CardDescription>Ad spend allocation across channels</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={data.channelDistribution}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={120}
                paddingAngle={5}
                dataKey="value"
              >
                {data.channelDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={channelColors[entry.name as keyof typeof channelColors]} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.95)', 
                  border: '1px solid #E5E7EB',
                  borderRadius: '8px'
                }} 
              />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Conversion Funnel */}
      <Card className="backdrop-blur-sm bg-white/50 dark:bg-gray-800/50 border-white/20 dark:border-gray-700/50">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-white">Conversion Funnel</CardTitle>
          <CardDescription>User journey from impression to conversion</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart 
              data={data.conversionFunnel} 
              layout="vertical" 
              margin={{ top: 20, right: 30, left: 80, bottom: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis 
                type="number" 
                stroke="#6B7280" 
                tickFormatter={(value) => `${value}M`}
                domain={[0, 'dataMax']}
              />
              <YAxis 
                dataKey="stage" 
                type="category" 
                stroke="#6B7280" 
                width={75}
                tick={{ fontSize: 11 }}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.95)', 
                  border: '1px solid #E5E7EB',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }} 
                formatter={(value) => [`${value}M`, 'Users']}
              />
              <Bar 
                dataKey="users" 
                fill="#8B5CF6" 
                radius={[0, 4, 4, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}