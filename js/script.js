function validButton() {
    let btnCPF = document.querySelector('#verificationBtn')
    let inputCPF = document.querySelector('#inputCPF').value

    if (inputCPF) {
        btnCPF.style = "background-color: rgb(130 6 208);"
    } else {
        btnCPF.style = "background-color: #111111a;"
    }
}

setInterval(() => {
    validButton()
}, 1000);

// scroll position 700

window.addEventListener('scroll', (event) => {
    let headerMainScroll = document.querySelector('#headerMainScroll')
    let imgRoxo = document.querySelector('#img-header-roxo')
    let imgBranco = document.querySelector('#img-header-branco')
    let queroSerNubankBtn = document.querySelector('.quero-ser-nubank')
    let scroll = this.scrollY

    if(scroll >= 700){
        headerMainScroll.style = "position: fixed; background-color: #fff; margin: 0;"
        imgRoxo.style = "display: flex;"
        imgBranco.style = "display: none;"
        queroSerNubankBtn.style = "display: flex;"

    }else if(scroll < 700){
        headerMainScroll.style = "position: initial;"
        imgRoxo.style = "display: none;"
        imgBranco.style = "display: flex;"
        queroSerNubankBtn.style = "display: none;"
    }else{
        return
    }
})