export function generateMockData() {
  // Key metrics
  const metrics = {
    revenue: 12500000, // $12.5M
    revenueGrowth: 23.5,
    impressions: 145000000, // 145M
    impressionsGrowth: 18.2,
    clicks: 2350000, // 2.35M
    clicksGrowth: 15.8,
    conversions: 89500,
    conversionsGrowth: 28.3,
    ctr: 1.62,
    ctrGrowth: 12.1,
    roas: 4.2,
    roasGrowth: 19.7
  };

  // Revenue by month
  const revenueByMonth = [
    { month: 'Jan', revenue: 850000 },
    { month: 'Feb', revenue: 920000 },
    { month: 'Mar', revenue: 1100000 },
    { month: 'Apr', revenue: 980000 },
    { month: 'May', revenue: 1250000 },
    { month: 'Jun', revenue: 1450000 },
    { month: 'Jul', revenue: 1380000 },
    { month: 'Aug', revenue: 1520000 },
    { month: 'Sep', revenue: 1680000 },
    { month: 'Oct', revenue: 1750000 },
    { month: 'Nov', revenue: 1820000 },
    { month: 'Dec', revenue: 1950000 }
  ];

  // Channel performance
  const channelPerformance = [
    { channel: 'Outdoor', roas: 3.8, budget: 2500000, impressions: 45000000 },
    { channel: 'TV', roas: 4.5, budget: 3200000, impressions: 32000000 },
    { channel: 'Radio', roas: 3.2, budget: 1800000, impressions: 28000000 },
    { channel: 'Mobile', roas: 5.1, budget: 2800000, impressions: 65000000 },
    { channel: 'Influencer', roas: 6.2, budget: 1500000, impressions: 18000000 },
    { channel: 'Newspaper', roas: 2.9, budget: 900000, impressions: 12000000 }
  ];

  // Channel distribution (pie chart)
  const channelDistribution = [
    { name: 'Outdoor', value: 20 },
    { name: 'TV', value: 25 },
    { name: 'Radio', value: 14 },
    { name: 'Mobile', value: 22 },
    { name: 'Influencer', value: 12 },
    { name: 'Newspaper', value: 7 }
  ];

  // Conversion funnel
  const conversionFunnel = [
    { stage: 'Impressions', users: 145 },
    { stage: 'Clicks', users: 23.5 },
    { stage: 'Visits', users: 18.9 },
    { stage: 'Leads', users: 2.45 },
    { stage: 'Conversions', users: 0.895 }
  ];

  // Campaign data
  const campaigns = [
    {
      id: '1',
      name: 'Summer Fashion Campaign',
      channel: 'Outdoor',
      status: 'Active',
      budget: 250000,
      spent: 185000,
      impressions: 3500000,
      clicks: 52000,
      conversions: 1850,
      roas: 3.8
    },
    {
      id: '2',
      name: 'Prime Time TV Ads',
      channel: 'TV',
      status: 'Active',
      budget: 400000,
      spent: 380000,
      impressions: 2800000,
      clicks: 45000,
      conversions: 2100,
      roas: 4.5
    },
    {
      id: '3',
      name: 'Morning Drive Radio',
      channel: 'Radio',
      status: 'Completed',
      budget: 150000,
      spent: 150000,
      impressions: 1200000,
      clicks: 18000,
      conversions: 850,
      roas: 3.2
    },
    {
      id: '4',
      name: 'Mobile App Install',
      channel: 'Mobile',
      status: 'Active',
      budget: 300000,
      spent: 220000,
      impressions: 5200000,
      clicks: 125000,
      conversions: 4200,
      roas: 5.1
    },
    {
      id: '5',
      name: 'Fitness Influencer Collab',
      channel: 'Influencer',
      status: 'Active',
      budget: 180000,
      spent: 95000,
      impressions: 850000,
      clicks: 28000,
      conversions: 1650,
      roas: 6.2
    },
    {
      id: '6',
      name: 'Weekend Edition Ads',
      channel: 'Newspaper',
      status: 'Paused',
      budget: 80000,
      spent: 45000,
      impressions: 450000,
      clicks: 8500,
      conversions: 380,
      roas: 2.9
    },
    {
      id: '7',
      name: 'Digital Billboard Campaign',
      channel: 'Outdoor',
      status: 'Active',
      budget: 320000,
      spent: 280000,
      impressions: 4200000,
      clicks: 68000,
      conversions: 2450,
      roas: 4.1
    },
    {
      id: '8',
      name: 'Evening News Sponsorship',
      channel: 'TV',
      status: 'Active',
      budget: 450000,
      spent: 380000,
      impressions: 3100000,
      clicks: 42000,
      conversions: 1950,
      roas: 4.2
    },
    {
      id: '9',
      name: 'Rush Hour Radio Spots',
      channel: 'Radio',
      status: 'Active',
      budget: 200000,
      spent: 165000,
      impressions: 1800000,
      clicks: 25000,
      conversions: 1200,
      roas: 3.5
    },
    {
      id: '10',
      name: 'Social Media Mobile Ads',
      channel: 'Mobile',
      status: 'Active',
      budget: 350000,
      spent: 295000,
      impressions: 6200000,
      clicks: 148000,
      conversions: 5200,
      roas: 5.3
    },
    {
      id: '11',
      name: 'Tech YouTuber Partnership',
      channel: 'Influencer',
      status: 'Completed',
      budget: 120000,
      spent: 120000,
      impressions: 650000,
      clicks: 22000,
      conversions: 1250,
      roas: 5.8
    },
    {
      id: '12',
      name: 'Business Section Ads',
      channel: 'Newspaper',
      status: 'Active',
      budget: 90000,
      spent: 72000,
      impressions: 520000,
      clicks: 9800,
      conversions: 450,
      roas: 3.1
    },
    {
      id: '13',
      name: 'Transit Station Campaign',
      channel: 'Outdoor',
      status: 'Paused',
      budget: 280000,
      spent: 140000,
      impressions: 2800000,
      clicks: 38000,
      conversions: 1350,
      roas: 3.6
    },
    {
      id: '14',
      name: 'Sports Event Sponsorship',
      channel: 'TV',
      status: 'Active',
      budget: 500000,
      spent: 425000,
      impressions: 3800000,
      clicks: 58000,
      conversions: 2800,
      roas: 4.7
    },
    {
      id: '15',
      name: 'Podcast Advertising',
      channel: 'Radio',
      status: 'Active',
      budget: 160000,
      spent: 135000,
      impressions: 950000,
      clicks: 18500,
      conversions: 920,
      roas: 3.4
    }
  ];

  return {
    metrics,
    revenueByMonth,
    channelPerformance,
    channelDistribution,
    conversionFunnel,
    campaigns
  };
}