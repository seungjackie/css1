import logo from "./logo.svg";
import "./App.css";
import img from "./img/1.png";

function App() {
  return (
    <div className="main">
      <div className="container">
        <div className="top-banner">
          <div className="toss">
            <h1>toss</h1>
          </div>
          <div className="menu">앱 다운로드</div>
          <div className="menu2">삼선 메뉴</div>
        </div>
        <hr />
        <div className="frist-container">
          <div className="pay1">
            <h2>송금</h2>
          </div>
          <div className="pay2">
            <h2>
              간편하고 안전하게 <br /> 수수료는 평생 무료로, <br /> 이런 송금
              써보셨나요?
            </h2>
          </div>
        </div>

        <div className="second-container">
          <div className="pay-small1">평생 무료 송금</div>
          <div className="pay-small2">
            토스 평생 무료송금으로 <br />
            모두의 귬으에 자유를
          </div>
          <div className="pay-small3">
            누구에게 보내든 은행 상관 없이, <br />
            이제 토스와 함꼐 수수료 걱정없이 송금하세요.
          </div>
          <div className="box">
            <img src={img} />
            <div>
              김토스님에게 <br /> 50,000원을 보냈어요
            </div>
            <div>
              <p>수수료는 토스가 냈어요!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
