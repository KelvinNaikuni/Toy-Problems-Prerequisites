function calculateSpeed(speed){
  let speedLimit = 70 
  let demeritPoints = 0  //container holding demerit points which is empty hence the zero

  // Check if the car's speed is less than the speed limit.
  if (speed < speedLimit) {
console.log("OK")  //It prints OK when the speed is not above the limit
  }
  else {
     // Calculate demerit points if speed exceeds the limit.
    demeritPoints = Math.floor((speed - speedLimit) /5) 

console.log(`Points: ${demeritPoints}`) // Print the number of demerit points.
    
  if(demeritPoints > 12) {
console.log("LicenseSuspended") // Print "License suspended" if too many points, greater than the 12.
  }
 } 
}  

