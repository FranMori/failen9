import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Login from './component/home/login/login'
import Home from './component/home/Home'
import Scrim from './component/scrims/scrim'
import FormScrim from './component/scrims/addScrim'

import Team from './component/scrims/team'
import Prepaotf2 from './component/scrims/prepaotf2';

import StatsTop from './component/indiv/prepaotf1/top'
import StatsJgl from './component/indiv/prepaotf1/jgl'
import StatsMid from './component/indiv/prepaotf1/mid'
import StatsAdc from './component/indiv/prepaotf1/adc'
import StatsSupport from './component/indiv/prepaotf1/sup'

import Otf1 from './component/scrims/otf1';
import StatsOtf1Top from './component/indiv/otf1/topotf1';
import StatsOtf1Jungle from './component/indiv/otf1/jungleotf1';
import StatsOtf1Mid from './component/indiv/otf1/midotf1';
import StatsOtf1Adc from './component/indiv/otf1/adcotf1';
import StatsOtf1Support from './component/indiv/otf1/supotf1';

import StatsPrepaotf2Adc from './component/indiv/prepaotf2/adcprepaotf2';
import StatsPrepaotf2Top from './component/indiv/prepaotf2/topprepaotf2';
import StatsPrepaotf2Jungle from './component/indiv/prepaotf2/jungleprepaotf2';
import StatsPrepaotf2Mid from './component/indiv/prepaotf2/midprepaotf2';
import StatsPrepaotf2Support from './component/indiv/prepaotf2/supprepaotf2';


import LFL from './component/pro/LFL'

import PrivateRoute from './component/home/login/privateRoute'



ReactDOM.render(
  <Router>
    <Routes>
      <Route path='/login' element={<Login />} />

      {/* <Route exact path='/' element={<PrivateRoute />}> */}
      <Route exact path='/' element={<Home />}/>
      {/* </Route> */}

      {/* <Route exact path='/team' element={<PrivateRoute />}> */}
      <Route exact path='/team' element={<Team />} />
      {/* </Route> */}

      <Route exact path='/team/prepaotf1' element={<PrivateRoute />}>
      <Route exact path='/team/prepaotf1' element={<Scrim />} />
      </Route>

      <Route exact path='/team/prepaotf2' element={<PrivateRoute />}>
      <Route exact path='/team/prepaotf2' element={<Prepaotf2 />} />
      </Route>

      <Route exact path='/team/add' element={<PrivateRoute />}>
      <Route exact path='/team/add' element = {<FormScrim/>} />
      </Route>

      <Route exact path='/team/prepaotf1/top' element={<PrivateRoute />}>
      <Route exact path='/team/prepaotf1/top' element = {<StatsTop/>} />
      </Route>

      <Route exact path='/team/prepaotf1/jungle' element={<PrivateRoute />}>
      <Route exact path='/team/prepaotf1/jungle' element = {<StatsJgl/>} />
      </Route>

      <Route exact path='/team/prepaotf1/mid' element={<PrivateRoute />}>
      <Route exact path='/team/prepaotf1/mid' element = {<StatsMid/>} />
      </Route>

      <Route exact path='/team/prepaotf1/adc' element={<PrivateRoute />}>
      <Route exact path='/team/prepaotf1/adc' element = {<StatsAdc/>} />
      </Route>

      <Route exact path='/team/prepaotf1/support' element={<PrivateRoute />}>
      <Route exact path='/team/prepaotf1/support' element = {<StatsSupport/>} />
      </Route>

      {/* <Route exact path='/team/otf1' element={<PrivateRoute />}> */}
      <Route exact path='/team/otf1' element = {<Otf1/>} />
      {/* </Route> */}

      {/* <Route exact path='/team/otf1' element={<PrivateRoute />}> */}
      <Route exact path='/team/otf1/top' element = {<StatsOtf1Top/>} />
      {/* </Route> */}

      {/* <Route exact path='/team/otf1' element={<PrivateRoute />}> */}
      <Route exact path='/team/otf1/jungle' element = {<StatsOtf1Jungle/>} />
      {/* </Route> */}

      {/* <Route exact path='/team/otf1' element={<PrivateRoute />}> */}
      <Route exact path='/team/otf1/mid' element = {<StatsOtf1Mid/>} />
      {/* </Route> */}

      {/* <Route exact path='/team/otf1' element={<PrivateRoute />}> */}
      <Route exact path='/team/otf1/adc' element = {<StatsOtf1Adc/>} />
      {/* </Route> */}

      {/* <Route exact path='/team/otf1' element={<PrivateRoute />}> */}
      <Route exact path='/team/otf1/support' element = {<StatsOtf1Support/>} />
      {/* </Route> */}

      <Route exact path='/team/prepaotf2/top' element={<PrivateRoute />}>
      <Route exact path='/team/prepaotf2/top' element = {<StatsPrepaotf2Top/>} />
      </Route>

      <Route exact path='/team/prepaotf2/jungle' element={<PrivateRoute />}>
      <Route exact path='/team/prepaotf2/jungle' element = {<StatsPrepaotf2Jungle/>} />
      </Route>

      <Route exact path='/team/prepaotf2/mid' element={<PrivateRoute />}>
      <Route exact path='/team/prepaotf2/mid' element = {<StatsPrepaotf2Mid/>} />
      </Route>

      <Route exact path='/team/prepaotf2/adc' element={<PrivateRoute />}>
      <Route exact path='/team/prepaotf2/adc' element = {<StatsPrepaotf2Adc/>} />
      </Route>

      <Route exact path='/team/prepaotf2/support' element={<PrivateRoute />}>
      <Route exact path='/team/prepaotf2/support' element = {<StatsPrepaotf2Support/>} />
      </Route>

      <Route exact path='/pro' element={<PrivateRoute />}>
      <Route exact path='/pro' element = {<LFL/>} />
      </Route>


    </Routes>
  </Router>,
  document.getElementById('root')
);
