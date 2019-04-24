<script>
var selected = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var result = [0, 0, 0];
var selectedNum = 0;
var imgSrc = ["image/dota2.jpg", "image/csgo.jpg", "image/skyrim.jpg", "image/cod.jpg", "image/payday2.jpg", "image/gtav.jpg", "image/witcher3.jpg", "image/rainbow6.jpg", "image/divididon.jpg", "image/darksoul.jpg", "image/fallout4.jpg", "image/Resident Evil 7.jpg", "image/pubg.jpg", "image/moh.jpg", "image/origins.jpg", "image/odyssey.jpg", "image/sekiro.jpg", "image/2k19.jpg", "image/hitman2.jpg", "image/RESIDENT EVIL 2.jpg"];
var nameArr = ['Dota 2','Counter-Strike: Global Offensive','The Elder Scrolls V: Skyrim','Call of Duty: Ghosts','PAYDAY 2','Grand Theft Auto V','The Witcher 3: Wild Hunt',"Tom Clancy's Rainbow Six Siege","Tom Clancy's The Division",'DARK SOULS III','Fallout 4',"Resident Evil 7","PUBG",'MONSTER HUNTER: WORLD',"Assassin's Creed Origins","Assassin's Creed Odyssey",'Sekiro: Shadows Die Twice','NBA 2K19','HITMAN 2','RESIDENT EVIL 2'];

function getRes(mSelected){
	var d = mSelected[0] + mSelected[1]*2 + mSelected[2]*4 + mSelected[3]*8 + mSelected[4]*16 + mSelected[5]*32 + mSelected[6]*64 + mSelected[7]*128 + mSelected[8]*256 + mSelected[9]*512;
	switch (d) {
		case 73 :resArr= [11, 4, 5] ;break;
case 133 :resArr= [11, 19, 4] ;break;
case 35 :resArr= [11, 4, 18] ;break;
case 176 :resArr= [0, 3, 19] ;break;
case 324 :resArr= [0, 1, 5] ;break;
case 400 :resArr= [0, 3, 19] ;break;
case 148 :resArr= [0, 3, 19] ;break;
case 145 :resArr= [11, 3, 19] ;break;
case 592 :resArr= [0, 3, 5] ;break;
case 161 :resArr= [11, 19, 4] ;break;
case 88 :resArr= [0, 5, 10] ;break;
case 388 :resArr= [19, 0, 18] ;break;
case 385 :resArr= [11, 19, 18] ;break;
case 140 :resArr= [19, 4, 1] ;break;
case 146 :resArr= [0, 3, 19] ;break;
case 518 :resArr= [12, 13, 14] ;break;
case 84 :resArr= [0, 3, 5] ;break;
case 81 :resArr= [11, 3, 5] ;break;
case 577 :resArr= [11, 5, 4] ;break;
case 19 :resArr= [11, 3, 15] ;break;
case 259 :resArr= [11, 4, 18] ;break;
case 22 :resArr= [0, 3, 15] ;break;
case 262 :resArr= [0, 18, 12] ;break;
case 168 :resArr= [19, 4, 6] ;break;
case 37 :resArr= [11, 18, 4] ;break;
case 546 :resArr= [18, 6, 4] ;break;
case 164 :resArr= [19, 18, 6] ;break;
case 7 :resArr= [11, 4, 15] ;break;
case 522 :resArr= [4, 10, 15] ;break;
case 584 :resArr= [0, 5, 4] ;break;
case 290 :resArr= [18, 0, 6] ;break;
case 70 :resArr= [0, 5, 15] ;break;
case 608 :resArr= [0, 18, 4] ;break;
case 273 :resArr= [11, 3, 7] ;break;
case 448 :resArr= [0, 19, 1] ;break;
case 100 :resArr= [0, 18, 15] ;break;
case 328 :resArr= [0, 1, 5] ;break;
case 42 :resArr= [4, 18, 6] ;break;
case 44 :resArr= [18, 4, 6] ;break;
case 50 :resArr= [0, 3, 6] ;break;
case 672 :resArr= [19, 18, 6] ;break;
case 131 :resArr= [11, 19, 4] ;break;
case 98 :resArr= [0, 18, 4] ;break;
case 280 :resArr= [0, 10, 7] ;break;
case 642 :resArr= [19, 12, 8] ;break;
case 67 :resArr= [11, 4, 5] ;break;
case 194 :resArr= [0, 19, 15] ;break;
case 292 :resArr= [18, 7, 0] ;break;
case 517 :resArr= [11, 4, 15] ;break;
case 386 :resArr= [19, 0, 18] ;break;
case 560 :resArr= [3, 0, 7] ;break;
case 580 :resArr= [0, 5, 15] ;break;
case 800 :resArr= [18, 7, 0] ;break;
case 14 :resArr= [4, 15, 10] ;break;
case 336 :resArr= [0, 3, 5] ;break;
case 545 :resArr= [11, 4, 18] ;break;
case 644 :resArr= [19, 1, 12] ;break;
case 152 :resArr= [0, 19, 10] ;break;
case 521 :resArr= [11, 4, 10] ;break;
case 524 :resArr= [4, 10, 12] ;break;
case 530 :resArr= [3, 0, 5] ;break;
case 770 :resArr= [0, 18, 7] ;break;
case 321 :resArr= [11, 1, 4] ;break;
case 69 :resArr= [11, 5, 15] ;break;
case 112 :resArr= [0, 3, 7] ;break;
case 28 :resArr= [0, 10, 7] ;break;
case 268 :resArr= [0, 12, 1] ;break;
case 138 :resArr= [19, 10, 4] ;break;
case 552 :resArr= [4, 18, 6] ;break;
case 41 :resArr= [11, 4, 6] ;break;
case 784 :resArr= [0, 3, 7] ;break;
case 224 :resArr= [0, 19, 18] ;break;
case 656 :resArr= [3, 0, 19] ;break;
case 97 :resArr= [11, 4, 18] ;break;
case 208 :resArr= [0, 3, 19] ;break;
case 296 :resArr= [18, 4, 7] ;break;
case 74 :resArr= [0, 4, 5] ;break;
case 76 :resArr= [0, 5, 15] ;break;
case 772 :resArr= [0, 12, 1] ;break;
case 532 :resArr= [0, 3, 5] ;break;
case 11 :resArr= [11, 4, 10] ;break;
case 82 :resArr= [0, 3, 5] ;break;
case 529 :resArr= [3, 11, 5] ;break;
case 769 :resArr= [11, 4, 1] ;break;
case 134 :resArr= [19, 12, 8] ;break;
case 704 :resArr= [0, 19, 5] ;break;
case 641 :resArr= [11, 19, 4] ;break;
case 193 :resArr= [11, 19, 4] ;break;
case 56 :resArr= [0, 10, 6] ;break;
case 104 :resArr= [0, 4, 18] ;break;
case 52 :resArr= [0, 3, 7] ;break;
case 25 :resArr= [11, 10, 15] ;break;
case 265 :resArr= [11, 4, 1] ;break;
case 49 :resArr= [11, 3, 6] ;break;
case 162 :resArr= [19, 18, 6] ;break;
case 896 :resArr= [19, 0, 18] ;break;
case 648 :resArr= [19, 4, 10] ;break;
case 13 :resArr= [11, 4, 15] ;break;
case 200 :resArr= [0, 19, 5] ;break;
case 26 :resArr= [0, 10, 15] ;break;
case 266 :resArr= [0, 10, 18] ;break;
case 578 :resArr= [0, 5, 15] ;break;
case 548 :resArr= [18, 7, 6] ;break;
case 352 :resArr= [0, 18, 7] ;break;
case 196 :resArr= [0, 19, 5] ;break;
case 392 :resArr= [19, 0, 10] ;break;
case 261 :resArr= [11, 12, 18] ;break;
case 21 :resArr= [11, 3, 15] ;break;
case 832 :resArr= [0, 1, 5] ;break;
case 304 :resArr= [0, 3, 7] ;break;
case 322 :resArr= [0, 18, 5] ;break;
case 38 :resArr= [18, 6, 7] ;break;
case 416 :resArr= [19, 18, 0] ;break;
case 276 :resArr= [0, 3, 7] ;break;
case 137 :resArr= [11, 19, 4] ;break;
case 289 :resArr= [11, 18, 4] ;break;
case 515 :resArr= [11, 4, 15] ;break;
case 536 :resArr= [0, 10, 5] ;break;
case 776 :resArr= [4, 1, 0] ;break;
case 274 :resArr= [0, 3, 7] ;break;
	}
	return resArr;
}

