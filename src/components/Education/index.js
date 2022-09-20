import React from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap, faSuitcase } from '@fortawesome/free-solid-svg-icons'
import './index.scss'

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2014 - 2018"
          dateClassName="date-string"
          iconStyle={{ background: '#3e497a', color: '#fff' }}
          icon={<FontAwesomeIcon icon={faGraduationCap} color="#fff" />}
        >
          <h1 className="vertical-timeline-element-title">
            Clemson University &emsp; GPA: 3.74/4.00
          </h1>
          <h2>
            Master Of Science, Computer Engineering (Specialization: Intelligent
            Systems)
          </h2>
          <p>
            Research Work: "Measuring the efficiency of classification algorithm
            on traffic sign dataset", Advisor: Dr. Sally A. Mckee
            <br />
            Learning: Software Engineering, Database Management Systems
            Hands-on, Data Structures and Algorithms, Statistic using R
            programming, Computer Vision
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019 - 2021"
          iconStyle={{ background: '#3e497a', color: '#fff' }}
          icon={<FontAwesomeIcon icon={faGraduationCap} color="#fff" />}
        >
          <h1 className="vertical-timeline-element-title">
            Jawaharlal Nehru Technological University
          </h1>
          <h2>Bachelor Of Science, Computer Science and Engineering</h2>
          <p>
            Learning: Database Management Systems, Design and Analysis of
            Algorithms, Unified Modeling Language, Web Development, Object
            Oriented Programming, Cloud Computing, Distributed Computing,
            Operating Systems
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2012 - 2014"
          iconStyle={{ background: '#3e497a', color: '#fff' }}
          icon={<FontAwesomeIcon icon={faGraduationCap} color="#fff" />}
        >
          <h1 className="vertical-timeline-element-title">
            Narayana Junior College
          </h1>
          <h2>Highschool</h2>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Till 2012"
          iconStyle={{ background: '#3e497a', color: '#fff' }}
          icon={<FontAwesomeIcon icon={faGraduationCap} color="#fff" />}
        >
          <h1 className="vertical-timeline-element-title">
            Niraj Public School
          </h1>
          <h2>Primary, Middle and Secondary School</h2>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience
