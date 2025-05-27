import { DocumentElement } from './document-element.ts';
export default class Document {
    private documentElements: DocumentElement[] = []

    addElement(element: DocumentElement): void{
        this.documentElements.push(element)
    }

    getElements(): DocumentElement[]{
        return this.documentElements
    }

    render(){
        const parts: string[] = []
        for(const element of this.documentElements){
            parts.push(element.render())
        }
        return parts.join("")
    }
}