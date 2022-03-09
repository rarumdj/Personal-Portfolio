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
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "viewLink",
      title: "ViewLink",
      type: "string",
    },
    {
      name: "gitLink",
      title: "GitLink",
      type: "string",
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [
        {
          name: "tag",
          title: "Tag",
          type: "string",
        },
      ],
    },
    {
      name: "icon",
      title: "Icon",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
