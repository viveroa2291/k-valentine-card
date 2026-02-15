import React, { useState } from 'react';
import './App.css';
import me from './images/me.jpeg';
import us from './images/us.JPG';
function App() {
  const [envelopeState, setEnvelopeState] = useState({
    isInnerOpen: false,
    isOuterOpen: false,
    isHeartBtnHidden: false,
    isCloseBtnVisible: false,
    isMessage1Hidden: false,
    isMessage2Visible: false,
    isImageVisible: false,
  });
  const openEnvelope = () => {
      setEnvelopeState((prevState) => ({
        ...prevState, 
        isInnerOpen: true,
        isOuterOpen: true,
        isHeartBtnHidden: true,
        isCloseBtnVisible: true,
        isMessage1Hidden: true,
        isMessage2Visible: true,
        isImageVisible: true,
        selectedImage: me
      }))
    }
  const closeEnvelope = () => {
    setEnvelopeState((prevState) => ({ 
      ...prevState, 
      isInnerOpen: false,
      isOuterOpen: false,
      isHeartBtnHidden: false,
      isCloseBtnVisible: false,
      isMessage1Hidden: false,
      isMessage2Visible: false,
      isImageVisible: false,
      isSecondPageVisible: false,
  }));
}
  const nextPage = () => {
    setEnvelopeState((prevState) => ({
      ...prevState,
      isMessage2Visible: false,
      isSecondPageVisible: true,
      selectedUs: us,
    }));
  }
  const backPage = () => {
    setEnvelopeState((prevState) => ({
      ...prevState,
      isMessage2Visible: true,
      isSecondPageVisible: false,
      selectedUs: us
    }));
  };
  return (
    <div className="App">
      <article>
        <div className="envelope-container">
          <p className={`message message-1 ${envelopeState.isMessage1Hidden ? 'hide' : ''}`}>
            <br/>Click on the heart seal to open the envelope.
          </p>
          <span className={`note ${envelopeState.isMessage2Visible ? 'show' : 'hide'} `}>
            <span className='picture'>
              <img className={`imageChosen ${envelopeState.isImageVisible ? 'show' : ''}`} src={envelopeState.selectedImage} alt=''/>
            </span>
            <p className={`message message-2 ${envelopeState.isMessage2Visible ? 'show' : ''}`}>Hi Khiley,</p>
            <p className={`valentines-message message-2 ${envelopeState.isMessage2Visible ? 'show' : ''}`}>I'm very glad I got a chance to meet you. I really enjoy my time that I spend with you and would like to get to know you more this year :). You're quite an exceptional woman that I've ever met and I truly enjoy our conversations that we have and find you to be quite remarkable and very smart. I hope you enjoy your time in Chicago this weekend and look forward to seeing you!</p>
            <button className={`next-button`} onClick={nextPage}>Next</button>
          </span>
          <span className={`note ${envelopeState.isSecondPageVisible ? 'show' : 'hide'} `}>
            <img className={'us-picture'} src={envelopeState.selectedUs} alt='us'/>
            <p className={'Happy-valentines'}>Happy Valentine's Day! 💌</p>
            <p className={`sincerely`}>Love, Adan :)</p>
            <button className={`back-button ${envelopeState.isHeartBtnHidden ? 'hide' : 'show'}`} onClick={backPage}>Back</button>
          </span>
          <button className={`heart-btn otherButton ${envelopeState.isHeartBtnHidden ? 'hide' : 'show'}`} onClick={openEnvelope}>&#10084;</button>
          <button className={`close-btn otherButton ${envelopeState.isCloseBtnVisible ? 'show' : ''}`} onClick={closeEnvelope}>close envelope</button>
          <div className="envelope-flap">
            <svg className="inner">
              <polygon className={`inner-polygon ${envelopeState.isInnerOpen ? 'inner-open' : ''}`} points="5,0 345,0 175,145"></polygon>
            </svg>
            <svg className="outer" id="outer">
              <polygon className={`outer-polygon ${envelopeState.isOuterOpen ? 'outer-open' : ''}`} points="5,150 345,150 175,0"></polygon>
            </svg>
          </div>
          <div className="envelope-base"></div>
        </div>
      </article>
    </div>
  );
}

export default App;
