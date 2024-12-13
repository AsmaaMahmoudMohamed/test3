

let searchInput = document.getElementById("searchInput");
let btnSearch = document.getElementById("btnSearch");


searchInput.addEventListener("input", function(){
    getRecipes(searchInput.value);
})

getRecipes("london")


let allData = [];





 async function getRecipes(weather) {
    let response = await fetch(` https://api.weatherapi.com/v1/search.json?key=ca9b471dbced442d93e152029240412&q=${weather}`);

    if(response.ok){
        let date = await response.json();
        allData = date ;
        displayData();
        console.log( response)

    }

}


// async function getweather(dayss) {
//     let response = await fetch(` https://www.weatherapi.com/docs/weather${dayss}`);

//     if(response.ok){
//         let dayOne = await response.json();
//         allData = dayOne ;
//         displayData();
//         console.log( response)

//     }

// }


const d = new Date();
document.getElementById("demo").innerHTML = d;


function displayData() {
    let cartona = "";
    for(let i = 0; i< allData.length;i++){
        cartona += `
         

           <div class="col-md-4 py-4 my-4 ms-0">
            <div  height="300px"   class="card border-black  mb-3" >
              <div class="card-header  text-white my-class2">Today :   December</div>
              <div class="card-body text-white my-class2 py-4">
                <h5 class="card-title">city : ${allData[i].name} </h5>
                <span class="d-block fs-5" > Degree : ${allData[i].lat}  </span>
                <span class="d-block">  ${allData[i].country}  </span>
                <span class="d-block">  <i class="fa-regular fa-sun"></i>  </span>
                <span class="d-block">Day: Sunny  </span>

              </div>
              <div class="card-footer  my-class2 text-white">
                <img src="img/icon-umberella-1.png" alt="photo"> <span class="px-2">20%</span>
                <img src="img/icon-wind-2.png" alt="photo"> <span class="px-2">18km/h</span>
                <img src="img/icon-compass-3.png" alt="photo"> <span class="px-2">East</span>
              </div>
            </div>
          </div>



        `

    }
    document.getElementById("rowData").innerHTML= cartona;
}
