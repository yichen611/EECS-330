// Create your global variables below:
var tracklist = ["Let It Happen", "Nangs", "The Moment", "Yes I'm Changing", "Eventually", "Gossip", "The Less I Know The Better", "Past Life", "Disciples", "'Cause I'm A Man"];
var volLevels = [];
var initialVol = 3;
var volume= initialVol;
var intervalBar = document.getElementById("intervalBar");
var timer;
var begin_time = document.getElementById("begin_time");
var songName = document.getElementById("songName");
var currentSong = 6;

function init() {
	for (i = 0; i <=5; i++) {
		volLevels.push(document.getElementById("vl"+i));

	}

	for (i =0; i<initialVol; i++){
		volLevels[i].style.backgroundColor = "#9f5cc4";
	}
	
	

};

function volUp() {

	if (volume <6){
		volLevels[volume].style.backgroundColor = "#9f5cc4";
		volume++;
	}
	
	

}

function volDown() {
	if (volume >=0){
		volLevels[volume-1].style.backgroundColor = "white";
		volume--;
	}
	
	
}

function switchPlay() {
	if (document.getElementById("toggle").innerHTML=="play_arrow")
	{
		document.getElementById("toggle").innerHTML="pause";
		
		timer = setInterval(myTimer, 1000);

		function myTimer(){
            intervalBar.stepUp(1);
            begin_time.innerHTML = secondsToMs(intervalBar.value);
            if (intervalBar.value==180) {nextSong();}
		};

	}
	
	else {
		document.getElementById("toggle").innerHTML="play_arrow";
		clearInterval(timer);
	}
}


function nextSong() {
	
	if (0<=currentSong<=9){
		currentSong++;
		songName.innerHTML= tracklist[currentSong];
		begin_time.innerHTML = secondsToMs(0);
		intervalBar.value=0;
		if (currentSong==10){
			currentSong=0;
			songName.innerHTML= tracklist[currentSong];

		}
	}	

}

function prevSong() {
	if (0<=currentSong<=9){
		currentSong--;
		songName.innerHTML= tracklist[currentSong];
		begin_time.innerHTML = secondsToMs(0);
		intervalBar.value=0;

		if (currentSong== -1){
			currentSong=9;
			songName.innerHTML= tracklist[currentSong];

		}
	}	
}

function secondsToMs(d) {
    d = Number(d);

    var min = Math.floor(d / 60);
    var sec = Math.floor(d % 60);

    return `0${min}`.slice(-1) + ":" + `00${sec}`.slice(-2);
}

init();