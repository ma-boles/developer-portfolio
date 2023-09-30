import React from "react";
import "./App.css"

export default function LessonBook () {
    return (
        <>
        <div className="pages--App">
            <button className="details--button">HOME</button>
            <h1 className='details--h1'>Lesson Book</h1>
                <div className='details'>

                    <img className='details--img'></img>
                    <div className='details--div'>
                        <p className='details--p'> <strong className='details--strong'>BACKSTORY:</strong> While working as an English teacher in Japan, the school I worked for didn't have an effective system for taking attendance, keeping records, or communicating between teachers and students. This was inefficient and led to slower communication times. </p>
                        <p className='details--p'><strong className='lessonBook--strong'>LESSON BOOK</strong> aims to streamline the process by creating a central place for teachers, students, and staff to easily communicate and to send and access any supplementary study materials. Lesson Book can also be utilized by freelance teachers who may work with a number of students to help them stay organized.</p>
                        <p className='details--p'><strong className='details--strong'>BUILD:</strong>Javascript | React</p>

                        <div>
                            <button className='details--button2'>LIVE</button>
                            <a href="https://github.com/ma-boles/Spotify500"><button className='details--button2'>CODE</button></a>
                        </div>
                    </div>
                    
                </div>
       </div>
        </>
    )
}