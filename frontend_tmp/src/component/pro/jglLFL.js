

function JglLFL() {

let jglBDS = [6.5, 19, 19.6, 0.29]
let jglME = [5.1, 14.1, 19.2, 0.3]
let jglKC = [5.6, 16.7, 18.9, 0.36]
let jglOPL = [5.3, 17.9, 20.3, 0.53]
let jglMSF = [5.6, 8.4, 18.6, 0.25]
let jglSLY = [4.9, 14.8, 19, 0.28]
let jglGW = [5.6, 8.9, 17.6, 0.33]
let jglLDLC = [4.9, 14.5, 16.8, 0.5]
let jglVIT = [5.6, 10.6, 19.3, 0.34]
let jglGO = [4.6, 9.7, 16.2, 0.36]

let CSMIN = ((jglBDS[0] + jglME[0] + jglKC[0] + jglOPL[0] + jglMSF[0] + jglSLY[0] + jglGW[0] + jglLDLC[0] + jglVIT[0] + jglGO[0]) /10).toFixed(2)
let Degats = ((jglBDS[1] + jglME[1] + jglKC[1] + jglOPL[1] + jglMSF[1] + jglSLY[1] + jglGW[1] + jglLDLC[1] + jglVIT[1] + jglGO[1]) /10).toFixed(2)
let Gold = ((jglBDS[2] + jglME[2] + jglKC[2] + jglOPL[2] + jglMSF[2] + jglSLY[2] + jglGW[2] + jglLDLC[2] + jglVIT[2] + jglGO[2]) /10).toFixed(2)
let pinks = ((jglBDS[3] + jglME[3] + jglKC[3] + jglOPL[3] + jglMSF[3] + jglSLY[3] + jglGW[3] + jglLDLC[3] + jglVIT[3] + jglGO[3]) /10).toFixed(2)
return (
    <div>
      <h3>Jungle LFL</h3>
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

export default JglLFL