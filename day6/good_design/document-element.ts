export interface DocumentElement{
    render(): string
}

export class TextElement implements DocumentElement{
    private text: string
    constructor(text: string){
        this.text = text
    }

    render(): string {
      return this.text
    }
}

export class ImageElement implements DocumentElement{
    private imagePath: string
    constructor(imgPath: string){
        this.imagePath = imgPath
    }
    render(): string {
      return `[image: ${this.imagePath}]`
    }
}

export class NewLineElement implements DocumentElement{
    render(): string {
      return '\n'
    }
}