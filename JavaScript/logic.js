var colorWeb = true;

function daynight(){
    if(colorWeb){
        colorWeb = !colorWeb;
        setColorsWeb("#2b2e2c", "#EAB126", "#1FB58F", "#EAB126", "#403c3c");
    }
    else{
        colorWeb = !colorWeb;
        setColorsWeb("#ffff", "#000000", "#000000", "#1FB58F", "#cccccc" );
    }
}

function setColorsWeb(background, colorTitle , colorText,  lineTitle, footerColor)
{
    var header = document.getElementById("main-header");
    var siteName = document.getElementById("siteName");
    var siteLinks = document.getElementsByClassName("siteLinks");
    var title = document.getElementById("page-indice");
    var textTitle = document.getElementsByClassName("tittleText");
    var resultText = document.getElementsByClassName("resultText");
    var footer = document.getElementById("main-footer");
    var footerCopyright = document.getElementsByClassName("copyright");
    var footerFlaticon = document.getElementsByClassName("flaticon");
    var buttomState = document.getElementById("daynightButtom");

    //Header
    header.style.background = background;
    siteName.style.color = colorTitle;
    
    for (let index = 0; index < siteLinks.length; index++) {
        siteLinks[index].style.color = colorTitle;
    }

    //fotter
    footer.style.background = footerColor;
    footerCopyright[0].style.color = colorTitle;
    footerFlaticon[0].style.color = colorTitle;

    //background
    document.body.style.backgroundColor = background;

    //Title
    title.style.color = colorText;
    title.style.borderColor = lineTitle;


    //Text Tittle

    for (let index = 0; index < textTitle.length; index++) {
        textTitle[index].style.color = colorTitle;
    }

    for (let index = 0; index < resultText.length; index++) {
        resultText[index].style.color = colorText;
    }

    //Buttom
    if(colorWeb)
    {
        buttomState.innerText = "Modo día 🌞";
        buttomState.style.color = "#EAB126";
        buttomState.style.borderColor = "#EAB126";
    }
    else
    {
        buttomState.innerText = "Modo noche 🌙";
        buttomState.style.color = "#1FB58F";
        buttomState.style.borderColor = "#1FB58F";
    }
    
}