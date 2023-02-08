// This are the fields that are nessary when you are creating a user
// its like a class but a loose form
// we specify the return type after :
interface User {
    readonly dbId: number
    email: string
    userId: number
    // optional
    googleID?:string
    // Defining a function in interfaces
    // startTrail: () => string
    // OR
    startTrail(): string
    getCoupon(couponname: string, value:number): number
}

interface User {
    githubToken: string
}

// extending one into the other


interface Admin extends User {
role: "asmin" | "ta" | "leader"
}

const alex: Admin = {dbId: 22, email: "h@h.com", userId: 2222, githubToken: "github", role: "leader",startTrail: () =>{
    return "trail"
}, 
// you don't need the parameter names to match its just a refernce that you are providing a name and u should just return the type specified
getCoupon: (name: "ben", off: 10) =>{ return 10}}


// A type cannot be re-opened to add  new properties vs interface which is extendable