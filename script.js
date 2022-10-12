// console.log("diuogfe");

let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myprogressbar = document.getElementById("myprogressbar");
let gif = document.getElementById("gif");
let songitem = Array.from(document.getElementsByClassName("songitem"));
let masterSongName = document.getElementById("masterSongName");
let songs = [
  { songName: "Kesariya", filePath: "songs/1.mp3", coverpath: "covers/1.jpg" },
  { songName: "Tu Hi Yaar", filePath: "song/2.mp3", coverpath: "covers/2.jpg" },
  { songName: "Khairiyat", filePath: "song/3.mp3", coverpath: "covers/3.jpg" },
  { songName: "Rangdaari", filePath: "song/4.mp3", coverpath: "covers/4.jpg" },
  { songName: "Sanam Re", filePath: "song/5.mp3", coverpath: "covers/5.jpg" },
  {
    songName: "Agar Tum Saath Ho",
    filePath: "song/6.mp3",
    coverpath: "covers/6.jpg",
  },
  { songName: "Tu Hi Hai", filePath: "song/7.mp3", coverpath: "covers/7.jpg" },
  { songName: "Pal", filePath: "song/8.mp3", coverpath: "covers/8.jpg" },
  { songName: "Song 9", filePath: "song/9.mp3", coverpath: "covers/9.jpg" },
  {
    songName: "Song 10",
    filePath: "song/10.mp3",
    coverpath: "covers/10.jpg",
  },
];

songitem.forEach((element, i) => {
  // console.log(element,i);
  element.getElementsByTagName("img")[0].src = songs[i].coverpath;
  element.getElementsByClassName("songName")[0].innerHTML = songs[i].songName;
});

//play pause

masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-pause-circle");
    masterPlay.classList.add("fa-play-circle");
    gif.style.opacity = 0;
  }
});

audioElement.addEventListener("timeupdate", () => {
  // console.log('timeUpdate')
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  console.log(progress);
  myprogressbar.value = progress;
});

myprogressbar.addEventListener("change", () => {
  audioElement.currentTime =
    (myprogressbar.value * audioElement.duration) / 100;
});

const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach(
    (element) => {
      element.classList.remove("fa-pause-circle");

      element.classList.add("fa-play-circle");
    }
  );
};

Array.from(document.getElementsByClassName("songItemPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      makeAllPlays();
      songIndex = parseInt(e.target.id);
      e.target.classList.remove("fa-circle-play");
      e.target.classList.add("fa-circle-pause");
      audioElement.src = `songs/${songIndex + 1}.mp3`;
      audioElement.currentTime = 0;
      audioElement.play();
      masterSongName.innerText = songs[songIndex].songName;
      gif.style.opacity = 1;
      masterPlay.classList.remove("fa-circle-play");
      masterPlay.classList.add("fa-circle-pause");
    });
  }
);

document.getElementById("next").addEventListener("click", () => {
  if (songIndex >= 7) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }
  audioElement.src = `songs/${songIndex + 1}.mp3`;
  audioElement.currentTime = 0;
  audioElement.play();
  masterSongName.innerText = songs[songIndex].songName;
  gif.style.opacity = 1;
  masterPlay.classList.remove("fa-circle-play");
  masterPlay.classList.add("fa-circle-pause");
});
document.getElementById("previous").addEventListener("click", () => {
  if (songIndex <= 0) {
    songIndex = 7;
  } else {
    songIndex -= 1;
  }
  audioElement.src = `songs/${songIndex + 1}.mp3`;
  audioElement.currentTime = 0;
  audioElement.play();
  masterSongName.innerText = songs[songIndex].songName;
  gif.style.opacity = 1;
  masterPlay.classList.remove("fa-circle-play");
  masterPlay.classList.add("fa-circle-pause");
});















