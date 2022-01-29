import { Page1 } from "../Page1";
import { Page1DeatailA } from "../Page1DeatailA";
import { Page1DeatailB } from "../Page1DeatailB";

export const Page1Route = [
  {
    path: "/",
    exact: true,
    children: <Page1 />
  },
  {
    path: "/deatailA",
    exact: false,
    children: <Page1DeatailA />
  },
  {
    path: "/deatailB",
    exact: false,
    children: <Page1DeatailB />
  }
];
