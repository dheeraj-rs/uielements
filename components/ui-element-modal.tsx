import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Heart, Eye, MessageSquare, Share2, Bookmark, Download, X } from "lucide-react"
import { useState, useEffect } from "react"
import { formatNumber } from "@/lib/utils"

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

interface UIElementModalProps {
  element: UIElement;
  isOpen: boolean;
  onClose: () => void;
}

export default function UIElementModal({ element, isOpen, onClose }: UIElementModalProps) {
  const [mounted, setMounted] = useState(false)
  const [formattedDate, setFormattedDate] = useState<string>("")

  useEffect(() => {
    setMounted(true)
    setFormattedDate(new Date(element.createdAt).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }))
  }, [element.createdAt])

  if (!mounted) {
    return null
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl p-0 max-h-[90vh] overflow-hidden flex flex-col">
        {/* Sticky Header with Actions */}
        <div className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b">
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center space-x-3">
              <div className="relative h-8 w-8 rounded-full overflow-hidden">
                <Image
                  src={element.designer.avatar}
                  alt={element.designer.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex items-center">
                <span className="font-medium">{element.designer.name}</span>
                {element.designer.isTeam && (
                  <span className="ml-2 text-xs bg-gray-200 px-1.5 py-0.5 rounded text-gray-700">TEAM</span>
                )}
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" className="rounded-full hover:bg-gray-100">
                <Heart className="h-4 w-4 mr-1" />
                <span className="text-sm">{formatNumber(element.likes)}</span>
              </Button>
              <Button variant="ghost" size="sm" className="rounded-full hover:bg-gray-100">
                <Eye className="h-4 w-4 mr-1" />
                <span className="text-sm">{formatNumber(element.views)}</span>
              </Button>
              <Button variant="ghost" size="sm" className="rounded-full hover:bg-gray-100">
                <MessageSquare className="h-4 w-4 mr-1" />
                <span className="text-sm">{formatNumber(element.comments)}</span>
              </Button>
              <DialogClose asChild>
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-gray-100">
                  <X className="h-5 w-5" />
                </Button>
              </DialogClose>
            </div>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto flex-1 scroll-smooth">
          {/* Main Image Section */}
          <div className="relative">
            <div className="relative aspect-[16/9]">
              <Image
                src={element.image}
                alt={element.title}
                fill
                className="object-cover"
                priority
              />
            </div>
            
            {/* Floating Action Buttons */}
            <div className="absolute bottom-4 right-4 flex gap-2">
              <Button variant="secondary" size="icon" className="rounded-full bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg">
                <Download className="h-4 w-4" />
              </Button>
              <Button variant="secondary" size="icon" className="rounded-full bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg">
                <Share2 className="h-4 w-4" />
              </Button>
              <Button variant="secondary" size="icon" className="rounded-full bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg">
                <Bookmark className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold mb-4">{element.title}</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">{element.description}</p>
              
              {/* Tags Section */}
              <div className="flex flex-wrap gap-2 mb-8">
                {element.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 transition-colors rounded-full text-sm text-gray-700 cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              {/* Designer Bio Card */}
              {element.designer.bio && (
                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h4 className="font-semibold text-lg mb-3">About the Designer</h4>
                  <p className="text-gray-600 leading-relaxed">{element.designer.bio}</p>
                </div>
              )}
              
              {/* Creation Date */}
              <div className="text-sm text-gray-500">
                {formattedDate && `Created on ${formattedDate}`}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
} 