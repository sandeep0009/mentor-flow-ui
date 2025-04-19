import DropDown from "../components/ui/DropDown";

const roleOptions = ["SE/SDE", "DS/AI/ML", "Product Management", "Project Management", "Consulting", "Quantitative Finance"];
const companyOptions = ["FANG", "StartUps", "MNC's", "Others"];
const slotOptions = ["This week", "Next week", "Anytime"];
const ratingOptions = ["Low to High", "High to Low"];

const Mentor = () => {
    return (
        <div className="bg-gray-100 w-full ">
            <div className="max-w-6xl mx-auto py-4">

                <div className="flex items-center justify-between px-4">
                    <h1 className="text-[#0F172A] text-2xl font-semibold">Mentors</h1>
                    <button className="bg-gray-100 border border-gray-300 shadow rounded px-4 py-2 text-sm hover:bg-gray-50">
                        Become a mentor
                    </button>
                </div>

                <div className="flex items-center justify-between px-4 mt-6 gap-4 ">

                    <input
                        type="text"
                        placeholder="Search by name"
                        className="bg-gray-100 text-gray-500 p-2 w-64 rounded border border-gray-300"
                    />

                    <div className="flex items-center gap-4">
                        <DropDown title="Role" options={roleOptions} />
                        <DropDown title="Company" options={companyOptions} />
                        <DropDown title="Slot" options={slotOptions} />
                        <DropDown title="Rating" options={ratingOptions} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Mentor;