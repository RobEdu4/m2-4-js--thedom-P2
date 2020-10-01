const FROGS = 3;

// ex1

for (let i = 1; i <= FROGS; i++) {
  const laneLi = document.createElement("li");
  const laneNum = document.createElement("span");

  laneLi.id = `lane-${i}`;
  laneNum.innerText = i;

  laneLi.appendChild(laneNum);
  track.appendChild(laneLi);
}

// ex2

let racers = [];

for (let j = 0; j < FROGS; j++) {
  racers.push(frogStable[j]);
}

// ex3

racers.forEach((racer, id) => {
  const newFrog = document.createElement("span");
  //  newFrog.innerText = `${racer.name} (${racer.number})`;
  newFrog.innerText = `${racer.number}`;
  newFrog.style.background = racer.color;
  document.getElementById(`lane-${id + 1}`).appendChild(newFrog);

  //ex4

  newFrog.classList.add("frog");
  const frogName = document.createElement("span");
  frogName.classList.add("frog-name");
  frogName.innerText = racer.name;
  document.getElementById(`lane-${id + 1}`).appendChild(frogName);

  //ex5

  racers[id].proress = 0;
  racers[id].laneLi = `lane-${id + 1}`;
});

// ex6
/*
function racingFrog(racer) {
  const trackWidth = track.offsetWidth;

  const hop = setInterval(function () {
    const hopLength = Math.floor(((Math.random() * 100) / trackWidth) * 100);
    racer.progress += hopLength;

    console.log(racer.name, " is at ", racer.progress);

    if (racer.progress >= 100) {
      racer.progress = 100;
      console.log(racer.name, " has finished!");
      clearInterval(hop);
    }

    document.querySelector(
      `#${racer.laneLi} .frog`
    ).style.left = `${racer.progress}%`;
  }, Math.random() * 1000);
}

racers.forEach((racer) => racingFrog(racer));

console.log(racers);
*/
