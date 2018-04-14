
var arr1 = prompt ("Введите элементы массива через запятую:").split(",");
/*var arr2 = arr1.map(function(item){
                    return parseFloat(item)
                    })
*/
function sorting(array)
{     
    var length = array.length;
    for (var i = 0; i < length-1; i++)
     { 
       for (var j = 0; j < length-1-i; j++)
       { 
          if (array[j+1] < array[j])
           { var max = array[j+1]; 
            array[j+1] = array[j];
            array[j] = max;
           }
        }
     }                     
return array;
}
console.log(sorting(arr1));
