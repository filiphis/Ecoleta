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
  if (getCities.length == 0) {
    console.log("getCities.length == 0");
    citySelectElement.setAttribute("disabled", "true");
    citySelectElement.disabled = true;
    console.log(citySelectElement.getAttribute("disabled"));
  }

  citySelectElement.innerHTML = `<option value="" selected>Selecione sua cidade</option>`;
  getCities.forEach((city) => {
    citySelectElement.innerHTML += `<option class="entityData__option" value="${city.nome}">${city.nome}</option>`;
  });

  if (getCities.length > 0) {
    citySelectElement.removeAttribute("disabled");
  }
}
