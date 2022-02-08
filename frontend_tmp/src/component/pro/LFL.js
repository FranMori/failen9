import TopLFL from "./topLFL";
import JglLFL from "./jglLFL";
import MidLFL from "./midLFL";
import AdcLFL from "./adcLFL";
import SupLFL from "./supLFL";

import Header from '../home/header'
import Footer from '../home/footer'


import './pro.css'


function LFL() {


  return(
    <div>
      <Header />
        <div className="coreLFL">
          <h1>Stats LFL</h1>
          <TopLFL />
          <JglLFL />  
          <MidLFL />
          <AdcLFL />
          <SupLFL />
        </div>  
      <Footer />
   </div>
    )
}

export default LFL