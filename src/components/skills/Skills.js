import React, {useEffect} from 'react';
import './Skills.css'
import { useSelector, useDispatch } from 'react-redux';
import { selectUserById } from "../../features/usersSlice";
import { fetchSkills, selectAllSkills } from "../../features/skillsSlice";

import Skill from "../common/Skill";

const Skills = ({ userId }) => {
    const dispatch = useDispatch();
    const postStatus = useSelector((state) => state.skills.status);

    const user = useSelector((state) => selectUserById(state, userId));
    const skills = useSelector(selectAllSkills);

    useEffect(() => {
        if (postStatus === 'idle') {
            dispatch(fetchSkills({userId}));
        }
    }, [postStatus, dispatch]);

    return (
        <>
            <h1 className="section-title">Skills</h1>

            <section className="skills">
                <div className="skills__description">
                    {user?.skillsDescription}
                </div>

                <div className="skills__content">
                    {skills.map(skill => <Skill key={skill.id} title={skill.title} value={skill.value} />)}
                </div>
            </section>
        </>
    )
};

export default Skills;