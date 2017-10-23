
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
