import React from "react";
import styled from "styled-components";
import { WEIGHTS } from "../../constants";

const NavLink = ({ href, children }) => (
  <Link href={href}>
    <ChildrenWrapper>
      <span>{children}</span>
      <BoldChild>{children}</BoldChild>
    </ChildrenWrapper>
  </Link>
);

const BoldChild = styled.span`
  font-weight: ${WEIGHTS.bold};
  position: absolute;
  left: 0;
  top: 100%;
`;

const ChildrenWrapper = styled.span`
  display: inline-block;
  position: relative;
  will-change: transform;

  @media (prefers-reduced-motion: no-preference) {
    transition: transform 250ms;
  }
`;

const Link = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  overflow: hidden;

  &:first-of-type {
    color: var(--color-secondary);
  }

  &:hover ${ChildrenWrapper} {
    transform: translateY(-100%);
  }
`;

export default NavLink;
