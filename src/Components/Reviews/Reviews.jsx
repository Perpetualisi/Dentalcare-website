import React, { useState, useEffect } from "react";
import "./Reviews.css";
import { FaChevronLeft, FaChevronRight, FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const reviewsData = [
  {
    id: 1,
    name: "John Doe",
    review: "The best dental service I have ever experienced! Highly recommended.",
    image: "/images/review1.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah Johnson",
    review: "Friendly staff and a very clean environment. My teeth feel amazing!",
    image: "/images/review2.jpg",
    rating: 4.5,
  },
  {
    id: 3,
    name: "Michael Smith",
    review: "Professional and caring. They made my dental visit stress-free!",
    image: "/images/review3.jpg",
    rating: 4,
  },
];

const Reviews = () => {
  const [index, setIndex] = useState(0);

  const prevReview = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? reviewsData.length - 1 : prevIndex - 1));
  };

  const nextReview = () => {
    setIndex((prevIndex) => (prevIndex === reviewsData.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextReview();
    }, 5000);

    return () => clearInterval(interval);
  }, [index]);

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} className="star filled" />);
      } else if (i - 0.5 === rating) {
        stars.push(<FaStarHalfAlt key={i} className="star half" />);
      } else {
        stars.push(<FaRegStar key={i} className="star" />);
      }
    }
    return stars;
  };

  return (
    <section className="reviews" id="reviews">
      <h2 className="reviews-title">What Our Patients Say</h2>
      <div className="review-card">
        <p className="review-text">{reviewsData[index].review}</p>
        <div className="reviewer">
          <img src={reviewsData[index].image} alt={reviewsData[index].name} className="review-image" />
          <h4>{reviewsData[index].name}</h4>
          <div className="stars">{renderStars(reviewsData[index].rating)}</div>
        </div>
        <div className="navigation">
          <button onClick={prevReview}><FaChevronLeft /></button>
          <button onClick={nextReview}><FaChevronRight /></button>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
