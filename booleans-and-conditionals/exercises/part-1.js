// Declare and initialize the variables for exercise 1 here:
let engineIndicatorLight= "red blinking"
let spaceSuitsOn= true
let shuttleCabinReady= true
let crewStatus= spaceSuitsOn && shuttleCabinReady
let computerStatusCode= 200
let shuttleSpeed= 15000

// BEFORE running the code, predict what will be printed to the console by the following statements:

if (engineIndicatorLight === "green") {
   console.log("engines have started");
} else if (engineIndicatorLight === "green blinking") {
   console.log("engines are preparing to start");
} else {
   console.log("Engines are off");
}
// The code will print out "Engines are off"
//Because engineIndicatorLight is set to "red blinking"

if(crewStatus === true){
   console.log("Crew Ready")
} else {
   console.log("Crew Not Ready")
}
if (computerStatusCode===200){
   console.log("Please stand by. Computer is rebooting")   
} else if (computerStatusCode===400) {
   console.log("Success! Computer online.")
} else {
   console.log("ALERT: Computer offline!")
}
if (shuttleSpeed > 17500) {
   console.log( "ALERT: Escape velocity reached!")
} else if (shuttleSpeed < 8000) {
   console.log( "ALERT: Cannot maintain orbit!")
} else {
   console.log("Stable speed")
}
let fuelLevel = 18000
let engineTemperature = 2500
engineIndicatorLight = "Not red blinking"
let commandOverride = true || false 
if (fuelLevel < 1000 || engineTemperature > 3500 || engineIndicatorLight==="red blinking"){
   console.log("ENGINE FAILURE IMMINENT!")
} else if (fuelLevel <= 5000 || engineTemperature > 2500){
   console.log ("Check fuel level. Engines running hot.")
} else if (fuelLevel > 20000 && engineTemperature <= 2500){
   console.log ("Full tank. Engines good.")
} else if (fuelLevel > 10000 && engineTemperature <= 2500){
   console.log("Fuel level above 50%. Engines good")
} else if (fuelLevel > 5000 && engineTemperature <= 2500){
   console.log("Fuel level above 25%. Engines good.")
} else {
   console.log ("Fuel and engine status pending...")
}
if (fuelLevel > 20000 && engineIndicatorLight === "Not red blinking" || commandOverride === true){
   console.log ("Cleared to launch")
} else {
   console.log("Launch scrubbed!")
}