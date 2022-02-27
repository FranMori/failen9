import axios from 'axios'
import { useState } from 'react'

const getTopScrim = 'http://localhost:5000/api/matchups/top/getAllScrim'
const getTopOtf1 = 'http://localhost:5000/api/matchups/top/getAllOtf1'
const getTopPrepaOtf2 = 'http://localhost:5000/api/matchups/top/getAllPrepaOtf2'

const getWinTopScrim = 'http://localhost:5000/api/matchups/top/getWinScrim'
const getWinTopOtf1 = 'http://localhost:5000/api/matchups/top/getWinOtf1'
const getWinTopPrepaOtf2 = 'http://localhost:5000/api/matchups/top/getWinPrepaOtf2'

function MatchupsTop()  {
  const [ornnGames, setOrnnGames] = useState()
  const [camilleGames, setCamilleGames] = useState()
  const [jayceGames, setJayceGames] = useState ()
  const [shenGames, setShenGames] = useState ()
  const [kennenGames, setKennenGames] = useState ()
  const [renektonGames, setRenektonGames] = useState()
  const [ireliaGames, setIreliaGames] = useState()
  const [akaliGames, setAkaliGames] = useState()
  const [gnarGames, setGnarGames] = useState()
  const [urgotGames, setUrgotGames] = useState()
  const [trundleGames, setTrundleGames] = useState()
  const [poppyGames, setPoppyGames] = useState()
  const [gangplankGames, setGangplankGames] = useState()
  const [gragasGames, setGragasGames] = useState()
  const [jaxGames, setJaxGames] = useState()
  const [gwenGames, setGwenGames] = useState()
  const [tryndamereGames, setTryndamereGames] = useState()
  const [gravesGames, setGravesGames] = useState()
  const [malphiteGames, setMalphiteGames] = useState()
  
  const [ornnWins, setOrnnWins] = useState()
  const [camilleWins, setCamilleWins] = useState()
  const [jayceWins, setJayceWins] = useState ()
  const [shenWins, setShenWins] = useState ()
  const [kennenWins, setKennenWins] = useState ()
  const [renektonWins, setRenektonWins] = useState()
  const [ireliaWins, setIreliaWins] = useState()
  const [akaliWins, setAkaliWins] = useState()
  const [gnarWins, setGnarWins] = useState()
  const [urgotWins, setUrgotWins] = useState()
  const [trundleWins, setTrundleWins] = useState()
  const [poppyWins, setPoppyWins] = useState()
  const [gangplankWins, setGangplankWins] = useState()
  const [gragasWins, setGragasWins] = useState()
  const [jaxWins, setJaxWins] = useState()
  const [gwenWins, setGwenWins] = useState()
  const [tryndamereWins, setTryndamereWins] = useState()
  const [gravesWins, setGravesWins] = useState()
  const [malphiteWins, setMalphiteWins] = useState()
  
  let topPicks = []
  let topWins = []
  
  // PICKS
  axios.get(getTopScrim).then(res => {
  for (let i = 0; i < res.data.length; i++) {
    topPicks.push(res.data[i].EPick1)
  }
  
  axios.get(getTopOtf1).then(res => {
    for(let i = 0; i < res.data.length; i++) {
      topPicks.push(res.data[i].EPick1)
    }
  
  axios.get(getTopPrepaOtf2).then(res => {
    for(let i = 0; i < res.data.length; i++) {
      topPicks.push(res.data[i].EPick1)
    }
  function getOccurrence(array, value) {
    return array.filter((v) => (v === value)).length;
  }
  
  setOrnnGames(getOccurrence(topPicks, 'Ornn'))
  setCamilleGames(getOccurrence(topPicks, 'Camille'))
  setJayceGames(getOccurrence(topPicks, 'Jayce'))
  setShenGames(getOccurrence(topPicks, 'Shen'))
  setKennenGames(getOccurrence(topPicks, 'Kennen'))
  setRenektonGames(getOccurrence(topPicks, 'Renekton'))
  setIreliaGames(getOccurrence(topPicks, 'Irelia'))
  setAkaliGames(getOccurrence(topPicks, 'Akali'))
  setGnarGames(getOccurrence(topPicks, 'Gnar'))
  setUrgotGames(getOccurrence(topPicks, "Urgot"))
  setTrundleGames(getOccurrence(topPicks, 'Trundle'))
  setPoppyGames(getOccurrence(topPicks, 'Poppy'))
  setGangplankGames(getOccurrence(topPicks, 'Gangplank'))
  setGragasGames(getOccurrence(topPicks, 'Gragas'))
  setJaxGames(getOccurrence(topPicks, 'Jax'))
  setGwenGames(getOccurrence(topPicks, 'Gwen'))
  setTryndamereGames(getOccurrence(topPicks, 'Tryndamere'))
  setGravesGames(getOccurrence(topPicks, 'Graves'))
  setMalphiteGames(getOccurrence(topPicks, 'Malphite'))
  })
  })
  })
  
  // WINS
  axios.get(getWinTopScrim).then(res => {
    for (let i = 0; i < res.data.length; i++) {
      topWins.push(res.data[i].EPick1)
    }
    
    axios.get(getWinTopOtf1).then(res => {
      for(let i = 0; i < res.data.length; i++) {
        topWins.push(res.data[i].EPick1)
      }
    
    axios.get(getWinTopPrepaOtf2).then(res => {
      for(let i = 0; i < res.data.length; i++) {
        topWins.push(res.data[i].EPick1)
      }
    function getOccurrence(array, value) {
      return array.filter((v) => (v === value)).length;
    }
    setOrnnWins(getOccurrence(topWins, 'Ornn'))
    setCamilleWins(getOccurrence(topWins, 'Camille'))
    setJayceWins(getOccurrence(topWins, 'Jayce'))
    setShenWins(getOccurrence(topWins, 'Shen'))
    setKennenWins(getOccurrence(topWins, 'Kennen'))
    setRenektonWins(getOccurrence(topWins, 'Renekton'))
    setIreliaWins(getOccurrence(topWins, 'Irelia'))
    setAkaliWins(getOccurrence(topWins, 'Akali'))
    setGnarWins(getOccurrence(topWins, 'Gnar'))
    setUrgotWins(getOccurrence(topWins, "Urgot"))
    setTrundleWins(getOccurrence(topWins, 'Trundle'))
    setPoppyWins(getOccurrence(topWins, 'Poppy'))
    setGangplankWins(getOccurrence(topWins, 'Gangplank'))
    setGragasWins(getOccurrence(topWins, 'Gragas'))
    setJaxWins(getOccurrence(topWins, 'Jax'))
    setGwenWins(getOccurrence(topWins, 'Gwen'))
    setTryndamereWins(getOccurrence(topWins, 'Tryndamere'))
    setGravesWins(getOccurrence(topWins, 'Graves'))
    setMalphiteWins(getOccurrence(topWins, 'Malphite'))
    })
    })
    })
    let ornnWR = ((ornnWins / ornnGames) * 100).toFixed(2)
    let camilleWR = ((camilleWins / camilleGames) * 100).toFixed(2)
    let jayceWR = ((jayceWins / jayceGames)*100).toFixed(2)
    let shenWR = ((shenWins / shenGames) * 100).toFixed(2)
    let kennenWR = ((kennenWins / kennenGames) * 100).toFixed(2)
    let renektonWR = ((renektonWins /renektonGames)*100).toFixed(2)
    let ireliaWR = ((ireliaWins / ireliaGames) * 100).toFixed(2)
    let akaliWR = ((akaliWins / akaliGames) * 100).toFixed(2)
    let gnarWR = ((gnarWins / gnarGames) * 100).toFixed(2)
    let urgotWR = ((urgotWins / urgotGames) * 100).toFixed(2)
    let trundleWR = ((trundleWins / trundleGames) * 100).toFixed(2)
    let poppyWR = ((poppyWins / poppyGames) * 100).toFixed(2)
    let gangplankWR = ((gangplankWins / gangplankGames) * 100).toFixed(2)
    let gragasWR = ((gragasWins / gragasGames) * 100).toFixed(2)
    let jaxWR = ((jaxWins / jaxGames) * 100).toFixed(2)
    let gwenWR = ((gwenWins / gwenGames) * 100).toFixed(2)
    let tryndamereWR = ((tryndamereWins / tryndamereGames) * 100).toFixed(2)
    let gravesWR = ((gravesWins / gravesGames) * 100).toFixed(2)
    let malphiteWR = ((malphiteWins / malphiteGames) * 100).toFixed(2)

  return (
  <div>
     <table>
       <h3 className='orange'>Top</h3>
       <tbody>
         <tr>
           <td className='white'>Ornn</td>
           <td className='orange'>{ornnGames} games</td>
           <td className='white'>{ornnWR}%</td>
         </tr>
         <tr>
           <td className='white'>Renekton</td>
           <td className='orange'>{renektonGames} games</td>
           <td className='white'>{renektonWR}%</td>
         </tr>
         <tr>
           <td className='white'>Gnar</td>
           <td className='orange'>{gnarGames} games</td>
           <td className='white'>{gnarWR}%</td>
         </tr>
         <tr>
           <td className='white'>Camille</td>
           <td className='orange'>{camilleGames} games</td>
           <td className='white'>{camilleWR}%</td>
         </tr>
         <tr>
           <td className='white'>Gragas</td>
           <td className='orange'>{gragasGames} games</td>
           <td className='white'>{gragasWR}%</td>
         </tr>
        
         <tr>
           <td className='white'>Gwen</td>
           <td className='orange'>{gwenGames} games</td>
           <td className='white'>{gwenWR}%</td>
         </tr>
         <tr>
           <td className='white'>Akali</td>
           <td className='orange'>{akaliGames} games</td>
           <td className='white'>{akaliWR}%</td>
         </tr>
         <tr>
           <td className='white'>Shen</td>
           <td className='orange'>{shenGames} games</td>
           <td className='white'>{shenWR}%</td>
         </tr>
         <tr>
           <td className='white'>Jayce</td>
           <td className='orange'>{jayceGames} games</td>
           <td className='white'>{jayceWR}%</td>
         </tr>
         <tr>
           <td className='white'>Kennen</td>
           <td className='orange'>{kennenGames} games</td>
           <td className='white'>{kennenWR}%</td>
         </tr>
         <tr>
           <td className='white'>Malphite</td>
           <td className='orange'>{malphiteGames} games</td>
           <td className='white'>{malphiteWR}%</td>
         </tr>
         <tr>
           <td className='white'>Urgot</td>
           <td className='orange'>{urgotGames} games</td>
           <td className='white'>{urgotWR}%</td>
         </tr>
         <tr>
           <td className='white'>Graves</td>
           <td className='orange'>{gravesGames} games</td>
           <td className='white'>{gravesWR}%</td>
         </tr>
         <tr>
           <td className='white'>Tryndamere</td>
           <td className='orange'>{tryndamereGames} games</td>
           <td className='white'>{tryndamereWR}%</td>
         </tr>
         <tr>
           <td className='white'>irelia</td>
           <td className='orange'>{ireliaGames} games</td>
           <td className='white'>{ireliaWR}%</td>
         </tr>
         <tr>
           <td className='white'>Jax</td>
           <td className='orange'>{jaxGames} games</td>
           <td className='white'>{jaxWR}%</td>
         </tr>
         <tr>
           <td className='white'>Gangplank</td>
           <td className='orange'>{gangplankGames} games</td>
           <td className='white'>{gangplankWR}%</td>
         </tr>
         <tr>
           <td className='white'>Poppy</td>
           <td className='orange'>{poppyGames} games</td>
           <td className='white'>{poppyWR}%</td>
         </tr>
         <tr>
           <td className='white'>Trundle</td>
           <td className='orange'>{trundleGames} games</td>
           <td className='white'>{trundleWR}%</td>
         </tr>
       </tbody>
     </table>
  </div>     
  )
}

export default MatchupsTop