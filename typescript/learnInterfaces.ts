interface User{
    readonly dbId: number
    email: string
    age: 28
    googleId?: string
    // startTrail: () => string
    startTrail(): string
    getCoupon(couponname: string): number
}

// reopening of inteface
interface User {
    githubToken: string
}

const user: User = {
    dbId: 32,
    age: 28,
    email: "vpsmacker@gmail.com",
    startTrail: () => {
        return "Trail started"
    },
    getCoupon(name: "hitesh10"){
        return 10
    },
    githubToken: "token"
}

