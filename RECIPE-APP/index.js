
   
  document.querySelector('.btn-save').addEventListener('click', (e)=>{
    getData()
  })
  
  async function  getData() {  
    let input= document.querySelector('.recipe-input').value
  
    let response = await fetch(`https://api.edamam.com/search?q=${input}&app_id=51bc274c&app_key=16b8c408cf386ee3ab512392329517db`);                  
      let data = await response.json(); 
      localStorage.setItem('data',JSON.stringify( data.hits) );
  
      data.hits.forEach(element => {
        document.querySelector('div').innerHTML +=  `<div>     
         <section class="recipe-display"> 
                   <section class="recipe-meta">
                    <img src=${element.recipe.image} />
                   <h4>${element.recipe.dishType}</h4>
                         <h5>mealType: ${element.recipe.mealType}</h5>
                          <h5>source: ${element.recipe.source}</h5>
                        <h5>cuisineType: ${element.recipe.cuisineType}</h5>
                         </section>
                      </section> </div>`  
      });
    
    }
  
    if(localStorage.data){
     
        JSON.parse(localStorage.data).forEach(element => {
          document.querySelector('div').innerHTML +=  `
          <div>      <section class="recipe-display"> 
                     <section class="recipe-meta">
                      <img src=${element.recipe.image} />
                     <h4>${element.recipe.dishType}</h4>
                           <h5>mealType: ${element.recipe.mealType}</h5>
                            <h5>source: ${element.recipe.source}</h5>
                          <h5>cuisineType: ${element.recipe.cuisineType}</h5>
                           </section>  
                        </section> </div>`  
        
        
        });
      }