const score: Array<number> = []

const names:Array<string> = []

function identityOne (val: boolean | number): boolean | number {
    return val
}


function identityTwo(val: any): any {
    return val
}


// Im ready to accept anything and give it that type
function identityTree<Type>(val: Type): Type {
    return val
}
// The value u gave is 3 and it will return u 3 as a number
identityTree("3")

// OR

function identityFour<T>(val: T): T{
    return val
}

// #################
interface Boole{
    brand: string,
    type: number
}

// indentityFour<Boole>({})

function getSearchProducts<T>([products: T[]]): T{
    // do some database operations

    const myIndex = 3
    return products[3]
}
// anytype of array
const getMoreSearchProducts = <T>(products: T[]): T => {
    // do somedataBase operations
    const myIndex = 4
    return products[myIndex]
} 