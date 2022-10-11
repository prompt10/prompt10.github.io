window.onload = pageLoad;

function pageLoad(){
	document.getElementById("start").onclick = startGame;
	document.getElementById("clear").onclick = clearScreen;
}

function startGame(){
	alert("Ready");
	addBox();
	timeStart();
}

function timeStart(){
	var TIMER_TICK = 1000;
	var timer = null;
	var min = 0.2; // 0.5 minute
	var second = min*60; 
	var x = document.getElementById("clock");
	//setting timer using setInterval function
	timer = setInterval(timeCount,TIMER_TICK);
	
	function timeCount(){
		var allbox = document.querySelectorAll("#game-layer div");

		if(timer != null){
			second--;
			x.innerHTML =second;
			if(allbox.length == 0 && second > 0){
				alert("WIN");
				clearScreen();
				timer = null;
				return false;
			}
			if(second == -1){
				alert("Lose");
				clearScreen();
				timer = null;
				return false;
			}
		console.log(timer)
		}
	}

		// จัดการเกี่ยวกับเวลา เช่น ถ้ายังมีกล่องเหลืออยู่ เวลาจะลดลงเรื่อยๆ 
		// ถ้าไม่มีกล่องเหลือแล้ว และเวลายังเหลืออยู่จะขึ้นว่า You win!
		// ถ้าเวลาหมด แต่ยังมีกล่องเหลืออยู่ จะบอกว่า Game over และทำการ clear screen

}

function addBox(){
	// สร้างกล่องตาม input ที่เราใส่ 
	var numbox = document.getElementById("numbox").value;
	var gameLayer = document.getElementById("game-layer");
	var colorDrop = document.getElementById("color").value;
	for (var i =0; i<numbox;i++){
		var tempbox = document.createElement("div");
		tempbox.className = "square";
		tempbox.id = "box"+i;
		tempbox.style.left = Math.random() * (500 - 25) + "px";
		tempbox.style.top = Math.random() * (500 - 25) + "px";
		//add element to HTML node
		gameLayer.appendChild(tempbox);
		tempbox.classList.add(colorDrop);
		bindBox(tempbox);
	}
}

function bindBox(box){
	//เมื่อกดแล้ว กล่องจะหายไป
	box.onclick = function(){
		box.parentNode.removeChild(box);
	}
}

function clearScreen(){
	// ทำการลบ node ของกล่องทั้งหมด ออกจาก หน้าจอ
	var allbox = document.querySelectorAll("#game-layer div");
	var ClearTime = document.getElementById("clock");
	ClearTime.value = null;
	ClearTime.innerHTML = 0;
	//delete all  div
	for (var i=0;i<allbox.length;i++){
		var nodeElement = allbox[i];
		nodeElement.parentNode.removeChild(nodeElement);
	}

}




