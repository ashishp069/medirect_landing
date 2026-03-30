import React from "react";
import LegalPage from "./LegalPage";

export default function PrivacyPolicy() {
  return (
    <LegalPage title="Privacy Policy">
      <h2>1. Introduction</h2>
      <p>
        Welcome to MeDirect Doctor. We value your privacy and are committed to protecting 
        your personal and professional data. This Privacy Policy explains how we collect, 
        use, and safeguard your information when you use our virtual clinic platform.
      </p>

      <h2>2. Information We Collect</h2>
      <p>We may collect the following types of information:</p>
      <ul>
        <li><strong>Personal Information:</strong> Name, email address, phone number, and medical credentials.</li>
        <li><strong>Usage Data:</strong> Information about how you navigate and interact with our application.</li>
      </ul>

      <h2>3. How We Use Your Information</h2>
      <p>
        We use the collected data to verify your medical credentials, facilitate instant setup 
        for your virtual clinic, provide customer support, and improve our services.
      </p>
      
      {/* Add the rest of your actual policy text here */}
    </LegalPage>
  );
}