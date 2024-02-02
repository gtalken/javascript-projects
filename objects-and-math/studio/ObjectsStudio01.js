let candidateA = {
  'name':'Gordon Shumway',
  'species':'alf',
  'mass':90,
  'o2Used':function(hrs){return 0.035*hrs},
  'astronautID':414
};
let candidateB = {
  'name':'Lassie',
  'species':'dog',
  'mass':19.1,
  'o2Used':function(hrs){return 0.030*hrs},
  'astronautID':503
};
let candidateC = {
  'name':'Jonsey',
  'species':'cat',
  'mass':3.6,
  'o2Used':function(hrs){return 0.022*hrs},
  'astronautID':796
};
let candidateD = {
  'name':'Paddington',
  'species':'bear',
  'mass':31.8,
  'o2Used':function(hrs){return 0.047*hrs},
  'astronautID':291
};
let candidateE = {
  'name':'Pete',
  'species':'tortoise',
  'mass':417,
  'o2Used':function(hrs){return 0.010*hrs},
  'astronautID':599
};
let candidateF = {
  'name':'Hugs',
  'species':'ball python',
  'mass':2.3,
  'o2Used':function(hrs){return 0.018*hrs},
  'astronautID':890
};

let idNumbers = [291, 414, 503, 599, 796, 890];
let animals = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];
// Code your selectRandomEntry function here:
function selectRandomEntry(array){
  let randomIndex= Math.floor(Math.random()*array.length);
  let randomEntry= array.splice(randomIndex, 1)[0];
  return randomEntry;

}
function getRandomEntries(array, count){
  const selections=[];

  count=Math.min(count, array.length);

  for (let i=0; i<count; i++){
    let randomEntry = selectRandomEntry(array)
    selections.push(randomEntry);
  }
  return selections
}

let randomIDs = getRandomEntries(idNumbers.slice(),3);
console.log("Random ID numbers:",randomIDs)
// Code your buildCrewArray function here:
function buildCrewArray(selections, animals){
  let crew= [];
  for (let i=0; i<selections.length;i++){
    for( let j=0; j<animals.length;j++){
      if(selections[i]===animals[j].astronautID){
        crew.push(animals[j])
    }
  }
 
  }
  return crew;
}
let crew = buildCrewArray(randomIDs, animals);

let selectedAstronauts= crew.map(function(animal){
  return animal.name;
}).join(', ');

console.log(selectedAstronauts + " are going to space!");
// Here are the candidates and the 'animals' array:




// Code your template literal and console.log statements:
