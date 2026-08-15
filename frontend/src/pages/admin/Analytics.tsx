import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts'

const dau = [
  { day: '2026-08-09', users: 200 },
  { day: '2026-08-10', users: 320 },
  { day: '2026-08-11', users: 280 },
  { day: '2026-08-12', users: 360 },
  { day: '2026-08-13', users: 410 },
  { day: '2026-08-14', users: 380 },
  { day: '2026-08-15', users: 420 },
]

const matchRate = [
  { day: 'Mon', rate: 4.2 },
  { day: 'Tue', rate: 3.5 },
  { day: 'Wed', rate: 5.1 },
  { day: 'Thu', rate: 4.8 },
  { day: 'Fri', rate: 6.2 },
  { day: 'Sat', rate: 7.0 },
  { day: 'Sun', rate: 8.3 },
]

const geo = [
  { name: 'Dar es Salaam', value: 420 },
  { name: 'Arusha', value: 120 },
  { name: 'Mwanza', value: 90 },
  { name: 'Dodoma', value: 60 },
]

export default function Analytics(){
  return (
    <div className="space-y-6">
      <section className="card p-4">
        <h2 className="text-lg font-medium mb-2">Daily Active Users (DAU)</h2>
        <div style={{ width: '100%', height: 200 }}>
          <ResponsiveContainer>
            <LineChart data={dau}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="users" stroke="#3B82F6" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </section>

      <section className="card p-4">
        <h2 className="text-lg font-medium mb-2">Match rate (weekly)</h2>
        <div style={{ width: '100%', height: 180 }}>
          <ResponsiveContainer>
            <BarChart data={matchRate}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis unit="%" />
              <Tooltip />
              <Bar dataKey="rate" fill="#FF5864" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>

      <section className="card p-4">
        <h2 className="text-lg font-medium mb-2">Geographic spread</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <ul className="space-y-2">
              {geo.map(g => (
                <li key={g.name} className="flex items-center justify-between">
                  <div>{g.name}</div>
                  <div className="text-sm text-gray-600">{g.value} users</div>
                </li>
              ))}
            </ul>
          </div>
          <div style={{ width: '100%', height: 160 }}>
            <ResponsiveContainer>
              <LineChart data={geo.map((g,i)=>({name:g.name, value:g.value}))}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#FF5864" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>
    </div>
  )
}
