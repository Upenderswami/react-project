import { useState } from "react"
function My() {
    const [count, setCount] = useState(0)
    function inc() {

        if (count < 10) {
            setCount(count + 1)
        }
    }
    function dic() {

        if (count > 0) {
            setCount(count - 1)
        }
        
    }
    return (
        <>
            <button onClick={inc}>Increment</button>
            <p>{count}</p>
            <button onClick={dic}>Dicrement</button>
        </>
    )
}
export default My
