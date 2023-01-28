import styled, { css } from "styled-components";

import SidebarBg from "../../assets/bg-sidebar-desktop.svg";

export const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  background-image: url(${SidebarBg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: var(--white);
  padding: 24px;
  width: 35%;
  border-radius: 8px;

  @media only screen and (max-width: 600px) {
    width: 100%;
    height: 25%;
    background-size: cover;
    background-position-y: -855px;
    justify-content: center;
    flex-direction: row;
    border-radius: 0px;
  }
`;

export const ItemNumber = styled.span`
  width: 36px;
  height: 36px;
  border: 1px solid var(--white);
  border-radius: 999px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  ${ItemNumber} {
    ${({ isActive }) =>
      isActive &&
      css`
        background-color: var(--magnolia);
        color: var(--marine-blue);
        border-color: var(--magnolia);
      `}
  }

  @media only screen and (max-width: 600px) {
    display: initial;
    margin-top: 5px;
  }
`;

export const ItemBody = styled.div`
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

export const Subtitle = styled.h5`
  font-size: 13px;
  text-transform: uppercase;
  opacity: 0.75;
`;

export const Title = styled.h2`
  text-transform: uppercase;
  font-weight: 500;
`;
