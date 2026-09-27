import {
  AccordionItem,
  Badge,
  Button,
  Checkbox,
  CourseCard,
  ImageCard,
  Input,
  ModuleAccordion,
  PricingCard,
  ReviewCard,
  SampleTag,
  Script,
  SectionTitle,
  Select,
  StatCard,
  Textarea,
} from "@/components/ui";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { getLandingDictionary } from "@/features/landing/i18n";
import { getDictionary, getLocale } from "@/i18n/dictionaries";
import { plural } from "@/i18n/format";
import { ModalDemo } from "./ModalDemo";

const colors = [
  ["Warm Ivory", "--color-ivory", "#F7F2EC", "Основен фон"],
  ["Cream", "--color-cream", "#FBF8F4", "Повърхности, карти"],
  ["Soft Blush", "--color-blush", "#F3D9DC", "Акцентни повърхности"],
  ["Dusty Pink", "--color-dusty-pink", "#E8B8BE", "Primary CTA, акцент"],
  ["Warm Taupe", "--color-taupe", "#B5A69D", "Линии, декор — не за текст"],
  ["Espresso", "--color-espresso", "#3A302D", "Тъмни секции, PREMIUM"],
  ["Charcoal", "--color-charcoal", "#252323", "Основен текст"],
  ["White", "--color-white", "#FFFFFF", "Повдигнати карти"],
];

const typeScale = [
  ["H1 · Cormorant 400", "var(--fs-h1)", "96 / 44px", "display", "Стани експерт"],
  ["H2 · Cormorant 400", "var(--fs-h2)", "72 / 38px", "display", "Какво има вътре?"],
  ["H3 · Cormorant 400", "var(--fs-h3)", "44 / 28px", "display", "PREMIUM"],
  ["Script · Great Vibes", "var(--fs-script)", "68 / 32px", "script", "твоят нов етап"],
  ["Body · Manrope 400", "var(--fs-body)", "17 / 16px", "body", "Създавай съдържание, което привлича клиенти."],
  ["Small · Manrope 500", "var(--fs-small)", "14px", "body", "Еднократно плащане · EUR"],
  ["Nav · Manrope 500 · 0.08em", "var(--fs-caption)", "12px", "nav", "ПРОГРАМА"],
];

const tokenGroups: [string, string[]][] = [
  ["Spacing · 4px base", ["--space-1 4", "--space-2 8", "--space-4 16", "--space-6 24", "--space-8 32", "--space-12 48", "--space-16 64", "--space-24 96", "--section-y 80→160"]],
  ["Radius", ["--radius-xs 6", "--radius-sm 12", "--radius-md 20", "--radius-lg 28", "--radius-pill 999", "--radius-arch"]],
  ["Motion", ["--ease-editorial", "--dur-fast 200ms", "--dur-base 400ms", "--dur-slow 700ms", "--dur-reveal 1100ms"]],
  ["Breakpoints", ["1440 desktop", "1280 laptop", "1024 tablet landscape", "768 tablet", "390 mobile"]],
];

