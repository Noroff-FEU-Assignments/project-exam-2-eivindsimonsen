import { HeadingOne } from "../../layout/Headings";
import Enquiry from "../../common/Enquiry";
import { Container } from "react-bootstrap";

function Enquiries() {
  return (
    <>
      <HeadingOne title="Hello user" />
      <Container>
        <section id="enquiries">
          <table>
            <tbody>
              <tr>
                <th className="delivered-mobile">Delivered</th>
                <th>All enquiries</th>
              </tr>
              <Enquiry sent="18/06/22" name="Ola Nordmann" mail="ola.nordmann@gmail.com" phone="123 45 678" accoName="Hotel Bristol" from="23/06/22" to="26/06/22" persons="2 persons" />

              <Enquiry sent="15/06/22" name="Kari Nordmann" mail="kari.nordmann@gmail.com" phone="384 32 483" accoName="Farm B and B" from="19/05/22" to="23/05/22" persons="1 persons" />

              <Enquiry sent="4/05/22" name="Ola-Kari Nordmann" mail="ola.kari.nordmann@gmail.com" phone="943 23 493" accoName="Guesthouse" from="29/08/22" to="26/10/22" persons="5 persons" />
            </tbody>
          </table>
        </section>
      </Container>
    </>
  );
}

export default Enquiries;
