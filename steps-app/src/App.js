import { useState } from "react";

const messages = ["Learn Something.", "Apply for Jobs", "Perform Best."];

export default function App() {
  return (
    <div>
      <Steps />
    </div>
  );
}
function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) setStep(step - 1);
  }

  function handleNext() {
    if (step < 3) setStep(step + 1);
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen(!isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
          </div>
          <StepMessage step={step}>{messages[step - 1]}</StepMessage>
          <div className="buttons">
            <Button
              bgColor="#7950f2"
              textColor="#fff"
              onClickHandler={handlePrevious}
            >
              <span>👈</span>Previous
            </Button>
            <Button
              bgColor="#7950f2"
              textColor="#fff"
              onClickHandler={handleNext}
            >
              Next<span>👉</span>
            </Button>
          </div>
        </div>
      )}
      <StepMessage step={1}>
        <p>Pass the children prop</p>
        <p>☝</p>
      </StepMessage>
      <StepMessage step={2}>
        <p>Read the children prop</p>
        <p>✌</p>
      </StepMessage>
    </>
  );
}
function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h3>Step {step}</h3>

      {children}
    </div>
  );
}
function Button({ bgColor, textColor, onClickHandler, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClickHandler}
    >
      {children}
    </button>
  );
}
