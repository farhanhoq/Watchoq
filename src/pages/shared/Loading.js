import React from "react"
import PropagateLoader from "react-spinners/PropagateLoader"

const Loading = () => {
    return (
        <div className="flex items-center justify-center h-screen">
        <PropagateLoader color="#7B33FD" />
        </div>
    )
}

export default Loading
