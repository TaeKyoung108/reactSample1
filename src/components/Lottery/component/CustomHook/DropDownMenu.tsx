import {useState} from "react";
interface DropdownMenuProps{
    selector : number;
    handleListChangeClick: (index: number) => void;
    dropDownTable : String[];
    disabled? : boolean
}

const DropdownMenu = ({selector, handleListChangeClick,dropDownTable,disabled}: DropdownMenuProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        if (typeof disabled === 'undefined' || !disabled) {
            setIsOpen(!isOpen);
        }
    };

    const handleOptionClick = (option : number) => {
        handleListChangeClick(option);
        setIsOpen(false);
    };

    return (
        <div className="relative h-[60%] w-[100px] flex items-center">
            <div className={`h-[50%] w-[100%]`}>
                <button onClick={toggleDropdown} className={`${disabled? 'cursor-not-allowed' :''} px-4 py-2 bg-blue-500 text-white rounded focus:outline-none`}>
                    {dropDownTable[selector]}
                </button>
                {isOpen && (
                    <div className="absolute right-0 w-full mt-2 origin-top-right bg-white border border-gray-200 rounded shadow-lg z-10">
                        {dropDownTable.map((item, index) => (
                            <a key={index} href="#" onClick={() => handleOptionClick(index)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">{item}</a>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default DropdownMenu;