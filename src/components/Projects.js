import React from "react";
import { Link } from "react-router-dom";
import "../styles/Projects.css";
import placeholder from "../images/placeholder.jpg";
import spotify from "../images/RS-header.jpg"

export default function Projects () {
    return (
        <section className="projects" id="projects">
            <div className="project-grid">
                <div className="spotify">
                    <p className="p--spotify">Spotify 500</p>
                    <img src={spotify} className="img--placeholder" id="img--modal" ></img>
                    
                </div>
                <div className='details--div'>
                        <p className='details--p'> <strong className='details--strong'>BACKSTORY:</strong> As life long music fan, I've always had a great interest in the history and the artists that influenced many of my personal favorite albums and artists, so while I was sick earlier this year, I had the great idea of making my way through the Rolling Stone Magazine's Top 500 Albums list. To my surprise, there was no easy way to listen to any of the albums besides searching for each individually on Spotify. So, this project is my attempt to make one place anyone can come to hear all of that great music.</p><br />
                        <p className='details--p'><strong className='details--strong'>BUILD:</strong>Javascript | React</p>

                        <div className="button--group">
                            <a target="_blank" rel="noopener"><button className="button--modal" id="live">LIVE</button></a>
                            <a target="_blank" rel="noopener" href="https://github.com/ma-boles/Spotify500"><button className="button--modal">CODE</button></a>
                        </div>
                        <hr />
                </div>
                    
                <div className="lessonBook">
                    <p className="p--lessonBook">LessonBook</p> 
                    <img src={placeholder} className="img--placeholder" id="img--modal" ></img>
                </div>
                <div className='details--div'>
                        <p className='details--p'> <strong className='details--strong'>BACKSTORY:</strong> While working as an English teacher in Japan, the school I worked for didn't have an effective system for taking attendance, keeping records, or communicating between teachers and students. This was inefficient and led to slower communication times. </p><br />
                        <p className='details--p'><strong className='lessonBook--strong'>LESSON BOOK</strong> aims to streamline the process by creating a central place for teachers, students, and staff to easily communicate and to send and access any supplementary study materials. Lesson Book can also be utilized by freelance teachers who may work with a number of students to help them stay organized.</p><br/ >
                        <p className='details--p'><strong className='details--strong'>BUILD:</strong>Javascript | React</p>

                        <div className="button--group">
                            <a target="_blank" rel="noopener"><button className="button--modal" id="live">LIVE</button></a>                   
                            <a  target="_blank" rel="noopener" href="https://github.com/ma-boles/LessonBook-version1"><button className="button--modal">CODE</button></a>
                         </div>
                    </div>

                {/*<div className="discogs"><p className="p--discogs">Discogs</p>
                    <img src={placeholder} className="img--placeholder" id="img--modal" ></img>
                        <div className="p--discogsDetails">Total re-imagining of the music e-commerce site, Discogs.</div>

                        <a target="_blank" rel="noopener"><button className="button--modal">LIVE</button></a>                       <button className="button--modal">CODE</button>
                        <button className="button--modal">DETAILS</button>
                </div>*/}

            </div>
        </section>
    )
}