import React from "react";
import './SkillItem.css'
function SkillItem(props) {
  const { title, rate } = props;

  function generateStars(num) {
    let array = [];
    for (let i = 0; i < 5; i++) {
      if (num > i) {
        array.push('fa fa-star active');
      } else {
        array.push('fa fa-star');
      }
    }
    return array;
  }
  let round = Math.round(rate)
  let stars_data = generateStars(round);

  return (
    <div className="skill_elem">
      <p className="title">{title}</p>
      <div className="stars_wrapper">
        {stars_data.map(elem=><span className={elem}></span>)}
      </div>
    </div>
  );
}

export default SkillItem;
