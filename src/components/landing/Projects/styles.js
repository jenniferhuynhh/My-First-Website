import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 2rem 0;
  height: 95vh;

  h2 {
    text-align: center;
    font-size: 2.5em;
    font-family: "Playfair Display"
  }
`;

export const Grid = styled.div`
  display: grid;
  padding: 2rem 0;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 8fr;
  gap: 1.2rem 1.2rem;
  height: 20em;

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;

export const Item = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.11);
  text-align: left;
  outline: 0.2em solid #9D45B3;

  h4 {
    color: #212121;
    font-size: 1.25em;
  }

  p {
    color: #707070;
    font-family: "Overpass mono";
    font-size: 0.8em;
  }

  &:hover{
    outline: 0.2em solid #9D45B3;
    transform: translateY(-5px);
  }
`;

export const Content = styled.div`
  padding: 1rem 0;
`;

export const Stats = styled.div`
  display: flex;

  div {
    display: flex;
    
    &:first-child {
      margin-right: 0.5rem;
    }

    img {
      margin: 0;
    }

    span {
      color: #000;
      margin-left: 0.5rem;
    }
  }
`;
