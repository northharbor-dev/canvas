import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import SageOrbPage from './sage-orb'

function Home() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Canvas Prototypes</h1>
        <p className="text-gray-600 mb-8">
          Interactive UI prototypes for NorthHarbor concepts.
        </p>
        <div className="space-y-3">
          <Link
            to="/sage-orb"
            className="block bg-white rounded-lg border border-gray-200 p-6 hover:border-emerald-300 hover:shadow-md transition-all"
          >
            <h2 className="text-lg font-semibold text-gray-900 mb-1">Sage Orb</h2>
            <p className="text-gray-500 text-sm">
              Animated energy orb avatar for the Sage AI assistant.
              Three states: at rest, thinking, responding.
            </p>
          </Link>
        </div>
      </div>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <nav className="bg-white border-b border-gray-200 px-6 py-3 flex gap-4">
        <Link to="/" className="text-sm font-medium text-gray-700 hover:text-gray-900">
          Canvas
        </Link>
        <Link to="/sage-orb" className="text-sm text-gray-500 hover:text-gray-700">
          Sage Orb
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sage-orb" element={<SageOrbPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
