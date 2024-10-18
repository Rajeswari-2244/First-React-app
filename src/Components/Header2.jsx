import React from 'react'

function Header2() {
  return (
    <div className='header'>
        <div className='header__left'>
            <h2>website</h2>
        </div>
        <div className='header__center'>
            <ul className='lists'>
                <li><a href="#">home</a></li>
                <li><a href="#">services</a></li>
                <li><a href="#">about</a></li>
                <li><a href="#">contact us</a></li>
            </ul>
        </div>

        <div className='header__end'>
            <button>login</button>
            <button>sign up</button>
        </div>
    </div>
  )
}

export default Header2