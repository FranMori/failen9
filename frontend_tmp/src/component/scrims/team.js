import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button'

import {Link, Outlet} from 'react-router-dom'

import Header from '../home/header'
import Footer from '../home/footer'

import './scrim.css'

function Team () {

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