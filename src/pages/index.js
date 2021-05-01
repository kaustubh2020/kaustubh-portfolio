import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'

import loadable from '@loadable/component'

import Form from '../components/Form'
import Tools from '../components/Tools'

import WorkExperience from '../components/WorkExperience'

import ProjectData from '../components/ProjectData'
import ProjectCard from '../components/ProjectsCard'

import hellodog from '../assets/images/hellodog.gif'
import office from '../assets/images/error.webp'
import work from '../assets/images/work.webp'
import call from '../assets/images/call.gif'

const HomeIndex = () => {
  const siteTitle = 'Kaustubh Jaiswal | Portfolio'
  const siteDescription = 'Software Engineer & Web Developer'

  return (
    <Layout>
      <Helmet>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
      </Helmet>

      {/* About Section starts */}

      <div id="main" style={{ borderBottom: '5px solid #787878' }}>
        <section id="one" style={{ height: 'auto' }}>
          <header className="major">
            <img
              src={hellodog}
              alt="hellodog"
              width="40%"
              height="auto"
              style={{
                marginTop: '-15%',
                marginBottom: '-1%',
                marginLeft: '-14%',
              }}
            />
            <strong>
              <h2>About Me</h2>
            </strong>
          </header>
          <p>
            I'm a{' '}
            <i>
              <strong style={{ backgroundColor: 'yellow' }}>
                {' '}
                Software Engineer{' '}
              </strong>{' '}
              and{' '}
              <strong style={{ backgroundColor: 'yellow' }}>
                {' '}
                Web Developer{' '}
              </strong>
            </i>
            .
            <br /> I spend my time experimenting and researching the latest
            technology. I pledge to be a lifelong learner; it empowers me. One
            of my passions is{' '}
            <i>
              <a href="https://www.instagram.com/kjkapture/">
                <strong style={{ backgroundColor: 'yellow' }}>
                  {' '}
                  Photography{' '}
                </strong>
              </a>
            </i>
            , I love to shoot and edit photos. I also love writing, playing{' '}
            <i>
              <a href="https://www.instagram.com/valorant.__.noobs/">
                <strong style={{ backgroundColor: 'yellow' }}>
                  {' '}
                  PC Games{' '}
                </strong>
              </a>
            </i>{' '}
            and giving talks to share my thoughts and what I learn.
            <br />
            <strong>Tools I use:</strong>
            <br />
            <Tools />
          </p>
          <ul className="actions">
            <li>
              <a href="#contact" className="button">
                Hire Me!{' '}
                <span style={{ fontSize: '20px' }} role="img" aria-label="icon">
                  ✅
                </span>
              </a>
            </li>
          </ul>
        </section>

        {/* About Sectoin ends */}

        {/* Work Experience starts */}

        <section id="two" style={{ height: 'auto' }}>
          <img
            src={office}
            alt="work"
            width="40%"
            height="50%"
            alt="work"
            style={{
              marginTop: '-8%',
              marginBottom: '-10%',
              marginLeft: '-10%',
            }}
          />
          <header className="major">
            <h2>Work Experience</h2>
          </header>

          <WorkExperience />
        </section>

        {/* Work Experience starts */}

        {/* Projects Section starts */}

        <section id="two" style={{ height: 'auto' }}>
          <img
            src={work}
            alt="work"
            width="50%"
            height="auto"
            style={{
              marginTop: '-8%',
              marginBottom: '-15%',
              marginLeft: '-13%',
            }}
          />
          <header className="major">
            <h2>Projects</h2>
          </header>

          <ProjectCard
            title={ProjectData[0].title}
            description={ProjectData[0].description}
            link={ProjectData[0].link}
            code={ProjectData[0].code}
          />
          <ProjectCard
            title={ProjectData[1].title}
            description={ProjectData[1].description}
            link={ProjectData[1].link}
            code={ProjectData[1].code}
          />

          <ProjectCard
            title={ProjectData[2].title}
            description={ProjectData[2].description}
            link={ProjectData[2].link}
            code={ProjectData[2].code}
          />

          <ProjectCard
            title={ProjectData[3].title}
            description={ProjectData[3].description}
            link={ProjectData[3].link}
            code={ProjectData[3].code}
          />

          <ProjectCard
            title={ProjectData[4].title}
            description={ProjectData[4].description}
            link={ProjectData[4].link}
            code={ProjectData[4].code}
          />

          <ProjectCard
            title={ProjectData[5].title}
            description={ProjectData[5].description}
            link={ProjectData[5].link}
            code={ProjectData[5].code}
          />

          <ul className="actions">
            <li style={{ marginTop: '50px' }}>
              <a
                href="https://github.com/kaustubh2020?tab=repositories"
                className="button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Repositories{' '}
                <span style={{ fontSize: '20px' }} role="img" aria-label="icon">
                  💻
                </span>
              </a>
            </li>
          </ul>
        </section>

        {/* Projects Section ends */}

        {/* Contact Section starts */}

        <section id="contact" style={{ height: 'auto' }}>
          <img
            src={call}
            alt="call"
            width="40%"
            height="auto"
            style={{ marginTop: '-8%', marginBottom: '-4%', marginLeft: '-5%' }}
          />
          <header className="major">
            <h2 style={{ marginBottom: '20px' }}>Get in touch</h2>
          </header>
          <p>
            Nuff scrolling! Talk to me.
            <br />
            Let's Work!
          </p>
          <div className="row">
            <div className="6u 12u$(small)">
              <Form />
            </div>
          </div>
        </section>

        {/* Contact Section starts */}
      </div>
    </Layout>
  )
}

export default HomeIndex
