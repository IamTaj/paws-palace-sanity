import { Content, SchemaInputProps } from "../../schemaTypes/types";

export class Aesthetic extends Content {
    // title: "UI Configuration",
    name= "uiConfiguration"
    // type: "objects",
    getSchema({variants, items}: SchemaInputProps) {
      return{
    fields: [
      {
        name: "title",
        title: "Title",
        type: "string",
      },
      {
        name: "isGradientEnabled",
        title: "Is Gradient Enabled",
        type: "boolean",
      },
      {
        name: "gradient",
        title: "Gradient",
        type: "string",
        hidden: ({parent}:any) => !parent?.isGradientEnabled
      },
      {
        name: "backgroundColor",
        title: "Background Color",
        type: "color",
        hidden: ({parent}:any) => parent?.isGradientEnabled
      },
      {
        name: "titleColor",
        title: "Title Color",
        type: "color",
      },
      {
        name: "padding",
        title: "Padding",
        type: "object",
        fields: [
          {
            name: "mobile",
            title: "Mobile",
            type: "string",
          },
          {
            name: "desktop",
            title: "Desktop",
            type: "string",
          },
        ],
      },
    ],
    preview: {
      select: {
        title: "title",
        padding: "padding",
      },
      prepare({ title, padding }:any) {
        return {
          title: `${title ? title : padding?.desktop ?? "<UI Config>"}`,
          subtitle: `Desktop: ${padding?.desktop ?? " - "} | Mobile: ${
            padding?.mobile ?? " - "
          }`,
        };
      },
    },}
  };
}