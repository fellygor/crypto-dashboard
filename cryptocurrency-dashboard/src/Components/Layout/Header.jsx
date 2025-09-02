import { Menu, TestTubeDiagonal, ToggleLeft } from 'lucide-react'
import { Search } from 'lucide-react'

function Header({toggleSidebar}){
    
    return(
        <div className="bg-white px-6 py-4">
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                    <button className="p-2 rounded-lg text-slate-600" onClick={toggleSidebar}>
                        {/* <Menu className="w-5 h-5" /> */}
                    </button>

                    <div className=" hidden md:block">
                        <h1 className="text-2xl font-black text-slate-800 ">Dashboard</h1>
                        <p>Welcome back, Felista</p>
                    </div>
                </div>
                {/* Center */}
                
                <div className="flex items-center space-x-4">
                    <button className="p-2 rounded-lg text-slate-600">
                        <ToggleLeft className="w-7 h-7" />
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Header