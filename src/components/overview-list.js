import React from "react";
import OverviewItem from "./overview-item";
import "./overview-list.css";

const overviewListData = [
  {
    id: 1,
    title: "Page Views",
    icon: "images/icon-facebook.svg",
    overviewNumber: 87,
    percent: 3,
  },
  {
    id: 2,
    title: "Likes",
    icon: "images/icon-facebook.svg",
    overviewNumber: 52,
    percent: 2,
  },
  {
    id: 3,
    title: "Likes",
    icon: "images/icon-instagram.svg",
    overviewNumber: 5462,
    percent: 2257,
  },
  {
    id: 4,
    title: "Profile Views",
    icon: "images/icon-instagram.svg",
    overviewNumber: "52k",
    percent: 1375,
  },
  {
    id: 5,
    title: "Retweets",
    icon: "images/icon-twitter.svg",
    overviewNumber: "117",
    percent: 303,
  },
  {
    id: 6,
    title: "Likes",
    icon: "images/icon-twitter.svg",
    overviewNumber: "507",
    percent: 553,
  },
  {
    id: 7,
    title: "Likes",
    icon: "images/icon-youtube.svg",
    overviewNumber: "107",
    percent: 19,
  },
  {
    id: 8,
    title: "Total Views",
    icon: "images/icon-youtube.svg",
    overviewNumber: "1407",
    percent: 12,
  },
];

function OverviewList() {
  return (
    <section className="overview">
      <div className="wrapper">
        <h2>Overview - Today</h2>
        <div className="grid">
          {overviewListData.map((overviewItem) => (
            <OverviewItem key={overviewItem.id} {...overviewItem} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default OverviewList;
