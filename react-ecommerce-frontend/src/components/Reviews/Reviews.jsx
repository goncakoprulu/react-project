import ReviewForm from "./ReviewForm";
import ReviewItem from "./ReviewItem";
import "./Reviews.css";

const Reviews = () => {
  return (
    <div className="tab-panel-reviews">
      <h3>2 reviews for Basic Colored Sweatpants With Elastic Hems</h3>
      <div className="comments">
        <ol className="comment-list">
          <ReviewItem />
          <ReviewItem />
        </ol>
      </div>
      <ReviewForm />
    </div>
  );
};

export default Reviews;
