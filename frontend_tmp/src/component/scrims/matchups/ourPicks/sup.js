import axios from 'axios'
import { useState } from 'react'

const getSupScrim = 'http://localhost:5000/api/matchups/sup/getAllScrim'
const getSupOtf1 = 'http://localhost:5000/api/matchups/sup/getAllOtf1'
const getSupPrepaOtf2 = 'http://localhost:5000/api/matchups/sup/getAllPrepaOtf2'

const getWinSupScrim = 'http://localhost:5000/api/matchups/sup/getWinScrim'
const getWinSupOtf1 = 'http://localhost:5000/api/matchups/sup/getWinOtf1'
const getWinSupPrepaOtf2 = 'http://localhost:5000/api/matchups/sup/getWinPrepaOtf2'

function MatchupsOurSup()  {
  const [leonaGames, setLeonaGames] = useState()
  const [braumGames, setBraumGames] = useState ()
  const [nautilusGames, setNautilusGames] = useState ()
  const [karmaGames, setKarmaGames] = useState ()
  const [threshGames, setThreshGames] = useState()
  const [rakanGames, setRakanGames] = useState()
  const [alistarGames, setAlistarGames] = useState()
  const [poppyGames, setPoppyGames] = useState()
  const [velkozGames, setVelkozGames] = useState()
  const [blitzcrankGames, setBlitzcrankGames] = useState()
  const [gragasGames, setGragasGames] = useState()
  
  const [leonaWins, setLeonaWins] = useState()
  const [braumWins, setBraumWins] = useState ()
  const [nautilusWins, setNautilusWins] = useState ()
  const [karmaWins, setKarmaWins] = useState ()
  const [threshWins, setThreshWins] = useState()
  const [rakanWins, setRakanWins] = useState()
  const [alistarWins, setAlistarWins] = useState()
  const [poppyWins, setPoppyWins] = useState()
  const [velkozWins, setVelkozWins] = useState()
  const [blitzcrankWins, setBlitzcrankWins] = useState()
  const [gragasWins, setGragasWins] = useState()

  
  let supPicks = []
  let supWins = []
  // PICKS
  axios.get(getSupScrim).then(res => {
  for (let i = 0; i < res.data.length; i++) {
    supPicks.push(res.data[i].Pick5)
  }
  axios.get(getSupOtf1).then(res => {
    for(let i = 0; i < res.data.length; i++) {
      supPicks.push(res.data[i].Pick5)
    }
  
  axios.get(getSupPrepaOtf2).then(res => {
    for(let i = 0; i < res.data.length; i++) {
      supPicks.push(res.data[i].Pick5)
    }
  function getOccurrence(array, value) {
    return array.filter((v) => (v === value)).length;
  }
  setLeonaGames(getOccurrence(supPicks, 'Leona'))
  setBraumGames(getOccurrence(supPicks, 'Braum'))
  setNautilusGames(getOccurrence(supPicks, "Nautilus"))
  setKarmaGames(getOccurrence(supPicks, "Karma"))
  setThreshGames(getOccurrence(supPicks, "Thresh"))
  setRakanGames(getOccurrence(supPicks, 'Rakan'))
  setAlistarGames(getOccurrence(supPicks, 'Alistar'))
  setPoppyGames(getOccurrence(supPicks, 'Poppy'))
  setVelkozGames(getOccurrence(supPicks, "Vel'Koz"))
  setGragasGames(getOccurrence(supPicks, 'Gragas'))
  setBlitzcrankGames(getOccurrence(supPicks, 'Blitzcrank'))





  
  })
  })
  })
  
  // WINS
  axios.get(getWinSupScrim).then(res => {
    for (let i = 0; i < res.data.length; i++) {
      supWins.push(res.data[i].Pick5)
    }
    
    axios.get(getWinSupOtf1).then(res => {
      for(let i = 0; i < res.data.length; i++) {
        supWins.push(res.data[i].Pick5)
      }
    
    axios.get(getWinSupPrepaOtf2).then(res => {
      for(let i = 0; i < res.data.length; i++) {
        supWins.push(res.data[i].Pick5)
      }
    function getOccurrence(array, value) {
      return array.filter((v) => (v === value)).length;
    }
    
  setLeonaWins(getOccurrence(supWins, 'Leona'))
  setBraumWins(getOccurrence(supWins, 'Braum'))
  setNautilusWins(getOccurrence(supWins, "Nautilus"))
  setKarmaWins(getOccurrence(supWins, "Karma"))
  setThreshWins(getOccurrence(supWins, "Thresh"))
  setRakanWins(getOccurrence(supWins, 'Rakan'))
  setAlistarWins(getOccurrence(supWins, 'Alistar'))
  setPoppyWins(getOccurrence(supWins, 'Poppy'))
  setVelkozWins(getOccurrence(supWins, "Vel'Koz"))
  setGragasWins(getOccurrence(supWins, 'Gragas'))
  setBlitzcrankWins(getOccurrence(supWins, 'Blitzcrank'))
    })
    })
    })
    let leonaWR = ((leonaWins / leonaGames) * 100).toFixed(2)
    let braumWR = ((braumWins / braumGames)*100).toFixed(2)
    let nautilusWR = ((nautilusWins / nautilusGames) * 100).toFixed(2)
    let karmaWR = ((karmaWins / karmaGames) * 100).toFixed(2)
    let threshWR = ((threshWins / threshGames) * 100).toFixed(2)
    let rakanWR = ((rakanWins / rakanGames) * 100).toFixed(2)
    let alistarWR = ((alistarWins / alistarGames) * 100).toFixed(2)
    let poppyWR = ((poppyWins / poppyGames) * 100).toFixed(2)
    let velkozWR = ((velkozWins / velkozGames) * 100).toFixed(2)
    let blitzcrankWR = ((blitzcrankWins / blitzcrankGames) * 100).toFixed(2)
    let gragasWR = ((gragasWins / gragasGames) * 100).toFixed(2)
    


  return (
  <div>
     <table>
       <h3 className='orange'>Sup</h3>
       <tbody>
       <tr>
           <td className='white'>Thresh</td>
           <td className='orange'>{threshGames} games</td>
           <td className='white'>{threshWR}%</td>
         </tr>
       <tr>
           <td className='white'>Braum</td>
           <td className='orange'>{braumGames} games</td>
           <td className='white'>{braumWR}%</td>
         </tr>
         <tr>
           <td className='white'>Nautilus</td>
           <td className='orange'>{nautilusGames} games</td>
           <td className='white'>{nautilusWR}%</td>
         </tr>
         <tr>
           <td className='white'>Leona</td>
           <td className='orange'>{leonaGames} games</td>
           <td className='white'>{leonaWR}%</td>
         </tr>
         <tr>
           <td className='white'>Gragas</td>
           <td className='orange'>{gragasGames} games</td>
           <td className='white'>{gragasWR}%</td>
         </tr>
         <tr>
           <td className='white'>Blitzcrank</td>
           <td className='orange'>{blitzcrankGames} games</td>
           <td className='white'>{blitzcrankWR}%</td>
         </tr>
         <tr>
           <td className='white'>Karma</td>
           <td className='orange'>{karmaGames} games</td>
           <td className='white'>{karmaWR}%</td>
         </tr>
         <tr>
           <td className='white'>Alistar</td>
           <td className='orange'>{alistarGames} games</td>
           <td className='white'>{alistarWR}%</td>
         </tr>
         <tr>
           <td className='white'>Vel'Koz</td>
           <td className='orange'>{velkozGames} games</td>
           <td className='white'>{velkozWR}%</td>
         </tr>        
         <tr>
           <td className='white'>Poppy</td>
           <td className='orange'>{poppyGames} games</td>
           <td className='white'>{poppyWR}%</td>
         </tr>
         <tr>
           <td className='white'>Rakan</td>
           <td className='orange'>{rakanGames} games</td>
           <td className='white'>{rakanWR}%</td>
         </tr> 
         
       </tbody>
     </table>
  </div>     
  )
}

export default MatchupsOurSup