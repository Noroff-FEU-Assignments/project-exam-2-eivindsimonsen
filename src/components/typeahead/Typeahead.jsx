import { API_PRODUCT_URL, API_CONSUMER_KEY, API_SECRET_KEY } from "../../constants/api";
import { useEffect } from "react";

const url = API_PRODUCT_URL + "?" + API_CONSUMER_KEY + "&" + API_SECRET_KEY;

function Typeahead() {
  // Run this code everytime the dom renders, else the addeventlistener will not work
  useEffect(() => {
    // Target the search input and element which will contain search results
    const search = document.querySelector("#search");
    const matchList = document.querySelector(".searchbar-typeahead");

    // This removes a wierd border which showed up when the array was empty
    matchList.style.display = "none";

    const searchProduct = async (searchText) => {
      // Call the api
      const response = await fetch(url);
      const values = await response.json();

      // Filter json response to input value
      let matches = values.filter((item) => {
        const regex = new RegExp(`^${searchText}`, "gi");
        return item.name.match(regex) || item.price.match(regex);
      });

      // If no text remove all results
      if (searchText.length === 0) {
        matches = [];
        matchList.innerHTML = "";
      }

      // If text is greater than 0, show the matchList div with the API content
      if (searchText.length > 0) {
        matchList.style.display = "flex";
      } else {
        matchList.style.display = "none";
      }

      /* if (matches === []) {
        matchList.innerHTML = "No what is this?";
      } */

      // Call the function which creates the html
      outputHtml(matches);
    };

    // Map through the filtered API and display html accordingly
    const outputHtml = (matches) => {
      if (matches.length > 0) {
        const html = matches.map((match) => `<a href="/explore/accommodationDetails/${match.id}"><img src=${match.images[0].src} class="banan" alt=${match.images[0].alt} />${match.name} | <span>${match.price}kr</span></a>`).join("");

        // Set the mapped result into the matchList dom
        matchList.innerHTML = html;
      } else {
        matchList.innerHTML = "<p>No available accommodation...</p>";
      }
    };

    // Check if the search input exists, this is to avoid an error where addeventlister is retrieved as null
    if (search) {
      search.addEventListener("input", () => searchProduct(search.value));
    }
  }, []);

  return (
    <>
      <input type="search" placeholder="Search..." id="search" className="search-bar-input" aria-label="Search" />
      <label htmlFor="search">
        <i className="fa-solid fa-magnifying-glass"></i>
      </label>
      <div className="searchbar-typeahead"></div>
    </>
  );
}

export default Typeahead;
