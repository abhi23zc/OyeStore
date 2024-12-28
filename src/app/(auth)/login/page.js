import Left_Section from '../../_components/_Login/Left_Section'
import Right_Section from '../../_components/_Login/Right_Section'
import React from 'react'

const Login = () => {
  return (
    <div className="flex">
      <div className="flex-[3] h-screen bg-[#FCF4F0]">
        <Left_Section />
      </div>
      <div className="flex-[2] h-screen bg-[#FBF0E9]">
        <Right_Section />
      </div>
    </div>
  );

}

export default Login