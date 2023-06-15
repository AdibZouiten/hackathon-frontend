import {
    LayoutGrid,
    Library,
    ListMusic,
    Mic2,
    Music,
    Music2,
    PlayCircle,
    Radio,
    User,
  } from "lucide-react"
  
  import { cn } from "@/lib/utils"
  import { Button } from "@/components/ui/button"
  import { ScrollArea } from "@/components/ui/scroll-area"


  
  interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
    
  }
  
  export function Sidebar({ className }: SidebarProps) {
    return (
      <div className={cn("pb-12 sidebar", className)}>
        <div className="space-y-4 py-4">
          <div className="px-4 py-2">
            <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">
              Discover
            </h2>
            <div className="space-y-1">
              <a href="http://localhost:3000/">
                <Button
                  variant="secondary"
                  size="sm"
                  className="w-full justify-start"
                >
                  <LayoutGrid className="mr-2 h-4 w-4" />
                  Dashboard
                </Button>
              </a>
              <a href="http://localhost:3000/settings">
                <Button  variant="ghost" size="sm" className="w-full justify-start">
                  <LayoutGrid className="mr-2 h-4 w-4" />
                  AI Settings
                </Button>
              </a>
              <Button variant="ghost" size="sm" className="w-full justify-start">
                <Radio className="mr-2 h-4 w-4" />
                Issue Report
              </Button>
              <Button variant="ghost" size="sm" className="w-full justify-start">
                <Radio className="mr-2 h-4 w-4" />
                Activities
              </Button>
              <Button variant="ghost" size="sm" className="w-full justify-start">
                <Radio className="mr-2 h-4 w-4" />
                Chat
              </Button>
              <Button variant="ghost" size="sm" className="w-full justify-start">
                <PlayCircle className="mr-2 h-4 w-4" />
                Integrations
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  }