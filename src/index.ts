enum Temperatures {
  VeryCold = 'Muito Frio',
  Cold = 'Frio',
  Hot = 'Quente',
  TooHot = 'Muito Quente'
}

function start(temperature: number) {
  const temperatures: Temperatures[] = [];

  if (temperature >= 23) {
    temperatures.push(Temperatures.TooHot);
  }

  if (temperature >= 18 && temperature < 32) {
    temperatures.push(Temperatures.Hot);
  }

  if (temperature >= 12 && temperature < 23) {
    temperatures.push(Temperatures.Cold);
  }

  if (temperature < 18) {
    temperatures.push(Temperatures.VeryCold);
  }

  return temperatures;
}

const temperatures = start(10);

console.log(temperatures);
