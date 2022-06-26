const stateSelectElement = document.querySelector("#state");
const citySelectElement = document.querySelector("#city");

const getBrazilianStates = async () => {
  const response = await fetch(
    "https://servicodados.ibge.gov.br/api/v1/localidades/estados"
  );
  const brazilianStates = await response.json();

  brazilianStates.forEach((state) => {
    stateSelectElement.innerHTML += `<option class="entityData__option" value="${state.id}">${state.nome}</option>`;
  });
};

getBrazilianStates();

stateSelectElement.addEventListener("change", getCitiesByStateId);

async function getCitiesByStateId(event) {
  const selectedStateId = event.target.value;

  const response = await fetch(
    `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedStateId}/municipios`
  );

  const getCities = await response.json();

  getCities.forEach((city) => {
    citySelectElement.innerHTML += `<option class="entityData__option" value="${city.id}">${city.nome}</option>`;
  });
  citySelectElement.removeAttribute("disabled");
}
