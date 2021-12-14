const container = document.querySelector('.player');


const renderPlayers = async () => {
    let uri = 'http://localhost:8000/player/';

    const res = await fetch(uri);
    const players = await res.json();
    console.log(players);

    let template = '';
    players.forEach(player => {
        template += `
           <div class="player">
           <a href="src/html+js/details.html?id=${player.id}">
            <h2>${player.username}</h2></a>
            <p><small>ID: ${player.id}</small></p>
            <p><small>Deescriere: ${player.details}</small></p>
           </div>
        `

    })
    container.innerHTML = template;


}



window.addEventListener('DOMContentLoaded', () => renderPlayers());