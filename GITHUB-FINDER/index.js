//####################you will find 3 way of solution, starting from difficult way to more easy way  ###################################


////////////////////////first solution//////////////////////////////

// class GithubApiWidget {
//     // Setting up the properties, we need in our class
//     constructor(options = {}) {
//         // Setup the options
//         this.options = {
//             container: "#github-user-repositories-widget"
//         };


//         Object.assign(this.options, options);

//         // Define needed properties for the API
//         this.apiUrl = "https://api.github.com";
//         this.userRepositoriesEndpoint = "/users/:username/repos";

//         // Define properties for needed elements
//         this.elements = {};

//         // Initialize the widget
//         this.init();
//     }

//     init() {
//         // Get the container element
//         this.elements.container = document.querySelector(this.options.container);

//         // Create the basic HTML for the widget
//         this.elements.container.innerHTML = this.parseInitialTemplate();

//         // Get all created elements
//         // this.elements.form = this.elements.container.querySelector(".github-widget-form");
//         this.elements.input = this.elements.container.querySelector(".github-widget-input");
//         this.elements.list = this.elements.container.querySelector(".github-widget-repositories");

//         // Register the needed events
//         this.registerEvents();
//     }

//     registerEvents() {
//         // Add the event, when the form is submitted
//         this.elements.form.addEventListener("submit", e => {
//             // Prevent the default to stop sending the form to the URL by the browser
//             e.preventDefault();

//             // Get the username from the input field
//             const username = this.elements.input.value.trim();

//             // Call another method (to split code for readability) that reads the
//             // repositories from the Github API and pass a callback (again => readability)
//             // that works on that data.
//             this.getRepositories(username, repositories => {
//                 // Filter the repositories to the data we need (as it is having too many properties)
//                 repositories = this.filterRepositoryResults(repositories);

//                 // Generate the HTML markup for the list of repositories
//                 const markup = this.parseListTemplate(repositories);

//                 // Update the DIV element to have the new markup inside
//                 this.elements.list.innerHTML = markup;
//             });
//         });
//     }

//     getRepositories(username, callback) {
//         // Create the URL, replacing the username (as seen in the documentation of the Github API)
//         // with the username that was given in the input field.
//         const url = `${this.apiUrl}${this.userRepositoriesEndpoint}`.
//         replace(":username", encodeURIComponent(username));

//         console.log("get data", url);

//         // Calling the API (= opening that URL with a request of the browser)
//         // $.getJSON(url).
//         // done(data => {
//         //     // Call the callback function, that is used to handle the result we get
//         //     // from the Github API server, once the data is there
//         //     callback(data);
//         // });
//         fetch(url)
//             .then(response => {
//                 return response.json();
//             })
//             .then(data => {
//                 console.log(data);
//                 callback(data);
//             })

//     }

//     filterRepositoryResults(repositoryData) {
//         // Filter the repositories to a limited set of properties
//         const repositories = repositoryData.map(repository => {
//             return {
//                 description: repository.description,
//                 name: repository.name,
//                 url: repository.html_url,
//                 createdAt: repository.created_at
//             };

//         });

//         return repositories;
//     }

//     parseInitialTemplate() {
//         return `
//       <form class="form-inline github-widget-form">
//         <label class="sr-only" for="username">Name</label>
//         <input type="text" class="form-control mb-2 mr-sm-2 github-widget-input" placeholder="Github username">
//         <button type="submit" class="btn btn-primary mb-2">Submit</button>
//       </form>
//       <div class="github-widget-repositories"></div>
//     `;
//     }

//     parseListTemplate(repositories) {
//         console.log("parse list template", repositories);
//         /*
//         Loop all repositories, create an array of generated templates
//         and join them as a String in the end, using nothing as separator
//         (it uses comma, if you don't pass that argument)
//     */

//         return `
//       <div class="list-group">
//         ${repositories.
//     map(repository => this.parseListItemTemplate(repository)).
//     join("")}
//       </div>
//     `;
//     }

//     parseListItemTemplate(repository) {



//         // Tipp: you can also use 😊
//         //${moment(repository.createdAt).fromNow()}

//         return `
//         <a href="${repository.url}"
//            target="_blank"
//            class="list-group-item list-group-item-action flex-column align-items-start ">
//           <div class="d-flex w-100 justify-content-between">
//             <h5 class="mb-1">${repository.name}</h5>
//             <small>${repository.createdAt}</small>
//           </div>
//           <p class="mb-1">
//             ${repository.description}
//           </p>
//         </a>
//     `;
//     }
// }


// const widgetOne = new GithubApiWidget({
//     container: "#repositories"
// });


// const widgetTwo = new GithubApiWidget({
//     container: "#repositories-two"
// });


/////////////////////###############//////another solution//////#####################////////////////////

// function clickme() {
//     let input = document.getElementById("input").value;
//     let url = `https://api.github.com/users/${input}/repos?client_id=<your_id>&client_secret=<your-client-secret>`
    
//     function getdata(){
//         fetch(url)
//         .then((response)=>{
//          return response.json() 
//         })
//         .then((data)=>{
//             function outputdata(data){
//                 ////////////img of user//////////
//               document.getElementById('output').innerHTML =`
//                 <img src=' ${data[0].owner.avatar_url}  ' class="img-thumbnail"/>
//                 `;

//      data.forEach(user=>{
//     ////////////Repo of user//////////////
//     let Htmloutput=`
//     <div id='section'>
//     <p>${user.full_name}</p>
//     <div><a target ="_blank"  class="btn btn-secondary" href="${
//         user.html_url
//       }">view repo</a></div>
//     </div>
//     </div>
//     `
//     document.getElementById('output').innerHTML +=Htmloutput
//     })
//              }
//              outputdata(data)
//         });
//     }
//     getdata()
     
//   };


  //////////////////##############/////more easy solution with async await//////##################/////////////////


  function clickme() {
    let input = document.getElementById("input").value;
    let url = `https://api.github.com/users/${input}/repos?client_id=21e1a36c6d527a399fcb&client_secret=f1555fbb79db11bc165bd5876494519fdd531d07`
 
    
    
   async function getdata(){
       let res = await fetch(url)
       let data = await res.json()
            function outputdata(data){
                ////////////img of user//////////
              document.getElementById('output').innerHTML =`
                <img src=' ${data[0].owner.avatar_url}  ' class="img-thumbnail"/>
                `;

     data.forEach(user=>{
    ////////////Repo of user//////////////
    let Htmloutput=`
    <div id='section'>
    <p>${user.full_name}</p>
    <div><a target ="_blank"  class="btn btn-secondary" href="${
        user.html_url
      }">view repo</a></div>
    </div>
    </div>
    `
    document.getElementById('output').innerHTML +=Htmloutput
    })
             }
             outputdata(data)
    
    }
    getdata()
     
  };
















