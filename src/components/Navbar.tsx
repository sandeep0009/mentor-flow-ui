import { ArrowBigDown, ArrowDown, Bell } from "lucide-react"


const Navbar=()=>{
    return(
        <div className="flex justify-end gap-8 p-4">
            <div className="border border-gray-400 h-8 w-8 rounded justify-center shadow-2xl p-2">
                <Bell color="#6b7280" size={14}/>
            </div>

            <div>
                <button className="border border-gray-400 shadow rounded flex gap-4 items-center h-8">
                    <span className="text-gray-400 text-sm p-2">Jimmmy</span>
                    <span className="p-2"><ArrowDown size={12} color="#6b7280"/></span>
                </button>
            </div>

        </div>

    )
}

export default Navbar