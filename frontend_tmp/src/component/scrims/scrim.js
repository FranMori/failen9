import { Component, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import axios from 'axios'

import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button'

import './scrim.css'

import Header from '../home/header'
import Footer from '../home/footer'

const getAll = 'http://localhost:5000/api/scrim/getAll'
const getBlue = 'http://localhost:5000/api/scrim/getBlue'
const getRed = 'http://localhost:5000/api/scrim/getRed'


const getWinrate = 'http://localhost:5000/api/scrim/getWinrate'
const getWinrateBlue = 'http://localhost:5000/api/scrim/getWinrateBlue'
const getWinrateRed = 'http://localhost:5000/api/scrim/getWinrateRed'

const getDrake = 'http://localhost:5000/api/scrim/getDrake'
const getDrakeBlue = 'http://localhost:5000/api/scrim/getDrakeBlue'
const getDrakeRed = 'http://localhost:5000/api/scrim/getDrakeRed'


const getHerald = 'http://localhost:5000/api/scrim/getHerald'
const getHeraldBlue = 'http://localhost:5000/api/scrim/getHeraldBlue'
const getHeraldRed = 'http://localhost:5000/api/scrim/getHeraldRed'


  export function ScrimStats() {
  const [winrate, setWinrate] = useState()
  const [winrateBlue, setWinrateBlue] = useState()
  const [winrateRed, setWinrateRed] = useState()

  const [drake, setDrake] = useState()
  const [drakeBlue, setDrakeBlue] = useState()
  const [drakeRed, setDrakeRed] = useState()

  const [herald, setHerald] = useState()
  const [heraldBlue, setHeraldBlue] = useState()
  const [heraldRed, setHeraldRed] = useState()

axios.get(getAll).then (res => {
  let kills = ((res.data[0].KDA1).split("/")[2])
  console.log(kills)
  let games = res.data.length
  axios.get(getWinrate).then(res => {
    let wins = res.data
    let percentage = ((wins / games) * 100).toFixed(2)
    if (percentage) {
      setWinrate(percentage)
    }
    axios.get(getWinrateBlue).then(res => {
      let winsBlue = res.data
      axios.get(getBlue).then(res => {
        let gamesBlue = res.data
        let percentageBlue = ((winsBlue / gamesBlue) * 100).toFixed(2)
      if (percentageBlue) {
        setWinrateBlue(percentageBlue)
      }
      })
      
    })
    axios.get(getWinrateRed).then(res => {
      let winsRed = res.data
      axios.get(getRed).then(res => {
        let gamesRed = res.data
        let percentageRed = ((winsRed / gamesRed) * 100).toFixed(2)
      if (percentageRed) {
        setWinrateRed(percentageRed)
      }
      })
      
    })
    axios.get(getDrake).then(res => {
      let drake = res.data
      let percentageDrake = ((drake / games) * 100).toFixed(2)
      if (percentageDrake) {
        setDrake(percentageDrake)
      }
    })
    axios.get(getDrakeBlue).then(res => {
      let drakeBlue = res.data
      axios.get(getBlue).then(res => {
        let gamesBlue = res.data
        let percentageDrakeBlue = ((drakeBlue / gamesBlue) * 100).toFixed(2)
      if (percentageDrakeBlue) {
        setDrakeBlue(percentageDrakeBlue)
      }
      })
      
    })
    axios.get(getDrakeRed).then(res => {
      let drakeRed = res.data
      axios.get(getRed).then(res => {
        let gamesRed = res.data
        let percentageDrakeRed = ((drakeRed / gamesRed) * 100).toFixed(2)
      if (percentageDrakeRed) {
        setDrakeRed(percentageDrakeRed)
      }
      })
      
    })
    axios.get(getHerald).then(res => {
      let herald = res.data
      let percentageHerald = ((herald / games) * 100).toFixed(2)
      if (percentageHerald) {
        setHerald(percentageHerald)
      }
    })
    axios.get(getHeraldBlue).then(res => {
      let HeraldBlue = res.data
      axios.get(getBlue).then(res => {
        let gamesBlue = res.data
        let percentageHeraldBlue = ((HeraldBlue / gamesBlue) * 100).toFixed(2)
      if (percentageHeraldBlue) {
        setHeraldBlue(percentageHeraldBlue)
      }
      })
      
    })
    axios.get(getHeraldRed).then(res => {
      let heraldRed = res.data
      axios.get(getRed).then(res => {
        let gamesRed = res.data
        let percentageHeraldRed = ((heraldRed / gamesRed) * 100).toFixed(2)
      if (percentageHeraldRed) {
        setHeraldRed(percentageHeraldRed)
      }
      })
      
    })
  })
})


  return(
    <div className='scrimStats'>
    <div className='winrate'>
      <div>Winrate Global : {winrate}% </div>
      <div>Winrate Blueside : {winrateBlue}%</div> 
      <div>Winrate Redside : {winrateRed}%</div>
    </div>
  <div className='drake'>
   <div>First Drake gagné : {drake}% </div> 
    <div>First Drake gagné Blueside : {drakeBlue}% </div>
    <div>First Drake gagné Redside : {drakeRed}% </div>
  </div>
  <div className='herald'>
  <div>First Herald gagné : {herald}% </div> 
    <div>First Herald gagné Blueside : {heraldBlue}% </div>
    <div>First Herald gagné Redside : {heraldRed}% </div>
  </div>
</div>    
)
  

}


class Scrim extends Component {
  state = {
    scrimList: [],
  }

 constructor() {
   super()
  axios.get(getAll).then(res => {
    this.setState({scrimList : res.data})
    
  })
  
 }

 render() {
   return (
<div className='scrim'>
      <Header />
      <h1 className='titrePeriode'>Prépa OTF1</h1>

      <nav>

        <Button variant="warning"><Link to = "/team/prepaotf1/top">Top</Link></Button>
        <Button variant="warning"><Link to = "/team/prepaotf1/jungle">Jungle</Link></Button>
        <Button variant="warning"><Link to = "/team/prepaotf1/mid">Mid</Link></Button>
        <Button variant="warning"><Link to = "/team/prepaotf1/adc">Adc</Link></Button>
        <Button variant="warning"><Link to = "/team/prepaotf1/support">Support</Link></Button>
        <Outlet />
      </nav>
      <ScrimStats />
      
     
      
     <div className='coreScrim'>
     {this.state.scrimList.map((val, key) => {
            let minutes = parseInt((val.Duration).split(":")[0])
            let csMin1 = (val.CS1 / minutes).toFixed(2)
            let csMin2 = (val.CS2 / minutes).toFixed(2)
            let csMin3 = (val.CS3 / minutes).toFixed(2)
            let csMin4 = (val.CS4 / minutes).toFixed(2)
            let csMin5 = (val.CS5 / minutes).toFixed(2)

            let degatsTot = (val.Degat1 + val.Degat2 + val.Degat3 + val.Degat4 + val.Degat5)
            let degatPercentage1 = ((val.Degat1 / degatsTot) * 100).toFixed(2)
            let degatPercentage2 = ((val.Degat2 / degatsTot) * 100).toFixed(2)
            let degatPercentage3 = ((val.Degat3 / degatsTot) * 100).toFixed(2)
            let degatPercentage4 = ((val.Degat4 / degatsTot) * 100).toFixed(2)
            let degatPercentage5 = ((val.Degat5 / degatsTot) * 100).toFixed(2)

            let goldTot = (val.Gold1 + val.Gold2 + val.Gold3 + val.Gold4 + val.Gold5)

            let goldPercentage1 = ((val.Gold1 / goldTot) *100).toFixed(2)
            let goldPercentage2 = ((val.Gold2 / goldTot) *100).toFixed(2)
            let goldPercentage3 = ((val.Gold3 / goldTot) *100).toFixed(2)
            let goldPercentage4 = ((val.Gold4 / goldTot) *100).toFixed(2)
            let goldPercentage5 = ((val.Gold5 / goldTot) *100).toFixed(2)
    

            return <div className='tableScrim' key={val.id}> 
            <table>
            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td className='orange'>Our Bans</td>
                <td className='white'>Our Picks</td>
                <td className='orange'>KDA</td>
                <td className='white'>CS/min</td>
                <td className='orange'>%Dégats/Team</td>
                <td className='white'>%Gold/Team</td>
                <td className='orange'>Gold Diff @8min</td>
                <td className='white'>@14min</td>
                <td className='orange'>@22min</td>
                <td className='white'>Total</td>
                <td className='orange'>Pinks achetées</td>
                <td className='white'> Their Picks</td>
                <td className='orange'>Their Bans</td>
              </tr>
              <tr>
                  <td className='white'>Date</td>
                  <td className='white'>{val.Date}</td>
                  <td className='orange'>{val.Ban1}</td>
                  <td className='white'>{val.Pick1}</td>
                  <td  className='orange'>{val.KDA1}</td>
                  <td className='white'>{csMin1}</td>
                  <td className='orange'>{degatPercentage1}%</td>
                  <td className='white'>{goldPercentage1}%</td>
                  <td className='orange'>{val.GoldDiff1_8}</td>
                  <td className='white'>{val.GoldDiff1_14}</td>
                  <td className='orange'>{val.GoldDiff1_22}</td>
                  <td className='white'>{val.GoldDiff1}</td>
                  <td  className='orange'>{val.Pink1}</td>
                  <td className='white'>{val.EPick1}</td>
                  <td  className='orange'>{val.EBan1}</td>
              </tr>
              <tr>
                  <td className='white'>Enemy Team</td>
                  <td  className='white'>{val.enemyTeam}</td>
                  <td className='orange'>{val.Ban2}</td>
                  <td  className='white'>{val.Pick2}</td>
                  <td className='orange'>{val.KDA2}</td>
                  <td className='white'>{csMin2}</td>
                  <td className='orange'>{degatPercentage2}%</td>
                  <td className='white'>{goldPercentage2}%</td>
                  <td className='orange'>{val.GoldDiff2_8}</td>
                  <td className='white'>{val.GoldDiff2_14}</td>
                  <td className='orange'>{val.GoldDiff2_22}</td>
                  <td  className='white'>{val.GoldDiff2}</td>
                  <td className='orange'>{val.Pink2}</td>
                  <td  className='white'>{val.EPick2}</td>
                  <td className='orange'>{val.EBan2}</td>
              </tr>
              <tr>
                  <td className='white'>Side</td>
                  <td className='white'>{val.Side}</td>
                  <td className='orange'>{val.Ban3}</td>
                  <td className='white'>{val.Pick3}</td>
                  <td className='orange'>{val.KDA3}</td>
                  <td className='white'>{csMin3}</td>
                  <td className='orange'>{degatPercentage3}%</td>
                  <td className='white'>{goldPercentage3}%</td>
                  <td className='orange'>{val.GoldDiff3_8}</td>
                  <td className='white'>{val.GoldDiff3_14}</td>
                  <td className='orange'>{val.GoldDiff3_22}</td>
                  <td className='white'>{val.GoldDiff3}</td>
                  <td className='orange'>{val.Pink3}</td>
                  <td className='white'>{val.EPick3}</td>
                  <td className='orange'> {val.EBan3}</td>
              </tr>
              <tr>
                  <td className='white'>Duration</td>
                  <td className='white' >{val.Duration}</td>
                  <td className='orange'>{val.Ban4}</td>
                  <td className='white'>{val.Pick4}</td>
                  <td className='orange'>{val.KDA4}</td>
                  <td className='white'>{csMin4}</td>
                  <td className='orange'>{degatPercentage4}%</td>
                  <td className='white'>{goldPercentage4}%</td>
                  <td className='orange'>{val.GoldDiff4_8}</td>
                  <td className='white'>{val.GoldDiff4_14}</td>
                  <td className='orange'>{val.GoldDiff4_22}</td>
                  <td className='white'>{val.GoldDiff4}</td>
                  <td className='orange'>{val.Pink4}</td>
                  <td className='white'>{val.EPick4}</td>
                  <td className='orange'>{val.EBan4}</td>
              </tr>
              <tr>
                  <td className='white'>Result</td>
                  <td className='white'>{val.Result}</td>
                  <td className='orange'>{val.Ban5}</td>
                  <td className='white'>{val.Pick5}</td>
                  <td className='orange'>{val.KDA5}</td>
                  <td className='white'>{csMin5}</td>
                  <td className='orange'>{degatPercentage5}%</td>
                  <td className='white'>{goldPercentage5}%</td>
                  <td className='orange'>{val.GoldDiff5_8}</td>
                  <td className='white'>{val.GoldDiff5_14}</td>
                  <td className='orange'>{val.GoldDiff5_22}</td>
                  <td className='white'>{val.GoldDiff5}</td>
                  <td className='orange'>{val.Pink5}</td>
                  <td className='white'>{val.EPick5}</td>
                  <td className='orange'>{val.EBan5}</td>
              </tr>
              </tbody>      
            </table>
          </div>
          })}
     </div>
     <Footer />
    </div>
   )
 }
}



export default Scrim