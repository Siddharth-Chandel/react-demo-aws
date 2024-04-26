import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyComponent from '../components/MyComponent.jsx'

export default function App() {
  return (
    <div className="text-5xl text-red-600">
      Hi !
      <MyComponent name={'Sumit'} />
    </div>
    
  )
}
