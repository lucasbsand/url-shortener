interface MenuButton {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

function MenuButton({ isOpen, setIsOpen }: MenuButton) {
  return (
    <div
      className="flex w-8 cursor-pointer flex-col gap-y-2 transition-all active:px-1 md:hidden"
      onClick={() => setIsOpen(!isOpen)}
    >
      {["top", "center", "bottom"].map((item) => (
        <div
          key={item}
          className={"h-1 w-full origin-center bg-grayish-violet"}
        ></div>
      ))}
    </div>
  );
}

export default MenuButton;
