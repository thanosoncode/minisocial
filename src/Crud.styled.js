import styled from "styled-components";

export const Container = styled.div`
  max-width: 700px;
  padding: 10px;
  margin: 0 auto;
  background: white;
`;
export const StyledNav = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 10px;
  margin-bottom: 40px;
  font-size: 1.1rem;

  ul {
    display: flex;
    list-style: none;
  }

  li {
    font-size: 1.1em;
    margin-right: 20px;
    font-weight: 600;
    color: ${({ theme }) => theme.color};
    cursor: pointer;
  }

  li:hover {
    opacity: 0.8;
  }

  span {
    font-weight: 500;
  }

  button {
    margin-left: 10px;
    padding: 1px 5px;
    color: ${({ theme }) => theme.color};
    cursor: pointer;
    transition: 0.3s ease;
    background: none;
    border: none;
    font-size: 1.1rem;
  }

  button:hover {
    opacity: 0.8;
  }
  @media (max-width: 500px) {
    li {
      margin-right: 15px;
    }
  }
`;
export const StyledHeading = styled.div`
  text-align: center;
  margin-bottom: 40px;
  h3 {
    font-size: 1.4rem;
    font-weight: 500;
    margin-bottom: 10px;
  }
  p {
    color: ${({ theme }) => theme.color};
    cursor: pointer;
    font-size: 1.2rem;
  }
  p:hover {
    opacity: 0.8;
  }
`;
export const StyledPlus = styled.span`
  font-weight: 800;
  font-size: 20px;
  cursor: pointer;
`;

export const StyledTextarea = styled.textarea`
  width: 100%;
  min-height: 300px;
  /* border: none; */
  resize: vertical;
  font-family: "Roboto", sans-serif;
  padding: 5px;
  font-size: 1em;

  &:focus {
    border: none;
    outline: none;
  }
`;

export const StyledPostList = styled.div`
  padding: 0 5px;
`;
export const StyledPost = styled.div`
  border-bottom: 1px solid #777;
  margin-bottom: 20px;
  padding-bottom: 10px;
  p {
    font-size: 1.1rem;
  }
`;
export const StyledPostHeader = styled.header`
  display: flex;
  justify-content: space-between;

  margin-bottom: 10px;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  p {
    font-size: 1rem;
    margin-right: 10px;
  }
`;

export const EditTextarea = styled.textarea`
  width: 100%;
  resize: vertical;
  font-family: "Roboto", sans-serif;
  padding: 5px;
`;

export const StyledSpan = styled.span`
  display: ${(display) => display};
  margin-left: 10px;
  cursor: pointer;
  font-size: 1.1rem;
`;

export const LikeSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  span {
    font-size: 1.1rem;
  }
  span:first-child {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  span:last-child {
    cursor: pointer;
  }
`;
