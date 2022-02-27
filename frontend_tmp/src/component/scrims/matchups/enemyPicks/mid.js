import axios from 'axios'
import { useState } from 'react'

const getMidScrim = 'http://localhost:5000/api/matchups/mid/getAllScrim'
const getMidOtf1 = 'http://localhost:5000/api/matchups/mid/getAllOtf1'
const getMidPrepaOtf2 = 'http://localhost:5000/api/matchups/mid/getAllPrepaOtf2'

const getWinMidScrim = 'http://localhost:5000/api/matchups/mid/getWinScrim'
const getWinMidOtf1 = 'http://localhost:5000/api/matchups/mid/getWinOtf1'
const getWinMidPrepaOtf2 = 'http://localhost:5000/api/matchups/mid/getWinPrepaOtf2'

function MatchupsMid()  {
  const [ahriGames, setAhriGames] = useState()
  const [yoneGames, setYoneGames] = useState()
  const [oriannaGames, setOriannaGames] = useState ()
  const [galioGames, setGalioGames] = useState ()
  const [kassadinGames, setKassadinGames] = useState ()
  const [cassioGames, setCassioGames] = useState()
  const [viktorGames, setViktorGames] = useState()
  const [wukongGames, setWukongGames] = useState()
  const [ekkoGames, setEkkoGames] = useState()
  const [corkiGames, setCorkiGames] = useState()
  const [tfGames, setTFGames] = useState()
  const [vexGames, setVexGames] = useState()
  const [luxGames, setLuxGames] = useState()
  const [sylasGames, setSylasGames] = useState()
  const [lissandraGames, setLissandraGames] = useState()
  const [kayleGames, setKayleGames] = useState()
  const [syndraGames, setSyndraGames] = useState()
  const [jayceGames, setJayceGames] = useState()
  const [leblancGames, setLeblancGames] = useState()
  const [akaliGames, setAkaliGames] = useState()
  const [tristanaGames, setTristanaGames] = useState()
  const [vladimirGames, setVladimirGames] = useState()
  
  const [ahriWins, setAhriWins] = useState()
  const [yoneWins, setYoneWins] = useState()
  const [oriannaWins, setOriannaWins] = useState ()
  const [galioWins, setGalioWins] = useState ()
  const [kassadinWins, setKassadinWins] = useState ()
  const [cassioWins, setCassioWins] = useState()
  const [viktorWins, setViktorWins] = useState()
  const [wukongWins, setWukongWins] = useState()
  const [ekkoWins, setEkkoWins] = useState()
  const [corkiWins, setCorkiWins] = useState()
  const [tfWins, setTFWins] = useState()
  const [vexWins, setVexWins] = useState()
  const [luxWins, setLuxWins] = useState()
  const [sylasWins, setSylasWins] = useState()
  const [lissandraWins, setLissandraWins] = useState()
  const [kayleWins, setKayleWins] = useState()
  const [syndraWins, setSyndraWins] = useState()
  const [jayceWins, setJayceWins] = useState()
  const [leblancWins, setLeblancWins] = useState()
  const [akaliWins, setAkaliWins] = useState()
  const [tristanaWins, setTristanaWins] = useState()
  const [vladimirWins, setVladimirWins] = useState()

  
  let midPicks = []
  let midWins = []
  
  // PICKS
  axios.get(getMidScrim).then(res => {
  for (let i = 0; i < res.data.length; i++) {
    midPicks.push(res.data[i].EPick3)
  }
  
  axios.get(getMidOtf1).then(res => {
    for(let i = 0; i < res.data.length; i++) {
      midPicks.push(res.data[i].EPick3)
    }
  
  axios.get(getMidPrepaOtf2).then(res => {
    for(let i = 0; i < res.data.length; i++) {
      midPicks.push(res.data[i].EPick3)
    }
  function getOccurrence(array, value) {
    return array.filter((v) => (v === value)).length;
  }
  
  setAhriGames(getOccurrence(midPicks, 'Ahri'))
  setYoneGames(getOccurrence(midPicks, 'Yone'))
  setOriannaGames(getOccurrence(midPicks, 'Orianna'))
  setGalioGames(getOccurrence(midPicks, 'Galio'))
  setKassadinGames(getOccurrence(midPicks, 'Kassadin'))
  setCassioGames(getOccurrence(midPicks, 'Cassio'))
  setViktorGames(getOccurrence(midPicks, 'Viktor'))
  setAkaliGames(getOccurrence(midPicks, 'Akali'))
  setWukongGames(getOccurrence(midPicks, 'Wukong'))
  setEkkoGames(getOccurrence(midPicks, "Ekko"))
  setCorkiGames(getOccurrence(midPicks, 'Corki'))
  setSylasGames(getOccurrence(midPicks, 'Sylas'))
  setLissandraGames(getOccurrence(midPicks, 'Lissandra'))
  setKayleGames(getOccurrence(midPicks, 'Kayle'))
  setSyndraGames(getOccurrence(midPicks, 'Syndra'))
  setJayceGames(getOccurrence(midPicks, 'Jayce'))
  setVexGames(getOccurrence(midPicks, 'Vex'))
  setLeblancGames(getOccurrence(midPicks, 'LeBlanc'))
  setTristanaGames(getOccurrence(midPicks, 'Tristana'))
  setVladimirGames(getOccurrence(midPicks, 'Vladimir'))
  setTFGames(getOccurrence(midPicks, 'TF'))
  setLuxGames(getOccurrence(midPicks, 'Lux'))
  })
  })
  })
  
  // WINS
  axios.get(getWinMidScrim).then(res => {
    for (let i = 0; i < res.data.length; i++) {
      midWins.push(res.data[i].EPick3)
    }
    
    axios.get(getWinMidOtf1).then(res => {
      for(let i = 0; i < res.data.length; i++) {
        midWins.push(res.data[i].EPick3)
      }
    
    axios.get(getWinMidPrepaOtf2).then(res => {
      for(let i = 0; i < res.data.length; i++) {
        midWins.push(res.data[i].EPick3)
      }
    function getOccurrence(array, value) {
      return array.filter((v) => (v === value)).length;
    }
    
  setAhriWins(getOccurrence(midWins, 'Ahri'))
  setYoneWins(getOccurrence(midWins, 'Yone'))
  setOriannaWins(getOccurrence(midWins, 'Orianna'))
  setGalioWins(getOccurrence(midWins, 'Galio'))
  setKassadinWins(getOccurrence(midWins, 'Kassadin'))
  setCassioWins(getOccurrence(midWins, 'Cassio'))
  setViktorWins(getOccurrence(midWins, 'Viktor'))
  setAkaliWins(getOccurrence(midWins, 'Akali'))
  setWukongWins(getOccurrence(midWins, 'Wukong'))
  setEkkoWins(getOccurrence(midWins, "Ekko"))
  setCorkiWins(getOccurrence(midWins, 'Corki'))
  setSylasWins(getOccurrence(midWins, 'Sylas'))
  setLissandraWins(getOccurrence(midWins, 'Lissandra'))
  setKayleWins(getOccurrence(midWins, 'Kayle'))
  setSyndraWins(getOccurrence(midWins, 'Syndra'))
  setJayceWins(getOccurrence(midWins, 'Jayce'))
  setVexWins(getOccurrence(midWins, 'Vex'))
  setLeblancWins(getOccurrence(midWins, 'LeBlanc'))
  setTristanaWins(getOccurrence(midWins, 'Tristana'))
  setVladimirWins(getOccurrence(midWins, 'Vladimir'))
  setTFWins(getOccurrence(midWins, 'TF'))
  setLuxWins(getOccurrence(midWins, 'Lux'))
    })
    })
    })
    let ahriWR = ((ahriWins / ahriGames) * 100).toFixed(2)
    let yoneWR = ((yoneWins / yoneGames) * 100).toFixed(2)
    let oriannaWR = ((oriannaWins / oriannaGames)*100).toFixed(2)
    let galioWR = ((galioWins / galioGames) * 100).toFixed(2)
    let kassadinWR = ((kassadinWins / kassadinGames) * 100).toFixed(2)
    let cassioWR = ((cassioWins /cassioGames)*100).toFixed(2)
    let viktorWR = ((viktorWins / viktorGames) * 100).toFixed(2)
    let akaliWR = ((akaliWins / akaliGames) * 100).toFixed(2)
    let wukongWR = ((wukongWins / wukongGames) * 100).toFixed(2)
    let ekkoWR = ((ekkoWins / ekkoGames) * 100).toFixed(2)
    let corkiWR = ((corkiWins / corkiGames) * 100).toFixed(2)
    let sylasWR = ((sylasWins / sylasGames) * 100).toFixed(2)
    let lissandraWR = ((lissandraWins / lissandraGames) * 100).toFixed(2)
    let kayleWR = ((kayleWins / kayleGames) * 100).toFixed(2)
    let syndraWR = ((syndraWins / syndraGames) * 100).toFixed(2)
    let jayceWR = ((jayceWins / jayceGames) * 100).toFixed(2)
    let vexWR = ((vexWins / vexGames) * 100).toFixed(2)
    let leblancWR = ((leblancWins / leblancGames) * 100).toFixed(2)
    let tristanaWR = ((tristanaWins / tristanaGames) * 100).toFixed(2)
    let tfWR = ((tfWins / tfGames) * 100).toFixed(2)
    let vladimirWR = ((vladimirWins / vladimirGames) * 100).toFixed(2)
    let luxWR = ((luxWins / luxGames) * 100).toFixed(2)


  return (
  <div>
     <table>
       <h3 className='orange'>Mid</h3>
       <tbody>
         <tr>
           <td className='white'>Viktor</td>
           <td className='orange'>{viktorGames} games</td>
           <td className='white'>{viktorWR}%</td>
         </tr>
         <tr>
           <td className='white'>Orianna</td>
           <td className='orange'>{oriannaGames} games</td>
           <td className='white'>{oriannaWR}%</td>
         </tr>
         <tr>
           <td className='white'>Corki</td>
           <td className='orange'>{corkiGames} games</td>
           <td className='white'>{corkiWR}%</td>
         </tr>
         <tr>
           <td className='white'>Ahri</td>
           <td className='orange'>{ahriGames} games</td>
           <td className='white'>{ahriWR}%</td>
         </tr>
         <tr>
           <td className='white'>Galio</td>
           <td className='orange'>{galioGames} games</td>
           <td className='white'>{galioWR}%</td>
         </tr>
         <tr>
           <td className='white'>Vex</td>
           <td className='orange'>{vexGames} games</td>
           <td className='white'>{vexWR}%</td>
         </tr>
         <tr>
           <td className='white'>Sylas</td>
           <td className='orange'>{sylasGames} games</td>
           <td className='white'>{sylasWR}%</td>
         </tr>
         <tr>
           <td className='white'>Syndra</td>
           <td className='orange'>{syndraGames} games</td>
           <td className='white'>{syndraWR}%</td>
         </tr>
         <tr>
           <td className='white'>Akali</td>
           <td className='orange'>{akaliGames} games</td>
           <td className='white'>{akaliWR}%</td>
         </tr>
         <tr>
           <td className='white'>Yone</td>
           <td className='orange'>{yoneGames} games</td>
           <td className='white'>{yoneWR}%</td>
         </tr>         
         <tr>
           <td className='white'>Kassadin</td>
           <td className='orange'>{kassadinGames} games</td>
           <td className='white'>{kassadinWR}%</td>
         </tr>
         <tr>
           <td className='white'>Cassio</td>
           <td className='orange'>{cassioGames} games</td>
           <td className='white'>{cassioWR}%</td>
         </tr>
         <tr>
           <td className='white'>Wukong</td>
           <td className='orange'>{wukongGames} games</td>
           <td className='white'>{wukongWR}%</td>
         </tr>
         <tr>
           <td className='white'>Ekko</td>
           <td className='orange'>{ekkoGames} games</td>
           <td className='white'>{ekkoWR}%</td>
         </tr>         
         <tr>
           <td className='white'>TF</td>
           <td className='orange'>{tfGames} games</td>
           <td className='white'>{tfWR}%</td>
         </tr>         
         <tr>
           <td className='white'>Lux</td>
           <td className='orange'>{luxGames} games</td>
           <td className='white'>{luxWR}%</td>
         </tr>
         <tr>
           <td className='white'>Lissandra</td>
           <td className='orange'>{lissandraGames} games</td>
           <td className='white'>{lissandraWR}%</td>
         </tr>
         <tr>
           <td className='white'>Kayle</td>
           <td className='orange'>{kayleGames} games</td>
           <td className='white'>{kayleWR}%</td>
         </tr>
         <tr>
           <td className='white'>Jayce</td>
           <td className='orange'>{jayceGames} games</td>
           <td className='white'>{jayceWR}%</td>
         </tr><tr>
           <td className='white'>LeBlanc</td>
           <td className='orange'>{leblancGames} games</td>
           <td className='white'>{leblancWR}%</td>
         </tr>
         <tr>
           <td className='white'>Vladimir</td>
           <td className='orange'>{vladimirGames} games</td>
           <td className='white'>{vladimirWR}%</td>
         </tr>
         <tr>
           <td className='white'>Tristana</td>
           <td className='orange'>{tristanaGames} games</td>
           <td className='white'>{tristanaWR}%</td>
         </tr>
       </tbody>
     </table>
  </div>     
  )
}

export default MatchupsMid