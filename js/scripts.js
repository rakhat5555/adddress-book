// Business Logic for AddressBook ---------
function AddressBook() {
  this.contacts = [];
}
AddressBook.prototype.addContact = function(contact) {
  this.contacts.push(contact);
}



// Business Logic for Contacts ---------
function Contact(firstName, lastName, phoneNumber) {

  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}
var addressBook = new AddressBook();
var contact = new Contact("John", "Dino", "503-111-1111");
var contact2 = new Contact ("Julie", "Duan" , "502-111-1122");
addressBook.addContact(contact);
addressBook.addContact(contact2);
