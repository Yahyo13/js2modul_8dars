let inp1 = document.querySelector(`.inp1`)
let inp2 = document.querySelector(`.inp2`)
let btn = document.querySelector(`button`)

const user = {
    id: 18881,
    password: 76667
}

btn.addEventListener(`click`, ()=>{
    if(inp1.value == 18881 && inp2.value == 76667){
        window.location.href = `./index2.html`
    }else{
        alert(`idi domoy`)
    }
})



























inp1.addEventListener(`input`, ()=>{
    if(inp1.value.length > 0 &&  inp2.value.length > 0){
        btn.classList.add(`styl`)
    }else{
        btn.classList.remove(`styl`)
    }
})







// inp2.addEventListener(`input`, ()=>{
//     if(inp1.value.length > 0 &&  inp2.value.length > 0){
//         btn.classList.add(`styl`)
//     }else{
//         btn.classList.remove(`styl`)
//     }
// })