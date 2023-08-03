class PhoneBook {
  #contacts = [];
  #searchedUsers = [];
  modal = null;
  contactsList = null;
  modalContent = null;

  constructor(users, selector) {
    // Validate users

    // add users to contacts
    users.forEach(user => {
      this.addContact(user)
    })

    this.modal = new bootstrap.Modal(document.getElementById("exampleModalCenter"), {
      keyboard: false,
      backdrop: 'static'
    });
    this.contactsList = document.querySelector(selector);
    this.modalContent = this.modal._element.querySelector('.modal-content');

    this.addContactToPhoneBook(this.#contacts);
    this.#setEvents();
  }

  addContact(user) {
    this.#contacts.unshift(new User(user));
  }

  addContactToPhoneBook(list) {
    const listGroup = document.querySelector('.list-group');

    if (list.length === 0) listGroup.innerHTML = `
    <strong class="not-found">Contacts not found</strong>
    `

    list.forEach(({id, phone, name, email}) => {
      listGroup.innerHTML += `
            <li class="list-group-item d-flex justify-content-between align-items-center" data-user-id="${id}">
              <span class="contacts__contact">${phone}</span>
              <div class="contacts__info">
                <p class="contacts__name">${name}</p>
                <p class="contacts__email">${email}</p>
              </div>
              <div>
                <button type="button" class="btn btn-success">
                  <i class="bi bi-telephone"></i>
                </button>

                <button type="button" class="btn btn-danger">
                  <i class="bi bi-trash"></i>
                </button>
              </div>
            </li>
            `
    })
  }

  updatePhoneBook(users) {
    document.querySelector('.list-group').innerHTML = ``;
    this.addContactToPhoneBook(users);
  }

  call(contactId) {
    // find contact in this.#contacts and make a call
    const contact = this.#contacts.find(item => item.id === contactId);
    if (!contact) throw new Error('Contact id not found');
    this.openModal(contact);
    callController.startCall(contact);
  }

  remove(contactId) {
    // will remove contact from this.#contacts
    this.#contacts = this.#contacts.filter(contact => contact.id !== contactId);
    this.updatePhoneBook(this.#contacts);
  }

  openModal({name, phone}) {
    this.modal.show();

    this.modal._element.querySelector('.modal-content').innerHTML = `
    <div class="modal-header">
      <h5 class="modal-title" id="exampleModalLongTitle">${name} (${phone})</h5>
    </div>
    <div class="modal-body">
      <div class="modal__timer">0</div>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary close" data-dismiss="modal" data-label="Close">Закончить разговор</button>
    </div>
    `
  }

  search(value) {
    // will search contact by: name, phone, email
    value = value.toLowerCase();

    this.#searchedUsers = this.#contacts.filter(item => {
      return (
          item.name.toLowerCase().includes(value.toLowerCase())
          || item.phone.toLowerCase().includes(value)
          || item.email.toLowerCase().includes(value.toLowerCase())
      );
    });

    this.updatePhoneBook(this.#searchedUsers);
  }

  #setEvents() {
    Call.addSubscription(Call.EVENT_TYPES.changeStatus, this.#trackCallStatus);
    Call.addSubscription(Call.EVENT_TYPES.changeDuration, this.#trackCallDuration);

    this.contactsList.addEventListener('click', this.#callHandler);
    this.contactsList.addEventListener('click', this.#removeHandler);
    this.modal._element.querySelector('.modal-content').addEventListener('click', (e) => {
      const target = e.target;
      if (target.closest('button.close')) this.#endCall();
    });

    // Input event
    const searchInput = document.querySelector('#contacts-search');
    searchInput.addEventListener('input', () => {
      this.search(searchInput.value);
    });


  }

  // your methods
  #callHandler = (e) => {
    const target = e.target;
    const contactId = target.closest('.list-group-item').getAttribute('data-user-id');

    if (target.closest('.btn-success')) this.call(Number(contactId));
  }

  #removeHandler = (e) => {
    const target = e.target;
    const contactId = target.closest('.list-group-item').getAttribute('data-user-id');

    this.#contacts = this.#contacts.filter(contact => contact.id !== contactId);
    this.updatePhoneBook(this.#contacts);
    if (target.closest('.btn-danger')) this.remove(Number(contactId));
  }

  #endCall() {
    this.modal.hide();
    callController.endCall();
  }

  #trackCallStatus = (newStatus) => {
    if (!Call.endCallStatuses.includes(newStatus)) return
    this.#endCall()
  }

  #trackCallDuration = (duration) => {
    this.modalContent.querySelector('.modal__timer').innerHTML = duration;
  }
}


const phoneBook = new PhoneBook(users, '.contacts__list');