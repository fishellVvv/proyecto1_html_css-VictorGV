document.addEventListener("DOMContentLoaded", () => {
  const btn =
    document.getElementById("burguer") || document.querySelector(".burguer");
  const nav = document.getElementById("nav");
  if (!btn || !nav) return;

  btn.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
});

nav.addEventListener("click", (e) => {
  if (e.target.closest("a")) nav.classList.remove("open");
});
