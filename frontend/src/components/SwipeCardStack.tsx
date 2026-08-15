import React from 'react'
import TinderCard from 'react-tinder-card'

const MOCK = [
  { id: '1', name: 'Amina, 24', city: 'Dar es Salaam', img: 'https://picsum.photos/seed/amina/400/600' },
  { id: '2', name: 'Juma, 28', city: 'Arusha', img: 'https://picsum.photos/seed/juma/400/600' },
  { id: '3', name: 'Fatima, 22', city: 'Mwanza', img: 'https://picsum.photos/seed/fatima/400/600' },
]

export default function SwipeCardStack(){
  const swiped = (direction: string, name: string) => {
    console.log('Swiped', direction, name)
  }

  const outOfFrame = (name: string) => {
    console.log(name, 'left the screen')
  }

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {MOCK.map(profile => (
        <TinderCard
          className="absolute"
          key={profile.id}
          onSwipe={(dir) => swiped(dir, profile.name)}
          onCardLeftScreen={() => outOfFrame(profile.name)}
          preventSwipe={["up","down"]}
        >
          <div className="w-80 h-[520px] bg-white rounded-lg shadow-md overflow-hidden">
            <img src={profile.img} alt={profile.name} className="w-full h-72 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{profile.name}</h3>
              <p className="text-gray-500">{profile.city}</p>
            </div>
          </div>
        </TinderCard>
      ))}
    </div>
  )
}
