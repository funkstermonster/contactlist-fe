"use client";

import { OverlayProps } from "@/app/models/OverlayProps";
import ProfilePicBig from "./profile-pic-big";
import TextField from "./text-field";
import ButtonIconLabelPrimary from "./button-icon-label-primary";
import ButtonLabelPrimary from "./button-label-primary";
import ButtonLabelSecondary from "./button-label-secondary";
import { useState } from "react";

export default function Overlay({
  title,
  profilePic,
  onClose,
  onClick,
}: OverlayProps) {
  const [contactData, setContactData] = useState({
    name: "",
    phone: "",
    email: "",
    image: null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setContactData((prevData: any) => ({
        ...prevData,
        image: files ? files[0] : null,
      }));
    } else {
      setContactData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleDone = async () => {
    const formData = new FormData();
    formData.append("contact", JSON.stringify(contactData));
    if (contactData.image) {
      formData.append("image", contactData.image);
    }

    try {
      const response = await fetch("http://localhost:8080/contact", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      console.log("Contact created:", result);
      //onClick();
    } catch (error) {
      console.error("Error creating contact:", error);
    }
  };

  return (
    <div className="w-[364px] h-[540px] rounded-lg p-[24px] bg-grey-100">
      <div className="flex flex-row mb-[24px]">
        <h2>{title}</h2>
      </div>
      <div className="flex flex-row gap-[16px] mb-[24px] items-center">
        <ProfilePicBig profilePic={profilePic} />
        <ButtonIconLabelPrimary icon="icons/Add.svg" text={"Add Picture"} />
      </div>
      <div className="flex flex-col gap-[24px] mb-[24px]">
        <TextField
          label={"Name"}
          name="name"
          placeholder={"Jamie Wright"}
          onChange={() => handleChange}
          value={""}
        />
        <TextField
          label={"Phone number"}
          name="phone"
          placeholder={"+01 234 5678"}
          onChange={() => handleChange}
          value={""}
        />
        <TextField
          label={"Email address"}
          name="email"
          placeholder={"jamie.wright@mail.com"}
          onChange={() => handleChange}
          value={""}
        />
        <input type="file" name="image" onChange={handleChange} />
      </div>
      <div className="flex flex-row justify-end">
        <ButtonLabelSecondary text={"Cancel"} onClick={onClose} />
        <ButtonLabelPrimary text={"Done"} onClick={handleDone} />
      </div>
    </div>
  );
}
