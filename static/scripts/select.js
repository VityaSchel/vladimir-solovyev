document.querySelector("#solovyev-flex").addEventListener("mouseenter", () => {
  if(resolved) { return; }
  document.querySelector("#hitler-flex").className = "grayed";
  document.querySelector("#hitler-offset").classList.add("expand");
  document.querySelector("#solovyev-flex > .bg").classList.add("scaled");
});

document.querySelector("#solovyev-flex").addEventListener("mouseleave", () => {
  document.querySelector("#hitler-flex").className = "";
  document.querySelector("#hitler-offset").classList.remove("expand");
  document.querySelector("#solovyev-flex > .bg").classList.remove("scaled");
});

document.querySelector("#solovyev-flex").addEventListener("click", () => {
  resolve(document.querySelector("#block-quote").innerText);
});

document.querySelector("#hitler-flex").addEventListener("mouseenter", () => {
  if(resolved) { return; }
  document.querySelector("#solovyev-flex").className = "grayed";
  document.querySelector("#solovyev-offset").classList.add("expand");
  document.querySelector("#hitler-flex > .bg").classList.add("scaled");
});

document.querySelector("#hitler-flex").addEventListener("mouseleave", () => {
  document.querySelector("#solovyev-flex").className = "";
  document.querySelector("#solovyev-offset").classList.remove("expand");
  document.querySelector("#hitler-flex > .bg").classList.remove("scaled");
});

document.querySelector("#hitler-flex").addEventListener("click", () => {
  resolve(document.querySelector("#block-quote").innerText);
});

let resolved = false;
let is_hitler;
function resolve(quote) {
  if(resolved) { return; }
  if(is_hitler){
    document.querySelector("#hitler-quote").innerText = quote + "\n — Адольф Гитлер";
  } else {
    document.querySelector("#solovyev-quote").innerText = quote + "\n — Владимир Соловьев";
  }
  document.querySelector("#block-quote").style.display = "none";
  document.querySelector(".new-quote").style.display = "block";
  document.querySelector("#solovyev-offset").classList.remove("expand");
  document.querySelector("#hitler-offset").classList.remove("expand");
  document.querySelector("#hitler-flex > .bg").classList.remove("scaled");
  document.querySelector("#solovyev-flex > .bg").classList.remove("scaled");
  document.querySelector("#hitler-flex").className = "";
  document.querySelector("#solovyev-flex").className = "";
  resolved = true;
}

document.querySelector(".new-quote").addEventListener("click", reset);
function reset(){
  resolved = false;
  document.querySelector("#hitler-quote").innerText = "";
  document.querySelector("#solovyev-quote").innerText = "";
  document.querySelector("#block-quote").style.display = "block";
  document.querySelector(".new-quote").style.display = "none";
  generate();
}
