import { BentoGridThirdDemo } from "@/components/Bento";
import FAQSection from "@/components/FaqAccordion";

import ShareLink from "@/components/ShareLink";
import HeroSection from "@/components/testing/hero-section";
import StatsSection from "@/components/testing/stats-section";
import TestimonialsSection from "@/components/testing/testimonials-section";
import Banner from "@/components/ui/Banner";

export default function Home() {
	return (
		<div>
			{/* <Banner /> */}
			<HeroSection/>
			<ShareLink/>
			<BentoGridThirdDemo/>
			<StatsSection/>
			<TestimonialsSection/>
			<FAQSection/>
		</div>
	);
}
