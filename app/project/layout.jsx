import React from 'react'
import { Analytics } from "@vercel/analytics/react"
const layout = ({ children }) => {
    return (
        <div className=' '>
            {children}
        </div>
    )
}

export default layout