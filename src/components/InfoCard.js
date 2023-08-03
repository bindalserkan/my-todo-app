import React from "react";

export default function InfoCard() {
  return (
    <div className="information-card">
      <div className="category-info">
        <div className="category-info-item">
          <div className="category-color work"></div>
          <span>Work</span>
        </div>
        <div className="category-info-item">
          <div className="category-color personal"></div>
          <span>Personal</span>
        </div>
        <div className="category-info-item">
          <div className="category-color shopping"></div>
          <span>Shopping</span>
        </div>
      </div>
    </div>
  );
}
