import { AccordionItem, Icon, PricingCard, SectionTitle } from "@/components/ui";
import { comparison, packages } from "../../content";
import { EnrollDialog } from "../EnrollDialog";

export function Pricing() {
  return (
    <section id="pricing" className="pricing section" aria-labelledby="pricing-title">
      <div className="page-container">
        <SectionTitle
          id="pricing-title"
          index="06"
          eyebrow="Пакети"
          title="Избери своя формат"
          lead="Избери формата на обучение, който е точно за теб. Всеки следващ пакет включва всичко от предишния."
          align="center"
        />
        <div className="pricing__grid">
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
              price="Цената предстои"
              priceNote="Еднократно плащане · EUR"
              action={<EnrollDialog pkg={pkg} variant={pkg.featured ? "primary" : "secondary"} label={pkg.cta} />}
            />
          ))}
        </div>

        <AccordionItem className="comparison" title={<span>Сравни START, PRO и PREMIUM</span>}>
          <div className="comparison__scroll" role="region" aria-label="Сравнение на пакетите" tabIndex={0}>
            <table>
              <thead>
                <tr>
                  <th scope="col">Какво получаваш</th>
                  {packages.map((pkg) => (
                    <th key={pkg.code} scope="col">
                      {pkg.code}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparison.map(({ row, includes }) => (
                  <tr key={row}>
                    <th scope="row">{row}</th>
                    {includes.map((included, i) => (
                      <td key={i}>
                        {included ? <Icon name="check" size={18} /> : <span className="comparison__dash">—</span>}
                        <span className="visually-hidden">{included ? "Включено" : "Не е включено"}</span>
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
