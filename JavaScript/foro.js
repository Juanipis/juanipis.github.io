var emojis_person = ["😀","😁","😃","😄","😙","😜","😲","🤠","👻","👽","👾","🤖","😺","🐱‍👤","🙉","🐵","🦊","🐴","🦄","🐔","🐸","🐼"];
var emoji_number = 0;

function random(min, max){
    return Math.floor((Math.random() * (max - min + 1)) + min);
    }


function emoji_identifier(){
    emoji_number = random(0,emojis_person.length-1)
    document.getElementById("emoji").innerHTML = emojis_person[emoji_number];
}


function required_input(name, input){
    if ((name.length <= 200 && name.length > 0) && (input.length <= 200 && input.length > 0)) {
        return true;
    }
    else{
        alert("El tamaño del texto supera el limite permitido de 200 caracteres o no has escrito nada")
        return false;
    }
}


function submit() {
    var name = document.getElementById("name_message").value;
    var input = document.getElementById("new_message").value;
    
    if (required_input(name,input)) {
        document.getElementById("respuestas_formulario").innerHTML += '<section class="new_message_enter"><tr><td><span>' + emojis_person[emoji_number] + '</span></td><t><p id="fecha_titulo">' + name + '</p><p>'+ input +'</p></t></tr></section>';
        emoji_identifier();
        document.getElementById("name_message").value = "";
        document.getElementById("new_message").value = "";
    }
}

