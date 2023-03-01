console.log("Welcome to spotify")

let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Warriyo - Mortals [NCS Release]", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "DandaKadiyal (From Dhamaka)", filePath: "songs/Dandakadiyal.mp3", coverPath: "covers/2.jpeg"},
    {songName: "Manike (From Thank God)", filePath: "songs/Manike.mp3", coverPath: "covers/3.jpeg"},
    {songName: "Pushpa BG Intro (From Pushpa)", filePath: "songs/Pushpa BG Intro.mp3", coverPath: "covers/4.jpeg"},
    {songName: "Ra Ra Reddy (From Macherla Niyojakavargam)", filePath: "songs/Ra Ra Reddy.mp3", coverPath: "covers/5.jpeg"},
    {songName: "Raatan Lambiyan (From Shershaah)", filePath: "songs/Raatan Lambiyan.mp3", coverPath: "covers/6.jpeg"},
    {songName: "Ramuloo Ramulaa (From Ala Vaikunthapurramuloo)", filePath: "songs/Ramuloo Ramulaa.mp3", coverPath: "covers/7.jpeg"},
    {songName: "Samajavaragamana (From Ala Vaikunthapurramuloo) ", filePath: "songs/Samajavaragamana.mp3", coverPath: "covers/8.jpeg"},
    {songName: "Srivalli (From Pushpa)", filePath: "songs/Srivalli.mp3", coverPath: "covers/9.jpeg"},
    {songName: "Urike Urike (From Hit 2)", filePath: "songs/Urike Urike.mp3", coverPath: "covers/10.jpeg"},
]   

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})

masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

audioElement.addEventListener('timeupdate', ()=>{

    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
} )

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = (myProgressBar.value * audioElement.duration)/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
})
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays()
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex}.mp3`;
        masterSongName.innerText = songs[songIndex-1].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=10){
        songIndex = 0; 
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex}.mp3`;
    masterSongName.innerText = songs[songIndex-1].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex <= 0){
        songIndex = 0; 
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex}.mp3`;
    masterSongName.innerText = songs[songIndex-1].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
})