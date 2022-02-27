import axios from 'axios'
import { useState } from 'react'

const getAdcScrim = 'http://localhost:5000/api/matchups/adc/getAllScrim'
const getAdcOtf1 = 'http://localhost:5000/api/matchups/adc/getAllOtf1'
const getAdcPrepaOtf2 = 'http://localhost:5000/api/matchups/adc/getAllPrepaOtf2'

const getWinAdcScrim = 'http://localhost:5000/api/matchups/adc/getWinScrim'
const getWinAdcOtf1 = 'http://localhost:5000/api/matchups/adc/getWinOtf1'
const getWinAdcPrepaOtf2 = 'http://localhost:5000/api/matchups/adc/getWinPrepaOtf2'

function MatchupsAdc()  {
  const [ziggsGames, setZiggsGames] = useState()
  const [caitlynGames, setCaitlynGames] = useState()
  const [kalistaGames, setKalistaGames] = useState ()
  const [kaiSaGames, setKaiSaGames] = useState ()
  const [jhinGames, setJhinGames] = useState ()
  const [vayneGames, setVayneGames] = useState()
  const [kogMawGames, setKogMawGames] = useState()
  const [seraphineGames, setSeraphineGames] = useState()
  const [jinxGames, setJinxGames] = useState()
  const [asheGames, setAsheGames] = useState()
  const [sennaGames, setSennaGames] = useState()
  const [ezrealGames, setEzrealGames] = useState()
  const [zeriGames, setZeriGames] = useState()
  const [apheliosGames, setApheliosGames] = useState()
  const [syndraGames, setSyndraGames] = useState()
  const [varusGames, setVarusGames] = useState()
  
  
  const [ziggsWins, setZiggsWins] = useState()
  const [caitlynWins, setCaitlynWins] = useState()
  const [kalistaWins, setKalistaWins] = useState ()
  const [kaiSaWins, setKaiSaWins] = useState ()
  const [jhinWins, setJhinWins] = useState ()
  const [vayneWins, setVayneWins] = useState()
  const [kogMawWins, setKogMawWins] = useState()
  const [seraphineWins, setSeraphineWins] = useState()
  const [jinxWins, setJinxWins] = useState()
  const [asheWins, setAsheWins] = useState()
  const [sennaWins, setSennaWins] = useState()
  const [ezrealWins, setEzrealWins] = useState()
  const [zeriWins, setZeriWins] = useState()
  const [apheliosWins, setApheliosWins] = useState()
  const [syndraWins, setSyndraWins] = useState()
  const [varusWins, setVarusWins] = useState()

  
  let adcPicks = []
  let adcWins = []
  // PICKS
  axios.get(getAdcScrim).then(res => {
  for (let i = 0; i < res.data.length; i++) {
    adcPicks.push(res.data[i].EPick4)
  }
  axios.get(getAdcOtf1).then(res => {
    for(let i = 0; i < res.data.length; i++) {
      adcPicks.push(res.data[i].EPick4)
    }
  
  axios.get(getAdcPrepaOtf2).then(res => {
    for(let i = 0; i < res.data.length; i++) {
      adcPicks.push(res.data[i].EPick4)
    }
  function getOccurrence(array, value) {
    return array.filter((v) => (v === value)).length;
  }
  
  setZiggsGames(getOccurrence(adcPicks, 'Ziggs'))
  setKalistaGames(getOccurrence(adcPicks, 'Kalista'))
  setCaitlynGames(getOccurrence(adcPicks, 'Caitlyn'))
  setKaiSaGames(getOccurrence(adcPicks, "Kai'Sa"))
  setJhinGames(getOccurrence(adcPicks, 'Jhin'))
  setVayneGames(getOccurrence(adcPicks, 'Vayne'))
  setKogMawGames(getOccurrence(adcPicks, "Kog'Maw"))
  setSeraphineGames(getOccurrence(adcPicks, 'Séraphine'))
  setJinxGames(getOccurrence(adcPicks, 'Jinx'))
  setAsheGames(getOccurrence(adcPicks, 'Ashe'))
  setSennaGames(getOccurrence(adcPicks, "Senna"))
  setZeriGames(getOccurrence(adcPicks, 'Zeri'))
  setApheliosGames(getOccurrence(adcPicks, 'Aphelios'))
  setEzrealGames(getOccurrence(adcPicks, 'Ezreal'))
  setVarusGames(getOccurrence(adcPicks, 'Varus'))
  setSyndraGames(getOccurrence(adcPicks, 'Syndra'))
  })
  })
  })
  
  // WINS
  axios.get(getWinAdcScrim).then(res => {
    for (let i = 0; i < res.data.length; i++) {
      adcWins.push(res.data[i].EPick4)
    }
    
    axios.get(getWinAdcOtf1).then(res => {
      for(let i = 0; i < res.data.length; i++) {
        adcWins.push(res.data[i].EPick4)
      }
    
    axios.get(getWinAdcPrepaOtf2).then(res => {
      for(let i = 0; i < res.data.length; i++) {
        adcWins.push(res.data[i].EPick4)
      }
    function getOccurrence(array, value) {
      return array.filter((v) => (v === value)).length;
    }
    
    setZiggsWins(getOccurrence(adcWins, 'Ziggs'))
    setKalistaWins(getOccurrence(adcWins, 'Kalista'))
    setCaitlynWins(getOccurrence(adcWins, 'Caitlyn'))
    setKaiSaWins(getOccurrence(adcWins, "Kai'Sa"))
    setJhinWins(getOccurrence(adcWins, 'Jhin'))
    setVayneWins(getOccurrence(adcWins, 'Vayne'))
    setKogMawWins(getOccurrence(adcWins, "Kog'Maw"))
    setSeraphineWins(getOccurrence(adcWins, 'Séraphine'))
    setJinxWins(getOccurrence(adcWins, 'Jinx'))
    setAsheWins(getOccurrence(adcWins, 'Ashe'))
    setSennaWins(getOccurrence(adcWins, "Senna"))
    setZeriWins(getOccurrence(adcWins, 'Zeri'))
    setApheliosWins(getOccurrence(adcWins, 'Aphelios'))
    setEzrealWins(getOccurrence(adcWins, 'Ezreal'))
    setVarusWins(getOccurrence(adcWins, 'Varus'))
    setSyndraWins(getOccurrence(adcWins, 'Syndra'))
    })
    })
    })
    let ziggsWR = ((ziggsWins / ziggsGames) * 100).toFixed(2)
    let kaiSaWR = ((kaiSaWins / kaiSaGames) * 100).toFixed(2)
    let jhinWR = ((jhinWins / jhinGames)*100).toFixed(2)
    let caitlynWR = ((caitlynWins / caitlynGames) * 100).toFixed(2)
    let kalistaWR = ((kalistaWins / kalistaGames) * 100).toFixed(2)
    let vayneWR = ((vayneWins /vayneGames)*100).toFixed(2)
    let kogMawWR = ((kogMawWins / kogMawGames) * 100).toFixed(2)
    let seraphineWR = ((seraphineWins / seraphineGames) * 100).toFixed(2)
    let jinxWR = ((jinxWins / jinxGames) * 100).toFixed(2)
    let asheWR = ((asheWins / asheGames) * 100).toFixed(2)
    let sennaWR = ((sennaWins / sennaGames) * 100).toFixed(2)
    let ezrealWR = ((ezrealWins / ezrealGames) * 100).toFixed(2)
    let zeriWR = ((zeriWins / zeriGames) * 100).toFixed(2)
    let apheliosWR = ((apheliosWins / apheliosGames) * 100).toFixed(2)
    let syndraWR = ((syndraWins / syndraGames) * 100).toFixed(2)
    let varusWR = ((varusWins / varusGames) * 100).toFixed(2)
    


  return (
  <div>
     <table>
       <h3 className='orange'>Adc</h3>
       <tbody>
       <tr>
           <td className='white'>Jhin</td>
           <td className='orange'>{jhinGames} games</td>
           <td className='white'>{jhinWR}%</td>
         </tr>
         <tr>
           <td className='white'>Jinx</td>
           <td className='orange'>{jinxGames} games</td>
           <td className='white'>{jinxWR}%</td>
         </tr>
         <tr>
           <td className='white'>Caitlyn</td>
           <td className='orange'>{caitlynGames} games</td>
           <td className='white'>{caitlynWR}%</td>
         </tr>
         <tr>
           <td className='white'>Senna</td>
           <td className='orange'>{sennaGames} games</td>
           <td className='white'>{sennaWR}%</td>
         </tr>
         <tr>
           <td className='white'>Zeri</td>
           <td className='orange'>{zeriGames} games</td>
           <td className='white'>{zeriWR}%</td>
         </tr>
         <tr>
           <td className='white'>Varus</td>
           <td className='orange'>{varusGames} games</td>
           <td className='white'>{varusWR}%</td>
         </tr>  
        <tr>
           <td className='white'>Ziggs</td>
           <td className='orange'>{ziggsGames} games</td>
           <td className='white'>{ziggsWR}%</td>
         </tr>
         <tr>
           <td className='white'>Aphelios</td>
           <td className='orange'>{apheliosGames} games</td>
           <td className='white'>{apheliosWR}%</td>
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
           <td className='white'>Kai'Sa</td>
           <td className='orange'>{kaiSaGames} games</td>
           <td className='white'>{kaiSaWR}%</td>
         </tr>
         <tr>
           <td className='white'>Kalista</td>
           <td className='orange'>{kalistaGames} games</td>
           <td className='white'>{kalistaWR}%</td>
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
           <td className='white'>Séraphine</td>
           <td className='orange'>{seraphineGames} games</td>
           <td className='white'>{seraphineWR}%</td>
         </tr>        
         <tr>
           <td className='white'>Kog'Maw</td>
           <td className='orange'>{kogMawGames} games</td>
           <td className='white'>{kogMawWR}%</td>
         </tr>
       </tbody>
     </table>
  </div>     
  )
}

export default MatchupsAdc