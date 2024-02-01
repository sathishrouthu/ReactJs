import "./App.css";
import { useState } from "react";
const questions = [
  {
    id: 1,
    question: "Capital of India ?",
    answer: "Delhi",
  },
  {
    id: 2,
    question: "Largest Country in the world ?",
    answer: "Russia",
  },
  {
    id: 3,
    question: "Country with most population ? ",
    answer: "China ",
  },
  {
    id: 4,
    question: "Greatest Batsman in the world ?",
    answer: "Virat Kohli",
  },
  { id: 5, question: "Where is taj mahal located ?", answer: "Agra, India" },
  {
    id: 6,
    question: "Who is the father of the nation India ?",
    answer: "Mahathma Gandhi",
  },
];
function App() {
  const [selectedId, setSelectedId] = useState(0);
  return (
    <div className="flashcards">
      {questions.map((question) => (
        <div
          key={question.id}
          onClick={() => {
            setSelectedId(question.id !== selectedId ? question.id : 0);
          }}
          className={question.id === selectedId ? "selected" : ""}
        >
          <p>
            {selectedId !== question.id ? question.question : question.answer}
          </p>
        </div>
      ))}
    </div>
  );
}
export default App;
