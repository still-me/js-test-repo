import '../styles.css';

const vehicles = [
  '🚲 ',
  '🚔',
  '🏍',
  '🛩',
  '🛸',
];

const refs = {
    startButtonRef: document.querySelector('.js-race-btn'),
    winnerField: document.querySelector('.vehicle-winner'),
    progressField: document.querySelector('.progress-js'),
    tableBody: document.querySelector('.js-results-table > tbody'),
}

refs.startButtonRef.addEventListener('click', onStart);

let raceCounter = 0;

function onStart() {
    raceCounter += 1;
    const promises = vehicles.map(run); // or vehicles.map(vehicle => run(vehicle))
    updateWinnerField('What is the most faster vehicle 🤨')
    updateProgressField('🚀 Start');
    determineWinner(promises);
    waitForAll(promises);
}

function run(vehicle) {
    return new Promise(resolve => {
        const time = getRandomTime(1000, 3000);
        
        setTimeout(() => {
            resolve({ vehicle, time });
        } ,time)
    })   
};

function getRandomTime(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function updateWinnerField(message) {
    refs.winnerField.textContent = message
}

function updateProgressField(message) {
    refs.progressField.textContent = message
}

function determineWinner(vehiclesPromises) {
     Promise.race(vehiclesPromises).then(({ vehicle, time }) => {
        
        updateWinnerField(`The most faster vehicle is ${vehicle} with speed ${time - 1000} km`)
        updateTableWinner({ vehicle, time, raceCounter })

    });
}

function waitForAll(vehiclesPromises){
     Promise.all(vehiclesPromises).then(x => {
        updateProgressField('🏁 Finish');
    console.log(x);
})
}

function updateTableWinner({ vehicle, time, raceCounter }) {
    const tr = `<tr><td>${raceCounter}</td><td>${vehicle}</td><td>${time -1000}</td></tr>`;
    refs.tableBody.insertAdjacentHTML('beforeend', tr)
}

