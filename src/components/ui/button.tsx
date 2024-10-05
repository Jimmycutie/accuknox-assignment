const Button = ({ children, themeColor, onClick, setCategoryId }: any) => {
  function handleClick() {
    onClick((prev: boolean) => !prev);
    setCategoryId(null);
  }
  return (
    <button
      className={`flex p-2 bg-[#fff] max-h-max border-2 border-solid border-[${
        themeColor ? "#2e216e" : "#e3e3e3"
      }] rounded-md items-center justify-center text-[${
        themeColor ? "#2e216e" : "#e3e3e3"
      }]`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
