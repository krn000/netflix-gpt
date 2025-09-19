import React from 'react'

const Header = () => {

  const logo = "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-08-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/0198e689-25fa-7d64-bb49-0f7e75f898d2/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
  return (
    <div className='absolute px-10 py-2 flex justify-between items-center bg-gradient-to-b from-black to-transparent'>
      <img src={logo} alt="logo" className='w-40' />
    </div>
  )
}

export default Header