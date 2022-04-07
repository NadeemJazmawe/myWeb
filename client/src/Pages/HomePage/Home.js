import React from 'react'
import me from "./me.jpeg"

export default function Home() {
  return (
    <div className="home">
      <div className="home-right">
        <img src={me} />
      </div>

      <div className="home-left">
        Computer Science Student
      </div>

      <div className="other-web">
        <h2>Find me Online</h2>
        <div className="web" 
          onClick={() => {
            window.location.href = "https://www.linkedin.com/in/nadeem-jazmawe-675274182"
          }}>
          LinkedIn
        </div>

        <div className="web" 
          onClick={() => {
            window.location.href = "https://github.com/nadeemjazmawe"
          }}>
          GitHub
        </div>

      </div>
    </div>
  )
}
