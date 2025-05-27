import { TextElement, ImageElement, NewLineElement } from './document-element.ts';
import Document from "./document.ts";
import { Persistence } from "./persistence.ts";

export default class DocumentEditor{
    private document: Document
    private storage: Persistence
    private renderedDocument: string = ""
    constructor(document: Document, storage: Persistence){
        this.document = document,
        this.storage = storage
    }

    addText(text: string){
        this.document.addElement(new TextElement(text))
    }

    addImage(imgUrl: string){
        this.document.addElement(new ImageElement(imgUrl))
    }

    addNewLine(){
        this.document.addElement(new NewLineElement())
    }

    renderDocument(): string{
        if(!this.renderedDocument){
            this.renderedDocument = this.document.render()
        }
        return this.renderedDocument
    }

    saveDocument() {
        this.storage.save(this.document.render())
    }
}