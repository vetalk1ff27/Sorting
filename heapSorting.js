//heapSorting

var arr1 = ["bus","array","apple","bug","copy","core"];
//arr1 = prompt ("Введите элементы массива через запятую:").split(",");

function heapSort(arr){
  var length = arr.length,
      end = length-1;

  heapify(arr, length);
  
  while(end > 0){
   swap(arr, end--, 0);
   siftDown(arr, 0, end);
  }
  return arr;
}
        

function heapify(arr, length){
   // break the array into root + two sides, to create tree (heap)
   var mid = Math.floor((length-2)/2);
   while(mid >= 0){
    siftDown(arr, mid--, length-1);    
  }
}
        

function siftDown(arr, start, end){
   var root = start,
       child = root*2 + 1,
       toSwap = root;
   while(child <= end){
      if(arr[toSwap] < arr[child]){
        swap(arr, toSwap, child);
      }
      if(child+1 <= end && arr[toSwap] < arr[child+1]){
        swap(arr, toSwap, child+1)
      }
      if(toSwap != root){
         swap(arr, root, toSwap);
         root = toSwap;
      }
      else{
         return; 
      }
      toSwap = root;
      child = root*2+1
  }
}
        

function swap(arr, i, j){
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
console.log(heapSort(arr1));
