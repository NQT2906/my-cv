import {
  FacebookOutlined,
  GithubOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import AI900 from "@assets/images/AI900.png";
import JavaScriptAlgoAndStructures from "@assets/images/JavaScriptAlgoAndStructures.png";
import ResponsiveWebCert from "@assets/images/ResponsiveWeb.png";
import classNames from "classnames";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useWindowSize } from "../../helpers/useWindowSize";

const CONSTANTS = {
  STICKY_CLASS: "sticky-information",
};

const MASTER_DATA: any = {
  FULL_NAME: { label: "Full name", content: "Nguyen Quang Thuan" },
  BIRTH: {
    label: "Birth",
    content: `29/06/2000`,
  },
  PHONE_NUMBER: {
    label: "Phone number",
    content: <a href="tel:+84853747469">+84853747469</a>,
  },
  ADDRESS: { label: "Address", content: "Ho Chi Minh City, Vietnam" },
  EMAIL: {
    label: "Email",
    content: (
      <a href="mailto: nguyenquangthuan2906@gmail.com">
        nguyenquangthuan2906@gmail.com
      </a>
    ),
  },
  SOCIAL_NETWORK: {
    label: "Social network",
    content: {
      GITHUB: (
        <GithubOutlined
          onClick={() => {
            window.open("//github.com/NQT2906");
          }}
        />
      ),
      FACEBOOK: (
        <FacebookOutlined
          onClick={() => {
            window.open("//www.fb.com/nqt290600");
          }}
        />
      ),
      LINKEDIN: (
        <LinkedinOutlined
          onClick={() => {
            window.open("//www.linkedin.com/in/nguyenquangthuan2906/");
          }}
        />
      ),
    },
  },
};

const LIST_PROJECTS = [
  {
    name: "Human Resources Management",
    customer: "Japanese",
    role: "Front-End Developer",
    overview:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci eius libero, sequi nihil ex ratione nobis quis? Deserunt accusamus modi illum fuga possimus veniam vero aspernatur mollitia? Corrupti quisquam sequi itaque similique, soluta deleniti eius enim dicta repellat voluptas, laborum dolor eaque fuga? Aut vitae explicabo expedita totam, nam nisi.",
    timeFrom: "03/2023",
    timeTo: "Now",
    people: "Over 20 people",
  },
  {
    name: "Travel booking tour management",
    customer: "Japanese",
    role: "Front-End Developer",
    overview:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci eius libero, sequi nihil ex ratione nobis quis? Deserunt accusamus modi illum fuga possimus veniam vero aspernatur mollitia? Corrupti quisquam sequi itaque similique, soluta deleniti eius enim dicta repellat voluptas, laborum dolor eaque fuga? Aut vitae explicabo expedita totam, nam nisi.",
    timeFrom: "08/2022",
    timeTo: "12/2022",
    people: "Over 200 people",
  },
  {
    name: "Human Resources Management",
    customer: "Vietnamese",
    role: "Full-Stack Developer",
    overview:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci eius libero, sequi nihil ex ratione nobis quis? Deserunt accusamus modi illum fuga possimus veniam vero aspernatur mollitia? Corrupti quisquam sequi itaque similique, soluta deleniti eius enim dicta repellat voluptas, laborum dolor eaque fuga? Aut vitae explicabo expedita totam, nam nisi.",
    timeFrom: "01/2023",
    timeTo: "03/2023",
    people: "Over 10 people",
  },
  {
    name: "E-Commerce",
    customer: "Vietnamese",
    role: "Front-End Developer",
    overview:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci eius libero, sequi nihil ex ratione nobis quis? Deserunt accusamus modi illum fuga possimus veniam vero aspernatur mollitia? Corrupti quisquam sequi itaque similique, soluta deleniti eius enim dicta repellat voluptas, laborum dolor eaque fuga? Aut vitae explicabo expedita totam, nam nisi.",
    timeFrom: "07/2022",
    timeTo: "08/2022",
    people: "Over 10 people",
  },
  {
    name: "Cursus",
    customer: "Vietnamese",
    role: "Front-End Developer",
    overview:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci eius libero, sequi nihil ex ratione nobis quis? Deserunt accusamus modi illum fuga possimus veniam vero aspernatur mollitia? Corrupti quisquam sequi itaque similique, soluta deleniti eius enim dicta repellat voluptas, laborum dolor eaque fuga? Aut vitae explicabo expedita totam, nam nisi.",
    timeFrom: "04/2022",
    timeTo: "07/2022",
    people: "5 people",
  },
  {
    name: "SVHCM",
    customer: "Vietnamese",
    role: "Front-End Developer",
    overview:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci eius libero, sequi nihil ex ratione nobis quis? Deserunt accusamus modi illum fuga possimus veniam vero aspernatur mollitia? Corrupti quisquam sequi itaque similique, soluta deleniti eius enim dicta repellat voluptas, laborum dolor eaque fuga? Aut vitae explicabo expedita totam, nam nisi.",
    timeFrom: "08/2019",
    timeTo: "12/2021",
    people: "5 people",
  },
];

