//// Navigation View Configuration ////

const navDefinitions = [
  {
    name: "Home",
    //id: nanoId(),
  },
];

const navViews = [
  {
    name: "Admin",
    allowedDefinitions: navDefinitions.map(
      (navDefinition) => navDefinition.name
    ),
  },
];

export default navViews;
