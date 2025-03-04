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
}
