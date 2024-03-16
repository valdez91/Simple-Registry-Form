function validation(){
    if(document.Formfill.Username.value==""){
        document.getElementById("result").innerHTML="Enter Username*";
        return false;
    }
    else if(document.Formfill.Username.value.length>6){
        document.getElementById("result").innerHTML="Atleast six characters*";
        return false;
    }
    else if(document.Formfill.Email.value==""){
        document.getElementById("result").innerHTML="Enter your Email!";
        return false;
    }
    else if(document.Formfill.Password.value==""){
        document.getElementById("result").innerHTML="Enter your new-Password";
        return false;
    }
    else if(document.Formfill.Password.value.length<6){
        document.getElementById("result").innerHTML="Password must have 6-digits";
        return false;
    }
    
    else if(document.Formfill.CPassword.value==""){
        document.getElementById("result").innerHTML="Confirm Password!";
        return false;
    }
    else if(document.Formfill.Password.value!==document.Formfill.CPassword.value){
        document.getElementById("result").innerHTML="Password does'nt match!";
        return false;
    }
    else if(document.Formfill.Password.value==document.Formfill.Password.value){
       popUp.classList.add("open-slide")
        return false;
    }
  
}
var popUp=document.getElementById('popup');