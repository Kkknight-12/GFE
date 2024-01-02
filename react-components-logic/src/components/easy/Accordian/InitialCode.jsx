import { useState } from "react";

export default function Accordion() {
  const [open, setOpen] = useState([
    { id: 1, isOpen: false },
    { id: 2, isOpen: false },
    { id: 3, isOpen: false },
  ]);

  const handleAccordionState = (id) => {
    const updatedState = open?.map((item) =>
      item.id === id ? { ...item, isOpen: !item.isOpen } : item
    );
    setOpen(updatedState);
  };

  console.log("open ", open);

  return (
    <div>
      <div onClick={() => handleAccordionState(1)}>
        <div>
          HTML <span aria-hidden={true} className="accordion-icon" />
        </div>
        <div hidden={open[0].isOpen}>
          The HyperText Markup Language or HTML is the standard markup language
          for documents designed to be displayed in a web browser.
        </div>
      </div>
      <div onClick={() => handleAccordionState(2)}>
        <div>
          CSS <span aria-hidden={true} className="accordion-icon" />
        </div>
        <div hidden={open[1].isOpen}>
          Cascading Style Sheets is a style sheet language used for describing
          the presentation of a document written in a markup language such as
          HTML or XML.
        </div>
      </div>
      <div onClick={() => handleAccordionState(3)}>
        <div>
          JavaScript <span aria-hidden={true} className="accordion-icon" />
        </div>
        <div hidden={open[2].isOpen}>
          JavaScript, often abbreviated as JS, is a programming language that is
          one of the core technologies of the World Wide Web, alongside HTML and
          CSS.
        </div>
      </div>
    </div>
  );
}