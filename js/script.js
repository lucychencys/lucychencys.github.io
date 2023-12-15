document.getElementById("showBalance").addEventListener("click", function () {
  var container = document.getElementById("text-wrap-demo");
  container.classList.remove("text-wrap-demo");
  document.getElementById("showNormal").classList.remove("button-active");
  container.classList.add("text-wrap-balance-demo");
});

document.getElementById("showNormal").addEventListener("click", function () {
  var container = document.getElementById("text-wrap-demo");
  container.classList.remove("text-wrap-balance-demo");
  container.classList.add("text-wrap-demo");
});
