import React from "react";
import styled from "styled-components";
import { WEIGHTS } from "../../constants";

const NavLink = ({ href, children }) => (
  <Link href={href}>
    <ChildrenWrapper>
      <Child>{children}</Child>
      <BoldChild>{children}</BoldChild>
    </ChildrenWrapper>
  </Link>
);

const Child = styled.span`
  transition: transform 350ms, opacity 650ms;
  display: inline-block;
  border: 1px solid var(--color-gray-900);
  padding: 0px 6px;
  /* Add a bit of margin so the borders are shown */
  margin: 2px;
`;

const BoldChild = styled(Child)`
  /* Hide the bold child as some artifacts appear when the child is rotated */
  opacity: 0;
  font-weight: ${WEIGHTS.bold};
  position: absolute;
  left: 0;
  top: calc(100%);
  transform-origin: center top;
  transform: rotateX(-0.25turn);
`;

const ChildrenWrapper = styled.span`
  display: block;
  position: relative;
  will-change: transform;
  perspective: 100px;
  transform-style: preserve-3d;
  overflow: hidden;
`;

const Link = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  overflow: hidden;
  display: block;

  &:first-of-type {
    color: var(--color-secondary);
  }

  &:hover ${Child} {
    transform: translateY(-100%) rotateX(0.25turn);
  }

  &:hover ${BoldChild} {
    opacity: 1;
    transform: translateY(calc(-100% - 4px)) rotateX(0turn);
    transition: transform 250ms, opacity 50ms;
  }
`;

export default NavLink;
