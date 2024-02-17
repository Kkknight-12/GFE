import { useState } from "react";

const sections = [
  {
    value: "html",
    title: "HTML",
    contents:
      "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.",
  },
  {
    value: "css",
    title: "CSS",
    contents:
      "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.",
  },
  {
    value: "javascript",
    title: "JavaScript",
    contents:
      "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.",
  },
];

const AccordionItem = ({ id, title, contents, isOpen, onClick }) => (
  <div onClick={() => onClick(id)}>
    <div>
      {title} <span aria-hidden={true} className="accordion-icon" />
    </div>
    <div hidden={!isOpen}>{contents}</div>
  </div>
);

export default function Accordion() {
  const [open, setOpen] = useState(
    sections.map((section) => ({ id: section.value, isOpen: false }))
  );

  const handleAccordionState = (id) => {
    setOpen((prevState) =>
      prevState.map((item) =>
        item.id === id ? { ...item, isOpen: !item.isOpen } : item
      )
    );
  };

  console.log("open ", open);

  return (
    <div>
      {sections.map((section) => (
        <AccordionItem
          key={section.value}
          id={section.value}
          title={section.title}
          contents={section.contents}
          isOpen={open.find((item) => item.id === section.value)?.isOpen}
          onClick={handleAccordionState}
        />
      ))}

    </div>
  );
}