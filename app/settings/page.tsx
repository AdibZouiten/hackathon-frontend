"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
import './setting.css'
import Profile from "../components/profile/profile"
import Doc_icon from "../../public/Group.svg"
import { useState , useRef , FormEvent  } from 'react';


import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import firebase from 'firebase/app';
import 'firebase/firestore';



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    getFirestore, 
    collection, 
    getDocs,
    QuerySnapshot, 
    DocumentData, 
    QueryDocumentSnapshot,
    addDoc
} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBIJecicTmiIZHArf2iKwB9q92fVxySXt4",
    authDomain: "hack-form-upload.firebaseapp.com",
    projectId: "hack-form-upload",
    storageBucket: "hack-form-upload.appspot.com",
    messagingSenderId: "166875386873",
    appId: "1:166875386873:web:8f26bd6b1b86a1ce33a328",
    measurementId: "G-1XQL2H6KC6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get Firestore database instance
const db = getFirestore(app);

// collection ref
const colRef = collection(db, 'files')


// Get Firebase Storage instance
const storage = getStorage(app);










export default function Settings(){

    
    const [file, setFile] = useState<File | null>();

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files?.[0];
        setFile(selectedFile);
    };


    const urlRef =  useRef<HTMLInputElement>(null);
    const documentRef =  useRef<HTMLInputElement>(null);

    

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
    
        if (file) {
            const fileName = file.name;
            const fileRef = ref(storage, fileName);

            try {
                await uploadBytes(fileRef, file);
                console.log('File uploaded successfully!');
            } catch (error) {
                console.error('Upload error:', error);
            }
        }


        // Access the form input values using the refs
        const formData = {
            url: urlRef.current?.value || '',
        };

        
        // Log the form data
        console.log(formData);
    

        // Add collection data
        addDoc(colRef, formData)
        .then(() => {
            console.log('files added successfully');
            
        })


    };
  
    const handleFile = (e: React.FormEvent) => {
        e.preventDefault();



    }



    return(
        <form className="settings-form" onSubmit={handleSubmit}>
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
                        <Profile/>
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
                <Input type="url" id="url" placeholder="Url" ref={urlRef} />
            </div>
            <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="picture">Document</Label>
                <div className="w-full ">
                    <label
                        className="flex justify-center w-full h-52 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
                        <span className="flex items-center space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                            </svg>
                            <span className="font-medium text-gray-600">
                                Drop files to Attach, or
                                <span className="text-blue-600 underline">browse</span>
                            </span>
                        </span>
                        <input type="file" name="file_upload" className="hidden file" ref={documentRef} onChange={handleFileChange}/>
                    </label>
                </div>

            </div>
            <div className="filesSection space-y-8">
                <div className="flex items-center file">
                    <Doc_icon/>
                    <div className="ml-4 space-y-1">
                    <p className="text-sm font-medium leading-none">file.pdf</p>
                    </div>
                    <div className="ml-auto font-medium">5.7MB</div>
                </div>
                <div className="flex items-center file">
                    <Doc_icon/>
                    <div className="ml-4 space-y-1">
                    <p className="text-sm font-medium leading-none">file.pdf</p>
                    </div>
                    <div className="ml-auto font-medium">5.7MB</div>
                </div>
            </div>
            <hr />
            <div className="settings-submit">
                <Button type="reset" variant="secondary" >cancel</Button>
                <Button type="submit">save</Button>
            </div>
        </form>
    )
}