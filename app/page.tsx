"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import type React from "react"
import { Card } from "@/components/ui/card"
import { motion, AnimatePresence } from "framer-motion"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Certificates from "@/components/certificate"
import Projects from "@/components/project"
import { Toaster } from "@/components/ui/sonner";
import Background from "@/app/assets/background.jpg";

function AnimatedTabsContent({ value, children }: { value: string; children: React.ReactNode }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={value}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <TabsContent value={value} className="mt-0">
          {children}
        </TabsContent>
      </motion.div>
    </AnimatePresence>
  )
}

export default function Home() {
  return (
    <div className="relative min-h-screen text-foreground flex items-center justify-center p-4 overflow-hidden">
      {/* 🔹 Blurred Background Layer */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-md scale-105"
        style={{
          backgroundImage: `url(${Background.src})`,
        }}
      ></div>

      {/* 🔹 Overlay (dark tint for readability) */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* 🔹 Main Content */}
      <div className="relative z-10 w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-6 rounded-2xl p-4">
        {/* Profile Card */}
        <Card className="h-fit bg-black/40 backdrop-blur-md shadow-lg">
          <div className="p-8">
            <Hero />
            <div className="mt-8 pt-8 border-t border-border">
              <About />
            </div>
          </div>
        </Card>

        {/* Skills, Certificates & Projects Card */}
        <Card className="h-fit px-2 bg-black/40 backdrop-blur-md shadow-lg">
          <Tabs defaultValue="skills" className="w-full">
            <TabsList className="w-full grid grid-cols-3 rounded-t-lg border-b">
              <TabsTrigger value="skills" className="cursor-pointer">Skills</TabsTrigger>
              <TabsTrigger value="certificates" className="cursor-pointer">Certificates</TabsTrigger>
              <TabsTrigger value="projects" className="cursor-pointer">Projects</TabsTrigger>
            </TabsList>

            <div className="p-2">
              <AnimatedTabsContent value="skills">
                <Skills />
              </AnimatedTabsContent>

              <AnimatedTabsContent value="certificates">
                <Certificates />
              </AnimatedTabsContent>

              <AnimatedTabsContent value="projects">
                <Projects />
              </AnimatedTabsContent>
            </div>
          </Tabs>
        </Card>

        <Toaster />
      </div>
    </div>
  )
}
