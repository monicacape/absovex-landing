import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Absovex",
  description:
    "Read the Absovex Terms of Service governing your use of the platform.",
};

type Section = {
  heading: string;
  content: Array<
    { type: "paragraph"; text: string } | { type: "list"; items: string[] }
  >;
};

const sections: Section[] = [
  {
    heading: "1. Educational and Informational Use Only",
    content: [
      {
        type: "paragraph",
        text: "Absovex is an educational and informational platform designed to help users identify potential medication, supplement, food, beverage, and timing considerations based on the information submitted.",
      },
      {
        type: "paragraph",
        text: "Absovex does not provide medical advice, diagnosis, treatment, or healthcare services. The platform is not intended to replace consultation with a licensed physician, pharmacist, or qualified healthcare professional.",
      },
      {
        type: "paragraph",
        text: "Users should always consult a qualified healthcare provider before starting, stopping, combining, spacing, or adjusting any medication, supplement, vitamin, mineral, or health-related routine.",
      },
    ],
  },
  {
    heading: "2. No Healthcare Provider Relationship",
    content: [
      {
        type: "paragraph",
        text: "Use of Absovex does not establish any physician-patient, pharmacist-patient, therapist-patient, or healthcare provider relationship between Absovex and the user.",
      },
    ],
  },
  {
    heading: "3. User Responsibility",
    content: [
      { type: "paragraph", text: "You are solely responsible for:" },
      {
        type: "list",
        items: [
          "The accuracy of the information you submit",
          "Reviewing and interpreting the information provided",
          "Decisions related to medications, supplements, vitamins, minerals, food, beverages, and timing routines",
          "Consulting appropriate healthcare professionals regarding your health decisions",
        ],
      },
      {
        type: "paragraph",
        text: "Absovex is not responsible for outcomes resulting from incomplete, inaccurate, outdated, or incorrectly entered information.",
      },
    ],
  },
  {
    heading: "4. No Guarantees or Warranties",
    content: [
      {
        type: "paragraph",
        text: "Absovex provides informational guidance only.",
      },
      { type: "paragraph", text: "We do not guarantee:" },
      {
        type: "list",
        items: [
          "Medical accuracy",
          "Clinical effectiveness",
          "Improved absorption",
          "Health outcomes",
          "Safety",
          "Prevention of interactions",
          "Suitability for your specific medical condition",
        ],
      },
      {
        type: "paragraph",
        text: 'All services, reports, schedules, timing suggestions, interaction summaries, and informational outputs are provided "as is" and "as available" without warranties of any kind, express or implied.',
      },
    ],
  },
  {
    heading: "5. Not for Emergencies",
    content: [
      {
        type: "paragraph",
        text: "Absovex should not be used for emergency medical situations, urgent healthcare decisions, overdose concerns, allergic reactions, or any condition requiring immediate medical attention.",
      },
      {
        type: "paragraph",
        text: "If you believe you are experiencing a medical emergency, contact emergency services or a licensed healthcare provider immediately.",
      },
    ],
  },
  {
    heading: "6. Payments and Purchases",
    content: [
      {
        type: "paragraph",
        text: "Certain features or reports within Absovex may require payment.",
      },
      {
        type: "paragraph",
        text: "Payments are securely processed through third-party payment providers, including Stripe. Absovex does not directly store full payment card information.",
      },
      {
        type: "paragraph",
        text: "By submitting payment information, you represent that you are authorized to use the selected payment method.",
      },
    ],
  },
  {
    heading: "7. Refund Policy",
    content: [
      {
        type: "paragraph",
        text: "Due to the digital and personalized nature of the reports generated through Absovex, purchases are generally non-refundable once a report has been generated or delivered.",
      },
      {
        type: "paragraph",
        text: "If you experience a technical issue or billing error, please contact: team@absovex.com",
      },
      {
        type: "paragraph",
        text: "We reserve the right to review refund requests on a case-by-case basis.",
      },
    ],
  },
  {
    heading: "8. Privacy",
    content: [
      {
        type: "paragraph",
        text: "Your use of Absovex is also governed by our Privacy Policy.",
      },
    ],
  },
  {
    heading: "9. Intellectual Property",
    content: [
      {
        type: "paragraph",
        text: "All content, branding, software, reports, graphics, layouts, algorithms, workflows, and platform materials associated with Absovex are owned by Absovex or its licensors and are protected by applicable intellectual property laws.",
      },
      { type: "paragraph", text: "You may not:" },
      {
        type: "list",
        items: [
          "Copy",
          "Reproduce",
          "Resell",
          "Redistribute",
          "Reverse engineer",
          "Modify",
          "Commercialize",
        ],
      },
      {
        type: "paragraph",
        text: "any portion of the platform without written permission.",
      },
    ],
  },
  {
    heading: "10. Acceptable Use",
    content: [
      { type: "paragraph", text: "You agree not to:" },
      {
        type: "list",
        items: [
          "Use the platform unlawfully",
          "Attempt unauthorized access",
          "Interfere with platform operation",
          "Upload malicious code",
          "Misrepresent your identity",
          "Use the platform to violate laws or regulations",
        ],
      },
    ],
  },
  {
    heading: "11. Limitation of Liability",
    content: [
      {
        type: "paragraph",
        text: "To the fullest extent permitted by law, Absovex, its owners, operators, affiliates, contractors, employees, and partners shall not be liable for:",
      },
      {
        type: "list",
        items: [
          "Indirect damages",
          "Incidental damages",
          "Consequential damages",
          "Health-related outcomes",
          "Medication-related outcomes",
          "Data loss",
          "Business interruption",
          "Reliance on informational outputs",
        ],
      },
      {
        type: "paragraph",
        text: "arising from the use of or inability to use the platform.",
      },
    ],
  },
  {
    heading: "12. Third-Party Services",
    content: [
      {
        type: "paragraph",
        text: "Absovex may rely on or integrate with third-party services, including payment processors, analytics providers, hosting services, APIs, and data providers.",
      },
      {
        type: "paragraph",
        text: "We are not responsible for the availability, accuracy, security, or practices of third-party services.",
      },
    ],
  },
  {
    heading: "13. Modifications to the Platform or Terms",
    content: [
      {
        type: "paragraph",
        text: "We reserve the right to modify, suspend, discontinue, or update any part of the platform or these Terms at any time without prior notice.",
      },
      {
        type: "paragraph",
        text: "Continued use of Absovex after updates constitutes acceptance of the revised Terms.",
      },
    ],
  },
  {
    heading: "14. Age Requirement",
    content: [
      {
        type: "paragraph",
        text: "You must be at least 18 years old to use Absovex.",
      },
    ],
  },
  {
    heading: "15. Governing Law",
    content: [
      {
        type: "paragraph",
        text: "These Terms shall be governed by and interpreted in accordance with the laws of the State of Florida, without regard to conflict of law principles.",
      },
    ],
  },
  {
    heading: "16. Contact",
    content: [
      {
        type: "paragraph",
        text: "For questions regarding these Terms, please contact: team@absovex.com",
      },
    ],
  },
];

export default function TermsOfServicePage() {
  return (
    <div className="container py-16 lg:py-24 max-w-content-sm">
      <div className="lg:max-w-3/4 mx-auto">
        <h1 className="mb-3 text-accent">Terms of Service</h1>
        <p className="text-sm text-muted mb-10">Effective Date: June 2026</p>

        <p className="text-base leading-8 text-muted mb-10">
          Welcome to Absovex. By accessing or using the Absovex website,
          application, reports, or related services, you agree to these Terms of
          Service. If you do not agree to these Terms, please do not use the
          platform.
        </p>

        <div className="flex flex-col gap-10">
          {sections.map((section) => (
            <div key={section.heading} className="flex flex-col gap-4">
              <h3 className="text-base font-semibold text-heading">
                {section.heading}
              </h3>
              {section.content.map((block, i) =>
                block.type === "paragraph" ? (
                  <p key={i} className="text-base leading-8 text-muted">
                    {block.text}
                  </p>
                ) : (
                  <ul key={i} className="flex flex-col gap-2 pl-6">
                    {block.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-base leading-8 text-muted"
                      >
                        <span className="mt-3 size-1.5 rounded-full bg-muted shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                ),
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
