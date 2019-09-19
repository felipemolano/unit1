


// variables

var counter = 0; // used to iterate in the colors array 
var quotes = [

  {quote:"They may take our lives, but they'll never take our freedom!",source:"Braveheart",citation:"movie",year: 1995},
  {quote:"If you let my daughter go now, that'll be the end of it. I will not look for you, I will not pursue you. But if you don't, I will look for you, I will find you, and I will kill you.",source:"Taken",citation:"movie",year: 2008},
  {quote:"You complete me",source:"Jerry Maguire",citation:"movie",year: 1996},
  {quote:"You make me want to be a better man",source:"As Good as it gets",citation:"movie",year: 1997,tag:"films"},
  {quote:"Never memorize something that you can look up",source:"Albert Einstein",citation:"-"},
  {quote:"I'm just one stomach flu away from my goal weight.",source:"Devils wears Prada",citation:"movie",year: 2006,tag:"films"},
  {quote:"Art is the tree of life. Science is the tree of death.",source:"William Blake",citation:"-"},
  {quote:"Scientists have become the bearers of the torch of discovery in our quest for knowledge",source:"Stephen Hawking",citation:"-",year: 1999,tag:"science"},
  {quote:"I'll be back.",source:"The Terminator",citation:"movie",year: 1984,tag:"films"},

];



// functions

// ******** function getRandomQuote 
// receives an array and generates a random number used  as the  array index and then return the object in that spot
// 
function getRandomQuote(array){

  var arrayLenght = array;
  var ramdonNumber = Math.floor(Math.random() * (array.length)) 
  console.log(ramdonNumber);
  var selectedQuote = array[ramdonNumber];
  return(selectedQuote);
}
// ********* 

// ********* function printQuote 
// calls getRandomQuote function and display the selected quote 
//

function printQuote()
{

  var myQuote = getRandomQuote(quotes);
// create an array of colors to change background using the variable "counter" as index 
  var myColors = ['black','cyan','gray','red','pink' , 'magenta' , 'purple'];
  document.body.style.backgroundColor = myColors[counter];

  var html  = document.getElementById("quote-box");
  var message = "<p class= 'quote' > " + myQuote.quote + "</p>" + "<p class='source'>"+ myQuote.source ;





 // check here if do we have tag, citation or year if so i add it to the message
    if ("tag" in  myQuote ){
      html.innerHTML =  message + " / Category:  " + myQuote.tag ;
    }
    else if(myQuote.citation !== '-')
    {
      html.innerHTML =  message + "<span class='citation'>" + myQuote.citation + "</span>";

    }
    else if("year" in myQuote)
    {
      html.innerHTML =  message + " " + "<span class = 'year' >" +  myQuote.year + "</span>";
    }
    else
    {
      html.innerHTML =  message
    }
    
  
  
  
    // check if we reach the colors array final item in that case we start it from zero again.
  if(counter === (myColors.length - 1))
  {
    counter = 0;
  }else{
    counter++;
  }
}

// *********




// here if the button is no pressed, the program will call the printQuote function each 10 seconds
setInterval(function(){ printQuote(); }, 10000);

// event on loadQuote button
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

