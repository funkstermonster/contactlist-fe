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
}: OverlayProps) {
  const [contactData, setContactData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
  });

  const [imgData, setimgData] = useState<File | null>(null);

  const handleChange = (e: any) => {
    console.log("asfd");
    const { name, value, files } = e.target;

    if (name === "image" && files) {
      console.log("Image selected:", files[0]);
      setimgData(files[0]);
    } else {
      console.log(`Field changed: ${name}, New value: ${value}`);
      setContactData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleDone = async () => {
    const formData = new FormData();
    formData.append("contact", JSON.stringify(contactData));
    if (imgData) {
      formData.append("image", imgData);
    }

    try {
      const response = await fetch("http://localhost:8080/api/contacts", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      console.log("Contact created:", result);
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
          onChange={handleChange}
          value={contactData.name}
        />
        <TextField
          label={"Phone number"}
          name="phoneNumber"
          placeholder={"+01 234 5678"}
          onChange={handleChange}
          value={contactData.phoneNumber}
        />
        <TextField
          label={"Email address"}
          name="email"
          placeholder={"jamie.wright@mail.com"}
          onChange={handleChange}
          value={contactData.email}
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
