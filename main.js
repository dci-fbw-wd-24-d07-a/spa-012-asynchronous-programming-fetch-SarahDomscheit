const button = document.querySelector("button");
const list = document.querySelector("ul");

const processData = function () {
  const text = fetch("data.txt");
  text
    .then((res) => res.text())
    .then((data) => {
      const textArray = data.split("\n");
      textArray.sort();
      textArray.forEach((item, index) => {
        if (item !== textArray[index + 1]) {
          const listItem = document.createElement("li");
          listItem.textContent = `${item}`;
          list.appendChild(listItem);
        }
      });
    });
};

button.addEventListener("click", processData);
