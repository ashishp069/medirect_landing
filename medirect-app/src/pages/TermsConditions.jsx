import React from "react";
import LegalPage from "./LegalPage";

export default function TermsConditions() {
  return (
    <LegalPage title="Terms & Conditions" >
      <h2>1. Acceptance of Terms</h2>
      <p>
        By accessing, registering for, or using the MeDirect Doctor platform ("Service"), 
        you agree to be bound by these Terms & Conditions. If you do not agree to these terms, 
        please do not use our platform.
      </p>

      <h2>2. Professional Credentials & Registration</h2>
      <p>
        To use our virtual clinic features, you must be a licensed medical professional. By creating an account, you represent and warrant that:
      </p>
      <ul>
        <li>All registration information you submit is truthful, accurate, and current.</li>
        <li>You hold valid, active medical licenses required to practice in your jurisdiction.</li>
        <li>You will maintain the accuracy of such information and promptly update your profile if your licensing status changes.</li>
      </ul>

      <h2>3. Use of the Platform</h2>
      <p>
        MeDirect provides a technological platform to facilitate virtual consultations. <strong>We do not provide medical advice.</strong> As a healthcare provider, you retain complete professional autonomy and are solely responsible for the medical care, diagnoses, and treatments you provide to patients through our Service.
      </p>
      <h3>3.1 Acceptable Use</h3>
      <p>
        You agree to use the platform in compliance with all applicable healthcare laws and regulations, including data protection laws (e.g., HIPAA, GDPR, or local equivalents). You must not use the platform for any illegal activities or to distribute malicious software.
      </p>

      <h2>4. Patient Data & Privacy</h2>
      <p>
        You are responsible for maintaining the confidentiality of patient health information accessed or generated through our platform. Please refer to our <a href="/privacy-policy">Privacy Policy</a> for detailed information on how data is handled and protected on our servers.
      </p>

      <h2>5. Fees & Subscriptions</h2>
      <p>
        Access to certain premium features of the MeDirect Doctor platform may require a subscription. All fees are non-refundable unless otherwise stated. We reserve the right to modify our pricing with at least 30 days prior notice.
      </p>

      <h2>6. Termination</h2>
      <p>
        We reserve the right to suspend or terminate your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms & Conditions or if your medical license is suspended or revoked.
      </p>

      <h2>7. Limitation of Liability</h2>
      <p>
        In no event shall MeDirect, its directors, employees, or partners, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, or goodwill, resulting from your access to or use of (or inability to access or use) the platform.
      </p>

      <h2>8. Changes to Terms</h2>
      <p>
        We reserve the right, at our sole discretion, to modify or replace these Terms at any time. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.
      </p>

      <h2>9. Contact Us</h2>
      <p>
        If you have any questions about these Terms & Conditions, please contact our support team at <strong>support@medirect.com</strong>.
      </p>
    </LegalPage>
  );
}