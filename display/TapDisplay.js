const template = document.createElement("template")
template.innerHTML = `
    <div>
        <div>
            <h2>
                <slot></slot>
            </h2
        </div>
        <div class="description">
            <slot name="description"></slot>
        </div>
    </div>
`

class TapDisplay extends HTMLElement {
    constructor(){
        super()
        const shadow = this.attachShadow({ mode: "open"})
        shadow.append(template.content.cloneNode(true))
        this.title.innerHTML = this.innerText
    }
}

customElements.define("tap-display", TapDisplay)