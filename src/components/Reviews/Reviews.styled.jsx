import styled from "@emotion/styled";

export const List = styled.ul`
margin-top: 30px;
margin-bottom: 30px;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 1000px;
  margin: 0 auto;
  padding: 20px;
  background-color: white;
  transition: all 250ms ease-in-out;
    &:hover,
    &:focus {
      transform: scale(1.05);
    }
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;
export const Wrap = styled.div`
display: block;
width: 150px;
`;
export const ReviewerImg = styled.img`
   margin: 0 auto;
  height: 80px;
  border-radius: 8px;
`;

export const ReviewerName = styled.p`
margin-top: 15px;
text-align: center;
background-color: #04125e;
color: white;
border-radius: 5px;
font-weight: 600;
`;

export const ReviewText = styled.p`
width: 800px;
`;