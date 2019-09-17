


// variables


var quotes = [

  {quote:"They may take our lives, but they'll never take our freedom!",source:"Braveheart",citation:"movie",year: 1995},
  {quote:"If you let my daughter go now, that'll be the end of it. I will not look for you, I will not pursue you. But if you don't, I will look for you, I will find you, and I will kill you.",source:"Taken",citation:"movie",year: 2008},
  {quote:"You complete me",source:"Jerry Maguire",citation:"movie",year: 1996},
  {quote:"You make me want to be a better man",source:"As Good as it gets",citation:"movie",year: 1997},
  {quote:"Never memorize something that you can look up",source:"Albert Einstein",citation:"-",year: 1944},
  {quote:"I'm just one stomach flu away from my goal weight.",source:"Devils wears Prada",citation:"movie",year: 2006},
  {quote:"Art is the tree of life. Science is the tree of death.",source:"William Blake",citation:"-",year: 1890},
  {quote:"Scientists have become the bearers of the torch of discovery in our quest for knowledge",source:"Stephen Hawking",citation:"-",year: 1999},
  {quote:"I'll be back.",source:"The Terminator",citation:"movie",year: 1984},

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
  var myColors = ['black','cyan','gray','red','pink' , 'magenta' , 'purple'];
  var randomColor = Math.floor(Math.random() * (myColors.length)) 
  document.body.style.backgroundColor = myColors[randomColor];
  var html  = document.getElementById("quote-box");
 
  if(myQuote.citation === '-'){
        html.innerHTML =  "<p class= 'quote' > " + myQuote.quote + "</p>" + "<p class='source'>"+ myQuote.source + "</span>" + "<span class='year'>" + myQuote.year + "</span>";
  }
  else {
        html.innerHTML =  "<p class= 'quote' > " + myQuote.quote + "</p>" + "<p class='source'>"+ myQuote.source + "<span class='citation'>" + myQuote.citation + "</span>" + "<span class='year'>" + myQuote.year + "</span>";
  }
 /* setInterval(function(){ var myQuote = getRandomQuote(quotes);
    var myColors = ['black','cyan','gray','red'];
    var randomColor = Math.floor(Math.random() * (myColors.length)) 
    document.body.style.backgroundColor = myColors[randomColor];
    var html  = document.getElementById("quote-box");
   
    html.innerHTML =  "<p class= 'quote' > " + myQuote.quote + "</p>" + "<p class='source'>"+ myQuote.source + "<span class='citation'>" + myQuote.citation + "</span>" + "<span class='year'>" + myQuote.year + "</span>";
    
  
  
  }, 10000);*/
}

// *********



/***
  Create the `printQuote` function to: 

 
   - Use the HTML template in the instructions or the markup in the index.html file, AND 
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string. 
***/





document.getElementById('loadQuote').addEventListener("click", printQuote, false);

