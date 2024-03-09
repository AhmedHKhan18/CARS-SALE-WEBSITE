var box =document.getElementById("container");

var ferrariImg = "https://images.unsplash.com/photo-1592198084033-aade902d1aae?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D"

var lamboImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmfwS7c5CN5w82sEm9Q-N99TKv3S4Itdn1NQ&usqp=CAU"

var bmwImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQfH15RFyybRNZMPUbS_eRaQULNlJPCrdW0A&usqp=CAU"

var mercedesImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwA7mKXkoL-sdeomn6iSVUr0kTpP3Qc9wqug&usqp=CAU"

var buggatiImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5j2gv6vLBR8Yp7venf2FmbWkAwpx3jAY7PQ&usqp=CAU"

var mclarenImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjPcZp3e0BU1Np1W6iBAu6KJltT5MKwqOGYg&usqp=CAU"

var supraImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGYXR4h4-_qABmxe_yHxdGqCYTjrfVxPhDaw&usqp=CAU"

var rx8Img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqU3oWhPYfMuBL46BId2tQJ-_qTb9JGHvKxA&usqp=CAU"

var Cars = [
    {
        name:"LAMBORGHINI AVENTADOR",
        price:"$700000",
        image:lamboImg
    },
    {
        name:"FERRARI DR-V",
        price:"$800000",
        image:ferrariImg
    },
    {
        name:"BMW I8",
        price:"$500000",
        image:bmwImg
    },
    {
        name:"MERCEDES AMG",
        price:"$600000",
        image:mercedesImg
    },
    {
        name:"BUGGATTI CHIRON",
        price:"$700000",
        image:buggatiImg
    },
    {
        name:"MCLAREN SPIDER",
        price:"$1100000",
        image:mclarenImg
    },
    {
        name:"SUPRA MK5",
        price:"$130000",
        image:supraImg
    },
    {
        name:"MAZDA RX-8",
        price:"$60000",
        image:rx8Img
    }
]
    for (var count = 0; count < Cars.length; count++) {
        box.innerHTML += `
        <div class="card">
        <img src="${Cars[count].image}" width="100%" alt="">
        <h3>${Cars[count].name}</h3>
        <p>${Cars[count].price}</p>
        </div>
        `;
    }