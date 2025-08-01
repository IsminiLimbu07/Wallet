const body = document.body
body.append("hello ismini")

const newh1 = document.createElement("h1")
newh1.innerText = "How you doing?"
body.append(newh1)  
//document.createElement("h1") creates a new <h1> (big heading) element in memory, but it’s not on the page yet.
//const newh1 stores this new <h1> in a variable called newh1.
//newh1.innerText = "How you doing?" puts the text "How you doing?" inside the <h1> element.
//Now the <h1> will display "How you doing?" when added to the page.
//body.append(newh1) adds the <h1> (with its text) to the end of the <body>.
//This makes "How you doing?" appear on the webpage as a big, bold heading.

const getinner = document.querySelector(".some")
// queryselector ley suru ko select garxa

getinner.innerHTML = "<b>Mrs. Phalengi</b>"
// innerText lekhda kheri tag sanga auxa tara innerHTMl lekha tag harauxa
body.append(getinner)



