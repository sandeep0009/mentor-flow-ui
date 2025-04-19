import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

type DropDownProps = {
  title: string;
  options: string[];
};

const DropDown = ({ title, options }: DropDownProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState<string[]>([]);

    const toggleOption = (option: string) => {
        setSelected((prev) =>
            prev.includes(option) ? prev.filter((o) => o !== option) : [...prev, option]
        );
    };

    return (
        <div className="relative min-w-[180px]">
            <button
                className="flex justify-between items-center w-full bg-white border border-gray-300 rounded px-3 py-2 text-sm shadow hover:bg-gray-50"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span>{title}</span>
                {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>

            {isOpen && (
                <div className="absolute left-0 right-0 z-10 mt-2 bg-white border border-gray-300 rounded shadow p-2 space-y-2">
                    {options.map((option) => (
                        <label key={option} className="flex items-center space-x-2 text-sm">
                            <input
                                type="checkbox"
                                checked={selected.includes(option)}
                                onChange={() => toggleOption(option)}
                            />
                            <span className="whitespace-nowrap">{option}</span>
                        </label>
                    ))}
                </div>
            )}
        </div>
    );
};

export default DropDown;