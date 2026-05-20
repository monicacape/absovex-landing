import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Absovex",
  description:
    "Read the Absovex Privacy Policy explaining how your information is collected, used, and protected.",
};

type Section = {
  heading: string;
  content: Array<
    { type: "paragraph"; text: string } | { type: "list"; items: string[] }
  >;
};

const sections: Section[] = [
  {
    heading: "1. Information We Collect",
    content: [
      {
        type: "paragraph",
        text: "When using Absovex, you may voluntarily provide information including:",
      },
      {
        type: "list",
        items: [
          "Medication names",
          "Supplement and vitamin information",
          "Food, beverage, and timing habits",
          "Daily routine details",
          "Report preferences",
          "Email address",
          "Payment-related information",
        ],
      },
      {
        type: "paragraph",
        text: "We may also automatically collect limited technical information such as:",
      },
      {
        type: "list",
        items: [
          "Browser type",
          "Device type",
          "IP address",
          "Pages visited",
          "Usage activity",
          "Referral source",
          "Cookies and analytics data",
        ],
      },
    ],
  },
  {
    heading: "2. Health-Related Information",
    content: [
      {
        type: "paragraph",
        text: "Absovex may process information related to medications, supplements, routines, and timing habits in order to generate educational reports and informational outputs.",
      },
      {
        type: "paragraph",
        text: "Absovex is not a healthcare provider, health insurance provider, or medical facility, and the platform is not intended to operate as a covered entity under the Health Insurance Portability and Accountability Act (HIPAA).",
      },
    ],
  },
  {
    heading: "3. How We Use Information",
    content: [
      { type: "paragraph", text: "We use information to:" },
      {
        type: "list",
        items: [
          "Generate personalized informational reports",
          "Provide educational timing guidance",
          "Improve platform functionality",
          "Respond to support requests",
          "Process payments",
          "Monitor platform performance and security",
          "Analyze usage trends",
          "Prevent abuse or fraudulent activity",
        ],
      },
    ],
  },
  {
    heading: "4. Payment Processing",
    content: [
      {
        type: "paragraph",
        text: "Payments are securely processed through third-party payment providers, including Stripe.",
      },
      {
        type: "paragraph",
        text: "Absovex does not directly store complete credit card or payment card information on our servers.",
      },
      {
        type: "paragraph",
        text: "Payment information submitted during checkout is governed by the privacy and security practices of the applicable payment provider.",
      },
    ],
  },
  {
    heading: "5. Data Retention",
    content: [
      {
        type: "paragraph",
        text: "Absovex aims to minimize unnecessary data retention whenever reasonably possible.",
      },
      {
        type: "paragraph",
        text: "Some information may be temporarily processed, cached, logged, or retained for operational, technical, fraud prevention, customer support, legal, or security purposes.",
      },
      {
        type: "paragraph",
        text: "We do not sell personal health-related information submitted through the platform.",
      },
    ],
  },
  {
    heading: "6. Cookies and Analytics",
    content: [
      {
        type: "paragraph",
        text: "Absovex may use cookies, analytics tools, and similar technologies to:",
      },
      {
        type: "list",
        items: [
          "Improve website performance",
          "Understand user behavior",
          "Measure traffic and engagement",
          "Maintain platform security",
        ],
      },
      {
        type: "paragraph",
        text: "You may disable cookies through your browser settings, though some features of the platform may not function properly.",
      },
    ],
  },
  {
    heading: "7. Third-Party Services",
    content: [
      {
        type: "paragraph",
        text: "Absovex may use third-party providers and infrastructure services including:",
      },
      {
        type: "list",
        items: [
          "Stripe",
          "Hosting providers",
          "Analytics providers",
          "Email delivery services",
          "API and data providers",
        ],
      },
      {
        type: "paragraph",
        text: "These third parties may process limited information as necessary to support platform functionality.",
      },
    ],
  },
  {
    heading: "8. Data Security",
    content: [
      {
        type: "paragraph",
        text: "Absovex uses reasonable administrative, technical, and organizational measures designed to help protect information from unauthorized access, disclosure, misuse, or destruction.",
      },
      {
        type: "paragraph",
        text: "However, no system, transmission method, or storage platform is completely secure, and we cannot guarantee absolute security.",
      },
    ],
  },
  {
    heading: "9. Your Choices",
    content: [
      {
        type: "paragraph",
        text: "You may choose not to provide certain information, though this may limit the functionality of the platform or prevent report generation.",
      },
      {
        type: "paragraph",
        text: "You may contact us regarding questions about your information or support requests at: team@absovex.com",
      },
    ],
  },
  {
    heading: "10. Children's Privacy",
    content: [
      {
        type: "paragraph",
        text: "Absovex is not intended for individuals under the age of 18.",
      },
      {
        type: "paragraph",
        text: "We do not knowingly collect personal information from children under 18.",
      },
    ],
  },
  {
    heading: "11. Changes to This Privacy Policy",
    content: [
      {
        type: "paragraph",
        text: "We may update this Privacy Policy from time to time.",
      },
      {
        type: "paragraph",
        text: "Updated versions will be posted on this page with a revised effective date.",
      },
      {
        type: "paragraph",
        text: "Continued use of the platform after updates constitutes acceptance of the revised Privacy Policy.",
      },
    ],
  },
  {
    heading: "12. Contact",
    content: [
      {
        type: "paragraph",
        text: "If you have questions about this Privacy Policy, please contact: team@absovex.com",
      },
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="container py-16 lg:py-24 max-w-content-sm">
      <div className="max-w-3/4 mx-auto">
        <h1 className="mb-3 text-accent">Privacy Policy</h1>
        <p className="text-sm text-muted mb-10">Effective Date: June 2026</p>

        <div className="flex flex-col gap-4 mb-10">
          <p className="text-base leading-8 text-muted">
            Absovex respects your privacy and is committed to protecting the
            information you share with us. This Privacy Policy explains how
            information is collected, used, processed, and protected when you
            use the Absovex website, application, reports, and related services.
          </p>
          <p className="text-base leading-8 text-muted">
            By using Absovex, you agree to the practices described in this
            Privacy Policy.
          </p>
        </div>

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
