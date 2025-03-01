import { useState } from "react";
import CSS from "./TeacherCard.module.css";
export default function TeacherCard({ teacher }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const {
    avatar_url,
    conditions,
    experience,
    languages,
    lesson_info,
    lessons_done,
    levels,
    name,
    surname,
    price_per_hour,
    rating,
    reviews,
  } = teacher;
  return (
    <div className={CSS.wrapper}>
      <div className={CSS.avatarBox}>
        <img className={CSS.avatar} src={avatar_url} alt="avatar" />
      </div>
      <div className={CSS.info}>
        <div className={CSS.infoBlock}>
          <div className={CSS.infoBlockHeader}>
            <p className={CSS.referenceName}>Languages</p>
            <div>
              <ul className={CSS.infoBlockHeaderList}>
                <li className={CSS.infoBlockHeaderItem}>
                  <img
                    src="/book-open-01.svg"
                    alt="book icon"
                    className={CSS.icon}
                  />
                  Lessons online
                </li>
                <li className={CSS.infoBlockHeaderItem}>
                  Lessons done: {lessons_done}
                </li>
                <li className={CSS.infoBlockHeaderItem}>
                  <img src="/star.svg" alt="rating star" className={CSS.icon} />{" "}
                  Rating: {rating}
                </li>
                <li className={CSS.infoBlockHeaderItem}>
                  Price / 1 hour:{" "}
                  <span className={CSS.spanPrise}>{price_per_hour} $</span>
                </li>
              </ul>{" "}
            </div>
            <button type="button" className={CSS.btnFavorite}>
              <img src="/heart.svg" alt="favorites" className={CSS.heartIcon} />
            </button>
          </div>

          <p className={CSS.teacherName}>
            {name} {surname}
          </p>
          <p className={CSS.reference}>
            <span className={CSS.referenceName}>Speaks:</span>{" "}
            <span className={CSS.referenceSpeak}>{languages.join(", ")}</span>
          </p>
          <p className={CSS.reference}>
            <span className={CSS.referenceName}>Lesson Info:</span>{" "}
            {lesson_info}
          </p>
          <p className={CSS.reference}>
            <span className={CSS.referenceName}>Conditions:</span> {conditions}
          </p>
        </div>
        {!isExpanded && (
          <button
            type="button"
            className={CSS.btnReadMore}
            onClick={() => setIsExpanded(true)}
          >
            Read more
          </button>
        )}
        {isExpanded && (
          <>
            <p className={CSS.experience}>{experience}</p>
            <ul>
              {reviews.map((review) => (
                <li key={review.id} className={CSS.reviews}>
                  <div className={CSS.reviewBox}>
                    <img
                      src="/revUser.svg"
                      alt="avatar reviev"
                      className={CSS.reviewsAvatar}
                    />
                    <div className={CSS.reviewInfo}>
                      <p className={CSS.reviewerName}>{review.reviewer_name}</p>
                      <div className={CSS.ratingBox}>
                        <img src="/star.svg" alt="Rating star" />
                        <p className={CSS.reviewerRating}>
                          {review.reviewer_rating.toFixed(1)}
                        </p>
                      </div>
                    </div>
                  </div>

                  <p className={CSS.commentText}>{review.comment}</p>
                </li>
              ))}
            </ul>
          </>
        )}
        <ul className={CSS.levelList}>
          {levels.map((level) => (
            <li key={level.id} className={CSS.levelItem}>
              {level}
            </li>
          ))}
        </ul>
        {isExpanded && (
          <button type="button" className={CSS.btn}>
            Book trial lesson
          </button>
        )}
      </div>
    </div>
  );
}
