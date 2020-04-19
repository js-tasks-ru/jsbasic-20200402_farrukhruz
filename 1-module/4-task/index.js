function checkSpam(str){
  str = prompt ('Есть ли совпадение на СПАМ ?' ,'');
  str = str.toLowerCase();
  if (str.includes('1xbet')||str.includes('xxx')) { 
      return 'Есть совподение';
  } else {
      return 'Нет совподение';
  }      
}
document.write(checkSpam())