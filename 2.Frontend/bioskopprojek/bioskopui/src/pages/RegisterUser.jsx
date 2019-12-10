import React, { Component } from 'react';

class RegisterUser extends Component {
    state = {
        error:'',
        loading:false
    }

    render() {
        return (
            <div>
                <div className=' mt-3 d-flex justify-content-center'>
                    <div style={{width:'500px',border:'1px solid black'}} className='rounded p-2'>
                        <h1 className>Register</h1>
                        <div className='p-1' style={{borderBottom:'1px solid black'}}>
                            <input type="text" className='username' style={{border:'transparent',width:'100%',fontSize:'20px'}} ref='username' placeholder='username '/>
                        </div>
                        <div className='p-1' style={{borderBottom:'1px solid black'}}>
                            <input type="password" className='username' style={{border:'transparent',width:'100%',fontSize:'20px'}} ref='password' placeholder='password'/>
                        </div>
                        {this.state.error===''?
                            null
                            :
                            <div className="alert alert-danger mt-2">
                                {this.state.error} <span onClick={()=>this.setState({error:''})} className='float-right font-weight-bold salah'>X</span>
                            </div>
                    
                        }
                        <div className='mt-4'>
                            <button className='btn btn-primary' onClick={this.onLoginClick}>Register</button>
                        </div>
                    </div>
                </div>
            </div>
          );
    }
}




export default RegisterUser