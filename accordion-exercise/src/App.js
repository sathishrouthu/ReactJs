import "./App.css";
import { useState } from "react";
const faqs = [
  {
    question: "What is the capital of India?",
    answer: "The capital of India is New Delhi.",
  },
  {
    question: "What is the population of India?",
    answer:
      "As of the latest estimate, the population of India is over 1.3 billion people, making it the second most populous country in the world.",
  },
  {
    question: "Which languages are spoken in India?",
    answer:
      "India is a linguistically diverse country with several languages spoken across its regions. The Constitution of India recognizes Hindi and English as the official languages, and there are 21 other officially recognized languages, including Bengali, Telugu, Marathi, Tamil, Urdu, Gujarati, Malayalam, and others.",
  },
  {
    question: "What is the currency of India?",
    answer:
      "The official currency of India is the Indian Rupee, denoted by the symbol ₹ and the code INR.",
  },
  {
    question: "What are some famous landmarks in India?",
    answer:
      "India is known for its rich cultural and historical heritage. Some famous landmarks include the Taj Mahal in Agra, Jaipur's Hawa Mahal, Delhi's Red Fort, Mumbai's Gateway of India, and many more.",
  },
];

export default function App() {
  return <Accordion data={faqs} />;
}

function Accordion({ data }) {
  const [currOpen, setCurrOpen] = useState(null);
  return (
    <div className="accordion">
      {data.map((item, i) => (
        <AccordionItem
          currOpen={currOpen}
          setCurrOpen={setCurrOpen}
          num={i + 1}
          title={item.question}
          text={item.answer}
          key={item.question}
        />
      ))}
    </div>
  );
}

function AccordionItem({ currOpen, setCurrOpen, num, title, text }) {
  return (
    <div
      className={`item ${num === currOpen ? "open" : ""}`}
      onClick={() => {
        num === currOpen ? setCurrOpen(null) : setCurrOpen(num);
      }}
    >
      <div className="number">{num <= 9 ? `0${num}` : num}</div>
      <div className="title">{title}</div>
      <p className="icon">{num === currOpen ? "➖" : "➕"}</p>
      {num === currOpen && <div className="content-box">{text}</div>}
    </div>
  );
}
