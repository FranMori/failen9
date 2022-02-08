import '../css/Home.css'
import Header from './header'
import Footer from './footer'

function Home() {
  return (
<div>
  <Header />
  <div className='coreHome'>
    <ul> <h2>Ce site est divisé en 3 parties : </h2>
     <li>Une partie regroupant les data de l'équipe, dans son ensemble et individuellement</li>
      <li>Une partie qui concerne le scouting des potentiels concurents au top 8 de l'OTF et d'autres compétitions</li>
     <li>Une partie qui regroupe les datas des niveaux suppérieurs pour nous servir de réfèrence en terme de comparaison</li>
   </ul>
  </div>
<Footer />
</div>  
)
}

export default Home