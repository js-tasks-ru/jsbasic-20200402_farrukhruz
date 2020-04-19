function ucFirst(str){
  str = prompt ('Какую слово изменит букву ','');
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);    
}
document.write(ucFirst());