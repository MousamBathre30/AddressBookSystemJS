// Address class to store individual contact details
class Address {
    constructor(firstName, lastName, address, city, state, zip, phoneNumber, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }

    getFirstName() {
        return this.firstName;
    }

    setFirstName(firstName) {
        let nameRegex = /^[A-Z][a-z]{2,}$/;
        if (nameRegex.test(firstName)) {
            this.firstName = firstName;
        } else {
            throw "First name is invalid; it must start with a capital letter and contain at least 3 characters.";
        }
    }

    getLastName() {
        return this.lastName;
    }

    setLastName(lastName) {
        let nameRegex = /^[A-Z][a-z]{2,}$/;
        if (nameRegex.test(lastName)) {
            this.lastName = lastName;
        } else {
            throw "Last name is invalid; it must start with a capital letter and contain at least 3 characters.";
        }
    }

    getAddress() {
        return this.address;
    }

    setAddress(address) {
        let addressRegex = /^[A-Za-z0-9\s,.'-]{3,}$/;
        if (addressRegex.test(address)) {
            this.address = address;
        } else {
            throw "Address is invalid; it must contain at least 3 characters.";
        }
    }

    getCity() {
        return this.city;
    }

    setCity(city) {
        let cityRegex = /^[A-Za-z\s]{3,}$/;
        if (cityRegex.test(city)) {
            this.city = city;
        } else {
            throw "City is invalid; it must contain at least 3 characters.";
        }
    }

    getState() {
        return this.state;
    }

    setState(state) {
        let stateRegex = /^[A-Za-z\s]{3,}$/;
        if (stateRegex.test(state)) {
            this.state = state;
        } else {
            throw "State is invalid; it must contain at least 3 characters.";
        }
    }

    getZip() {
        return this.zip;
    }

    setZip(zip) {
        let zipRegex = /^[0-9]{6}$/;
        if (zipRegex.test(zip)) {
            this.zip = zip;
        } else {
            throw "ZIP code is invalid; it must contain exactly 6 digits.";
        }
    }

    getPhoneNumber() {
        return this.phoneNumber;
    }

    setPhoneNumber(phoneNumber) {
        let phoneRegex = /^[0-9]{10}$/;
        if (phoneRegex.test(phoneNumber)) {
            this.phoneNumber = phoneNumber;
        } else {
            throw "Phone number is invalid; it must contain exactly 10 digits.";
        }
    }

    getEmail() {
        return this.email;
    }

    setEmail(email) {
        let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (emailRegex.test(email)) {
            this.email = email;
        } else {
            throw "Email is invalid; it must be in a valid format (e.g., example@example.com).";
        }
    }

    toString() {
        return `Name: ${this.firstName} ${this.lastName}, 
        Address: ${this.address}, ${this.city}, ${this.state} - ${this.zip}, 
        Phone: ${this.phoneNumber}, Email: ${this.email}`;
    }
}

// AddressBooksMethods to manage contacts
class AddressBooksMethods {
    constructor() {
        this.contacts = []; // Initialize the contacts array
    }

    addContact(contact) {
        if (contact instanceof Address) {
            if(this.checkDuplicate(contact)){
                console.log("Duplicate accurs ")
            }
            this.contacts.push(contact);
            console.log(" Contact added successfully!");
        } else {
            console.log(" Invalid contact. Please provide a valid Address object.");
        }
    }

    findOrEdit(oldName, newName) {
        let contact = this.contacts.find(contact => contact.firstName === oldName);
    
        if (contact) {
            contact.firstName = newName;
            console.log(`Contact updated: ${oldName} → ${newName}`);
        } else {
            console.log(`Contact with name "${oldName}" not found.`);
        }
    }
    findOrDelete(oldName) {
        let contact = this.contacts.find(contact => contact.firstName === oldName);
    
        if (contact !==-1) {
            this.contacts.splice(contact,1);
            console.log(`Contact Deleted: ${oldName}`);
        } else {
            console.log(`Contact with name "${oldName}" not found.`);
        }
    }

    totalContacts(){
        console.log("The total number of contacts is present")
        console.log(this.contacts.length);
    }

    // check Duplicats 

    checkDuplicate(contact){
        let isDuplicate = this.contacts.map(c => c.firstName + c.lastName + c.phoneNumber).filter(id => id === (contact.firstName + contact.lastName + contact.phoneNumber)).length > 0;
        return isDuplicate;
    }

    // check for the state and city 

    checkStateCity(contact){
        let isDuplicate = this.contacts.filter(c => c.city === contact.city || c.state == contact.state);
        return isDuplicate.length > 0;
    }
  
}

//  Create an instance of AddressBooksMethods
let addressBookMethods = new AddressBooksMethods();

//  Create contact instances
let contact1 = new Address("John", "Doe", "123 Main St", "New York", "NY", "10001", "1234567890", "john.doe@example.com");
let contact2 = new Address("Jane", "Smith", "456 Elm St", "Los Angeles", "CA", "90001", "9876543210", "jane.smith@example.com");

//  Add contacts to the address book
addressBookMethods.addContact(contact1);
addressBookMethods.addContact(contact2);

// find contacts and edit the contacts 
addressBookMethods.findOrEdit("John","Mousam");

// find contacts and delete the contacts 

addressBookMethods.findOrDelete("Mousam");

// ability to find the number of contats 

addressBookMethods.totalContacts();

// ability to check for the city and state

console.log(addressBookMethods.checkStateCity(contact1));