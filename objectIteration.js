const cities = [
  {
    id: 301,
    name: "New York",
    population: 8398748,
    country: "United States",
  },
  {
    id: 302,
    name: "Paris",
    population: 2140526,
    country: "France",
  },
  {
    id: 303,
    name: "Tokyo",
    population: 13960000,
    country: "Japan",
  },
  {
    id: 304,
    name: "Sydney",
    population: 5230330,
    country: "Australia",
  },
  {
    id: 305,
    name: "Cairo",
    population: 9121515,
    country: "Egypt",
  },
];

function getCityPopulation(city) {
  return city.population;
}
function isPopulationAboveThreshold(city, threshold) {
  if(city.population > threshold) {
    return true;
  } return false;
}

function addCity(cities, id, name, population, country) {
  const newCity = {id, name, population, country, };
  cities.push(newCity);
  return cities;
}
function countCitiesInCountry(cities, country) {
  return cities.filter(c => c.country == country).length;
}
module.exports = {
  getCityPopulation,
  isPopulationAboveThreshold,
  addCity,
  countCitiesInCountry,
};
