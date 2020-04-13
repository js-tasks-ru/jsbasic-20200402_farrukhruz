'use strict';

/*
function truncate(str, maxlength) {
str = prompt ('Привет всем' ,'');
       
if (str.length > maxlength){
str.slice(0, maxlength - 1) + '…'
  } 
  return  str;
  }
  */
 function truncate(str, maxlength) {
    str = prompt ('Привет всем' ,'');
    return (str.length > maxlength) ?
      str.slice(0, maxlength - 1) + '…' : str;
  }
  document.write(truncate());
  