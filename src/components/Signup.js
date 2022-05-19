
import React from 'react'
import './Signup.css'



const Signup = () => {
    return (
        <div className='signup'>
            <div className='container'>
                {/* left */}
                <div className='left'>
                    <img src='https://www.pngall.com/wp-content/uploads/8/Stock-Trading-PNG-Clipart.png' alt='' />
                </div>

                {/* right */}
                <div className='right'>
                    <h2>Earn passive income with crypto.</h2>
                    <p>Earn up to 12% annual rewards on 30+ digital assets. Simply hold your assets in the app to automatically earn rewards at the end of each month with no lockups and no limits.</p>
                    <div className='input-container'>
                        <input type='email' placeholder='Enter your email' />
                        <button className='btn'>Learn More</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Signup