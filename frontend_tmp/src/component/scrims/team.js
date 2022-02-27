import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button'



import {Link, Outlet} from 'react-router-dom'

import Header from '../home/header'
import Footer from '../home/footer'

import './scrim.css'

import MatchupsTop from './matchups/enemyPicks/top'
import MatchupsJgl from './matchups/enemyPicks/jgl'
import MatchupsMid from './matchups/enemyPicks/mid'
import MatchupsAdc from './matchups/enemyPicks/adc'
import MatchupsSup from './matchups/enemyPicks/sup'

import MatchupsOurTop from './matchups/ourPicks/top'
import MatchupsOurMid from './matchups/ourPicks/mid'
import MatchupsOurAdc from './matchups/ourPicks/adc'
import MatchupsOurSup from './matchups/ourPicks/sup'
function Team () {

  return(
   <div>
     <Header />
     <div className='navOTF'>
        <Button variant="warning"><Link to = "/team/prepaotf1">Prépa OTF1</Link></Button>
        <Button variant="warning"><Link to = "/team/otf1">OTF1</Link></Button>
        <Button variant="warning"><Link to = "/team/prepaotf2">Prépa OTF2</Link></Button>
      </div>
     <h2 className='winrateTitle'>Win rate vs Enemy Picks</h2>
  <div className='row core__winrate__enemyPicks'>
      <div className='col'>
      <MatchupsTop />
     </div>
     <div className='col'>
       <MatchupsJgl />
     </div>
     <div className='col'>

     <MatchupsMid />
     </div>
     <div className='col'>

     <MatchupsAdc />
     </div>

     <div className='col'>

     <MatchupsSup />
     </div>

    </div>
    <h2 className='winrateTitle'>Win rate Our Picks</h2>
  <div className='row core__winrate__enemyPicks'>
      <div className='col'>
      <MatchupsOurTop />
     </div>
     <div className='col'>
     </div>
     <div className='col'>
      <MatchupsOurMid />
     </div>
     <div className='col'>
     <MatchupsOurAdc />
     </div>

     <div className='col'>
     <MatchupsOurSup />

     </div>

    </div>  
    <Footer />
    <Outlet />
  </div> 
  )
}

export default Team