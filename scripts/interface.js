document.addEventListener("DOMContentLoaded",()=>{

    let squares = document.querySelectorAll(".square");

    squares.forEach((square)=>{

        square.addEventListener("click", quandoClicar);
    })
  

})

function quandoClicar(event){

    let position = event.target.id;
    
       

     if(jogada(position)){
        setTimeout(()=>{
            alert(`O vencedor foi o Jogador ${playerTime}`)
        },10)
     };

    atualizarQuadrado(position);
    limpar(position);
   
}

function atualizarQuadrado(postion)
{
    let square = document.getElementById(postion.toString());
    let simbolos = board[postion];
    square.innerHTML = `<div class = ${simbolos}></div>`;
}    






function limpar(postion){

    let btnReset = document.getElementById("limpar");

    btnReset.addEventListener("click",()=>{

    document.location.reload(true);
    })


}








