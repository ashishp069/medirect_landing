import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function LegalPage() {
  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-10 col-xl-8">
          
          {/* Simple navigation back to home */}
          <div className="mb-4 wow animated fadeInDown">
            <Link to="/" className="text-decoration-none fw-bold" style={{ color: "var(--primary-color, #1a3b5c)" }}>
              &larr; Back to Home
            </Link>
          </div>

          <div className="legal-content wow animated fadeInUp">
            <h1 className="mb-4 fw-bold">Terms of Use</h1>
            {/* <p className="text-muted mb-5"><strong>Last Updated:</strong> March 2026</p> */}

            <p>
              Welcome to Medirect! These Terms of Use ("Terms") govern your access to and use of the Medirect website, platform, and services (collectively, the "Platform"), operated by Medirect Pvt. Ltd. ("we," "our," or "us").
            </p>
            <p>
              By creating an account or using our Platform, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use the Platform.
            </p>

            <h4 className="mt-5 mb-3 fw-bold">1. Description of Services</h4>
            <p>
              Medirect provides a digital platform designed to empower doctors through virtual clinics, patient management tools, and related technological solutions. Medirect is strictly a technology provider and does not provide medical or healthcare services directly.
            </p>

            <h4 className="mt-5 mb-3 fw-bold">2. User Accounts and Responsibilities</h4>
            <p>To access certain features, you must register for an account. By registering, you agree to:</p>
            <ul>
              <li className="mb-2">Provide accurate, current, and complete information during the registration process.</li>
              <li className="mb-2">Maintain the security and confidentiality of your login credentials.</li>
              <li className="mb-2">Take full responsibility for all activities that occur under your account.</li>
              <li className="mb-2">Notify us immediately of any unauthorized use of your account or breach of security.</li>
            </ul>

            <h4 className="mt-5 mb-3 fw-bold">3. Professional Medical Disclaimer</h4>
            <p>As a healthcare professional using Medirect:</p>
            <ul>
              <li className="mb-2">You retain complete responsibility for the medical care, advice, diagnosis, and treatment provided to your patients.</li>
              <li className="mb-2">Medirect is not responsible for any clinical decisions made or actions taken based on the use of our Platform.</li>
              <li className="mb-2">You must ensure that your use of the Platform complies with all applicable medical board regulations, telemedicine laws, and data protection standards in your jurisdiction.</li>
            </ul>

            <h4 className="mt-5 mb-3 fw-bold">4. Acceptable Use</h4>
            <p>You agree not to use the Platform to:</p>
            <ul>
              <li className="mb-2">Violate any local, state, national, or international law or regulation.</li>
              <li className="mb-2">Upload or transmit viruses, malware, or any other malicious code.</li>
              <li className="mb-2">Attempt to gain unauthorized access to our systems, servers, or networks.</li>
              <li className="mb-2">Reproduce, duplicate, copy, sell, or resell any portion of the Platform without our express written permission.</li>
            </ul>

            <h4 className="mt-5 mb-3 fw-bold">5. Intellectual Property Rights</h4>
            <p>
              All content, features, and functionality on the Platform—including text, graphics, logos, icons, and software—are the exclusive property of Medirect Pvt. Ltd. and are protected by copyright, trademark, and other intellectual property laws.
            </p>

            <h4 className="mt-5 mb-3 fw-bold">6. Data Privacy</h4>
            <p>
              Your use of the Platform is also governed by our Privacy Policy. By using Medirect, you consent to the collection, use, and sharing of information as outlined in the Privacy Policy, specifically regarding patient data and confidentiality.
            </p>

            <h4 className="mt-5 mb-3 fw-bold">7. Limitation of Liability</h4>
            <p>
              To the maximum extent permitted by law, Medirect Pvt. Ltd. shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or goodwill, arising from:
            </p>
            <ul>
              <li className="mb-2">Your use or inability to use the Platform.</li>
              <li className="mb-2">Any unauthorized access to or alteration of your transmissions or data.</li>
              <li className="mb-2">Any medical outcomes, malpractice claims, or disputes between you and your patients.</li>
            </ul>

            <h4 className="mt-5 mb-3 fw-bold">8. Termination</h4>
            <p>
              We reserve the right to suspend or terminate your access to the Platform at our sole discretion, without prior notice, for conduct that we believe violates these Terms or is harmful to other users of the Platform, us, or third parties.
            </p>

            <h4 className="mt-5 mb-3 fw-bold">9. Governing Law</h4>
            <p>
              These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions. Any legal actions or proceedings arising out of these Terms shall be brought exclusively in the courts located in [Your City/Jurisdiction].
            </p>

            <h4 className="mt-5 mb-3 fw-bold">10. Contact Us</h4>
            <p>If you have any questions about these Terms, please contact us at:</p>
            <ul className="list-unstyled">
              <li><strong>Email:</strong> </li>
              <li><strong>Address:</strong></li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}