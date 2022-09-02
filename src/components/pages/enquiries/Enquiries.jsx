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
              <Enquiry />
            </tbody>
          </table>
        </section>
      </Container>
    </>
  );
}

export default Enquiries;
