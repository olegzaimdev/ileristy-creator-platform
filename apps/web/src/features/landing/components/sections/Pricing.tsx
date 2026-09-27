import { comparison, packages } from "../../content";
import { Icon } from "../ui/Icon";
import { PricingCard } from "../ui/PricingCard";
import { SectionTitle } from "../ui/SectionTitle";

export function Pricing() {
  return (
    <section id="pricing" className="pricing section" aria-labelledby="pricing-title">
      <div className="container">
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
            <PricingCard key={pkg.code} pkg={pkg} />
          ))}
        </div>

        <details className="comparison accordion">
          <summary className="accordion__summary">
            <span>Сравни START, PRO и PREMIUM</span>
            <span className="accordion__icon" aria-hidden="true" />
          </summary>
          <div className="accordion__body">
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
          </div>
        </details>
      </div>
    </section>
  );
}
