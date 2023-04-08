var header = document.querySelector('header');
var section = document.querySelector('section');
const MY_JSON_FILE = [{
    "hello": "world"
  }];
  
  let json = JSON.stringify(MY_JSON_FILE);
  
  const blob = new Blob([json], {type:"application/json"});
  
  const fr = new FileReader();
  
  fr.addEventListener("load", e => {
    console.log(e.target.result, JSON.parse(fr.result))
  });
  
  fr.readAsText(blob);
  
  console.log(fr["hello"]);