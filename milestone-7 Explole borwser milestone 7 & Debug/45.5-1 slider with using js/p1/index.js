

let images = [
    "./images/team1.png",
    "./images/team2.png",
    "./images/team3.png",
    "./images/team4.png",
    "./images/tem5.png"
];

let imageIndex = 0;
const imageElement = document.getElementById('image');
setInterval(() => {

    if(imageIndex === images .length ){
        imageIndex = 0;
    }

    const imageUrl = images[imageIndex];
    
    imageElement.setAttribute('src', imageUrl)

    console.log(imageIndex, imageUrl);
    imageIndex++;
}, 1000);