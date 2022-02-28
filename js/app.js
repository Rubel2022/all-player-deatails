const searchBTN=()=>{
  document.getElementById('player-details').innerHTML=""
 const inputValue=document.getElementById('input-box').value
  const url=`https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${inputValue}`
  fetch(url)
  .then(res=>res.json())
  .then(data=>displayPlayersDeatails(data.player))

const displayPlayersDeatails=(players)=>{
  // console.log(players)
  const parentPlayer=document.getElementById('player-details')
    //  console.log(players)
     for(const player of players){
      const div=document.createElement('div')
      console.log(player)
      div.classList.add('card')
      div.innerHTML=`
      <img src="${player.strThumb}" class="card-img-top" alt="...">
            <div class="card-body p-5">
              <h5 class="card-title">${player.strPlayer}</h5>
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
            </div>
            <div class="all-btn">
              <button class="btn btn-danger me-5">Delete</button>
              <button onclick="deatailsBtn('${player.idPlayer}')" class="btn btn-primary">Details</button>
            </div>
      `
      parentPlayer.appendChild(div)
     } 
}
const deatailsBtn=(info)=>{
  const url=`https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=${info}`
  fetch(url)
  .then(res=>res.json())
  .then(data=>deatailsDisplay(data.players[0]))
}
const deatailsDisplay=(deatails)=>{
  console.log(deatails)
  const deatailsContainer=document.getElementById('deatails-continer')
  const div=document.createElement('div')
  div.classList.add('player-div')
  div.innerHTML=`
  <div class="w-80 text-center mx-auto">
  <img class="w-50 " src="${deatails.strThumb}" alt="">
          <h3>Name:${deatails.strPlayer}</h3>
          <h4>Country:${deatails.strNationality}</h4>
          <h5>Age:${deatails.strNumber}</h5>
  </div>
          
      
  `
  deatailsContainer.appendChild(div)
}
}