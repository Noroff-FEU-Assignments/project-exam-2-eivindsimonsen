import { HeadingOne, HeadingThree } from "../../layout/Headings";
import EstablishmentForm from "../../forms/EstablishmentForm";
import UserMessage from "../../common/UserMessage";

function Admin() {
  return (
    <>
      <HeadingOne title="Hello user" />
      <section id="admin-panel">
        <EstablishmentForm />
        <section id="user-messages">
          <HeadingThree title="User messages and questions" />
          <UserMessage />
          <UserMessage />
          <UserMessage />
        </section>
      </section>
    </>
  );
}

export default Admin;
