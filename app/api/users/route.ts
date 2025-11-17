import { User } from "@/models/user.Schema"
import connectDB from "@/utils/mongodb"


export async function GET(){
await connectDB()
const users = await User.find()
    return Response.json({users})
}

export async function POST(request: Request){
    await connectDB()
    const body = await request.json()
    await User.create(body)
    
    return Response.json({ message: "Mauahahaha"})
}