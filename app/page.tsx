"use client";

import { useState } from 'react';
import { ThemeProvider } from 'next-themes';
import Dashboard from '@/components/Dashboard';

export default function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <Dashboard />
    </ThemeProvider>
  );
}