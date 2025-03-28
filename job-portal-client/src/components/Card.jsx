import React from "react";
import { FiCalendar, FiClock, FiDollarSign, FiMapPin } from "react-icons/fi";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
  const {
    _id,
    jobTitle,
    companyName,
    companyLogo,
    minPrice,
    maxPrice,
    salaryType,
    jobLocation,
    employmentType,
    postingDate,
    description,
  } = data;
  return (
    <section className="card">
      <Link
        to={`/job/${_id}`}
        className="flex gap-4 flex-col sm:flex-row items-start"
      >
        <img src={companyLogo} alt="" />
        <div>
          <h4 className="text-primary mb-1">{companyName}</h4>
          <h3 className="text-lg font-semibold mb-2">{jobTitle}</h3>

          <div className="text-primary/70 text-base flex flex-wrap gap-3 mb-2">
            <span className="flex items-center gap-1">
              <FiMapPin />
              {jobLocation}
            </span>
            <span className="flex items-center gap-1">
              <FiClock />
              {employmentType}
            </span>
            <span className="flex items-center gap-1">
              <FiDollarSign />
              {minPrice}-{maxPrice}k
            </span>
            <span className="flex items-center gap-1">
              <FiCalendar />
              {postingDate}
            </span>
          </div>

          <p className="text-base text-primary/70 ">{description}</p>
        </div>
      </Link>
    </section>
  );
};

export default Card;
