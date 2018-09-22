// jshint esversion: 6
// https://github.com/und3rdg/nodelist-to-array
// -------------------------------------------------------
// convert querySelectorAll to Array (supper cheap)
export default function nodeToArr(nodeList){
  "use strict"
  var i = nodeList.length
  var arr = new Array(i)
  while(i--){ arr[i] = nodeList[i] }
  return arr
}

export function setPrototype(){
  "use strict"
  NodeList.prototype.toArray = function(){
    return nodeToArr(this)
  }
}
