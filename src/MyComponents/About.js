import React from 'react'

export const About = () => {
    let myStyle ={
        minHeight: "100vh",
    }
    return (
        
        <div className="container" style={myStyle}>
            <h2 className="text-center my-3 mb-4">About This TODO App</h2>
            <p>This is just a small react app where you can add and delete your todo task and can also see the rendered data in the console of the web page it self.</p>
        </div>
    )
}