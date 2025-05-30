class Product{
    name: string
    price: number

    constructor(name: string, price: number){
        this.name = name
        this.price = price
    }
}

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
}

class InvoicePrinter{
    private cart: ShoppingCart;

    constructor(cart: ShoppingCart){
        this.cart = cart
    }

    printInvoice(){
        console.log("shopping cart invoice")
        for(const product of this.cart.products){
            console.log(`${product.name} - Rs. ${product.price}`)
        }
        console.log(`Total - Rs. ${this.cart.calculateTotal()}`)
    }
}

class ShoppingCartStorage{
    private cart: ShoppingCart;

    constructor(cart: ShoppingCart){
        this.cart = cart
    }

    saveToDb(): void{
        console.log("saving data to DB...")
    } 
}

const cart = new ShoppingCart()
cart.addProduct(new Product("mobile", 3000))
cart.addProduct(new Product("tv", 1000))

const printer = new InvoicePrinter(cart)
printer.printInvoice()

const repo = new ShoppingCartStorage(cart);
repo.saveToDb()
 
