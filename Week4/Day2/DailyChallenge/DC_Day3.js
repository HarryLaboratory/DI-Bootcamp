const planets = [
    {
        name: "Mercury",
        color: "gray",
        moons: []
    },
    {
        name: "Venus",
        color: "yellow",
        moons: []
    },
    {
        name: "Earth",
        color: "blue",
        moons: ["Moon"]
    },
    {
        name: "Mars",
        color: "red",
        moons: ["Phobos", "Deimos"]
    },
    {
        name: "Jupiter",
        color: "orange",
        moons: ["Io", "Europa", "Ganymede", "Callisto"]
    },
    {
        name: "Saturn",
        color: "goldenrod",
        moons: ["Titan", "Rhea", "Iapetus", "Dione"]
    },
    {
        name: "Uranus",
        color: "lightblue",
        moons: ["Miranda", "Ariel", "Umbriel"]
    },
    {
        name: "Neptune",
        color: "blue",
        moons: ["Triton", "Nereid"]
    }
];

const section = document.querySelector('.listPlanets');

planets.forEach((planet, planetIndex) => {
    const planetDiv = document.createElement('div');
    planetDiv.classList.add('planet');  
    planetDiv.style.backgroundColor = planet.color; 
    planetDiv.textContent = planet.name;

    section.appendChild(planetDiv);

    planet.moons.forEach((moon, moonIndex) => {
        const moonDiv = document.createElement('div');
        moonDiv.classList.add('moon'); 
        moonDiv.textContent = moon; 

        const angle = 360 / planet.moons.length * moonIndex; 
        moonDiv.style.transform = `rotate(${angle}deg) translate(60px) rotate(-${angle}deg)`; 

        planetDiv.appendChild(moonDiv);
    });
});
