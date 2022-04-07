import React from 'react'
import me from "./me.jpeg"
import "./AboutMe.css"

export default function AboutMe() {
  return (
    <div className='about'>

        <h1>About Me</h1>
        <h4>FreeLancer, Student monetor, Web Developer</h4>
        
        <p className='bold'>Hi,</p> 

        <p className='text'>
            My Name is Nadeem, thanks for stopping by!
            I currently live in Tel-Aviv, Israel and a Student of Computer Science and mathematics in Ariel University with plans to graduate in august of 2022.
            I love Swiming, surfing, Mind Games(especial chess) also i like adventures, Off-Road trip, nature taril, camping And traviling. 
            <br/>
            I have passion for codding, Developing Webs and algorithems.
            I’m working as a freelance web developer, also enjoy using my knowledge to teach Students with Java, Python, Data-structure and Mathematics. 
            Amming to teach in "Tzameret College" some courses about Web Developing.
            <br/>
            On of my piggest projects was a Research and Machine developing about DoH protocol which was my final project in my educational path.
            Also I'm proud of other projects which included in Project site.
            <br/>
            {/* Programming is the future wich will build our New World, so lets make all the difference*/}
        </p>

        <img src={me} />

    </div>
  )
}
