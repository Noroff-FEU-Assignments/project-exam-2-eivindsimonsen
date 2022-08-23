import ContactForm from "../forms/ContactForm";
import Heading from "./Heading";

function Footer() {
  return (
    <footer>
      <h4>
        <Heading title="Reach out to us!" />
      </h4>
      <ContactForm />
    </footer>
  );
}

export default Footer;
