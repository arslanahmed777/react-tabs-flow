import React from 'react'

function IconRenderer({ Icon, extraClass }) {
  return (
    <span className={`text-textColor text-lg cursor-pointer hover:text-textColor/80 ${extraClass}`}><Icon /></span>
  )
}

export default IconRenderer