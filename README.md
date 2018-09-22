# What for
Convert `array like object` to array, for example to unlock reduce(), map(), filter()...

Fast and very straight forward.
Working with everything what have a `.length`:

## Benchmark

[https://jsperf.com/nodelist-to-array/27]

## Code and usage

    function nodeListToArray(nodeList){
      var i = nodeList.length
      var arr = new Array(i)
      while(i--){ arr[i] = nodeList[i] }
      return arr
    }

    // example of usage:
    nodeListToArray(document.querySelectorAll('div')).map(...)

## Prototype
On top of that fancy addition,
but working only with NodeList's:

    NodeList.prototype.toArray = function(){
      return nodeListToArray(this)
    }
    
    // example of usage:
    document.querySelectorAll('div').toArray().filter(...)

## Instalation
    npm install nodelist-to-array

