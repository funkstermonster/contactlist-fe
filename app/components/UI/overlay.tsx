"use client";

import { OverlayProps } from "@/app/models/OverlayProps";
import ProfilePicBig from "./profile-pic-big";
import TextField from "./text-field";
import ButtonIconLabelPrimary from "./button-icon-label-primary";
import ButtonLabelPrimary from "./button-label-primary";
import ButtonLabelSecondary from "./button-label-secondary";
import { useRef, useState } from "react";
import ButtonIconPrimary from "./button-icon-primary";

export default function Overlay({ title, profilePic, onClose }: OverlayProps) {
  const [contactData, setContactData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
  });

  const [imgData, setImgData] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleChange = (e: any) => {
    console.log("Input changed");
    const { name, value, files } = e.target;

    if (name === "image" && files) {
      console.log("Image selected:", files[0]);
      const imageUrl = URL.createObjectURL(files[0]);
      setImgData(imageUrl);
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

  const handleAddPictureClick = () => {
    console.log("Add Picture button clicked");
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleDeleteImg = () => {
    setImgData(null);
  };

  return (
    <div className="w-auto h-auto rounded-lg p-[24px] bg-grey-100">
      <div className="flex flex-row mb-[24px]">
        <h2>{title}</h2>
      </div>
      <div className="flex flex-row gap-[16px] mb-[24px] items-center">
        <ProfilePicBig profilePic={imgData || profilePic} />
        {!imgData ? (
          <ButtonIconLabelPrimary
            icon="icons/Add.svg"
            text={"Add Picture"}
            width="24px"
            height="24px"
            onClick={handleAddPictureClick}
          />
        ) : (
          <div className="flex flex-row gap-[8px] items-center">
            <ButtonIconLabelPrimary
              icon="icons/Change.svg"
              text={"Change Picture"}
              width="24px"
              height="24px"
              onClick={handleAddPictureClick}
            />
            <ButtonIconPrimary
              icon="icons/Delete.svg"
              width="24px"
              height="24px"
              onClick={handleDeleteImg}
            />
          </div>
        )}
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
        {/* Hidden file input */}
        <input
          type="file"
          name="image"
          onChange={handleChange}
          ref={fileInputRef}
          style={{ display: "none" }}
        />
      </div>
      <div className="flex flex-row justify-end">
        <ButtonLabelSecondary text={"Cancel"} onClick={onClose} />
        <ButtonLabelPrimary text={"Done"} onClick={handleDone} />
      </div>
    </div>
  );
}
