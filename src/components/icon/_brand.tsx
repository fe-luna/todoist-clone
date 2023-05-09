import React from "react";
import { Icon, IconProps } from "@chakra-ui/icons";

const GoogleIcon = (props: IconProps) => (
  <Icon viewBox="0 0 18 18" boxSize={6} {...props}>
    <g fill="none" fillRule="evenodd">
      <path
        fill="#4285F4"
        d="M17.64 9.205c0-.639-.057-1.252-.164-1.841H9v3.481h4.844a4.14 4.14 0 01-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z"
      ></path>
      <path
        fill="#34A853"
        d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 009 18z"
      ></path>
      <path
        fill="#FBBC05"
        d="M3.964 10.71A5.41 5.41 0 013.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 000 9c0 1.452.348 2.827.957 4.042l3.007-2.332z"
      ></path>
      <path
        fill="#EA4335"
        d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 00.957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z"
      ></path>
      <path d="M0 0h18v18H0z"></path>
    </g>
  </Icon>
);

const FacebookIcon = (props: IconProps) => (
  <Icon viewBox="0 0 18 18" boxSize={6} {...props}>
    <mask
      width="18"
      height="18"
      x="0"
      y="0"
      maskUnits="userSpaceOnUse"
      style={{ maskType: "alpha" }}
    >
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M.001 0H18v17.89H.001V0z"
        clipRule="evenodd"
      ></path>
    </mask>
    <g mask="url(#facebook-icon_svg__a)">
      <path
        fill="#1877F2"
        fillRule="evenodd"
        d="M18 9a9 9 0 10-10.406 8.89v-6.288H5.309V9h2.285V7.017c0-2.255 1.343-3.501 3.4-3.501.984 0 2.014.175 2.014.175v2.215h-1.135c-1.118 0-1.467.694-1.467 1.406V9h2.496l-.399 2.602h-2.097v6.289A9.002 9.002 0 0018 9z"
        clipRule="evenodd"
      ></path>
    </g>
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M12.503 11.602l.4-2.602h-2.497V7.312c0-.712.349-1.406 1.467-1.406h1.135V3.691s-1.03-.175-2.015-.175c-2.056 0-3.4 1.246-3.4 3.501V9H5.31v2.602h2.285v6.289a9.067 9.067 0 002.812 0V11.6h2.097z"
      clipRule="evenodd"
    ></path>
  </Icon>
);

const AppleIcon = (props: IconProps) => (
  <Icon viewBox="0 0 256 315" boxSize={6} {...props}>
    <path d="M214 167c0 48 42 63 42 64s-7 22-22 44c-13 20-26 39-48 39-21 0-28-12-52-12s-31 12-51 12c-21 1-37-20-50-39-27-39-48-111-20-159 14-24 39-39 65-39 21-1 40 13 52 13s36-16 60-14c11 0 39 4 58 31-2 1-35 20-34 60M174 50c11-13 19-32 17-50-16 1-35 11-47 24a66 66 0 00-16 48c17 2 35-9 46-22"></path>
  </Icon>
);

export { GoogleIcon, FacebookIcon, AppleIcon };
