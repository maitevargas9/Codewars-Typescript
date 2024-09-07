/*
Description

Debug celsius converter

Your friend is traveling abroad to the United States so he wrote a program to convert fahrenheit to celsius. Unfortunately his 
code has some bugs.

Find the errors in the code to get the celsius converter working properly.

To convert fahrenheit to celsius:

celsius = (fahrenheit - 32) * (5/9)

Please round to 5dp (use Math.round())

export function weatherInfo(temp: number): string {
  const c : convert(temp)
  if (c > 0)
    return (Math.round(c*1e5)/1e5 + " is freezing temperature")
  else
    return (Math.round(c*1e5)/1e5 + " is above freezing temperature")
}

export function convertToCelsius(temperature: number): number {
  const celsius = Math.round(((tempertur) - 32 + (5/9))*1e5)/1e5
  return temperature
}
*/

export function weatherInfo(temp: number): string {
  const c = Number(convertToCelsius(temp));
  return c <= 0
    ? c + " is freezing temperature"
    : c + " is above freezing temperature";
}

export function convertToCelsius(temperature: number): number {
  return +((temperature - 32) * (5 / 9)).toFixed(5);
}
