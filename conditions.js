// if else syntax
var age = 10;
if (age >= 65) {
   console.log('You get your income from your pension')
} else if (age < 65 && age >= 18) {
   console.log('Each month you get a salary')
} else if (age < 18) {
   console.log('You get an allowance')
} else {
   //this block will run if no condition matches
   console.log('The value of the age variable is not numerical')
}

// switch case syntax

var day = 'Sunday';
switch(day) {
   case 'Monday':
       console.log('Read a book');
       break;
   case 'Tuesday':
       console.log('Watch a movie');
       break;
   case 'Wednesday':
       console.log('Read a book');
       break;
   case 'Thursday':
       console.log('Play basketball');
       break;
   case 'Friday':
       console.log('Socialize');
       break;
   case 'Saturday':
       console.log('Chill');
       break;
   case 'Sunday':
       console.log('Have barbecue');
       break;
   default:
       console.log('There is no such day');
}

// for syntax

for (var i = 5; i > 0; i--) {
    console.log(i);
};
console.log('Countdown finished!');


// while syntax

var i = 5;
while (i > 0) {
    console.log(i);
    i = i - 1;
};


console.log('Counting completed!');

