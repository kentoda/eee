import { Page2 } from "../Page2";
import { Page1DeatailA } from "../Page1DeatailA";
import { Page1DeatailB } from "../Page1DeatailB";
import { UrlParameter } from "../UrlParameter";

export const Page2Route = [
  {
    path: "/",
    exact: true,
    children: <Page2 />
  },
  {
    path: "/:id",
    exact: false,
    children: <UrlParameter />
  }
];
