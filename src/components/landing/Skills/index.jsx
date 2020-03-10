import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Container, Button } from 'components/common'
import dev from 'assets/illustrations/dev.svg'
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles'

export const Skills = () => (
  <Wrapper id="about">
    <SkillsWrapper as={Container}>
      {/*<Thumbnail>
        <img src={dev} alt="I’m John and I’m a Backend & Devops engineer!" />
      </Thumbnail>*/}
      <Details>
        <h1>About Me</h1>
        <p>
          Hi! I'm Jennifer and I am a software engineering student at The University of Adelaide based in South Australia. I have an interest in data visualisation as well as UI/UX design.
        </p>
        <p>I currently work as a test analyst at Rapid Global where I test different applications and products to ensure that they are working the way they are supposed to. </p>
        <p>I also recently completed an 8 week internship at Optimatics where I was able to gain experience in data visualisation as well as an insight into how different aspects of a business is run.</p>
      </Details>
        <Thumbnail>
        <img src={dev} alt="I’m John and I’m a Backend & Devops engineer!" />
      </Thumbnail>
    </SkillsWrapper>
  </Wrapper>
)
