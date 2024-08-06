import React from 'react'

export const Header = ({setCurrentPage}) => {
  return (
    <header>
        <div>
            <button value="Terminal" onClick={(e) => setCurrentPage(e.target.value)}>Terminal</button>
            <button value="Resume" onClick={(e) => setCurrentPage(e.target.value)}>Resume</button>
        </div>
    </header>
  )
}
