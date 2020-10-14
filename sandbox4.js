const title = 'COVID -19';
const author = 'mother of environment';
const deads = 12005213000;

//concatination way
let result= 'The ' + title + ' create by ' + author + ' but deads' + deads + ' peoples';
console.log(result);

//template string way
let result1= `The world spread ${title} by ${author} , ${deads} number of peoples dead`;
console.log(result1);

//creating html templstes

let html= `
<h2> ${title} </h2>
<p> ${author}</p>
<span> This is number of deads ${deads} . </span>
`;
console.log(html);