function primaryResponse() {
    let buttonColorGreen = true
    if (buttonColorGreen === false){
        alert("I'm supposed to be green");
    } else { alert("I am the correct color, green") 
        }
}

function secondaryResponse() {
    const arrayOne = ["first click", "second click", "third click", "fourth click", "last click"]
    for (i=0; i<arrayOne.length; i++) {
        console.log(i)
        alert(arrayOne[i])
    }
}


var headline = document.getElementById("headline")


console.log(document)


function handleMouseOver() {
    console.log("the mouse went over h1")
    alert("the mouse went over h1")
}

headline.addEventListener("mouseover", handleMouseOver)

var something = {
    actor: "billy bob",
    isNice: false,
    movies: ['top gun','desperator'],
    age: 90
}

console.log(something["isNice"])