window.onload = pageLoad;
function pageLoad(){
	var form = document.getElementById("myForm");
    form.onsubmit = validateForm;
}

function validateForm() {
    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย

    var FirstName = document.forms["myForm"]["firstname"];
    var LastName = document.forms["myForm"]["lastname"]
    var Gender = document.forms["myForm"]["gender"]
    var Birthday = document.forms["myForm"]["bday"]
    var EmailAddress = document.forms["myForm"]["email"]
    var Username = document.forms["myForm"]["username"]
    var Password1 = document.forms["myForm"]["password1"]
    var Password2 = document.forms["myForm"]["password2"]

    if(FirstName.value == ""){
        return false;
    }
    else if(LastName.value == ""){
        alert("Lastname is empty");
        return false;
    }
    else if(Gender.value == ""){
        alert("Gender is empty");
        return false;
    }
    else if(Birthday.value == ""){
        alert("Birthday is empty");
        return false;
    }
    else if(EmailAddress.value == ""){
        alert("Email is empty");
        return false;
    }
    else if(Username.value == ""){
        //alert("Lastname is empty");
        return false;
    }
    else if(Password1.value == ""){
        //alert("Lastname is empty");
        return false;
    }
    else if(Password2.value == ""){
        //alert("Lastname is empty");
        return false;
    }
    else if(Password1.value != Password2.value){
        alert("Passwords don't match");
        return false;
    }
}