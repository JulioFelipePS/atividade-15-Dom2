//1
const card = document.querySelectorAll('.card')
card.forEach(cd => {
    cd.style.backgroundColor = 'orange'
});
//2//3
const h2 = document.querySelectorAll('.titulo-card')
h2.forEach(e=>{
    e.style.color = '#2b385b'
    e.textContent = 'Meu card'
})
//4//5
const p =document.querySelectorAll(".descricao-card")
p.forEach(e=>{
    e.style.color = 'white'
    e.style.marginTop = "20px"
    e.style.marginBotton = "20px"
    e.textContent = "Descrição modificada pelo JavaScript"
})


//6 //7
const bts = document.querySelectorAll('button')
bts.forEach(bt => {
    bt.style.borderRadius = "3px"
    bt.style.height = "15%"
    bt.style.width = "30%"
    bt.style.margin = "20px 4px"
    bt.style.color = "white"
    bt.style.padding = "1px"
    bt.style.border = "none"
})
const btsEditar = document.querySelectorAll('.botao-editar')
btsEditar.forEach(btEditar=>{
    btEditar.style.backgroundColor = "green"
})
const btsApagar = document.querySelectorAll('.botao-apagar')
btsApagar.forEach(btApagar=>{
    btApagar.style.backgroundColor = "red"
})
//8
btsEditar.forEach(btEditar => {
    btEditar.addEventListener('mouseover',()=>{
    btEditar.style.backgroundColor = "gray"   
    })
    btEditar.addEventListener('click', editarCard);
    btEditar.addEventListener('mouseout',()=>{
        btEditar.style.backgroundColor = "green"   
    })
});
function editarCard(){
    alert("Clicou em Editar!")
}
//9
btsApagar.forEach(bt => {
    bt.addEventListener('mouseover',()=>{
    bt.style.backgroundColor = "gray"   
    })
    bt.addEventListener('click', apagarCard);
    bt.addEventListener('mouseout',()=>{
        bt.style.backgroundColor = "red"   
    })
});
function apagarCard(){
    let apagar = confirm('tem certeza da exclusão do card?')
    alert(apagar? "Confirmado!": "Cancelou!")
}

