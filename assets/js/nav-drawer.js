document.addEventListener("DOMContentLoaded", () => {
  const btn =
    document.getElementById("burger") || document.querySelector(".burger");
  const nav = document.getElementById("nav");
  if (!btn || !nav) return;

  btn.addEventListener("click", () => {
    nav.classList.toggle("open");
  });

  nav.addEventListener("click", (e) => {
    if (e.target.closest("a")) nav.classList.remove("open");
  });
});
