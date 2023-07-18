import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import { useState } from "react"

export function Users({ blogging: { allUsers } }) {
  const [users, setUsers] = useState([])

  function fetchUsers() {
    allUsers().then(setUsers).catch(console.error)
  }

  useEffect(fetchUsers, [])

  return (
    <>
      <h2 className="text-3xl p-3">Users</h2>
      <hr />
      <UserTable users={users} />
    </>
  )
}

function UserTable({ users }) {
  return (
    <div className="flex justify-center items-center p-6 bg-gray-50">
      <table>
        <thead>
          <tr>
            <th className="text-left">ID</th>
            <th className="text-left">Name</th>
            <th className="text-left">Username</th>
            <th className="text-left">Email</th>
            <th className="text-left">Items</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id}>
              <td className="text-left p-2">{u.id}</td>
              <td className="text-left p-2">{u.name.toLowerCase()}</td>
              <td className="text-left p-2">{u.username.toLowerCase()}</td>
              <td className="text-left p-2">{u.email.toLowerCase()}</td>
              <td className="text-left p-2">
                <OptionList user={u} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function OptionList({ user: u }) {
  return (
    <ul className="flex flex-row gap-x-2">
      <li>
        <Link className="text-blue-500 " to={`/users/${u.id}/posts`}>
          Posts
        </Link>
      </li>
      <li>
        <Link className="text-blue-500 " to={`/users/${u.id}/albums`}>
          Albums
        </Link>
      </li>
    </ul>
  )
}
