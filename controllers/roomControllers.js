import ErrorHandler from "@/ut/errorHandler"
import catchAsyncErrors from "@/mid/catchAsyncErrors"
import Room from '@/md/room'
import APIFeatures from "@/ut/apiFeature"
//Get all rooms => api/rooms
const allRooms = catchAsyncErrors(async (req, res) => {

    const resPerPage = 2;

    const roomsCount = await Room.countDocuments();

    const apiFeatures = new APIFeatures(Room.find(), req.query)
        .search()
        .filter()

    let rooms = await apiFeatures.query;
    let filteredRoomsCount = rooms.length;

    apiFeatures.pagination(resPerPage)
    rooms = await apiFeatures.query;

    res.status(200).json({
        success: true,
        roomsCount,
        resPerPage,
        filteredRoomsCount,
        rooms
    })

})

// Get single room => api/rooms/:id
const getRoom=catchAsyncErrors(async (req,res,next)=>{
    if(!req.query.id){
        console.log(req,res)
        return next(new ErrorHandler("Room not found",404))
    }
    let room=await Room.findById(req.query.id)
    console.log(req.query.id,room)
    if(!room){
      return next(new ErrorHandler("Room not found",404))
    }
    res.status(200).json({
        success:true,
        data:room
    })
  
})
//Create new room => api/rooms
const createRoom=catchAsyncErrors(async (req,res)=>{
    const room=await Room.create(req.body)
    res.status(200).json({
        success:true,
        data: room
    })
})
// update room => api/rooms/:id
const updateRoom=catchAsyncErrors(async (req,res)=>{
   
        let room=await Room.findById(req.query.id)
        if(!room){
           return next(new ErrorHandler("Room not found",404))
        }
        room=await Room.findByIdAndUpdate(req.query.id,req.body,{
            new:true,
            runValidators:true
        })
        res.status(200).json({
            success:true,
            data:room
        })
})
// delete room => api/rooms/:id
const deleteRoom=catchAsyncErrors(async (req,res,next)=>{
 
    let room=await Room.findById(req.query.id)
    if(!room){
        return next(new ErrorHandler("Room not found",404))
    }
    await room.remove()
    res.status(200).json({
        success:true,
        data:req.query.id
    })
   
})
export {
    allRooms,
    getRoom,
    createRoom,
    updateRoom,
    deleteRoom
}