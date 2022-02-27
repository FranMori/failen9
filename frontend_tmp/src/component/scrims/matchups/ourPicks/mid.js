import axios from 'axios'
import { useState } from 'react'

const getMidScrim = 'http://localhost:5000/api/matchups/mid/getAllScrim'
const getMidOtf1 = 'http://localhost:5000/api/matchups/mid/getAllOtf1'
const getMidPrepaOtf2 = 'http://localhost:5000/api/matchups/mid/getAllPrepaOtf2'

const getWinMidScrim = 'http://localhost:5000/api/matchups/mid/getWinScrim'
const getWinMidOtf1 = 'http://localhost:5000/api/matchups/mid/getWinOtf1'
const getWinMidPrepaOtf2 = 'http://localhost:5000/api/matchups/mid/getWinPrepaOtf2'

function MatchupsOurMid()  {
  const [yoneGames, setYoneGames] = useState()
  const [kassadinGames, setKassadinGames] = useState ()
  const [syndraGames, setSyndraGames] = useState()
  const [akaliGames, setAkaliGames] = useState()
  const [gravesGames, setGravesGames] = useState ()
  const [ireliaGames, setIreliaGames] = useState()
  const [qiyanaGames, setQiyanaGames] = useState()
  const [azirGames, setAzirGames] = useState()
  const [veigarGames, setVeigarGames] = useState()
  const [leblancGames, setLeblancGames] = useState()
  const [ryzeGames, setRyzeGames] = useState()
  const [xerathGames, setXerathGames] = useState()

  const [yoneWins, setYoneWins] = useState()
  const [syndraWins, setSyndraWins] = useState()
  const [akaliWins, setAkaliWins] = useState()
  const [kassadinWins, setKassadinWins] = useState()
  const [gravesWins, setGravesWins] = useState ()
  const [ireliaWins, setIreliaWins] = useState()
  const [qiyanaWins, setQiyanaWins] = useState()
  const [azirWins, setAzirWins] = useState()
  const [veigarWins, setVeigarWins] = useState()
  const [leblancWins, setLeblancWins] = useState()
  const [ryzeWins, setRyzeWins] = useState()
  const [xerathWins, setXerathWins] = useState()

  
  let midPicks = []
  let midWins = []
  console.log(midPicks)
  // PICKS
  axios.get(getMidScrim).then(res => {
  for (let i = 0; i < res.data.length; i++) {
    midPicks.push(res.data[i].Pick3)
  }
  
  axios.get(getMidOtf1).then(res => {
    for(let i = 0; i < res.data.length; i++) {
      midPicks.push(res.data[i].Pick3)
    }
  
  axios.get(getMidPrepaOtf2).then(res => {
    for(let i = 0; i < res.data.length; i++) {
      midPicks.push(res.data[i].Pick3)
    }
  function getOccurrence(array, value) {
    return array.filter((v) => (v === value)).length;
  }
  
  setYoneGames(getOccurrence(midPicks, 'Yone'))
  setKassadinGames(getOccurrence(midPicks, 'Kassadin'))
  setAkaliGames(getOccurrence(midPicks, 'Akali'))
  setSyndraGames(getOccurrence(midPicks, 'Syndra'))
  setLeblancGames(getOccurrence(midPicks, 'Leblanc'))
  setGravesGames(getOccurrence(midPicks, 'Graves'))
  setIreliaGames(getOccurrence(midPicks, 'Irelia'))
  setQiyanaGames(getOccurrence(midPicks, 'Qiyana'))
  setAzirGames(getOccurrence(midPicks, 'Azir'))
  setVeigarGames(getOccurrence(midPicks, 'Veigar'))
  setRyzeGames(getOccurrence(midPicks, 'Ryze'))
  setXerathGames(getOccurrence(midPicks, 'Xerath'))

  })
  })
  })
  
  // WINS
  axios.get(getWinMidScrim).then(res => {
    for (let i = 0; i < res.data.length; i++) {
      midWins.push(res.data[i].Pick3)
    }
    
    axios.get(getWinMidOtf1).then(res => {
      for(let i = 0; i < res.data.length; i++) {
        midWins.push(res.data[i].Pick3)
      }
    
    axios.get(getWinMidPrepaOtf2).then(res => {
      for(let i = 0; i < res.data.length; i++) {
        midWins.push(res.data[i].Pick3)
      }
    function getOccurrence(array, value) {
      return array.filter((v) => (v === value)).length;
    }
    
    setYoneWins(getOccurrence(midWins, 'Yone'))
    setKassadinWins(getOccurrence(midWins, 'Kassadin'))
    setAkaliWins(getOccurrence(midWins, 'Akali'))
    setSyndraWins(getOccurrence(midWins, 'Syndra'))
    setLeblancWins(getOccurrence(midWins, 'Leblanc'))
    setGravesWins(getOccurrence(midWins, 'Graves'))
    setIreliaWins(getOccurrence(midWins, 'Irelia'))
    setQiyanaWins(getOccurrence(midWins, 'Qiyana'))
    setAzirWins(getOccurrence(midWins, 'Azir'))
    setVeigarWins(getOccurrence(midWins, 'Veigar'))
    setRyzeWins(getOccurrence(midWins, 'Ryze'))
    setXerathWins(getOccurrence(midWins, 'Xerath'))
    })
    })
    })
    let yoneWR = ((yoneWins / yoneGames) * 100).toFixed(2)
    let kassadinWR = ((kassadinWins / kassadinGames) * 100).toFixed(2)
    let akaliWR = ((akaliWins / akaliGames) * 100).toFixed(2)
    let syndraWR = ((syndraWins / syndraGames) * 100).toFixed(2)
    let leblancWR = ((leblancWins / leblancGames) * 100).toFixed(2)
    let gravesWR = ((gravesWins / gravesGames) * 100).toFixed(2)
    let qiyanaWR = ((qiyanaWins / qiyanaGames) * 100).toFixed(2)
    let ireliaWR = ((ireliaWins / ireliaGames) * 100).toFixed(2)
    let veigarWR = ((veigarWins / veigarGames) * 100).toFixed(2)
    let azirWR = ((azirWins / azirGames) * 100).toFixed(2)
    let ryzeWR = ((ryzeWins / ryzeGames) * 100).toFixed(2)
    let xerathWR = ((xerathWins / xerathGames) * 100).toFixed(2)









  return (
  <div>
     <table>
       <h3 className='orange'>Mid</h3>
       <tbody>
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
           <td className='white'>Ryze</td>
           <td className='orange'>{ryzeGames} games</td>
           <td className='white'>{ryzeWR}%</td>
         </tr>
         <tr>
           <td className='white'>Graves</td>
           <td className='orange'>{gravesGames} games</td>
           <td className='white'>{gravesWR}%</td>
         </tr>
         <tr>
           <td className='white'>Veigar</td>
           <td className='orange'>{veigarGames} games</td>
           <td className='white'>{veigarWR}%</td>
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
           <td className='white'>LeBlanc</td>
           <td className='orange'>{leblancGames} games</td>
           <td className='white'>{leblancWR}%</td>
         </tr>
         <tr>
           <td className='white'>Qiyana</td>
           <td className='orange'>{qiyanaGames} games</td>
           <td className='white'>{qiyanaWR}%</td>
         </tr>
         <tr>
           <td className='white'>Irelia</td>
           <td className='orange'>{ireliaGames} games</td>
           <td className='white'>{ireliaWR}%</td>
         </tr>
         <tr>
           <td className='white'>Azir</td>
           <td className='orange'>{azirGames} games</td>
           <td className='white'>{azirWR}%</td>
         </tr>
         <tr>
           <td className='white'>Xerath</td>
           <td className='orange'>{xerathGames} games</td>
           <td className='white'>{xerathWR}%</td>
         </tr>
       </tbody>
     </table>
  </div>     
  )
}

export default MatchupsOurMid