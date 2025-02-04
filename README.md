# Frontend Mentor - Single-page developer portfolio solution

This is a solution to the [Single-page developer portfolio challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/singlepage-developer-portfolio-bBVj2ZPi-x). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)\
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Receive an error message when the `form` is submitted if:
  - Any field is empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: Hook the form up so it sends and stores the user's enquiry (you can use a spreadsheet or Airtable to save the enquiries)
- **Bonus**: Add your own details (image, skills, projects) to replace the ones in the design

### Screenshot

![mobile preview](./public/Screenshot%202025-02-04%20at%2011-18-55%20Single%20Page%20Developer%20Portfolio.png)
![tablet preview](./public/Screenshot%202025-02-04%20at%2011-19-23%20Single%20Page%20Developer%20Portfolio.png)
![desktop preview](./public/Screenshot%202025-02-04%20at%2011-19-55%20Single%20Page%20Developer%20Portfolio.png)

### Links

- Solution URL: [github](https://github.com/oloude)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Typescript](https://www.typescriptlang.org/) - extends JavaScript

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```js
import { useState } from "react";
import { MdErrorOutline } from "react-icons/md";

function ContactForm() {
  const [formData, setFormData] = useState({
    nameData: {
      name: "",
      error: "",
    },
    emailData: {
      email: "",
      error: "",
    },
    messageData: {
      message: "",
      error: "",
    },
  });

  function handleNameChange(value: string) {
    setFormData((prev) => {
      return {
        ...prev,
        nameData: {
          ...prev.nameData,
          name: value,
        },
      };
    });
  }

  function handleEmailChange(value: string) {
    setFormData((prev) => {
      return {
        ...prev,
        emailData: {
          ...prev.emailData,
          email: value,
        },
      };
    });
  }

  function handleMessageChange(value: string) {
    setFormData((prev) => {
      return {
        ...prev,
        messageData: {
          ...prev.messageData,
          message: value,
        },
      };
    });
  }

  function handleFormSubmit(e: React.FormEvent) {
    e.preventDefault();

    setFormData((prev) => ({
      ...prev,
      nameData: { ...prev.nameData, error: "" },
      emailData: { ...prev.emailData, error: "" },
      messageData: { ...prev.messageData, error: "" },
    }));

    if (!formData.nameData.name) {
      setFormData((prev) => {
        return {
          ...prev,
          nameData: {
            ...prev.nameData,
            error: "please name input can not be empty",
          },
        };
      });

      return;
    }

    if (!formData.messageData.message) {
      setFormData((prev) => {
        return {
          ...prev,
          messageData: {
            ...prev.messageData,
            error: "please textarea  can not be empty",
          },
        };
      });

      return;
    }

    if (!formData.emailData.email) {
      setFormData((prev) => {
        return {
          ...prev,
          emailData: {
            ...prev.emailData,
            error: "please email input can not be empty",
          },
        };
      });

      return;
    }

    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!regex.test(formData.emailData.email)) {
      setFormData((prev) => {
        return {
          ...prev,
          emailData: {
            ...prev.emailData,
            error: "please input a valid email",
          },
        };
      });

      return;
    }
    setFormData({
      nameData: { name: "", error: "" },
      emailData: { email: "", error: "" },
      messageData: { message: "", error: "" },
    });
  }

  console.log(formData);

  return (
    <form
      onSubmit={handleFormSubmit}
      action=""
      className="flex flex-col gap-8 mb-20"
      noValidate
    >
      <div className="flex flex-col gap-2 ">
        <div
          className={`${
            formData.nameData.error ? "border-b-red-600" : "border-b-grey"
          } flex gap-6 justify-between items-center border-b  pb-4 px-4`}
        >
          <input
            onChange={(e) => handleNameChange(e.target.value)}
            value={formData.nameData.name}
            type="text"
            placeholder="Name"
            className="text-base font-medium text-grey uppercase outline-none"
          />
          {formData.nameData.error && (
            <MdErrorOutline className="text-red-600 w-4 h-4" />
          )}
        </div>
        <span className="self-end text-red-600 text-sm italic">
          {formData.nameData.error}
        </span>
      </div>
      <div className="flex flex-col gap-2">
        <div
          className={`${
            formData.emailData.error ? "border-b-red-600" : "border-b-grey"
          } flex gap-6 justify-between items-center border-b  pb-4 px-4`}
        >
          <input
            onChange={(e) => handleEmailChange(e.target.value)}
            value={formData.emailData.email}
            type="email"
            placeholder=" Email"
            className="text-base font-medium text-grey uppercase outline-none"
          />
          {formData.emailData.error && (
            <MdErrorOutline className="text-red-600 w-4 h-4" />
          )}
        </div>
        <span className="self-end text-red-600 text-sm italic">
          {formData.emailData.error}
        </span>
      </div>
      <div className="flex flex-col gap-2">
        <div
          className={`${
            formData.messageData.error ? "border-b-red-600" : "border-b-grey"
          } flex gap-6 justify-between items-center border-b  pb-4 px-4`}
        >
          <textarea
            onChange={(e) => handleMessageChange(e.target.value)}
            value={formData.messageData.message}
            name=""
            id=""
            placeholder="Message"
            className="text-base font-medium text-grey uppercase w-full outline-none resize-none"
            cols={30}
            rows={6}
          >
            {" "}
          </textarea>
          {formData.messageData.error && (
            <MdErrorOutline className="text-red-600 w-4 h-4" />
          )}
        </div>
        <span className="self-end text-red-600 text-sm italic">
          {formData.messageData.error}
        </span>
      </div>
      <button className="text-base text-white  text-center self-end leading-[26px] font-bold uppercase relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-green after:-bottom-2.5 after:left-0">
        Send message
      </button>
    </form>
  );
}

export default ContactForm;
```

## Author

- Frontend Mentor - [@Oloude](https://www.frontendmentor.io/profile/Oloude)
- Twitter - [@AbosedeOloude](https://www.twitter.com/AbosedeOloude)
