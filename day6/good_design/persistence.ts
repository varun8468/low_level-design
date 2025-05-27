export interface Persistence{
    save(data: string): void
}

export class FileStorage implements Persistence{
    save(data: string): void {
        Deno.writeTextFile("document.txt", data)
        console.log("text file created...")
    }
}

export class DBStorage implements Persistence{
    save(data: string): void {
      console.log("saved to DB...")
    }
}