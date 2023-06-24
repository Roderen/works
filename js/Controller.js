'use strict';

const Controller = {
  form: null,
  todoContainer: null,

  initListeners() {
    this.form.addEventListener('submit', this.formHandler.bind(this))
    this.todoContainer.addEventListener('click', this.deleteItem.bind(this))
    window.addEventListener('DOMContentLoaded', this.prerenderTodos.bind(this));
  },

  formHandler(event) {
    event.preventDefault()
    event.stopPropagation()

    const data = {}
    this.form.querySelectorAll('input, textarea, select').forEach(({name, value}) => {
      data[name] = value
    })
    const savedTodoItem = Model.postData(data);
    View.renderItem(savedTodoItem);
    View.resetForm(event);
  },

  prerenderTodos() {
    const savedData = Model.getDataIter();
    for (let item of savedData) {
      View.renderItem(item);
    }
  },

  deleteItem(e) {
    if (!e.target.closest('.taskWrapperDelete')) return;
    const getAttrDataId = Number(e.target.closest('.col-6').getAttribute('data-id'));
    Model.deleteData(getAttrDataId);
    View.removeItem(e);
  },

  init(formSelector, blockSelector) {
    if(typeof formSelector !== 'string') throw new Error('Form selector should be a string')
    const form = document.querySelector(formSelector);
    if(!(form instanceof HTMLElement)) throw new Error('Form not valid HTML element')

    if(typeof blockSelector !== 'string') throw new Error('Block selector should be a string')
    const block = document.querySelector(blockSelector);
    if(!(block instanceof HTMLElement)) throw new Error('Block not valid HTML element')

    this.form = form;
    this.todoContainer = block;
    View.setContainer(block)

    this.initListeners();
  }

}