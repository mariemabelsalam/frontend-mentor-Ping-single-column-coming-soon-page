const searchInput = document.querySelector("input");
const mtBtn = document.querySelector("button");
const prghp = document.querySelector(".validorinvalid");
// console.log(searchInput, mtBtn);

mtBtn.addEventListener("click", function () {
  validation();
});

function validation() {
  const text = searchInput.value;
  const emailPattern = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,6}$/;
  if (text == "") {
    prghp.innerHTML = "Field is empty";
    return;
  }
  if (!emailPattern.test(text)) {
    prghp.innerHTML = "Please provide a valid email address";
    return;
  }
  showModal();
}

function showModal() {
  const modal = new bootstrap.Modal(document.getElementById("exampleModal"));
  modal.show();
}
