import Form from 'react-bootstrap/Form';

export const FormControl=()=> {
  return (
   <form>
    <h1>Student Details</h1>
     <label for="fname">First name:</label>
      <input type="text" id="fname" name="fname"></input>
      <label for="lname">Last name:</label>
     <input type="text" id="lname" name="lname"></input>
   </form>
 
  );
}

export default FormControl;