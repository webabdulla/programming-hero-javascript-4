

let images = [
    "./images/team3.png",
    "./images/team4.png",
    "./images/team2.png",
    "./images/banner.png",
    "./images/team1.png",
];

let imageIndex = 0;
const imageEl= document.getElementById('img')
setInterval(() => {
    if(imageIndex===images.length){
         imageIndex=0;
    }
const imageUrl = images[imageIndex];
    console.log(imageIndex, imageUrl);
    imageEl.setAttribute('src',imageUrl )
    imageIndex++;
}, 1000);

