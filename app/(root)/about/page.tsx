import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"
import { Metadata } from "next"

export default function AboutPage() {
  return (
    <main className="relative min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop"
            alt="Digital Network"
            fill
            className="object-cover brightness-[0.2]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
        </div>

        <div className="container px-4 py-24 md:px-6 lg:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="bg-gradient-to-r from-primary via-purple-500 to-red-500 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl lg:text-7xl">
              Connecting the Digital World
            </h1>
            <p className="mt-6 text-xl text-muted-foreground">
              We're on a mission to simplify the way creators share their online presence. One link at a time.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-6">
              <div className="inline-flex items-center rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                Our Story
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">From Idea to Innovation</h2>
              <p className="text-lg text-muted-foreground">
                Founded in 2024, Linkify emerged from a simple observation: creators needed a better way to share their
                digital presence. What started as a simple link-sharing tool has evolved into a comprehensive platform
                that helps millions of creators connect with their audience.
              </p>
              <div className="space-y-3">
                {[
                  "10M+ active users worldwide",
                  "Used by creators in 150+ countries",
                  "50M+ links created and counting",
                  "100M+ monthly link clicks",
                ].map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-square lg:aspect-auto">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&auto=format&fit=crop"
                alt="Team Collaboration"
                fill
                className="rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative overflow-hidden bg-muted/50 py-20">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Values</h2>
            <p className="mt-4 text-lg text-muted-foreground">The principles that guide everything we do</p>
          </div>
          <div className="mx-auto mt-16 grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Innovation",
                description: "Constantly pushing boundaries to create the best experience for our users.",
                image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&auto=format&fit=crop",
              },
              {
                title: "Simplicity",
                description: "Making complex technology accessible and easy to use for everyone.",
                image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=600&h=400&auto=format&fit=crop",
              },
              {
                title: "Community",
                description: "Building and nurturing a global community of creators and innovators.",
                image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&h=400&auto=format&fit=crop",
              },
            ].map((value) => (
              <div key={value.title} className="group relative overflow-hidden rounded-xl border bg-background">
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={value.image || "/placeholder.svg"}
                    alt={value.title}
                    width={600}
                    height={400}
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{value.title}</h3>
                  <p className="mt-2 text-muted-foreground">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Meet Our Team</h2>
            <p className="mt-4 text-lg text-muted-foreground">The people behind Linkify</p>
          </div>
          <div className="mx-auto mt-16 grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Sarah Johnson",
                role: "CEO & Co-founder",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&auto=format&fit=crop",
              },
              {
                name: "Michael Chen",
                role: "CTO & Co-founder",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&auto=format&fit=crop",
              },
              {
                name: "Emma Davis",
                role: "Head of Design",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&auto=format&fit=crop",
              },
            ].map((member) => (
              <div key={member.name} className="group relative overflow-hidden rounded-xl border bg-background">
                <div className="aspect-square overflow-hidden">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={400}
                    height={400}
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="mt-2 text-muted-foreground">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-muted/50 py-20">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to Get Started?</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Join millions of creators and start sharing your digital world today.
            </p>
            <Button size="lg"  className="bg-red-500 hover:bg-red-600 mt-8 text-white" asChild>
              <Link href="/generate">
                Create Your Linkify <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}


export const metadata: Metadata = {
  title: "About Linkify | Our Story",
  description: "Learn how Linkify is revolutionizing the way creators and professionals share their digital presence.",
};