export async function DesignSystem() {
  const [locale, common, landing] = await Promise.all([getLocale(), getDictionary(), getLandingDictionary()]);
  const { packages } = landing.pricing;
  const modules = landing.modules.items;
  const reviews = landing.results.reviews;
  const sample = <SampleTag label={common.ui.sample.label} title={common.ui.sample.title} />;

  return (
    <main className="ds page-container">
      <header className="ds__intro">
        <p className="eyebrow">ILERISTY · Design system v1</p>
        <h1 className="ds__title">
          Дизайн <em>система</em>
        </h1>
        <Script>with love, Leri</Script>
        <p className="section-title__lead">
          Токени и компоненти за Next.js реализацията. Токените са в <code>src/styles/tokens.css</code>, компонентите — в <code>src/components/ui</code>.
        </p>
        <Button href="/design-preview" variant="secondary" arrow>
          Към landing страницата
        </Button>
      </header>

      <section className="ds__section">
        <SectionTitle title="Цветове" eyebrow="01 · Palette" />
        <div className="ds__swatches">
          {colors.map(([name, token, hex, use]) => (
            <div key={token} className="ds__swatch">
              <span style={{ background: `var(${token})` }} />
              <strong>{name}</strong>
              <code>{token}</code>
              <small>
                {hex} · {use}
              </small>
            </div>
          ))}
        </div>
      </section>

      <section className="ds__section">
        <SectionTitle title="Типография" eyebrow="02 · Cormorant Garamond + Great Vibes + Manrope" />
        <div className="ds__type">
          {typeScale.map(([label, size, px, kind, sample]) => (
            <div key={label} className="ds__type-row">
              <div>
                <strong>{label}</strong>
                <small>
                  {px} · <code>{size}</code>
                </small>
              </div>
              <p className={`ds__type-sample ds__type-sample--${kind}`} style={{ fontSize: size }}>
                {sample}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="ds__section">
        <SectionTitle title="Токени" eyebrow="03 · Spacing, radius, motion" />
        <div className="ds__tokens">
          {tokenGroups.map(([group, items]) => (
            <div key={group}>
              <h3 className="ds__label">{group}</h3>
              <ul>
                {items.map((item) => (
                  <li key={item}>
                    <code>{item}</code>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="ds__section">
        <SectionTitle title="Бутони и бейджове" eyebrow="04 · Button · Badge" />
        <div className="ds__row">
          <Button>Primary</Button>
          <Button arrow>Primary + arrow</Button>
          <Button variant="secondary">Secondary</Button>
          <Button size="lg" arrow>
            Large
          </Button>
          <Button disabled>Disabled</Button>
          <Button variant="link">Text link</Button>
        </div>
        <div className="ds__row ds__row--dark">
          <Button variant="inverse">Inverse</Button>
          <Button>Primary on dark</Button>
          <Badge tone="inverse">Inverse badge</Badge>
        </div>
        <div className="ds__row">
          <Badge>Препоръчан</Badge>
          <Badge tone="outline">PRO · PREMIUM</Badge>
          {sample}
          <LanguageSwitcher current={locale} label={common.language.label} />
        </div>
      </section>

      <section className="ds__section">
        <SectionTitle
          title="Форми"
          eyebrow="05 · Input · Select · Textarea · Checkbox"
          lead="Примерна форма за контакт по CreateContactRequest. Демо — не изпраща данни."
        />
        <form className="ds__form" aria-label="Примерна форма за контакт" noValidate>
          <Input name="firstName" label="Име" placeholder="Валерия" autoComplete="given-name" required />
          <Input name="lastName" label="Фамилия" placeholder="Иванова" autoComplete="family-name" required />
          <Input
            name="email"
            type="email"
            label="Имейл"
            defaultValue="valeria@"
            autoComplete="email"
            required
            error="Въведи валиден имейл адрес"
          />
          <Input name="phone" type="tel" label="Телефон" placeholder="+359 88 123 4567" autoComplete="tel" hint="С код на държавата" />
          <Select
            name="package"
            label="Пакет"
            placeholder="Избери пакет"
            defaultValue=""
            options={packages.map((pkg) => ({ value: pkg.code, label: `${pkg.code} — ${pkg.descriptor}` }))}
          />
          <Input name="disabled" label="Поток" value="Предстои" disabled readOnly hint="Disabled" />
          <Textarea name="message" label="Съобщение" placeholder="Разкажи ми накратко за целите си…" className="ds__form-wide" />
          <Checkbox
            name="marketingConsent"
            className="ds__form-wide"
            label="Съгласна съм да получавам новини за курса. Мога да се отпиша по всяко време."
            hint="По желание"
          />
          <div className="ds__form-wide ds__row">
            <Button type="button" arrow>
              Изпрати
            </Button>
            <Button type="button" variant="secondary">
              Отказ
            </Button>
          </div>
        </form>
      </section>

      <section className="ds__section">
        <SectionTitle title="Изображения" eyebrow="06 · ImageCard" />
        <div className="ds__images">
          <ImageCard alt="Arch" caption="arch" shape="arch" tone="blush" ratio="3 / 4" />
          <ImageCard alt="Rounded" caption="rounded" shape="rounded" tone="rose" ratio="3 / 4" />
          <ImageCard alt="Soft mono" caption="soft · mono" shape="soft" tone="taupe" ratio="3 / 4" mono />
          <ImageCard alt="Circle" shape="circle" tone="ivory" ratio="1" />
          <ImageCard alt="Espresso" caption="espresso" shape="soft" tone="espresso" ratio="3 / 4" />
        </div>
      </section>

      <section className="ds__section">
        <SectionTitle title="Карти" eyebrow="07 · CourseCard · StatCard · PricingCard · ReviewCard" />
        <div className="ds__cards">
          <CourseCard icon="practice" title="Практика" text="Реални задачи още по време на курса." index={2} />
          <dl className="stats">
            <StatCard value="4+" label="години опит" tag={sample} />
            <StatCard value="100+" label="бранда" tag={sample} />
          </dl>
        </div>
        <div className="ds__pricing">
          {packages.map((pkg) => (
            <PricingCard
              key={pkg.code}
              name={pkg.code}
              descriptor={pkg.descriptor}
              promise={pkg.promise}
              features={pkg.features}
              badge={pkg.badge}
              featured={pkg.featured}
              accent={pkg.accent}
              price={landing.pricing.price}
              priceNote={landing.pricing.priceNote}
              action={
                <Button variant={pkg.featured ? "primary" : "secondary"} block arrow>
                  {pkg.cta}
                </Button>
              }
            />
          ))}
        </div>
        <div className="ds__reviews">
          {reviews.slice(0, 3).map((review) => (
            <ReviewCard key={review.handle} review={review} labels={common.ui.review} tag={sample} />
          ))}
        </div>
      </section>

      <section className="ds__section">
        <SectionTitle title="Accordion и modal" eyebrow="08 · ModuleAccordion · Modal" />
        <div>
          <AccordionItem title={<span>Обикновен AccordionItem</span>} name="ds-faq">
            <p>Използва се за ЧЗВ, сравнения и всякакво съдържание при поискване.</p>
          </AccordionItem>
        </div>
        <ModuleAccordion
          modules={modules.slice(0, 3)}
          name="ds-modules"
          labels={common.ui.module}
          lessonCount={(count) => `${count} ${plural(locale, count, common.ui.module.lessons)}`}
        />
        <div className="ds__row">
          <ModalDemo closeLabel={common.ui.close} />
        </div>
      </section>
    </main>
  );
}
