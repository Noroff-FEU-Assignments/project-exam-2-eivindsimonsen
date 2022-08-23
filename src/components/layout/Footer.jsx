import ContactForm from "../forms/ContactForm";
import Heading from "./Heading";

function Footer() {
  return (
    <>
      <footer>
        <h4>
          <Heading title="Reach out to us!" />
        </h4>
        <ContactForm />
      </footer>
      <div className="bottom-footer">
        <h5>Copyright © Eivind Studios</h5>
      </div>
    </>
  );
}

export default Footer;
