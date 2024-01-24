document.addEventListener("DOMContentLoaded", function () {
  function TheLink() {
    var yuhButton = document.getElementById("yuh");
    yuhButton.addEventListener("click", function () {
      window.location.href = "https://www.nintendo.com/us/";
      console.log("the button worked");
    });
  }

  TheLink();
});
