import React from "react"
import { Link, Outlet, useNavigate } from "react-router-dom"

export function MainLayout({ authService }) {
  const navigate = useNavigate()

  function logout() {
    authService.logout().then(() => navigate("/login"))
  }

  return (
    <div>
      <nav className="border-b border-gray-300">
        <ul className="flex justify-center p-4">
          <li>
            <Link className="text-blue-700 p-4" to={"/login"}>
              Login
            </Link>
          </li>
          <li>
            <Link className="text-blue-700 p-4" to={"/users"}>
              Users
            </Link>
          </li>
          <li>
            <Link className="text-blue-700 p-4" to={"/albums"}>
              Albums
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  )
}
