

document.querySelector('.btn-save').addEventListener('click', (e)=>{

   let input= document.querySelector('.movie-input').value
            async function  getMovieData() {  

                
                let response = await fetch(`http://www.omdbapi.com/?s=${input}&apikey=1a09480e`);
                let data = await response.json(); 
                window.localStorage.setItem('data', JSON.stringify(data))

                const items= JSON.parse( window.localStorage.getItem('data'))

                    items.Search.forEach(item => {
                        getMovieId(item.imdbID)
                    });
                }
                getMovieData()     
            })
            
            async function  getMovieId(id) {
                let response = await fetch(`http://www.omdbapi.com/?i=${id}&apikey=1a09480e`);
        let data = await response.json(); 
        
         displayMovieOnPage(data)
    }
    
              function displayMovieOnPage(item) {
                
               document.getElementById('demo').innerHTML +=
               `<div>      <section class="movie-display"> 
              <section class="movie-meta">
              <img src=${item.Poster} />
              <h4>${item.Title}</h4>
                      <h5>Release date: ${item.Type}</h5>
                      <h5>Run time: ${item.Year}</h5>
                      <h5>Rated: ${item.imdbID}</h5>
                      </section>
               
                  </section> </div>`     
                  
                }; 





































































































