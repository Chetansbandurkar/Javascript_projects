console.log("welcome to spotify");
// let audi0Element=new Audio('1.mp3');
// audioElement.play();
const songIndex=0;
// audio is a constructor
let audioElement=new Audio('./music/1.mp3');
// main playing button
let masterPlay=document.getElementById('masterPlay');
let myprogerssBar=document.getElementById('progressbar')
let gif=document.getElementById('gif');
let songItem=document.getElementsByClassName('songitem');
let songs =[
    {songName:"Ram-Siya-Ram",filePath:"./music/1.mp3",coverParh:"./images/ram_siya_ram.jpeg"},
    {songName:"Laree Chooti",filePath:"./music/2.mp3",coverParh:"./images/ram_siya_ram.jpeg"},
    {songName:"Ram-Siya-Ram",filePath:"./music/3.mp3",coverParh:"./images/ram_siya_ram.jpeg"},
    {songName:"Ram-Siya-Ram",filePath:"./music/4.mp3",coverParh:"./images/ram_siya_ram.jpeg"},
    {songName:"Ram-Siya-Ram",filePath:"./music/5.mp3",coverParh:"./images/ram_siya_ram.jpeg"},
    {songName:"Ram-Siya-Ram",filePath:"./music/6.mp3",coverParh:"./images/ram_siya_ram.jpeg"},

    {songName:"Ram-Siya-Ram",filePath:"./music/7.mp3",coverParh:"./images/ram_siya_ram.jpeg"},
    {songName:"Ram-Siya-Ram",filePath:"./music/8.mp3",coverParh:"./images/ram_siya_ram.jpeg"},
    {songName:"Ram-Siya-Ram",filePath:"./music/8.mp3",coverParh:"./images/ram_siya_ram.jpeg"},
    {songName:"Ram-Siya-Ram",filePath:"./music/10.mp3",coverParh:"./images/ram_siya_ram.jpeg"},

]
// handle playing
// master play pe click kiya
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused||audioElement.currentTime<=0){
       audioElement.play(); 
       masterPlay.classList.remove('fa-circle-play');
       masterPlay.classList.add('fa-circle-pause');
       gif.style.opacity=1;
    }
    else{
        audioElement.pause(); 
       masterPlay.classList.remove('fa-circle-pause');
       masterPlay.classList.add('fa-circle-play');
       gif.style.opacity=0;
    }
});

audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    // update seek bar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    // console.log(progress);
    myprogerssBar.value=progress;
});
myprogerssBar.addEventListener('change',()=>{
    audioElement.currentTime=myprogerssBar.value*audioElement.duration/100;
});

