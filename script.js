"use strict";

const text = document.querySelector(".app__task");
const btnAdd = document.querySelector(".app__btn--add");
const btnApprove = document.querySelector(".app__btn--approve");
const btnRemove = document.querySelector(".app__btn--remove");
const btnClear = document.querySelector(".app__btn--clear");

btnAdd.addEventListener("click", () => {
  if (!text.value == "") {
    const taskToDo = document.querySelector(".app__label--js");
    taskToDo.insertAdjacentHTML(
      "afterend",
      `
  <li class="app__list-todo">
  ${text.value}
  <div>
    <button class="app__btn--approve">✅</button>
    <button class="app__btn--remove">🗑</button>
    </div>
    `
    );

    text.value = "";
  } else {
    alert("Field 'Create task' cannot be empty");
  }
});

// const newLi = document.createElement("li");
// newLi.textContent = `${text.value}`;
// newLi.setAttribute("class", "app__list-todo");
