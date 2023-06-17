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
  import { useRouter } from 'next/router';

  import "./sidebar.css"
  import Settings_icon from "../../../public/wrench.svg" 
  import Issues_icon from "../../../public/gavel.svg"
  import Orders_icon from "../../../public/calendar-check.svg"
  import Activities_icon from "../../../public/component.svg"
  import Chat_icon from "../../../public/message-circle.svg"
  import Integrations_icon from "../../../public/share-2.svg"
  


  
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
              <a href="./">
                <Button
                  variant="secondary"
                  size="sm"
                  className="w-full justify-start"
                >
                  <LayoutGrid className="mr-2 h-4 w-4" />
                  Dashboard
                </Button>
              </a>
              <a href="./settings">
                <Button  variant="ghost" size="sm" className="w-full justify-start">
                  <Settings_icon className="sidebar-icons" />
                  AI Settings
                </Button>
              </a>
              <a href="./customer">
                <Button variant="ghost" size="sm" className="w-full justify-start">
                  <Issues_icon className="sidebar-icons"/>
                  Issue Report
                </Button>
              </a>
              <a href="./orders">
                <Button variant="ghost" size="sm" className="w-full justify-start">
                  <Orders_icon className="sidebar-icons"/>
                  Orders
                </Button>
              </a>
 
              <Button variant="ghost" size="sm" className="w-full justify-start">
                <Activities_icon className="sidebar-icons"/>
                Activities
              </Button>
              <Button variant="ghost" size="sm" className="w-full justify-start">
                <Chat_icon className="sidebar-icons"/>
                Chat
              </Button>
              <Button variant="ghost" size="sm" className="w-full justify-start">
                <Integrations_icon className="sidebar-icons"/>
                Integrations
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  }