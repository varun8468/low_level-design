class Product{
    name: string
    price: number

    constructor(name: string, price: number){
        this.name = name
        this.price = price
    }
}

//violating SRP: Shopping cart handling multiple responsibilities
class ShoppingCart{
    products: Product[] = []

    addProduct(p: Product): void{
        this.products.push(p)
    }

    
}