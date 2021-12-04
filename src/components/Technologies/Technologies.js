import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section id="tech">
    {/* <SectionDivider /> */}

    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a wide range of Technologies in the web development world.
      From backend to design
    </SectionText>

    <List>
      <ListItem>
        <DiFirebase size=" 3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br /> React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>


      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br /> Node.js and Databases
          </ListParagraph>
        </ListContainer>
      </ListItem>


      <ListItem>
        <DiZend size="3rem" />
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experience with <br /> tools like Figma and Zendesk
          </ListParagraph>
        </ListContainer>
      </ListItem>



    </List>
    <SectionDivider />
  </Section>
);

export default Technologies;
