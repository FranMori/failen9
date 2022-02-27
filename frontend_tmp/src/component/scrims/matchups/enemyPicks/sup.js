import axios from 'axios'
import { useState } from 'react'

const getSupScrim = 'http://localhost:5000/api/matchups/sup/getAllScrim'
const getSupOtf1 = 'http://localhost:5000/api/matchups/sup/getAllOtf1'
const getSupPrepaOtf2 = 'http://localhost:5000/api/matchups/sup/getAllPrepaOtf2'

const getWinSupScrim = 'http://localhost:5000/api/matchups/sup/getWinScrim'
const getWinSupOtf1 = 'http://localhost:5000/api/matchups/sup/getWinOtf1'
const getWinSupPrepaOtf2 = 'http://localhost:5000/api/matchups/sup/getWinPrepaOtf2'

function MatchupsSup()  {
  const [leonaGames, setLeonaGames] = useState()
  const [luxGames, setLuxGames] = useState()
  const [braumGames, setBraumGames] = useState ()
  const [nautilusGames, setNautilusGames] = useState ()
  const [karmaGames, setKarmaGames] = useState ()
  const [vexGames, setVexGames] = useState()
  const [namiGames, setNamiGames] = useState()
  const [zileanGames, setZileanGames] = useState()
  const [bardGames, setBardGames] = useState()
  const [luluGames, setLuluGames] = useState()
  const [threshGames, setThreshGames] = useState()
  const [rakanGames, setRakanGames] = useState()
  const [pykeGames, setPykeGames] = useState()
  const [yuumiGames, setYuumiGames] = useState()
  
  
  
  const [leonaWins, setLeonaWins] = useState()
  const [luxWins, setLuxWins] = useState()
  const [braumWins, setBraumWins] = useState ()
  const [nautilusWins, setNautilusWins] = useState ()
  const [karmaWins, setKarmaWins] = useState ()
  const [vexWins, setVexWins] = useState()
  const [namiWins, setNamiWins] = useState()
  const [zileanWins, setZileanWins] = useState()
  const [bardWins, setBardWins] = useState()
  const [luluWins, setLuluWins] = useState()
  const [threshWins, setThreshWins] = useState()
  const [rakanWins, setRakanWins] = useState()
  const [pykeWins, setPykeWins] = useState()
  const [yuumiWins, setYuumiWins] = useState()

  
  let supPicks = []
  let supWins = []
  // PICKS
  axios.get(getSupScrim).then(res => {
  for (let i = 0; i < res.data.length; i++) {
    supPicks.push(res.data[i].EPick5)
  }
  axios.get(getSupOtf1).then(res => {
    for(let i = 0; i < res.data.length; i++) {
      supPicks.push(res.data[i].EPick5)
    }
  
  axios.get(getSupPrepaOtf2).then(res => {
    for(let i = 0; i < res.data.length; i++) {
      supPicks.push(res.data[i].EPick5)
    }
  function getOccurrence(array, value) {
    return array.filter((v) => (v === value)).length;
  }
  
  setLeonaGames(getOccurrence(supPicks, 'Leona'))
  setLuxGames(getOccurrence(supPicks, 'Lux'))
  setBraumGames(getOccurrence(supPicks, 'Braum'))
  setNautilusGames(getOccurrence(supPicks, "Nautilus"))
  setVexGames(getOccurrence(supPicks, 'Vex'))
  setNamiGames(getOccurrence(supPicks, 'Nami'))
  setKarmaGames(getOccurrence(supPicks, "Karma"))
  setZileanGames(getOccurrence(supPicks, 'Zilean'))
  setBardGames(getOccurrence(supPicks, 'Bard'))
  setLuluGames(getOccurrence(supPicks, 'Lulu'))
  setThreshGames(getOccurrence(supPicks, "Thresh"))
  setRakanGames(getOccurrence(supPicks, 'Rakan'))
  setPykeGames(getOccurrence(supPicks, 'Pyke'))
  setYuumiGames(getOccurrence(supPicks, 'Yuumi'))
  
  })
  })
  })
  
  // WINS
  axios.get(getWinSupScrim).then(res => {
    for (let i = 0; i < res.data.length; i++) {
      supWins.push(res.data[i].EPick5)
    }
    
    axios.get(getWinSupOtf1).then(res => {
      for(let i = 0; i < res.data.length; i++) {
        supWins.push(res.data[i].EPick5)
      }
    
    axios.get(getWinSupPrepaOtf2).then(res => {
      for(let i = 0; i < res.data.length; i++) {
        supWins.push(res.data[i].EPick5)
      }
    function getOccurrence(array, value) {
      return array.filter((v) => (v === value)).length;
    }
    
    setLeonaWins(getOccurrence(supWins, 'Leona'))
  setLuxWins(getOccurrence(supWins, 'Lux'))
  setBraumWins(getOccurrence(supWins, 'Braum'))
  setNautilusWins(getOccurrence(supWins, "Nautilus"))
  setVexWins(getOccurrence(supWins, 'Vex'))
  setNamiWins(getOccurrence(supWins, 'Nami'))
  setKarmaWins(getOccurrence(supWins, "Karma"))
  setZileanWins(getOccurrence(supWins, 'Zilean'))
  setBardWins(getOccurrence(supWins, 'Bard'))
  setLuluWins(getOccurrence(supWins, 'Lulu'))
  setThreshWins(getOccurrence(supWins, "Thresh"))
  setRakanWins(getOccurrence(supWins, 'Rakan'))
  setPykeWins(getOccurrence(supWins, 'Pyke'))
  setYuumiWins(getOccurrence(supWins, 'Yuumi'))
    })
    })
    })
    let leonaWR = ((leonaWins / leonaGames) * 100).toFixed(2)
    let luxWR = ((luxWins / luxGames) * 100).toFixed(2)
    let braumWR = ((braumWins / braumGames)*100).toFixed(2)
    let nautilusWR = ((nautilusWins / nautilusGames) * 100).toFixed(2)
    let vexWR = ((vexWins / vexGames) * 100).toFixed(2)
    let namiWR = ((namiWins /namiGames)*100).toFixed(2)
    let karmaWR = ((karmaWins / karmaGames) * 100).toFixed(2)
    let zileanWR = ((zileanWins / zileanGames) * 100).toFixed(2)
    let bardWR = ((bardWins / bardGames) * 100).toFixed(2)
    let luluWR = ((luluWins / luluGames) * 100).toFixed(2)
    let threshWR = ((threshWins / threshGames) * 100).toFixed(2)
    let rakanWR = ((rakanWins / rakanGames) * 100).toFixed(2)
    let pykeWR = ((pykeWins / pykeGames) * 100).toFixed(2)
    let yuumiWR = ((yuumiWins / yuumiGames) * 100).toFixed(2)
    


  return (
  <div>
     <table>
       <h3 className='orange'>Sup</h3>
       <tbody>
       <tr>
           <td className='white'>Karma</td>
           <td className='orange'>{karmaGames} games</td>
           <td className='white'>{karmaWR}%</td>
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
           <td className='white'>Braum</td>
           <td className='orange'>{braumGames} games</td>
           <td className='white'>{braumWR}%</td>
         </tr>
         <tr>
           <td className='white'>Lulu</td>
           <td className='orange'>{luluGames} games</td>
           <td className='white'>{luluWR}%</td>
         </tr>
         <tr>
           <td className='white'>Lux</td>
           <td className='orange'>{luxGames} games</td>
           <td className='white'>{luxWR}%</td>
         </tr>
         <tr>
           <td className='white'>Thresh</td>
           <td className='orange'>{threshGames} games</td>
           <td className='white'>{threshWR}%</td>
         </tr>
         <tr>
           <td className='white'>Yuumi</td>
           <td className='orange'>{yuumiGames} games</td>
           <td className='white'>{yuumiWR}%</td>
         </tr>        
         <tr>
           <td className='white'>Vex</td>
           <td className='orange'>{vexGames} games</td>
           <td className='white'>{vexWR}%</td>
         </tr>
         <tr>
           <td className='white'>Zilean</td>
           <td className='orange'>{zileanGames} games</td>
           <td className='white'>{zileanWR}%</td>
         </tr>
         <tr>
           <td className='white'>Bard</td>
           <td className='orange'>{bardGames} games</td>
           <td className='white'>{bardWR}%</td>
         </tr>     
         <tr>
           <td className='white'>Rakan</td>
           <td className='orange'>{rakanGames} games</td>
           <td className='white'>{rakanWR}%</td>
         </tr>
         <tr>
           <td className='white'>Pyke</td>
           <td className='orange'>{pykeGames} games</td>
           <td className='white'>{pykeWR}%</td>
         </tr>         
         <tr>
           <td className='white'>Nami</td>
           <td className='orange'>{namiGames} games</td>
           <td className='white'>{namiWR}%</td>
         </tr>
       </tbody>
     </table>
  </div>     
  )
}

export default MatchupsSup