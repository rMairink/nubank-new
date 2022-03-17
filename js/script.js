function valid() {
    let btnCPF = document.querySelector('#verificationBtn')
    let inputCPF = document.querySelector('#inputCPF').value
    
    if(inputCPF){
        btnCPF.style = "background-color: rgb(130 6 208);"
    }else{
        btnCPF.style = 'background-color: #111111a'
    }

}

setInterval(() => {
    valid()
}, 1000);