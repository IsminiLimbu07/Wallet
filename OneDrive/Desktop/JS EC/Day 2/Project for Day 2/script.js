let placesContainer = document.getElementById("cardContainer");



const places = [
{
    name: "Mount Everest",
    desc: "Highest mountain in the world.",
    img: "./img1.avif"

},
{
    name: "Fewa Lake",
    desc: "Beautiful lake in Pokhara.",
    img: "./img2.avif"
},
{
    name: "Patan Durbar Square",
    desc: "Historic royal palace complex.",
    img: "./img3.avif"

}
];

places.forEach(function(place) {
    let card = document.createElement("div");
    card.className = "card";
    card.innerHTML =
        '<img src="' + place.img + '" alt="' + place.name + '">' +
        '<h3>' + place.name + '</h3>' +
        '<p>' + place.desc + '</p>';
    placesContainer.appendChild(card);
});

// let container = document.getElementById("container");
// places.forEach(({name, img, desc}) => {
//     const card = document.createElement("div")
//     card.className = "card"
//     card.innerHTML = `
//         <img src="${img}" alt="${name}">
//         <h3>${name}</h3>
//         <p>${desc}</p>
//     `
//     container.appendChild(card)
// })  