import "../styles/landing.css";
import { SampleTag } from "@/components/ui";
import { getCourse } from "@/features/course/api/getCourse";
import type { CourseResponse } from "@/features/course/types/course";
import { getDictionary, getLocale } from "@/i18n/dictionaries";
import { getLandingDictionary } from "../i18n";
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

const COURSE_SLUG = "ugc-smm";

/* The landing must render even when the API is down: sections fall back to dictionary copy. */
async function loadCourse(): Promise<CourseResponse | null> {
  try {
    return await getCourse(COURSE_SLUG);
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function LandingPage() {
  const [locale, common, t, course] = await Promise.all([getLocale(), getDictionary(), getLandingDictionary(), loadCourse()]);
  const sample = <SampleTag label={common.ui.sample.label} title={common.ui.sample.title} />;

  return (
    <div className="landing">
      <a className="skip-link" href="#main">
        {common.skipLink}
      </a>
      <Header t={t.header} nav={t.nav} locale={locale} languageLabel={common.language.label} />
      <main id="main">
        <span id="top" />
        <Hero t={t.hero} sample={sample} />
        <Ticker words={t.ticker} />
        <About t={t.about} stats={t.stats} sample={sample} />
        <CourseIntro t={t.course} modules={t.modules.items} />
        <Benefits t={t.benefits} />
        <Audience t={t.audience} />
        <Learning t={t.learning} />
        <Modules t={t.modules} labels={common.ui.module} locale={locale} />
        <Format t={t.format} />
        <Pricing t={t.pricing} enroll={t.enroll} closeLabel={common.ui.close} packages={course?.packages ?? []} locale={locale} />
        <Testimonials t={t.results} reviewLabels={common.ui.review} sample={sample} />
        <Faq t={t.faq} />
        <FinalCta t={t.finalCta} />
      </main>
      <Footer t={t.footer} nav={t.nav} />
    </div>
  );
}
