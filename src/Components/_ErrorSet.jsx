export default function _errorSet({ title, description }) {
   const el = document.querySelector("title");
   if (title) {
      el.innerText = `${title}`;
   } else {
      el.innerText = "Page d'erreur";
   }
