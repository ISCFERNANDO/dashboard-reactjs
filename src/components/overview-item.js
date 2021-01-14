import React from "react";

function OverviewItem({ title, icon, overviewNumber, percent }) {
  return (
    <div className="card-small">
      <p className="card-small-views">{title}</p>
      <p className="card-small-icon">
        <img src={icon} alt="" />
      </p>
      <p className="card-small-number">{overviewNumber}</p>
      <p className="card-small-percentage">
        <span>
          <img src="images/icon-up.svg" alt="" />
          {percent}%
        </span>
      </p>
    </div>
  );
}

export default OverviewItem;
