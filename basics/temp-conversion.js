let fahrenheit = 50

// calculate degrees F to degrees C
let fah2Cel = ( temp ) => ( temp - 32 ) * ( 5 / 9 )
console.log( fah2Cel(fahrenheit ) )

// calculate degrees F to degrees K
let fah2Kel = ( temp ) => ( temp + 459.67 ) * ( 5 / 9 )
console.log( fah2Kel( fahrenheit ).toFixed( 2 ) )