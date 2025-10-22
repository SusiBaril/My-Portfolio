"use client";

import Image from "next/image";
import { Github, Linkedin, Mail, TwitterIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Pic from "@/app/assets/2x2.png";
import { toast } from "sonner";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Hero() {
    const handleCopyEmail = () => {
        navigator.clipboard.writeText("rosaleskeegan@gmail.com");
        toast.success("Email copied to clipboard!");
    };

    return (
        <div className="text-center">
            {/* Profile Image */}
            <div className="mb-6 flex justify-center">
                <Image
                    src={Pic}
                    alt="Profile"
                    width={200}
                    height={200}
                    className="rounded-full border-4 border-gray-300"
                />
            </div>

            {/* Name */}
            <h1 className="text-3xl font-bold mb-2">Andrew Keegan Rosales</h1>

            {/* Social Buttons */}
            <div className="flex justify-center gap-3">
                <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full bg-transparent cursor-pointer"
                    asChild
                >
                    <a
                        href="https://github.com/SusiBaril"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Github className="w-4 h-4" />
                    </a>
                </Button>

                <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full bg-transparent cursor-pointer"
                    asChild
                >
                    <a
                        href="https://linkedin.com/in/andrew-keegan-rosales-173ab0309"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Linkedin className="w-4 h-4" />
                    </a>
                </Button>

                <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full bg-transparent cursor-pointer"
                    asChild
                >
                    <a
                        href="https://x.com/rosales_keegan"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <TwitterIcon className="w-4 h-4" />
                    </a>
                </Button>

                {/* Email Button with Tooltip */}
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button
                                variant="outline"
                                size="icon"
                                className="rounded-full bg-transparent cursor-pointer"
                                onClick={handleCopyEmail}
                            >
                                <Mail className="w-4 h-4" />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent side="bottom">
                            <p>rosaleskeegan@gmail.com</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </div>
        </div>
    );
}
