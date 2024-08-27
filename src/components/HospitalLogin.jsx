import React from 'react'
import Upperportion from './upperPortion'
import IdPass from './IdPass'

const HospitalLogin = () => {
  return (
    <div>
        <Upperportion link={"/Login"}/>
        <IdPass id={"Hospital"}/>
    </div>
  )
}

export default HospitalLogin