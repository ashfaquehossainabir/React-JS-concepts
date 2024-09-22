import React, { useState, useEffect } from 'react'

function ConceptsOfUseEffect2() {
    const [width, setWidth] = useState(window.innerWidth)
    const [height, setHeight] = useState(window.innerHeight)

    useEffect(() => {
        window.addEventListener("resize", handleResize)
        console.log("Event Listener Added")

        return () => {
            window.removeEventListener("resize", handleResize)
            console.log("Event Listener Removed")
        }
    }, [])

    useEffect(() => {
        document.title = `Size: ${width} x ${height}`
    }, [width, height])

    function handleResize() {
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    }

    return (
        <>
            <p>Window Width: { width }</p>
            <p>Window Height: { height }</p>
        </>
    )
}

export default ConceptsOfUseEffect2