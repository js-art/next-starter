import handler from '@/handler'
import { getRoom,updateRoom,deleteRoom } from "@/ct/roomControllers"
handler.get(getRoom)
handler.patch(updateRoom)
handler.delete(deleteRoom)
export default handler