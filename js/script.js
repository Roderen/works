"use strict";
(function () {
  const form = document.querySelector("#todoForm");
  const todoListItems = document.querySelector("#todoItems");
  const data = {};
  const DATA_KEY = "formData";
  let dataId = 1;

  const createItem = ({ title, description, id = dataId }) => {
    const todoItemsCard = document.createElement("div");
    todoItemsCard.className = "col-4";
    todoItemsCard.innerHTML = `
    <div class="taskWrapper" data-task-id="${id}">
      <div class="taskHeading">${title}</div>
      <div class="taskDescription">${description}</div>
      <div class="taskWrapperDelete">
        <i class="bi bi-trash"></i>
      </div>
    </div>
    `;

    return todoItemsCard;
  };

  const renderItem = (el) => {
    todoListItems.prepend(el);
  };

  const getItems = () => {
    const getLocalItems = JSON.parse(localStorage.getItem(DATA_KEY));
    if (!getLocalItems || !getLocalItems.length) return [];
    return getLocalItems;
  };

  const saveItems = (gettingData) => {
    const existingData = getItems();
    const gettingDataClone = {
      ...gettingData,
      id: dataId,
    };
    existingData.push(gettingDataClone);
    localStorage.setItem(DATA_KEY, JSON.stringify(existingData));
    dataId += 1;
    return getItems().at(-1);
  };

  const loadItems = () => {
    const localStorageItems = JSON.parse(localStorage.getItem(DATA_KEY));
    if (!localStorageItems || !localStorageItems.length) return;
    localStorageItems.forEach((item) => {
      const newData = createItem(item);
      renderItem(todoListItems.appendChild(newData));
    });
    dataId = Number(getItems().at(-1).id) + 1;
  };

  const deleteTask = () => {
    todoListItems.addEventListener("click", (e) => {
      if (e.target.closest(".taskWrapperDelete")) {
        e.target.closest(".col-4").remove();
        const getLocalStorageItem = JSON.parse(localStorage.getItem(DATA_KEY));
        const getId = Number(
          e.target.closest(".taskWrapper").getAttribute("data-task-id"),
        );
        const index = getLocalStorageItem.findIndex(
          (item) => item.id === getId,
        );
        getLocalStorageItem.splice(index, 1);
        localStorage.setItem(DATA_KEY, JSON.stringify(getLocalStorageItem));
      }
    });
  };
  deleteTask();

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    e.stopPropagation();
    const formFields = Array.from(
      e.target.querySelectorAll("input:not([type=hidden]), textarea"),
    );

    formFields.forEach(({ name, value }) => {
      data[name] = value;
    });

    const newData = createItem(data);
    renderItem(todoListItems.appendChild(newData));
    saveItems(data);

    e.target.reset();
  });

  document.addEventListener("DOMContentLoaded", () => loadItems());
}());
