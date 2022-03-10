export default {
  name: "works",
  title: "Works",
  type: "document",
  fields: [
    {
      name: "section",
      title: "Section",
      type: "string",
    },
    {
      name: "works",
      title: "Works",
      type: "array",
      of: [{ type: "listWorks" }],
    },
    
  ],
};
