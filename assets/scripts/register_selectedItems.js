// Select items

const colectItemsElements = document.querySelectorAll(".collectItems__item");
const registerFormElement = document.querySelector("[data-js=register__form]");

const markColectItemLiAsSelected = (event) =>
  event.target.classList.toggle("collectItems__item--selected");

const getSelectedCollectionItems = () => {
  const selectedsColectItemsElements = document.querySelectorAll(
    ".collectItems__item--selected "
  );

  let getSelectItemsValues = [];
  selectedsColectItemsElements.forEach((item) => {
    getSelectItemsValues = [
      ...getSelectItemsValues,
      item.dataset.collectitemid,
      // itemName: item.dataset.collectitemname,
    ];
  });

  const hidenInputToSendValues = document.querySelector(
    "[data-js=collectItemsSelected]"
  );
  hidenInputToSendValues.value = getSelectItemsValues;

  return getSelectItemsValues;
};

colectItemsElements.forEach((colectItemsLi) => {
  colectItemsLi.addEventListener("click", markColectItemLiAsSelected);
});

registerFormElement.addEventListener("submit", (event) => {
  event.preventDefault();
  getSelectedCollectionItems();
});
