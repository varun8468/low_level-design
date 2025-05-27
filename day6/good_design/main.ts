import DocumentEditor from "./document-editor.ts";
import Document from "./document.ts";
import { FileStorage } from "./persistence.ts";

const document = new Document()
const storage = new FileStorage()
const editor = new DocumentEditor(document, storage)

editor.addText("Hello, My name is Varun")
editor.addNewLine()
editor.addImage("my-image.png")
editor.addNewLine()
editor.addText("I am a super engineer")

console.log(editor.renderDocument())
editor.saveDocument()


