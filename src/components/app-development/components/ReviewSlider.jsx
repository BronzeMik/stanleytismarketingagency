import { useState } from "react";
import { BiSolidLeftArrowSquare, BiSolidRightArrowSquare } from "react-icons/bi";
import img1 from '../assets/review-1.png'
import img2 from '../assets/review-2.png'
import img3 from '../assets/review-3.png'

const reviews = [
  {
    id: 1,
    name: 'Jane Doe',
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    img: img1,
  },
  {
    id: 2,
    name: 'Jane Doe',
    comment: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    img: img2
  },
  {
    id: 3,
    name: 'John Doe',
    comment: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    img: img3
  },
  // Add more reviews as needed
];

function ReviewSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextReview = () => {
    setActiveIndex((prevIndex) => (prevIndex === reviews.length - 1 ? 0 : prevIndex + 1));
  };

  const prevReview = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? reviews.length - 1 : prevIndex - 1));
  };

  return (
    <div className="review-slider" id="testimonials">
      <button className="prev-btn" onClick={prevReview}><BiSolidLeftArrowSquare/></button>
      <div className="review">
        <img src={reviews[activeIndex].img} alt='review img' />
        <p className="name">- {reviews[activeIndex].name}</p>
        <p className="comment">{reviews[activeIndex].comment}</p>
        
      </div>
      <button className="next-btn" onClick={nextReview}><BiSolidRightArrowSquare /></button>
    </div>
  );
}

export default ReviewSlider;
