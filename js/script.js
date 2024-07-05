async function cat(){

  try{


    const res = await fetch("https://api.thecatapi.com/v1/breeds?limit=10")//cats api
    const result= await res.json();
    console.log(result)
    
    for(var i=0; i< result.length; i++){ //for loop
        const div = document.createElement("div" );
        const div1 = document.querySelector(".api-data");
    
        
        div.innerHTML=`       
        <div class="row  row-cols-md-5 g-4" >
            <div class="col" id="cards">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Name: ${result[i].name}</h5>
                  <h6 class="card-id">Id: ${result[i].id}</h6>
                  <h6 class="card-origin">Origin: ${result[i].origin}</h6>
                  <h6 class="card-countrycode">Countrycode: ${result[i].country_code}</h6>
                  <h6 class=Weight">Weight: ${result[i].weight.metric}</h6>
                 <h6 class="card-url">Image and Quickfacts:<a href="${result[i].vetstreet_url}" class="btn btn-primary">Click here</a> </h6>
                  
                </div>
              </div>
            </div>`
        document.body.append(div1);
         div1.append(div)
    }
  }
  catch(error){
    console.log(error)
  }
  
  }


cat();   
