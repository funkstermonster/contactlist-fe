export default function ListItem() {
    return (
        <div className="w-[251px] h-[196px] border-[1px] border-grey-70 p-[16px] gap-[16px] bg-grey-80">
            <button className="w-[219px] h-[44px] py-3 px-2.5 flex items-center gap-[12px] hover:bg-grey-70 focus:bg-grey-60">
                <img src="icons/Settings.svg" alt="Settings" className="opacity-56" />
                <span className="text-white">Edit</span> {/* Optional: add color for better visibility */}
            </button>
        </div>
    );
}
