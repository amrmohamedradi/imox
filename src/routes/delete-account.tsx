import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, LegalSection } from "@/components/legal-page";

export const Route = createFileRoute("/delete-account")({
  head: () => ({
    meta: [
      { title: "Delete Your Account | iMOX Copilot" },
      { name: "description", content: "How to request deletion of your iMOX Copilot account." },
    ],
  }),
  component: DeleteAccount,
});

function DeleteAccount() {
  return (
    <LegalPage
      eyebrow="Account"
      title="Delete Your Account"
      updated="4 July 2026"
      intro={
        <p>
          You can request deletion of your iMOX Copilot account and the personal data associated
          with it at any time. This page explains how to make the request, what is deleted, and how
          long it takes.
        </p>
      }
    >
      <LegalSection number="01" title="How to Request Deletion">
        <p>
          Send an email to{" "}
          <a
            className="font-semibold text-primary hover:underline"
            href="mailto:delete@imox-app.com"
          >
            delete@imox-app.com
          </a>{" "}
          from the email address linked to your account, with the subject{" "}
          <strong className="text-brand-ink">Delete my account</strong>.
        </p>
        <p>Please include, so we can verify it's really you:</p>
        <ul className="list-disc space-y-2 pl-5 marker:text-primary">
          <li>The phone number and/or email address on your account</li>
          <li>Your display name in iMOX, if you have one</li>
        </ul>
        <p>
          We may contact you to confirm the request before we proceed. Once verified, deletion
          cannot be undone.
        </p>
      </LegalSection>
      <LegalSection number="02" title="What Gets Deleted">
        <p>
          When we process your request, we permanently delete the personal data we hold about you,
          including:
        </p>
        <ul className="list-disc space-y-2 pl-5 marker:text-primary">
          <li>Your profile - name, phone number, email address, and profile picture</li>
          <li>Your messages, conversations, and voice notes</li>
          <li>Your tasks, task comments, and deadline follow-ups</li>
          <li>Your workspace memberships and workspaces you own</li>
          <li>Your saved contacts, devices, and sign-in tokens</li>
        </ul>
      </LegalSection>
      <LegalSection number="03" title="What We May Retain">
        <p>
          We may retain a limited amount of data where we are legally required to, for example,
          records needed to meet accounting, tax, or security obligations. This data is kept only
          for as long as the law requires and is then deleted.
        </p>
        <p>
          Content you shared in group chats or workspaces may remain visible to other members, but
          it is disassociated from your deleted account.
        </p>
      </LegalSection>
      <LegalSection number="04" title="Timeline">
        <p>
          We process account deletion requests within{" "}
          <strong className="text-brand-ink">30 days</strong>. Residual copies in encrypted backups
          are removed on our regular backup rotation, within{" "}
          <strong className="text-brand-ink">90 days</strong>.
        </p>
      </LegalSection>
      <LegalSection number="05" title="Contact">
        <p>
          Questions about deleting your account or your data? Email{" "}
          <a
            className="font-semibold text-primary hover:underline"
            href="mailto:delete@imox-app.com"
          >
            delete@imox-app.com
          </a>{" "}
          or the data controller, Dib GmbH, at{" "}
          <a
            className="font-semibold text-primary hover:underline"
            href="mailto:info@dib-holding.com"
          >
            info@dib-holding.com
          </a>
          .
        </p>
      </LegalSection>
    </LegalPage>
  );
}
