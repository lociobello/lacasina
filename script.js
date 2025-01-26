// document.addEventListener("DOMContentLoaded", () => {
//   const links = document.querySelectorAll("#navbar-left a");
//   links.forEach((link) => {
//     link.addEventListener("click", (event) => {
//       event.preventDefault();
//       const targetId = link.textContent.toLowerCase().replace("'", "").replace(" ", "-");
//       const targetElement = document.getElementById(targetId);
//       if (targetElement) {
//         const offset = 50; // Adjust this value to set the offset
//         const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
//         const offsetPosition = elementPosition - offset;
//         window.scrollTo({
//           top: offsetPosition,
//           behavior: "smooth",
//         });
//       }
//     });
//   });
// });
