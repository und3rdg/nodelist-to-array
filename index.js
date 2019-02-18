// jshint esversion: 6
// https://github.com/und3rdg/nodelist-to-array
// -------------------------------------------------------
// convert querySelectorAll to Array (supper cheap)
function nodeToArr(nodeList){
    var i = nodeList.length
    var arr = new Array(i)
    while(i--){ arr[i] = nodeList[i] }
    return arr
}

function setPrototype(name){
    NodeList.prototype[name] = function(){
        return nodeToArr(this)
    }
}
module.exports = nodeToArr;
module.exports.default = nodeToArr;
module.exports.setPrototype = setPrototype;
