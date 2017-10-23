// In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?

// At the end of the first year there will be: 
// 1000 + 1000 * 0.02 + 50 => 1070 inhabitants

// At the end of the 2nd year there will be: 
// 1070 + 1070 * 0.02 + 50 => 1141 inhabitants (number of inhabitants is an integer)

// At the end of the 3rd year there will be:
// 1141 + 1141 * 0.02 + 50 => 1213

// It will need 3 entire years.

n nbYear(p0, percent, aug, p) {
  
  // set variables
  var initialPopulation = p0;
  var percentIncrease = percent;
  var inhabitantsIncoming = aug;
  var populationGoal = p;
  var years = 0;
  let population;
  
  // if the initialPopulation is less than the populationGoal, keep doing formula and adding an instance to the year variable to reflect the # of years the population is growing
  while (initialPopulation < populationGoal) {
    initialPopulation = initialPopulation + ((initialPopulation * percent)/100) + inhabitantsIncoming;
    years += 1;
  }
  
  console.log('this is the percent: ' + percentIncrease);
  console.log('this is the initial population: ' + initialPopulation);
  console.log(initialPopulation);
  console.log(years);
  
  return initialPopulation;
  return years;
  
};
