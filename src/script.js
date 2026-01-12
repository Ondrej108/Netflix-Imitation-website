/**
 * @fileoverview Netflix app scroll icon and navigation buttons management
 * @author Ondřej Medaš
 */

/**
 * Scroll to top icon element
 * @type {HTMLElement|null}
 */
const icon = document.getElementById("icon");

/**
 * Shows/hides scroll icon based on scroll position
 * @function
 * @param {Event} event - Scroll event
 * @returns {void}
 */
window.addEventListener("scroll", (event) => {
  if (!icon) return;

  icon.classList.toggle("visible", window.scrollY >= 500);
});

/**
 * Scrolls smoothly to top when icon is clicked
 * @function
 * @param {Event} event - Click event
 * @returns {void}
 */
icon?.addEventListener("click", (event) => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

/**
 * Redirects to registration page
 * @function
 * @param {Event} event - Click event
 * @returns {void}
 */
document.getElementById("headBtn").addEventListener("click", (event) => {
  window.location.href = "registrace.html";
});

/**
 * Redirects to movies page
 * @function
 * @param {Event} event - Click event
 * @returns {void}
 */
document.getElementById("subSecBtn").addEventListener("click", (event) => {
  window.location.href = "movies.html";
});
