$(document).ready(() => {

  let brand = "AARICK-F";

  const crapslock = setInterval(function() {
    let picker = randomNumber(brand.length);
    let brandTick = brand.replace(brand[picker], brand[picker].toLowerCase());
    $("#brand").html(brandTick);
  }, 100);

  let randomNumber = (x) => Math.floor(Math.random() * x);
});