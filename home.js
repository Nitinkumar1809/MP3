let progress = document.getElementById("progress");
let song = document.getElementById("song");
let CtrlIcon = document.getElementById("CtrlIcon");

song.onloadedmetadata = function() {
    progress.max = song.duration;
    progress.value = song.currentTime;
}

function playPause() {
    if (CtrlIcon.classList.contains("bi-pause")) {
        song.pause();
        CtrlIcon.classList.remove("bi-pause");
        CtrlIcon.classList.add("bi-play");
    } else {
        song.play();
        CtrlIcon.classList.add("bi-pause");
        CtrlIcon.classList.remove("bi-play");
    }
}

if(song.play()){
    setInterval(() => {
        progress.value = song.currentTime;
    },500);
}

progress.onchange = function() {
    song.play();
    song.currentTime =  progress.value;
    CtrlIcon.classList.add("bi-pause");
    CtrlIcon.classList.remove("bi-play");
}