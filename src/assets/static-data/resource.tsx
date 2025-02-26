import {
  mdiAccountMultipleOutline,
  mdiAlphaMBoxOutline,
  mdiFolderPlus,
  mdiLayersTriple,
  mdiMenu,
  mdiNewBox,
  mdiTableCheck,
  mdiViewDashboard,
} from "@mdi/js";
import Icon from "@mdi/react";

export const categories = [
  {
    id: 1,
    title: "Dashboard",
    link: "/",
    icon: <Icon path={mdiViewDashboard} size={1} />,
  },
  {
    id: 2,
    title: "Projects",
    link: "/projects",
    icon: <Icon path={mdiLayersTriple} size={1} />,
  },
  {
    id: 3,
    title: "Users",
    link: "/users",
    icon: <Icon path={mdiAccountMultipleOutline} size={1} />,
  },
  {
    id: 4,
    title: "Tables",
    link: "/tables",
    icon: <Icon path={mdiTableCheck} size={1} />,
  },
  {
    id: 5,
    title: "Resource mgnt",
    link: "/resourcemgnt",
    icon: <Icon path={mdiAlphaMBoxOutline} size={1} />,
  },
  {
    id: 6,
    title: "Group",
    link: "/group",
    icon: <Icon path={mdiAccountMultipleOutline} size={1} />,
  },
  {
    id: 7,
    title: "Project template",
    link: "/projecttemplate",
    icon: <Icon path={mdiFolderPlus} size={1} />,
  },
  {
    id: 8,
    title: "Menu settings",
    link: "/menusettings",
    icon: <Icon path={mdiMenu} size={1} />,
  },
  {
    id: 9,
    title: "Enter New",
    link: "/enternew",
    icon: <Icon path={mdiNewBox} size={1} />,
  },
];

