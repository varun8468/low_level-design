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

    getProducts(): Product[]{
        return this.products;
    }

    calculateTotal(): number{
        let total = 0
        for(const product of this.products){
            total += product.price
        }
        return total
    }

    printInvoice(): void{
        console.log("shopping cart invoice")
        for(const product of this.products){
            console.log(`${product.name} - Rs. ${product.price}`)
        }
        console.log(`Total - Rs. ${this.calculateTotal()}`)
    }

    saveToDb(): void{
        console.log("saving data to DB...")
    } 
}

const cart = new ShoppingCart();

cart.addProduct(new Product("mobile", 20000))
cart.addProduct(new Product("TV", 10000))

cart.printInvoice()
cart.saveToDb()