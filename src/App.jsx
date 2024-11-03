import { useState, useEffect } from "react";
import "./App.css";
import DiscountButton from "./DiscountButton";
import Form from "./Form";

function App() {
  const [discountAmount, setDiscountAmount] = useState(0);
  const [billAmount, setBillAmount] = useState(0);
  const [amountOfPeople, setAmountOfPeople] = useState(1);
  const [TotalTipAmount, setTotalTipAmount] = useState(0);
  const [totalPricePerPerson, setPricePerPerson] = useState(0);
  const [customAmount, setCustomAmount] = useState(0);

  function select5PercentTip() {
    setDiscountAmount(5);
  }
  function select10PercentTip() {
    setDiscountAmount(10);
  }
  function select15PercentTip() {
    setDiscountAmount(15);
  }
  function select25PercentTip() {
    setDiscountAmount(25);
  }
  function select50PercentTip() {
    setDiscountAmount(50);
  }

  function resetCalculator() {
    setAmountOfPeople(1);
    setBillAmount(0);
    setDiscountAmount(0);
  }

  function updateBillAmount(e) {
    if (e.target.value < 0) {
      setBillAmount(0);
    } else {
      setBillAmount(e.target.value);
    }
  }

  function updatePeopleAmount(e) {
    if (e.target.value < 1) {
      setAmountOfPeople(1);
    } else {
      setAmountOfPeople(e.target.value);
    }
  }

  useEffect(() => {
    const tipPer = ((billAmount / 100) * discountAmount) / amountOfPeople;
    const total = billAmount / amountOfPeople + tipPer;
    setTotalTipAmount(tipPer.toFixed(2));
    setPricePerPerson(total.toFixed(2));
  }, [billAmount, discountAmount, amountOfPeople, TotalTipAmount]);
  return (
    <>
      <div className="mx-auto mt-10 mb-14">
        <h1 className="text-center text-3xl tracking-[1.1rem] mb-1 font-semibold">
          SPLI
        </h1>
        <h1 className="text-center text-3xl tracking-[1.1rem] font-semibold">
          TTER
        </h1>
      </div>

      <div className="bg-white rounded-3xl p-6 mx-auto sm:w-2/3 lg:flex lg:w-7/12 ">
        <div className="w=10/12 mb-4 lg:w-1/2 lg:mr-2">
          <Form
            title={"Bill"}
            placeholder={"$"}
            handleChange={updateBillAmount}
          />

          <h2 className="text-sm font-medium mt-3 ">Select tip %</h2>
          <div className="w-full flex flex-wrap justify-between mb-3">
            <DiscountButton
              percent={"5"}
              handlePercentageCalc={select5PercentTip}
            />
            <DiscountButton
              percent={"10"}
              handlePercentageCalc={select10PercentTip}
            />
            <DiscountButton
              percent={"15"}
              handlePercentageCalc={select15PercentTip}
            />
            <DiscountButton
              percent={"25"}
              handlePercentageCalc={select25PercentTip}
            />
            <DiscountButton
              percent={"50"}
              handlePercentageCalc={select50PercentTip}
            />
            <input
              onChange={updateBillAmount}
              type="number"
              placeholder="CUSTOM"
              className="bg-blue-50 text-center py-2 px-2 rounded-md w-24 border-2 border-blue-50 hover:border-gray-400 mt-3 sm:w-36  lg:w-28"
            />
          </div>
          <Form title={"Number of people"} handleChange={updatePeopleAmount} />
        </div>
        <div className=" px-6 py-8  rounded-lg bg-teal-900 lg:w-1/2 lg:ml-2">
          <div className="flex justify-between mb-8 items-center">
            <div className="">
              <h2 className="text-white font-medium text-sm">Tip Amount</h2>
              <h3 className="text-xs font-medium text-teal-200">/ person</h3>
            </div>

            <h1 className="text-teal-500 font-medium text-4xl">
              ${TotalTipAmount}
            </h1>
          </div>
          <div className="flex justify-between mb-24 items-center ">
            <div className="">
              <h2 className="text-white font-medium text-sm">Total</h2>
              <h3 className="text-xs font-medium text-teal-200">/ person</h3>
            </div>

            <h1 className="text-teal-500 font-medium text-4xl">
              ${totalPricePerPerson}
            </h1>
          </div>
          <button
            onClick={resetCalculator}
            className="bg-teal-600 w-full rounded-md text-teal-700 border-2 border-teal-600 font-semibold py-2 hover:border-teal-500 hover:text-white hover:ease-in"
          >
            RESET
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
