import React from 'react'

const login = ({label,value}) => {
  return (
    <>


    <div>
<label className='fs-5'>{label}</label>
<br />
<input onChange={value} size="lg" type="text" className='mb-3 w-25 p-2 ms-3' />

      
    </div>
    </>
  )
}

export default login
