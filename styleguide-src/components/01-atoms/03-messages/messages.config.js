module.exports = {
    title: "Message",
    body: "Text messages",
    notes: "Test",
    context: {
      "text": "Default",
    },
    variants: [
      {
        "name": "Status message",
        "context": {
          "text": "Lorem ipsum dolor sit amet, has ubique possim ad, sonet audire repudiandae an eum. Usu ne erat dicant dolorum, diam labore quidam an sea. Sit hinc perfecto ocurreret ut, ius altera dictas docendi ex. Iisque singulis salutandi ea ius, vim nobis tempor incorrupte at.",
          "class": "messages--status",
        }
      },
      {
        "name": "Warning message",
        "context": {
          "text": "Lorem ipsum dolor sit amet, has ubique possim ad, sonet audire repudiandae an eum. Usu ne erat dicant dolorum, diam labore quidam an sea. Sit hinc perfecto ocurreret ut, ius altera dictas docendi ex. Iisque singulis salutandi ea ius, vim nobis tempor incorrupte at.",
          "class": "messages--warning",
        }
      },
      {
        "name": "Error message",
        "context": {
          "text": "Lorem ipsum dolor sit amet, has ubique possim ad, sonet audire repudiandae an eum. Usu ne erat dicant dolorum, diam labore quidam an sea. Sit hinc perfecto ocurreret ut, ius altera dictas docendi ex. Iisque singulis salutandi ea ius, vim nobis tempor incorrupte at.",
          "class": "messages--error",
        }
      },
    ]
};
