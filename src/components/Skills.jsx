import React from 'react'

const skillsData = [
  {
    category: 'No-Code / Automation',
    items: [
      { name: 'Unqork', icon: 'https://cdn.brandfetch.io/idtURuJxpE/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B' },
      { name: 'Workato', icon: 'https://cdn.brandfetch.io/idZUzx0-ld/theme/dark/symbol.svg?c=1dxbfHSJFAPEGdCLU4o5B' },
      { name: 'UiPath', icon: 'https://cdn.brandfetch.io/idEaAShmlC/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B' },
    ],
  },
  {
    category: 'Frontend Frameworks',
    items: [
      { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Angular', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
      { name: 'jQuery', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg' },
      { name: 'Gatsby', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gatsby/gatsby-original.svg' },
      { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
    ],
  },
  {
    category: 'Databases',
    items: [
      { name: 'MS SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg' },
      { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' }
    ],
  },
  {
    category: 'Languages',
    items: [
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    ],
  },
  {
    category: 'Styling & UI',
    items: [
      { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
      { name: 'Material-UI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg' },
      { name: 'Styled Components', icon: 'https://raw.githubusercontent.com/styled-components/brand/master/styled-components.png' },
      { name: 'Tailwind CSS', icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg' },
      { name: 'Ant Design', icon: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg' },
    ],
  },
  {
    category: 'Version Control',
    items: [
      { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
      { name: 'TortoiseSVN', icon: 'https://tortoisesvn.net/assets/img/logo-256x256.png' },
    ],
  },
  {
    category: 'Deployment & Servers',
    items: [
      { name: 'Apache Tomcat', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tomcat/tomcat-original.svg' },
      { name: 'JBoss', icon: 'https://upload.wikimedia.org/wikipedia/commons/9/95/JBoss_logo.svg' },
      { name: 'Netlify', icon: 'https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg' },
    ],
  },
  {
    category: 'Design',
    items: [
      { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
      { name: 'Webflow', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webflow/webflow-original.svg' },
    ],
  },
  {
    category: 'Core Web',
    items: [
      { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { name: 'SCSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg' },
    ],
  },
  {
    category: 'Tools',
    items: [
      { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
      { name: 'JIRA', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg' },
      { name: 'Postman', icon: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg' },
    ],
  },
]

const Skills = () => {
  return (
    <section id="skills" className="main-skills">
      <header className="major">
        <h2>Skills & Tools</h2>
      </header>
      <div className="skills-container">
        {skillsData.map((category, index) => (
          <div key={index} className="skill-category">
            <h3>{category.category}</h3>
            <div className="skills-grid">
              {category.items.map((item, idx) => (
                <div key={idx} className="skill-item">
                  <div className="skill-icon-wrapper">
                    <img src={item.icon} alt={item.name} title={item.name} />
                  </div>
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        .skills-container {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        .skill-category h3 {
          color: #555;
        }
        .skills-grid {
          display: flex;
          flex-wrap: wrap;
        }
        .skill-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 90px;
          text-align: center;
        }
        .skill-icon-wrapper {
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #fff;
          border-radius: 10px;
          padding: 5px;
          box-shadow: 0 2px 5px rgba(0,0,0,0.1);
          transition: transform 0.2s;
        }
        .skill-icon-wrapper:hover {
          transform: translateY(-5px);
        }
        .skill-icon-wrapper img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
        }
        .skill-item span {
          font-size: 0.9rem;
          font-weight: 500;
        }
      `}</style>
    </section>
  )
}

export default Skills
