import React from "react";
import "../styles/App.css"

export default function Spotify () {
    return (
        <>
        <div className="pages--App">
            <button className="details--button">HOME</button>
                <h1 className='details--h1'>Spotify 500</h1>
                    <div className='details'>
                        <img className='details--img'></img>
                        <div className='details--div'>
                            <p className='details--p'> <strong className='details--strong'>BACKSTORY:</strong> As life long music fan, I've always had a great interest in the history and the artists that influenced many of my personal favorite albums and artists, so while I was sick earlier this year, I had the great idea of making my way through the Rolling Stone Magazine's Top 500 Albums list. To my surprise, there was no easy way to listen to any of the albums besides searching for each individually on Spotify. So, this project is my attempt to make one place anyone can come to hear all of that great music.</p>
                            <p className='details--p'><strong className='details--strong'>BUILD:</strong>Javascript | React</p>
                        </div>
                        <div>
                            <button className='details--button2'>LIVE</button>
                            <a href="https://github.com/ma-boles/Spotify500"><button className='details--button2'>CODE</button></a>
                        </div>
                    
                    </div>
        </div>
        </>
    )
}