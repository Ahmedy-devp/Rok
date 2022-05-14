const mq = window.matchMedia("(max-width:768px)");
if (mq.matches) {
  const mainNav = document.getElementById("list");
  const menuIcon = document.querySelector(".menu-icon");

  menuIcon.addEventListener("click", function () {
    if (mainNav.style.display != "block") {
      mainNav.style.display = "block";
      this.innerHTML = "X";
    } else {
      mainNav.style.display = "none";
      this.innerHTML = "MENU";
    }
  });
}
