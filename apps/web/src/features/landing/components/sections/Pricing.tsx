import { AccordionItem, Icon, PricingCard, SectionTitle } from "@/components/ui";
import type { LandingDictionary } from "../../types";
import { EnrollDialog } from "../EnrollDialog";

type PricingProps = { t: LandingDictionary["pricing"]; enroll: LandingDictionary["enroll"]; closeLabel: string };

export function Pricing({ t, enroll, closeLabel }: PricingProps) {
  return (
    <section id="pricing" className="pricing section" aria-labelledby="pricing-title">
      <div className="page-container">
        <SectionTitle id="pricing-title" index="06" eyebrow={t.eyebrow} title={t.title} lead={t.lead} align="center" />
        <div className="pricing__grid">
          {t.packages.map((pkg) => (
            <PricingCard
              key={pkg.code}
              name={pkg.code}
              descriptor={pkg.descriptor}
              promise={pkg.promise}
              features={pkg.features}
              badge={pkg.badge}
              featured={pkg.featured}
              accent={pkg.accent}
              price={t.price}
              priceNote={t.priceNote}
              action={<EnrollDialog pkg={pkg} t={enroll} closeLabel={closeLabel} variant={pkg.featured ? "primary" : "secondary"} />}
            />
          ))}
        </div>

        <AccordionItem className="comparison" title={<span>{t.compareTitle}</span>}>
          <div className="comparison__scroll" role="region" aria-label={t.compareRegion} tabIndex={0}>
            <table>
              <thead>
                <tr>
                  <th scope="col">{t.compareHead}</th>
                  {t.packages.map((pkg) => (
                    <th key={pkg.code} scope="col">
                      {pkg.code}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {t.comparison.map(({ row, includes }) => (
                  <tr key={row}>
                    <th scope="row">{row}</th>
                    {includes.map((included, i) => (
                      <td key={i}>
                        {included ? <Icon name="check" size={18} /> : <span className="comparison__dash">—</span>}
                        <span className="visually-hidden">{included ? t.included : t.notIncluded}</span>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </AccordionItem>
      </div>
    </section>
  );
}
