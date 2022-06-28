const modalElement = document.querySelector("[data-modal");
const closeModalButtonElement = document.querySelector("[data-closeModal]");

const searchButtonElement = document.querySelector("[data-searchButton]");

searchButtonElement.addEventListener("click", () => {
  modalElement.classList.add("active");
});

closeModalButtonElement.addEventListener("click", (event) => {
  event.preventDefault();
  modalElement.classList.remove("active");
});
