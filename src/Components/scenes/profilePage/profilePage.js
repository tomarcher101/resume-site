import React from 'react';
import ProfileIntro from './profileIntro/profileIntro'
import WorkExperience from './workExperience/workExperience'
import Education from './education/eduaction'
import Contact from './contact/contact'

function ProfilePage() {
    return (
        <div>
            <ProfileIntro/>
            <WorkExperience/>
            <Education/>
            <Contact/>
        </div>
    );
}

export default ProfilePage;
