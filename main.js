const addElement = (e, node, txt, attr, value) => {
  const content = document.querySelector(".content");
  e.preventDefault();
  const element = document.createElement(node);
  if (txt) {
    const text = document.createTextNode(txt);
    element.appendChild(text);
  }
  if (attr) {
    element.setAttribute(attr, value);
  }
  content.appendChild(element);
};

const serchElements = (e, nameElement) => {
  e.preventDefault();
  const infoElement = document.querySelector(".result");
  infoElement.textContent = "";
  const elements = document.querySelectorAll(nameElement);
  if (elements.length) {
    infoElement.innerHTML = `<p class="result__number-info">W tym dokumencie znajduje się: ${elements.length} elementów ${nameElement}:</p>`;
    showInfo(elements, infoElement);
  } else {
    infoElement.innerHTML = `<p class="result__number-info">W tym dokumencie nie ma elementów ${nameElement}.</p>`;
    return;
  }
};

const showInfo = (elements, infoElement) => {
  elements.forEach((element) => {
    const item = document.createElement("div");
    item.className = "result__element-desc";
    item.innerHTML = `
    <div>${element.nodeName}</div>
    <div>Klasa-y: ${element.className}</div>
    <div>Wysokość elementu: ${element.offsetHeight}</div>
    <div>Szerokość elementu: ${element.offsetWidth}</div>
    <div>Odległość od lewej krawędzi: ${element.offsetLeft}</div>
    <div>Odległość od górnej krawędzi: ${element.offsetTop}</div>
    <div>Liczba dzieci: ${element.childElementCount}</div>
    `;
    infoElement.appendChild(item);
  });
};

const addForm = document.querySelector(".form--add");
addForm.addEventListener("submit", (e) =>
  addElement(
    e,
    addForm.elements.node.value,
    addForm.elements.text.value,
    addForm.elements.attr.value,
    addForm.elements.value.value
  )
);

const searchForm = document.querySelector(".form--search");
searchForm.addEventListener("submit", (e) =>
  serchElements(e, searchForm.elements.searchingElement.value)
);
