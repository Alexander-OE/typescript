// const User = {
//     name: "Alex",
//     email: "Alex@gmail.com",
//     isActive: true
// }

// function createUser({name: string, isPaid: boolean}){}


// createUser({name: "alex", isPaid: false})

// function createCourse():{name: string, price: number} {
//     return {name: "reactjs", price: 399}
// }



// type User = {
//     name: string,
//     email: string,
//     isActive: boolean
// }




// function createUser(user: User): User {
//     return {name: "", email: "", isActive: true}
// }

// createUser({name: "", email: "", isActive: true})


type User ={
    // readonly means you shouldn't change this
   readonly _id: string
    name: string
    email: string
    isActive: boolean
    // ? --> means something is optional
    creditCardDetails?: number
}






let myUser: User = {
    _id: "1234",
    name: "h",
    email: "h@h.com",
    isActive: false
}


myUser.email = "h@gmail.com"
// myUser._id = "sda"

// ####################

type cardNumber = {
    cardnumber: string

}

type cardDate = {
    cardnumber: string
    
}

type cardDetails = cardNumber & cardDate & {
    CVV: number
}






export {}