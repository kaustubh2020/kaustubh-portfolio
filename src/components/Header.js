import React from 'react'
import TextLoop from 'react-text-loop'

import Footer from './Footer'
import avatar from '../assets/images/avatar.webp'

const Header = () => (
  <header id="header" style={{ height: '100vh' }}>
    <div className="inner">
      <img src={avatar} className="image avatar" alt="avatar" />
      <h1>
        <strong>
          <TextLoop
            springConfig={{ stiffness: 340, damping: 8 }}
            children={[
              "Hey! I'm,",
              'Salut! Je suis,',
              'Hola! Soy,',
              'Hallo! Ich bin',
              'नमस्कार! मैं हूँ',
            ]}
          />
        </strong>
      </h1>
      <strong>
        <span
          className="wave"
          style={{ fontSize: '30px' }}
          role="img"
          aria-label="icon"
        >
          👋🏻
        </span>
      </strong>
      <br />
      <h1>
        <strong style={{ fontSize: '30px' }}>
          Kaustubh Jaiswal
        </strong>
      </h1>
      <br />
      <strong>
        Let's Discuss, Design & Digitalize <br /> your thoughts.
      </strong>
    </div>
    <Footer />
  </header>
)

export default Header
