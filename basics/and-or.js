let guestOneVegan = true
let guestTwoVegan = false

if ( guestOneVegan && guestTwoVegan ){
    console.log( 'Only vegan dishes are available' )
} else if ( guestOneVegan || guestTwoVegan ){
    console.log( 'Vegan and non-vegan dishes available' )
} else {
    console.log( 'Only non-vegan options available' )
}