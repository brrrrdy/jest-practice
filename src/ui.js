module.exports = { sum, capitalize, capitalizeFirst };

function sum(a, b) {
  return a + b;
}

function capitalize(str) {
  return str.toUpperCase();
}

function capitalizeFirst(str) {
  // if index position 0 of str = !Nan
  if (!str || !isNaN(str.charAt(0))) {
    return "please start your string with a character"; // return error message
  } else {
    return str.charAt(0).toUpperCase() + str.slice(1); // return str with index position 0.toUpperCase
  }
}
