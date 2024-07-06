import React from 'react'

const Logo = ({title, className}) => {
  return (
    <h1 className={`text-3xl font font-extrabold uppercase ${className}`}>
        {title}</h1>
  )
}

export default Logo