/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  image: string;
  features: string[];
  startingPrice: string;
  schedule: string;
  tierNotes: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  quote: string;
  rating: number;
  image: string;
  serviceType: string;
  date: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "all" | "lawns" | "gardens" | "hardscapes" | "lighting";
  image: string;
  description: string;
}

export interface TrustBadge {
  id: string;
  label: string;
  value: string;
  icon: string;
}

export interface StatItem {
  id: string;
  value: string;
  label: string;
  description: string;
}

export interface WhyChooseUsItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}
