import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello there <br />
        I am Abhishek Bhatt
      </SectionTitle>

      <SectionText>
        I'm most comfortable in that weird, funky world between design and development—that's where the most fun, creative, boundary-breaking work happens.
      </SectionText>

      <Button onClick={() => window.location = 'https://google.com'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;