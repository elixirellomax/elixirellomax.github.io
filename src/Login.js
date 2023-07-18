import React, { useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"

export function Login({ authService }) {
  const navigate = useNavigate()

  const [lastError, setLastError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  function authenticate() {
    authService
      .authenticate()
      .then(() => navigate("/home", { replace: true }))
      .catch((err) => setLastError(err.message))
  }

  if (authService.isAuthenticated) return <Navigate to={"/home"} />

  return (
    <>
      <h2>{isLoading ? "Loading ...." : "Login"}</h2>
      <button onClick={authenticate}>Authneticate</button>
      {lastError && <p>{lastError}</p>}
    </>
  )
}
