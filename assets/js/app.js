var tableBombIt = [
					' ',
					'*',
					'1',
					' ',
					'/n',
					' ',
					' ',
					'*',
					'3',
					'/n',
					'1',
					'*',
					' ',
					' ',
					'/n',
					' ',
					'3',
					'*',
					' '
];

var containerBombIt = document.getElementById("container-bomb-it");

var bombIt = document.getElementById("bomb-it");

function drawGameZone(array){
	for(i = 0; i < tableBombIt.lenght; i++){
		var cell = document.createElement("div");
		var enter = document.createElement("br");

		if (array[i] == '1' || array[i] == '2' || array[i] == '3') {
			cell.className = "number";
			cell.innerText = array[i];
			cell.onclick = showNumber;
		} else if(array[i] == " "){
			cell.className = "emptySpace";
			cell.onclick = changeColor;
		} else if(array[i] == "*"){
			cell.className = "bomb";
			cell.onclick = boom;
		} else{
			bombIt.appendChild(enter);
			continue;
		}

		bombIt.appendChild(cell);
	}

	addBtnRestart();
};

function showNumber() {
	this.className = "number numberShow";
};

function changeColor (){
	this.style.backgroundColor = "black";
};

function boom() {
	containerBombIt.removeChild(bombIt);
	containerBombIt.innerHTML = "<img src='https://media.giphy.com/media/ODU1I5zAgOwX6/giphy.gif' alt='BOOM'>";
	addBtnRestart();
};

function addBtnRestart(){
	var btnRestart = document.createElement("button");
	btnRestart.innerText = "Restart!!";
	btnRestart.addEventListener("click", reStart);
	containerBombIt.appendChild(btnRestart);
};

function reStart(){
	location.reload();
};

drawGameZone(tableBombIt);