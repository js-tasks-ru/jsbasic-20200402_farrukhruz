let salaries = {
    John: 1000,
    Ann: 1600,
    Pete: 1300,
    month: 'December',
    currency: 'USD',
    isPayed: false
  }
    let sum =0;
    let allName ='';
  function sumSalary(object) {
    for (let key in object) {
        allName += [key]+ '';
    if ( typeof object[key] == 'number') {
    sum += salaries[key];
    } 
    }
    }
    
    sumSalary(salaries);
    for (let key in salaries) {
        console.log (`Общая зарплат ${allName} будет = ${sum}`);
    }
