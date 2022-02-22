import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import { Component, useState } from 'react'


import {Link, Outlet} from 'react-router-dom'

import Header from '../home/header'
import Footer from '../home/footer'

import './scrim.css'

const getTopScrim = 'http://localhost:5000/api/matchups/top/getAllScrim'
const getTopOtf1 = 'http://localhost:5000/api/matchups/top/getAllOtf1'
const getTopPrepaOtf2 = 'http://localhost:5000/api/matchups/top/getAllPrepaOtf2'



function Team () {

const [countGames, setCountGames] = useState()


let topPicks = []

axios.get(getTopScrim).then(res => {

for (let i = 0; i < res.data[0].length; i++) {
  topPicks.push(res.data[0][i].EPick1)
}

axios.get(getTopOtf1).then(res => {
  for(let i = 0; i < res.data[0].length; i++) {
    topPicks.push(res.data[0][i].EPick1)
  }

axios.get(getTopPrepaOtf2).then(res => {
  console.log(res.data)
  let test = []
  test.push(res.data)
  console.log(test)
  for(let i = 0; i < res.data[0].length; i++) {
    topPicks.push(res.data[0][i].EPick1)
  }
  console.log(topPicks)

  const count = {};

  for (const element of topPicks) {
    if (count[element]) {
      count[element] += 1;
    } else {
      count[element] = 1;
    }
  }
// setCountGames(count)
})
})
})



  return(
   <div>
     <Header />
     {/* <table>
       <tbody>
         <tr>
           <td>Akali</td>
           <td>{countGames.Akali} Games</td>
           <td>%win</td>
         </tr>
         <tr>
           <td>Ornn</td>
           <td>{countGames.Ornn} Games</td>
           <td>%win</td>
         </tr>
         <tr>
           <td>Ornn</td>
           <td>{countGames.Ornn} Games</td>
           <td>%win</td>
         </tr>
       </tbody>
     </table> */}
     <div className='navOTF'>
        <Button variant="warning"><Link to = "/team/prepaotf1">Prépa OTF1</Link></Button>
        <Button variant="warning"><Link to = "/team/otf1">OTF1</Link></Button>
        <Button variant="warning"><Link to = "/team/prepaotf2">Prépa OTF2</Link></Button>
      </div>
    <Footer />
    <Outlet />
  </div> 
  )
}

export default Team