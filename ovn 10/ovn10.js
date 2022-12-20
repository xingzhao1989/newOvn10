
let starWarsButton = document.getElementById("searchButton");
starWarsButton.addEventListener('click', getStarWarsApi);

function getStarWarsApi(){
    
    let input = document.getElementById("searchInput").value;
    let fullUri = `https://www.swapi.tech/api/people/?name=${input}`;
    console.log(fullUri);

    fetch(fullUri).then(res => res.json())
    .then(data =>{
        let name;
        let description;
        let height;
        let mass;
        let gender;
        let hairColor;

        data.result.forEach((item) => {name = item.properties.name});
        data.result.forEach((item) => {description = item.description});
        data.result.forEach((item) => {height = item.properties.height});
        data.result.forEach((item) => {mass = item.properties.mass});
        data.result.forEach((item) => {gender = item.properties.gender});
        data.result.forEach((item) => {hairColor = item.properties.hair_color});

        if(name === undefined){
            document.getElementById("result").innerHTML = "not the character.";
            return;
        }

        document.getElementById("result").innerHTML = `Name: ${name}\nDescription: ${description}\nHeight: ${height} cm\nMass: ${mass} kg\nGender: ${gender}\nHair color: ${hairColor}`;

        
    })
    .catch(err => console.log(err));
}

let cardButton = document.getElementById("cardButton");
cardButton.addEventListener('click', getCardApi);

function getCardApi(){
    let fullUri = `https://deckofcardsapi.com/api/deck/new/draw/?count=1`;
    console.log(fullUri);

    fetch(fullUri).then(res => res.json())
    .then(data =>{
       
        let img = document.createElement("img");
        let imgLink;
        console.log(data);
        data.cards.forEach((item) => {imgLink = item.image; console.log(item.image)});
    
        img.setAttribute("src", imgLink);
        document.getElementById("cardDiv").innerHTML = "";
        document.getElementById("cardDiv").appendChild(img);
        


        
    })
    .catch(err => console.log(err));
}