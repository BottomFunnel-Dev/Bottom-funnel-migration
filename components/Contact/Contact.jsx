import React, { useState } from "react";
import Image from "next/image";
import stylecon from "./Contact.module.css";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { MdArrowDropDown } from "react-icons/md";

export const ContactMain = ({ scroll, navbar }) => {
  const [calldrop, setCalldrop] = useState(false);

  const arr = [
    {
      icon: "/Images/navbar/iconcontact/india.svg",
      contact: "+91 7877680588, 8209366227",
    },
    {
      icon: "/Images/navbar/iconcontact/usa.svg",
      contact: "+1 9176956550",
    },
    {
      icon: "/Images/navbar/iconcontact/usa.svg",
      contact: "+971 553070316, 565664624, ",
    },
    {
      icon: "/Images/navbar/iconcontact/kenya.svg",
      contact: "+254 787213522",
    },
    {
      icon: "/Images/navbar/iconcontact/skypes.svg",
      contact: "bottomfunnel",
    },
    {
      icon: "/Images/navbar/iconcontact/mail.svg",
      contact: "sales@bottomfunnel.net, info@bottomfunnel.net",
    },
  ];
  const hr = [
    {
      icon: "/Images/navbar/iconcontact/india.svg",
      contact: "+91 7877680588, 8209366227",
    },
  ];

  return (
    <div className={stylecon.contectemail}>
      <span>
        <a
          style={{
            display: "flex",
            alignItems: "center",
            marginRight: "10px",
            color: "black",
          }}
          href="whatsapp://send?abid=+917877680588&text=Hello%2C%20World!"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            fill="currentColor"
            className="bi bi-whatsapp"
            viewBox="0 0 16 16"
          >
            <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
          </svg>
        </a>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-envelope"
          viewBox="0 0 16 16"
          onClick={() => {
            return window.location("mailto:info@bottomfunnel.net");
          }}
        >
          <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
        </svg>

        <a style={{ color: "black" }} href="mailto:info@bottomfunnel.net">
          info@bottomfunnel.net
        </a>

        <div
          className={stylecon.calldropdown}
          onMouseEnter={() => {
            setCalldrop(true);
          }}
          onMouseLeave={() => {
            setCalldrop(false);
          }}
        >
          <svg
            width="17"
            height="17"
            viewBox="0 0 165 165"
            style={{ marginLeft: "10px" }}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_3_3215)">
              <path
                d="M34.52 0C35.9 0.77 37.52 0.820002 38.95 1.51C41.074 2.50694 43.012 3.85977 44.68 5.51C51.76 12.6 58.86 19.66 65.92 26.77C71.54 32.41 72.58 39.99 68.68 46.42C67.0292 49.2173 64.444 51.3421 61.38 52.42C56.86 54.05 53.38 56.81 51.38 61.32C50.0962 64.2305 49.863 67.4965 50.72 70.56C52.65 77.9 56.48 84.22 61.22 90.03C68.22 98.62 76.42 105.83 86.44 110.78C89.75 112.42 93.19 113.91 96.98 113.78C103.98 113.45 109.26 110.16 111.53 103.4C114.87 93.46 128.35 89.4 137.01 97.96C144.583 105.46 152.12 113 159.62 120.58C162.265 123.127 163.856 126.575 164.08 130.24C164.08 130.49 164.08 130.79 164.38 130.88V132.81C163.95 132.94 164.08 133.32 164.05 133.61C163.651 137.313 162.02 140.774 159.42 143.44C154.42 148.44 149.42 153.44 144.42 158.44C142.095 160.75 139.232 162.447 136.09 163.38C128.95 165.56 121.88 164.64 114.87 162.86C102.76 159.79 91.87 154.08 81.43 147.36C64.3095 136.174 48.8279 122.661 35.43 107.21C23.33 93.43 12.87 78.55 5.75 61.53C2.53 53.85 0.179973 45.93 -0.060027 37.53C-0.280027 29.91 1.73999 23.22 7.57999 17.88C11.73 14.08 15.58 9.99 19.58 5.97C22.09 3.4 24.81 1.24 28.42 0.450001C28.66 0.390001 28.96 0.37 29.01 0.0200005L34.52 0Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_3_3215">
                <rect width="164.41" height="164.65" fill="white" />
              </clipPath>
            </defs>
          </svg>

          <MdArrowDropDown fontSize={"30px"} />
        </div>
      </span>

      {calldrop && (
        <div
          onMouseEnter={() => {
            setCalldrop(true);
          }}
          onMouseLeave={() => {
            setCalldrop(false);
          }}
          className={stylecon.callcontent}
        >
          <div className={stylecon.callcontentinner}>
            <div className={stylecon.requestquote}>
              <h5>Bottom Funnel Contacts</h5>
              <button>Request Quote</button>
            </div>

            <hr />

            <div className={stylecon.salesenquiry}>
              <h6>For Sales Enquiry</h6>

              <div className={stylecon.outercontact}>
                <div className={stylecon.imageicon}>
                  <svg
                    width="58"
                    height="64"
                    viewBox="0 0 58 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M30.7673 1.00828C31.5573 1.29828 32.4073 1.27828 33.2173 1.48828C36.3165 2.21077 39.1717 3.73458 41.497 5.90722C43.8224 8.07986 45.5363 10.8251 46.4673 13.8683C47.0498 15.6014 47.3371 17.42 47.3173 19.2483V26.8683C47.3326 27.367 47.2455 27.8637 47.0613 28.3274C46.8771 28.7912 46.5998 29.2123 46.2465 29.5647C45.8932 29.9171 45.4713 30.1932 45.0071 30.3762C44.5428 30.5591 44.046 30.6449 43.5473 30.6283C43.1009 30.6532 42.6536 30.6532 42.2073 30.6283C41.5973 30.5583 41.3873 30.7683 41.3173 31.3783C41.0638 33.5837 40.2704 35.6927 39.0073 37.5183C38.7044 37.9679 38.3702 38.3956 38.0073 38.7983C37.8543 38.9103 37.7517 39.0782 37.7217 39.2654C37.6918 39.4526 37.7369 39.6441 37.8473 39.7983C38.4073 40.8483 38.9373 41.9183 39.4573 42.9883C39.5202 43.1334 39.6148 43.2627 39.7342 43.3665C39.8536 43.4703 39.9948 43.5461 40.1473 43.5883C42.0673 44.2183 43.9873 44.8283 45.8873 45.5283C49.6333 46.9296 52.7451 49.64 54.6473 53.1583C56.2168 55.828 57.0614 58.8616 57.0973 61.9583C57.0973 63.0283 56.6773 63.4583 55.5873 63.4583H2.52726C1.40726 63.4583 0.93726 63.0283 0.99726 61.9183C1.39726 54.6783 4.65726 49.2083 11.2273 45.9183C13.4042 44.9941 15.6389 44.2125 17.9173 43.5783C18.0761 43.5329 18.2233 43.4541 18.3492 43.3471C18.4751 43.2402 18.5767 43.1076 18.6473 42.9583C19.1673 41.8783 19.6973 40.8083 20.2473 39.7583C20.3492 39.6251 20.3948 39.4572 20.3742 39.2908C20.3536 39.1243 20.2685 38.9726 20.1373 38.8683C19.3362 38.0558 18.68 37.1121 18.1973 36.0783C18.1345 35.8738 17.9961 35.701 17.8102 35.5951C17.6244 35.4892 17.4052 35.4581 17.1973 35.5083C16.4343 35.5911 15.6647 35.4307 14.9985 35.0499C14.3322 34.6692 13.8032 34.0876 13.4873 33.3883C13.1713 32.6373 13.0542 31.8176 13.1473 31.0083C13.1772 30.846 13.1496 30.6783 13.0693 30.5342C12.989 30.39 12.861 30.2783 12.7073 30.2183C12.0936 29.9358 11.5766 29.4788 11.2209 28.9044C10.8653 28.33 10.6866 27.6636 10.7073 26.9883C10.7073 24.3483 10.7073 21.6983 10.7073 19.0583C10.7513 15.1845 12.0243 11.4247 14.3427 8.32093C16.6611 5.21716 19.9052 2.9297 23.6073 1.78828C24.6343 1.48116 25.6843 1.2571 26.7473 1.11828C26.8573 1.11828 27.0073 1.11828 27.0573 0.988281L30.7673 1.00828ZM20.7673 35.5383C20.7673 35.6083 20.7673 35.6283 20.7673 35.6383C21.8199 37.464 23.4475 38.8898 25.3959 39.693C27.3443 40.4963 29.5038 40.6317 31.5373 40.0783C33.2585 39.6216 34.8215 38.7013 36.0558 37.4176C37.2901 36.1339 38.1484 34.5361 38.5373 32.7983C39.3311 29.3162 39.7965 25.7673 39.9273 22.1983C39.9273 21.8783 39.9273 21.7583 39.5373 21.7083C38.0265 21.5274 36.5321 21.2299 35.0673 20.8183C32.0064 19.9186 29.18 18.3586 26.7873 16.2483C26.6459 16.0691 26.4622 15.9278 26.2528 15.8371C26.0433 15.7463 25.8147 15.709 25.5873 15.7283C24.1483 15.927 22.7772 16.4652 21.5873 17.2983C20.3001 18.3875 19.1813 19.6613 18.2673 21.0783C18.2129 21.1634 18.176 21.2586 18.1588 21.3582C18.1417 21.4578 18.1445 21.5598 18.1673 21.6583C18.2873 23.2383 18.3873 24.8183 18.5473 26.3983C18.7311 28.499 19.045 30.5864 19.4873 32.6483C19.5673 32.9883 19.6773 33.1083 20.0373 33.0983C20.9273 33.0983 21.8273 33.0983 22.7173 33.0983C22.8421 33.1157 22.9691 33.088 23.0754 33.0202C23.1818 32.9524 23.2604 32.8489 23.2973 32.7283C23.5192 32.2218 23.8593 31.7759 24.289 31.4279C24.7188 31.0799 25.2257 30.84 25.7673 30.7283C26.8544 30.5834 27.9538 30.5533 29.0473 30.6383C29.5307 30.6355 30.0099 30.7294 30.4566 30.9144C30.9033 31.0994 31.3085 31.3717 31.6485 31.7155C31.9885 32.0592 32.2564 32.4674 32.4365 32.916C32.6166 33.3647 32.7053 33.8449 32.6973 34.3283C32.6893 35.2928 32.2999 36.2151 31.6141 36.8934C30.9283 37.5717 30.0019 37.951 29.0373 37.9483H26.7773C26.054 37.9919 25.3343 37.8168 24.7119 37.4458C24.0894 37.0749 23.5931 36.5252 23.2873 35.8683C23.2173 35.7183 23.1573 35.5583 22.9073 35.5683C22.2073 35.5483 21.4673 35.5383 20.8173 35.5383H20.7673ZM26.7673 61.0283C26.3373 60.3383 26.0073 59.7383 25.6073 59.1783C22.694 55.23 20.3386 50.8993 18.6073 46.3083C18.5173 46.0383 18.3973 46.0183 18.1273 46.1083C16.6773 46.6183 15.2073 47.1083 13.7573 47.5783C7.70725 49.7083 4.57726 54.1883 3.51726 60.3383C3.42726 60.8383 3.51726 61.0483 4.11726 61.0483C11.4373 61.0483 18.7573 61.0483 26.1173 61.0483L26.7673 61.0283ZM31.1873 61.0283H53.2573C53.5373 61.0283 53.8273 61.0283 54.1073 61.0283C54.3873 61.0283 54.5373 60.9683 54.4973 60.6283C54.4258 59.9029 54.2988 59.1842 54.1173 58.4783C53.604 56.2341 52.5837 54.1372 51.1346 52.3484C49.6855 50.5595 47.846 49.1262 45.7573 48.1583C43.8873 47.2883 41.8673 46.8083 39.9273 46.1583C39.5573 46.0283 39.4573 46.1583 39.3373 46.4583C37.7675 50.6541 35.6346 54.6171 32.9973 58.2383C32.4673 59.0783 31.9073 60.0083 31.2573 61.0283H31.1873ZM39.9673 19.2583V18.3583C39.9806 16.2806 39.3464 14.2503 38.1529 12.5496C36.9593 10.8489 35.2657 9.5622 33.3073 8.86828C31.3651 8.2792 29.3201 8.10878 27.3073 8.36828C25.6253 8.45516 23.9956 8.98209 22.5812 9.89639C21.1667 10.8107 20.0171 12.0803 19.2473 13.5783C18.6483 14.6365 18.2771 15.8082 18.1573 17.0183C18.2473 17.0183 18.2973 17.0183 18.3173 16.9483C20.1204 14.9031 22.611 13.5902 25.3173 13.2583C25.7966 13.1314 26.3014 13.1379 26.7773 13.2771C27.2532 13.4164 27.682 13.683 28.0173 14.0483C28.6534 14.7075 29.3688 15.2853 30.1473 15.7683C33.0813 17.7778 36.4918 18.9813 40.0373 19.2583H39.9673ZM29.0873 5.86828C29.9973 5.86828 30.9073 5.86828 31.8173 5.96828C34.4752 6.34442 36.939 7.57359 38.8381 9.47083C40.7371 11.3681 41.9686 13.8307 42.3473 16.4883C42.4173 17.0083 42.3473 17.7283 42.5973 17.9783C42.8473 18.2283 43.5973 18.0583 44.1273 18.0583C44.8873 18.0583 44.8773 18.0583 44.7673 17.2983C44.4875 15.2399 43.8081 13.256 42.7673 11.4583C41.1423 8.58412 38.6573 6.29164 35.6617 4.90326C32.6661 3.51488 29.3106 3.10045 26.0673 3.71828C22.2023 4.41935 18.7488 6.56441 16.4073 9.71828C14.6895 11.9685 13.6053 14.6376 13.2673 17.4483C13.1973 17.9583 13.2673 18.1883 13.8673 18.1083C14.2696 18.0683 14.6749 18.0683 15.0773 18.1083C15.4473 18.1083 15.5773 18.0483 15.6073 17.6283C15.6903 15.6213 16.27 13.6663 17.2945 11.9384C18.319 10.2106 19.7562 8.76401 21.4773 7.72828C23.7457 6.30087 26.4161 5.64818 29.0873 5.86828ZM29.0873 59.9383C30.3873 57.5883 31.9773 55.6083 33.2973 53.4483C33.4773 53.1583 33.4973 52.9983 33.2373 52.7383C31.9073 51.4483 30.6073 50.1383 29.3173 48.8183C29.0673 48.5583 28.9273 48.4983 28.6573 48.8183C27.4173 50.1683 26.1573 51.4883 24.8973 52.8183C24.7173 53.0083 24.6573 53.1383 24.8073 53.3883C26.1173 55.5783 27.7373 57.5883 29.0573 59.9683L29.0873 59.9383ZM34.7873 50.7783C35.818 48.8191 36.7037 46.787 37.4373 44.6983C37.4622 44.6451 37.4752 44.587 37.4752 44.5283C37.4752 44.4695 37.4622 44.4115 37.4373 44.3583L35.8573 41.2083L30.8573 46.4783C30.6773 46.6583 30.7173 46.7483 30.8573 46.8983L34.7873 50.7783ZM23.3873 50.7783L26.9873 46.9783C27.1573 46.7983 27.1973 46.6883 26.9873 46.4883C25.4273 44.9483 23.8873 43.3883 22.3373 41.8383C22.1273 41.6183 22.0373 41.6783 21.9173 41.9183C21.5473 42.7083 21.1473 43.4783 20.7573 44.2583C20.7228 44.3283 20.7049 44.4053 20.7049 44.4833C20.7049 44.5613 20.7228 44.6383 20.7573 44.7083C21.4801 46.8194 22.3489 48.8777 23.3573 50.8683L23.3873 50.7783ZM44.9173 23.8683C44.9173 23.3983 44.9173 22.9283 44.9173 22.4583C44.9173 21.8183 45.1973 20.9383 44.7973 20.6083C44.3973 20.2783 43.5573 20.5483 42.9173 20.4983C42.5073 20.4983 42.4673 20.6383 42.4473 20.9783C42.3173 23.2483 42.2073 25.5183 41.8773 27.7683C41.8273 28.1383 41.9573 28.2283 42.2973 28.1983C42.6373 28.1683 43.0273 28.1983 43.3873 28.1983C44.4373 28.1983 44.9173 27.7083 44.9273 26.6683L44.9173 23.8683ZM13.1973 23.8683C13.1973 24.8683 13.1973 25.8683 13.1973 26.7983C13.1765 26.992 13.1996 27.1879 13.2648 27.3716C13.33 27.5552 13.4356 27.7218 13.5738 27.8591C13.7121 27.9964 13.8795 28.1009 14.0635 28.1648C14.2476 28.2287 14.4437 28.2504 14.6373 28.2283C15.0373 28.2283 15.4473 28.2283 15.8573 28.2283C16.2673 28.2283 16.2873 28.1683 16.2373 27.8283C15.9073 25.5383 15.7973 23.2283 15.6673 20.9183C15.6673 20.5783 15.5273 20.5283 15.2373 20.5383C14.6873 20.5383 14.1373 20.5383 13.5973 20.5383C13.2773 20.5383 13.1773 20.6283 13.1873 20.9483C13.2073 21.8683 13.1973 22.8683 13.1973 23.8683ZM27.8273 35.5683C28.3322 35.5782 28.8371 35.5481 29.3373 35.4783C29.5992 35.4264 29.8343 35.2835 30.0008 35.0748C30.1674 34.8661 30.2547 34.6052 30.2473 34.3383C30.2704 34.0705 30.1899 33.8041 30.0225 33.5939C29.855 33.3837 29.6134 33.2457 29.3473 33.2083C28.354 33.0443 27.3405 33.0443 26.3473 33.2083C26.2129 33.2194 26.0822 33.2575 25.963 33.3204C25.8438 33.3833 25.7385 33.4697 25.6535 33.5743C25.5685 33.6789 25.5055 33.7996 25.4684 33.9292C25.4312 34.0588 25.4206 34.1945 25.4373 34.3283C25.4265 34.5941 25.5099 34.8551 25.6727 35.0655C25.8355 35.2758 26.0673 35.422 26.3273 35.4783C26.8247 35.5406 27.3262 35.564 27.8273 35.5483V35.5683ZM26.7373 42.8683L28.7373 44.8683C28.8273 44.9483 28.9073 45.0683 29.0373 44.9283L31.0373 42.8083C29.6093 42.9687 28.1691 42.9888 26.7373 42.8683ZM15.6373 31.3283C15.6373 32.4583 15.9373 32.9383 16.6373 33.0983C16.8873 33.1483 17.0173 33.1483 16.9573 32.8283C16.8273 32.2083 16.7173 31.5983 16.6273 30.9783C16.6273 30.7483 16.4773 30.7083 16.2673 30.6883C15.6973 30.5583 15.4673 30.8683 15.6373 31.2883V31.3283Z"
                      fill="#090808"
                    />
                    <path
                      d="M51.1137 56.5915C51.111 56.845 51.0338 57.0922 50.8915 57.302C50.7492 57.5119 50.5482 57.6752 50.3137 57.7715C50.0996 57.866 49.8616 57.8917 49.6323 57.8452C49.403 57.7986 49.1938 57.682 49.0337 57.5115C48.8908 57.3662 48.7696 57.2012 48.6737 57.0215C48.037 55.8383 47.1699 54.7945 46.1236 53.9515C45.9092 53.8105 45.7421 53.6083 45.644 53.3711C45.5459 53.1339 45.5214 52.8728 45.5737 52.6215C45.6196 52.4028 45.7251 52.201 45.8787 52.0386C46.0323 51.8762 46.2278 51.7595 46.4437 51.7015C46.6288 51.6401 46.8267 51.6281 47.0179 51.6667C47.2091 51.7053 47.3868 51.7931 47.5337 51.9215C48.966 53.0313 50.1342 54.4454 50.9537 56.0615C51.0211 56.2336 51.0746 56.4108 51.1137 56.5915Z"
                      fill="#0F0E0E"
                    />
                    <path
                      d="M43.6882 50.561C43.687 50.7233 43.6531 50.8838 43.5886 51.0328C43.5241 51.1818 43.4303 51.3162 43.3127 51.4282C43.1952 51.5402 43.0562 51.6274 42.9043 51.6845C42.7523 51.7417 42.5904 51.7677 42.4282 51.761C42.109 51.7505 41.8069 51.6143 41.5877 51.382C41.3686 51.1497 41.2501 50.8402 41.2582 50.521C41.2621 50.3586 41.2981 50.1985 41.3642 50.0501C41.4302 49.9017 41.525 49.7679 41.6431 49.6563C41.7612 49.5447 41.9002 49.4576 42.0521 49.4001C42.204 49.3425 42.3658 49.3156 42.5282 49.321C42.8447 49.3365 43.1428 49.4746 43.3593 49.7061C43.5758 49.9375 43.6938 50.2441 43.6882 50.561Z"
                      fill="#161414"
                    />
                  </svg>
                </div>
                <div className={stylecon.contactNumbs}>
                  {arr.map((item, i) => (
                    <div key={i} className={stylecon.numberMain}>
                      <img src={item.icon} alt="" width={"30px"} />
                      <h6>{item.contact}</h6>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <hr />

            <div className={stylecon.salesenquiry}>
              <h6>For HR Enquiry</h6>

              <div className={stylecon.outercontact}>
                <div className={stylecon.imageicon}>
                  <svg
                    width="64"
                    height="56"
                    viewBox="0 0 64 56"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M63.4671 29.1796C63.1478 30.0895 62.644 30.9236 61.9871 31.6296C61.7971 31.7996 61.8971 32.0596 61.8971 32.2696C61.8971 38.4896 61.8971 44.7096 61.8971 50.9296C61.9311 51.9916 61.6132 53.035 60.9929 53.8976C60.3726 54.7603 59.4847 55.3938 58.4671 55.6996C58.0381 55.825 57.5941 55.8923 57.1471 55.8996H47.3871C46.6671 55.8996 46.2671 55.5796 46.2471 55.0096C46.2271 54.4396 46.6171 54.0096 47.3771 54.0096H56.7171C58.8871 54.0096 60.0271 52.8796 60.0271 50.7196V33.1696C59.9571 33.1696 59.8971 33.1696 59.8571 33.1696C55.9967 35.5285 51.747 37.181 47.3071 38.0496C43.9536 38.7769 40.545 39.2218 37.1171 39.3796C36.5971 39.3796 36.7271 39.6996 36.7171 39.9796C36.6751 40.9696 36.3117 41.9189 35.682 42.6839C35.0523 43.4489 34.1905 43.988 33.2271 44.2196C32.2998 44.4307 31.3294 44.3432 30.4547 43.9697C29.5801 43.5961 28.8459 42.9555 28.3571 42.1396C27.9329 41.4589 27.7109 40.6717 27.7171 39.8696C27.7171 39.5196 27.5971 39.4496 27.2771 39.4296C22.8379 39.2224 18.4348 38.5282 14.1471 37.3596C13.6471 37.2296 13.2071 37.0396 13.1471 36.4296C13.1273 36.2255 13.1794 36.0208 13.2945 35.851C13.4095 35.6812 13.5802 35.5569 13.7771 35.4996C13.9677 35.4301 14.1766 35.4301 14.3671 35.4996C17.2153 36.2908 20.1208 36.8591 23.0571 37.1996C24.4871 37.3596 25.9271 37.4596 27.3671 37.5996C27.6171 37.5996 27.6771 37.5296 27.6771 37.2996C27.6771 36.7296 27.6771 36.1596 27.6771 35.5896C27.6673 35.2893 27.7194 34.9902 27.8302 34.7109C27.9409 34.4316 28.1079 34.1781 28.3208 33.9661C28.5337 33.7542 28.788 33.5883 29.0678 33.4788C29.3476 33.3692 29.6469 33.3185 29.9471 33.3296C31.4571 33.3296 32.9471 33.3296 34.4671 33.3296C34.7623 33.3227 35.0557 33.376 35.3295 33.4864C35.6034 33.5967 35.8518 33.7618 36.0596 33.9715C36.2674 34.1812 36.4302 34.4311 36.5381 34.7059C36.646 34.9806 36.6967 35.2746 36.6871 35.5696C36.6871 36.1196 36.6871 36.6696 36.6871 37.2096C36.6871 37.4796 36.6871 37.5996 37.0371 37.5796C42.0446 37.3318 46.9989 36.4377 51.7771 34.9196C54.8718 33.9401 57.7792 32.4458 60.3771 30.4996C60.7593 30.2132 61.0676 29.8396 61.2763 29.41C61.4851 28.9804 61.5882 28.5071 61.5771 28.0296C61.5771 23.843 61.5771 19.653 61.5771 15.4596C61.5917 15.0566 61.522 14.655 61.3726 14.2804C61.2231 13.9059 60.9972 13.5666 60.7092 13.2843C60.4213 13.002 60.0776 12.7828 59.7001 12.6408C59.3227 12.4988 58.9198 12.4371 58.5171 12.4596H5.81714C5.41941 12.4457 5.02307 12.5137 4.65277 12.6595C4.28247 12.8053 3.94615 13.0258 3.66474 13.3072C3.38333 13.5886 3.16286 13.925 3.01704 14.2953C2.87122 14.6655 2.80317 15.0619 2.81714 15.4596C2.81714 19.6196 2.81714 23.7896 2.81714 27.9596C2.79861 28.4489 2.9001 28.9352 3.11276 29.3762C3.32542 29.8172 3.64278 30.1995 4.03714 30.4896C5.96407 31.9431 8.07596 33.1336 10.3171 34.0296C10.5919 34.1075 10.834 34.2724 11.0071 34.4996C11.1155 34.6618 11.1683 34.8549 11.1575 35.0496C11.1467 35.2444 11.0728 35.4304 10.9471 35.5796C10.8175 35.7524 10.6306 35.8734 10.4199 35.9211C10.2093 35.9687 9.9885 35.9398 9.79714 35.8396C8.18083 35.1848 6.61923 34.4023 5.12714 33.4996L4.39714 33.0496V50.8696C4.35206 51.3018 4.40368 51.7386 4.54826 52.1484C4.69283 52.5582 4.92675 52.9307 5.23306 53.239C5.53937 53.5472 5.91042 53.7834 6.3193 53.9305C6.72818 54.0777 7.16466 54.132 7.59714 54.0896H42.8571C43.1002 54.0746 43.344 54.0746 43.5871 54.0896C43.6992 54.0922 43.8096 54.1171 43.9119 54.163C44.0142 54.2089 44.1062 54.2747 44.1827 54.3568C44.2591 54.4388 44.3183 54.5352 44.3569 54.6405C44.3954 54.7458 44.4125 54.8577 44.4071 54.9696C44.4241 55.1968 44.3523 55.4217 44.2068 55.597C44.0613 55.7723 43.8535 55.8844 43.6271 55.9096C43.4875 55.9244 43.3468 55.9244 43.2071 55.9096C31.2671 55.9096 19.3305 55.9096 7.39714 55.9096C6.28034 55.944 5.18783 55.5794 4.31553 54.8812C3.44322 54.183 2.84819 53.1968 2.63714 52.0996C2.5654 51.6602 2.53859 51.2145 2.55714 50.7696C2.55714 44.6296 2.55714 38.4896 2.55714 32.3496C2.56354 32.166 2.53323 31.983 2.46798 31.8113C2.40273 31.6396 2.30385 31.4826 2.17714 31.3496C1.389 30.5118 0.958531 29.3997 0.977142 28.2496C0.977142 23.9396 0.977142 19.6296 0.977142 15.3196C0.9717 14.1072 1.44406 12.9415 2.29194 12.0749C3.13981 11.2084 4.29494 10.7106 5.50714 10.6896C10.3271 10.6896 15.1371 10.6896 19.9571 10.6896C20.8971 10.6896 20.8971 10.6896 20.8971 9.68962C20.8971 8.68962 20.8971 7.56962 20.8971 6.51962C20.8596 5.93343 20.9868 5.34842 21.2642 4.83067C21.5416 4.31292 21.9583 3.88305 22.4671 3.58962C24.7513 2.21641 27.314 1.37241 29.9671 1.11962C31.0763 1.00139 32.1929 0.967966 33.3071 1.01962C33.518 1.004 33.7283 1.05559 33.908 1.16699C34.0876 1.27838 34.2274 1.44384 34.3071 1.63962C34.3749 1.78846 34.3978 1.95386 34.3729 2.11551C34.3481 2.27716 34.2765 2.42804 34.1671 2.54962C34.0265 2.69657 33.851 2.80567 33.657 2.86685C33.463 2.92802 33.2567 2.93929 33.0571 2.89962C30.5566 2.75875 28.0547 3.15074 25.7171 4.04962C24.9318 4.35944 24.1783 4.74458 23.4671 5.19962C23.2625 5.31101 23.0937 5.47823 22.9804 5.68183C22.8671 5.88542 22.8139 6.117 22.8271 6.34963C22.8271 7.60963 22.8271 8.86962 22.8271 10.1296C22.8271 10.5496 22.9671 10.6496 23.3471 10.6296C23.7271 10.6096 24.5271 10.7896 24.8171 10.5296C25.1071 10.2696 24.9171 9.52963 24.9371 9.02963C24.9672 8.60349 24.9672 8.17576 24.9371 7.74962C24.8885 7.43607 24.9562 7.11556 25.1275 6.84847C25.2988 6.58139 25.5619 6.38618 25.8671 6.29962C27.8441 5.44636 29.9739 5.00406 32.1271 4.99962C34.3839 4.96688 36.6213 5.4205 38.6871 6.32962C38.9679 6.42144 39.2091 6.60618 39.3709 6.85339C39.5327 7.1006 39.6054 7.39554 39.5771 7.68962C39.5771 8.51962 39.5771 9.34962 39.5771 10.1896C39.5771 10.5296 39.6771 10.6596 40.0171 10.6196C40.5571 10.6196 41.2571 10.8496 41.5971 10.4996C41.9371 10.1496 41.6771 9.49963 41.6871 9.02963C41.6871 8.17963 41.6871 7.32962 41.6871 6.46962C41.7063 6.19748 41.6455 5.92568 41.5123 5.68762C41.379 5.44956 41.1791 5.25562 40.9371 5.12962C39.8109 4.4444 38.5963 3.91618 37.3271 3.55962C37.1571 3.55962 36.9671 3.47963 36.7971 3.41963C36.6795 3.38535 36.5699 3.32792 36.4748 3.25071C36.3797 3.17351 36.3009 3.07808 36.2432 2.97003C36.1854 2.86197 36.1498 2.74348 36.1385 2.62148C36.1271 2.49949 36.1403 2.37647 36.1771 2.25962C36.1996 2.15132 36.2435 2.0486 36.3062 1.9575C36.369 1.8664 36.4493 1.78875 36.5424 1.72913C36.6356 1.6695 36.7397 1.6291 36.8487 1.6103C36.9577 1.59149 37.0694 1.59466 37.1771 1.61962C39.1505 2.01849 41.0052 2.86716 42.5971 4.09963C42.9213 4.39481 43.1742 4.75963 43.337 5.16666C43.4999 5.57369 43.5683 6.01234 43.5371 6.44962C43.5371 7.62962 43.5371 8.80963 43.5371 9.98962C43.5371 10.4896 43.6571 10.6296 44.1671 10.6296C48.8471 10.6296 53.5171 10.6296 58.1671 10.6296C61.0671 10.6296 62.5871 11.7596 63.4071 14.5196C63.4071 14.5196 63.4071 14.5196 63.4571 14.5196L63.4671 29.1796ZM32.1971 10.6196C33.8471 10.6196 35.4871 10.6196 37.1371 10.6196C37.5671 10.6196 37.6971 10.4896 37.6671 10.0696C37.6321 9.52351 37.6321 8.97573 37.6671 8.42962C37.6671 7.98962 37.5071 7.81962 37.1371 7.68962C33.9279 6.51503 30.4064 6.51503 27.1971 7.68962C27.0517 7.7232 26.9247 7.81159 26.8428 7.93639C26.7608 8.06119 26.7301 8.21278 26.7571 8.35962C26.7871 8.92589 26.7871 9.49335 26.7571 10.0596C26.7571 10.4496 26.8471 10.5896 27.2571 10.5796C28.9071 10.6096 30.5471 10.6196 32.1971 10.6196ZM29.5771 37.8696V40.3096C29.5775 40.4321 29.5978 40.5537 29.6371 40.6696C29.8241 41.2647 30.2135 41.7754 30.7378 42.1134C31.262 42.4513 31.888 42.595 32.5071 42.5196C33.1576 42.4519 33.7587 42.1415 34.1905 41.6504C34.6223 41.1593 34.8532 40.5234 34.8371 39.8696C34.8871 38.4896 34.8371 37.0996 34.8371 35.7196C34.8371 35.2696 34.6271 35.1196 34.1971 35.1296C32.8571 35.1296 31.5171 35.1296 30.1971 35.1296C29.7571 35.1296 29.5771 35.2996 29.5771 35.7396C29.5871 36.4496 29.5771 37.1396 29.5771 37.8696Z"
                      fill="#0A0909"
                    />
                  </svg>
                </div>
                <div className={stylecon.contactNumbs}>
                  {hr.map((item, i) => (
                    <div key={i} className={stylecon.numberMain}>
                      <img src={item.icon} alt="" width={"30px"} />
                      <h6>{item.contact}</h6>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
