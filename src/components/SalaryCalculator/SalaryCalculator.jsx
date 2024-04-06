import { useState } from "react";
import SliderInput from "./components/SliderInput";
import TextInput from "./components/TextInput";
import { NumericFormat } from 'react-number-format';
import SalaryButton from "./components/SalaryButton";
import FrissHazasok from "./components/FrissHazasok";
import ToggleInput from "./components/ToggleInput";
import FamilyToggle from "./components/FamilyToggle";


const SalaryCalculator = ({personName}) => {
  const [SliderValue, setSliderValue] = useState(250000)
  const [SalaryValue, setSalaryValue] = useState(250000)
  return (
    <div className="rounded-xl bg-neutral shadow-md w-1/2 ml-2 p-2">
      <h1 className="font-bold text-primary mt-2 text-2xl pl-[25%]">{personName} bérének kiszámítása</h1>
      <div className="divider divider-vertical"></div>
      <TextInput placeHolder="Név" labelText="Családtag neve" isSalary={false}/>
      <TextInput placeHolder="250 000 Ft" labelText="Bruttó bér" isSalary={true} setSliderValue={setSliderValue} setSalaryValue={setSalaryValue} />
      <div className="text-secondary w-100 justify-self-center text-sm">
        <p>Bruttó bér módosítás után: <NumericFormat value={SalaryValue.toFixed(0)} displayType={'text'} thousandSeparator={" "} suffix={' Ft'} />
        </p>
      </div>
      <SliderInput SliderValue={SliderValue} setSalaryValue={setSalaryValue}/>
      <div className="grid grid-cols-4 gap-16 mt-5 pl-8 pr-8">
        <SalaryButton SalaryValue={SalaryValue} setSalaryValue={setSalaryValue} setSliderValue={setSliderValue} changeAmount={0.95} text="-5%" />
        <SalaryButton SalaryValue={SalaryValue} setSalaryValue={setSalaryValue} setSliderValue={setSliderValue} changeAmount={0.99} text="-1%" />
        <SalaryButton SalaryValue={SalaryValue} setSalaryValue={setSalaryValue} setSliderValue={setSliderValue} changeAmount={1.01} text="+1%" />
        <SalaryButton SalaryValue={SalaryValue} setSalaryValue={setSalaryValue} setSliderValue={setSliderValue} changeAmount={1.05} text="+5%" />
      </div>
      <h1 className="font-bold text-primary text-2xl mb-5 mt-5">Kedvezmények</h1>
      <ToggleInput text="25 év alattiak SZJA mentessége"/>
      <FrissHazasok></FrissHazasok>
      <ToggleInput text="Személyi adókedvezmény"/>
      <FamilyToggle></FamilyToggle>
    </div>
  );
};

export default SalaryCalculator;
