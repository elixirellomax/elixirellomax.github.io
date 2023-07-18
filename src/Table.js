import React from "react"

export function Table({ columns, items }) {
  return (
    <table className="border p-4 border-collapse">
      <thead>
        <tr className="border bg-slate-50">
          {columns.map((c) => (
            <th className="text-left p-4 ">{c}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr>
            {columns.map((c) => (
              <td className="text-left p-2 px-4">{item[c]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
