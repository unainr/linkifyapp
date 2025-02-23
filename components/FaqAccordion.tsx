import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is Linkify?",
    answer:
      "Linkify is a powerful link in bio platform that helps creators and businesses share multiple links through a single, customizable page. It's perfect for social media profiles, marketing campaigns, and personal branding.",
  },
  {
    question: "How much does Linkify cost?",
    answer:
      "Linkify offers a free plan with essential features. Our Pro plan starts at $5/month and includes advanced analytics, custom domains, and premium themes. For businesses, we offer custom enterprise plans.",
  },
  {
    question: "Can I use my own domain?",
    answer:
      "Yes! Pro and Business plan users can connect their own custom domains to their Linkify profile. We provide full support for domain configuration and SSL certificates.",
  },
  {
    question: "How do I track clicks and engagement?",
    answer:
      "Linkify provides detailed analytics for all your links, including click counts, geographic data, and device information. Pro users get access to advanced analytics with custom date ranges and export capabilities.",
  },
  {
    question: "Is there a limit to how many links I can add?",
    answer:
      "Free users can add up to 5 links. Pro users get unlimited links, while Business users also get team management capabilities and API access.",
  },
]

export default function FAQSection() {
  return (
    <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Frequently Asked Questions</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Everything you need to know about Linkify
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-3xl py-12">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

