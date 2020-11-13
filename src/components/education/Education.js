import React, { useEffect } from 'react';
import './Education.css'
import { useSelector, useDispatch } from 'react-redux';
import { fetchEducation, selectAllEducation } from "../../features/educationSlice";

import EducationCard from "./EducationCard";

const Education = ({ userId }) => {
    const dispatch = useDispatch();
    const postStatus = useSelector((state) => state.users.status);

    const education = useSelector(selectAllEducation);

    useEffect(() => {
        if (postStatus === 'idle') {
            dispatch(fetchEducation({userId}));
        }
    }, [postStatus, dispatch]);

    return (
        <>
            <h1 className="section-title">Education</h1>

            <section className="education">
                <div className="education__center-line" />

                <div className="education-cards">
                    {education.map(card => <EducationCard key={card.id} title={card.title} text={card.text} label={card.label}/>)}
                </div>
            </section>
        </>
    )
};

export default Education;