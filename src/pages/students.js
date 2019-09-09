import React from 'react'
import { graphql } from 'gatsby'

import SEO from '../components/seo.js'
import Header from '../components/apply-header.js'
import Divider from '../components/divider.js'
import Footer from '../components/footer.js'

import '../styles/pages.css'

import '../../node_modules/materialize-css/dist/css/materialize.min.css'

export default ({data}) => {
  // Application information is stored in data.allTseApplications
  // This is fetched using a GraphQL query that maps to the tritonse-source-firestore plugin
  let applications = {};
  data.allTseApplications.edges.forEach(function (value) {
    let node = value.node;
    applications[node.id] = node;
  });

  let developers_open = applications.developers.active;
  let designers_open = applications.designers.active;
  let managers_open = applications.managers.active;
  let apps_open = developers_open || designers_open || managers_open;

  let apps_message = apps_open ? 
    <p className="tse-text-medium">
      Applications are open! Apply to your desired position(s).
    </p> : 
    <p className="tse-text-medium tse-separation-small">
      Applications are currently closed. Please check back next fall if you are interested in joining.
    </p>;

  return (<div>
    <SEO title="Students"/>
    <Header
      title="For Students"
      subtitle="Come join our family and find a way to put your skills to use by giving back to the community! We recruit annually in the fall so make sure you stay up to date."
      icon="students"
      buttons={
        <div>
          {apps_message}
          <div className="row">
            {developers_open ? <div class="col s12 m4 center"><a className="waves-effect waves-light btn blue darken-4 tse-apply-button" href={applications.developers.link}>Developers</a></div> : ""}
            {designers_open ? <div class="col s12 m4 center"><a className="waves-effect waves-light btn blue darken-4 tse-apply-button" href={applications.designers.link}>Designers</a></div> : ""}
            {managers_open ? <div class="col s12 m4 center"><a className="waves-effect waves-light btn blue darken-4 tse-apply-button" href={applications.managers.link}>Managers</a></div> : ""}
          </div>
        </div>
      }
    />
    <div className="blue lighten-3">
      <div className="container">
        <Divider subtitle="DECISION CRITERIA" textColor="black-text" lineColor="tse-divider-line-black"/>
        <div className="row center black-text">
          <div className="col l4 s12">
            <div className="tse-apply-circle blue darken-3"><i className="fa fa-4x fa-heart white-text"></i></div>
            <h4>Passion</h4>
            <p className="tse-text-medium">Are you able to demonstrate a genuine passion for problem-solving and social good?</p>
          </div>
          <div className="col l4 s12">
            <div className="tse-apply-circle blue darken-3"><i className="fa fa-4x fa-code white-text"></i></div>
            <h4>Skill</h4>
            <p className="tse-text-medium">Do you have the necessary skills to effectively contribute to the projects we work on?</p>
          </div>
          <div className="col l4 s12">
            <div className="tse-apply-circle blue darken-3"><i className="fa fa-4x fa-book white-text"></i></div>
            <h4>Experience</h4>
            <p className="tse-text-medium">Do you have any previous, relevant experience such as volunteering?</p>
          </div>
        </div>
        <div className="row center black-text">
          <div className="col l4 s12">
            <div className="tse-apply-circle blue darken-3"><i className="fa fa-4x fa-handshake-o white-text"></i></div>
            <h4>Teamwork</h4>
            <p className="tse-text-medium">Are you able to work well in teams?</p>
          </div>
          <div className="col l4 s12">
            <div className="tse-apply-circle blue darken-3"><i className="fa fa-4x fa-thumbs-up white-text"></i></div>
            <h4>Attitude</h4>
            <p className="tse-text-medium">Do you have a positive and dedicated work ethic?</p>
          </div>
          <div className="col l4 s12">
            <div className="tse-apply-circle blue darken-3"><i className="fa fa-4x fa-users white-text"></i></div>
            <h4>Culture</h4>
            <p className="tse-text-medium">How well will you fit in with the rest of us here at TSE?</p>
          </div>
        </div>
      </div>
      <div className="tse-separation-medium"></div>
    </div>
    <div className="container">
      <div id="faq"></div>
      <Divider subtitle="FREQUENTLY ASKED QUESTIONS" textColor="black-text" lineColor="tse-divider-line-blue"/>
      <div className="row">
        <div className="col s12">
          <h4>How are TSE projects structured?</h4>
          <p className="tse-text-medium">TSE's structure consists of our board and 4-6 project-based teams. Each team is made up of a project leader, 3-4 developers, and a UI/UX designer. Teams work independently of one another to create software for a specific non-profit they have been assigned to.</p>
        </div>
        <div className="col s12">
          <h4>Why should I join TSE?</h4>
          <p className="tse-text-medium">TSE is an amazing opportunity for people at any skill level to give back to the community. Whether you're a seasoned developer, or just starting in the industry, TSE will teach you skills that will carry over throughout your life while also giving you real world experience.</p>
        </div>
        <div className="col s12">
          <h4>Do I need coding experience to join TSE?</h4>
          <p className="tse-text-medium">No, you do not! We take anyone </p>
        </div>

      </div>
    </div>
    <Footer/>
  </div>)
}

export const query = graphql`
  query {
    allTseApplications {
      edges {
        node {
          id
          active
          link 
        }
      }
    }
  }
`
