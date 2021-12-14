const id = new URLSearchParams(window.location.search).get('id');
const container = document.querySelector('.details');
const renderDetails = async () => {
  const res = await fetch('http://localhost:8000/player/' + id);
  const player = await res.json();
  console.log(player);

  const template = `
  <h1>${player.username}</h1>
  <p>${player.details}</p>
  `

  container.innerHTML = template;
}


window.addEventListener('DOMContentLoaded', () => renderDetails());