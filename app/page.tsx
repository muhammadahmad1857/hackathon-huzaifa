import React from "react";
import Input from "./components/input";
import FormHeader from "./components/formHeader";
import RadioButton from "./components/radioButton";
import SelectInput from "./components/selectInput";
import Image from "next/image";
import { FaRegStar, FaStar } from "react-icons/fa";

const Home = () => {
  return (
    <div className="min-h-screen bg-background p-8 flex max-md:flex-wrap-reverse  justify-between gap-8 ">
      <div>
        <div className="container">
          <FormHeader
            para="Please enter your billing info   "
            stepNum={1}
            title="billing info"
          />

          <div className="inputContainer">
            <Input label="Name" placeholder="Your name" />
            <Input label="Phone number" placeholder="Phone number" />
            <Input label="Address" placeholder="Address" />
            <Input label="Town/City" placeholder="Town or city" />
          </div>
        </div>
        <div className="container">
          <FormHeader
            para="Please select your rental date"
            stepNum={2}
            title="rental info"
          />
          <RadioButton option="Pick - Up" />
          <div className="inputContainer">
            <SelectInput
              label="Locations"
              placeholder="Select a location"
              options={[
                "New York",
                "Los Angeles",
                "Chicago",
                "Houston",
                "Phoenix",
              ]}
            />
            <SelectInput
              label="Date"
              placeholder="Select a date"
              options={[
                "2023-01-01",
                "2023-01-02",
                "2023-01-03",
                "2023-01-04",
                "2023-01-05",
              ]}
            />
            <SelectInput
              label="Time"
              placeholder="Select a time"
              options={[
                "9:00 AM",
                "10:00 AM",
                "11:00 AM",
                "12:00 PM",
                "1:00 PM",
              ]}
            />
          </div>
          <div className="mt-2">
            <RadioButton option="Drop - Off" />
            <div className="inputContainer mt-4">
              <SelectInput
                label="Locations"
                placeholder="Select a location"
                options={[
                  "New York",
                  "Los Angeles",
                  "Chicago",
                  "Houston",
                  "Phoenix",
                ]}
              />
              <SelectInput
                label="Date"
                placeholder="Select a date"
                options={[
                  "2023-01-01",
                  "2023-01-02",
                  "2023-01-03",
                  "2023-01-04",
                  "2023-01-05",
                ]}
              />
              <SelectInput
                label="Time"
                placeholder="Select a time"
                options={[
                  "9:00 AM",
                  "10:00 AM",
                  "11:00 AM",
                  "12:00 PM",
                  "1:00 PM",
                ]}
              />
            </div>
          </div>
        </div>
        <div className="container">
          <FormHeader
            para="Please enter your payment method"
            stepNum={3}
            title="Payment Method"
          />
        </div>
      </div>
      <div className=" bg-white p-6 rounded-[10px] space-y-4 mb-4; max-w-lg max-h-fit">
        <FormHeader
          para="Prices may change depending on the length of the rental and the price of your rental car."
          title="Rental Summary"
        />
        <div className="flex items-center gap-4">
          <div className="w-32 h-28 bg-imageBg flex items-center justify-center">
            <Image
              src={"/car.png"}
              alt="Car"
              width={116}
              height={36}
              className="h-full w-full"
            />
          </div>
          <div className="flex flex-col space-y-4 items-start">
            <h2 className="text-[32px] font-bold tracking-tighter leading-10">
              Nissan GT - R
            </h2>
            <div className="flex gap-2 items-center">
              {[1, 2, 3, 4].map((_, i) => (
                <FaStar key={i} className="text-yellow-400 size-5" />
              ))}
              <FaRegStar className="size-5" />
              <p className="para">440+ Reviewer</p>
            </div>
          </div>
          <span className="h-[1px] w-full bg-text-light" />
          <div className="flex justify-between items-center">
            <p className="para">Subtotal</p>
            <p className="font-semibold text-[16px] leading-6 tracking-tight text-text-dark">
              $80.00
            </p>
          </div>
          <div className="flex justify-between items-center">
            <p className="para">Tax</p>
            <p className="font-semibold text-[16px] leading-6 tracking-tight text-text-dark">
              $0
            </p>
          </div>
          <div className="rounded-[10px] flex items-center justify-between bg-inputBg focus-within:border-1 focus-within:bg-text-light/20 p-4 h-14 w-full">
            <div>
              {" "}
              <input type="text" placeholder="Apply promo code" />
            </div>
            <button>Apply Now</button>
          </div>
          <div className="flex justify-between items-end gap-1">
            <div className="space-y-1">
              <h2 className="font-bold text-xl capitalize leading-[30px] tracking-tighter text-text-dark">
                Total Rental Price
              </h2>
              <p className="para">Overall price and includes rental discount</p>
            </div>
            <p className="text-[32px] font-bold tracking-tighter leading-10">
              $80.00
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
