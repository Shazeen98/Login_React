import React from 'react';

import ResetForm from '../forms/ResetForm';

class ReSetPage extends React.Component{

    function

render(){
  return(

      <div>
          <h1>Reset Password</h1>
          <ResetForm submit={this.submit}/>
      
      </div>

    );
  }
}




export default ReSetPage;
