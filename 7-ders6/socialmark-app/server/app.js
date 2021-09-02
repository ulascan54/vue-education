const socketio=require("socket.io")
const express=require("express")
const http=require("http")
const app =express()
const PORT= process.env.PORT|| 2018
const server= http.createServer(app)
const io = socketio(server,{
  cors:{
    origin:"*",
    methods:["GET","POST","OPTIONS"],
  }
})

server.listen(PORT,()=>{
  // console.log(`Sunucu ${PORT}' üzerinden çalışmaktadır`)
  io.on("connection",socket => {
    console.log("hoppappsdpap");
    console.log('socket :>> ', socket.id);
    // socket.join()
    // io.in(roomID).emit()
    //!karşılama msj
    socket.emit("WELCOME_MESSAGE",`oooooooo ${socket.id} selamlar hoşgeldinnnn <3`)

    socket.on("SEND_MESSAGE",(e)=>console.log("Msj Geldi",e))
    socket.on("NEW_BOOKMARK_EVENT",(bookmark)=>{
      console.log('New bookmark eklendi :>> ', bookmark);
      //  io.emit("NEW_BOOKMARK_ADDED",bookmark)
      //!gönderen hariç herkese bookmark bilgisini gönder
       socket.broadcast.emit("NEW_BOOKMARK_ADDED",bookmark)
    })
  })
})