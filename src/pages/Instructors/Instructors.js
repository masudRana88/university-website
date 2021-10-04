import React from 'react';
import useInstructors from '../../Hooks/useInstructors';

const Instructors = () => {
    const instructors = useInstructors()
    return (
        <div className="container">
            <div className="row mt-5">
            {
                instructors.map(instructor => <div key={instructor.id} className="col-12">
                    <div className="row mt-4 border-bottom border-primary">
                        <div className="col-2">
                           <img className="rounded" src={instructor.img} alt="" />
                        </div>
                        <div className="col-10">
                            <div className="w-100">
                                <h5>Name : {instructor.name}</h5>
                                <p>Age : { instructor.age}</p>
                                <p>Phone : { instructor.Phone}</p>
                                <p>Email : { instructor.email}</p>
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </div>
        </div>
    );
};

export default Instructors;