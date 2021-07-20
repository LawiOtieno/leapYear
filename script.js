function leapYear(year){
    if (year%400===0) alert('The year: ' +year+ ' is leap year');
    else if (year%100===0) alert('The year: ' +year+ ' is NOT leap year');
    else if (year%4===0) alert('The year: ' +year+ ' is leap year')
    else alert('Please enter correct year')
  }
  leapYear(parseInt(prompt('Enter year')))