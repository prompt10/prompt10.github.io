window.onload = loginLoad;
function loginLoad(){
	var form = document.getElementById("myLogin")
	form.onsubmit = checkLogin;
}

function checkLogin(){
	//ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย
	const queryString = window.location.search;
	console.log(queryString);

	const urlParams = new URLSearchParams(queryString);
	const Username = urlParams.get('username');
	const Password = urlParams.get('password1');

	var UsernameInput = document.forms["myLogin"]["username"];
	var PasswordInput = document.forms["myLogin"]["password"];

	console.log(Username);
	console.log(Password);
	
	if(UsernameInput.value != Username){
		alert("Wrong Username");
		return false;
	}
	if(PasswordInput.value != Password){
		alert("Wrong Password");
		return false;
	}

}

			