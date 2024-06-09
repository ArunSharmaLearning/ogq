import SvgColor from "@/components/svg-color";

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor
    src={`/assets/icons/navbar/${name}.svg`}
    sx={{ width: 1, height: 1 }}
  />
);

const navConfig = [
  {
    title: "dashboard",
    path: "/",
    icon: icon("ic_analytics"),
  },
  {
    title: "user",
    path: "/user",
    icon: icon("ic_user"),
  },
  {
    title: "Page",
    type: 1,
    childrens: [
      {
        title: "About Us",
        path: "/about-us",
        icon: icon("ic_user"),
      },
      {
        title: "Contact Us",
        path: "/user",
        icon: icon("ic_user"),
      },
    ],
  },
  {
    title: "Links",
    type: 1,
    childrens: [
      {
        title: "Link1",
        path: "/user",
        icon: icon("ic_lock"),
      },
    ],
  },
  {
    title: "login",
    path: "/login",
    icon: icon("ic_lock"),
  },
  {
    title: "Not found",
    path: "/404",
    icon: icon("ic_disabled"),
  },
];

export default navConfig;
