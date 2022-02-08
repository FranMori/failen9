
function TopLFL() {

let topBDS = [7.3, 21.5, 19.8, 0.24]
let topME = [7.4, 22.4, 22.6, 0.13]
let topKC = [7.3, 18.2, 21.3, 0.24]
let topOPL = [6.4, 19, 18.6, 0.22]
let topMSF = [7.7, 24.2, 21.3, 0.17]
let topSLY = [6.4, 15.4, 18.3, 0.2]
let topGW = [8.2, 25.5, 22, 0.1]
let topLDLC = [7.5, 25, 21.3, 0.15]
let topVIT = [8.8, 37.4, 21.9, 0.21]
let topGO = [6.7, 23.1, 20, 0.21]

let CSMIN = ((topBDS[0] + topME[0] + topKC[0] + topOPL[0] + topMSF[0] + topSLY[0] + topGW[0] + topLDLC[0] + topVIT[0] + topGO[0]) /10).toFixed(2)
let Degats = ((topBDS[1] + topME[1] + topKC[1] + topOPL[1] + topMSF[1] + topSLY[1] + topGW[1] + topLDLC[1] + topVIT[1] + topGO[1]) /10).toFixed(2)
let Gold = ((topBDS[2] + topME[2] + topKC[2] + topOPL[2] + topMSF[2] + topSLY[2] + topGW[2] + topLDLC[2] + topVIT[2] + topGO[2]) /10).toFixed(2)
let pinks = ((topBDS[3] + topME[3] + topKC[3] + topOPL[3] + topMSF[3] + topSLY[3] + topGW[3] + topLDLC[3] + topVIT[3] + topGO[3]) /10).toFixed(2)


return (
  <div>
    <div>
      <h3>Top LFL</h3>
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
  </div>
)
}

export default TopLFL