function onSelectedOne(){
	selectedNum = selectedNum + 1;
	selected[0] = 1;
	if (selectedNum > 2) {
		result = getRes(selected);
		selectedNum = 0;
		selected = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
		document.getElementById("res-img-one").src = imgSrc[result[0]];
		document.getElementById("res-img-two").src = imgSrc[result[1]];
		document.getElementById("res-img-three").src = imgSrc[result[2]];
		document.getElementById("res-name-one").innerHTML = nameArr[result[0]];
		document.getElementById("res-name-two").innerHTML = nameArr[result[1]];
		document.getElementById("res-name-three").innerHTML = nameArr[result[2]];
	}
}

function onSelectedTwo(){
	selectedNum = selectedNum + 1;
	selected[1] = 1;
	if (selectedNum > 2) {
		result = getRes(selected);
		selectedNum = 0;
		selected = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
		document.getElementById("res-img-one").src = imgSrc[result[0]];
		document.getElementById("res-img-two").src = imgSrc[result[1]];
		document.getElementById("res-img-three").src = imgSrc[result[2]];
		document.getElementById("res-name-one").innerHTML = nameArr[result[0]];
		document.getElementById("res-name-two").innerHTML = nameArr[result[1]];
		document.getElementById("res-name-three").innerHTML = nameArr[result[2]];
	}
}

