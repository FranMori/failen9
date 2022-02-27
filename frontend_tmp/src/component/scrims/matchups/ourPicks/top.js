import axios from 'axios'
import { useState } from 'react'

const getTopScrim = 'http://localhost:5000/api/matchups/top/getAllScrim'
const getTopOtf1 = 'http://localhost:5000/api/matchups/top/getAllOtf1'
const getTopPrepaOtf2 = 'http://localhost:5000/api/matchups/top/getAllPrepaOtf2'

const getWinTopScrim = 'http://localhost:5000/api/matchups/top/getWinScrim'
const getWinTopOtf1 = 'http://localhost:5000/api/matchups/top/getWinOtf1'
const getWinTopPrepaOtf2 = 'http://localhost:5000/api/matchups/top/getWinPrepaOtf2'

function MatchupsOurTop()  {
  const [yasuoGames, setYasuoGames] = useState()
  const [camilleGames, setCamilleGames] = useState()
  const [renektonGames, setRenektonGames] = useState()
  const [ireliaGames, setIreliaGames] = useState()
  const [jaxGames, setJaxGames] = useState()
  const [gwenGames, setGwenGames] = useState()
  const [tryndamereGames, setTryndamereGames] = useState()
  const [fioraGames, setFioraGames] = useState()
  const [dariusGames, setDariusGames] = useState()
  const [wukongGames, setWukongGames] = useState()

  
  const [yasuoWins, setYasuoWins] = useState()
  const [camilleWins, setCamilleWins] = useState()
  const [renektonWins, setRenektonWins] = useState()
  const [ireliaWins, setIreliaWins] = useState()
  const [jaxWins, setJaxWins] = useState()
  const [gwenWins, setGwenWins] = useState()
  const [tryndamereWins, setTryndamereWins] = useState()
  const [fioraWins, setFioraWins] = useState()
  const [dariusWins, setDariusWins] = useState()
  const [wukongWins, setWukongWins] = useState()
  
  let topPicks = []
  let topWins = []
  
  // PICKS
  axios.get(getTopScrim).then(res => {
  for (let i = 0; i < res.data.length; i++) {
    topPicks.push(res.data[i].Pick1)
  }
  
  axios.get(getTopOtf1).then(res => {
    for(let i = 0; i < res.data.length; i++) {
      topPicks.push(res.data[i].Pick1)
    }
  
  axios.get(getTopPrepaOtf2).then(res => {
    for(let i = 0; i < res.data.length; i++) {
      topPicks.push(res.data[i].Pick1)
    }
  function getOccurrence(array, value) {
    return array.filter((v) => (v === value)).length;
  }
  setCamilleGames(getOccurrence(topPicks, 'Camille'))
  setRenektonGames(getOccurrence(topPicks, 'Renekton'))
  setIreliaGames(getOccurrence(topPicks, 'Irelia'))
  setJaxGames(getOccurrence(topPicks, 'Jax'))
  setGwenGames(getOccurrence(topPicks, 'Gwen'))
  setTryndamereGames(getOccurrence(topPicks, 'Tryndamere'))
  setWukongGames(getOccurrence(topPicks, 'Wukong'))
  setDariusGames(getOccurrence(topPicks, 'Darius'))
  setFioraGames(getOccurrence(topPicks, 'Fiora'))



  })
  })
  })
  
  // WINS
  axios.get(getWinTopScrim).then(res => {
    for (let i = 0; i < res.data.length; i++) {
      topWins.push(res.data[i].Pick1)
    }
    
    axios.get(getWinTopOtf1).then(res => {
      for(let i = 0; i < res.data.length; i++) {
        topWins.push(res.data[i].Pick1)
      }
    
    axios.get(getWinTopPrepaOtf2).then(res => {
      for(let i = 0; i < res.data.length; i++) {
        topWins.push(res.data[i].Pick1)
      }
    function getOccurrence(array, value) {
      return array.filter((v) => (v === value)).length;
    }
  setCamilleWins(getOccurrence(topWins, 'Camille'))
  setRenektonWins(getOccurrence(topWins, 'Renekton'))
  setIreliaWins(getOccurrence(topWins, 'Irelia'))
  setJaxWins(getOccurrence(topWins, 'Jax'))
  setGwenWins(getOccurrence(topWins, 'Gwen'))
  setTryndamereWins(getOccurrence(topWins, 'Tryndamere'))
  setWukongWins(getOccurrence(topWins, 'Wukong'))
  setDariusWins(getOccurrence(topWins, 'Darius'))
  setFioraWins(getOccurrence(topWins, 'Fiora'))

    })
    })
    })
    let camilleWR = ((camilleWins / camilleGames) * 100).toFixed(2)
    let renektonWR = ((renektonWins /renektonGames)*100).toFixed(2)
    let ireliaWR = ((ireliaWins / ireliaGames) * 100).toFixed(2)
    let jaxWR = ((jaxWins / jaxGames) * 100).toFixed(2)
    let gwenWR = ((gwenWins / gwenGames) * 100).toFixed(2)
    let tryndamereWR = ((tryndamereWins / tryndamereGames) * 100).toFixed(2)
    let dariusWR = ((dariusWins / dariusGames) * 100).toFixed(2)
    let fioraWR = ((fioraWins / fioraGames) * 100).toFixed(2)
    let wukongWR = ((wukongWins / wukongGames) * 100).toFixed(2)



    

  return (
  <div>
     <table>
       <h3 className='orange'>Top</h3>
       <tbody>
       <tr>
           <td className='white'>Jax</td>
           <td className='orange'>{jaxGames} games</td>
           <td className='white'>{jaxWR}%</td>
         </tr>
         <tr>
           <td className='white'>Camille</td>
           <td className='orange'>{camilleGames} games</td>
           <td className='white'>{camilleWR}%</td>
         </tr>
         <tr>
           <td className='white'>Renekton</td>
           <td className='orange'>{renektonGames} games</td>
           <td className='white'>{renektonWR}%</td>
         </tr>
         <tr>
           <td className='white'>Wukong</td>
           <td className='orange'>{wukongGames} games</td>
           <td className='white'>{wukongWR}%</td>
         </tr>
         <tr>
           <td className='white'>irelia</td>
           <td className='orange'>{ireliaGames} games</td>
           <td className='white'>{ireliaWR}%</td>
         </tr>
         <tr>
           <td className='white'>Fiora</td>
           <td className='orange'>{fioraGames} games</td>
           <td className='white'>{fioraWR}%</td>
         </tr>
 
         <tr>
           <td className='white'>Darius</td>
           <td className='orange'>{dariusGames} games</td>
           <td className='white'>{dariusWR}%</td>
         </tr>
         <tr>
           <td className='white'>Tryndamere</td>
           <td className='orange'>{tryndamereGames} games</td>
           <td className='white'>{tryndamereWR}%</td>
         </tr>
         <tr>
           <td className='white'>Gwen</td>
           <td className='orange'>{gwenGames} games</td>
           <td className='white'>{gwenWR}%</td>
         </tr>         
       </tbody>
     </table>
  </div>     
  )
}

export default MatchupsOurTop