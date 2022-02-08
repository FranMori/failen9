import { useState } from 'react'
import axios from 'axios'

import { Link, Outlet } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button'

import Header from '../../home/header'
import Footer from '../../home/footer'

const getAll = 'http://localhost:5000/api/team/prepaotf2/getAll'


function StatsPrepaotf2Support () {

  const [kda, setKda] = useState()
  const [cs, setCs] =  useState()
  const [degats, setDegats] =  useState()
  const [gold, setGold] =  useState()
  const [goldDiff_8, setgoldDiff_8] =  useState()
  const [goldDiff_14, setgoldDiff_14] =  useState()
  const [goldDiff_22, setgoldDiff_22] =  useState()
  const [goldDiff, setgoldDiff] =  useState()
  const [pinks, setPinks] = useState()



axios.get(getAll).then (res => {
  let games = res.data.length
    let killsTot = 0
    let deathsTot = 0
    let assistsTot = 0
    let csMin = 0
    let percentageDegatTot = 0
    let percentageGoldTot = 0
    let GoldDiff_8Tot = 0
    let GoldDiff_14Tot = 0
    let GoldDiff_22Tot = 0
    let GoldDiffTot = 0
    let pinksTot  = 0

  for (let i = 0; i < games; i++) {
    // KDA
    let kills = parseInt(((res.data[i]).KDA5).split("/")[0])
    let deaths = parseInt(((res.data[i]).KDA5).split("/")[1])
    let assists = parseInt(((res.data[i]).KDA5).split("/")[2])

    killsTot += kills
    deathsTot += deaths
    assistsTot += assists

    // cs
     let cs = ((res.data[i]).CS5)
     let minutes = parseInt(((res.data[i]).Duration).split(":")[0])
    csMin += (cs/minutes)
    // dégats
    let degatTop = ((res.data[i]).Degat5)
    let degatTot = ((res.data[i]).Degat1) + ((res.data[i]).Degat2) + ((res.data[i]).Degat3) + ((res.data[i]).Degat4) + ((res.data[i]).Degat5)
    let percentageDegat = (degatTop/degatTot)*100
    percentageDegatTot += percentageDegat
    // gold
    let goldTop = ((res.data[i]).Gold5)
    let goldTot = ((res.data[i]).Gold1) + ((res.data[i]).Gold2) + ((res.data[i]).Gold3) + ((res.data[i]).Gold4) + ((res.data[i]).Gold5)
    let percentageGold = (goldTop/goldTot)*100
    percentageGoldTot += percentageGold
    // Gold Diff @ 8
    let goldDiff_8 = parseInt(((res.data[i]).GoldDiff5_8))
    GoldDiff_8Tot += goldDiff_8
    // Gold Diff @ 14
    let goldDiff_14 = parseInt(((res.data[i]).GoldDiff5_14))
    GoldDiff_14Tot += goldDiff_14
    // Gold Diff @ 22
    let goldDiff_22 = parseInt(((res.data[i]).GoldDiff5_22))
    GoldDiff_22Tot += goldDiff_22
    // Gold Diff Tot
    let goldDiff = parseInt(((res.data[i]).GoldDiff5))
    GoldDiffTot += goldDiff

    // Pinks
    let pinks = ((res.data[i]).Pink5)
    pinksTot += (pinks/minutes)
  }
  let csMinTot = (csMin/games ).toFixed(2)
  let degats = (percentageDegatTot/games).toFixed(2)
  let golds = (percentageGoldTot/games).toFixed(2)
  let goldDiff8 = (GoldDiff_8Tot / games).toFixed(2)
  let goldDiff14 = (GoldDiff_14Tot / games).toFixed(2)
  let goldDiff22 = (GoldDiff_22Tot / games).toFixed(2)
  let goldDiff = (GoldDiffTot / games).toFixed(2)
  let pink = (pinksTot / games).toFixed(2)
  let KDA = (((killsTot / games).toFixed(2) )+ "/" + ((deathsTot /games).toFixed(2)) + "/" +  ((assistsTot / games).toFixed(2)))

  setCs(csMinTot)
  setDegats(degats)
  setGold(golds)
  setgoldDiff_8(goldDiff8)
  setgoldDiff_14(goldDiff14)
  setgoldDiff_22(goldDiff22)
  setgoldDiff(goldDiff)
  setPinks(pink)
  setKda(KDA)




})

  return ( 
    <div>
    <Header />
    <div className='statsIndiv'>
      <h1>Nayas Prépa OTF2</h1>
      <table>
        <tbody>
          <tr>
            <td className='orange'>CS/min</td>
            <td className='white'>%Dégats/Team</td>
            <td className='orange'>%Gold/Team</td>
            <td className='white'>Gold Diff @8min</td>
            <td className='orange'>@14min</td>
            <td className='white'>@22min</td>
            <td className='orange'>Total</td>
            <td className='white'>Pinks achetées</td>
            <td className='orange'>KDA</td>
          </tr>
          <tr>
            <td className='orange'>{cs}</td>
            <td className='white'> {degats}% </td>
            <td className='orange'> {gold}% </td>
            <td className='white'> {goldDiff_8} </td>
            <td className='orange'> {goldDiff_14} </td>
            <td className='white'> {goldDiff_22} </td>
            <td className='orange'> {goldDiff} </td>
            <td className='white'> {pinks} </td>
            <td className='orange'>{kda}</td>

          </tr>
          </tbody>
          </table>  
        <Link to={'/team/prepaotf2'}><Button variant='warning' >Retour</Button></Link>
        <Outlet />
      </div>
    <Footer />
  </div>
  )
}

export default StatsPrepaotf2Support