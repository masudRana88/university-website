import React, { useEffect, useState } from 'react';

const PopulerCourses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHeroWC4/review-website-masudRana88/main/public/cources.json?token=AURSLCQCVM34ITMV3L3UOOTBLKTS2')
        .then(res => res.json())
        .then(data=> setCourses(data))
    },[])
    return (
        <div>
            <h6>Popular Courses</h6>
            <h1>Lets Brows All Catagori</h1>

        </div>
    );
};

export default PopulerCourses;