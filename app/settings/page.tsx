import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
import { Settings2 } from "lucide-react"

import './setting.css'

export default function settings(){
    return(
        <div className="settings-form">
            <div className="settings-page-header">
                <h2 className="scroll-m-20 text-3xl font-bold tracking-tight lg:text-4xl">
                    This is the AI Agent Settings
                </h2>
                <div className="flex items-center">
                <Popover>
                    <PopoverTrigger asChild>
                        <Avatar className="h-9 w-9">
                        <AvatarImage src="/avatars/01.png" alt="Avatar" />
                        <AvatarFallback>OM</AvatarFallback>
                        </Avatar>
                    </PopoverTrigger>
                    <PopoverContent className="w-80">
                        <div className="grid gap-4">
                        <div className="space-y-2">
                            <h4 className="font-medium leading-none">Dimensions</h4>
                            <p className="text-sm text-muted-foreground">
                            Set the dimensions for the layer.
                            </p>
                        </div>
                        <div className="grid gap-2">
                            <div className="grid grid-cols-3 items-center gap-4">
                            <Label htmlFor="width">Width</Label>
                            <Input
                                id="width"
                                defaultValue="100%"
                                className="col-span-2 h-8"
                            />
                            </div>
                            <div className="grid grid-cols-3 items-center gap-4">
                            <Label htmlFor="maxWidth">Max. width</Label>
                            <Input
                                id="maxWidth"
                                defaultValue="300px"
                                className="col-span-2 h-8"
                            />
                            </div>
                            <div className="grid grid-cols-3 items-center gap-4">
                            <Label htmlFor="height">Height</Label>
                            <Input
                                id="height"
                                defaultValue="25px"
                                className="col-span-2 h-8"
                            />
                            </div>
                            <div className="grid grid-cols-3 items-center gap-4">
                            <Label htmlFor="maxHeight">Max. height</Label>
                            <Input
                                id="maxHeight"
                                defaultValue="none"
                                className="col-span-2 h-8"
                            />
                            </div>
                        </div>
                        </div>
                    </PopoverContent>
                    </Popover>
                    
                    <div className="ml-4 space-y-1">
                    <p className="text-sm font-medium leading-none">Olivia Martin</p>
                    <p className="text-sm text-muted-foreground">
                        olivia.martin@email.com
                    </p>
                    </div>
                </div>
            </div>

            <div className="grid w-full  items-center gap-1.5">
                <Label htmlFor="email">Website</Label>
                <Input type="url" id="url" placeholder="Url" />
            </div>
            <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="picture">Document</Label>
                <Input id="picture" type="file" />
            </div>
            <hr />
            <div className="settings-submit">
                <Button type="reset" variant="secondary" >cancel</Button>
                <Button type="submit">save</Button>
            </div>
        </div>
    )
}