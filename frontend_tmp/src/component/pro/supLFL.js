
function SupLFL() {

  let supBDS = [0.65]
  let supME = [0.47]
  let supKC = [0.5]
  let supOPL = [0.59]
  let supMSF = [0.57]
  let supSLY = [0.49]
  let supGW = [0.58]
  let supLDLC = [0.42]
  let supVIT = [0.51]
  let supGO = [0.53]
  
  
  let pinks = ((supBDS[0] + supME[0] + supKC[0] + supOPL[0] + supMSF[0] + supSLY[0] + supGW[0] + supLDLC[0] + supVIT[0] + supGO[0]) /10).toFixed(2)
  return (
      <div>
        <h3>Support LFL</h3>
        <table>
          <tbody>
            <tr>
              
              <td className='white'>Pinks achetées</td>
  
            </tr>
            <tr>
              
              <td className='white'> {pinks} </td>
  
  
            </tr>
            </tbody>
            </table>  
        </div>
  )
  }
  
  export default SupLFL