function AdcLFL() {

  let adcBDS = [10, 27.3, 25.6, 0.17]
  let adcME = [8.9, 32.9, 23, 0.16]
  let adcKC = [10.5, 31.5, 27.3, 0.06]
  let adcOPL = [9.2, 28.8, 25.2, 0.27]
  let adcMSF = [8.5, 30.5, 23.8, 0.16]
  let adcSLY = [8.1, 27.6, 23.8, 0.12]
  let adcGW = [8.4, 21.9, 22.6, 0.15]
  let adcLDLC = [11, 22.6, 26.3, 0.2]
  let adcVIT = [9.9, 21.4, 25, 0.19]
  let adcGO = [9.6, 30.1, 25.8, 0.08]
  
  let CSMIN = ((adcBDS[0] + adcME[0] + adcKC[0] + adcOPL[0] + adcMSF[0] + adcSLY[0] + adcGW[0] + adcLDLC[0] + adcVIT[0] + adcGO[0]) /10).toFixed(2)
  let Degats = ((adcBDS[1] + adcME[1] + adcKC[1] + adcOPL[1] + adcMSF[1] + adcSLY[1] + adcGW[1] + adcLDLC[1] + adcVIT[1] + adcGO[1]) /10).toFixed(2)
  let Gold = ((adcBDS[2] + adcME[2] + adcKC[2] + adcOPL[2] + adcMSF[2] + adcSLY[2] + adcGW[2] + adcLDLC[2] + adcVIT[2] + adcGO[2]) /10).toFixed(2)
  let pinks = ((adcBDS[3] + adcME[3] + adcKC[3] + adcOPL[3] + adcMSF[3] + adcSLY[3] + adcGW[3] + adcLDLC[3] + adcVIT[3] + adcGO[3]) /10).toFixed(2)
  return (
      <div>
        <h3>Adc LFL</h3>
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
  
  export default AdcLFL