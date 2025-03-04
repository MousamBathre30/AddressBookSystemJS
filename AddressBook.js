class Address{
    firstName;
    lastName;
    address;
    city;
    state;
    zip;
    phonenumber;
    email;

    constructor(...param){
        this.firstName = param[0];
        this.lastName = param[1];
        this.address = param[2];
        this.city = param[3];
        this.state = param[4];
        this.zip = param[5];
        this.phonenumber = param[6];
        this.email = param[7];
    }
    
}