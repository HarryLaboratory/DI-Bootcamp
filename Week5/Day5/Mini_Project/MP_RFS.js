const robots = [
    { id: 1, name: 'Leanne Graham', username: 'Bret', email: 'Sincere@april.biz', image: 'https://robohash.org/9LQ.png?set=set3&size=150x150' },
    { id: 2, name: 'Ervin Howell', username: 'Antonette', email: 'Shanna@melissa.tv', image: 'https://robohash.org/BQ8.png?set=set3&size=150x150' },
    { id: 3, name: 'Clementine Bauch', username: 'Samantha', email: 'Nathan@yesenia.net', image: 'https://robohash.org/4XM.png?set=set3&size=150x150' },
    { id: 4, name: 'Patricia Lebsack', username: 'Karianne', email: 'Julianne.OConner@kory.org', image: 'https://robohash.org/DCZ.png?set=set3&size=150x150' },
    { id: 5, name: 'Chelsey Dietrich', username: 'Kamren', email: 'Lucio_Hettinger@annie.ca', image: 'https://robohash.org/K2N.png?set=set3&size=150x150' },
    { id: 6, name: 'Mrs. Dennis Schulist', username: 'Leopoldo_Corkery', email: 'Karley_Dach@jasper.info', image: 'https://robohash.org/6?200x200' },
    { id: 7, name: 'Kurtis Weissnat', username: 'Elwyn.Skiles', email: 'Telly.Hoeger@billy.biz', image: 'https://robohash.org/7?200x200' },
    { id: 8, name: 'Nicholas Runolfsdottir V', username: 'Maxime_Nienow', email: 'Sherwood@rosamond.me', image: 'https://robohash.org/8?200x200' },
    { id: 9, name: 'Glenna Reichert', username: 'Delphine', email: 'Chaim_McDermott@dana.io', image: 'https://robohash.org/9?200x200' },
    { id: 10, name: 'Clementina DuBuque', username: 'Moriah.Stanton', email: 'Rey.Padberg@karina.biz', image: 'https://robohash.org/10?200x200' }
];

function displayRobots(robots) {
    const robotCardsContainer = document.getElementById('robotCards');
    robotCardsContainer.innerHTML = ''; 

    robots.forEach(robot => {
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
            <img src="${robot.image}" alt="${robot.name}">
            <h2>${robot.name}</h2>
            <p>${robot.email}</p>
            <a href="mailto:${robot.email}">Contact</a>
        `;

        robotCardsContainer.appendChild(card);
    });
}


displayRobots(robots);

document.getElementById('searchBox').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const filteredRobots = robots.filter(robot => robot.name.toLowerCase().includes(searchTerm));
    displayRobots(filteredRobots);
});

