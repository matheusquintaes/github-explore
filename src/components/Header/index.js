import React from 'react'

export default class Header extends React.Component{
  render() {
    return(
      <header>
        Github Explore
        <nav>
          <ul>
            <li>Popular</li>
            <li>Battle</li>
          </ul>
        </nav>
      </header>
    )
  } 
}