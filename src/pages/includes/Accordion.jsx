import { useState } from "react";

function Accordion() {
  const [activeIndex, setActiveIndex] = useState(-1);

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(-1);
    } else {
      setActiveIndex(index);
    }
  };

  // Add your content to the following object
  const accordionData = [
    {
      heading: "Heading 1",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius purus ac est bibendum, at accumsan velit euismod.",
    },
    {
      heading: "Heading 2",
      content:
        "Praesent tincidunt mi vel felis vulputate, eu tempor velit tristique. Fusce euismod odio sed quam bibendum, nec ultrices elit dictum.",
    },
    {
      heading: "Heading 3",
      content:
        "Aenean et dui quis magna malesuada aliquam. Duis at sapien sed metus varius congue a vel orci.",
    },
    {
      heading: "Heading 4",
      content:
        "Nullam ultrices sapien nec diam semper, non luctus leo scelerisque. Donec sagittis quam sit amet enim aliquam, at viverra nisl eleifend.",
    },
    {
      heading: "Heading 5",
      content:
        "Morbi id tellus eu dolor ultrices pellentesque nec sit amet mi. Quisque euismod magna vel dui auctor hendrerit.",
    },
  ];

  return (
    <div className="w-full max-w-md mx-auto mt-4">
      {accordionData.map((item, index) => (
        <div key={index} className="my-2">
          <div
            className="flex items-center justify-between px-4 py-3 cursor-pointer bg-slate-600 rounded-md"
            onClick={() => toggleAccordion(index)}
          >
            <h2 className="text-lg font-medium">{item.heading}</h2>
            <span
              className={`${
                activeIndex === index ? "transform rotate-30" : ""
              } transition-transform duration-300`}
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    activeIndex === index
                      ? "M5 15l7-7 7 7"
                      : "M19 9l-7 7-7-7"
                  }
                />
              </svg>
            </span>
          </div>
          {activeIndex === index && (
            <div className="p-4 bg-gray-700 mt-2">{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Accordion;
