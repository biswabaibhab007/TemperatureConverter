let celsius = document.querySelector('#celsius');
let fahewnheit = document.querySelector('#fahrenheit');
let kelvin = document.querySelector('#kelvin');

// 
celsius.oninput = () => {
  // converting celsius to fahrenheit
  let fah = (parseFloat(celsius.value)*9)/5+32;
  fahrenheit.value = parseFloat(fah.toFixed(2));
  // converting celsius to kelvin
  let kel = (parseFloat(celsius.value)+273.15);
  kelvin.value = parseFloat(kel.toFixed(2));
}

fahrenheit.oninput = () => {
  // converting fahrenheit to celsius
  let cel = ((parseFloat(fahrenheit.value)-32)*5)/9;
  celsius.value = parseFloat(cel.toFixed(2));
  // converting fahrenheit to kelvin
  let kel = (parseFloat(fahrenheit.value)-32)*5/9+273.15;
  kelvin.value = parseFloat(kel.toFixed(2));
}

kelvin.oninput = () => {
  // converting kelvin to fahrenheit
  let fah =(parseFloat(kelvin.value)-273.15)*9/5+32;
  fahrenheit.value = parseFloat(fah.toFixed(2));
  // converting kelvin to celsius
  let cel = (parseFloat(kelvin.value)-273.15);
  celsius.value = parseFloat(cel.toFixed(2));
}