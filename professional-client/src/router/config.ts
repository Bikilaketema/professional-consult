const routes = [
  {
    path: ["/", "/home"],
    exact: true,
    component: "Home",
  },
  {
    path: ["/register"],
    exact: true,
    component: "Register",
  },
  {
    path: ["/school-registration"],
    exact: true,
    component: "SchoolRegForm",
  },
  {
    path: ["/teacher-registration"],
    exact: true,
    component: "TeacherRegForm",
  }
];

export default routes;
