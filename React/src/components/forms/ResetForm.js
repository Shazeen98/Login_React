import React from 'react';

import {Button} from 'semantic-ui-react';
import axios from 'axios';

 class ResetForm extends React.Component {

  test(e){
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      let formObject = Object.fromEntries(formData.entries())

      axios.post("http://localhost:5000/signIn", {
          email: formObject.email
      }).then(r  =>{
          console.log(r.data)
      }).catch(e=>{
          console.log('failed')
      })
  }

   render() {
  
     return(
        <form onSubmit = {this.test} >
            <label htmlFor="email"><b>Email</b></label><br/>
            <input type="email" placeholder="Email" id="email" name="email"   />

            <br/><br/>

            <br/><br/>
            <Button type="submit" primary>Submit</Button>
        </form>


     );
    }
}

 

 export default ResetForm;
