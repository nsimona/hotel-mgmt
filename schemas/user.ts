import { defineField } from "sanity";

const user = {
  name: "user",
  title: "User",
  type: "document",
  fields: [
    defineField({
      name: "isAdmin",
      title: "Is Admin",
      type: "boolean",
      description: "Check if the user is admin",
      initialValue: false,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      description: "Name of the user",
      readOnly: true,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "url",
    }),
    defineField({
      name: "password",
      title: "Password",
      type: "string",
      hidden: true,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "about",
      title: "About",
      type: "text",
    }),
  ],
};

export default user;