export const overviews = [
  {
    id: 1,
    title: "Total revenue",
    numbers: "$53,00989",
    descriptions: "12% increase from last month",
    rate: (
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.0611 3.49414C5.0611 3.25252 5.25698 3.05664 5.4986 3.05664L10.5061 3.05664C10.6221 3.05664 10.7334 3.10273 10.8155 3.18478C10.8975 3.26683 10.9436 3.37811 10.9436 3.49414L10.9436 8.50164C10.9436 8.74326 10.7477 8.93913 10.5061 8.93914C10.2645 8.93914 10.0686 8.74326 10.0686 8.50164L10.0686 3.93164L5.4986 3.93164C5.25698 3.93164 5.0611 3.73577 5.0611 3.49414Z"
          fill="#1A932E"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.18436 10.8155C3.0135 10.6446 3.0135 10.3676 3.18436 10.1967L10.1264 3.25472C10.2972 3.08387 10.5742 3.08387 10.7451 3.25472C10.916 3.42558 10.916 3.70259 10.7451 3.87344L3.80308 10.8155C3.63222 10.9863 3.35521 10.9863 3.18436 10.8155Z"
          fill="#1A932E"
        />
      </svg>
    ),
    icon: (
      <svg
        width="46"
        height="46"
        viewBox="0 0 46 46"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="46" height="46" rx="23" fill="#D398E7" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13 32.75C13 32.3358 13.3358 32 13.75 32H31.75C32.1642 32 32.5 32.3358 32.5 32.75C32.5 33.1642 32.1642 33.5 31.75 33.5H13.75C13.3358 33.5 13 33.1642 13 32.75Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13 20.1309C13 19.1666 13.7858 18.3809 14.75 18.3809H16.35C17.3142 18.3809 18.1 19.1666 18.1 20.1309V28.7509C18.1 29.7151 17.3142 30.5009 16.35 30.5009H14.75C13.7858 30.5009 13 29.7151 13 28.7509V20.1309ZM14.75 19.8809C14.6142 19.8809 14.5 19.9951 14.5 20.1309V28.7509C14.5 28.8866 14.6142 29.0009 14.75 29.0009H16.35C16.4858 29.0009 16.6 28.8866 16.6 28.7509V20.1309C16.6 19.9951 16.4858 19.8809 16.35 19.8809H14.75Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20.1992 16.9395C20.1992 15.9752 20.985 15.1895 21.9492 15.1895H23.5492C24.5134 15.1895 25.2992 15.9752 25.2992 16.9395V28.7495C25.2992 29.7137 24.5134 30.4995 23.5492 30.4995H21.9492C20.985 30.4995 20.1992 29.7137 20.1992 28.7495V16.9395ZM21.9492 16.6895C21.8134 16.6895 21.6992 16.8037 21.6992 16.9395V28.7495C21.6992 28.8852 21.8134 28.9995 21.9492 28.9995H23.5492C23.685 28.9995 23.7992 28.8852 23.7992 28.7495V16.9395C23.7992 16.8037 23.685 16.6895 23.5492 16.6895H21.9492Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M27.3984 13.75C27.3984 12.7858 28.1842 12 29.1484 12H30.7484C31.7126 12 32.4984 12.7858 32.4984 13.75V28.75C32.4984 29.7142 31.7126 30.5 30.7484 30.5H29.1484C28.1842 30.5 27.3984 29.7142 27.3984 28.75V13.75ZM29.1484 13.5C29.0127 13.5 28.8984 13.6142 28.8984 13.75V28.75C28.8984 28.8858 29.0127 29 29.1484 29H30.7484C30.8842 29 30.9984 28.8858 30.9984 28.75V13.75C30.9984 13.6142 30.8842 13.5 30.7484 13.5H29.1484Z"
          fill="white"
        />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Projects",
    numbers: "95 /100",
    descriptions: "10% decrease from last month",
    rate: (
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.5068 5.06135C10.7485 5.06135 10.9443 5.25722 10.9443 5.49885L10.9443 10.5063C10.9443 10.6224 10.8982 10.7337 10.8162 10.8157C10.7341 10.8977 10.6229 10.9438 10.5068 10.9438L5.49934 10.9438C5.25772 10.9438 5.06184 10.748 5.06184 10.5063C5.06184 10.2647 5.25772 10.0688 5.49934 10.0688L10.0693 10.0688L10.0693 5.49885C10.0693 5.25722 10.2652 5.06135 10.5068 5.06135Z"
          fill="#EE201C"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.18478 3.18485C3.35564 3.01399 3.63265 3.01399 3.8035 3.18485L10.7455 10.1269C10.9164 10.2977 10.9164 10.5747 10.7455 10.7456C10.5747 10.9164 10.2977 10.9164 10.1268 10.7456L3.18478 3.80357C3.01393 3.63271 3.01393 3.3557 3.18478 3.18485Z"
          fill="#EE201C"
        />
      </svg>
    ),
    icon: (
      <svg
        width="46"
        height="46"
        viewBox="0 0 46 46"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="46" height="46" rx="23" fill="#E89271" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.1755 18.2491C14.9871 17.2842 16.3786 16.8125 18.4164 16.8125H27.5831C29.6208 16.8125 31.0124 17.2842 31.824 18.2491C32.6277 19.2047 32.7042 20.4601 32.5754 21.6306L31.8875 28.9674C31.7866 29.9098 31.55 30.943 30.7085 31.7117C29.8733 32.4748 28.5793 32.8542 26.6664 32.8542H19.3331C17.4201 32.8542 16.1261 32.4748 15.2909 31.7117C14.4495 30.943 14.2129 29.9098 14.112 28.9674L14.111 28.9583L13.4241 21.6306C13.2953 20.4601 13.3717 19.2047 14.1755 18.2491ZM15.2277 19.1342C14.7953 19.6483 14.6736 20.4208 14.7914 21.4852L14.7927 21.4967L15.4796 28.8254C15.5713 29.6773 15.7612 30.279 16.2183 30.6966C16.6825 31.1206 17.561 31.4792 19.3331 31.4792H26.6664C28.4384 31.4792 29.317 31.1206 29.7811 30.6966C30.2383 30.279 30.4281 29.6773 30.5198 28.8254L31.208 21.4852C31.3258 20.4208 31.2041 19.6483 30.7717 19.1342C30.3458 18.6279 29.4594 18.1875 27.5831 18.1875H18.4164C16.54 18.1875 15.6536 18.6279 15.2277 19.1342Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20.0606 15.7128C20.0216 16.011 20.0205 16.35 20.0205 16.7666V17.4999C20.0205 17.8796 19.7127 18.1874 19.333 18.1874C18.9533 18.1874 18.6455 17.8796 18.6455 17.4999L18.6455 16.7428C18.6455 16.3545 18.6455 15.9305 18.6971 15.5348C18.7507 15.1247 18.8654 14.6894 19.1341 14.3006C19.6995 13.4826 20.7351 13.1458 22.2663 13.1458H23.733C25.2643 13.1458 26.2999 13.4826 26.8652 14.3006C27.134 14.6894 27.2487 15.1247 27.3022 15.5348C27.3539 15.9305 27.3539 16.3545 27.3538 16.7428L27.3538 17.4999C27.3538 17.8796 27.046 18.1874 26.6663 18.1874C26.2866 18.1874 25.9788 17.8796 25.9788 17.4999V16.7666C25.9788 16.35 25.9777 16.011 25.9388 15.7128C25.9007 15.4207 25.832 15.2241 25.7341 15.0824C25.5661 14.8393 25.1351 14.5208 23.733 14.5208H22.2663C20.8643 14.5208 20.4332 14.8393 20.2652 15.0824C20.1673 15.2241 20.0987 15.4207 20.0606 15.7128Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M21.8543 23.6882C21.8535 23.7537 21.8535 23.8283 21.8535 23.9167V24.8608C21.8535 25.1189 21.8558 25.3087 21.8782 25.4698C21.8997 25.6246 21.934 25.7 21.963 25.7409C21.9953 25.7865 22.1565 25.9792 22.9994 25.9792C23.846 25.9792 24.0053 25.7847 24.037 25.7395C24.0661 25.6978 24.1003 25.6213 24.1215 25.4646C24.1435 25.3017 24.1452 25.111 24.1452 24.8517V23.9167C24.1452 23.8283 24.1452 23.7537 24.1445 23.6882C24.079 23.6875 24.0044 23.6875 23.916 23.6875H22.0827C21.9943 23.6875 21.9197 23.6875 21.8543 23.6882ZM22.0526 22.3125C22.0626 22.3125 22.0727 22.3125 22.0827 22.3125H23.916C23.9261 22.3125 23.9361 22.3125 23.9461 22.3125C24.1488 22.3125 24.3543 22.3124 24.5219 22.331C24.6928 22.35 24.9766 22.4008 25.2042 22.6285C25.4319 22.8561 25.4827 23.1399 25.5017 23.3108C25.5203 23.4784 25.5202 23.6839 25.5202 23.8866C25.5202 23.8966 25.5202 23.9066 25.5202 23.9167V24.862C25.5202 25.1 25.5202 25.3817 25.484 25.649C25.4465 25.9263 25.3644 26.241 25.1632 26.5283C24.7343 27.1407 23.9769 27.3542 22.9994 27.3542C22.0272 27.3542 21.2717 27.1435 20.8412 26.536C20.6387 26.2504 20.5549 25.9367 20.5163 25.6593C20.4786 25.3881 20.4785 25.1024 20.4785 24.8608V23.9167C20.4785 23.9066 20.4785 23.8966 20.4785 23.8866C20.4785 23.6839 20.4784 23.4784 20.4971 23.3108C20.516 23.1399 20.5668 22.8561 20.7945 22.6285C21.0221 22.4008 21.306 22.35 21.4768 22.331C21.6444 22.3124 21.8499 22.3125 22.0526 22.3125Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M32.4016 21.6789C32.6249 21.986 32.557 22.416 32.2499 22.6393C30.0351 24.2501 27.5047 25.2081 24.919 25.5337C24.5423 25.5812 24.1984 25.3143 24.151 24.9375C24.1035 24.5608 24.3705 24.217 24.7472 24.1695C27.1114 23.8718 29.421 22.9965 31.4412 21.5273C31.7483 21.304 32.1783 21.3719 32.4016 21.6789Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.8341 21.9423C14.0486 21.629 14.4764 21.5488 14.7897 21.7633C16.7596 23.1115 18.9809 23.9241 21.2429 24.1774C21.6203 24.2197 21.8919 24.5598 21.8497 24.9371C21.8074 25.3145 21.4673 25.5861 21.0899 25.5439C18.6037 25.2655 16.1683 24.3731 14.0131 22.898C13.6998 22.6835 13.6196 22.2557 13.8341 21.9423Z"
          fill="white"
        />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Time spent",
    numbers: "1022 /1300 Hrs",
    descriptions: "8% increase from last month",
    rate: (
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.0611 3.49414C5.0611 3.25252 5.25698 3.05664 5.4986 3.05664L10.5061 3.05664C10.6221 3.05664 10.7334 3.10273 10.8155 3.18478C10.8975 3.26683 10.9436 3.37811 10.9436 3.49414L10.9436 8.50164C10.9436 8.74326 10.7477 8.93913 10.5061 8.93914C10.2645 8.93914 10.0686 8.74326 10.0686 8.50164L10.0686 3.93164L5.4986 3.93164C5.25698 3.93164 5.0611 3.73577 5.0611 3.49414Z"
          fill="#1A932E"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.18436 10.8155C3.0135 10.6446 3.0135 10.3676 3.18436 10.1967L10.1264 3.25472C10.2972 3.08387 10.5742 3.08387 10.7451 3.25472C10.916 3.42558 10.916 3.70259 10.7451 3.87344L3.80308 10.8155C3.63222 10.9863 3.35521 10.9863 3.18436 10.8155Z"
          fill="#1A932E"
        />
      </svg>
    ),
    icon: (
      <svg
        width="46"
        height="46"
        viewBox="0 0 46 46"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="46" height="46" rx="23" fill="#70A1E6" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M23.0002 14.5208C18.3199 14.5208 14.521 18.3196 14.521 22.9999C14.521 27.6802 18.3199 31.4791 23.0002 31.4791C27.6805 31.4791 31.4793 27.6802 31.4793 22.9999C31.4793 18.3196 27.6805 14.5208 23.0002 14.5208ZM13.146 22.9999C13.146 17.5602 17.5605 13.1458 23.0002 13.1458C28.4399 13.1458 32.8543 17.5602 32.8543 22.9999C32.8543 28.4396 28.4399 32.8541 23.0002 32.8541C17.5605 32.8541 13.146 28.4396 13.146 22.9999Z"
          fill="#F1F1F1"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M22.6611 18.1965C23.0408 18.1965 23.3486 18.5043 23.3486 18.884V22.6424C23.3486 22.7831 23.4024 22.9871 23.5219 23.1967C23.6414 23.4063 23.7896 23.5562 23.91 23.6276L23.9118 23.6287L23.9118 23.6287L26.7534 25.3245C27.0795 25.5191 27.1861 25.9411 26.9915 26.2672C26.7969 26.5932 26.3749 26.6998 26.0488 26.5052L23.209 24.8105C23.2087 24.8103 23.2083 24.8101 23.208 24.8099C22.8339 24.5879 22.5332 24.2386 22.3275 23.8778C22.1216 23.5168 21.9736 23.0791 21.9736 22.6424V18.884C21.9736 18.5043 22.2814 18.1965 22.6611 18.1965Z"
          fill="#F1F1F1"
        />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Resources",
    numbers: "101 /120",
    descriptions: "2% increase from last month",
    rate: (
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.0611 3.49414C5.0611 3.25252 5.25698 3.05664 5.4986 3.05664L10.5061 3.05664C10.6221 3.05664 10.7334 3.10273 10.8155 3.18478C10.8975 3.26683 10.9436 3.37811 10.9436 3.49414L10.9436 8.50164C10.9436 8.74326 10.7477 8.93913 10.5061 8.93914C10.2645 8.93914 10.0686 8.74326 10.0686 8.50164L10.0686 3.93164L5.4986 3.93164C5.25698 3.93164 5.0611 3.73577 5.0611 3.49414Z"
          fill="#1A932E"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.18436 10.8155C3.0135 10.6446 3.0135 10.3676 3.18436 10.1967L10.1264 3.25472C10.2972 3.08387 10.5742 3.08387 10.7451 3.25472C10.916 3.42558 10.916 3.70259 10.7451 3.87344L3.80308 10.8155C3.63222 10.9863 3.35521 10.9863 3.18436 10.8155Z"
          fill="#1A932E"
        />
      </svg>
    ),
    icon: (
      <svg
        width="46"
        height="46"
        viewBox="0 0 46 46"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="46" height="46" rx="23" fill="#F0C274" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M23.0003 14.5208C20.8487 14.5208 19.1045 16.265 19.1045 18.4166C19.1045 20.5682 20.8487 22.3124 23.0003 22.3124C25.1519 22.3124 26.8962 20.5682 26.8962 18.4166C26.8962 16.265 25.1519 14.5208 23.0003 14.5208ZM17.7295 18.4166C17.7295 15.5056 20.0893 13.1458 23.0003 13.1458C25.9113 13.1458 28.2712 15.5056 28.2712 18.4166C28.2712 21.3276 25.9113 23.6874 23.0003 23.6874C20.0893 23.6874 17.7295 21.3276 17.7295 18.4166Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.4385 32.1667C14.4385 28.1142 18.4142 25.0625 23.0001 25.0625C27.5861 25.0625 31.5618 28.1142 31.5618 32.1667C31.5618 32.5464 31.254 32.8542 30.8743 32.8542C30.4946 32.8542 30.1868 32.5464 30.1868 32.1667C30.1868 29.1241 27.1042 26.4375 23.0001 26.4375C18.8961 26.4375 15.8135 29.1241 15.8135 32.1667C15.8135 32.5464 15.5057 32.8542 15.126 32.8542C14.7463 32.8542 14.4385 32.5464 14.4385 32.1667Z"
          fill="white"
        />
      </svg>
    ),
  },
];
export const todayTasks = [
  {
    id: 1,
    title: "Create a user flow of social application design",
    status: "Approved",
    mark: "Important",
    isCompleted: true,
  },
  {
    id: 2,
    title: "Create a user flow of social application design",
    status: "In review",
    mark: "Links",
    isCompleted: true,
  },
  {
    id: 3,
    title: "Landing page design for Fintech project of singapore",
    status: "In review",
    mark: "Notes",
    isCompleted: true,
  },
  {
    id: 4,
    title: "Interactive prototype for app screens of deltamine project",
    status: "On going",
    mark: "Important",
    isCompleted: false,
  },
  {
    id: 5,
    title: "Interactive prototype for app screens of deltamine project",
    status: "Approved",
    mark: "Notes",
    isCompleted: true,
  },
  {
    id: 6,
    title: "Create a user flow of social application design",
    status: "Approved",
    mark: "Important",
    isCompleted: true,
  },
  {
    id: 7,
    title: "Create a user flow of social application design",
    status: "In review",
    mark: "Links",
    isCompleted: true,
  },
  {
    id: 8,
    title: "Landing page design for Fintech project of singapore",
    status: "In review",
    mark: "Notes",
    isCompleted: true,
  },
  {
    id: 9,
    title: "Interactive prototype for app screens of deltamine project",
    status: "On going",
    mark: "Notes",
    isCompleted: false,
  },
  {
    id: 10,
    title: "Interactive prototype for app screens of deltamine project",
    status: "Approved",
    mark: "Links",
    isCompleted: true,
  },
];

export const summaries = [
  {
    id: 1,
    name: "Nelsa web developement",
    manager: "Om prakash sao",
    date: "2025-02-19",
    status: "Completed",
    progress: "100%",
  },

  {
    id: 2,
    name: "Datascale AI app ",
    manager: "Neilsan mando",
    date: "2024-03-10",
    status: "Delayed",
    progress: "35%",
  },
  {
    id: 3,
    name: " Media channel branding",
    manager: "Tiruvelly priya",
    date: "2024-10-22",
    status: "At risk",
    progress: "68%",
  },

  {
    id: 4,
    name: "Corlax iOS app develpoement",
    manager: "Matte hannery",
    date: "2023-07-21",
    status: "Completed",
    progress: "100%",
  },
  {
    id: 5,
    name: "Website builder developement",
    manager: "Sukumar rao",
    date: "2024-06-21",
    status: "On going",
    progress: "  50%",
  },
];

export const overallProgress = [
  {
    id: 1,
    title: "Total projects",
    numbers: 95,
  },
  {
    id: 2,
    title: "Completed",
    numbers: 26,
  },
  {
    id: 3,
    title: "Delayed",
    numbers: 35,
  },
  {
    id: 4,
    title: "On going",
    numbers: 35,
  },
];

export const navLinks = [
  {
    id: 1,
    name: "All",
    isActive: true,
    link: "/all",
  },
  {
    id: 2,
    name: "Important",
    isActive: false,
    link: "/important",
  },

  {
    id: 3,
    name: "Notes",
    isActive: true,
    link: "/notes",
  },
  {
    id: 4,
    name: "Links",
    isActive: true,
    link: "/links",
  },
];

export const statusOptions = [
  { value: "At risk", label: "Not Started" },
  { value: "Delayed", label: "Delayed" },
  { value: "On going", label: "In Progress" },
  { value: "Completed", label: "Completed" },
];

export const progressOptions = [
  { value: "0%", label: "0%" },
  { value: "10%", label: "10%" },
  { value: "20%", label: "20%" },
  { value: "30%", label: "30%" },
  { value: "50%", label: "50%" },
  { value: "100%", label: "100%" },
];

export const taskStatusStyles: any = {
  Approved: `bg-[#ABCDA9] text-[#1A932E]`,
  "In review": `text-[#EE201C] bg-[#F1C6C1]`,
  "On going": `text-[#E65F2B] bg-[#F0D1C4]`,
};
