// Declare and assign the variables below
let spaceShuttle= "Determination"
let shuttleSpeedMph= 17500
let distanceMars= 225000000
let distanceMoon= 384400
let milesPerKm= 0.621
// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof spaceShuttle)
console.log(typeof shuttleSpeedMph)
console.log(typeof distanceMars)
console.log(typeof distanceMoon)
console.log(typeof milesPerKm)
// Calculate a space mission below
let milesToMars= distanceMars * milesPerKm
let hoursToMars= milesToMars / shuttleSpeedMph
let daysToMars= hoursToMars / 24
// Print the results of the space mission calculations below
console.log(spaceShuttle ,"will take", daysToMars ,"days to reach Mars.")
// Calculate a trip to the moon below
let milesToMoon= distanceMoon * milesPerKm
let hoursToMoon= milesToMoon / shuttleSpeedMph
let daysToMoon= hoursToMoon / 24
// Print the results of the trip to the moon below
console.log(spaceShuttle, "will take", daysToMoon , "days to reach the Moon")