import { useState } from "react";
import "./Faq.css";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";

const Faq = ({ title, content }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className={open ? "accordion-item active" : "accordion-item"}
        key={title}
      >
        <div className="accordion-title" onClick={() => setOpen(!open)}>
          <p>{title}</p>
          <div>{open ? <IoIosArrowDown /> : <IoIosArrowForward />}</div>
        </div>
        {open && <div className="accordion-content mt-2">{content}</div>}
      </div>
    </>
  );
};

export default Faq;
