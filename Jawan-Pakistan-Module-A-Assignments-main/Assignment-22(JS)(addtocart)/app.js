var arrcart = [
    {
        id:0,
        img: "https://static.vecteezy.com/system/resources/thumbnails/025/284/015/small_2x/close-up-growing-beautiful-forest-in-glass-ball-and-flying-butterflies-in-nature-outdoors-spring-season-concept-generative-ai-photo.jpg",
        cardtitle: "Card Title",
        des: "Some quick example tex dolor sit amet consectetur adipisicing e dolor sit amet consectetur adipisit to build on the card title and make up the bulk of the card's content."

    },
    {
        id:1,
        img: "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg",
        cardtitle: " Our Card Title",
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum sed debitis, eius deserunt non ipsam quos velit consectetur temporibus optio!"
    }
]

// console.log(arrcart)

var cardcon = document.getElementById("cart-content")
// console.log(cardcon)
for (var i = 0; i < arrcart.length; i++) {
    var cardimg = arrcart[i].img
    var cardtitle = arrcart[i].cardtitle
    var desc = arrcart[i].des
    var id = arrcart[i].id

    cardcon.innerHTML += `
    <div class="card m-2" style="width: 18rem;">
            <img src= ${cardimg} class="card-img-top" style="height:200px;" alt="...">
            <div class="card-body">
                <h5 class="card-title">${cardtitle}</h5>
                <p class="card-text">${desc}</p>
                <a href="#" class="btn btn-primary" onclick="additem(${id})">add to cart</a>
            </div>
        </div>
    `
}
var getdatafromlocalstorage = localStorage.getItem("cartitem")
// console.log(getdatafromlocalstorage)
var strtoObj = JSON.parse(getdatafromlocalstorage)
if(!strtoObj){
    var arr = []

}


function additem(index){ 
//    console.log(arrcart[index]) 
var sendingObj = arrcart[index]
arr.push(sendingObj)
console.log(arr)

localStorage.setItem("cartitem",JSON.stringify(arr))

}