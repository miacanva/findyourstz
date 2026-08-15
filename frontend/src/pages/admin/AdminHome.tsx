import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  { day: 'Mon', users: 120 },
  { day: 'Tue', users: 210 },
  { day: 'Wed', users: 150 },
  { day: 'Thu', users: 300 },
  { day: 'Fri', users: 200 },
  { day: 'Sat', users: 250 },
  { day: 'Sun', users: 400 },
]

export default function AdminHome(){
  return (
    <div className="space-y-6">
      <section className="bg-white p-4 rounded shadow">
        <h2 className="text-lg font-medium mb-2">Active users (last 7 days)</h2>
        <div style={{ width: '100%', height: 240 }}>
          <ResponsiveContainer>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="users" stroke="#FF5864" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </section>

      <section className="bg-white p-4 rounded shadow">
        <h2 className="text-lg font-medium mb-2">Quick users</h2>
        <table className="w-full text-left">
          <thead>
            <tr className="text-sm text-gray-500">
              <th className="py-2">ID</th>
              <th>Name</th>
              <th>City</th>
              <th>Verified</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 text-sm text-gray-700">1</td>
              <td className="py-2">Amina</td>
              <td className="py-2">Dar es Salaam</td>
              <td className="py-2">✅</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="py-2 text-sm text-gray-700">2</td>
              <td className="py-2">Juma</td>
              <td className="py-2">Arusha</td>
              <td className="py-2">—</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  )
}
