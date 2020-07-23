import React from 'react'
import Menu from './Menu'

const items = [
    { id : 1, name : "Coffe" },
    { id : 2, name : "Milk" },
    { id : 3, name : "Sugar" },
    { id : 4, name : "Cookies" }
]

const App = props => {
    return(
        <html>
            <head>
                <title>{props.title}</title>
            </head>
            <body>
                { <Menu items={ items } /> }
            </body>
        </html>
    )
 }

module.exports = App