import server from "./src/app.js"
import dotenv from "dotenv"

dotenv.config()

const port = process.env.port

server.listen(port, () => {
  console.log(`server is up on port ${port}`)
})
