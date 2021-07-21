let raceNumber = Math.floor(Math.random() * 1000);

let earlyBird = true ;

let runnerAge = 25 ;

if (runnerAge >= 18 && earlyBird){
  console.log('yes');
  raceNumber+=1000;
  console.log(raceNumber);
}

if (runnerAge > 18 && earlyBird){
  console.log('Bib Number: '+raceNumber+', will race at 9:30 am.');
}else if(runnerAge >18 && !earlyBird){
  console.log('Bib Number: '+raceNumber+', will race at 11:00 am.');
}else if(runnerAge<18){
  console.log('Bib Number: '+raceNumber+', will race at 12:30 pm.');

}else{
  console.log('see the registration desk for more information...')
}