
import React from 'react';

export interface NavItem {
  label: string;
  path: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  location: string;
}

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}

export interface CruiseRoute {
  id: number;
  title: string;
  route: string;
  description: string;
  image: string;
  tags: string[];
  searchQuery: string;
}
