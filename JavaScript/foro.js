var emojis_person = ["😀","😁","😃","😄","😙","😜","😲","🤠","👻","👽","👾","🤖","😺","🐱‍👤","🙉","🐵","🦊","🐴","🦄","🐔","🐸","🐼","😎","🐲","🦒","🦁","🐯","🐶","🦝","🐮","🐷","🐗","🐭","🐹","🐻","🦓"];
var emoji_number = 0;

function random(min, max){
    return Math.floor((Math.random() * (max - min + 1)) + min);
    }


function emoji_identifier(){
    emoji_number = random(0,emojis_person.length-1)
    document.getElementById("emoji").innerHTML = emojis_person[emoji_number];
}


function required_input(name, input){
    var result_name = false;
    var result_input = false;
    if (name.length > 0 && name.length <= 200 ) {
        result_name = true;
    }
    else{
        if (name.length <= 0) {
            alert("Por favor escribe un nombre o ¿Acaso eres un fantasma 👻?");
        }
        else{
            alert("¡Tienes un nombre demasiado grande 😮! Por favor, solo 200 caracteres");
        }
    }

    if (input.length > 0 && input.length <= 200) {
        result_input = true;
    }
    else{
        if (input.length <= 0) {
            alert("Por favor, escribe un mensaje, no seas malo 😥");
        }
        else{
            alert("¡WOW! Tienes mucho que decir, por favor escribeme al correo juanipis@gmail.com");
        }
    }

    if(result_name && result_input){
        return true;
    }
    else{
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

