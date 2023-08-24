class CreateElement {
    #elementName

    constructor(elementName, className){
        this.#elementName = document.createElement(elementName)
        if(className !== undefined){
            this.#elementName.classList.add(className)
        }

        return document.body.insertBefore(this.#elementName, null)
    }
}
export class Element {
    #parentElement
    constructor(parentElement, elementName, className){
        this.#parentElement = parentElement.appendChild(new CreateElement(elementName, className))

        return this.#parentElement
    }
}