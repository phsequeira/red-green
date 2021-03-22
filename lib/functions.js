
const getName = ({ name }) => name;

const copyAndPush = (array, pushedNumber) => newArray = [...array, pushedNumber];

const capitalizeAndFilter = (array) => array.filter(strings => strings.charAt(0) !== 'f').map(strings => strings.toUpperCase());

module.exports = { 
  getName,
  copyAndPush,
  capitalizeAndFilter,
  
};