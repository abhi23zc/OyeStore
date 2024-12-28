import Left_Section from '@/app/_components/_Register/_Next/Left_Section'
import Right_Section from '@/app/_components/_Register/_Next/Right_Section'
import React from 'react'

const CreatePassword = () => {
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

export default CreatePassword