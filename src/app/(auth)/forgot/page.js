"use client"
import Left_Section from '../../_components/_Forgot/Left_Section'
import Right_Section from '../../_components/_Forgot/Right_Section'
import { useSearchParams } from 'next/navigation'

const Forgot = () => {
  const searchParams = useSearchParams();
  console.log(searchParams.get('test'))
  return (
    <div>
      <div className="flex">
        <div className="flex-[3] h-screen bg-[#FCF4F0]">
          <Left_Section />
        </div>
        <div className="flex-[2] h-screen bg-[#FBF0E9]">
          <Right_Section />
        </div>
      </div>
    </div>
  )
}

export default Forgot