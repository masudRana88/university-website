import { useEffect, useState } from "react";

const useCoursess = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/masudRana88/assignmentDB/main/cources.JSON')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, []);
    return courses
}

export default useCoursess;