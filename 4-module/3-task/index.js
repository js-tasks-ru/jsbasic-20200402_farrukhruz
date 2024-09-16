/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
  let personData = table.querySelectorAll('tbody tr');
   for (data of personData){
       let checkStatus = data.querySelector('td:nth-child(4)').dataset;
       switch (checkStatus.available){
           case('true'):
           data.classList.add('available');
           break;
           case('false'):
        data.classList.add('unavailable');
            break;
            default:
                data.setAttribute('hidden', '');
       }
       let checkGender = data.querySelector('td:nth-child(3)').textContent;
        switch (checkGender){
            case('f'):
        data.classList.add('famale');
            break;
            case('m'):
           data.classList.add('male');
           break;
       }
       if (data.querySelector('td:nth-child(2)').textContent<'18') {
           data.style.textDecoration = 'line-through';
    
        }
    }
    };