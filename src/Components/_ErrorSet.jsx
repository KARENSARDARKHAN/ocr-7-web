export default function _errorSet({ title, description }) {
   const el = document.querySelector("title");
   if (title) {
      el.innerText = `${title}`;
   } else {
      el.innerText = "Page d'erreur";
  }
  
   const desc = document.querySelector("meta[name='description']");
   if (description) {
      desc.setAttribute("content", description);
   } else {
      desc.setAttribute("content", "La page que vous demandez n'existe pas");
   }
}
