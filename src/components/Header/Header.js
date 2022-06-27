import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a
          style={{ display: "flex", alignItems: "center", color: "white" }}
        ></a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
    </Div2>
  </Container>
);

export default Header;
