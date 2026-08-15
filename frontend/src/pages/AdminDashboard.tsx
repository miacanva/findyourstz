import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import AdminHome from './admin/AdminHome'
import Moderation from './admin/Moderation'

export default function AdminDashboard(){
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
        <nav className="space-x-4">
          <Link to="/admin" className="text-sm">Overview</Link>
          <Link to="/admin/moderation" className="text-sm">Moderation</Link>
        </nav>
      </div>

      <Routes>
        <Route path="/" element={<AdminHome />} />
        <Route path="/moderation" element={<Moderation />} />
      </Routes>
    </div>
  )
}
