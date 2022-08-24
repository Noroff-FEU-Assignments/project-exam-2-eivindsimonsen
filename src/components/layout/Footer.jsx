import ContactForm from "../forms/ContactForm";
import { HeadingFour, HeadingFive } from "./Headings";

function Footer() {
  return (
    <section id="footer">
      <footer>
        <HeadingFour title="Reach out to us!" />
        <ContactForm />
      </footer>
      <div className="bottom-footer">
        <HeadingFive title="Copyright © Eivind Studios" />
      </div>
    </section>
  );
}

export default Footer;
