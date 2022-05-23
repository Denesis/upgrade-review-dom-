// 1.1 Basandote en el array siguiente, crea una lista ul > li
// dinámicamente en el html que imprima cada uno de los paises.

const countries = ["Japón", "Nicaragua", "Suiza", "Australia", "Venezuela"];

const unordenlist = document.createElement("ul");

for (let index = 0; index < countries.length; index++) {
  const contentList = document.createElement("li");
  unordenlist.appendChild(contentList);
  const textContent1 = document.createTextNode(countries[index]);
  contentList.appendChild(textContent1);
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
  // const textContent1 = document.createTextNode(cars[index]);
  // contentList1.appendChild(textContent1);
  contentList1.textContent = cars[index];
  unordenlist1.appendChild(contentList1);
}

document.body.append(unordenlist);

// 1.4 Crea dinamicamente en el html una lista de div que contenga un elemento
// h4 para el titulo y otro elemento img para la imagen.
const countries1 = [
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
];

const contentDiv = (source) => {
  for (const content of source) {
    const divContent = document.createElement("div");
    const titleH4 = document.createElement("h4");
    const titleImg = document.createElement("img");
    titleH4.textContent = content.title;
    titleImg.src = content.imgUrl;
    divContent.append(titleH4, titleImg);
    document.body.append(divContent);
  }
};

// 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último
// elemento de la lista.
const boton = document.querySelector("#removeUlt");

// 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los
// elementos de las listas que elimine ese mismo elemento del html.
