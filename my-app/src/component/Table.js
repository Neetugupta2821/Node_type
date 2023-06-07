import './Table.css';
function Table(){
    return(
        <>
        <div>
  <table>
    
    <tr>
      <th><img  className='image_type' src="image.png"/></th>
      <th>SI NO</th>
      <th>Trade No</th>
      <th>Division</th>
      <th>cost center</th>
      <th>projects</th>
      <th>business unit</th>
      <th>location</th>
      <th>subTrade</th>
      <th>Account</th>
       
    </tr>
    
    <tr>
      <td><img  className='image_type' src="https://cdn-icons-png.flaticon.com/128/545/545666.png"/></td>
      <td>1</td>
      <td>Gender</td>
      <td>MFC</td>
      <td>Finance</td>
      <td>Gender</td>
      <td>corporate</td>
      <td>china</td>
      <td>general</td>
      <td>interest income</td>
    </tr>
    <tr>
    <td><img  className='image_type' src="https://cdn-icons-png.flaticon.com/128/545/545666.png"/></td>
      <td>2</td>
      <td>Trade No</td>
      <td>Division</td>
      <td>costcenter</td>
      <td>project</td>
      <td>busness unit</td>
      <td>location</td>
      <td>subtrade</td>
      <td>Account</td>
      
    </tr>
     
  </table>
</div>
        </>
    )
}
export default Table;