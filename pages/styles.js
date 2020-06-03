import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 0;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  & ul {
    padding: 0;
    display: flex;
    width: 80%;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
  }

  & li {
    padding: 22px;
    margin: 22px;
    display: flex;
    flex-direction: column;
    background: #0abde3;
    border-radius: 12px;
    justify-content: center;
    align-items: center;
    box-shadow: 1px 2px 10px rgba(0, 0, 0, 0.5);

    & :hover {
      transform: translateY(-20px);
      box-shadow: 1px 20px 30px rgba(0, 0, 0, 0.5);
    }
  }

  & li h2 {
    margin: 12px 0;
    font-size: 18px;
    font-family: "Roboto", Sans Seriff;
    color: #fff;
    text-transform: capitalize;
  }
`;

export const Title = styled.h1`
  color: #8c7ae6;
  font-family: "Roboto", Sans Seriff;
  font-size: 26px;
`;

export const Button = styled.a`
  padding: 12px 22px;
  border-radius: 44px;
  color: #fff;
  margin: 12px;
  background: #796;
  font-family: "Roboto", Sans Seriff;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  box-shadow: 1px 2px 10px rgba(0, 0, 0, 0.5);

  & :hover {
    transform: scale(1.1);
  }
`;
export const PrevBtn = styled.a`
  padding: 12px 32px;
  border-radius: 44px;
  color: #fff;
  margin: 12px;
  background: #f33;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  box-shadow: 1px 2px 10px rgba(0, 0, 0, 0.5);
  font-family: "Roboto", Sans Seriff;
  & :hover {
    transform: scale(1.1);
  }
`;

export const BtnArea = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
