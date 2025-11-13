import React from "react";
import styled, { keyframes } from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";

import { WEIGHTS } from "../../constants";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Dialog.Root open={isOpen} onOpenChange={onDismiss}>
      <Dialog.Portal>
        <Wrapper>
          <Overlay />
          <Content>
            <CloseButton onClick={onDismiss}>
              <Icon id="close" />
              <VisuallyHidden>Dismiss menu</VisuallyHidden>
            </CloseButton>
            <VisuallyHidden>
              <Dialog.Title>Mobile navigation</Dialog.Title>
              <Dialog.Description>Mobile navigation</Dialog.Description>
            </VisuallyHidden>
            <Filler />
            <Nav>
              <NavLink href="/sale">Sale</NavLink>
              <NavLink href="/new">New&nbsp;Releases</NavLink>
              <NavLink href="/men">Men</NavLink>
              <NavLink href="/women">Women</NavLink>
              <NavLink href="/kids">Kids</NavLink>
              <NavLink href="/collections">Collections</NavLink>
            </Nav>
            <Footer>
              <SubLink href="/terms">Terms and Conditions</SubLink>
              <SubLink href="/privacy">Privacy Policy</SubLink>
              <SubLink href="/contact">Contact Us</SubLink>
            </Footer>
          </Content>
        </Wrapper>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

const fadeIn = keyframes`
 from {
  opacity: 0;
 }

 to {
  opacity: 1
 }
`;

const doorCloseLeft = keyframes`
 from {
  transform: rotateY(0.25turn);
 }

 to {
  transform: rotateY(0turn);
 }
`;

const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  inset: 0;
  background: var(--color-backdrop);

  @media (prefers-reduced-motion: no-preference) {
    animation: ${fadeIn} 200ms both;
  }
`;

const Wrapper = styled.div`
  perspective: 400px;
  transform-style: preserve-3d;
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  isolation: isolate;
`;

const Content = styled(Dialog.Content)`
  background: white;
  width: 300px;
  height: 100%;
  padding: 24px 32px;
  display: flex;
  flex-direction: column;
  transform-style: preserve-3d;
  transform-origin: right center;
  z-index: 1;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${doorCloseLeft} 600ms 200ms both
      cubic-bezier(0.12, 0.06, 0, 1.2);

    > * {
      animation: ${fadeIn} 450ms 400ms both;
    }
  }
`;

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 10px;
  right: 0;
  padding: 16px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const NavLink = styled.a`
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  text-decoration: none;
  font-size: 1.125rem;
  text-transform: uppercase;

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const Filler = styled.div`
  flex: 1;
`;
const Footer = styled.footer`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 14px;
  justify-content: flex-end;
`;

const SubLink = styled.a`
  color: var(--color-gray-700);
  font-size: 0.875rem;
  text-decoration: none;
`;

export default MobileMenu;
