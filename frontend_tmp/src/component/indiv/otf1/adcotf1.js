import { useState } from 'react'
import axios from 'axios'

import { Link, Outlet } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button'

import Header from '../../home/header'
import Footer from '../../home/footer'

const getAll = 'http://localhost:5000/api/team/otf1/getAll'


function StatsOtf1Adc () {

  const [kda, setKda] = useState()
  const [cs, setCs] =  useState(0)
  const [degats, setDegats] =  useState(0)
  const [gold, setGold] =  useState(0)
  const [goldDiff, setgoldDiff] =  useState(0)
  const [pinks, setPinks] = useState(0)
  const [vision, setVision] = useState(0)



axios.get(getAll).then (res => {
  let games = res.data.length
    let killsTot = 0
    let deathsTot = 0
    let assistsTot = 0
    let csMin = 0
    let percentageDegatTot = 0
    let percentageGoldTot = 0
    let GoldDiffTot = 0
    let pinksTot  = 0
    let visionTot = 0

  for (let i = 0; i < games; i++) {
    // KDA
    let kills = parseInt(((res.data[i]).KDA4).split("/")[0])
    let deaths = parseInt(((res.data[i]).KDA4).split("/")[1])
    let assists = parseInt(((res.data[i]).KDA4).split("/")[2])

    killsTot += kills
    deathsTot += deaths
    assistsTot += assists
    // cs
     let cs = ((res.data[i]).CS4)
    csMin += cs
    // dégats
    let degatTop = ((res.data[i]).Degat4)
    let degatTot = ((res.data[i]).Degat1) + ((res.data[i]).Degat2) + ((res.data[i]).Degat3) + ((res.data[i]).Degat4) + ((res.data[i]).Degat5)
    let percentageDegat = (degatTop/degatTot)*100
    percentageDegatTot += percentageDegat
    // gold
    let goldTop = ((res.data[i]).Gold4)
    let goldTot = ((res.data[i]).Gold1) + ((res.data[i]).Gold2) + ((res.data[i]).Gold3) + ((res.data[i]).Gold4) + ((res.data[i]).Gold5)
    let percentageGold = (goldTop/goldTot)*100
    percentageGoldTot += percentageGold

    // Gold Diff Tot
    let goldDiff = parseInt(((res.data[i]).GoldDiff4))
    GoldDiffTot += goldDiff

    // Pinks
    let pinks = ((res.data[i]).Pink4)
    let minutes = parseInt(((res.data[i]).Duration).split(":")[0])
    pinksTot += (pinks/minutes)
    // Vision
    let vision = ((res.data[i].Vision4))
    visionTot += (vision/minutes)


  }
  let csMinTot = (csMin/games ).toFixed(2)
  let degats = (percentageDegatTot/games).toFixed(2)
  let golds = (percentageGoldTot/games).toFixed(2)
  let goldDiff = (GoldDiffTot / games).toFixed(2)
  let pink = (pinksTot / games).toFixed(2)
  let KDA = (((killsTot / games).toFixed(2) )+ "/" + ((deathsTot /games).toFixed(2)) + "/" +  ((assistsTot / games).toFixed(2)))
  let visionScore = (visionTot/games).toFixed(2)


  setCs(csMinTot)
  setDegats(degats)
  setGold(golds)
  setgoldDiff(goldDiff)
  setPinks(pink)
  setKda(KDA)
  setVision(visionScore)




})

  return ( 
  <div>
    <Header />
    <div className='statsIndiv'>
    <h1>Arkadia OTF1</h1>
      <table>
        <tbody>
          <tr>
            <td className='orange'>CS/min</td>
            <td className='white'>%Dégats/Team</td>
            <td className='orange'>%Gold/Team</td>
            <td className='white'>Gold Diff Total</td>
            <td className='orange'>Pinks achetées</td>
            <td className='orange'>Vision Score</td>
            <td className='white'>KDA</td>

          </tr>
          <tr>
            <td className='orange'>{cs}</td>
            <td className='white'> {degats}% </td>
            <td className='orange'> {gold}% </td>
            <td className='white'> {goldDiff} </td>
            <td className='orange'> {pinks} </td>
            <td className='white'> {vision} </td>
            <td className='orange'>{kda}</td>


          </tr>
          </tbody>
          </table>  
          <Link to={'/team/prepaotf1'}><Button variant='warning' >Retour</Button></Link>
        <Outlet />
      </div>
    <Footer />
  </div>
  )
}

export default StatsOtf1Adc