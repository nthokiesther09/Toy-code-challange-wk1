// Defined function speedDetector();
function speedDetector(speed){
    let demeritPoints = (speed - 70) / 5;
    // For every 5km/s above speed limit(70 ),it should print out the total number of the demerit points.
    if(speed <= 70){
        console.log("ok");
    } else if (demeritPoints > 12) {
        console.log("License suspended");
    } else {
        console.log(`Demerits points: ${demeritPoints}`);
    }
}
speedDetector(150);