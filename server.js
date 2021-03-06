/**
 * import express library
 */
 const express = require('express')
 /**
  * import Next library
  */
 const next = require('next')
 /**
  * Set Project Type
  */
 const dev = process.env.NODE_ENV !== 'production'
 /**
  * Set Next Server Settings
  */
 const app = next({ dev })
 const handle = app.getRequestHandler()
     /**
      * Start Server
      */
 app.prepare()
 .then(() => {
   const server = express()
     
   server.get('*', (req, res) => {
     return handle(req, res)
   })
     
   server.listen(3000, (err) => {
     if (err) throw err
     console.log('> Ready on http://localhost:3000')
   })
 })
 .catch((ex) => {
   console.error(ex.stack)
   process.exit(1)
 })