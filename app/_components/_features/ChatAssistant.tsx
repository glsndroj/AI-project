import { useEffect, useRef, useState } from "react"


export default function ChatAssistant(){
    const [messages, setMessages] = useState([
        {
            role: "assistant",
            content: "Hello, How can i help you?"
        }
    ])
    const [input, setInput] = useState("")
    const bottomRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        bottomRef.current?.scrollIntoView({behavior: "smooth"})
    }, [messages])

    const sendMessage = async ()=> {
        if(!input.trim()) return;
    }

    const userMessage = {role: "user", content: input}

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    return (
        <div></div>
    )
}