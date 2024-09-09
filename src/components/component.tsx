import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export default function Component() {
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
              Your Personal AI Islamic Chatbot for Guidance and Verses
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
                  <Link href="#" className="flex items-center gap-2" prefetch={false}>
                    <GlobeIcon className="h-4 w-4" />
                    <span>العربية</span>
                  </Link>
                </div>
                <div>
                  <Link href="#" className="flex items-center gap-2" prefetch={false}>
                    <GlobeIcon className="h-4 w-4" />
                    <span>Français</span>
                  </Link>
                </div>
                <div>
                  <Link href="#" className="flex items-center gap-2" prefetch={false}>
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

function BadgeCheckIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}


function ChurchIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m18 7 4 2v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9l4-2" />
      <path d="M14 22v-4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v4" />
      <path d="M18 22V5l-6-3-6 3v17" />
      <path d="M12 7v5" />
      <path d="M10 9h4" />
    </svg>
  )
}


function GlobeIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  )
}


function HashIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="9" y2="9" />
      <line x1="4" x2="20" y1="15" y2="15" />
      <line x1="10" x2="8" y1="3" y2="21" />
      <line x1="16" x2="14" y1="3" y2="21" />
    </svg>
  )
}


function LockIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  )
}


function QrCodeIcon(props :any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="5" height="5" x="3" y="3" rx="1" />
      <rect width="5" height="5" x="16" y="3" rx="1" />
      <rect width="5" height="5" x="3" y="16" rx="1" />
      <path d="M21 16h-3a2 2 0 0 0-2 2v3" />
      <path d="M21 21v.01" />
      <path d="M12 7v3a2 2 0 0 1-2 2H7" />
      <path d="M3 12h.01" />
      <path d="M12 3h.01" />
      <path d="M12 16v.01" />
      <path d="M16 12h1" />
      <path d="M21 12v.01" />
      <path d="M12 21v-1" />
    </svg>
  )
}


function ShieldCheckIcon(props :any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}


function SmileIcon(props :any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <line x1="9" x2="9.01" y1="9" y2="9" />
      <line x1="15" x2="15.01" y1="9" y2="9" />
    </svg>
  )
}


function UserIcon(props :any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}