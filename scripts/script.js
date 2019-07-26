"use strict";

class AddressBook {
  constructor() {
    this.contacts = [];
  }
  // V Makes a new Contact instance and adds it to this AddressBook’s contacts.
  add(name, email, phone, relation) {
    let newContact = new Contact(name, email, phone, relation);
    this.contacts.push(newContact);
  }
  // V Removes a contact based on the provided name.

  delete(name) {
    const index = this.contacts.findIndex(contact => {
      return contact.name === name;
    });
    if (index >= 0) {
      this.contacts.splice(index, 1);
    }
  }
  // V Logs each element of the contacts array to the console.
  print() {
    for (let i = 0; i < this.contacts.length; i++) {
      console.log(this.contacts[i]);
    }
  }
}
class Contact {
  constructor(name, email, phone, relation) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.relation = relation;
  }
}

const addressBook = new AddressBook();
addressBook.add("Mom", "mom@aol.com", "(123)234-3456", "Mother");
addressBook.add("Dad", "dad@aol.com", "(987)876-7654", "Father");
addressBook.delete("Dad");
addressBook.print();
