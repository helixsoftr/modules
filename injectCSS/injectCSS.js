class injectCSS {
    constructor(income) {
        this.fileName = income.name
        this.codes = income.code
        this.duration = income.duration || undefined

        this.load()
    }

    load() {
        let dummy = document.createElement('style')
        dummy.setAttribute('id', `${this.fileName}-css`)
        dummy.innerHTML = this.codes
        document.head.appendChild(dummy)

        if (this.duration != undefined) {
            setTimeout(() => {
                document.head.querySelector(`#${this.fileName}-css`).remove()
            }, this.duration);
        }
    }
}

export { injectCSS }