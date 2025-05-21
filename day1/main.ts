class DataStorage<T> {
  private data: T[] = [];

  addItem(item: T): void {
    this.data.push(item)
  }

  getAll(): T[]{
    return [...this.data]
  }

  removeItem(item: T): void{
    this.data = this.data.filter(i => i !== item)
  }

  clearData(): void{
    this.data = []
  }
}

const stringStorage = new DataStorage<string>()
stringStorage.addItem("Varun")
stringStorage.addItem("Rashmi")
console.log(stringStorage.getAll())

type User = { id: number; name: string };

const userStorage = new DataStorage<User>()

userStorage.addItem({id: 100, name: "Varun"})



console.log(userStorage.getAll())


