'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, MessageCircle, Shield, User } from 'lucide-react'

export default function FrontPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-900 to-emerald-700 text-white">
      <header className="container mx-auto px-4 py-8">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Dawah.Dev
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl text-center mt-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Your Personal AI Islamic Chatbot for Guidance and Verses
        </motion.p>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Embark on Your Spiritual Journey</h2>
            <p className="text-lg mb-6">Discover the wisdom of Islam through our AI-powered chatbot. Get instant access to Qur'anic verses, Hadith, and personalized guidance.</p>
            <Button size="lg" className="bg-white text-emerald-700 hover:bg-emerald-100">
              Start Your Journey
            </Button>
          </motion.div>
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <img 
              src="/placeholder.svg?height=300&width=400" 
              alt="Islamic Illustration" 
              className="rounded-lg shadow-lg"
              width={400}
              height={300}
            />
          </motion.div>
        </section>

        <section className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">Key Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: BookOpen, title: "Verse Recitations", description: "AI-powered Qur'an recitations" },
              { icon: MessageCircle, title: "Instant Guidance", description: "Access Hadith and Islamic advice" },
              { icon: User, title: "Personalized Experience", description: "Tailored responses based on your inputs" },
              { icon: Shield, title: "Secure and Private", description: "Your data is protected and respected" },
            ].map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 * index }}
              >
                <Card className="bg-white/10 backdrop-blur-lg border-none">
                  <CardContent className="flex flex-col items-center p-6">
                    <feature.icon className="w-12 h-12 mb-4" />
                    <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
                    <p className="text-center">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">What Our Users Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Ahmed", quote: "Dawah.Dev has deepened my understanding of Islam. It's like having a knowledgeable friend always ready to help." },
              { name: "Fatima", quote: "The personalized guidance is amazing. It feels like the app truly understands my spiritual journey." },
              { name: "Yusuf", quote: "As a new Muslim, this app has been invaluable. It's helping me learn and grow in my faith every day." },
            ].map((testimonial, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 * index }}
              >
                <Card className="bg-white/10 backdrop-blur-lg border-none">
                  <CardContent className="p-6">
                    <p className="mb-4">"{testimonial.quote}"</p>
                    <p className="font-semibold">- {testimonial.name}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-emerald-900 py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Dawah.Dev. All rights reserved.</p>
          <div className="mt-4">
            <a href="#" className="text-white hover:text-emerald-300 mx-2">Privacy Policy</a>
            <a href="#" className="text-white hover:text-emerald-300 mx-2">Terms of Service</a>
            <a href="#" className="text-white hover:text-emerald-300 mx-2">Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  )
}