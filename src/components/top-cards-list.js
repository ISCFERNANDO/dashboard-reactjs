import React from "react";
import "./top-cards-list.css";
import TopCardItem from "./top-card-item";

const cardListData = [
  {
    id: 1,
    image: "images/icon-facebook.svg",
    icon: "images/icon-up.svg",
    networkClass: "facebook",
    autor: "@lfernando",
    followNumber: 1483,
    followTitle: "Followers",
    todayFollowors: 45,
  },
  {
    id: 2,
    image: "images/icon-twitter.svg",
    icon: "images/icon-up.svg",
    networkClass: "twitter",
    autor: "@lfernando",
    followNumber: "28k",
    followTitle: "Followers",
    todayFollowors: 15,
  },
  {
    id: 3,
    image: "images/icon-instagram.svg",
    icon: "images/icon-up.svg",
    networkClass: "instagram",
    autor: "@lfernando",
    followNumber: "6k",
    followTitle: "Followers",
    todayFollowors: 65,
  },
  {
    id: 4,
    image: "images/icon-youtube.svg",
    icon: "images/icon-up.svg",
    networkClass: "youtube",
    autor: "@lfernando",
    followNumber: "10k",
    followTitle: "Followers",
    todayFollowors: 9,
  },
];

function TopCardsList() {
  return (
    <section className="top-cards">
      <div className="wrapper">
        <div className="grid">
          {cardListData.map((cardData) => (
            <TopCardItem key={cardData.id} {...cardData} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TopCardsList;
