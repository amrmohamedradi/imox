import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, LegalSection } from "@/components/legal-page";

export const Route = createFileRoute("/terms-of-use")({
  head: () => ({
    meta: [
      { title: "Terms of Use | iMOX Copilot" },
      { name: "description", content: "Terms governing the use of the iMOX Copilot platform." },
    ],
  }),
  component: TermsOfUse,
});

function TermsOfUse() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms of Use"
      updated="3 September 2026"
      intro={
        <>
          <p>These Terms govern the use of the iMOX Copilot platform.</p>
          <p>By using iMOX, you agree to these terms.</p>
        </>
      }
    >
      <LegalSection number="01" title="Service Description">
        <p>
          iMOX Copilot is a productivity platform that converts communication into structured tasks
          using artificial intelligence.
        </p>
      </LegalSection>
      <LegalSection number="02" title="User Accounts">
        <p>To use iMOX, users must create an account using a phone number or email address.</p>
        <p>Users are responsible for maintaining the confidentiality of their account.</p>
      </LegalSection>
      <LegalSection number="03" title="Acceptable Use">
        <p>
          <strong className="text-brand-ink">
            There is no tolerance for objectionable content or abusive users on iMOX.
          </strong>{" "}
          iMOX is a communication platform, and the people you message are entitled to use it
          without being harassed, threatened or abused.
        </p>
        <p>Users may not:</p>
        <ul className="list-disc space-y-2 pl-5 marker:text-primary">
          <li>Post, send or share objectionable content.</li>
          <li>Harass, bully, stalk, impersonate or intimidate any other person.</li>
          <li>Send unsolicited bulk messages, spam, scams or fraudulent offers.</li>
          <li>Share another person's private information without their consent.</li>
          <li>Use the platform for illegal purposes.</li>
          <li>Attempt to gain unauthorized access.</li>
          <li>Upload harmful software.</li>
          <li>Interfere with system security.</li>
        </ul>
      </LegalSection>
      <LegalSection number="04" title="Reporting, Blocking and Enforcement">
        <p>
          Every message in iMOX can be reported, and every user can be blocked. Reporting is
          available from any message and from a person's profile; blocking is available from a
          conversation and from a person's profile.
        </p>
        <p>
          <strong className="text-brand-ink">
            We review every report and act within 24 hours of receiving it.
          </strong>{" "}
          Where a report is upheld we remove the offending content and, for serious or repeated
          violations, suspend or permanently terminate the account responsible.
        </p>
        <p>
          To report abuse outside the app, or to raise a concern about how a report was handled,
          contact{" "}
          <a
            className="font-semibold text-primary hover:underline"
            href="mailto:info@dib-holding.com"
          >
            info@dib-holding.com
          </a>
          .
        </p>
      </LegalSection>
      <LegalSection number="05" title="User Content">
        <p>Users retain ownership of their content.</p>
        <p>
          Users are solely responsible for the content they post, send or share, and content that
          breaches Section 3 may be removed without notice.
        </p>
        <p>
          By using iMOX, users grant iMOX the right to process data necessary to provide the
          service.
        </p>
      </LegalSection>
      <LegalSection number="06" title="AI Features">
        <p>
          iMOX uses artificial intelligence to assist with task generation, follow-ups, and
          summaries.
        </p>
        <p>AI-generated outputs are provided as assistance and may require user verification.</p>
      </LegalSection>
      <LegalSection number="07" title="Availability">
        <p>
          We strive to provide reliable service but cannot guarantee uninterrupted availability.
        </p>
      </LegalSection>
      <LegalSection number="08" title="Limitation of Liability">
        <p>iMOX shall not be liable for indirect damages resulting from the use of the platform.</p>
      </LegalSection>
      <LegalSection number="09" title="Termination">
        <p>Accounts may be suspended or terminated if users violate these terms.</p>
        <p>Users may delete their accounts at any time.</p>
      </LegalSection>
      <LegalSection number="10" title="Governing Law">
        <p>These Terms are governed by the laws of Germany.</p>
      </LegalSection>
      <LegalSection number="11" title="Contact">
        <p>
          For questions regarding these Terms:{" "}
          <a
            className="font-semibold text-primary hover:underline"
            href="mailto:info@dib-holding.com"
          >
            info@dib-holding.com
          </a>
        </p>
      </LegalSection>
    </LegalPage>
  );
}
