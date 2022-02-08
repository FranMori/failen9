import {useState} from 'react'
import Axios from 'axios'
import Header from '../home/header'
import Footer from '../home/footer'

import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button'

import './addScrim.css'


function FormScrim () {
  const [firstDrake, setFirstDrake] = useState("")
  const [firstHerald, setFirstHerald] = useState("")


  const [date, setDate] = useState("");
  const [enemyTeam, setenemyTeam] = useState("");
  const [side, setSide] = useState("");
  const [duration, setDuration] = useState("");
  const [result, setResult] = useState("");
  const [draft, setDraft] = useState("")

  const [pick1, setPick1] = useState("")
  const [pick2, setPick2] = useState("")
  const [pick3, setPick3] = useState("")
  const [pick4, setPick4] = useState("")
  const [pick5, setPick5] = useState("")

  const [ban1, setBan1] = useState("")
  const [ban2, setBan2] = useState("")
  const [ban3, setBan3] = useState("")
  const [ban4, setBan4] = useState("")
  const [ban5, setBan5] = useState("")

  const [kda1, setKDA1] = useState("")
  const [kda2, setKDA2] = useState("")
  const [kda3, setKDA3] = useState("")
  const [kda4, setKDA4] = useState("")
  const [kda5, setKDA5] = useState("")

  const [cs1, setCS1] = useState("")
  const [cs2, setCS2] = useState("")
  const [cs3, setCS3] = useState("")
  const [cs4, setCS4] = useState("")
  const [cs5, setCS5] = useState("")

  const [degat1, setDegat1] = useState("")
  const [degat2, setDegat2] = useState("")
  const [degat3, setDegat3] = useState("")
  const [degat4, setDegat4] = useState("")
  const [degat5, setDegat5] = useState("")

  const [gold1, setGold1] = useState("")
  const [gold2, setGold2] = useState("")
  const [gold3, setGold3] = useState("")
  const [gold4, setGold4] = useState("")
  const [gold5, setGold5] = useState("")

  const [golddiff1_8, setGoldDiff1_8] = useState("")
  const [golddiff2_8, setGoldDiff2_8] = useState("")
  const [golddiff3_8, setGoldDiff3_8] = useState("")
  const [golddiff4_8, setGoldDiff4_8] = useState("")
  const [golddiff5_8, setGoldDiff5_8] = useState("")

  const [golddiff1_14, setGoldDiff1_14] = useState("")
  const [golddiff2_14, setGoldDiff2_14] = useState("")
  const [golddiff3_14, setGoldDiff3_14] = useState("")
  const [golddiff4_14, setGoldDiff4_14] = useState("")
  const [golddiff5_14, setGoldDiff5_14] = useState("")

  const [golddiff1_22, setGoldDiff1_22] = useState("")
  const [golddiff2_22, setGoldDiff2_22] = useState("")
  const [golddiff3_22, setGoldDiff3_22] = useState("")
  const [golddiff4_22, setGoldDiff4_22] = useState("")
  const [golddiff5_22, setGoldDiff5_22] = useState("")

  const [golddiff1, setGoldDiff1] = useState ("")
  const [golddiff2, setGoldDiff2] = useState ("")
  const [golddiff3, setGoldDiff3] = useState ("")
  const [golddiff4, setGoldDiff4] = useState ("")
  const [golddiff5, setGoldDiff5] = useState ("")

  const [pink1, setPink1] = useState ("")
  const [pink2, setPink2] = useState ("")
  const [pink3, setPink3] = useState ("")
  const [pink4, setPink4] = useState ("")
  const [pink5, setPink5] = useState ("")

  const [vision1, setVision1] = useState(0)
  const [vision2, setVision2] = useState(0)
  const [vision3, setVision3] = useState(0)
  const [vision4, setVision4] = useState(0)
  const [vision5, setVision5] = useState(0)


  const [eban1, setEBan1] = useState("")
  const [eban2, setEBan2] = useState("")
  const [eban3, setEBan3] = useState("")
  const [eban4, setEBan4] = useState("")
  const [eban5, setEBan5] = useState("")

  const [epick1, setEPick1] = useState("")
  const [epick2, setEPick2] = useState("")
  const [epick3, setEPick3] = useState("")
  const [epick4, setEPick4] = useState("")
  const [epick5, setEPick5] = useState("")


  const addScrim = () => {
    Axios.post('http://localhost:5000/api/team/prepaotf2/create', {
      firstDrake: firstDrake,
      firstHerald: firstHerald,
      date: date, 
      enemyTeam: enemyTeam, 
      side: side, 
      duration:duration, 
      result: result,
      draft: draft,
      pick1: pick1,
      pick2: pick2,
      pick3: pick3,
      pick4: pick4,
      pick5: pick5,
      ban1: ban1,
      ban2: ban2,
      ban3: ban3,
      ban4: ban4,
      ban5: ban5,
      kda1: kda1,
      kda2: kda2,
      kda3: kda3,
      kda4: kda4,
      kda5: kda5,
      cs1: cs1,
      cs2: cs2,
      cs3: cs3,
      cs4: cs4,
      cs5: cs5,
      degat1: degat1,
      degat2: degat2,
      degat3: degat3,
      degat4: degat4,
      degat5: degat5,
      gold1: gold1,
      gold2: gold2,
      gold3: gold3,
      gold4: gold4,
      gold5: gold5,
      golddiff1_8: golddiff1_8,
      golddiff2_8: golddiff2_8,
      golddiff3_8: golddiff3_8,
      golddiff4_8: golddiff4_8,
      golddiff5_8: golddiff5_8,
      golddiff1_14: golddiff1_14,
      golddiff2_14: golddiff2_14,
      golddiff3_14: golddiff3_14,
      golddiff4_14: golddiff4_14,
      golddiff5_14: golddiff5_14,
      golddiff1_22: golddiff1_22,
      golddiff2_22: golddiff2_22,
      golddiff3_22: golddiff3_22,
      golddiff4_22: golddiff4_22,
      golddiff5_22: golddiff5_22,
      golddiff1: golddiff1,
      golddiff2: golddiff2,
      golddiff3: golddiff3,
      golddiff4: golddiff4,
      golddiff5: golddiff5,
      pink1 : pink1,
      pink2 : pink2,
      pink3 : pink3,
      pink4 : pink4,
      pink5 : pink5,
      vision1 : vision1,
      vision2 : vision2,
      vision3 : vision3,
      vision4 : vision4,
      vision5 : vision5,
      eban1: eban1,
      eban2: eban2,
      eban3: eban3,
      eban4: eban4,
      eban5: eban5,
      epick1: epick1,
      epick2: epick2,
      epick3: epick3,
      epick4: epick4,
      epick5: epick5,

    })     

  }

    return (
  <div><Header />
    <div className='Form'>

         <a href='/team/prepaotf2'><Button variant='dark'>Annuler</Button></a> 

      <div className='informations'>

            <label>Date</label>
            <input type={'text'} onChange={(event) => {setDate(event.target.value)}}></input>
            
            <label>Enemy Team</label>
            <input type={'text'} onChange={(event) => {setenemyTeam(event.target.value)}}></input>
          
            <label>Side</label>
              <input type={'text'} onChange={(event) => {setSide(event.target.value)}}></input>

            <label>Draft</label>
              <input type={'text'} onChange={(event) => {setDraft(event.target.value)}}></input>
            
            <label>Duration</label>
              <input type={'text'} onChange={(event) => {setDuration (event.target.value)}}></input>
            
            <label>Result</label>
              <input type={'text'} onChange={(event) => {setResult (event.target.value)}}></input>

            <label>First Drake</label>
              <input type={'text'} onChange={(event) => {setFirstDrake (event.target.value)}}></input>

            <label>First Herald</label>
              <input type={'text'} onChange={(event) => {setFirstHerald (event.target.value)}}></input>

              
            

          <label>Picks</label>
            <input type={'text'} onChange={(event) => {setPick1(event.target.value)}} ></input>
            <input type={'text'} onChange={(event) => {setPick2(event.target.value)}}></input>
            <input type={'text'} onChange={(event) => {setPick3(event.target.value)}}></input>
            <input type={'text'} onChange={(event) => {setPick4(event.target.value)}}></input>
            <input type={'text'} onChange={(event) => {setPick5(event.target.value)}}></input>
          

          <label>Bans</label>
            <input type={'text'} onChange={(event) => {setBan1(event.target.value)}}></input>
            <input type={'text'} onChange={(event) => {setBan2(event.target.value)}}></input>
            <input type={'text'} onChange={(event) => {setBan3(event.target.value)}}></input>
            <input type={'text'} onChange={(event) => {setBan4(event.target.value)}}></input>
            <input type={'text'} onChange={(event) => {setBan5(event.target.value)}}></input>
          

          <label>KDA </label>
            <input type={'text'} onChange={(event) => {setKDA1(event.target.value)}}></input>
            <input type={'text'} onChange={(event) => {setKDA2(event.target.value)}}></input>
            <input type={'text'} onChange={(event) => {setKDA3(event.target.value)}}></input>
            <input type={'text'} onChange={(event) => {setKDA4(event.target.value)}}></input>
            <input type={'text'} onChange={(event) => {setKDA5(event.target.value)}}></input>

            <label>CS </label>
            <input type={'text'} onChange={(event) => {setCS1(event.target.value)}}></input>
            <input type={'text'} onChange={(event) => {setCS2(event.target.value)}}></input>
            <input type={'text'} onChange={(event) => {setCS3(event.target.value)}}></input>
            <input type={'text'} onChange={(event) => {setCS4(event.target.value)}}></input>
            <input type={'text'} onChange={(event) => {setCS5(event.target.value)}}></input>

            <label>Dégats </label>
            <input type={'text'} onChange={(event) => {setDegat1(event.target.value)}}></input>
            <input type={'text'} onChange={(event) => {setDegat2(event.target.value)}}></input>
            <input type={'text'} onChange={(event) => {setDegat3(event.target.value)}}></input>
            <input type={'text'} onChange={(event) => {setDegat4(event.target.value)}}></input>
            <input type={'text'} onChange={(event) => {setDegat5(event.target.value)}}></input>

            <label>Total Gold </label>
            <input type={'text'} onChange={(event) => {setGold1(event.target.value)}}></input>
            <input type={'text'} onChange={(event) => {setGold2(event.target.value)}}></input>
            <input type={'text'} onChange={(event) => {setGold3(event.target.value)}}></input>
            <input type={'text'} onChange={(event) => {setGold4(event.target.value)}}></input>
            <input type={'text'} onChange={(event) => {setGold5(event.target.value)}}></input>

            <label>Gold Diff @8min </label>
            <input type={'text'} onChange={(event) => {setGoldDiff1_8(event.target.value)}}></input>
            <input type={'text'} onChange={(event) => {setGoldDiff2_8(event.target.value)}}></input>
            <input type={'text'} onChange={(event) => {setGoldDiff3_8(event.target.value)}}></input>
            <input type={'text'} onChange={(event) => {setGoldDiff4_8(event.target.value)}}></input>
            <input type={'text'} onChange={(event) => {setGoldDiff5_8(event.target.value)}}></input>

            <label>Gold Diff @14min </label>
            <input type={'text'} onChange={(event) => {setGoldDiff1_14(event.target.value)}}></input>
            <input type={'text'} onChange={(event) => {setGoldDiff2_14(event.target.value)}}></input>
            <input type={'text'} onChange={(event) => {setGoldDiff3_14(event.target.value)}}></input>
            <input type={'text'} onChange={(event) => {setGoldDiff4_14(event.target.value)}}></input>
            <input type={'text'} onChange={(event) => {setGoldDiff5_14(event.target.value)}}></input>

            <label>Gold Diff @22min </label>
            <input type={'text'} onChange={(event) => {setGoldDiff1_22(event.target.value)}}></input>
            <input type={'text'} onChange={(event) => {setGoldDiff2_22(event.target.value)}}></input>
            <input type={'text'} onChange={(event) => {setGoldDiff3_22(event.target.value)}}></input>
            <input type={'text'} onChange={(event) => {setGoldDiff4_22(event.target.value)}}></input>
            <input type={'text'} onChange={(event) => {setGoldDiff5_22(event.target.value)}}></input>
                 
          <label>Gold Diff Total</label>
            <input type={'text'} onChange={(event) => {setGoldDiff1(event.target.value)}}></input>
            <input type={'text'} onChange={(event) => {setGoldDiff2(event.target.value)}}></input>
            <input type={'text'} onChange={(event) => {setGoldDiff3(event.target.value)}}></input>
            <input type={'text'} onChange={(event) => {setGoldDiff4(event.target.value)}}></input>
            <input type={'text'} onChange={(event) => {setGoldDiff5(event.target.value)}}></input>

          <label>Pinks achetées</label>
            <input type={'text'} onChange={(event) => {setPink1(event.target.value)}}></input>
            <input type={'text'} onChange={(event) => {setPink2(event.target.value)}}></input>
            <input type={'text'} onChange={(event) => {setPink3(event.target.value)}}></input>
            <input type={'text'} onChange={(event) => {setPink4(event.target.value)}}></input>
            <input type={'text'} onChange={(event) => {setPink5(event.target.value)}}></input>

          <label>Score de vision</label>
            <input type={'text'} onChange={(event) => {setVision1(event.target.value)}}></input>
            <input type={'text'} onChange={(event) => {setVision2(event.target.value)}}></input>
            <input type={'text'} onChange={(event) => {setVision3(event.target.value)}}></input>
            <input type={'text'} onChange={(event) => {setVision4(event.target.value)}}></input>
            <input type={'text'} onChange={(event) => {setVision5(event.target.value)}}></input>  
       
          <label>Enemy Bans</label>

            <input type={'text'} onChange={(event) => {setEBan1(event.target.value)}}></input>
            <input type={'text'} onChange={(event) => {setEBan2(event.target.value)}}></input>
            <input type={'text'} onChange={(event) => {setEBan3(event.target.value)}}></input>
            <input type={'text'} onChange={(event) => {setEBan4(event.target.value)}}></input>
            <input type={'text'} onChange={(event) => {setEBan5(event.target.value)}}></input>

          <label> Enemy Picks</label>

            <input type={'text'} onChange={(event) => {setEPick1(event.target.value)}}></input>
            <input type={'text'} onChange={(event) => {setEPick2(event.target.value)}}></input>
            <input type={'text'} onChange={(event) => {setEPick3(event.target.value)}}></input>
            <input type={'text'} onChange={(event) => {setEPick4(event.target.value)}}></input>
            <input type={'text'} onChange={(event) => {setEPick5(event.target.value)}}></input>

            <Button variant='dark' onClick={addScrim}><a href='/team/prepaotf2'>Envoyer </a></Button>
            <a href='/team/prepaotf2'><Button variant='dark'>Annuler</Button></a> 
        </div>
        </div>
    <Footer /></div>     
    )}

    export default FormScrim