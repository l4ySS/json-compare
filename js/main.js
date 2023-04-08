var res;
var obj1;
var obj2;
var diffKeys = [];
var diffValues= new Map();
function isDeepEqual(object1, object2){
    const objKeys1 = Object.keys(object1);
    const objKeys2 = Object.keys(object2);
    let isEqual = true;

    if (objKeys1.length !== objKeys2.length) return false;
    
    for (var key of objKeys1) {
      const value1 = object1[key];
      const value2 = object2[key];
  
      const isObjects = isObject(value1) && isObject(value2);
  
      if ((isObjects && !isDeepEqual(value1, value2))
      ) {
        diffKeys.push(key);
        isEqual=false;
      }
      else if ((!isObjects && value1 !== value2)){
        diffKeys.push(key); ;
        diffValues.set(key, value1);
     
        isEqual=false;
      }
    }
    return isEqual;
  };
  
function isObject(object){
    return object != null && typeof object === "object";
  };

function mapToObj(map){
    let obj = {}
    for (let [k,v] of map)
      obj[k] = v
    return obj
  }

function start(){
    console.log(isDeepEqual(obj1, obj2));
    console.log(diffKeys);
    
    let str = JSON.stringify(obj1, null, " "); 
    let pre = document.getElementById('result1')
    pre.innerText = str;

    str = JSON.stringify(obj2, null, " "); 
    pre = document.getElementById('result2')
    pre.innerText = str;

    pre = document.getElementById('result3')
    pre.innerText = JSON.stringify(diffKeys);

    pre = document.getElementById('result4')
    pre.innerText = JSON.stringify(mapToObj(diffValues), null, " ");
    console.log(mapToObj(diffValues));
}

function inputJSON() {
    let file1 = document.getElementById('file1').files[0];
    let file2 = document.getElementById('file2').files[0];

    var reader1 = new FileReader();
    var reader2 = new FileReader();

    reader1.onload = function(event) {
        res = event.target.result;
        obj1 = JSON.parse(res);
    };
    reader1.readAsText(file1);
    
    reader2.onload = function(event) {
        res = event.target.result;
        obj2 = JSON.parse(res);
    };
    reader2.readAsText(file2);
}