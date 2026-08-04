import React, { useState } from "react";

const CategoryIcons = {
  "AI & Machine Learning": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 text-[var(--sec)] opacity-70"
    >
      <path d="M12 2C13.1 2 14 2.9 14 4C14 4.74 13.6 5.39 13 5.73V7H14C17.87 7 21 10.13 21 14V15C21.55 15 22 15.45 22 16V19C22 19.55 21.55 20 21 20H20V21C20 21.55 19.55 22 19 22H5C4.45 22 4 21.55 4 21V20H3C2.45 20 2 19.55 2 19V16C2 15.45 2.45 15 3 15V14C3 10.13 6.13 7 10 7H11V5.73C10.4 5.39 10 4.74 10 4C10 2.9 10.9 2 12 2ZM9 13C8.17157 13 7.5 13.6716 7.5 14.5C7.5 15.3284 8.17157 16 9 16C9.82843 16 10.5 15.3284 10.5 14.5C10.5 13.6716 9.82843 13 9 13ZM15 13C14.1716 13 13.5 13.6716 13.5 14.5C13.5 15.3284 14.1716 16 15 16C15.8284 16 16.5 15.3284 16.5 14.5C16.5 13.6716 15.8284 13 15 13Z"></path>
    </svg>
  ),
  "Backend & Databases": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 text-[var(--sec)] opacity-70"
    >
      <path d="M12 2C16.4183 2 20 3.34315 20 5C20 6.65685 16.4183 8 12 8C7.58172 8 4 6.65685 4 5C4 3.34315 7.58172 2 12 2ZM4 7.05025C5.46252 8.2447 8.4941 9 12 9C15.5059 9 18.5375 8.2447 20 7.05025V11C20 12.6569 16.4183 14 12 14C7.58172 14 4 12.6569 4 11V7.05025ZM4 13.0502C5.46252 14.2447 8.4941 15 12 15C15.5059 15 18.5375 14.2447 20 13.0502V17C20 18.6569 16.4183 20 12 20C7.58172 20 4 18.6569 4 17V13.0502Z"></path>
    </svg>
  ),
  "Systems & Web Development": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 text-[var(--sec)] opacity-70"
    >
      <path d="M21 3C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H21ZM20 11H4V19H20V11ZM20 5H4V9H20V5ZM11 6V8H9V6H11ZM7 6V8H5V6H7Z"></path>
    </svg>
  ),
};

const SkillsList = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const skills = {
    "AI & Machine Learning": [
      "Federated Learning (TensorFlow Federated)",
      "CNNs & image classification with Keras",
      "Differential privacy techniques",
    ],
    "Backend & Databases": [
      "REST APIs with Jakarta EE and Node.js/Express",
      "MariaDB / MySQL schema design",
      "JPA / prepared statements",
    ],
    "Systems & Web Development": [
      "Android apps (Java, Retrofit)",
      "C++ systems & game programming",
      "PHP web applications",
    ],
  };

  const toggleItem = (item: string) => {
    setOpenItem(openItem === item ? null : item);
  };

  return (
    <div className="text-left pt-3 md:pt-9">
      <h3 className="text-[var(--white)] text-3xl md:text-4xl font-semibold md:mb-6">
        What I do?
      </h3>
      <ul className="space-y-4 mt-4 text-lg">
        {Object.entries(skills).map(([category, items]) => (
          <li key={category} className="w-full">
            <div
              onClick={() => toggleItem(category)}
              className="md:w-[400px] w-full bg-[#1414149c] rounded-2xl text-left hover:bg-opacity-80 transition-all border border-[var(--white-icon-tr)] cursor-pointer overflow-hidden"
            >
              <div className="flex items-center gap-3 p-4">
                {CategoryIcons[category]}
                <div className="flex items-center gap-2 flex-grow justify-between">
                  <div className="min-w-0 max-w-[200px] md:max-w-none overflow-hidden">
                    <span className="block truncate text-[var(--white)] text-lg">
                      {category}
                    </span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className={`w-6 h-6 text-[var(--white)] transform transition-transform flex-shrink-0 ${
                      openItem === category ? "rotate-180" : ""
                    }`}
                  >
                    <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
                  </svg>
                </div>
              </div>

              <div
                className={`transition-all duration-300 px-4 ${
                  openItem === category
                    ? "max-h-[500px] pb-4 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <ul className="space-y-2 text-[var(--white-icon)] text-sm">
                  {items.map((item, index) => (
                    <div key={index} className="flex items-center">
                      <span className="pl-1">•</span>
                      <li className="pl-3">{item}</li>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsList;
