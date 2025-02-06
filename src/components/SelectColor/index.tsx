interface ISelectColors {
  colors: string[];
  active: string;
  handleSelectColor: (color: string) => void;
}

const SelectColor = ({ colors, active, handleSelectColor }: ISelectColors) => {
  return (
    <div className="flex  gap-2 items-center">
      {colors.map((color) => (
        <button
          key={color}
          className={`p-0 w-8 h-8 rounded-full border-2 ${active === color ? "border-pink-500" : "border-gray-500"}`}
          style={{ backgroundColor: color }}
          onClick={() => handleSelectColor(color)}
        />
      ))}
    </div>
  );
};

export default SelectColor;
