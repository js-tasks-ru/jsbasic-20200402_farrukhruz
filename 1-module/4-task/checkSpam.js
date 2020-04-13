function checkSpam(str){
    str = prompt ('Есть ли совпадение на СПАМ ?' ,'');
    str = str.toLowerCase();
    if (~str.indexOf('1xbet')||~str.indexOf('xxx')) { 
        return 'Есть совподение';
    } else {
        return 'Нет совподение';
    }      
}
document.write(checkSpam())