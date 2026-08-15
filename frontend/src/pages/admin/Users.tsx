import React, { useState, useMemo } from 'react'

type User = {
  id: string
  name: string
  city: string
  verified: boolean
  banned: boolean
  vip: 'none' | 'silver' | 'gold' | 'platinum'
}

const MOCK_USERS: User[] = [
  { id: '1', name: 'Amina', city: 'Dar es Salaam', verified: true, banned: false, vip: 'gold' },
  { id: '2', name: 'Juma', city: 'Arusha', verified: false, banned: false, vip: 'none' },
  { id: '3', name: 'Fatima', city: 'Mwanza', verified: true, banned: true, vip: 'silver' },
  { id: '4', name: 'Sam', city: 'Dodoma', verified: false, banned: false, vip: 'platinum' },
]

export default function Users(){
  const [query, setQuery] = useState('')
  const [users, setUsers] = useState<User[]>(MOCK_USERS)

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim()
    if(!q) return users
    return users.filter(u => u.name.toLowerCase().includes(q) || u.city.toLowerCase().includes(q) || u.id === q)
  }, [query, users])

  const toggleBan = (id: string) => {
    setUsers(prev => prev.map(u => u.id === id ? { ...u, banned: !u.banned } : u))
  }

  const approveProfile = (id: string) => {
    // mock approval: set verified true
    setUsers(prev => prev.map(u => u.id === id ? { ...u, verified: true } : u))
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <input
            className="px-3 py-2 border rounded w-72"
            placeholder="Quick search by name, city or id"
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
          <button className="px-3 py-2 rounded btn-brand-blue">Search</button>
        </div>
        <div className="text-sm text-gray-600">Total users: {users.length}</div>
      </div>

      <div className="card p-4">
        <table className="w-full text-left">
          <thead>
            <tr className="text-sm text-gray-500">
              <th className="py-2">ID</th>
              <th>Name</th>
              <th>City</th>
              <th>VIP</th>
              <th>Verified</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(u => (
              <tr key={u.id} className={`border-t ${u.banned ? 'opacity-60 bg-red-50' : ''}`}>
                <td className="py-3 text-sm text-gray-700">{u.id}</td>
                <td className="py-3">{u.name}</td>
                <td className="py-3">{u.city}</td>
                <td className="py-3 text-sm text-gray-600">{u.vip}</td>
                <td className="py-3">{u.verified ? '✅' : '—'}</td>
                <td className="py-3">
                  <div className="flex items-center space-x-2">
                    <button className="px-2 py-1 text-sm rounded border" onClick={() => approveProfile(u.id)} disabled={u.verified}>Approve</button>
                    <button className={`px-2 py-1 text-sm rounded border ${u.banned ? 'bg-red-500 text-white' : ''}`} onClick={() => toggleBan(u.id)}>{u.banned ? 'Unban' : 'Ban'}</button>
                    <button className="px-2 py-1 text-sm rounded border" onClick={() => alert('Open profile modal (mock)')}>View</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="text-sm text-gray-500">Notes: Ban toggles blacklist state (mock). Profile approval toggles verified flag.</div>
    </div>
  )
}
