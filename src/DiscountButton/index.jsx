function DiscountButton({percent, handlePercentageCalc}) {
  return (
    <button className="bg-teal-900 w-24 py-2 border-2 border-teal-900 rounded-md text-white font-semibold mt-3 hover:border-2 hover:border-teal-500 focus:bg-teal-500 sm:w-36 lg:w-28" onClick={handlePercentageCalc}>
      {percent}%
    
    </button>
  );
}

export default DiscountButton;
