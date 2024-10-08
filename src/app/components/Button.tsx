import React from 'react'
import { lora600 } from '../utils/Fonts'

const Button = () => {
  return (
    <div className={`${lora600.className} font-bold py-2 px-5 mr-2 bg-[#8A51FF] border border-black rounded-md cursor-pointer text-white hover:bg-[#502a9df2] hover:border-[#502a9df2]`}>
      HIRE ME
    </div>
  )
}

export default Button
