const container = document.querySelector('.player');


const renderPlayers = async () => {
    let uri = 'http://localhost:8000/player';

    const res = await fetch(uri);
    const players = await res.json();
    
    let template = '';
    players.forEach(player => {
        template += `
           <div class="player">
            <h2>${player.username}</h2>
            <p><small>${player.password}</small></p>
            <p>${player.body.slice(0,200)}</p>
            <a href="/details.html" </a>
           </div>
        
        `

    })
    container.innerHTML = template;


}



window.addEventListener('PlayerContentLoaded', () => renderPlayers());