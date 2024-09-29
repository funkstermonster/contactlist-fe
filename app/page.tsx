"use client";

import { useState } from "react";
import ButtonIconSecondary from "./components/UI/button-icon-secondary";
import ButtonSpecial from "./components/UI/button-special";
import ContactListItem from "./components/UI/contact-list-item";
import Overlay from "./components/UI/overlay";
import React from "react";

export default function Home() {
  const [isOverlayVisible, setOverlayVisible] = useState(false);

  const toggleOverlay = () => {
    setOverlayVisible(!isOverlayVisible);
  };

  return (
    <>
      <div className="flex flex-row">
        <div className="border-r-[1px] border-b-[1px] border-grey-60 h-[96px] w-1/3"></div>
        <div className="border-b-[1px] border-grey-60 w-2/3"></div>
        <div className="border-l-[1px] border-b-[1px] border-grey-60 h-[96px] w-1/3"></div>
      </div>

      <div className="flex flex-row">
        <div className="flex flex-row justify-end border-r-[1px] border-b-[1px] border-grey-60 h-[96px] w-1/3">
          <ButtonIconSecondary icon={"icons/Back arrow.svg"} />
        </div>
        <div className="flex flex-row justify-between items-center px-[24px] border-b-[1px] border-grey-60 w-2/3 ">
          <div>
            <h1>Contact</h1>
          </div>
          <div className="flex flex-row gap-[24px]">
            <div className="flex flex-row">
              <ButtonIconSecondary
                icon="icons/Settings.svg"
                width="20px"
                height="20px"
              />
              <ButtonIconSecondary
                icon="icons/Profile pic.svg"
                width="20px"
                height="20px"
              />
            </div>
            <div className="flex flex-row">
              <ButtonSpecial icon="icons/Add.svg" text="Add new" onClick={toggleOverlay} />
              {isOverlayVisible && (
                <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
                  <Overlay
                    title="Add New Contact"
                    profilePic=""
                    name=""
                    phone=""
                    email=""
                    onClose={toggleOverlay}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="border-l-[1px] border-b-[1px] border-grey-60 h-[96px] w-1/3">
          <div className="flex flex-row">
            <ButtonIconSecondary icon={"icons/Light mode.svg"} />
          </div>
        </div>
      </div>

      <div className="flex flex-row h-screen gap-[24px]">
        <div className="border-r-[1px] border-grey-60 h-full w-1/3"></div>
        <div className="border-grey-60 w-2/3">
          <div className="flex flex-col">
            <ContactListItem
              name={"Timothy Levis"}
              phone={"+36 01 234 5678"}
              profilePic={"photos/Timothy.png"}
            />
            <ContactListItem
              name={"Sarah Wright"}
              phone={"+36 01 234 5678"}
              profilePic={"photos/Sarah.png"}
            />
            <ContactListItem
              name={"Lucy Jones"}
              phone={"+36 01 234 5678"}
              profilePic={"photos/Timothy.png"}
            />
            <ContactListItem
              name={"Jake Perez"}
              phone={"+36 01 234 5678"}
              profilePic={"photos/Jake.png"}
            />
            <ContactListItem
              name={"Adebayo Rodriguez"}
              phone={"+36 01 234 5678"}
              profilePic={"photos/Adebayo.png"}
            />
            <ContactListItem name={""} phone={""} profilePic={""}/>
          </div>
        </div>
        <div className="border-l-[1px] border-grey-60 h-full w-1/3"></div>
      </div>
    </>
  );
}
