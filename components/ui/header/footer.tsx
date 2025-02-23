import Link from "next/link"
import { Twitter, Instagram, Youtube, Github } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container flex flex-col gap-8 px-4 py-12 md:px-6 lg:py-16">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Product</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/generate">Generate</Link>
              </li>
              <li>
                <Link href="#">Pricing</Link>
              </li>
              <li>
                <Link href="#">Examples</Link>
              </li>
              <li>
                <Link href="#">Templates</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="#">Blog</Link>
              </li>
              <li>
                <Link href="#">Careers</Link>
              </li>
              <li>
                <Link href="#">Press</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Resources</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#">Documentation</Link>
              </li>
              <li>
                <Link href="#">Help Center</Link>
              </li>
              <li>
                <Link href="#">Community</Link>
              </li>
              <li>
                <Link href="#">API</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#">Privacy</Link>
              </li>
              <li>
                <Link href="#">Terms</Link>
              </li>
              <li>
                <Link href="#">Cookie Policy</Link>
              </li>
              <li>
                <Link href="#">Licenses</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-2">
              <Link href="/" className="flex items-center space-x-2">
        <span className="relative z-10 text-2xl font-black tracking-tighter">
      <span className="bg-gradient-to-r from-red-600 via-rose-500 to-orange-500 bg-clip-text text-transparent">L</span>
      <span className="bg-gradient-to-r from-rose-500 via-red-500 to-rose-600 bg-clip-text text-transparent">inkify</span>
      {/* Decorative Elements */}
      <span className="absolute -right-1.5 -top-1.5 h-2 w-2 animate-ping rounded-full bg-gradient-to-r from-red-500 to-orange-500 opacity-75" />
      <span className="absolute -right-1.5 -top-1.5 h-2 w-2 rounded-full bg-gradient-to-r from-red-500 to-orange-500 shadow-md" />
    </span>
        </Link>
            <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Linkify. All rights reserved.</p>
          </div>
          <div className="flex gap-4">
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <Instagram className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <Youtube className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <Github className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

