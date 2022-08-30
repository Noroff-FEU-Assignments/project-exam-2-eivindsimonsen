import { Button } from "../common/Buttons";

function Enquiry({ sent, name, mail, phone, accoName, from, to, persons }) {
  return (
    <tr className="enquiry">
      <td className="enquiry-date delivered-mobile">{sent}</td>
      <td className="enquiry-box user-message">
        <div className="user-message-image">
          <i className="fa-solid fa-user"></i>
        </div>
        <p className="delivered-desktop">Delivered: {sent}</p>
        <section className="enquiry-details">
          <div className="enquiry-details-person">
            <p>
              Full name: <span>{name}</span>
            </p>
            <p>
              Email: <span>{mail}</span>
            </p>
            <p>
              Phone: <span>{phone}</span>
            </p>
          </div>
          <div className="enquiry-details-accommodation">
            <p>
              Accommodation <span>{accoName}</span>
            </p>
            <p>
              from: <span>{from}</span>
            </p>
            <p>
              to: <span>{to}</span>
            </p>
            <p>
              How many: <span>{persons}</span>
            </p>
          </div>
        </section>
        <div className="contact-form-button enquiry-button">
          <Button btnClass="cta" btnText="Check" />
        </div>
      </td>
    </tr>
  );
}

export default Enquiry;
