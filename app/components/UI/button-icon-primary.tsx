export default function ButtonIconPrimary() {
  return (
    <button className="flex items-center justify-center w-[40px] h-[40px] rounded-lg p-[8px] gap-[8px] bg-grey-60 hover:bg-grey-50 active:bg-grey-40">
      <img
        src="/icons/Add.svg"
        alt="Add"
        className="h-[13.5px] w-[13.5px] top-[5.25px] left-[5.25px]"
      />
    </button>
  );
}
