"use client"

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Heart, Eye, Download, Share2, Search, Filter } from "lucide-react";
import { motion } from "framer-motion";
import UIElementModal from "@/components/ui-element-modal";
import { formatNumber } from "@/lib/utils";

// Define types for our data
type Designer = {
  id: string;
  name: string;
  avatar: string;
  isTeam: boolean;
  bio?: string;
};

type UIElement = {
  id: string;
  title: string;
  image: string;
  designer: Designer;
  likes: number;
  views: number;
  comments: number;
  tags: string[];
  createdAt: string;
  description: string;
};

// Dummy data for D Elements
const uiElements: UIElement[] = [
  {
    id: "1",
    title: "Home Care App D Elements",
    image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=1000&auto=format&fit=crop",
    designer: {
      id: "d1",
      name: "Nixtio",
      avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=100&auto=format&fit=crop",
      isTeam: true,
      bio: "Digital product design studio focused on creating beautiful and functional user interfaces."
    },
    likes: 666,
    views: 165000,
    comments: 42,
    tags: ["UI", "Mobile App", "Home Care", "Service"],
    createdAt: "2025-03-15",
    description: "A clean and modern UI for a home care service app. The design includes service categories, scheduling, and service provider details with a fresh color palette."
  },
  {
    id: "2",
    title: "Dashboard Components",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1000&auto=format&fit=crop",
    designer: {
      id: "d2",
      name: "tubik",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100&auto=format&fit=crop",
      isTeam: true,
      bio: "Award-winning design studio specializing in digital products and brand identities."
    },
    likes: 652,
    views: 327000,
    comments: 38,
    tags: ["Dashboard", "Analytics", "Components", "UI Kit", "Data Visualization"],
    createdAt: "2025-03-10",
    description: "A collection of dashboard components designed for data visualization and analytics platforms. Includes charts, cards, and navigation elements with a consistent design language."
  },
  {
    id: "3",
    title: "Mobile App UI Kit",
    image: "https://images.unsplash.com/photo-1616400619175-5beda3a17896?q=80&w=1000&auto=format&fit=crop",
    designer: {
      id: "d3",
      name: "Paperpillar",
      avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=100&auto=format&fit=crop",
      isTeam: true,
      bio: "Creative studio focused on mobile app design and development."
    },
    likes: 637,
    views: 216000,
    comments: 45,
    tags: ["Mobile", "UI Kit", "App Design", "iOS"],
    createdAt: "2025-03-08",
    description: "A comprehensive UI kit for mobile applications with a focus on clean, modern design and usability. Includes common screens and components for quick app development."
  },
  {
    id: "4",
    title: "Weather App Design",
    image: "https://images.unsplash.com/photo-1621075160523-b936ad96132a?q=80&w=1000&auto=format&fit=crop",
    designer: {
      id: "d2",
      name: "tubik",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100&auto=format&fit=crop",
      isTeam: true,
      bio: "Award-winning design studio specializing in digital products and brand identities."
    },
    likes: 467,
    views: 154000,
    comments: 29,
    tags: ["Weather", "Mobile App", "UI Design", "Dark Mode"],
    createdAt: "2025-03-05",
    description: "A sleek weather application design with both light and dark modes. Features detailed weather information, forecasts, and location-based services with beautiful visualizations."
  },
  {
    id: "5",
    title: "Branding Elements",
    image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?q=80&w=1000&auto=format&fit=crop",
    designer: {
      id: "d4",
      name: "DesignStudio",
      avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=100&auto=format&fit=crop",
      isTeam: false,
      bio: "Independent designer specializing in brand identity and visual design."
    },
    likes: 583,
    views: 198000,
    comments: 36,
    tags: ["Branding", "Logo", "Identity", "Color Palette"],
    createdAt: "2025-03-01",
    description: "A comprehensive branding package including logo variations, color palette, typography guidelines, and application examples for a modern tech company."
  },
  {
    id: "6",
    title: "Typography System",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1000&auto=format&fit=crop",
    designer: {
      id: "d5",
      name: "Shineo",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop",
      isTeam: false,
      bio: "Typography specialist with a focus on digital and print design."
    },
    likes: 421,
    views: 142000,
    comments: 27,
    tags: ["Typography", "Design System", "Font", "Hierarchy"],
    createdAt: "2025-02-28",
    description: "A comprehensive typography system designed for digital products. Includes font pairings, size scales, and usage guidelines for creating consistent and readable interfaces."
  },
  {
    id: "7",
    title: "Delivery Tracking App",
    image: "https://images.unsplash.com/photo-1555421689-3f034debb7a6?q=80&w=1000&auto=format&fit=crop",
    designer: {
      id: "d6",
      name: "TrackMaster",
      avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&w=100&auto=format&fit=crop",
      isTeam: false,
      bio: "UI designer with expertise in creating intuitive and engaging user interfaces."
    },
    likes: 512,
    views: 187000,
    comments: 33,
    tags: ["Delivery", "Tracking", "Mobile App", "Maps"],
    createdAt: "2025-02-25",
    description: "A delivery tracking application with real-time updates, map integration, and a clean user interface. Features order history, delivery status, and driver information."
  },
  {
    id: "8",
    title: "Chat Interface",
    image: "https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?q=80&w=1000&auto=format&fit=crop",
    designer: {
      id: "d7",
      name: "ChatFlow",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=100&auto=format&fit=crop",
      isTeam: true,
      bio: "Design team focused on creating seamless interaction experiences."
    },
    likes: 498,
    views: 176000,
    comments: 31,
    tags: ["Chat", "Messaging", "UI Design", "Social"],
    createdAt: "2025-02-20",
    description: "A modern messaging interface with support for text, media, and interactive elements. Features clean typography, intuitive navigation, and thoughtful micro-interactions."
  }
];

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [selectedElement, setSelectedElement] = useState<UIElement | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setMounted(true);
  }, []);

  const categories = ["All", "UI Elements", "Mobile", "Web Design", "Branding", "Typography", "Illustration"];

  const filteredElements = uiElements.filter(item => {
    if (searchQuery) {
      const searchLower = searchQuery.toLowerCase();
      return (
        item.title.toLowerCase().includes(searchLower) ||
        item.description.toLowerCase().includes(searchLower) ||
        item.tags.some(tag => tag.toLowerCase().includes(searchLower))
      );
    }
    if (selectedCategory === "All") return true;
    return item.tags.some(tag => tag === selectedCategory);
  });

  const openModal = (element: UIElement) => {
    setSelectedElement(element);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center py-12 md:py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">UI Elements</h1>
          <p className="text-lg text-gray-600 mb-2">
            3,183 inspirational designs, illustrations, and graphic elements from the world&apos;s best designers.
          </p>
          <p className="text-lg text-gray-600">
            Want more inspiration? Browse our <Link href="#" className="text-black font-medium hover:underline">search results</Link>...
          </p>
        </section>

        {/* Search and Filter Section */}
        <div className="sticky top-0 z-40 bg-gray-50/80 backdrop-blur-md py-4 mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search designs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Categories */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className="rounded-full whitespace-nowrap"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* UI Elements Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {filteredElements.map((item) => (
            <motion.div 
              key={item.id} 
              className="group relative rounded-lg overflow-hidden bg-white shadow-md hover:shadow-xl transition-shadow duration-300"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
              layout
            >
              {/* Image */}
              <div 
                className="relative aspect-[4/3] overflow-hidden cursor-pointer"
                onClick={() => openModal(item)}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-2">
                    <Button 
                      variant="secondary" 
                      className="rounded-full bg-white hover:bg-white/90"
                      onClick={(e) => {
                        e.stopPropagation();
                        openModal(item);
                      }}
                    >
                      View
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Designer info and stats */}
              <div className="p-4">
                <h3 className="font-medium text-base mb-3 truncate">{item.title}</h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="relative h-8 w-8 rounded-full overflow-hidden">
                      <Image
                        src={item.designer.avatar}
                        alt={item.designer.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex items-center">
                      <span className="font-medium text-sm">{item.designer.name}</span>
                      {item.designer.isTeam && (
                        <span className="ml-1 text-xs bg-gray-200 px-1.5 py-0.5 rounded text-gray-700">TEAM</span>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Heart className="h-4 w-4" />
                      <span className="text-xs">{formatNumber(item.likes)}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Eye className="h-4 w-4" />
                      <span className="text-xs">{formatNumber(item.views)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </section>

        {/* Empty State */}
        {filteredElements.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">No results found for your search.</p>
            <Button 
              variant="outline" 
              className="mt-4"
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
            >
              Clear filters
            </Button>
          </div>
        )}

        {/* Load More Button */}
        {filteredElements.length > 0 && (
          <div className="text-center mt-12 pb-8">
            <Button variant="outline" className="rounded-full px-8">Load more</Button>
          </div>
        )}

        {/* Modal */}
        {selectedElement && (
          <UIElementModal 
            element={selectedElement} 
            isOpen={isModalOpen} 
            onClose={closeModal} 
          />
        )}
      </div>
    </div>
  );
}