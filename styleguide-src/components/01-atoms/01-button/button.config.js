module.exports = {
    title: "Button",
    body: "A basic button helper",
    collated: true,
    context: {
      "class": "button",
      "tag": "button",
      "text": "Default",
    },
    variants: [
      {
        "name": "Default link",
        "context": {
          "class": "button",
          "tag": "a",
          "text": "Default link button",
        }
      },
      {
        "name": "Primary",
        "context": {
          "class": "button--primary",
          "tag": "a",
          "text": "Primary btn",
        }
      },
      {
        "name": "Secondary",
        "context": {
          "class": "button--secondary",
          "tag": "a",
          "text": "Secondary btn",
        }
      },
    ]
};
