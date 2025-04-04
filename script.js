const audio = document.getElementById("audio");
const title = document.getElementById("title");
const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const progress = document.getElementById("progress");
const currentTimeEl = document.getElementById("currentTime");
const durationEl = document.getElementById("duration");
const volume = document.getElementById("volume");

const songs = [
    { name: "music/MEGA DAS.mp3" , title: "funk 1"},
    { name: "music/REAL MOONSHINE.mp3" , title: "funk 2"},
    { name: "music/ATLXS.mp3" , title: "funk 3"}
];
let songIndex = 0;
let isPlaying = false;

function loadSong(index) {
    const song = songs[index];
    audio.src = "music/" + song.name;
    title.textContent = song.title;
}
loadSong(songIndex);

function playSong() {
    isPlaying = true;
    audio.play();
    playBtn.textContent = "⏸️";
}

function pauseSong() {
    isPlaying = false;
    audio.pause();
    playBtn.textContent = "▶️";
}
playBtn.addEventListener("click" , () =>{
    if(isPlaying) {
        pauseSong()
    }
    else{
        playSong()
    }
});