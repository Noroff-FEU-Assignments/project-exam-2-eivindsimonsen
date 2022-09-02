import { HeadingOne, HeadingThree } from "../../layout/Headings";
import EstablishmentForm from "../../forms/EstablishmentForm";
import UserMessage from "../../common/UserMessage";

function Admin() {
  // Removes the active link on nav home link
  const homeLink = document.querySelector(".home-link");
  // This will create an error in the console because the classlists dont exist the first milliesecond
  setTimeout(function () {
    if (homeLink.classList.contains("active")) {
      homeLink.classList.remove("active");
    }
  }, 100);

  return (
    <>
      <HeadingOne title="Hello user" />
      <section id="admin-panel">
        <EstablishmentForm />
        <section id="user-messages">
          <HeadingThree title="User messages and questions" />
          <UserMessage />
        </section>
      </section>
    </>
  );
}

export default Admin;
