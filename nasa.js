//user can see input form and submit form
//user can enter a date  into input form
//user clicks submit
//user should expect to see pic of the date

//api key

//when the user presses submit they expect a photo
$("#submitDate").submit(function(e){
   e.preventDefault();

var apiKey = "qOhxv5lv7TMGuINEysRAaSUt77ZQ9y5yLRTDdRQS";
//store the url in a global variable to be reused later , date = blank..date can be filled in with user input
var apiURL = "https://api.nasa.gov/planetary/apod?api_key=qOhxv5lv7TMGuINEysRAaSUt77ZQ9y5yLRTDdRQS&date=" ;
//grab value from the input of the user
var userInput= $("#typeDate").val()

//ajax call
  $.ajax({
    // concatenate the variable api url and the user input ..where there was a blank date parameter..that way it will finish the api url
       url: apiURL + userInput,
       //if sucessful print the response or whatever i get back in the console..
       success: function(response){
         console.log(response);
         //also grab the image tag..change the attribute to the response / whatever i get back , with the img's url to the srr attribute
         $("img").attr("src",response.url )

       },
       //if it errors , tell me the error
       error: function(r){
         console.log(r);
       }

  })
  })
