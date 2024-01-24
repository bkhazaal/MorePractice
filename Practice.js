function TheLink() {
  var yuhButton = document.getElementById("yuh");
  n;
  yuhButton.addEventListener("click", function () {
    window.location.href = "https://www.nintendo.com/us/";
    console.log("the button works");
  });
}

TheLink();
