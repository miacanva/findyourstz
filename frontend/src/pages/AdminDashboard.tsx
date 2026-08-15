import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import AdminHome from './admin/AdminHome'
import Moderation from './admin/Moderation'
import Users from './admin/Users'
import Monetization from './admin/Monetization'
import Analytics from './admin/Analytics'
import Logs from './admin/Logs'

export default function AdminDashboard(){
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
        <nav className="space-x-4 text-sm">
          <Link to="/admin" className="text-sm">Overview</Link>
          <Link to="/admin/users" className="text-sm">Users</Link>
          <Link to="/admin/moderation" className="text-sm">Moderation</Link>
          <Link to="/admin/analytics" className="text-sm">Analytics</Link>
          <Link to="/admin/monetization" className="text-sm">Monetization</Link>
          <Link to="/admin/logs" className="text-sm">Logs</Link>
        </nav>
      </div>

      <Routes>
        <Route path="/" element={<AdminHome />} />
        <Route path="/users" element={<Users />} />
        <Route path="/moderation" element={<Moderation />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/monetization" element={<Monetization />} />
        <Route path="/logs" element={<Logs />} />
      </Routes>
    </div>
  )
}
