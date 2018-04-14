//mergeSorting

var arr1 = [3,12,4,2,8,6,5,1,00,99];
//arr1 = prompt ("Введите элементы массива через запятую:").split(",");


function mergeSort(arr){
   var length = arr.length;
   if(length <2)
      return arr;
   var mid = Math.floor(length/2),
       left = arr.slice(0,mid),
       right =arr.slice(mid);
   //send left and right to the mergeSort to broke it down into pieces
   //then merge those
   return merge(mergeSort(left),mergeSort(right));
}
        

function merge(left, right){
  var result = [],
      lLength = left.length,
      rLength = right.length,
      l = 0,
      r = 0;
  while(l < lLength && r < rLength){
     if(left[l] < right[r]){
       result.push(left[l++]);
     }
     else{
       result.push(right[r++]);
    }
  }  
  //remaining part needs to be addred to the result
  return result.concat(left.slice(l)).concat(right.slice(r));
}
    
console.log(mergeSort(arr1));
