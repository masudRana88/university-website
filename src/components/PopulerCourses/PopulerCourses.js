import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './PopulerCourses.css'

const PopulerCourses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/masudRana88/assignmentDB/main/cources.JSON')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, []);
    const populerCources = courses.filter(course => course.rating === 5);
    console.log(populerCources)
    return (
        <div className="container populer-container">
            <h6 className="text-center section-name">Popular Courses</h6>
            <h1 className="text-center section-title">Lets Brows All Catagori</h1>
            <div class="row row-cols-1 row-cols-md-2 g-4">
                {
                    populerCources.map(course =><div key={course.id} className="col">
                            <div className="card">
                            <img height="300px" src={course.img} className="card-img-top" alt=""/>
                            <div className="card-body">
                                <h5 className="card-title">{course.title}</h5>
                                <p className="card-text">{course.description.slice(0, 150)}...</p>
                                <Link to="home">
                                    <button type="button" className="get-started-button">Read More<i class="bi bi-chevron-compact-right"></i></button>
                                </Link>
                            </div>
                            </div>
                        </div>
                     )
                }
            </div>
        </div>
    );
};

export default PopulerCourses;