function onSelectedThree(){
	selectedNum = selectedNum + 1;
	selected[2] = 1;
	if (selectedNum > 2) {
		result = getRes(selected);
		selectedNum = 0;
		selected = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
		document.getElementById("res-img-one").src = imgSrc[result[0]];
		document.getElementById("res-img-two").src = imgSrc[result[1]];
		document.getElementById("res-img-three").src = imgSrc[result[2]];
		document.getElementById("res-name-one").innerHTML = nameArr[result[0]];
		document.getElementById("res-name-two").innerHTML = nameArr[result[1]];
		document.getElementById("res-name-three").innerHTML = nameArr[result[2]];
	}
}

function onSelectedFour(){
	selectedNum = selectedNum + 1;
	selected[3] = 1;
	if (selectedNum > 2) {
		result = getRes(selected);
		selectedNum = 0;
		selected = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
		document.getElementById("res-img-one").src = imgSrc[result[0]];
		document.getElementById("res-img-two").src = imgSrc[result[1]];
		document.getElementById("res-img-three").src = imgSrc[result[2]];
		document.getElementById("res-name-one").innerHTML = nameArr[result[0]];
		document.getElementById("res-name-two").innerHTML = nameArr[result[1]];
		document.getElementById("res-name-three").innerHTML = nameArr[result[2]];
	}
}

function onSelectedFive(){
	selectedNum = selectedNum + 1;
	selected[4] = 1;
	if (selectedNum > 2) {
		result = getRes(selected);
		selectedNum = 0;
		selected = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
		document.getElementById("res-img-one").src = imgSrc[result[0]];
		document.getElementById("res-img-two").src = imgSrc[result[1]];
		document.getElementById("res-img-three").src = imgSrc[result[2]];
		document.getElementById("res-name-one").innerHTML = nameArr[result[0]];
		document.getElementById("res-name-two").innerHTML = nameArr[result[1]];
		document.getElementById("res-name-three").innerHTML = nameArr[result[2]];
	}
}

function onSelectedSix(){
	selectedNum = selectedNum + 1;
	selected[5] = 1;
	if (selectedNum > 2) {
		result = getRes(selected);
		selectedNum = 0;
		selected = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
		document.getElementById("res-img-one").src = imgSrc[result[0]];
		document.getElementById("res-img-two").src = imgSrc[result[1]];
		document.getElementById("res-img-three").src = imgSrc[result[2]];
		document.getElementById("res-name-one").innerHTML = nameArr[result[0]];
		document.getElementById("res-name-two").innerHTML = nameArr[result[1]];
		document.getElementById("res-name-three").innerHTML = nameArr[result[2]];
	}
}

function onSelectedSeven(){
	selectedNum = selectedNum + 1;
	selected[6] = 1;
	if (selectedNum > 2) {
		result = getRes(selected);
		selectedNum = 0;
		selected = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
		document.getElementById("res-img-one").src = imgSrc[result[0]];
		document.getElementById("res-img-two").src = imgSrc[result[1]];
		document.getElementById("res-img-three").src = imgSrc[result[2]];
		document.getElementById("res-name-one").innerHTML = nameArr[result[0]];
		document.getElementById("res-name-two").innerHTML = nameArr[result[1]];
		document.getElementById("res-name-three").innerHTML = nameArr[result[2]];
	}
}

function onSelectedEight(){
	selectedNum = selectedNum + 1;
	selected[7] = 1;
	if (selectedNum > 2) {
		result = getRes(selected);
		selectedNum = 0;
		selected = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
		document.getElementById("res-img-one").src = imgSrc[result[0]];
		document.getElementById("res-img-two").src = imgSrc[result[1]];
		document.getElementById("res-img-three").src = imgSrc[result[2]];
		document.getElementById("res-name-one").innerHTML = nameArr[result[0]];
		document.getElementById("res-name-two").innerHTML = nameArr[result[1]];
		document.getElementById("res-name-three").innerHTML = nameArr[result[2]];
	}
}

function onSelectedNine(){
	selectedNum = selectedNum + 1;
	selected[8] = 1;
	if (selectedNum > 2) {
		result = getRes(selected);
		selectedNum = 0;
		selected = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
		document.getElementById("res-img-one").src = imgSrc[result[0]];
		document.getElementById("res-img-two").src = imgSrc[result[1]];
		document.getElementById("res-img-three").src = imgSrc[result[2]];
		document.getElementById("res-name-one").innerHTML = nameArr[result[0]];
		document.getElementById("res-name-two").innerHTML = nameArr[result[1]];
		document.getElementById("res-name-three").innerHTML = nameArr[result[2]];
	}
}

function onSelectedTen(){
	selectedNum = selectedNum + 1;
	selected[9] = 1;
	if (selectedNum > 2) {
		result = getRes(selected);
		selectedNum = 0;
		selected = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
		document.getElementById("res-img-one").src = imgSrc[result[0]];
		document.getElementById("res-img-two").src = imgSrc[result[1]];
		document.getElementById("res-img-three").src = imgSrc[result[2]];
		document.getElementById("res-name-one").innerHTML = nameArr[result[0]];
		document.getElementById("res-name-two").innerHTML = nameArr[result[1]];
		document.getElementById("res-name-three").innerHTML = nameArr[result[2]];
	}
}

</script>