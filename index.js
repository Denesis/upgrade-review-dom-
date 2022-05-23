// 1.1 Basandote en el array siguiente, crea una lista ul > li
// dinámicamente en el html que imprima cada uno de los paises.

const countries = ["Japón", "Nicaragua", "Suiza", "Australia", "Venezuela"];

const unordenlist = document.createElement("ul");

for (let index = 0; index < countries.length; index++) {
  const contentList = document.createElement("li");
  unordenlist.appendChild(contentList);
  const textContent = document.createTextNode(countries[index]);
  contentList.appendChild(textContent);
}

document.body.append(unordenlist);

// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.

const remove = document.querySelector(".fn-remove-me");
document.body.removeChild(remove);

// 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos
// en el div de html con el atributo data-function="printHere".

const cars = ["Mazda 6", "Ford fiesta", "Audi A4", "Toyota corola"];

const divBody = document.querySelector('div[data-function="printHere"]');
const unordenlist1 = document.createElement("ul");
divBody.appendChild(unordenlist1);

for (let index = 0; index < cars.length; index++) {
  const contentList1 = document.createElement("li");
  unordenlist1.appendChild(contentList1);
  const textContent1 = document.createTextNode(cars[index]);
  contentList1.appendChild(textContent1);
}

document.body.append(unordenlist);

// 1.4 Crea dinamicamente en el html una lista de div que contenga un elemento
// h4 para el titulo y otro elemento img para la imagen.
// const countries = [
// 	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'},
// 	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
// 	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
// 	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
// 	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
// ];

// 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último
// elemento de la lista.

// 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los
// elementos de las listas que elimine ese mismo elemento del html.
