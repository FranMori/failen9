

function MidLFL() {

  let midBDS = [8.6, 23.4, 22.6, 0.35]
  let midME = [8.1, 24.7, 23.2, 0.1]
  let midKC = [6.4, 23.7, 19.5, 0.12]
  let midOPL = [8.2, 26.7, 23.2, 0.27]
  let midMSF = [7.8, 25, 20.6, 0.34]
  let midSLY = [8.9, 39.1, 25.7, 0.17]
  let midGW = [8.2, 36.2, 25.5, 0.22]
  let midLDLC = [8.9, 29, 23.1, 0.16]
  let midVIT = [7.9, 21.9, 21.3, 0.22]
  let midGO = [8.2, 23.4, 23.2, 0.19]
  
  let CSMIN = ((midBDS[0] + midME[0] + midKC[0] + midOPL[0] + midMSF[0] + midSLY[0] + midGW[0] + midLDLC[0] + midVIT[0] + midGO[0]) /10).toFixed(2)
  let Degats = ((midBDS[1] + midME[1] + midKC[1] + midOPL[1] + midMSF[1] + midSLY[1] + midGW[1] + midLDLC[1] + midVIT[1] + midGO[1]) /10).toFixed(2)
  let Gold = ((midBDS[2] + midME[2] + midKC[2] + midOPL[2] + midMSF[2] + midSLY[2] + midGW[2] + midLDLC[2] + midVIT[2] + midGO[2]) /10).toFixed(2)
  let pinks = ((midBDS[3] + midME[3] + midKC[3] + midOPL[3] + midMSF[3] + midSLY[3] + midGW[3] + midLDLC[3] + midVIT[3] + midGO[3]) /10).toFixed(2)
  return (
      <div>
        <h3>Mid LFL</h3>
        <table>
          <tbody>
            <tr>
              <td className='orange'>CS/min</td>
              <td className='white'>%Dégats/Team</td>
              <td className='orange'>%Gold/Team</td>
              <td className='white'>Pinks achetées</td>
  
            </tr>
            <tr>
              <td className='orange'>{CSMIN}</td>
              <td className='white'> {Degats}% </td>
              <td className='orange'> {Gold}% </td>
              <td className='white'> {pinks} </td>
  
  
            </tr>
            </tbody>
            </table>  
  
        </div>
  )
  }
  
  export default MidLFL