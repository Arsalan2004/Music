console.log('WElcome to music app');

// audio
let audioelement= new Audio('songs/1.mp3');

// taking Element and initialize it in a variable
let progressbar=document.getElementById('bottombar');
let masterplay=document.getElementById('play');
let gif=document.getElementById('gif');
let songitem=document.getElementsByClassName('songItem');
let songitemplay=document.getElementsByClassName('songitemplay');
let songnamelist=document.getElementById('songname');
let previous=document.getElementById('previous');
let next=document.getElementById('next');
let mastername=document.getElementById('mastername');

// songs object
let songindex=0;
let songs=[
    {songname:'despacito',path:'songs/1.mp3',cover:'cover/1.jpg'},
    {songname:'azan',path:'songs/2.mp3',cover:'cover/2.jpg'},
    {songname:'arbi',path:'songs/3.mp3',cover:'cover/3.jpg'},
    {songname:'random',path:'songs/4.mp3',cover:'cover/4.jpg'},
    {songname:'someone is calling you',path:'songs/5.mp3',cover:'cover/5.jpg'},
    {songname:'main to ummati hun',path:'songs/6.mp3',cover:'cover/6.jpg'},
    {songname:'kabe pe pari jab pehli nazar',path:'songs/7.mp3',cover:'cover/7.jpg'},
    {songname:'main t ummati hun',path:'songs/8.mp3',cover:'cover/8.jpg'},
    {songname:'memories bring back',path:'songs/9.mp3',cover:'cover/9.jpg'},
    {songname:'arbi',path:'songs/10.mp3',cover:'cover/10.jpg'},
    {songname:'arbi',path:'songs/11.mp3',cover:'cover/11.jpg'},
    {songname:'main to ummati hun',path:'songs/12.mp3',cover:'cover/12.jpg'},
    {songname:'main to ummati hun',path:'songs/13.mp3',cover:'cover/13.jpg'},
];
console.log(songs.length);



// songname populate using javascript
let songslist=``;
for(let i=0;i<songs.length;i++){
// console.log(i);
songslist=`<div class="songItem">
    <img src="Despacito.jpg" alt="">
    <marquee direction="left"><span class="songname"></span></marquee>
    <span class="listplay">05:35 <i id='${i}' class="fa-regular fa-2x songitemplay fa-circle-play"></i> </span>
</div>`;
songnamelist.innerHTML+=songslist;
}


// replacing songs images and other items using for each loop
Array.from(songitem).forEach(function(element,i){
    // console.log(element,i);
    element.getElementsByTagName('img')[0].src=songs[i].cover;
    element.getElementsByClassName('songname')[0].innerText=songs[i].songname;
})  


// adding play buttons to all music and play music
const makeplays=()=>{
    Array.from(songitemplay).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    });
}

Array.from(songitemplay).forEach((element)=>{
  element.addEventListener('click',()=>{
    songindex=parseInt(element.id);
    console.log(songindex);
    // console.log(songindex);
    // console.log(element);
    makeplays();
if(audioelement.pause() || audioelement.currentTime<=0 || audioelement.currentTime>1){
    element.classList.remove('fa-circle-play');
    element.classList.add('fa-circle-pause');
    audioelement.src=`songs/${songindex+1}.mp3`;
    audioelement.play();
    mastername.innerText=songs[songindex].songname;
    gif.style.opacity=1;
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
}
else{
    element.classList.remove('fa-circle-pause');
    element.classList.add('fa-circle-play');
    audioelement.src=`songs/${songindex+1}.mp3`;
    // audioelement.currentTime=0;
    audioelement.pause();
    mastername.innerText='';
    gif.style.opacity=0;
    masterplay.classList.remove('fa-circle-pause');
    masterplay.classList.add('fa-circle-play');
}
  })
});



// function to include audio progress in progress bar
audioelement.addEventListener('timeupdate',()=>{
    console.log('time update');
    progress=(audioelement.currentTime/audioelement.duration)*100;
    progressbar.value=progress;
    // console.log(progress);
})



// function to change audio track 
progressbar.addEventListener('change',()=>{
    audioelement.currentTime=(progressbar.value*audioelement.duration)/100;
})


// function to play next previous track
next.addEventListener(('click'),()=>{
    if(songindex>=(songs.length-1)){
        songindex=0;
    }
    else{
        songindex+=1;
    }
console.log('next');
    audioelement.src=`songs/${songindex+1}.mp3`;
    audioelement.currentTime=0;
    audioelement.play();
    makeplays();
    // makepause();
    mastername.innerText=songs[songindex].songname;
    element.classList.remove('fa-circle-pause');
    element.classList.add('fa-circle-play');
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
    console.log('next');
    console.log(songs.length);
})


// function to play previous previous track
previous.addEventListener(('click'),()=>{
    if(songindex<=0){
        songindex=(songs.length-1);
    }
    else{
        songindex-=1;
    }
    audioelement.src=`songs/${songindex+1}.mp3`;
    audioelement.currentTime=0;
    audioelement.play();
    mastername.innerText=songs[songindex].songname;
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
})



// function to play and pause music
masterplay.addEventListener('click',()=>{
if(audioelement.pause() || audioelement.currentTime<=0){
    mastername.innerText=songs[songindex].songname;
    mastername.innerText=songs[songindex].songname;
    
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
    audioelement.play();
    gif.style.opacity=1;
}
else{
    makeplays();
    mastername.innerText='';
    masterplay.classList.remove('fa-circle-pause');
    masterplay.classList.add('fa-circle-play');
    audioelement.pause();
    gif.style.opacity=0;
}
}
);
