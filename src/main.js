  const menuBtn = document.getElementById("menu-btn");
  const drawer = document.getElementById("drawer");
  const overlay = document.getElementById("overlay");
  const closeBtn = document.getElementById("close-btn");

  function openMenu() {
    drawer.classList.remove("hidden");
    overlay.classList.remove("hidden");
    setTimeout(() => drawer.classList.remove("translate-x-full"), 10);
  }

  function closeMenu() {
    drawer.classList.add("translate-x-full");
    overlay.classList.add("hidden");
    setTimeout(() => drawer.classList.add("hidden"), 300);
  }

  menuBtn.addEventListener("click", openMenu);
  closeBtn.addEventListener("click", closeMenu);
  overlay.addEventListener("click", closeMenu);