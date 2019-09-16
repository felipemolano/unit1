// variables


var quotes = [

    {quote:"They may take our lives, but they'll never take our freedom!",source:"Braveheart",citation:"movie",year: 1995},
    {quote:"If you let my daughter go now, that'll be the end of it. I will not look for you, I will not pursue you. But if you don't, I will look for you, I will find you, and I will kill you.",source:"Taken",citation:"movie",year: 2008},
    {quote:"You complete me",source:"Jerry Maguire",citation:"movie",year: 1996},
    {quote:"You make me want to be a better man",source:"As Good as it gets",citation:"movie",year: 1997},
    {quote:"Chewie, we're home.",source:"Star Wars Episode VII: The Force Awakens",citation:"movie",year: 2015},
    {quote:"I'm just one stomach flu away from my goal weight.",source:"Devils wears Prada",citation:"movie",year: 2006},
    {quote:"I'll be back.",source:"The Terminator",citation:"movie",year: 1984},

];



// functions

function getRandomQuote(array){

    var arrayLenght = array;
    var ramdonNumber = Math.floor(Math.random() * (array.length)) 
    console.log(ramdonNumber);
    var selectedQuote = array[ramdonNumber];
    return(selectedQuote);
}

var myQuote = getRandomQuote(quotes);


console.log(myQuote);