import {useState} from 'react'
import Axios from 'axios'

import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button'

import './login.css'

import Logo from './failen9.jpg'

function Login () {

  const [pseudo, setPseudo] = useState('')
  const [password, setPassword] = useState('')

  const testLogin = () => {
    Axios.post('http://localhost:5000/api/auth/login', {
      pseudo: pseudo,
      password: password
    }).then(response => {
      
      if(response.data.accessToken) {
        localStorage.setItem('user', JSON.stringify(response.data))
        console.log(localStorage.user)
      }
    })
  }
  return(
  <div>
    <header>
    <h1>
      Data et scouting analysis Failen9
    </h1>
    <img src={Logo} alt='Logo Failen9'/>
  </header>
    <div className='loginForm'>
        <div className='loginCard'>
          <label>Pseudo</label>
          <input type={'text'} onChange={(event) => {setPseudo(event.target.value)}}></input>

          <label>Mot de passe</label>
         <input type={'password'} onChange={(event) => {setPassword(event.target.value)}}></input>

          <Button variant='warning' onClick={testLogin}><a href='/'> Login</a></Button>
        </div>
    </div>
    <footer>

  <ul> <h3>Liens utiles : </h3>
    <li><a href='https://euw.op.gg/multi/query=shiawase%2C%20KOREAN%20KITING%2CPCS%20Wayzix%2CNayas%2Cyamy1'>OPGG</a></li>
    <li><a href='https://gol.gg/esports/home/'>GOL</a></li>
    <li><a href='https://porofessor.gg/fr/'>Porofessor</a></li>
    <li><a href='https://www.leagueofgraphs.com/fr/'>League of Graphs</a></li>
  </ul>
 
  <ul> <h3> Failen9 : </h3>
  <li><a href='https://twitter.com/Failen9Hetic'>Twitter</a></li>
  <li><a href='https://www.instagram.com/failen9hetic/'>Instagram</a></li>
  <li><a href='https://www.twitch.tv/failen9'>Twitch</a></li>
  <li><a href='https://failen9.com/'>Site</a></li>
  </ul>
</footer>
</div>  
  )
}

export default Login