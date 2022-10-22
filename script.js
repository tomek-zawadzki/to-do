"use strict";

// const arr = [1, 2, 2];
// const fuck = arr.map((n) => n ** 2);
// console.log(fuck);

const text = document.querySelector(".app__task");
const btnAdd = document.querySelector(".app__btn--add");
const btnClear = document.querySelector(".app__btn--clear");

btnAdd.addEventListener("click", () => {
  const taskToDo = document.querySelector(".app__label--js");
  const html = `
  <li class="app__list-todo">
  ${text.value}
  <div>
    <button class="app__btn--approve">✅</button>
    <button class="app__btn--remove">🗑</button>
    </div>
    </li>
    `;

  if (!text.value == "") {
    taskToDo.insertAdjacentHTML("afterend", html);

    text.value = "";
  } else {
    alert("Field 'Create task' cannot be empty");
  }

  const btnRemove = document.querySelector(".app__btn--remove");
  btnRemove.addEventListener("click", (e) => {
    e.target.parentElement.parentElement.remove();
  });

  const btnApprove = document.querySelector(".app__btn--approve");
  btnApprove.addEventListener("click", () => {
    console.log("approve");
  });
});

// const newLi = document.createElement("li");
// newLi.textContent = `${text.value}`;
// newLi.setAttribute("class", "app__list-todo");
