import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button'
import axios from 'axios'

import {Link, Outlet} from 'react-router-dom'

import Header from '../home/header'
import Footer from '../home/footer'

import './scrim.css'

const getTopScrim = 'http://localhost:5000/api/matchups/top/getAllScrim'
const getTopOtf1 = 'http://localhost:5000/api/matchups/top/getAllOtf1'
const getTopPrepaOtf2 = 'http://localhost:5000/api/matchups/top/getAllPrepaOtf2'



function Team () {

let topPicks = []
axios.get(getTopScrim).then(res => {

for (let i = 0; i < res.data[0].length; i++) {
  topPicks.push(res.data[0][i].EPick1)
}
})
// axios.get(getTopOtf1).then(res => {
//   for(let i = 0; i < res.data[0].length; i++) {
//     topPicks.push(res.data[0][i].EPick1)
//   }
// })
// axios.get(getTopPrepaOtf2).then(res => {
//   for(let i = 0; i < res.data[0].length; i++) {
//     topPicks.push(res.data[0][i].EPick1)
//   }
// })

function getOccurrence(array, value) {
  return array.filter((v) => (v === value)).length;
}
console.log(topPicks)

let ornnScrimGames = getOccurrence(topPicks, 'Ornn')
let camilleScrimGames = getOccurrence(topPicks, 'Camille')
let jayceScrimGames = getOccurrence(topPicks, 'Jayce')
let shenScrimgames = getOccurrence(topPicks, 'Shen')
let kennenScrimGames = getOccurrence(topPicks, 'Kennen')
let renektonScrimGames = getOccurrence(topPicks, 'Renekton')
let ireliaScrimGames = getOccurrence(topPicks, 'Irelia')
let akaliScrimGames = getOccurrence(topPicks, 'Akali')
let gnarGames = getOccurrence(topPicks, 'Gnar')

console.log(ornnScrimGames)

  return(
   <div>
     <Header />
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