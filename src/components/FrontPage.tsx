'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BadgeCheckIcon, BookOpen, ChurchIcon, GlobeIcon, HashIcon, LockIcon, MessageCircle, QrCodeIcon, Shield, ShieldCheckIcon, SmileIcon, User, UserIcon } from 'lucide-react'
import Link from 'next/link'
import { Avatar, AvatarImage, AvatarFallback } from '@radix-ui/react-avatar'

export default function FrontPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="flex min-h-[100dvh] flex-col bg-gradient-to-br from-[#0E1C36] to-[#1E3A6D]">
     <header className="container mx-auto flex items-center justify-between px-4 py-6 sm:px-6 lg:px-8">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <ChurchIcon className="h-8 w-8 text-white" />
          <span className="text-2xl font-bold text-white">Dawah.Dev</span>
        </Link>
        <Button className="rounded-md bg-[#1E3A6D] px-6 py-3 text-white transition-colors hover:bg-[#172c57]">
          Start Your Journey
        </Button>
      </header>

      <main className="flex-1">
        <section className="container mx-auto flex flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
          <div className="max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            <motion.h1 
          className="text-4xl md:text-6xl font-bold text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
              Your Personal AI Islamic Chatbot for Guidance and Verses
              </motion.h1>
            </h1>
            <p className="mt-4 text-lg text-white">
              Dawah.Dev is your AI-powered companion for Islamic knowledge and spiritual growth.
            </p>
          </div>
          <div className="mt-10 flex w-full max-w-4xl flex-col items-center justify-center gap-8 sm:flex-row">
            <div className="flex flex-col items-center gap-4 rounded-lg bg-white/10 p-6 text-center backdrop-blur-sm">
              <QrCodeIcon className="h-12 w-12 text-white" />
              <h3 className="text-xl font-bold text-white">AI-powered Qur'an Recitations</h3>
              <p className="text-white/80">Experience the beauty of the Qur'an through our AI-powered recitations.</p>
            </div>
            <div className="flex flex-col items-center gap-4 rounded-lg bg-white/10 p-6 text-center backdrop-blur-sm">
              <HashIcon className="h-12 w-12 text-white" />
              <h3 className="text-xl font-bold text-white">Instant Guidance: Access Hadith and Islamic Advice</h3>
              <p className="text-white/80">Get instant access to authentic Hadith and personalized Islamic guidance.</p>
            </div>
            <div className="flex flex-col items-center gap-4 rounded-lg bg-white/10 p-6 text-center backdrop-blur-sm">
              <UserIcon className="h-12 w-12 text-white" />
              <h3 className="text-xl font-bold text-white">Personalized Experience: Tailored Responses</h3>
              <p className="text-white/80">
                Enjoy a personalized experience with tailored responses based on your inputs.
              </p>
            </div>
            <div className="flex flex-col items-center gap-4 rounded-lg bg-white/10 p-6 text-center backdrop-blur-sm">
              <LockIcon className="h-12 w-12 text-white" />
              <h3 className="text-xl font-bold text-white">Secure and Private: Emphasize Data Security</h3>
              <p className="text-white/80">Your data is secure and private with our robust security measures.</p>
            </div>
          </div>
        </section>
        <section className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-white/10 p-6 backdrop-blur-sm">
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" alt="User Avatar" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="text-lg font-bold text-white">John Doe</h4>
                  <p className="text-white/80">Software Engineer</p>
                </div>
              </div>
              <p className="mt-4 text-white/80">
                "Dawah.Dev has been a game-changer for my spiritual journey. The\n personalized guidance and Qur'an
                recitations have been\n invaluable."
              </p>
            </div>
            <div className="rounded-lg bg-white/10 p-6 backdrop-blur-sm">
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" alt="User Avatar" />
                  <AvatarFallback>SA</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="text-lg font-bold text-white">Sarah Ahmed</h4>
                  <p className="text-white/80">Student</p>
                </div>
              </div>
              <p className="mt-4 text-white/80">
                "I'm so grateful for Dawah.Dev. The instant access to Hadith and\n Islamic advice has been a lifesaver
                for me."
              </p>
            </div>
            <div className="rounded-lg bg-white/10 p-6 backdrop-blur-sm">
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" alt="User Avatar" />
                  <AvatarFallback>AM</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="text-lg font-bold text-white">Amina Malik</h4>
                  <p className="text-white/80">Homemaker</p>
                </div>
              </div>
              <p className="mt-4 text-white/80">
                "Dawah.Dev has become an integral part of my daily routine. The\n secure and private experience is truly
                appreciated."
              </p>
            </div>
          </div>
        </section>
        <section className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="flex items-center gap-2">
              <ShieldCheckIcon className="h-6 w-6 text-white" />
              <span className="text-white">Secure and Private</span>
            </div>
            <div className="flex items-center gap-2">
              <BadgeCheckIcon className="h-6 w-6 text-white" />
              <span className="text-white">Trusted by Thousands</span>
            </div>
            <div className="flex items-center gap-2">
              <SmileIcon className="h-6 w-6 text-white" />
              <span className="text-white">Highly Rated</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#0E1C36] py-6">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:gap-0">
          <div className="flex items-center gap-2">
            <ChurchIcon className="h-6 w-6 text-white" />
            <span className="text-white">Dawah.Dev</span>
          </div>
          <div className="flex items-center gap-4">
            <div>
              <div>
                <Button variant="ghost" className="text-white">
                  <GlobeIcon className="h-6 w-6" />
                  <span>English</span>
                </Button>
              </div>
              <div>
                <div>
                  <Link href="#" className="flex items-center gap-2 text-white" prefetch={false}>
                    <GlobeIcon className="h-4 w-4" />
                    <span>العربية</span>
                  </Link>
                </div>
                <div>
                  <Link href="#" className="flex items-center gap-2 text-white" prefetch={false}>
                    <GlobeIcon className="h-4 w-4" />
                    <span>Français</span>
                  </Link>
                </div>
                <div>
                  <Link href="#" className="flex items-center gap-2 text-white" prefetch={false}>
                    <GlobeIcon className="h-4 w-4" />
                    <span>Español</span>
                  </Link>
                </div>
              </div>
            </div>
            <Link href="#" className="text-white hover:underline" prefetch={false}>
              Privacy Policy
            </Link>
            <Link href="#" className="text-white hover:underline" prefetch={false}>
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}