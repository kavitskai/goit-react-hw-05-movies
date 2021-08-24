import styled from "@emotion/styled";

export const MovieContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: white;
  transition: all 250ms ease-in-out;
    &:hover,
    &:focus {
      transform: scale(1.05);
    }
`;
export const DetailsContainer = styled.div`
  width:460px;
`;
export const Poster = styled.img`
  height: 398px;
  cursor: pointer;
  border-radius: 5px;
`;

export const MovieTitle = styled.h2`
font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 1.33;
  text-transform: uppercase;
  color: #04125e;
  margin-bottom: 15px;
`;

export const ItemTitle = styled.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 1.33;
  text-transform: uppercase;
  margin-bottom: 15px;
  color: #04125e;
`;

export const ItemDesc = styled.p`
  display: flex;
  justify-content: start;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.33;
  color: #000000;
  margin-bottom: 25px;
`;
export const BackBtn = styled.button`
  position: absolute;
  border: 1px white solid;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  color: white;
  background-color: #04125e;
`;