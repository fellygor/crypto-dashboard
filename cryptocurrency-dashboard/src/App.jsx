import './App.css'
import Sidebar from './Components/Layout/Sidebar'
import Header from './Components/Layout/Header'
import Dashboard from './Components/Layout/Dashboard'

function App() {
  return (
    <div className="min-h-screen transition-all duration-500">
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header />
          <main className="flex-1 overflow-y-auto">
            <Dashboard />
          </main>
        </div>
      </div>
    </div>
  )
}

export default App
