const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const Name = urlParams.get('fullname');
const age = urlParams.get('age');


console.log('full name:'+Name);
console.log('age:'+age);