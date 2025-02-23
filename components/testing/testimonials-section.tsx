import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote: "Linkify transformed how I share my content. The analytics are incredible!",
    author: "Sarah Johnson",
    role: "Content Creator",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000",
  },
  {
    quote: "The best link in bio tool I've ever used. Clean, simple, and powerful.",
    author: "Mike Chen",
    role: "Digital Artist",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000",
  },
  {
    quote: "My engagement increased by 40% after switching to Linkify. Amazing!",
    author: "Emma Davis",
    role: "Social Media Influencer",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1000",
  },
]

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Loved by Creators Worldwide</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Join thousands of creators who trust Linkify to share their content
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative overflow-hidden">
              <CardContent className="p-6">
                <Quote className="absolute right-4 top-4 h-8 w-8 text-primary/10" />
                <p className="mb-4 text-muted-foreground">"{testimonial.quote}"</p>
                <div className="flex items-center gap-3">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.author}
                    width={40}
                    height={40}
                    className="rounded-s-full "
                  />
                  <div className="text-left">
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

