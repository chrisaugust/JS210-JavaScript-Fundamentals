const totalPages = 364;
let currentPage = 1;
let energy = 100;
let cupsOfCoffee = 0;

function read() {
  while (energy > 0 && currentPage < totalPages) {
    currentPage += 1;
    energy -= (5 + currentPage * 0.1);
  }

  console.log(`Made it to page ${String(currentPage)}.`);
  console.log(`Cups of coffee consumed: ${cupsOfCoffee}`);

   // Drink a cup of coffee.
   cupsOfCoffee += 1;
   energy = 100;
   
 
   // Continue reading.
   if (currentPage < totalPages) {
     read();
   } else {
     console.log('Done!');
   }
}

read();