const LIST_SKILLS = [
  {
    name: "ReactJS",
    percent: 80,
  },
  {
    name: "JavaScript",
    percent: 80,
  },
  {
    name: "TypeScript",
    percent: 75,
  },
  {
    name: "HTML/CSS",
    percent: 80,
  },
  {
    name: "C#",
    percent: 40,
  },
  {
    name: "C/C++",
    percent: 60,
  },
  {
    name: "Python",
    percent: 80,
  },
  {
    name: "Git",
    percent: 85,
  },
];

const LIST_EDUCATION = [
  {
    name: "FPT Software",
    role: "Software Developer",
    timeFrom: "03/2022",
    timeTo: "Now",
    additional: "",
  },
  {
    name: "University of Information Technology - VNUHCM",
    role: "Data Science",
    overview:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci eius libero, sequi nihil ex ratione nobis quis? Deserunt accusamus modi illum fuga possimus veniam vero aspernatur mollitia? Corrupti quisquam sequi itaque similique, soluta deleniti eius enim dicta repellat voluptas, laborum dolor eaque fuga? Aut vitae explicabo expedita totam, nam nisi.",
    timeFrom: "08/2018",
    timeTo: "08/2022",
    additional: "GPA: 8.27/10",
  },
];

const LIST_CERTIFICATES = [
  {
    name: "AI900",
    imageUrl: AI900,
    source:
      "https://learn.microsoft.com/en-us/users/nguyenquangthuan-2232/certifications/certification-details/certification.azure-ai-fundamentals",
    achieveTime: "01/2023",
    expireTime: null,
  },
  {
    name: "JavaScript Algorithms and Data Structures",
    imageUrl: JavaScriptAlgoAndStructures,
    source:
      "https://freecodecamp.org/certification/thuan2k/javascript-algorithms-and-data-structures",
    achieveTime: "08/2021",
    expireTime: null,
  },
  {
    name: "Responsive Web Design",
    imageUrl: ResponsiveWebCert,
    source:
      "https://freecodecamp.org/certification/thuan2k/responsive-web-design",
    achieveTime: "07/2021",
    expireTime: null,
  },
];

export const useHomePage = () => {
  const [isScrollDown, setIsScrollDown] = useState(false);
  const { width, height } = useWindowSize();
  const navigate = useNavigate();

  window.onscroll = function (e) {
    const value = document.getElementById("avatarId");
    const scrollTop = window?.scrollY;
    if (value && scrollTop !== undefined && scrollTop !== null) {
      if (scrollTop >= 30) {
        value.className = classNames(value.className, {
          [CONSTANTS.STICKY_CLASS]: !value.className?.includes(
            CONSTANTS.STICKY_CLASS
          ),
        });
        setIsScrollDown(true);
      } else {
        value.className = value?.className?.replace(
          ` ${CONSTANTS.STICKY_CLASS}`,
          ""
        );
        setIsScrollDown(false);
      }
    }
  };

  const state = {
    isScrollDown,
    CONSTANTS,
    MASTER_DATA,
    LIST_PROJECTS,
    LIST_EDUCATION,
    LIST_SKILLS,
    LIST_CERTIFICATES,
    width,
    height,
  };

  const handler = {
    setIsScrollDown,
    navigate,
  };

  return { state, handler };
};
