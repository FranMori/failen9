import axios from 'axios'
import { useState } from 'react'

const getJglScrim = 'http://localhost:5000/api/matchups/jgl/getAllScrim'
const getJglOtf1 = 'http://localhost:5000/api/matchups/jgl/getAllOtf1'
const getJglPrepaOtf2 = 'http://localhost:5000/api/matchups/jgl/getAllPrepaOtf2'

const getWinJglScrim = 'http://localhost:5000/api/matchups/jgl/getWinScrim'
const getWinJglOtf1 = 'http://localhost:5000/api/matchups/jgl/getWinOtf1'
const getWinJglPrepaOtf2 = 'http://localhost:5000/api/matchups/jgl/getWinPrepaOtf2'

function MatchupsJgl()  {
  const [talonGames, setTalonGames] = useState()
  const [ekkoGames, setEkkoGames] = useState()
  const [dianaGames, setDianaGames] = useState ()
  const [sejuaniGames, setSejuaniGames] = useState ()
  const [jarvanGames, setJarvanGames] = useState ()
  const [volibearGames, setVolibearGames] = useState()
  const [viegoGames, setViegoGames] = useState()
  const [hecarimGames, setHecarimGames] = useState()
  const [leeSinGames, setLeeSinGames] = useState()
  const [xinZhaoGames, setXinZhaoGames] = useState()
  const [shyvanaGames, setShyvanaGames] = useState()
  const [qiyanaGames, setQiyanaGames] = useState()
  const [trundleGames, setTrundleGames] = useState()
  
  
  const [talonWins, setTalonWins] = useState()
  const [ekkoWins, setEkkoWins] = useState()
  const [dianaWins, setDianaWins] = useState ()
  const [sejuaniWins, setSejuaniWins] = useState ()
  const [jarvanWins, setJarvanWins] = useState ()
  const [volibearWins, setVolibearWins] = useState()
  const [viegoWins, setViegoWins] = useState()
  const [hecarimWins, setHecarimWins] = useState()
  const [leeSinWins, setLeeSinWins] = useState()
  const [xinZhaoWins, setXinZhaoWins] = useState()
  const [shyvanaWins, setShyvanaWins] = useState()
  const [qiyanaWins, setQiyanaWins] = useState()
  const [trundleWins, setTrundleWins] = useState()
  
  let jglPicks = []
  let jglWins = []
  
  // PICKS
  axios.get(getJglScrim).then(res => {
  for (let i = 0; i < res.data.length; i++) {
    jglPicks.push(res.data[i].EPick2)
  }
  
  axios.get(getJglOtf1).then(res => {
    for(let i = 0; i < res.data.length; i++) {
      jglPicks.push(res.data[i].EPick2)
    }
  
  axios.get(getJglPrepaOtf2).then(res => {
    for(let i = 0; i < res.data.length; i++) {
      jglPicks.push(res.data[i].EPick2)
    }
  function getOccurrence(array, value) {
    return array.filter((v) => (v === value)).length;
  }
  
  setTalonGames(getOccurrence(jglPicks, 'Talon'))
  setEkkoGames(getOccurrence(jglPicks, 'Ekko'))
  setDianaGames(getOccurrence(jglPicks, 'Diana'))
  setSejuaniGames(getOccurrence(jglPicks, 'Sejuani'))
  setJarvanGames(getOccurrence(jglPicks, 'Jarvan'))
  setVolibearGames(getOccurrence(jglPicks, 'Volibear'))
  setViegoGames(getOccurrence(jglPicks, 'Viego'))
  setHecarimGames(getOccurrence(jglPicks, 'Hecarim'))
  setXinZhaoGames(getOccurrence(jglPicks, 'Xin Zhao'))
  setLeeSinGames(getOccurrence(jglPicks, "Lee Sin"))
  setShyvanaGames(getOccurrence(jglPicks, 'Shyvana'))
  setQiyanaGames(getOccurrence(jglPicks, 'Qiyana'))
  setTrundleGames(getOccurrence(jglPicks, 'Trundle'))
  
  })
  })
  })
  
  // WINS
  axios.get(getWinJglScrim).then(res => {
    for (let i = 0; i < res.data.length; i++) {
      jglWins.push(res.data[i].EPick2)
    }
    
    axios.get(getWinJglOtf1).then(res => {
      for(let i = 0; i < res.data.length; i++) {
        jglWins.push(res.data[i].EPick2)
      }
    
    axios.get(getWinJglPrepaOtf2).then(res => {
      for(let i = 0; i < res.data.length; i++) {
        jglWins.push(res.data[i].EPick2)
      }
    function getOccurrence(array, value) {
      return array.filter((v) => (v === value)).length;
    }

  setTalonWins(getOccurrence(jglWins, 'Talon'))
  setEkkoWins(getOccurrence(jglWins, 'Ekko'))
  setDianaWins(getOccurrence(jglWins, 'Diana'))
  setSejuaniWins(getOccurrence(jglWins, 'Sejuani'))
  setJarvanWins(getOccurrence(jglWins, 'Jarvan'))
  setVolibearWins(getOccurrence(jglWins, 'Volibear'))
  setViegoWins(getOccurrence(jglWins, 'Viego'))
  setHecarimWins(getOccurrence(jglWins, 'Hecarim'))
  setXinZhaoWins(getOccurrence(jglWins, 'Xin Zhao'))
  setLeeSinWins(getOccurrence(jglWins, "Lee Sin"))
  setShyvanaWins(getOccurrence(jglWins, 'Shyvana'))
  setQiyanaWins(getOccurrence(jglWins, 'Siyana'))
  setTrundleWins(getOccurrence(jglWins, 'Trundle'))
    })
    })
    })
    let talonWR = ((talonWins / talonGames) * 100).toFixed(2)
    let ekkoWR = ((ekkoWins / ekkoGames) * 100).toFixed(2)
    let dianaWR = ((dianaWins / dianaGames)*100).toFixed(2)
    let sejuaniWR = ((sejuaniWins / sejuaniGames) * 100).toFixed(2)
    let jarvanWR = ((jarvanWins / jarvanGames) * 100).toFixed(2)
    let volibearWR = ((volibearWins /volibearGames)*100).toFixed(2)
    let viegoWR = ((viegoWins / viegoGames) * 100).toFixed(2)
    let hecarimWR = ((hecarimWins / hecarimGames) * 100).toFixed(2)
    let leeSinWR = ((leeSinWins / leeSinGames) * 100).toFixed(2)
    let xinZhaoWR = ((xinZhaoWins / xinZhaoGames) * 100).toFixed(2)
    let shyvanaWR = ((shyvanaWins / shyvanaGames) * 100).toFixed(2)
    let qiyanaWR = ((qiyanaWins / qiyanaGames) * 100).toFixed(2)
    let trundleWR = ((trundleWins / trundleGames) * 100).toFixed(2)
    

  return (
  <div>
     <table>
       <h3 className='orange'>Jungle</h3>
       <tbody>
         <tr>
           <td className='white'>Xin Zhao</td>
           <td className='orange'>{xinZhaoGames} games</td>
           <td className='white'>{xinZhaoWR}%</td>
         </tr>
         <tr>
           <td className='white'>Lee Sin</td>
           <td className='orange'>{leeSinGames} games</td>
           <td className='white'>{leeSinWR}%</td>
         </tr>
         <tr>
           <td className='white'>Volibear</td>
           <td className='orange'>{volibearGames} games</td>
           <td className='white'>{volibearWR}%</td>
         </tr>
         <tr>
           <td className='white'>Jarvan</td>
           <td className='orange'>{jarvanGames} games</td>
           <td className='white'>{jarvanWR}%</td>
         </tr>
         <tr>
           <td className='white'>Viego</td>
           <td className='orange'>{viegoGames} games</td>
           <td className='white'>{viegoWR}%</td>
         </tr>
         <tr>
           <td className='white'>Heacarim</td>
           <td className='orange'>{hecarimGames} games</td>
           <td className='white'>{hecarimWR}%</td>
         </tr>
         <tr>
           <td className='white'>Talon</td>
           <td className='orange'>{talonGames} games</td>
           <td className='white'>{talonWR}%</td>
         </tr>
         <tr>
           <td className='white'>Qiyana</td>
           <td className='orange'>{qiyanaGames} games</td>
           <td className='white'>{qiyanaWR}%</td>
         </tr>
         <tr>
           <td className='white'>Ekko</td>
           <td className='orange'>{ekkoGames} games</td>
           <td className='white'>{ekkoWR}%</td>
         </tr>
         <tr>
           <td className='white'>Diana</td>
           <td className='orange'>{dianaGames} games</td>
           <td className='white'>{dianaWR}%</td>
         </tr>
         <tr>
           <td className='white'>Sejuani</td>
           <td className='orange'>{sejuaniGames} games</td>
           <td className='white'>{sejuaniWR}%</td>
         </tr>
         <tr>
           <td className='white'>Shyvana</td>
           <td className='orange'>{shyvanaGames} games</td>
           <td className='white'>{shyvanaWR}%</td>
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

export default MatchupsJgl