"use client";

import { useState, useMemo } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Search, Filter, ArrowUpDown, ChevronLeft, ChevronRight, Radio, Tv, Smartphone, Keyboard as Billboard, UserCheck, Newspaper } from 'lucide-react';
import { Parser } from "json2csv";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { Download, FileText } from "lucide-react";

interface Campaign {
  id: string;
  name: string;
  channel: string;
  status: string;
  budget: number;
  spent: number;
  impressions: number;
  clicks: number;
  conversions: number;
  roas: number;
}

interface DataTableProps {
  data: Campaign[];
}

export default function DataTable({ data }: DataTableProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [channelFilter, setChannelFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [sortBy, setSortBy] = useState<keyof Campaign>('name');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const channelIcons = {
    'Outdoor': Billboard,
    'TV': Tv,
    'Radio': Radio,
    'Mobile': Smartphone,
    'Influencer': UserCheck,
    'Newspaper': Newspaper
  };

  const statusColors = {
    'Active': 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400',
    'Paused': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400',
    'Completed': 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400'
  };

  const filteredAndSortedData = useMemo(() => {
    let filtered = data.filter(campaign => {
      const matchesSearch = campaign.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesChannel = channelFilter === 'all' || campaign.channel === channelFilter;
      const matchesStatus = statusFilter === 'all' || campaign.status === statusFilter;
      return matchesSearch && matchesChannel && matchesStatus;
    });

    filtered.sort((a, b) => {
      const aValue = a[sortBy];
      const bValue = b[sortBy];
      
      if (typeof aValue === 'string' && typeof bValue === 'string') {
        return sortOrder === 'asc' 
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      }
      
      if (typeof aValue === 'number' && typeof bValue === 'number') {
        return sortOrder === 'asc' ? aValue - bValue : bValue - aValue;
      }
      
      return 0;
    });

    return filtered;
  }, [data, searchTerm, channelFilter, statusFilter, sortBy, sortOrder]);

  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredAndSortedData.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredAndSortedData, currentPage]);

  const totalPages = Math.ceil(filteredAndSortedData.length / itemsPerPage);

  const handleSort = (column: keyof Campaign) => {
    if (sortBy === column) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(column);
      setSortOrder('asc');
    }
  };

  const exportToCSV = () => {
    try {
      const parser = new Parser();
      const csv = parser.parse(filteredAndSortedData);
  
      const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
      const link = document.createElement("a");
      const url = URL.createObjectURL(blob);
  
      link.setAttribute("href", url);
      link.setAttribute("download", "campaigns.csv");
      link.style.visibility = "hidden";
  
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error exporting CSV:", error);
    }
  };
  
  const exportToPDF = () => {
    try {
      const doc = new jsPDF();
  
      doc.setFontSize(16);
      doc.text("Campaign Report", 14, 15);
  
      const tableColumns = ["Name", "Channel", "Status", "Budget", "Spent", "Impressions", "Clicks", "Conversions", "ROAS"];
      const tableRows = filteredAndSortedData.map((item) => [
        item.name,
        item.channel,
        item.status,
        `$${item.budget.toLocaleString()}`,
        `$${item.spent.toLocaleString()}`,
        item.impressions.toLocaleString(),
        item.clicks.toLocaleString(),
        item.conversions.toLocaleString(),
        `${item.roas.toFixed(1)}x`,
      ]);
  
      autoTable(doc, {
        head: [tableColumns],
        body: tableRows,
        startY: 25,
        styles: {
          fontSize: 10,
          cellPadding: 3,
        },
        headStyles: {
          fillColor: [71, 85, 105],
          textColor: 255,
          fontStyle: "bold",
        },
        alternateRowStyles: {
          fillColor: [248, 250, 252],
        },
      });
  
      doc.save("campaigns.pdf");
    } catch (error) {
      console.error("Error exporting PDF:", error);
    }
  };
  
  return (
    <Card className="backdrop-blur-sm bg-white/50 dark:bg-gray-800/50 border-white/20 dark:border-gray-700/50">
      <CardHeader>
        <CardTitle className="text-gray-900 dark:text-white">Campaign Management</CardTitle>
        <CardDescription>Manage and monitor your advertising campaigns across all channels</CardDescription>
        
        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search campaigns..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-white/50 dark:bg-gray-700/50 border-white/20"
            />
          </div>
          <Select value={channelFilter} onValueChange={setChannelFilter}>
            <SelectTrigger className="w-full sm:w-[180px] bg-white/50 dark:bg-gray-700/50 border-white/20">
              <Filter className="h-4 w-4 mr-2" />
              <SelectValue placeholder="Filter by channel" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Channels</SelectItem>
              <SelectItem value="Outdoor">Outdoor</SelectItem>
              <SelectItem value="TV">TV</SelectItem>
              <SelectItem value="Radio">Radio</SelectItem>
              <SelectItem value="Mobile">Mobile</SelectItem>
              <SelectItem value="Influencer">Influencer</SelectItem>
              <SelectItem value="Newspaper">Newspaper</SelectItem>
            </SelectContent>
          </Select>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-full sm:w-[180px] bg-white/50 dark:bg-gray-700/50 border-white/20">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="Active">Active</SelectItem>
              <SelectItem value="Paused">Paused</SelectItem>
              <SelectItem value="Completed">Completed</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 mt-4">
          <Button onClick={exportToCSV} variant="outline" className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            Export CSV
          </Button>
          <Button onClick={exportToPDF} variant="outline" className="flex items-center gap-2">
            <FileText className="h-4 w-4" />
            Export PDF
          </Button>
        </div>

      </CardHeader>
      
      <CardContent>
        {/* Table */}
        <div className="rounded-lg overflow-hidden border border-white/20 dark:border-gray-700/50">
          <Table>
            <TableHeader>
              <TableRow className="bg-white/30 dark:bg-gray-700/30">
                <TableHead className="cursor-pointer" onClick={() => handleSort('name')}>
                  <div className="flex items-center">
                    Campaign
                    <ArrowUpDown className="ml-1 h-4 w-4" />
                  </div>
                </TableHead>
                <TableHead>Channel</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="cursor-pointer" onClick={() => handleSort('budget')}>
                  <div className="flex items-center">
                    Budget
                    <ArrowUpDown className="ml-1 h-4 w-4" />
                  </div>
                </TableHead>
                <TableHead className="cursor-pointer" onClick={() => handleSort('spent')}>
                  <div className="flex items-center">
                    Spent
                    <ArrowUpDown className="ml-1 h-4 w-4" />
                  </div>
                </TableHead>
                <TableHead className="cursor-pointer" onClick={() => handleSort('impressions')}>
                  <div className="flex items-center">
                    Impressions
                    <ArrowUpDown className="ml-1 h-4 w-4" />
                  </div>
                </TableHead>
                <TableHead className="cursor-pointer" onClick={() => handleSort('clicks')}>
                  <div className="flex items-center">
                    Clicks
                    <ArrowUpDown className="ml-1 h-4 w-4" />
                  </div>
                </TableHead>
                <TableHead className="cursor-pointer" onClick={() => handleSort('conversions')}>
                  <div className="flex items-center">
                    Conversions
                    <ArrowUpDown className="ml-1 h-4 w-4" />
                  </div>
                </TableHead>
                <TableHead className="cursor-pointer" onClick={() => handleSort('roas')}>
                  <div className="flex items-center">
                    ROAS
                    <ArrowUpDown className="ml-1 h-4 w-4" />
                  </div>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedData.map((campaign) => {
                const ChannelIcon = channelIcons[campaign.channel as keyof typeof channelIcons];
                return (
                  <TableRow key={campaign.id} className="hover:bg-white/20 dark:hover:bg-gray-700/20 transition-colors">
                    <TableCell className="font-medium">{campaign.name}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <ChannelIcon className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                        {campaign.channel}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className={statusColors[campaign.status as keyof typeof statusColors]}>
                        {campaign.status}
                      </Badge>
                    </TableCell>
                    <TableCell>${campaign.budget.toLocaleString()}</TableCell>
                    <TableCell>${campaign.spent.toLocaleString()}</TableCell>
                    <TableCell>{campaign.impressions.toLocaleString()}</TableCell>
                    <TableCell>{campaign.clicks.toLocaleString()}</TableCell>
                    <TableCell>{campaign.conversions.toLocaleString()}</TableCell>
                    <TableCell className="font-medium">
                      <span className={campaign.roas >= 3 ? 'text-green-600 dark:text-green-400' : campaign.roas >= 2 ? 'text-yellow-600 dark:text-yellow-400' : 'text-red-600 dark:text-red-400'}>
                        {campaign.roas.toFixed(1)}x
                      </span>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between mt-4">
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Showing {((currentPage - 1) * itemsPerPage) + 1} to {Math.min(currentPage * itemsPerPage, filteredAndSortedData.length)} of {filteredAndSortedData.length} campaigns
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="bg-white/50 dark:bg-gray-700/50 border-white/20"
            >
              <ChevronLeft className="h-4 w-4" />
              Previous
            </Button>
            <span className="text-sm text-gray-600 dark:text-gray-400">
              Page {currentPage} of {totalPages}
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="bg-white/50 dark:bg-gray-700/50 border-white/20"
            >
              Next
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}