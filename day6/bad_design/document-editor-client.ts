class DocumentEditor{
  private documentElements: string[]
  private renderedDocument: string

  constructor(){
    this.documentElements = []
    this.renderedDocument = ""
  }

  addText(text: string): void{
    this.documentElements.push(text)
  }

  addImage(imagePath: string):void{
    this.documentElements.push(imagePath)
  }

  renderDocument():string{
    const parts: string[] = []
    if(this.renderDocument.length === 0){
      for(const element of this.documentElements){
        if(element.length > 4 && (element.endsWith(".jpg") || element.endsWith(".png"))){
          parts.push(`[image: ${element}]\n`)
        }else{
          parts.push(`${element}\n`)
        }
      }
      this.renderedDocument = parts.join('\n')
    }
    return this.renderedDocument
  }

  saveToFile(){
    try{
      Deno.writeTextFile("document.txt", this.renderDocument())
    }catch(err){
      console.log(err)
    }
  }
}

const editor = new DocumentEditor();
editor.addText("Hello, world")
editor.addImage("picture.jpg")
editor.addText("This is a document editor")
console.log(editor.renderDocument())

editor.saveToFile()


// Single Responsibility Violation – One class is doing too much (text + image handling + storage).

// Open/Closed Violation – You can’t add new content types (like video or tables) without modifying the class.

// No Encapsulation – Content is just a free-form string.

// No Interface Segregation – All operations are dumped into one class.

// Tight Coupling – All logic is tightly bound; can’t easily reuse components.