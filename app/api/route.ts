export async function GET(){
    const todos = [
        {
            name: "Galsandorj",
            age: 33,
            id: 1

        }
    ]
    return Response.json(todos)
}

export async function POST(request: Request){
    
    const body = await request.json()
    console.log(body)
    return Response.json({ message: "Mauahahaha"})
}