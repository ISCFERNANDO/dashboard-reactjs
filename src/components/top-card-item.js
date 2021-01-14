import React from "react";
import "./top-card-item.css";

function TopCardItem({
  image,
  autor,
  followNumber,
  followTitle,
  icon,
  todayFollowors,
  networkClass,
}) {
  const cardClass = `card ${networkClass}`;
  return (
    <article className={cardClass}>
      <p className="card-title">
        <img src={image} alt="" />
        {autor}
      </p>
      <p className="card-followers">
        <span className="card-followers-number">{followNumber}</span>
        <span className="card-followers-title">{followTitle}</span>
      </p>
      <p className="card-today">
        <img src={icon} alt="" />
        {todayFollowors} Today
      </p>
    </article>
  );
}

export default TopCardItem;
