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
          className="vertical-timeline-element--work"
          date="June 2021 - present"
          iconStyle={{ background: '#e9d35b', color: '#fff' }}
          icon={<FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />}
        >
          <h1 className="vertical-timeline-element-title">
            Cisco Systems Inc.
          </h1>
          <h2>Technical Solutions Specialist</h2>
          <p>
            Working in an Agile based environment to develop highly scalable,
            effecient and reusable PoCs and deliver it to the customer.
            Continually maintaining working knowledge of all Webex products and
            try to use them to resolve customer issues.
            <br /> Created war room assistant bots, which on emergency incidents
            adds all the members to a Webex space and notifies all the members
            by calling, SMS and email. This PoC attracted 10+ customers and
            helped in generating revenue of 1M+
            <br />
            Built android apps using Webex android SDK to demonstrate the ease
            of embedding Webex technologies, which generated a revenue of 10K+
            <br />
            Increased native mobile SDK customers by 50\%, by building
            react-native apps that works on both android and IOS with single
            piece of java script code.
            <br />
            Increased the ease of use and users of a react meetings widget by
            80\% by converting it into an HTML based embeddable meetings widget.
            <br />
            Created many Webex bots like github bot, which can be integrated
            inside Webex and is used to intimate all the people in a specific
            group about github pull or push requests taking place.
            <br />
            Received Impact Achiever award in the year 2022.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Jan 2021 - April 2021"
          iconStyle={{ background: '#e9d35b', color: '#fff' }}
          icon={<FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />}
        >
          <h1 className="vertical-timeline-element-title">Avalara</h1>
          <h2>Software Engineering Intern</h2>
          <p>
            Worked in an Agile based environment to Implement signature
            detection and verification system on identity documents using
            natural language processing. Evaluated and improved the blind set
            with an initial expectation of 80\% of precision and recall.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Oct 2019 - Jan 2021"
          iconStyle={{ background: '#e9d35b', color: '#fff' }}
          icon={<FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />}
        >
          <h1 className="vertical-timeline-element-title">
            Clemson University
          </h1>
          <h2>
            Graduate Research Assistant - Autonomous f1tenth race car project
          </h2>
          <p>
            Built autonomous race cars considering power efficiency and
            performance on GPUs like Google coral and Nvidia Jetson.
            <br />
            Implemented data augmentation techniques like pix2pix, DCGAN,
            cycleGAN and WGAN on CNN classification algorithm using German
            Traffic Sign Recognition Benchmark in tensorflow, resulting in
            improvement of classification accuracy from 95\% to 99\% and
            production of unbiased traffic sign dataset.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="June 2018 - June 2019"
          iconStyle={{ background: '#e9d35b', color: '#fff' }}
          icon={<FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />}
        >
          <h1 className="vertical-timeline-element-title">Zoho Corporation</h1>
          <h2>Member Technical Staff</h2>
          <p>
            Designed threat intelligence feature on the product Event Log
            Analyser, which lets the user receive instant alerts when malicious
            IP sources interact with their network, using distributed file
            systems to store STIX/TAXII and AlienVault OTX, which helped the
            product generate 1.5 million revenue that year.
            <br />
            Worked on the product Cloud Security Plus on collecting, monitoring
            and analyzing log data to provide insights on activity happening in
            the AWS, salesforce environments, developed using Agile Scrum
            methodologies.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience
