import axios from 'axios'
import { useState } from 'react'

const getAdcScrim = 'http://localhost:5000/api/matchups/adc/getAllScrim'
const getAdcOtf1 = 'http://localhost:5000/api/matchups/adc/getAllOtf1'
const getAdcPrepaOtf2 = 'http://localhost:5000/api/matchups/adc/getAllPrepaOtf2'

const getWinAdcScrim = 'http://localhost:5000/api/matchups/adc/getWinScrim'
const getWinAdcOtf1 = 'http://localhost:5000/api/matchups/adc/getWinOtf1'
const getWinAdcPrepaOtf2 = 'http://localhost:5000/api/matchups/adc/getWinPrepaOtf2'

function MatchupsOurAdc()  {
  const [jhinGames, setJhinGames] = useState ()
  const [vayneGames, setVayneGames] = useState()
  const [jinxGames, setJinxGames] = useState()
  const [asheGames, setAsheGames] = useState()
  const [ezrealGames, setEzrealGames] = useState()
  const [apheliosGames, setApheliosGames] = useState()
  const [syndraGames, setSyndraGames] = useState()
  const [varusGames, setVarusGames] = useState()
  const [missfortuneGames, setMissfortuneGames] = useState()
  const [viktorGames, setViktorGames] = useState()
  const [kalistaGames, setKalistaGames] = useState()

  
  
  const [jhinWins, setJhinWins] = useState ()
  const [vayneWins, setVayneWins] = useState()
  const [jinxWins, setJinxWins] = useState()
  const [asheWins, setAsheWins] = useState()
  const [ezrealWins, setEzrealWins] = useState()
  const [apheliosWins, setApheliosWins] = useState()
  const [syndraWins, setSyndraWins] = useState()
  const [varusWins, setVarusWins] = useState()
  const [missfortuneWins, setMissfortuneWins] = useState()
  const [viktorWins, setViktorWins] = useState()
  const [kalistaWins, setKalistaWins] = useState()

  
  let adcPicks = []
  let adcWins = []
  // PICKS
  axios.get(getAdcScrim).then(res => {
  for (let i = 0; i < res.data.length; i++) {
    adcPicks.push(res.data[i].Pick4)
  }
  axios.get(getAdcOtf1).then(res => {
    for(let i = 0; i < res.data.length; i++) {
      adcPicks.push(res.data[i].Pick4)
    }
  
  axios.get(getAdcPrepaOtf2).then(res => {
    for(let i = 0; i < res.data.length; i++) {
      adcPicks.push(res.data[i].Pick4)
    }
  function getOccurrence(array, value) {
    return array.filter((v) => (v === value)).length;
  }
  
  setJhinGames(getOccurrence(adcPicks, 'Jhin'))
  setVayneGames(getOccurrence(adcPicks, 'Vayne'))
  setJinxGames(getOccurrence(adcPicks, 'Jinx'))
  setAsheGames(getOccurrence(adcPicks, 'Ashe'))
  setApheliosGames(getOccurrence(adcPicks, 'Aphelios'))
  setEzrealGames(getOccurrence(adcPicks, 'Ezreal'))
  setVarusGames(getOccurrence(adcPicks, 'Varus'))
  setSyndraGames(getOccurrence(adcPicks, 'Syndra'))
  setKalistaGames(getOccurrence(adcPicks, 'Kalista'))
  setMissfortuneGames(getOccurrence(adcPicks, 'Miss Fortune'))
  setViktorGames(getOccurrence(adcPicks, 'Viktor'))

  
  })
  })
  })
  
  // WINS
  axios.get(getWinAdcScrim).then(res => {
    for (let i = 0; i < res.data.length; i++) {
      adcWins.push(res.data[i].Pick4)
    }
    
    axios.get(getWinAdcOtf1).then(res => {
      for(let i = 0; i < res.data.length; i++) {
        adcWins.push(res.data[i].Pick4)
      }
    
    axios.get(getWinAdcPrepaOtf2).then(res => {
      for(let i = 0; i < res.data.length; i++) {
        adcWins.push(res.data[i].Pick4)
      }
    function getOccurrence(array, value) {
      return array.filter((v) => (v === value)).length;
    }
    
  setJhinWins(getOccurrence(adcWins, 'Jhin'))
  setVayneWins(getOccurrence(adcWins, 'Vayne'))
  setJinxWins(getOccurrence(adcWins, 'Jinx'))
  setAsheWins(getOccurrence(adcWins, 'Ashe'))
  setApheliosWins(getOccurrence(adcWins, 'Aphelios'))
  setEzrealWins(getOccurrence(adcWins, 'Ezreal'))
  setVarusWins(getOccurrence(adcWins, 'Varus'))
  setSyndraWins(getOccurrence(adcWins, 'Syndra'))
  setKalistaWins(getOccurrence(adcWins, 'Kalista'))
  setMissfortuneWins(getOccurrence(adcWins, 'Miss Fortune'))
  setViktorWins(getOccurrence(adcWins, 'Viktor'))
    })
    })
    })
    let jhinWR = ((jhinWins / jhinGames)*100).toFixed(2)
    let kalistaWR = ((kalistaWins / kalistaGames) * 100).toFixed(2)
    let vayneWR = ((vayneWins /vayneGames)*100).toFixed(2)
    let jinxWR = ((jinxWins / jinxGames) * 100).toFixed(2)
    let asheWR = ((asheWins / asheGames) * 100).toFixed(2)
    let ezrealWR = ((ezrealWins / ezrealGames) * 100).toFixed(2)
    let apheliosWR = ((apheliosWins / apheliosGames) * 100).toFixed(2)
    let syndraWR = ((syndraWins / syndraGames) * 100).toFixed(2)
    let varusWR = ((varusWins / varusGames) * 100).toFixed(2)
    let missfortuneWR = ((missfortuneWins / missfortuneGames) * 100).toFixed(2)
    let viktorWR = ((viktorWins / viktorGames) * 100).toFixed(2)
 
  return (
  <div>
     <table>
       <h3 className='orange'>Adc</h3>
       <tbody>
        <tr>
           <td className='white'>Varus</td>
           <td className='orange'>{varusGames} games</td>
           <td className='white'>{varusWR}%</td>
         </tr>
         <tr>
           <td className='white'>Jinx</td>
           <td className='orange'>{jinxGames} games</td>
           <td className='white'>{jinxWR}%</td>
         </tr>
         <tr>
           <td className='white'>Miss Fortune</td>
           <td className='orange'>{missfortuneGames} games</td>
           <td className='white'>{missfortuneWR}%</td>
         </tr>
         <tr>
           <td className='white'>Aphelios</td>
           <td className='orange'>{apheliosGames} games</td>
           <td className='white'>{apheliosWR}%</td>
         </tr>
         <tr>
           <td className='white'>Vayne</td>
           <td className='orange'>{vayneGames} games</td>
           <td className='white'>{vayneWR}%</td>
         </tr>
         <tr>
           <td className='white'>Syndra</td>
           <td className='orange'>{syndraGames} games</td>
           <td className='white'>{syndraWR}%</td>
         </tr>
         <tr>
           <td className='white'>Viktor</td>
           <td className='orange'>{viktorGames} games</td>
           <td className='white'>{viktorWR}%</td>
         </tr>                  
       <tr>
           <td className='white'>Jhin</td>
           <td className='orange'>{jhinGames} games</td>
           <td className='white'>{jhinWR}%</td>
         </tr>
         <tr>
           <td className='white'>Ashe</td>
           <td className='orange'>{asheGames} games</td>
           <td className='white'>{asheWR}%</td>
         </tr>
         <tr>
           <td className='white'>Ezreal</td>
           <td className='orange'>{ezrealGames} games</td>
           <td className='white'>{ezrealWR}%</td>
         </tr>      
         <tr>
           <td className='white'>Kalista</td>
           <td className='orange'>{kalistaGames} games</td>
           <td className='white'>{kalistaWR}%</td>
         </tr>
       </tbody>
     </table>
  </div>     
  )
}

export default MatchupsOurAdc