const ContactUsPage = () => {
  return (
    <section className="contactUsPage">
      <h1 className="contactHeadline">Get in Touch with Mosi-Oa-Tunya Cubs!</h1>
      <p className="contactIntro">
        We invite young players and their families to join Mosi-Oa-Tunya Cubs and experience a transformative football journey. Whether you have questions about our programs, registration, or partnerships, we're here to help.
      </p>

      <div className="contactInfoSection">
        <h2 className="contactInfoHeadline">Contact Information:</h2>
        <ul className="contactList">
          <li className="contactItem"><strong>Phone:</strong> <a href="tel:+260774664764" className="contactLink">+260 774 664 764</a></li>
          <li className="contactItem"><strong>Email:</strong> <a href="mailto:motcacademy@gmail.com" className="contactLink">motcacademy@gmail.com</a></li>
          <li className="contactItem"><strong>Website:</strong> <a href="http://motcacademy.com" target="_blank" rel="noopener noreferrer" className="contactLink">motcacademy.com</a></li>
        </ul>
      </div>

      <div className="socialMediaSection">
        <h2 className="socialMediaHeadline">Connect with Us on Social Media:</h2>
        <p className="socialMediaText">
          Find us on <a href="#" target="_blank" rel="noopener noreferrer" className="socialLink">Facebook</a> and <a href="#" target="_blank" rel="noopener noreferrer" className="socialLink">Instagram</a> to stay updated on our latest news, events, and player highlights!
        </p>
        {/* Placeholder for actual social media links */}
      </div>

      <div className="locationSection">
        <h2 className="locationHeadline">Location:</h2>
        <p className="locationText">
          Mosi-Oa-Tunya Cubs Football Academy is located in Lusaka, Zambia. Currently operating at various training grounds in Lusaka, with primary sessions in the Chalala area.
        </p>
      </div>

      <div className="contactFormSection">
        <h2 className="formHeadline">Send Us a Message:</h2>
        {/* Placeholder for a contact form with fields like: Name, Email, Phone, Subject, Message */}
        <form className="contactForm">
          <div className="formGroup">
            <label htmlFor="name" className="formLabel">Name:</label>
            <input type="text" id="name" name="name" className="formInput" />
          </div>
          <div className="formGroup">
            <label htmlFor="email" className="formLabel">Email:</label>
            <input type="email" id="email" name="email" className="formInput" />
          </div>
          <div className="formGroup">
            <label htmlFor="phone" className="formLabel">Phone:</label>
            <input type="tel" id="phone" name="phone" className="formInput" />
          </div>
          <div className="formGroup">
            <label htmlFor="subject" className="formLabel">Subject:</label>
            <input type="text" id="subject" name="subject" className="formInput" />
          </div>
          <div className="formGroup">
            <label htmlFor="message" className="formLabel">Message:</label>
            <textarea id="message" name="message" rows="5" className="formTextarea"></textarea>
          </div>
          <button type="submit" className="formSubmitButton">Send Message</button>
        </form>
      </div>
    </section>
  );
};


export default ContactUsPage;