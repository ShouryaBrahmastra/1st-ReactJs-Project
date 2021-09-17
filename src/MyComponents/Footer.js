import React from 'react'
import '../MyComponents/footer.css'

export const Footer = () => {
    let footerStyle = {
        position: "sticky",
        bottom: "0",
        width: "100%",
        border: "2px solid purple",
    }
    return (
        <footer className="bg-dark text-light py-2" style={footerStyle}>
            <p className="text-center">
            Copyright &copy; MyTodosList.com  </p>         
        </footer>
    )
}
