'use strict';

const View = {
    todoContainer: null,

    renderItem(data) {
        const template = this.createTemplate(data)
        this.todoContainer.prepend(template)
    },

    createTemplate({title, description, id}) {
        const template = document.createElement('div')
        template.className = 'col-4';
        template.setAttribute('data-id', id)

        template.innerHTML = `
                        <div class="taskWrapper">
                            <div class="taskHeading">${title} <sup>${id}</sup></div>
                            <div class="taskDescription">${description}</div>
                        </div>`

        return template;
    },


    setContainer(domEl) {
        if(!(domEl instanceof HTMLElement))  throw new Error('Block not valid HTML element');
        this.todoContainer = domEl
    },

    resetForm(e) {
        e.target.reset();
    },

    removeItem(e) {
        e.target.closest('.col-6').remove();
    },


    init(createTemplateFunc) {
        if(typeof createTemplateFunc !== 'function') return;
        this.createTemplate = createTemplateFunc;
    }
}