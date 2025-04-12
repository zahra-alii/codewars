// Solution:
function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
    if(dolphin){
      sharkSpeed = sharkSpeed / 2;
    }
  const youTime = pontoonDistance / youSpeed
  const sharkTime = sharkDistance / sharkSpeed;
  if(youTime < sharkTime){
    return 'Alive!';
  }else{
    return 'Shark Bait!'
  }
}