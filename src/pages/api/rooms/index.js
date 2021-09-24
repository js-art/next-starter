import handler from '@/handler'
import { allRooms,createRoom } from "@/ct/roomControllers"

handler.get(allRooms)
handler.post(createRoom)


export default handler