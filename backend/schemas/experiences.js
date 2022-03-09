export default {
  name: "experiences",
  title: "Experiences",
  type: "document",
  fields: [
    {
      name: "section",
      title: "Section",
      type: "string",
    },
    {
      name: "year",
      title: "Year",
      type: "string",
    },
    {
      name: "works",
      title: "Works",
      type: "array",
      of: [{ type: "workExperience" }],
    },
  ],
};
