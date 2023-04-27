import logo from "./logo.svg";
import "./App.css";

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
        <div className="frist-container">
          <div className="pay1">송금</div>
          <div className="pay2">
            간편하고 안전하게 <br /> 수수료는 평생 무료로, <br /> 이런 송금
            써보셨나요?
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
            <div>화살표</div>
            <div>
              김토스님에게 <br /> 50,000원을 보냈어요
            </div>
            <div>수수료는 토스가 냈어요!</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
