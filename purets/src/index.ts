class User {
    email: string
    name: string
    city: string = ""
    constructor(email: string, name: string) {
        this.email = email;
        this.name = name;
    }
}

const alex = new User( "hs1.gmail.com",  "hadfsk")

alex.city = "jsdkjf"
