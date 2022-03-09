export default {
  name: "about",
  title: "About",
  type: "document",
  fields: [
    {
      name: "section",
      title: "Section",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "listTitle",
      title: "ListTitle",
      type: "string",
    },
    {
      name: "lists",
      title: "Lists",
      type: "array",
      of: [
        {
          name: "list",
          title: "List",
          type: "string",
        },
      ],
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
