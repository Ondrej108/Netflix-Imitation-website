/**
 * @fileoverview Movie search functionality - API
 * @author Ondřej Medaš
 */

/**
 * Movie selection dropdown element
 * @type {HTMLSelectElement|null}
 */
const movieSelect = document.getElementById("movieOption");

/**
 * Handles movie search when dropdown value changes
 * @function
 * @param {Event} event - Change event from select element
 * @returns {void}
 */
movieSelect.addEventListener("change", (event) => {
  // Remove existing error messages before new search
  document.querySelectorAll(".error-message").forEach((msg) => msg.remove());
  /**
   * Selected value from dropdown
   * @type {string}
   */
  const selectedValue = movieSelect.value;

  /**
   * API URL with encoded search query
   * @type {string}
   */
  const url = `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(
    selectedValue
  )}`;

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      /**
       * Container element for movie results
       * @type {HTMLElement|null}
       */
      const movContainer = document.getElementById("movieContainer");
      movContainer.innerHTML = "";

      /**
       * Displays movies with images in the container
       * @param {Object} item - Movie data from API
       * @returns {void}
       */
      data.forEach((item) => {
        if (item.show.image && item.show.image.medium) {
          movContainer.innerHTML += `<img src="${item.show.image.medium}" alt="${item.show.name}">`;
        }
      });
    })

    /**
     * Handles API fetch errors and displays error message to user
     * @param {Error} error - The error object from failed fetch request
     */
    .catch((error) => {
      const movContainer = document.getElementById("movieContainer");
      movContainer.innerHTML = "";
      const newParagraph = document.createElement("p");
      newParagraph.textContent =
        "Sorry, er is een fout opgetreden bij het laden van de gegevens.";
      movContainer.appendChild(newParagraph);
      newParagraph.classList.add("error-message");
    });
});

/**
 * Back to main page button element
 * @type {HTMLButtonElement|null}
 */
const movButton = document.getElementById("movBtn");

/**
 * Redirects to main page when button is clicked
 * @function
 * @param {Event} event - Click event
 * @returns {void}
 */
movButton.addEventListener("click", (event) => {
  window.location.href = "index.html";
});
