import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function Home() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Canvas Prototypes</h1>
        <p className="text-gray-600 mb-8">
          Interactive UI prototypes for NorthHarbor concepts.
        </p>
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <p className="text-gray-500 text-sm">
            No prototypes yet. When a concept is promoted from mockup to prototype,
            it will appear here as a route.
          </p>
        </div>
      </div>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <nav className="bg-white border-b border-gray-200 px-6 py-3">
        <Link to="/" className="text-sm font-medium text-gray-700 hover:text-gray-900">
          Canvas
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
