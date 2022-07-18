function validateemail(){
    var email=document.getElementById("email");
    if(email.value.length==0){
        email.style.border="2px solid red";
        return false;
    }
    else if(!email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
        email.style.border="2px solid red";
        return false;
    }
    else{
        email.style.border="2px solid green";
        return true;
    }
}

function validatepass(){
    var pass=document.getElementById("password");
    if(pass.value.length==0){
        pass.style.border="2px solid red";
        return false;
    }
    else if(!pass.value.match(/^[A-Za-z]\w{7,14}$)){
        pass.style.border="2px solid red";
        return false;
    }
    else{
        pass.style.border="2px solid green";
        return true;
    }
}




