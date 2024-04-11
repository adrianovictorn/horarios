const mensagem = document.getElementById('msg');
const imagem = document.getElementById('foto')




function carregar(){

    var data = new Date()
    var hora = data.getHours()
    mensagem.innerText = `Agora são ${hora} horas` 

    if (hora >= 0 && hora < 12){
        imagem.src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        document.body.style.background = '#4c4cb6'
    }
    else if (hora > 12 && hora < 18){
        imagem.src = "https://images.pexels.com/photos/2386144/pexels-photo-2386144.jpeg"
        document.body.style.background = 'orange'
    }
    else{
        imagem.src = "https://images.pexels.com/photos/355465/pexels-photo-355465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        document.body.style.background = 'black'
    }

}