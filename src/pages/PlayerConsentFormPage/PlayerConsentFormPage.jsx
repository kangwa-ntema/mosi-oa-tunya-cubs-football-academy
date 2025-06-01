const PlayerConsentFormPage = () => {
  return (
    <section className="consentFormPage">
      <div className="formHeader">
        <h1 className="formHeadline">PLAYER CONSENT FORM</h1>
      </div>

      <div className="formSection">
        <h2 className="sectionTitle">Participation Consent</h2>
        <p className="formParagraph">
          I hereby grant permission for my child, <span className="formBlankLine">__________________________________________</span>, to participate in the Mosi-Oa-Tunya Football Academy program. I understand that participation includes training sessions, games, and other academy-related activities.
        </p>
      </div>

      <div className="formSection">
        <h2 className="sectionTitle">Educational Emphasis:</h2>
        <p className="formParagraph">
          I acknowledge that the academy emphasizes the importance of balancing athletic development with academic success. I understand that my child is expected to maintain satisfactory academic performance in school and communicate any academic challenges to the coaching staff. I agree to support the academy's efforts to encourage academic responsibility in its players.
        </p>
      </div>

      <div className="formSection">
        <h2 className="sectionTitle">Waiver of Liability:</h2>
        <p className="formParagraph">
          I understand that participation in sports activities involves inherent risks of injury. I acknowledge these risks and, on behalf of myself and my child, hereby release and forever discharge Mosi-Oa-Tunya Cubs, its coaches, staff, volunteers, and representatives from any and all liability for any injuries, illnesses, or damages arising from my child's participation in the academy program, regardless of cause, including negligence. This waiver does not apply to injuries caused by gross negligence or intentional misconduct.
        </p>
      </div>

      <div className="formSection">
        <h2 className="sectionTitle">Medical Consent:</h2>
        <p className="formParagraph">
          In the event of an injury or illness, I authorize Mosi-Oa-Tunya Cubs staff to provide first aid and seek medical attention for my child. I understand that reasonable efforts will be made to contact me prior to seeking medical treatment, but in the event, I cannot be reached, I authorize the academy to transport my child to a licensed hospital or medical facility and consent to treatment by qualified medical personnel. I understand I am financially responsible for any medical expenses incurred.
        </p>
        <p className="formParagraph">
          Player Allergies: <span className="formBlankLine">__________________________________________________________________________________</span>
          <span className="formBlankLine">____________________________________________________________________________________________________</span>
        </p>
        <p className="formParagraph">
          Player Medical Conditions: <span className="formBlankLine">_______________________________________________________________________</span>
          <span className="formBlankLine">____________________________________________________________________________________________________</span>
        </p>
      </div>

      <div className="formSection">
        <h2 className="sectionTitle">Emergency Contact Information (Other than Parent/Guardian):</h2>
        <p className="contactField">
          Name: <span className="formBlankLine">________________________________________________</span>
        </p>
        <p className="contactField">
          Phone: <span className="formBlankLine">________________________________________________</span>
        </p>
        <p className="contactField">
          Relationship: <span className="formBlankLine">_________________________________________</span>
        </p>
      </div>

      <div className="formSection signatureSection">
        <p className="signatureField">
          Parent/Guardian’s Name: <span className="formBlankLine">__________________________________________________________________________</span>
        </p>
        <p className="signatureField">
          Date: <span className="formBlankLine">____________________________________________</span>
        </p>
        <p className="signatureField">
          Signature: <span className="formBlankLine">_______________________________________</span>
        </p>
      </div>

      <div className="formSection contactSection">
        <h2 className="sectionTitle">Contact Us:</h2>
        <p className="formParagraph">
          If you have any questions about this Consent Form, please contact us at:
        </p>
        <p className="contactInfo">
          <strong>Phone:</strong> +260 954 647 132<br />
          <strong>Email:</strong> motcacademy@gmail.com
        </p>
      </div>
    </section>
  );
};

export default PlayerConsentFormPage;