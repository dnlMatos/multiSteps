import styled from "styled-components";

export const MultiStepForm = styled.div`
  display: flex;
  gap: 12px;
  padding: 12px;
  background-color: var(--white);
  border-radius: 16px;
  height: 100%;
  width: 100%;
  box-shadow: 0 5px 10px 10px rgba(0, 0, 0, 0.05);
  
  @media only screen and (max-width: 600px) {
    // width: 100%;
    flex-direction:column;
    padding:0;
  }
`;