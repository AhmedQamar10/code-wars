/* eslint-disable-next-line */
function isNice(arr){
    if(arr.length === 0) {
      return false;
    }
     let isNice = true;
    for(i in arr) {
      if(arr.includes(arr[i] + 1) || arr.includes(arr[i] - 1)) {
      } else {
        isNice = false;
      }
    }
    return isNice;
  }