function distanceFromHqInBlocks(pickupLocation) {
    if (pickupLocation > 42) {
      return pickupLocation - 42;
    } else {
      return 42 - pickupLocation;
    }
  }
  
  function distanceFromHqInFeet(pickupLocation) {
    return distanceFromHqInBlocks(pickupLocation) * 264;
  }
  
  function distanceTravelledInFeet(start, endblock) {
    //returns the number of feet travelled
    const blocksTravelled = Math.abs(endblock - start);
    return blocksTravelled * 264;
  }
  
  function calculatesFarePrice(start, endblock) {
    const distance = distanceTravelledInFeet(start, endblock);
    let fare;
  //returns price of fare calculated
    if (distance <= 400) {
      fare = 0;
    } else if (distance > 400 && distance <= 2000) {
      fare = (distance - 400) * 0.02;
    } else if (distance > 2000 && distance < 2500) {
      fare = 25;
    } else {
      return 'cannot travel that far';
    }
  
    return fare;
  }
  