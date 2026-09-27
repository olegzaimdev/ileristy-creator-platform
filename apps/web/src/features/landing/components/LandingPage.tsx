import { About } from "./sections/About";
import { Audience } from "./sections/Audience";
import { Benefits } from "./sections/Benefits";
import { CourseIntro } from "./sections/CourseIntro";
import { Faq } from "./sections/Faq";
import { FinalCta } from "./sections/FinalCta";
import { Footer } from "./sections/Footer";
import { Format } from "./sections/Format";
import { Header } from "./sections/Header";
import { Hero } from "./sections/Hero";
import { Learning } from "./sections/Learning";
import { Modules } from "./sections/Modules";
import { Pricing } from "./sections/Pricing";
import { Testimonials } from "./sections/Testimonials";
import { Ticker } from "./sections/Ticker";

export function LandingPage() {
  return (
    <>
      <a className="skip-link" href="#main">
        Към съдържанието
      </a>
      <Header />
      <main id="main">
        <span id="top" />
        <Hero />
        <Ticker />
        <About />
        <CourseIntro />
        <Benefits />
        <Audience />
        <Learning />
        <Modules />
        <Format />
        <Pricing />
        <Testimonials />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
