const sections = [
  {
    id: "openness",
    number: "I",
    title: "Openness by Default",
    body: [
      "Open Information For Iran (OIFI) exists to keep information about Iran accessible to the world. Consistent with that mission, content and data published by OIFI — including written material on this website, the OIFI Databook, reports, datasets, figures, and visualizations — are released for public reuse.",
      "We want this material to travel: to be cited by journalists, built on by researchers, referenced by policymakers, and redistributed by anyone working to keep Iran legible to the outside world.",
    ],
  },
  {
    id: "license",
    number: "II",
    title: "License — Creative Commons Attribution 4.0",
    body: [
      "Unless explicitly marked otherwise, all content and data published by OIFI are licensed under the Creative Commons Attribution 4.0 International License (CC BY 4.0).",
      "You are free to share and adapt the material for any purpose, including commercially, provided that you give appropriate credit, link to the license, and indicate if changes were made.",
      "The full license text is available at https://creativecommons.org/licenses/by/4.0/.",
    ],
  },
  {
    id: "attribution",
    number: "III",
    title: "How to Attribute",
    body: [
      'A clear credit line is sufficient. For example: "Source: Open Information For Iran (OIFI) — oifi.org, CC BY 4.0."',
      "When reusing datasets, please preserve provenance where possible: include the date of retrieval and a link to the original OIFI source. When adapting or transforming data, indicate that changes were made.",
      "Attribution must not imply endorsement by OIFI of the reusing party, their positions, or their products.",
    ],
  },
  {
    id: "exclusions",
    number: "IV",
    title: "What the License Does Not Cover",
    body: [
      "The CC BY 4.0 license applies to OIFI-authored content and data. It does not extend to:",
    ],
    list: [
      {
        heading: "Third-Party Material",
        text: "Content contributed by partners, eyewitnesses, or external sources and republished by OIFI may be subject to separate terms. Where known, such material is marked; when in doubt, contact us before reuse.",
      },
      {
        heading: "Trademarks and Identity",
        text: "The OIFI name, logo, and visual identity are not covered by CC BY 4.0 and may not be used in a way that suggests affiliation, sponsorship, or endorsement without written permission.",
      },
      {
        heading: "Software and Tools",
        text: "Code, circumvention tools, and infrastructure components are governed by their own licenses as published in their respective repositories.",
      },
      {
        heading: "Personal or Sensitive Data",
        text: "Material that could identify individuals inside Iran or expose them to risk is not published and is not licensed for reuse, even in aggregated form.",
      },
    ],
  },
  {
    id: "use",
    number: "V",
    title: "Use of This Website",
    body: [
      "This website is provided to inform the public about OIFI's mission, charter, and initiatives, and to enable volunteering and contact. You agree not to use the site to disrupt its operation, to misrepresent your identity in a way that endangers others, or to submit content you do not have the right to share.",
      "Information you submit through forms on this site is used solely to respond to you and to coordinate participation in OIFI activities.",
    ],
  },
  {
    id: "safety",
    number: "VI",
    title: "Safety and No Warranty",
    body: [
      "OIFI operates in a high-risk environment. Information published here is provided on an \"as is\" basis, without warranties of any kind. Circumstances inside Iran change rapidly; guidance that is safe today may not be safe tomorrow.",
      "Reusers of OIFI content are responsible for assessing the safety implications of republication in their own context, particularly where republication could identify sources or endanger individuals.",
    ],
  },
  {
    id: "liability",
    number: "VII",
    title: "Limitation of Liability",
    body: [
      "To the fullest extent permitted by law, OIFI and its contributors are not liable for any damages arising from the use of this website or from the reuse, adaptation, or redistribution of its content and data.",
    ],
  },
  {
    id: "changes",
    number: "VIII",
    title: "Changes to These Terms",
    body: [
      "OIFI may update these terms to reflect changes in practice, law, or the licensing of specific materials. The license applied to a given work at the time of its publication continues to apply to that version of the work.",
    ],
  },
  {
    id: "contact",
    number: "IX",
    title: "Contact",
    body: [
      "For questions about these terms, licensing clarifications, permissions beyond CC BY 4.0, or to report material that may require separate treatment, please reach out through the contact channels published on this site.",
    ],
  },
];

export function TermsPage() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="text-center">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-sm font-medium text-secondary-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Terms &amp; Conditions
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl text-balance">
            Terms of Use
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
            OIFI publishes openly so that Iran remains legible to the world.
            Our content and data are free to reuse under Creative Commons
            Attribution 4.0.
          </p>
        </div>

        <div className="mt-16 space-y-14">
          {sections.map((section) => (
            <section key={section.id} id={section.id} className="scroll-mt-24">
              <div className="mb-5 flex items-baseline gap-3">
                <span className="text-sm font-mono text-muted-foreground">
                  {section.number}
                </span>
                <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                  {section.title}
                </h2>
              </div>

              {section.body?.map((paragraph, i) => (
                <p
                  key={i}
                  className="mt-4 text-base leading-relaxed text-muted-foreground text-pretty"
                >
                  {paragraph}
                </p>
              ))}

              {section.list && (
                <div className="mt-6 space-y-4">
                  {section.list.map((item) => (
                    <div
                      key={item.heading}
                      className="rounded-lg border border-border bg-card p-5"
                    >
                      <h3 className="font-semibold text-foreground">
                        {item.heading}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </section>
          ))}
        </div>

        <div className="mt-20 border-t border-border pt-10 text-center">
          <p className="text-sm text-muted-foreground">
            Content &amp; data licensed under{" "}
            <a
              href="https://creativecommons.org/licenses/by/4.0/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-foreground"
            >
              CC BY 4.0
            </a>
            . Attribution required.
          </p>
        </div>
      </div>
    </section>
  );
}
