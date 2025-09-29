document.addEventListener("DOMContentLoaded", () => {
  const root = document.documentElement;
  const btn = document.getElementById("theme-toggle");

  // Guardado y preferencia
  const prefer = () =>
    localStorage.getItem("theme") ||
    (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

  // Aplica dark o lo elimina
  const apply = (t) => {
    t === "dark"
      ? root.setAttribute("data-theme", "dark")
      : root.removeAttribute("data-theme");
    localStorage.setItem("theme", t);
  };

  // Aplica según la preferencia
  apply(prefer());
  // Al hacer clic aplica el contrario al que hay
  btn?.addEventListener("click", () =>
    apply(root.getAttribute("data-theme") === "dark" ? "light" : "dark")
  );
});
