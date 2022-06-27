import React from "react";

import Link from "next/link";

import {
  Section,
  SectionText,
  SectionTitle
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome to
          <br />
          My personal portfolio
        </SectionTitle>
        <SectionText>
          Hi my name is Pablo, a full-stack web developer with knowledge in
          PostgreSQL, Express, React, and Node
        </SectionText>
        <Link href="#projects">
          <Button>Learn more</Button>
        </Link>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
