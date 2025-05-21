type User = {
    name: string
    id: number
}

type Admin = {
    username: string
    id: number
}

let varun: User | Admin = {name: "varun", id: 334}

let seatAllotment: "aisle" | "middle" | "window"

seatAllotment = "aisle"

