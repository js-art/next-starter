import nc from 'next-connect'
import dbConnect from '@/db'
import onError from '@/mid/errors'
dbConnect()
const handler=nc({onError})
export default handler