// specialized array with some restrictions

const user: (string | number)[] = ['hc', 1]

// there is no restriction on order

let user2: [string, number, boolean] 

user2 = ["Varun", 28, true]

// you can only add 3 numbers 
let rgb: [number, number, number] = [255, 255, 123]


// tuple doesn't work when we use push, pop, splice