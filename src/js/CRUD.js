const BASE_URL = 'http://localhost:3000';

// * GET
function getHeroes() {
    return fetch(`${BASE_URL}/heroes/`).then(res => res.json());
}

function getHeroByID(id) {
    return fetch(`${BASE_URL}/heroes/${id}`).then(res => res.json());
}

getHeroes().catch(error => console.log(error))

//* POST

const newHero = {
    "name": "Catwoomen FOR DELETE",
    "power": 40,
    "skills": [
        "speed",
        "9 lives"
    ]
};

function addHero(heroObject) {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(heroObject)
    };

    return fetch(`${BASE_URL}/heroes/`, options).then(res => res.json());
}

// addHero(newHero).catch(error => console.log(error));

//* PUT/PATCH

function changeHeroById (id, changes) {
    const options = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(changes)
    };

    return fetch(`${BASE_URL}/heroes/${id}`, options).then(res => res.json());
}

// changeHeroById(1, {"power": 90}).catch(error => console.log(error));

//* DELETE

function removeHeroById(id) {
    const url = `${BASE_URL}/heroes/${id}`;
    const options = {
        method: 'DELETE'
    };
  return fetch(url, options).then(res => res.json())  
}

// removeHeroById(7).catch(error => console.log(error))