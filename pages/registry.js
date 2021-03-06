import styled from "styled-components";
import { useState, useEffect } from "react";

import Layout from "../components/layout";
import Payment from "../components/payment";

export default function Registry() {
  const [active, setActive] = useState(false);

  const handleKeydown = (e) => {
    const keyName = e.key;

    if (keyName === "Escape") {
      setActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeydown, false);
    return function cleanup() {
      document.removeEventListener("keydown", handleKeydown, false);
    };
  });

  return (
    <Layout>
      <Content>
        <h1>registry</h1>
        <Alert>
          <p>
            rather than a registry, we are taking donations towards a down
            payment on a house.
            <br />
            please consider donating through one of the methods below:
          </p>
        </Alert>

        <Options>
          {active ? <Payment close={() => setActive(false)} /> : null}
          <Column>
            <h2>with credit card</h2>
            <Button onClick={() => setActive(true)}>donate</Button>
          </Column>
          <Column>
            <h2>with venmo</h2>
            <p>
              @cameroncharles_
              <br />
              or
              <br />
              @ncouture
            </p>
          </Column>
          <Column>
            <h2>with check</h2>
            <p>
              334 W 200 N
              <br />
              Apt. 201
              <br />
              Provo, UT 84601
            </p>
          </Column>
        </Options>
      </Content>
    </Layout>
  );
}

const Content = styled.div`
  height: 100vh;
  width: 100%;
  background-color: white;
  padding: 100px;
  display: flex;
  flex-direction: column;

  @media (max-width: 925px) {
    padding: 50px;
    padding-top: 100px;
    height: 100%;
  }

  h1 {
    margin-bottom: 30px;
  }
`;

const Options = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 800px) {
    flex-direction: column;
    margin-bottom: 0px;
  }
`;

const Button = styled.button`
  width: 150px;
  height: 50px;
  font-size: 18px;
  margin-bottom: 60px;
`;

const Column = styled.div`
  width: 300px;
  height: 400px;
  background-color: white;
  border: 5px solid black;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 800px) {
    width: 100%;
    margin-bottom: 50px;
  }

  p {
    text-align: center;
    line-height: 30px;
  }
`;

const Alert = styled.div`
  padding: 10px;
  background-color: rgba(242, 242, 242, 1);
  margin-bottom: 50px;

  p {
    align-self: center;
    line-height: 30px;
    text-align: center;
  }
`;
