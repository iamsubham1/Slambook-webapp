import React from 'react'

const LoginForm = () => {
    return (
        <div className='Login'>
            <form className='form'>
                <input type="text" className="name" placeholder="ENTER YOUR NAME" />
                <input type="text" className="email" placeholder="ENTER YOUR EMAIL-ID" />
                <button type="submit" name="submit">SUBMIT</button>
            </form>
        </div>
    )
}

export default LoginForm
