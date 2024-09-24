export default function SecondaryIconLabelButton() {
  return (
    <button className="w-[119px] h-[40px] rounded-lg py-[8px] pr-[16px] pl-[12px] flex items-center gap-[8px] bg-grey-100 hover:bg-grey-90 active:bg-grey-80">
      <img
        src="/icons/Add.svg"
        alt="Add"
        className="h-[13.5px] w-[13.5px] top-[5.25px] left-[5.25px]"
      />
      Add new
    </button>
  );
}
