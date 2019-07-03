import React from 'react';

import Layout from '../components/Layout';

import { Link } from 'gatsby';
import Sidebar from '../components/Sidebar';
import config from '../../config';
const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div className="container-fluid p-0">
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="about"
      >
        <div className="w-100">
          <h1 className="mb-0">
            {config.firstName}
            <span className="text-primary">{config.lastName}</span>

          </h1>
          <div className="subheading mb-5">

            <a href={`mailto:${config.email}`}>{config.email}</a>
          </div>
          <p className="lead mb-5">
            I am an average everyday kid just looking for some competition and a life at the same time. I have interned at Lucid and became certified in multiple marketing industries and 3d printing.
          </p>
          <div className="social-icons">
            {config.socialLinks.map(social => {
              const { icon, url } = social;
              return (
                <a key={url} href={url}>
                  <i className={`fab ${icon}`}></i>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex justify-content-center"
        id="experience"
      >
        <div className="w-100">
          <h2 className="mb-5">Experience</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Sophomore Intern</h3>
              <div className="subheading mb-3">Lucid Intern</div>
              <p>
                I am currently interning with Lucid and learning
                how to manage a number of task using different applications
                to utilize a site. I'm also learning how to manage
                surveys and test if they work or not.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">  July 2019 - Present</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">GO4 Strategist</h3>
              <div className="subheading mb-3">Gameplay Plans And GO4 Strategist</div>
              <p>
                Also during 2019 I was asked to help a various
                number of esl teams to help organize there team
                and how they play. This includes game strats,
                team positioning, communication, and to help them stay calm all at
                the same time.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">December 2018 - Present</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
               <h3>Young Coder</h3>
              <div className="subheading mb-3">Childhood</div>
              <p>
                At the age of 8 operating off of old hp computers and ios devices
                I tought myself how to code and learn the coding language. I'm now
                re-teaching myself all of this in order to fully update myself on how the coding world
                /language has changed over the couple of years I wasn't messing with Terminals.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">March 2013 - September 2016</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
            </div>
            <div className="resume-date text-md-right">
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="education"
      >
        <div className="w-100">
          <h2 className="mb-5">Education</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">College:None</h3>
              <div className="subheading mb-3"></div>
              <div>Major: N/A</div>
              <p>GPA: N/A</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">July 2019 - Present</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">Rooted High School</h3>
              <div className="subheading mb-3">Industry Partnerships and Various Certifications</div>
              <p>GPA: 3.67</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">August 2018 - Present</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="skills"
      >
        <div className="w-100">
          <h2 className="mb-5">Skills</h2>

          <div className="subheading mb-3">
            Inbound Sales Certification , Email Marketing, SalesForce, Gaming Strategist, Gaming Coms Organizer,
          </div>

          <div className="subheading mb-3">Workflow</div>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-check"></i>
              Lucid Internship as a Rising Junior
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Student Teacher at Rooted HighSchool
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
                 Esl Team Helper
            </li>
          </ul>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="interests"
      >
        <div className="w-100">
          <h2 className="mb-5">Interests</h2>
          <p>
            Besides being a kid and trying to get a job to satisfy my wants ,
            my interests are in pro league gaming (a.k.a esports), I know I have a chance to get into
            such a thing but the only problem is , is that I'm to young and I don't
            have the equipment needed to succeed in that type of thing , hence the reason
            I want a well paying job.
          </p>
          <p className="mb-0">
            As far as it comes to outside activities , I'm not really an outside
            or a sports guy I just don't like outside, unless it's cold and still the
            most I would do is go out for some fresh air and end up going back inside
            after 5 minutes.
          </p>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="awards"
      >
        <div className="w-100">
          <h2 className="mb-5">Awards &amp; Certifications</h2>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Inbound Sales Certified
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Email Marketing Certification
            </li>
            <li>
            <i className="fa-li fa fa-trophy text-warning"></i>
            Esl Team Manager (Promoted From Player To Team Manager)
            </li>
          </ul>
        </div>
      </section>
    </div>
  </Layout>
);

export default IndexPage;
