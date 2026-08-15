import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Discovery from './pages/Discovery'
import AdminDashboard from './pages/AdminDashboard'
import Profile from './pages/Profile'

export default function App(){
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold">findyourstz</Link>
          <nav>
            <Link to="/" className="mr-4 text-sm">Discover</Link>
            <Link to="/profile" className="mr-4 text-sm">Profile</Link>
            <Link to="/admin" className="text-sm">Admin</Link>
          </nav>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-6">
        <Routes>
          <Route path="/" element={<Discovery />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/admin/*" element={<AdminDashboard />} />
        </Routes>
      </main>
    </div>
  )
}
