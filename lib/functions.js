const fetch = require('node-fetch'); 

const getName = ({ name }) => name;

const copyAndPush = (array, pushedNumber) => newArray = [...array, pushedNumber];

const capitalizeAndFilter = (array) => array.filter(strings => strings.charAt(0) !== 'f').map(strings => strings.toUpperCase());

const fetchQuote = async() => {
  const response = await fetch('https://futuramaapi.herokuapp.com/api/quotes/1');
  const [{ image, character: name, quote: text }] = await response.json();
  return {
    image,
    name,
    text
  };
};

module.exports = { 
  getName,
  copyAndPush,
  capitalizeAndFilter,
  fetchQuote
};