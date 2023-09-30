import React from "react";
import { Link } from "react-router-dom";
import "../styles/Projects.css";
import placeholder from "../images/placeholder.jpg";
import spotify from "../images/spotifyLogo.jpg"

export default function Projects () {

    return (
        
        <div className="projects">
            <h2 className="projects--h2">PROJECTS</h2>
            <div className="project-grid">

                <div className="spotify">
                    <p className="p--spotify">Spotify 500</p>

                    <img src={spotify} className="img--placeholder" id="img--modal" ></img>
                        <div className="p--spotifyDetails">Spotify redesign that features Rolling Stone Magazine's Top 500 albums of all time.</div>
                        
                    <a target="_blank" rel="noopener"><button className="button--modal">LIVE</button></a>
                    <a target="_blank" rel="noopener" href="https://github.com/ma-boles/Spotify500"><button className="button--modal">CODE</button></a>
                    <button className="button--modal">
                        <Link to="./pages/Spotify">
                            DETAILS 
                        </Link>
                        </button>
                </div>
                

                <div className="lessonBook">
                    <p className="p--lessonBook">LessonBook</p> 
                    <img src={placeholder} className="img--placeholder" id="img--modal" ></img>
                        <div className="p--lessonDetails">LessonBook, a site designed for freelance teachers and others, to stay better connected with their students.</div>

                        <a target="_blank" rel="noopener"><button className="button--modal">LIVE</button></a>                    <a  target="_blank" rel="noopener" href="https://github.com/ma-boles/LessonBook-version1"><button className="button--modal">CODE</button></a>
                        <button className="button--modal">
                            <Link to="./pages/LessonBook">
                            DETAILS
                            </Link>
                            </button>
                </div>
        

                <div className="discogs"><p className="p--discogs">Discogs</p>
                    <img src={placeholder} className="img--placeholder" id="img--modal" ></img>
                        <div className="p--discogsDetails">Total re-imagining of the music e-commerce site, Discogs.</div>

                        <a target="_blank" rel="noopener"><button className="button--modal">LIVE</button></a>                       <button className="button--modal">CODE</button>
                        <button className="button--modal">DETAILS
                           
                            </button>

                </div>

            </div>
        </div>
    )
}