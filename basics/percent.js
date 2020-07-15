let totalMarksA = 37
let maximumMarksA = 64

let percentageA = ( total, maximum ) => {
    let p = ( total / maximum ) * 100
    return p.toFixed( 1 )
}
console.log( percentageA( totalMarksA, maximumMarksA ) )


let totalMarksB = 29
let maximumMarksB = 180

let percentageB = ( total, maximum ) => Math.floor( ( total / maximum ) * 100 )

console.log( percentageB( totalMarksB, maximumMarksB ) )