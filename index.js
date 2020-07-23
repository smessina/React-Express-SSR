import express from 'express'
import React from 'react'
import ReactDOM  from 'react-dom/server'
import App from "./components/App"

const server = express()

const port = process.env.PORT || 4000

server.listen( port )

server.get("/react", (req, res) => {

    res.end( ReactDOM.renderToString( <App title='Hola React' />) )

})