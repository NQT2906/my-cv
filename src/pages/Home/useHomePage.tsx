import {
  FacebookOutlined,
  LinkedinOutlined,
  GithubOutlined,
} from "@ant-design/icons";
import classNames from "classnames";
import moment from "moment";
import { useState } from "react";
import { useWindowSize } from "../../helpers/useWindowSize";

const CONSTANTS = {
  STICKY_CLASS: "sticky-information",
};

const MASTER_DATA: any = {
  FULL_NAME: { label: "Full name", content: "Nguyen Quang Thuan" },
  BIRTH: {
    label: "Birth",
    content: `29/06/2000 (${moment().diff("06-29-2000", "years")})`,
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

// const MASTER_DATA: any = {
//   "Full name": "Nguyen Quang Thuan",
//   Birth: `29/06/2000 (${moment().diff("06-29-2000", "years")})`,
//   "Phone number": <a href="tel:+84853747469">+84853747469</a>,
//   Address: "Ho Chi Minh City, Vietnam",
//   Email: (
//     <a href="mailto: nguyenquangthuan2906@gmail.com">
//       nguyenquangthuan2906@gmail.com
//     </a>
//   ),
//   "Social network": {
//     GitHub: (
//       <GithubOutlined
//         onClick={() => {
//           window.open("//github.com/NQT2906");
//         }}
//       />
//     ),
//     Facebook: (
//       <FacebookOutlined
//         onClick={() => {
//           window.open("//www.fb.com/nqt290600");
//         }}
//       />
//     ),
//     Linkedin: (
//       <LinkedinOutlined
//         onClick={() => {
//           window.open("//www.linkedin.com/in/nguyenquangthuan2906/");
//         }}
//       />
//     ),
//   },
// };

export const useHomePage = () => {
  const [isScrollDown, setIsScrollDown] = useState(false);
  const { width, height } = useWindowSize();

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
    width,
    height,
  };

  const handler = {
    setIsScrollDown,
  };

  return { state, handler };
};
