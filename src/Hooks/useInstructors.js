import { useEffect, useState } from "react";
import useCoursess from "./useCoursess";

const useInstructors = () => {
    const [instructors, setInstructors] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/masudRana88/assignmentDB/main/instructors.JSON')
            .then(res => res.json())
            .then(data => setInstructors(data))
    }, []);
    return instructors;
}

export default useInstructors;