"use client";

import { Button } from '@/components/ui/button'
import { KeyRound } from 'lucide-react'
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { MdQuiz } from "react-icons/md";
import React from 'react'
import { supabaseBrowser } from '@/lib/supabase/browser';

export default function page() {

    
    const handleLoginWithOAuth = (provider: "github" | "google") => {
        const supabase = supabaseBrowser();

        supabase.auth.signInWithOAuth({
            provider,
            options:{
                redirectTo: Location.origin + "/auth/callback",
            },
        })

    };



  return <div className="flex items-center justify-center w-full h-screen">

        <div className="w-100 rounded-md border p-5">
            <div className="w-96 rounded-md boder p-5 space-y-5 relative">
                <div className="flex items-center gap-2">
                    <MdQuiz />
                    <h1 className="text-2xl font-bold">QuizApp</h1>
                </div>

                <p className="text-sm text-gray-300">
                    Register/Sigin Today
                </p>

            {/* auto sigin  */}
            <div className="flex flex-col gap-5">

                <Button 
                    className="w-full flex items-center gap-2" 
                    variant="outline"
                    onClick={()=>handleLoginWithOAuth("github")}
                >
                    <FaGithub /> Github
                </Button>

                <Button 
                    className="w-full flex items-center gap-2" 
                    variant="outline"
                    onClick={()=>handleLoginWithOAuth("google")}
                >
                    <FcGoogle /> Google
                </Button>

            </div>

           

            </div>

        </div>

  </div>
}
