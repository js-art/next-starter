require('./dbConnect')
const Room= require('../models/room')
const dataRooms= require('../data/rooms')

const seedRooms=async ()=>{
    try{
        await Room.deleteMany()
        console.log("Rooms are deleted...")
        await Room.insertMany(dataRooms)
        console.log("All Rooms are added.")
        process.exit()
    }
    catch(error){
        console.log(error.message)
        process.exit()
    }
}
seedRooms()