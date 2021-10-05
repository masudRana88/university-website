import React from 'react';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import useCoursess from '../../Hooks/useCoursess';

const Coursess = () => {
    const courses = useCoursess();
    return (
        <div className="coursess-container container">
            <div className="">
                <h1 className="section-title text-center">
                    All Courses
                </h1>
                <div className="row row-cols-1 row-cols-md-2 g-4">
                {
                    courses.map(course =><div key={course.id} className="col">
                            <div className="card">
                            <img height="300px" src={course.img} className="card-img-top" alt=""/>
                            <div className="card-body">
                                <h5 className="card-title">{course.title}</h5>
                                <p className="card-text">{course.description.slice(0, 150)}...</p>
                                <p> <span className="fw-bold">Reviews : </span><Rating
                                    placeholderRating={course.rating}
                                    emptySymbol={<i className="bi bi-star"></i>}
                                    placeholderSymbol={<i className="bi bi-star-fill"></i>}
                                    fullSymbol={<i className="bi bi-star-fill"></i>} />
                                </p>
                                <p>
                                    <span  className="fw-bold">Tuition Fees</span> : { course.tuitionFees} / mounts
                                </p>
                                <Link to="home">
                                    <button type="button" className="get-started-button">Read More<i className="bi bi-chevron-compact-right"></i></button>
                                </Link>
                            </div>
                            </div>
                        </div>
                     )
                }
            </div>
            </div>
        </div>
    );
};

export default Coursess;