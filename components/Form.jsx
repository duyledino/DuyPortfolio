"use client";
import React, { useState } from "react";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { toast } from "react-toastify";

const myServices = ["Web Frontend", "Web Backend", "Web Fullstack"];

const Form = ({ setLoading }) => {
  const [service, setService] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gmail, setGmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const handleSendMail = async (e) => {
    setLoading(true);
    e.preventDefault();
    console.log(
      "firstname, lastname, gmail, phone, message, service",
      firstName,
      lastName,
      gmail,
      phone,
      message,
      service
    );
    if (
      gmail === "" ||
      message === "" ||
      lastName === "" ||
      firstName === "" ||
      phone === ""
    ) {
      toast.error("Missing information");
      setLoading(false);
      return;
    }
    try {
      const response = await fetch("http://localhost:3000/api/mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          gmail,
          phone,
          message,
          service,
        }),
      });
      const res = await response.json().catch(() => ({}));
      if (!response.ok) {
        const msg = res?.message || "An error occurred while sending the mail.";
        toast.error(msg);
        setLoading(false);

        return;
      }
      if (response.status === 200) {
        console.log("response from backend", res);
        setFirstName("");
        setLastName("");
        setGmail("");
        setMessage("");
        setPhone("");
        setPhone("");
        toast.success(res.message);
        setLoading(false);
      }
    } catch (error) {
      console.error("Error in handleSendMail:", error);
      toast.error(res?.message || "An error occurred while sending the mail.");
      setLoading(false);
    }
  };
  return (
    <div className="h-[80%] w-full">
      <form
        className="h-full w-full flex flex-col justify-between gap-6 lg:gap-3"
        onSubmit={(e) => handleSendMail(e)}
      >
        <div className="w-full flex flex-col lg:flex-row lg:flex-wrap lg:justify-between lg:gap-4 gap-6">
          <Input
            className={`lg:w-[45%] w-full`}
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <Input
            className={`lg:w-[45%] w-full `}
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <Input
            className={`lg:w-[45%] w-full `}
            placeholder="Email Address"
            value={gmail}
            onChange={(e) => setGmail(e.target.value)}
          />
          <Input
            className={`lg:w-[45%] w-full `}
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <Select value={service} onValueChange={setService}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Service</SelectLabel>
              {myServices.map((item, index) => (
                <SelectItem key={index} value={item}>
                  {item}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <Textarea
          className={"lg:h-44 h-25"}
          placeholder="Type your message here."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button className={`lg:w-fit w-full`} variant={"default"}>
          Send message
        </Button>
      </form>
    </div>
  );
};

export default Form;
