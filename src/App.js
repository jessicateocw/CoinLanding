import { Button, Typography } from "antd";
import "./App.less";
import React from "react";
import { Row, Col } from 'antd';
import {
  logo,
  rocket,
  row,
  circle,
  whirl,
  Bit,
  Eth,
  Poly,
  Ava,
  Sol,
  star,
} from "./assets";

import { Layout } from "antd";

const { Header, Footer, Content } = Layout;

const TWITTER_HANDLE = "oops_coinwars";
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;
const TELE_LINK = "https://t.me/coinwarsofficial";

const App = () => {
  function gotohow(e) {
    window.location.href = "#how-it-works";
    e.preventDefault();
    e.stopPropagation();
  }
  function gotoTop(e) {
    window.location.href = "#enter";
    e.preventDefault();
    e.stopPropagation();
  }
  return (
    <Layout className="layout-background">
      <Header
        style={{
          position: "fixed",
          zIndex: 2,
          width: "100%",
          background: "transparent",
        }}
        className="header"
      >
        <div className="logo">
          <img src={logo} onClick={gotoTop} />
        </div>
        <div
          style={{
            display: "flex",
          }}

          className="headerfields"
        >
          <Button type="text" className="header-button" onClick={gotohow}>
            <span className="button-text">How it works</span>
          </Button>
          <Button
            type="text"
            className="header-button"
            onClick={() => {
              window.open(TELE_LINK);
            }}
          >
            <span className="button-text">Telegram</span>
          </Button>
          <Button
            type="text"
            className="header-button"
            onClick={() => {
              window.open(TWITTER_LINK);
            }}
          >
            <span className="button-text">Twitter</span>
          </Button>

          <Button className="join-button">
            <span className="button-text">Join the Battle</span>
          </Button>
        </div>
      </Header>
      <div>
      <div>
        <div className="overlay"/>
        <div className="graphics">
        <Row>
          <Col span={8} offset={11}>
            <Row>
            <img
              src={Eth}
              style={{
                position: "absolute",
                zIndex: "0",
              }}
              className="planets"
            />
            </Row>
            <Row>
            <img
              src={Ava}
              style={{
                position: "absolute",
                paddingTop: "50vh",
                zIndex: "0",
              }}
              className="planets"
            />
            </Row>
            <Row>
            <img
              src={Poly}
              style={{
                position: "absolute",
                paddingTop: "70vh",
                zIndex: "0",
              }}
              className="planets"
            />
            </Row>
            </Col>
        </Row>
        <Row>
          <Col span={6} offset={3}> 
          <img
            src={Sol}
            style={{
              position: "absolute",
              paddingTop: "0vh",
              zIndex: "0",
            }}
            className="planets"
            />
          </Col>
          <Col span={6} offset={6}> 
            <img
              src={Bit}
              style={{ position: "absolute", zIndex: "1", paddingTop: "150px"}}
              className="planets"
            />
          </Col>
        </Row>
       
        <img
          src={rocket}
          style={{top: "30vh"}}
          className="rocket"
        />
       
        </div>
      </div> 
        
      </div>
      <Content id="enter" className="site-layout" style={{ padding: "0 50px" }}>
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: "120vh" }}
        >
          <div className="header-text" style={{position: "relative", zIndex: "10" }}>
            Enter the wars
            <br />
            of price predictions
          </div>

          <Typography className="text" style={{ padding: "50px 0" }}>
            Decentralized gamified NO LOSS Staking Protocol
          </Typography>

          <Button className="join-button">
            <span className="button-text">Join the Battle</span>
          </Button>
        </div>
        <div
          id="how-it-works"
          className="how-it-works"
          style={{ padding: 24, minHeight: "100vh" }}
        >
          <div className="header-text">How it works</div>
          <div
            className="explainations"
          >
            <Typography className="text define">
              Choose a token pool (e.g. Solana, Polygon), <br /> deposit tokens
              and submit price prediction for <br />
              that token
            </Typography>
            <img src={row} className="row"/>
          </div>
          <div
            className="middle"
          >
            <img src={circle} className="info" alt="info" />
            <Typography className="text define">
              Winners selected every day based on the <br />
              best predictions and awarded the yields <br />
              generated from the pools
            </Typography>
          </div>

          <div
           className="explainations"
          >
            <Typography className="text define">
              Even if you don't win, you get to still keep
              <br />
              all of your principle
            </Typography>
            <img src={whirl} className="info" alt="info" />
          </div>
        </div>
        <div
          className="how-it-works"
          style={{ padding: 24, minHeight: "10vh" }}
        >
          <div className="header-text">Join our community</div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "50px 0",
            }}
          >
            <Button
              type="text"
              className="header-button"
              onClick={() => {
                window.open(TELE_LINK);
              }}
            >
              <span className="button-text">Telegram</span>
            </Button>
            <Button
              type="text"
              className="header-button"
              onClick={() => {
                window.open(TWITTER_LINK);
              }}
            >
              <span className="button-text">Twitter</span>
            </Button>
          </div>
        </div>
      </Content>

      <Footer style={{ textAlign: "center" }}>©2022 Created by Coinwars</Footer>
    </Layout>
  );
};

export default App;
