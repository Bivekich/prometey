import { useState, useEffect } from 'react'

export const useWindowsSize = () => {
    const [ windowsSize, setWindowsSize ] = useState({
        width: 0,
        height: 0,
    })
    useEffect(() => {
        function handleResize() {
            setWindowsSize({
                width: window.innerWidth,
                height: window.innerHeight,
            })
        }
        window.addEventListener('resize', handleResize)
        handleResize()
        return () => window.removeEventListener('resize', handleResize)
    }, []);
    return windowsSize
}