function onLoadFunction(){
    setInterval( ChangeImageSrc, 5000);
}

function ChangeImageSrc(){
    
    var imgSrc1 = "paz_250x110103131473.jpg";
    var imgSrc2 = "paz_250x110059890678.jpg";
    var imgSrc3 = "250X110668568400.jpg";

    var currentImgSrc = document.getElementById("imgChange").src;
    if(currentImgSrc.includes(imgSrc1))
    {
        document.getElementById("imgChange").src ="images/"+ imgSrc2;
    }
    else if(currentImgSrc.includes(imgSrc2))
    {
        document.getElementById("imgChange").src = "images/"+ imgSrc3;
        
    }
    else
    {
        document.getElementById("imgChange").src = "images/"+ imgSrc1
    }
}

function validateFields(){
var firstName = document.getElementById("firstName").value;
var lastName = document.getElementById("lastName").value;
var phoneName = document.getElementById("phoneNum").value;
var emailName = document.getElementById("email").value;

if(firstName == "")
{
    document.getElementById("fnValid").style.visibility= visible;
}
}