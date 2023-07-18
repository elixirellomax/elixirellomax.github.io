import React from "react"
import { useLocation } from "react-router-dom"

export function PageNotFound() {
  const location = useLocation()

  return (
    <div className="flex justify-center items-center p-24">
      <h2 className="text-black text-4xl">
        Page Not Found <span className="text-red-800">{location.pathname}</span>
      </h2>
    </div>
  )
}
