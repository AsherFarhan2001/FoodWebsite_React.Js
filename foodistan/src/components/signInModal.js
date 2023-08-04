import { useState } from 'react';
import './signInModal.css';

const SignInModal = (props) => {

    const clickHandler = () => {
        props.onClose(false);
    }

    return (
        <div className='modal-wrapper'>
            <div className='modal-overlay'>
                <button onClick={clickHandler} className='cross-btn'>X</button>

                <div className='input-container'>
                    <h1 style={{ color: '#2ef72e' }}>Sign In</h1>
                    <div className='input-controls'>
                        <input type='text' placeholder='Enter your Name'></input>
                        <label className='name-label'>Name</label>
                    </div>
                    <div className='input-controls'>
                        <input type='password' placeholder='Enter your Password'></input>
                        <label className='password-label'>Password</label>
                    </div>
                    <div className='form-info'>
                        <div className='forgot-password'>
                            <p>Forgot Password</p>
                        </div>
                        <div className='signup'>
                            <p>Dont have account?</p>
                        </div>
                    </div>
                    <div className='signInButton'>
                        <button>Sign In</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SignInModal;