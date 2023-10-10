export const surveyTemplates = [
  {
    name: "Classic NPS (Net Promoter Score™ Survey)",
    category: "",
    description: "",
    survey: {
      id: "9766f8c206d0ec7a",
      name: "Classic NPS (Net Promoter Score™ Survey)",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "",
          label: "How likely are you to recommend us to someone like you?",
          id: 595530,
          orderNumber: 1,
          type: "nps",
          maxPath: 2,
          settings: {
            leftText: "Not likely",
            rightText: "Very likely",
            logic: [
              {
                id: 721933594128,
                orderNumber: 1,
                destination: 595532,
                condition: "between",
                values: [7, 8],
              },
              {
                id: 295792236483,
                orderNumber: 2,
                destination: 595535,
                condition: "between",
                values: [9, 10],
              },
            ],
          },
        },
        {
          description: "We're sorry to hear that!",
          label: "What can we improve?",
          id: 595531,
          orderNumber: 2,
          type: "text",
          maxPath: 0,
          settings: {
            logic: [
              {
                id: 178812255953,
                orderNumber: 1,
                destination: -1,
                condition: "any_value",
                values: [],
              },
            ],
          },
          options: [
            {
              id: 1641240,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "That's not bad at all!",
          label: "Is there anything we could improve?",
          id: 595532,
          orderNumber: 3,
          type: "text",
          maxPath: 0,
          settings: {
            logic: [
              {
                id: 770396728919,
                orderNumber: 1,
                destination: -1,
                condition: "any_value",
                values: [],
              },
            ],
          },
          options: [
            {
              id: 1641241,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "Happy to hear!",
          label: "Is there anything we could improve for you?",
          id: 595535,
          orderNumber: 4,
          type: "text",
          maxPath: 1,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 1641242,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "Thank you and have a great day!",
          id: 1533116,
          orderNumber: 5,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Improve your web app's user experience",
    category: "",
    description: "",
    survey: {
      id: "2805b05cdfaf24c3",
      name: "Improve your web app's user experience",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "",
          label:
            "How would you rate your overall experience with [product name]?",
          id: 1131075,
          orderNumber: 1,
          type: "rating",
          maxPath: 5,
          settings: {
            shape: "stars",
            leftText: "Very dissatifying",
            rightText: "Very satisfying",
            logic: [
              {
                id: 21724457820,
                orderNumber: 1,
                destination: 1131076,
                condition: "is",
                values: [3149490, 3149491],
                operator: "or",
              },
            ],
          },
          options: [
            {
              id: 3149487,
              label: "1",
              orderNumber: 1,
            },
            {
              id: 3149488,
              label: "2",
              orderNumber: 2,
            },
            {
              id: 3149489,
              label: "3",
              orderNumber: 3,
            },
            {
              id: 3149490,
              label: "4",
              orderNumber: 4,
            },
            {
              id: 3149491,
              label: "5",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "",
          label: "What would you improve?",
          id: 1681255,
          orderNumber: 2,
          type: "text",
          maxPath: 4,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4765659,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "How easy it is to navigate through [product name]?",
          id: 1131076,
          orderNumber: 3,
          type: "rating",
          maxPath: 3,
          settings: {
            shape: "stars",
            leftText: "Not at all easy",
            rightText: "Very easy",
            logic: [
              {
                id: 50133364200,
                orderNumber: 1,
                destination: 349456,
                condition: "is",
                values: [3149497, 3149498],
                operator: "or",
              },
            ],
          },
          options: [
            {
              id: 3149494,
              label: "1",
              orderNumber: 1,
            },
            {
              id: 3149495,
              label: "2",
              orderNumber: 2,
            },
            {
              id: 3149496,
              label: "3",
              orderNumber: 3,
            },
            {
              id: 3149497,
              label: "4",
              orderNumber: 4,
            },
            {
              id: 3149498,
              label: "5",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "",
          label: "Please, tell us more about the problems you've encountered:",
          id: 1681256,
          orderNumber: 4,
          type: "text",
          maxPath: 2,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4765660,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label:
            "How likely are you to recommend [product name] to a friend or colleague?",
          id: 349456,
          orderNumber: 5,
          type: "nps",
          maxPath: 1,
          settings: {
            leftText: "Not likely",
            rightText: "Very likely",
            logic: [],
          },
        },
        {
          description: "Thanks for your feedback!",
          label: "Have a great day!",
          id: 200828,
          orderNumber: 6,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Ensure Customer Satisfaction (CSAT)",
    category: "",
    description: "",
    survey: {
      id: "943fd1cedeefb82e",
      name: "Ensure Customer Satisfaction (CSAT)",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "",
          label: "How satisfied are you with [product name]?",
          id: 1489047,
          orderNumber: 1,
          type: "smiley_scale",
          maxPath: 3,
          settings: {
            leftText: "Very dissatisfied",
            rightText: "Very satisfied",
            logic: [
              {
                id: 782094703104,
                orderNumber: 1,
                destination: 1489049,
                condition: "is",
                values: [4258632, 4258633],
                operator: "or",
              },
            ],
          },
          options: [
            {
              id: 4258629,
              label: "Extremely unsatisfied",
              orderNumber: 1,
            },
            {
              id: 4258630,
              label: "Unsatisfied",
              orderNumber: 2,
            },
            {
              id: 4258631,
              label: "Neutral",
              orderNumber: 3,
            },
            {
              id: 4258632,
              label: "Happy",
              orderNumber: 4,
            },
            {
              id: 4258633,
              label: "Extremely happy",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "",
          label: "What should we improve?",
          id: 1489048,
          orderNumber: 2,
          type: "text",
          maxPath: 1,
          settings: {
            logic: [
              {
                id: 616651592832,
                orderNumber: 1,
                destination: 1533469,
                condition: "any_value",
                values: [],
              },
            ],
          },
          options: [
            {
              id: 4258634,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "Great to hear that!",
          label:
            "What is the biggest value you get from using [product name]? ",
          id: 1489049,
          orderNumber: 3,
          type: "text",
          maxPath: 2,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4258635,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "Is there anything we should improve?",
          id: 1489050,
          orderNumber: 4,
          type: "text",
          maxPath: 1,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4258636,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "Thanks for your feedback!",
          id: 1533469,
          orderNumber: 5,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Uncover page exit reasons",
    category: "",
    description: "",
    survey: {
      id: "24fb61bb3a740402",
      name: "Uncover page exit reasons",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "We’re sorry to see you go!",
          label: "Why did you decide to leave our site?",
          id: 1250062,
          orderNumber: 1,
          type: "single",
          maxPath: 2,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [
              {
                id: 499998716191,
                orderNumber: 1,
                destination: 1250064,
                condition: "is",
                values: [3519229],
                operator: "or",
              },
              {
                id: 1314377896074,
                orderNumber: 2,
                destination: 1250065,
                condition: "is",
                values: [3519230, 3519231],
                operator: "or",
              },
            ],
          },
          options: [
            {
              id: 3519228,
              label: "I didn't find what I was looking for",
              orderNumber: 1,
            },
            {
              id: 3519229,
              label: "I already bought this elsewhere",
              orderNumber: 2,
            },
            {
              id: 3519230,
              label: "I changed my mind",
              orderNumber: 3,
            },
            {
              id: 3519231,
              label: "I was just browsing",
              orderNumber: 4,
            },
            {
              id: 3519232,
              label: "I don't find the offer attractive",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "",
          label: "What were you hoping to get from our page?",
          id: 1250063,
          orderNumber: 2,
          type: "text",
          maxPath: 1,
          settings: {
            logic: [
              {
                id: 1008358614927,
                orderNumber: 1,
                destination: 1250065,
                condition: "any_value",
                values: [],
              },
            ],
          },
          options: [
            {
              id: 3519233,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "Mind telling us whom did you buy from?",
          id: 1250064,
          orderNumber: 3,
          type: "text",
          maxPath: 1,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 3519234,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "Thank you for sharing! 🙏",
          id: 1250065,
          orderNumber: 4,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Measure product - market fit",
    category: "",
    description: "",
    survey: {
      id: "bbe24de4bea326fb",
      name: "Measure product - market fit",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "",
          label:
            "How would you feel if you could no longer use [product name]?",
          id: 595635,
          orderNumber: 1,
          type: "single",
          maxPath: 4,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [
              {
                id: 1534109408946,
                orderNumber: 1,
                destination: 1498610,
                condition: "is",
                values: [1641516, 1641527],
                operator: "or",
              },
              {
                id: 1564189985592,
                orderNumber: 2,
                destination: 595638,
                condition: "is",
                values: [4207637],
                operator: "or",
              },
            ],
          },
          options: [
            {
              id: 1641515,
              label: "Very disappointed",
              orderNumber: 1,
            },
            {
              id: 1641516,
              label: "Somewhat disappointed",
              orderNumber: 2,
            },
            {
              id: 1641527,
              label: "Not disappointed",
              orderNumber: 3,
            },
            {
              id: 4207637,
              label: "Actually, I'm going to stop using it",
              orderNumber: 4,
            },
          ],
        },
        {
          description: "",
          label: "What's the main benefit that you have from [product name]?",
          id: 595636,
          orderNumber: 2,
          type: "text",
          maxPath: 2,
          settings: {
            logic: [
              {
                id: 857296434411,
                orderNumber: 1,
                destination: 1529072,
                condition: "any_value",
                values: [],
              },
            ],
          },
          options: [
            {
              id: 1641517,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "How can we improve it for you?",
          id: 1498610,
          orderNumber: 3,
          type: "text",
          maxPath: 3,
          settings: {
            logic: [
              {
                id: 382691780663,
                orderNumber: 1,
                destination: 1529071,
                condition: "any_value",
                values: [],
              },
            ],
          },
          options: [
            {
              id: 4283042,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "Sorry to hear that!",
          label: "Why such a decision?",
          id: 595638,
          orderNumber: 4,
          type: "text",
          maxPath: 3,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 1641520,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "If any, what app are you going to use instead?",
          id: 1529070,
          orderNumber: 5,
          type: "text",
          maxPath: 2,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4369290,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "What type of person would benefit most from [product name]?",
          id: 1471880,
          orderNumber: 6,
          type: "text",
          maxPath: 1,
          settings: {
            logic: [
              {
                id: 267382903520,
                orderNumber: 1,
                destination: 1471881,
                condition: "any_value",
                values: [],
              },
            ],
          },
          options: [
            {
              id: 4207630,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "What type of person would benefit most from [product name]?",
          id: 1529071,
          orderNumber: 7,
          type: "text",
          maxPath: 2,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4369291,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label:
            "If [product name] was no longer available, what would you use instead?",
          id: 1529072,
          orderNumber: 8,
          type: "text",
          maxPath: 1,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4369292,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "What best describes your primary role at your company?",
          id: 1471881,
          orderNumber: 9,
          type: "single",
          maxPath: 0,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
          },
          options: [
            {
              id: 4207631,
              label: "Executive",
              orderNumber: 1,
            },
            {
              id: 4207632,
              label: "Customer Success/Support Manager",
              orderNumber: 2,
            },
            {
              id: 4207633,
              label: "Product Manager/Owner",
              orderNumber: 3,
            },
            {
              id: 4207634,
              label: "Sales Manager",
              orderNumber: 4,
            },
            {
              id: 4207635,
              label: "Marketing Manager",
              orderNumber: 5,
            },
            {
              id: 4207636,
              label: "Other",
              orderNumber: 6,
            },
          ],
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Quickly measure product satisfaction",
    category: "",
    description: "",
    survey: {
      id: "077760544de8035d",
      name: "Quickly measure product satisfaction",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "",
          label: "How satisfied are you with [product name]?",
          id: 1684228,
          orderNumber: 1,
          type: "smiley_scale",
          maxPath: 3,
          settings: {
            leftText: "Very dissatisfied",
            rightText: "Very satisfied",
            logic: [
              {
                id: 972586827234,
                orderNumber: 1,
                destination: 1684231,
                condition: "is",
                values: [4772006, 4772007],
                operator: "or",
              },
              {
                id: 1388693562597,
                orderNumber: 2,
                destination: 1684232,
                condition: "is",
                values: [4772008],
                operator: "or",
              },
            ],
          },
          options: [
            {
              id: 4772004,
              label: "Extremely unsatisfied",
              orderNumber: 1,
            },
            {
              id: 4772005,
              label: "Unsatisfied",
              orderNumber: 2,
            },
            {
              id: 4772006,
              label: "Neutral",
              orderNumber: 3,
            },
            {
              id: 4772007,
              label: "Happy",
              orderNumber: 4,
            },
            {
              id: 4772008,
              label: "Extremely happy",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "",
          label: "What makes you dissatisfied with it?",
          id: 1684229,
          orderNumber: 2,
          type: "text",
          maxPath: 2,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4772009,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label:
            "If you had a magic wand and everything was possible, how would you like the product to work? :)",
          id: 1684230,
          orderNumber: 3,
          type: "text",
          maxPath: 1,
          settings: {
            logic: [
              {
                id: 1475591354721,
                orderNumber: 1,
                destination: 175617,
                condition: "any_value",
                values: [],
              },
            ],
          },
          options: [
            {
              id: 4772010,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "Is there anything you'd change about it?",
          id: 1684231,
          orderNumber: 4,
          type: "text",
          maxPath: 1,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4772011,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "Thank you for sharing! It means a lot!",
          id: 175617,
          orderNumber: 5,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
        {
          description: "",
          label: "Thanks for your feedback! We appreciate it! ",
          id: 1684232,
          orderNumber: 6,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Improve your blog content strategy",
    category: "",
    description: "",
    survey: {
      id: "349fcd95fafcbcd8",
      name: "Improve your blog content strategy",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "",
          label: "How relevant to you is the content on our blog?",
          id: 1131089,
          orderNumber: 1,
          type: "rating",
          maxPath: 4,
          settings: {
            shape: "stars",
            leftText: "Completely irrelevant",
            rightText: "Extremely relevant",
            logic: [],
          },
          options: [
            {
              id: 3149525,
              label: "1",
              orderNumber: 1,
            },
            {
              id: 3149526,
              label: "2",
              orderNumber: 2,
            },
            {
              id: 3149527,
              label: "3",
              orderNumber: 3,
            },
            {
              id: 3149528,
              label: "4",
              orderNumber: 4,
            },
            {
              id: 3149529,
              label: "5",
              orderNumber: 5,
            },
            {
              id: 3149530,
              label: "6",
              orderNumber: 6,
            },
            {
              id: 3149531,
              label: "7",
              orderNumber: 7,
            },
          ],
        },
        {
          description: "",
          label: "What would you like us to write more about?",
          id: 1131095,
          orderNumber: 2,
          type: "multiple",
          maxPath: 3,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [],
          },
          options: [
            {
              id: 3149549,
              label:
                "How to improve [type in a relevant to your personas scenario]",
              orderNumber: 1,
            },
            {
              id: 3149550,
              label: "The risk connected with [a scenario] ",
              orderNumber: 2,
            },
            {
              id: 3149557,
              label: "The pros and cons of [a relevant scenario]",
              orderNumber: 3,
            },
            {
              id: 3149558,
              label: "Other",
              orderNumber: 4,
            },
          ],
        },
        {
          description: "",
          label: "Would you like to receive relevant content updates from us?",
          id: 1629999,
          orderNumber: 3,
          type: "single",
          maxPath: 2,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [
              {
                id: 957547416087,
                orderNumber: 1,
                destination: 1630003,
                condition: "is",
                values: [4630356],
                operator: "or",
              },
            ],
          },
          options: [
            {
              id: 4630355,
              label: "Sure! Keep me up to date!",
              orderNumber: 1,
            },
            {
              id: 4630356,
              label: "No, thanks!",
              orderNumber: 2,
            },
          ],
        },
        {
          description: "With pleasure!",
          label: "Help us get in touch:",
          id: 1629983,
          orderNumber: 4,
          type: "form",
          maxPath: 1,
          settings: {
            disclaimer: false,
            disclaimerText: "A disclaimer",
            consent: true,
            consentText: "Do you consent to this?",
            logic: [],
          },
          options: [
            {
              id: 347618,
              label: "What's you name?",
              orderNumber: 4,
              required: false,
              type: "first_name",
            },
            {
              id: 347619,
              label: "What is your business email?",
              orderNumber: 4,
              required: false,
              type: "email",
            },
          ],
        },
        {
          description: "",
          label: "Thank you! Stay in touch :)",
          id: 175595,
          orderNumber: 5,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
        {
          description: "",
          label: "OK! Thanks for the feedback!",
          id: 1630003,
          orderNumber: 6,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Find out how to improve the product",
    category: "",
    description: "",
    survey: {
      id: "d2ad979ea8e28b29",
      name: "Find out how to improve the product",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "",
          label:
            "👋 Would you like to have a say on the development of [product name]?",
          id: 1700406,
          orderNumber: 1,
          type: "cta",
          maxPath: 3,
          settings: {
            text: "OK",
            type: "next",
          },
        },
        {
          description: "",
          label:
            "If you could change or improve only one thing about [product name], what would it be?",
          id: 174884,
          orderNumber: 2,
          type: "text",
          maxPath: 2,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 316025,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "Is there anything else you'd like to bring to our attention?",
          id: 1700425,
          orderNumber: 3,
          type: "text",
          maxPath: 1,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4810099,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "Thank you for sharing! <br />Have a great day!",
          id: 174885,
          orderNumber: 4,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Ask open-ended questions about exit reasons",
    category: "",
    description: "",
    survey: {
      id: "f563cb45e5046aff",
      name: "Ask open-ended questions about exit reasons",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "😿 We’re sorry to see you go!",
          label:
            "Would you mind telling us the reason you're leaving the site?",
          id: 175197,
          orderNumber: 1,
          type: "text",
          maxPath: 1,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 316730,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "Thank you for sharing! 🙏 ",
          id: 175199,
          orderNumber: 2,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Website Improvement Ideas",
    category: "",
    description: "",
    survey: {
      id: "e108bd6639492cff",
      name: "Website Improvement Ideas",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "",
          label: "What could we do to make this site more useful?",
          id: 175576,
          orderNumber: 1,
          type: "text",
          maxPath: 1,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 317477,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "Thank you",
          label: "Have a great day",
          id: 175578,
          orderNumber: 2,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Find ideas for new features. HIDDEN.",
    category: "",
    description: "",
    survey: {
      id: "cb1153192d819010",
      name: "Find ideas for new features. HIDDEN.",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "",
          label:
            "What's one feature we can add that would make our product indispensable for you?",
          id: 175620,
          orderNumber: 1,
          type: "text",
          maxPath: 2,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 317581,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "Anything else you'd like to add?",
          id: 1481623,
          orderNumber: 2,
          type: "text",
          maxPath: 1,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4235858,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "Thank you!",
          label: "Have a great day!",
          id: 175621,
          orderNumber: 3,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Uncover the goals of your website's visitors",
    category: "",
    description: "",
    survey: {
      id: "f19700b9bb0d8f35",
      name: "Uncover the goals of your website's visitors",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "",
          label: "What is the goal of your visiting our website today?",
          id: 175828,
          orderNumber: 1,
          type: "text",
          maxPath: 3,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 317953,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "Were you able to achieve your goal today?",
          id: 175829,
          orderNumber: 2,
          type: "single",
          maxPath: 2,
          settings: {
            randomize: true,
            randomizeExceptLast: false,
            logic: [
              {
                id: 808833647600,
                orderNumber: 1,
                destination: 175830,
                condition: "is",
                values: [317955],
                operator: "or",
              },
            ],
          },
          options: [
            {
              id: 317954,
              label: "Yes",
              orderNumber: 1,
            },
            {
              id: 317955,
              label: "No",
              orderNumber: 2,
            },
          ],
        },
        {
          description: "Glad to hear that!",
          label: "Is there anything else you’d like to share?",
          id: 1682332,
          orderNumber: 3,
          type: "text",
          maxPath: 1,
          settings: {
            logic: [
              {
                id: 905759993800,
                orderNumber: 1,
                destination: 175831,
                condition: "any_value",
                values: [],
              },
            ],
          },
          options: [
            {
              id: 4768157,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "Sorry to hear that! ",
          label: "Would you like to tell us anything else?",
          id: 175830,
          orderNumber: 4,
          type: "text",
          maxPath: 1,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 317956,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "Thanks for your feedback. We really appreciate it!",
          id: 175831,
          orderNumber: 5,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Contact Form",
    category: "",
    description: "",
    survey: {
      id: "2d1d05aa734bd9ba",
      name: "Contact Form",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "",
          label: "Please fill in your information so we can stay in touch:",
          id: 174864,
          orderNumber: 1,
          type: "form",
          maxPath: 1,
          settings: {
            disclaimer: false,
            disclaimerText: "",
            consent: true,
            consentText: "Do you consent to this?",
            logic: [],
          },
          options: [
            {
              id: 25962,
              label: "First Name",
              orderNumber: 1,
              required: false,
              type: "first_name",
            },
            {
              id: 25963,
              label: "Last Name",
              orderNumber: 1,
              required: false,
              type: "last_name",
            },
            {
              id: 25964,
              label: "Email",
              orderNumber: 1,
              required: true,
              type: "email",
            },
            {
              id: 25965,
              label: "Phone Number",
              orderNumber: 1,
              required: false,
              type: "phone",
            },
          ],
        },
        {
          description: "Thank you",
          label: "Have a great day!",
          id: 174865,
          orderNumber: 2,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Prevent shopping cart abandonment",
    category: "",
    description: "",
    survey: {
      id: "46a2bf20b0eae52e",
      name: "Prevent shopping cart abandonment",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "",
          label:
            "If anything, what has prevented you from completing the purchase today?",
          id: 175622,
          orderNumber: 1,
          type: "single",
          maxPath: 4,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [
              {
                id: 533128582604,
                orderNumber: 1,
                destination: 175623,
                condition: "is",
                values: [317583],
                operator: "or",
              },
              {
                id: 1318427174470,
                orderNumber: 2,
                destination: 1775087,
                condition: "is",
                values: [4973811, 4973845],
                operator: "or",
              },
              {
                id: 1554306771458,
                orderNumber: 3,
                destination: 1775109,
                condition: "is",
                values: [317584],
                operator: "or",
              },
              {
                id: 1636640431451,
                orderNumber: 4,
                destination: 1775063,
                condition: "is",
                values: [317585],
                operator: "or",
              },
            ],
          },
          options: [
            {
              id: 317583,
              label: "I'm comparing other offers",
              orderNumber: 1,
            },
            {
              id: 4973811,
              label: "I'm not sure I need the items",
              orderNumber: 2,
            },
            {
              id: 4973845,
              label: "I'm putting together a larger purchase",
              orderNumber: 3,
            },
            {
              id: 317584,
              label: "The shipping costs ",
              orderNumber: 4,
            },
            {
              id: 317585,
              label: "Other",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "Help us ensure we have the best offer!",
          label: "What other sellers are you considering? ",
          id: 175623,
          orderNumber: 2,
          type: "text",
          maxPath: 3,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 317586,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "Would you like one of our consultants to get in touch?",
          id: 1775063,
          orderNumber: 3,
          type: "single",
          maxPath: 2,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [
              {
                id: 463350897287,
                orderNumber: 1,
                destination: 1775077,
                condition: "is",
                values: [4973846],
                operator: "or",
              },
              {
                id: 433575212836,
                orderNumber: 2,
                destination: 1775110,
                condition: "is",
                values: [4973847],
                operator: "or",
              },
            ],
          },
          options: [
            {
              id: 4973846,
              label: "Yes, sure!",
              orderNumber: 1,
            },
            {
              id: 4973847,
              label: "No, thanks!",
              orderNumber: 2,
            },
          ],
        },
        {
          description: "",
          label:
            "Our consultants can help with advice. Would you like them to get in touch?",
          id: 1775087,
          orderNumber: 4,
          type: "single",
          maxPath: 2,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [
              {
                id: 906802230115,
                orderNumber: 1,
                destination: 1775077,
                condition: "is",
                values: [4973897],
                operator: "or",
              },
              {
                id: 862069519764,
                orderNumber: 2,
                destination: 1775110,
                condition: "is",
                values: [4973898],
                operator: "or",
              },
            ],
          },
          options: [
            {
              id: 4973897,
              label: "Yes, sure!",
              orderNumber: 1,
            },
            {
              id: 4973898,
              label: "No, thanks",
              orderNumber: 2,
            },
          ],
        },
        {
          description: "",
          label: "Would you like to talk about the price?",
          id: 1775109,
          orderNumber: 5,
          type: "single",
          maxPath: 2,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [
              {
                id: 385600858014,
                orderNumber: 1,
                destination: 1775110,
                condition: "is",
                values: [4973965],
                operator: "or",
              },
            ],
          },
          options: [
            {
              id: 4973964,
              label: "Yes, sure!",
              orderNumber: 1,
            },
            {
              id: 4973965,
              label: "No, thanks",
              orderNumber: 2,
            },
          ],
        },
        {
          description: "",
          label: "Leave your contact details so we can to get in touch:",
          id: 1775077,
          orderNumber: 6,
          type: "form",
          maxPath: 1,
          settings: {
            disclaimer: false,
            disclaimerText: "",
            consent: true,
            consentText: "Do you consent to this?",
            logic: [],
          },
          options: [
            {
              id: 409136,
              label: "Name",
              orderNumber: 6,
              required: true,
              type: "first_name",
            },
            {
              id: 409137,
              label: "Business email ",
              orderNumber: 6,
              required: true,
              type: "email",
            },
            {
              id: 409150,
              label: "Phone number (if you prefer us to call)",
              orderNumber: 6,
              required: false,
              type: "phone",
            },
          ],
        },
        {
          description: "",
          label:
            "Thanks!<br /><br />We normally get in touch within 2 hours after a request. <br /><br />Talk to you soon! ",
          id: 175631,
          orderNumber: 7,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
        {
          description: "",
          label: "No problem! Thanks for your interest in us!",
          id: 1775110,
          orderNumber: 8,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Understand your audience's demographics",
    category: "",
    description: "",
    survey: {
      id: "f6ccebba5318db97",
      name: "Understand your audience's demographics",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "",
          label:
            "👋 <br />We'd love to better understand our audience. Would you like to help us?<br />(It'll take 2 minutes max!)<br />",
          id: 1705704,
          orderNumber: 1,
          type: "cta",
          maxPath: 11,
          settings: {
            text: "OK",
            type: "next",
          },
        },
        {
          description: "",
          label: "What is your age?",
          id: 175950,
          orderNumber: 2,
          type: "single",
          maxPath: 10,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [],
          },
          options: [
            {
              id: 318133,
              label: "Under 18",
              orderNumber: 1,
            },
            {
              id: 318134,
              label: "18-24 years old",
              orderNumber: 2,
            },
            {
              id: 318135,
              label: "25-34 years old",
              orderNumber: 3,
            },
            {
              id: 318136,
              label: "35-44 years old",
              orderNumber: 4,
            },
            {
              id: 318137,
              label: "45-54 years old",
              orderNumber: 5,
            },
            {
              id: 318138,
              label: "55+",
              orderNumber: 6,
            },
            {
              id: 4820407,
              label: "Prefer not to say",
              orderNumber: 7,
            },
          ],
        },
        {
          description: "",
          label:
            "What is the highest degree or level of education you have completed?",
          id: 175955,
          orderNumber: 3,
          type: "single",
          maxPath: 9,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [],
          },
          options: [
            {
              id: 4820394,
              label: "High school diploma",
              orderNumber: 1,
            },
            {
              id: 318159,
              label: "BA or equivalent",
              orderNumber: 2,
            },
            {
              id: 318160,
              label: "MA or equivalent",
              orderNumber: 3,
            },
            {
              id: 318161,
              label: "PhD",
              orderNumber: 4,
            },
            {
              id: 318162,
              label: "Other",
              orderNumber: 5,
            },
            {
              id: 4820393,
              label: "Prefer not to say",
              orderNumber: 6,
            },
          ],
        },
        {
          description: "",
          label:
            "Which of the following categories best describes your employment status?",
          id: 175958,
          orderNumber: 4,
          type: "single",
          maxPath: 8,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [],
          },
          options: [
            {
              id: 318163,
              label: "Employed, working full-time",
              orderNumber: 1,
            },
            {
              id: 318164,
              label: "Employed, working part-time",
              orderNumber: 2,
            },
            {
              id: 318169,
              label: "Self-employed",
              orderNumber: 3,
            },
            {
              id: 318165,
              label: "In-between jobs",
              orderNumber: 4,
            },
            {
              id: 318166,
              label: "Unemployed and not looking for employment",
              orderNumber: 5,
            },
            {
              id: 318167,
              label: "Retired",
              orderNumber: 6,
            },
            {
              id: 318170,
              label: "Other",
              orderNumber: 7,
            },
            {
              id: 4820395,
              label: "Prefer not to say",
              orderNumber: 8,
            },
          ],
        },
        {
          description: "",
          label: "What is your annual household income?",
          id: 1705692,
          orderNumber: 5,
          type: "single",
          maxPath: 7,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [],
          },
          options: [
            {
              id: 4820355,
              label: "Less than $25,000",
              orderNumber: 1,
            },
            {
              id: 4820356,
              label: "$25,000 - $50,000",
              orderNumber: 2,
            },
            {
              id: 4820357,
              label: "$50,000 - $100,000",
              orderNumber: 3,
            },
            {
              id: 4820359,
              label: "More than $100,000",
              orderNumber: 4,
            },
            {
              id: 4820360,
              label: "Prefer not to say",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "",
          label: "What is your living status?",
          id: 1705696,
          orderNumber: 6,
          type: "single",
          maxPath: 6,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [],
          },
          options: [
            {
              id: 4820364,
              label: "Homeowner",
              orderNumber: 1,
            },
            {
              id: 4820365,
              label: "Renter",
              orderNumber: 2,
            },
            {
              id: 4820366,
              label: "Other",
              orderNumber: 3,
            },
            {
              id: 4820367,
              label: "Prefer not to say",
              orderNumber: 4,
            },
          ],
        },
        {
          description: "",
          label: "What is your marital status?",
          id: 175961,
          orderNumber: 7,
          type: "single",
          maxPath: 5,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [],
          },
          options: [
            {
              id: 318172,
              label: "Married",
              orderNumber: 1,
            },
            {
              id: 318173,
              label: "Single",
              orderNumber: 2,
            },
            {
              id: 318180,
              label: "Other",
              orderNumber: 3,
            },
          ],
        },
        {
          description: "",
          label: "Please, specify your ethnicity.",
          id: 1705676,
          orderNumber: 8,
          type: "single",
          maxPath: 4,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [],
          },
          options: [
            {
              id: 4820239,
              label: "Caucasian",
              orderNumber: 1,
            },
            {
              id: 4820240,
              label: "African-American",
              orderNumber: 2,
            },
            {
              id: 4820255,
              label: "Latino or Hispanic",
              orderNumber: 3,
            },
            {
              id: 4820256,
              label: "Asian",
              orderNumber: 4,
            },
            {
              id: 4820257,
              label: "Native American",
              orderNumber: 5,
            },
            {
              id: 4820258,
              label: "Native Hawaiian or Pacific Islander",
              orderNumber: 6,
            },
            {
              id: 4820259,
              label: "Other",
              orderNumber: 7,
            },
            {
              id: 4820260,
              label: "Prefer not to say",
              orderNumber: 8,
            },
          ],
        },
        {
          description: "Select all that apply!",
          label: "What languages do you speak fluently?",
          id: 1705698,
          orderNumber: 9,
          type: "multiple",
          maxPath: 3,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [],
          },
          options: [
            {
              id: 4820369,
              label: "English",
              orderNumber: 1,
            },
            {
              id: 4820370,
              label: "Spanish",
              orderNumber: 2,
            },
            {
              id: 4820371,
              label: "Portuguese",
              orderNumber: 3,
            },
            {
              id: 4820372,
              label: "French",
              orderNumber: 4,
            },
            {
              id: 4820373,
              label: "Mandarin",
              orderNumber: 5,
            },
            {
              id: 4820374,
              label: "Arabic",
              orderNumber: 6,
            },
            {
              id: 4820375,
              label: "Other",
              orderNumber: 7,
            },
            {
              id: 4820376,
              label: "Prefer not to say",
              orderNumber: 8,
            },
          ],
        },
        {
          description: "",
          label: "How would you describe your political views?",
          id: 1705699,
          orderNumber: 10,
          type: "single",
          maxPath: 2,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [],
          },
          options: [
            {
              id: 4820377,
              label: "Liberal",
              orderNumber: 1,
            },
            {
              id: 4820378,
              label: "Somewhat liberal",
              orderNumber: 2,
            },
            {
              id: 4820390,
              label: "Somewhat conservative",
              orderNumber: 3,
            },
            {
              id: 4820391,
              label: "Conservative",
              orderNumber: 4,
            },
            {
              id: 4820392,
              label: "Prefer not to say",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "",
          label: "What is your gender?",
          id: 175951,
          orderNumber: 11,
          type: "single",
          maxPath: 1,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [],
          },
          options: [
            {
              id: 318139,
              label: "Male",
              orderNumber: 1,
            },
            {
              id: 318140,
              label: "Female",
              orderNumber: 2,
            },
            {
              id: 318143,
              label: "Prefer not to say",
              orderNumber: 3,
            },
          ],
        },
        {
          description: "Thank you",
          label: "Have a great day!",
          id: 175960,
          orderNumber: 12,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Check your pricing page clarity",
    category: "",
    description: "",
    survey: {
      id: "bc9e4c395e154c0b",
      name: "Check your pricing page clarity",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "",
          label: "Is our pricing clear to you?",
          id: 175770,
          orderNumber: 1,
          type: "single",
          maxPath: 3,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [
              {
                id: 797135286366,
                orderNumber: 1,
                destination: 1481638,
                condition: "is",
                values: [317795],
                operator: "or",
              },
            ],
          },
          options: [
            {
              id: 317795,
              label: "Yes",
              orderNumber: 1,
            },
            {
              id: 317796,
              label: "No",
              orderNumber: 2,
            },
          ],
        },
        {
          description: "",
          label: "What should we clarify?",
          id: 175771,
          orderNumber: 2,
          type: "text",
          maxPath: 2,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 317797,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "Is there anything else you'd like to tell us?",
          id: 1481638,
          orderNumber: 3,
          type: "text",
          maxPath: 1,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4235887,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "Thanks for your feedback! We appreciate it!",
          id: 1519743,
          orderNumber: 4,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Advantages Over Competition",
    category: "",
    description: "",
    survey: {
      id: "fc840de44a0209e5",
      name: "Advantages Over Competition",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "",
          label: "Why do you use our service rather than the alternatives?",
          id: 298210,
          orderNumber: 1,
          type: "multiple",
          maxPath: 2,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [],
          },
          options: [
            {
              id: 764574,
              label: "Quality of service",
              orderNumber: 1,
            },
            {
              id: 764575,
              label: "Quality of product",
              orderNumber: 2,
            },
            {
              id: 764576,
              label: "Good price",
              orderNumber: 3,
            },
            {
              id: 764577,
              label: "Available features",
              orderNumber: 4,
            },
            {
              id: 764578,
              label: "Design",
              orderNumber: 5,
            },
            {
              id: 764579,
              label: "Recommendation",
              orderNumber: 6,
            },
            {
              id: 764582,
              label: "Ease of use",
              orderNumber: 7,
            },
            {
              id: 764580,
              label: "Other",
              orderNumber: 8,
            },
          ],
        },
        {
          description: "",
          label:
            "In case you would like to share more details with us, use the space below:",
          id: 349447,
          orderNumber: 2,
          type: "text",
          maxPath: 1,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 941998,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "Thank you",
          label: "Have a great day",
          id: 174337,
          orderNumber: 3,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Segment your website traffic",
    category: "",
    description: "",
    survey: {
      id: "f38acd4b04c5d384",
      name: "Segment your website traffic",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "",
          label:
            "Do you target customers individuals, companies or organizations, or a mix of both?",
          id: 175919,
          orderNumber: 1,
          type: "single",
          maxPath: 3,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [],
          },
          options: [
            {
              id: 318089,
              label: "Individuals (B2C)",
              orderNumber: 1,
            },
            {
              id: 318090,
              label: "Companies or organizations (B2B)",
              orderNumber: 2,
            },
            {
              id: 318091,
              label: "Mix of both",
              orderNumber: 3,
            },
          ],
        },
        {
          description: "",
          label: "How competitive is the market for your target customer?",
          id: 175924,
          orderNumber: 2,
          type: "single",
          maxPath: 2,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [],
          },
          options: [
            {
              id: 318095,
              label: "Extremely competitive",
              orderNumber: 1,
            },
            {
              id: 318096,
              label: "Very competitive",
              orderNumber: 2,
            },
            {
              id: 318097,
              label: "Somewhat competitive",
              orderNumber: 3,
            },
            {
              id: 318098,
              label: "Not so competitive",
              orderNumber: 4,
            },
            {
              id: 318099,
              label: "Not at all competitive",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "",
          label: "What is your role?",
          id: 1481517,
          orderNumber: 3,
          type: "single",
          maxPath: 1,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [],
          },
          options: [
            {
              id: 4235479,
              label: "Sales",
              orderNumber: 1,
            },
            {
              id: 4235480,
              label: "Marketing",
              orderNumber: 2,
            },
            {
              id: 4235483,
              label: "Customer Service",
              orderNumber: 3,
            },
            {
              id: 4235484,
              label: "Product",
              orderNumber: 4,
            },
            {
              id: 4235485,
              label: "Development",
              orderNumber: 5,
            },
            {
              id: 4235486,
              label: "IT",
              orderNumber: 6,
            },
            {
              id: 4235489,
              label: "Finance",
              orderNumber: 7,
            },
            {
              id: 4235490,
              label: "Operations",
              orderNumber: 8,
            },
            {
              id: 4235491,
              label: "Other",
              orderNumber: 9,
            },
          ],
        },
        {
          description: "Thank you",
          label: "Have a great day",
          id: 175926,
          orderNumber: 4,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Discover churn reason (open-ended)",
    category: "",
    description: "",
    survey: {
      id: "af163aad704f4374",
      name: "Discover churn reason (open-ended)",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "We're sorry to see you go...",
          label: "What is the main reason you're canceling the account?",
          id: 174358,
          orderNumber: 1,
          type: "text",
          maxPath: 1,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 314550,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "Thank you for your feedback.",
          label: "Have a great day!",
          id: 174359,
          orderNumber: 2,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Evaluate the quality of the customer service you provide. HIDDEN. Equivalent created.",
    category: "",
    description: "",
    survey: {
      id: "b60c2b0d898770e2",
      name: "Evaluate the quality of the customer service you provide. HIDDEN. Equivalent created.",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "",
          label:
            "Are you satisfied with the with the customer service provide?",
          id: 295922,
          orderNumber: 1,
          type: "single",
          maxPath: 2,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [],
          },
          options: [
            {
              id: 753616,
              label: "Yes",
              orderNumber: 1,
            },
            {
              id: 753617,
              label: "No",
              orderNumber: 2,
            },
          ],
        },
        {
          description: "",
          label: "What is the main reason behind your answer?",
          id: 174310,
          orderNumber: 2,
          type: "text",
          maxPath: 1,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 314485,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "Thank you",
          label: "Have a great day",
          id: 298090,
          orderNumber: 3,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Discover what other content you can put on the website.",
    category: "",
    description: "",
    survey: {
      id: "0234b1385932bc35",
      name: "Discover what other content you can put on the website.",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "",
          label: "What other information would you like to see on this page?",
          id: 175751,
          orderNumber: 1,
          type: "text",
          maxPath: 2,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 317781,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "Got it!",
          label: "Is there anything else you'd like to share with us?",
          id: 1481852,
          orderNumber: 2,
          type: "text",
          maxPath: 1,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4236478,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "Thank you",
          label: "Have a great day",
          id: 175753,
          orderNumber: 3,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "See if your product meets user expectations",
    category: "",
    description: "",
    survey: {
      id: "9fc270b69d2a2ac5",
      name: "See if your product meets user expectations",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "",
          label: "Have you found what you're looking for? ",
          id: 1503312,
          orderNumber: 1,
          type: "single",
          maxPath: 2,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [
              {
                id: 1107967620045,
                orderNumber: 1,
                destination: 1503314,
                condition: "is",
                values: [4297465],
                operator: "or",
              },
            ],
          },
          options: [
            {
              id: 4297465,
              label: "Yes",
              orderNumber: 1,
            },
            {
              id: 4297466,
              label: "No",
              orderNumber: 2,
            },
          ],
        },
        {
          description: "Help us improve!",
          label: "What did you expect to find here?",
          id: 1503313,
          orderNumber: 2,
          type: "text",
          maxPath: 0,
          settings: {
            logic: [
              {
                id: 180483413220,
                orderNumber: 1,
                destination: -1,
                condition: "any_value",
                values: [],
              },
            ],
          },
          options: [
            {
              id: 4297467,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "How happy are you with the content of this page?",
          id: 1503314,
          orderNumber: 3,
          type: "smiley_scale",
          maxPath: 1,
          settings: {
            leftText: "Very unhappy",
            rightText: "Very happy",
            logic: [
              {
                id: 1171471043215,
                orderNumber: 1,
                destination: -1,
                condition: "is",
                values: [4297472],
                operator: "or",
              },
            ],
          },
          options: [
            {
              id: 4297468,
              label: "Extremely unsatisfied",
              orderNumber: 1,
            },
            {
              id: 4297469,
              label: "Unsatisfied",
              orderNumber: 2,
            },
            {
              id: 4297470,
              label: "Neutral",
              orderNumber: 3,
            },
            {
              id: 4297471,
              label: "Happy",
              orderNumber: 4,
            },
            {
              id: 4297472,
              label: "Extremely happy",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "",
          label: "What should we change?",
          id: 1503316,
          orderNumber: 4,
          type: "text",
          maxPath: 0,
          settings: {},
          options: [
            {
              id: 4297473,
              orderNumber: 1,
            },
          ],
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Evaluate user experience",
    category: "",
    description: "",
    survey: {
      id: "359e3d54f595e30c",
      name: "Evaluate user experience",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "",
          label: "How easy or difficult to use is [product name]?",
          id: 1586545,
          orderNumber: 1,
          type: "rating",
          maxPath: 6,
          settings: {
            shape: "stars",
            leftText: "Very difficult",
            rightText: "Very easy",
            logic: [
              {
                id: 1029405263040,
                orderNumber: 1,
                destination: 1586550,
                condition: "is",
                values: [4519491],
                operator: "or",
              },
            ],
          },
          options: [
            {
              id: 4519487,
              label: "1",
              orderNumber: 1,
            },
            {
              id: 4519488,
              label: "2",
              orderNumber: 2,
            },
            {
              id: 4519489,
              label: "3",
              orderNumber: 3,
            },
            {
              id: 4519490,
              label: "4",
              orderNumber: 4,
            },
            {
              id: 4519491,
              label: "5",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "",
          label: "What should we improve?",
          id: 1586546,
          orderNumber: 2,
          type: "text",
          maxPath: 5,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4519494,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "How would you rate [product name]'s usefulness to you?",
          id: 1586550,
          orderNumber: 3,
          type: "rating",
          maxPath: 4,
          settings: {
            shape: "stars",
            leftText: "Not useful at all",
            rightText: "Very useful",
            logic: [
              {
                id: 1437156698400,
                orderNumber: 1,
                destination: 1832458,
                condition: "is",
                values: [4519506],
                operator: "or",
              },
            ],
          },
          options: [
            {
              id: 4519502,
              label: "1",
              orderNumber: 1,
            },
            {
              id: 4519503,
              label: "2",
              orderNumber: 2,
            },
            {
              id: 4519504,
              label: "3",
              orderNumber: 3,
            },
            {
              id: 4519505,
              label: "4",
              orderNumber: 4,
            },
            {
              id: 4519506,
              label: "5",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "",
          label: "What can we do to make it more useful?",
          id: 1586551,
          orderNumber: 4,
          type: "text",
          maxPath: 3,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4519509,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label:
            "How would you rate the credibility of the information on [company name]'s website?",
          id: 1832458,
          orderNumber: 5,
          type: "rating",
          maxPath: 2,
          settings: {
            shape: "stars",
            leftText: "Not at all",
            rightText: "Very credible",
            logic: [
              {
                id: 1637943862917,
                orderNumber: 1,
                destination: 1586566,
                condition: "is",
                values: [5115564],
                operator: "or",
              },
            ],
          },
          options: [
            {
              id: 5115560,
              label: "1",
              orderNumber: 1,
            },
            {
              id: 5115561,
              label: "2",
              orderNumber: 2,
            },
            {
              id: 5115562,
              label: "3",
              orderNumber: 3,
            },
            {
              id: 5115563,
              label: "4",
              orderNumber: 4,
            },
            {
              id: 5115564,
              label: "5",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "",
          label: "Can you share more thoughts?",
          id: 1832461,
          orderNumber: 6,
          type: "text",
          maxPath: 1,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 5115567,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "Thanks for your feedback! :)",
          id: 1586566,
          orderNumber: 7,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Get new ideas for your content. HIDDEN",
    category: "",
    description: "",
    survey: {
      id: "342fb94c9a2ffa0f",
      name: "Get new ideas for your content. HIDDEN",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "",
          label: "What kind of topics would you like to read more about?",
          id: 175239,
          orderNumber: 1,
          type: "text",
          maxPath: 1,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 316794,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "Thank you",
          label: "Have a great day",
          id: 175240,
          orderNumber: 2,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Collect sign-ups for product updates",
    category: "",
    description: "",
    survey: {
      id: "1d1f4788b5b9b2fb",
      name: "Collect sign-ups for product updates",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "",
          label:
            "Would you like to receive updates on the latest changes to [product name]?",
          id: 175535,
          orderNumber: 1,
          type: "single",
          maxPath: 2,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [
              {
                id: 581546940852,
                orderNumber: 1,
                destination: 175537,
                condition: "is",
                values: [317411],
                operator: "or",
              },
            ],
          },
          options: [
            {
              id: 317410,
              label: "Yes, sure",
              orderNumber: 1,
            },
            {
              id: 317411,
              label: "No, thanks",
              orderNumber: 2,
            },
          ],
        },
        {
          description: "",
          label: "Help us get in touch ✍️ :",
          id: 175536,
          orderNumber: 2,
          type: "form",
          maxPath: 1,
          settings: {
            disclaimer: false,
            disclaimerText: "",
            consent: true,
            consentText: "Do you consent to this?",
            logic: [],
          },
          options: [
            {
              id: 26018,
              label: "First name ",
              orderNumber: 2,
              required: false,
              type: "first_name",
            },
            {
              id: 26019,
              label: "Email address ",
              orderNumber: 2,
              required: true,
              type: "email",
            },
          ],
        },
        {
          description: "Thanks for your interest! :)",
          label: "Stay in touch!",
          id: 175537,
          orderNumber: 3,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Gauge price sensitivity. HIDDEN. Duplicate",
    category: "",
    description: "",
    survey: {
      id: "e13a548a1407a6c9",
      name: "Gauge price sensitivity. HIDDEN. Duplicate",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "",
          label:
            "At what price would you consider <b>[your product]</b> to be so expensive that you would not consider buying it?",
          id: 188442,
          orderNumber: 1,
          type: "text",
          maxPath: 4,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 351092,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label:
            "At what price would you consider <b>[your product]</b> to be priced so low that you would feel the quality couldn’t be very good?",
          id: 188443,
          orderNumber: 2,
          type: "text",
          maxPath: 3,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 351093,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label:
            "At what price would you consider <b>[your product]</b> starting to get expensive, so that it is not out of the question, but you would have to give some thought to buying it?",
          id: 188444,
          orderNumber: 3,
          type: "text",
          maxPath: 2,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 351094,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label:
            "At what price would you consider <b>[your product]</b> to be a bargain - a great buy for the money?",
          id: 188445,
          orderNumber: 4,
          type: "text",
          maxPath: 1,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 351095,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "Thank you!",
          label: "Have a great day!",
          id: 188447,
          orderNumber: 5,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Invite users to a demo call. HIDDEN",
    category: "",
    description: "",
    survey: {
      id: "e9d83df41208c197",
      name: "Invite users to a demo call. HIDDEN",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "Hey there 👋",
          label: "Would you be interested in a quick demo call?",
          id: 176023,
          orderNumber: 1,
          type: "single",
          maxPath: 1,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [
              {
                id: 767055004659,
                orderNumber: 1,
                destination: 176025,
                condition: "is",
                values: [318400, 318401],
                operator: "or",
              },
            ],
          },
          options: [
            {
              id: 318399,
              label: "Yes, sure",
              orderNumber: 1,
            },
            {
              id: 318400,
              label: "Maybe later",
              orderNumber: 2,
            },
            {
              id: 318401,
              label: "No, thanks",
              orderNumber: 3,
            },
          ],
        },
        {
          description: "Great! We would love to do a demo for you!",
          label: "Please choose the best time for you:",
          id: 176024,
          orderNumber: 2,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "link",
          },
        },
        {
          description: "Thank you",
          label: "Have a great day!",
          id: 176025,
          orderNumber: 3,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Gauge user satisfaction with a new feature",
    category: "",
    description: "",
    survey: {
      id: "238558bb27e4bb3c",
      name: "Gauge user satisfaction with a new feature",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "",
          label: "How would you rate your satisfaction with the [feature]?",
          id: 1500197,
          orderNumber: 1,
          type: "smiley_scale",
          maxPath: 2,
          settings: {
            leftText: "Very bad",
            rightText: "Very good",
            logic: [
              {
                id: 1392036331819,
                orderNumber: 1,
                destination: 1500213,
                condition: "is",
                values: [4286926, 4286927],
                operator: "or",
              },
            ],
          },
          options: [
            {
              id: 4286923,
              label: "Extremely unsatisfied",
              orderNumber: 1,
            },
            {
              id: 4286924,
              label: "Unsatisfied",
              orderNumber: 2,
            },
            {
              id: 4286925,
              label: "Neutral",
              orderNumber: 3,
            },
            {
              id: 4286926,
              label: "Happy",
              orderNumber: 4,
            },
            {
              id: 4286927,
              label: "Extremely happy",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "Sorry to hear that!",
          label: "What is the problem with it?",
          id: 1500211,
          orderNumber: 2,
          type: "text",
          maxPath: 1,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4286971,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "If anything was possible, how would you like it to work?",
          id: 1500212,
          orderNumber: 3,
          type: "text",
          maxPath: 0,
          settings: {
            logic: [
              {
                id: 437831355266,
                orderNumber: 1,
                destination: -1,
                condition: "any_value",
                values: [],
              },
            ],
          },
          options: [
            {
              id: 4286972,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "Great to hear it!",
          label: "Could we make it even better?",
          id: 1500213,
          orderNumber: 4,
          type: "text",
          maxPath: 0,
          settings: {},
          options: [
            {
              id: 4286973,
              orderNumber: 1,
            },
          ],
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Discover issues with order completion",
    category: "",
    description: "",
    survey: {
      id: "8883f43f6457aec7",
      name: "Discover issues with order completion",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "👋 Sorry to see you go!",
          label: "What stopped you from completing you order? ",
          id: 175749,
          orderNumber: 1,
          type: "text",
          maxPath: 1,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 317780,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label:
            "Thank you for sharing! Your feedback will help us improve! 💛",
          id: 175750,
          orderNumber: 2,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Measure CES (Customer Effort Score) 3-point scale",
    category: "",
    description: "",
    survey: {
      id: "100a5710eb0f9379",
      name: "Measure CES (Customer Effort Score) 3-point scale",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "",
          label: "How easy was it for you to [perform an action]?",
          id: 1785726,
          orderNumber: 1,
          type: "rating",
          maxPath: 2,
          settings: {
            shape: "stars",
            leftText: "Very hard",
            rightText: "Very easy",
            logic: [
              {
                id: 1540986227334,
                orderNumber: 1,
                destination: 1785728,
                condition: "is",
                values: [5001362],
                operator: "or",
              },
            ],
          },
          options: [
            {
              id: 5001360,
              label: "1",
              orderNumber: 1,
            },
            {
              id: 5001361,
              label: "2",
              orderNumber: 2,
            },
            {
              id: 5001362,
              label: "3",
              orderNumber: 3,
            },
          ],
        },
        {
          description: "Sorry to hear that...",
          label: "What problems did you experience?",
          id: 1785727,
          orderNumber: 2,
          type: "text",
          maxPath: 1,
          settings: {
            logic: [
              {
                id: 1311246584406,
                orderNumber: 1,
                destination: -1,
                condition: "answered",
                values: [],
              },
            ],
          },
          options: [
            {
              id: 5001367,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "Do you want to share anything else?",
          id: 1785728,
          orderNumber: 3,
          type: "text",
          maxPath: 0,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 5001368,
              orderNumber: 1,
            },
          ],
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Improve site navigation",
    category: "",
    description: "",
    survey: {
      id: "e794b19da54e3f4b",
      name: "Improve site navigation",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "",
          label:
            "How easy or difficult was it for you to find the information you were looking for?",
          id: 1484922,
          orderNumber: 1,
          type: "rating",
          maxPath: 1,
          settings: {
            shape: "stars",
            leftText: "Very difficult",
            rightText: "Very easy",
            logic: [
              {
                id: 1082901164256,
                orderNumber: 1,
                destination: 1484924,
                condition: "is",
                values: [4245421, 4245422],
                operator: "or",
              },
            ],
          },
          options: [
            {
              id: 4245418,
              label: "1",
              orderNumber: 1,
            },
            {
              id: 4245419,
              label: "2",
              orderNumber: 2,
            },
            {
              id: 4245420,
              label: "3",
              orderNumber: 3,
            },
            {
              id: 4245421,
              label: "4",
              orderNumber: 4,
            },
            {
              id: 4245422,
              label: "5",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "Sorry to hear that!",
          label: "Please, tell us what problem you had.",
          id: 1486326,
          orderNumber: 2,
          type: "text",
          maxPath: 0,
          settings: {
            logic: [
              {
                id: 0,
                orderNumber: 1,
                destination: -1,
                condition: "any_value",
                values: [],
              },
            ],
          },
          options: [
            {
              id: 4250422,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "Great to hear it!",
          label:
            "Is there anything we can do to give you an even better experience?",
          id: 1484924,
          orderNumber: 3,
          type: "text",
          maxPath: 0,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4245426,
              orderNumber: 1,
            },
          ],
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Retention insights - change of roles. HIDDEN.",
    category: "",
    description: "",
    survey: {
      id: "47c789bfd59a0b6a",
      name: "Retention insights - change of roles. HIDDEN.",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "",
          label:
            "If you were in charge of our company, how would you persuade people like yourself to use us more often?",
          id: 175823,
          orderNumber: 1,
          type: "text",
          maxPath: 0,
          settings: {},
          options: [
            {
              id: 317931,
              orderNumber: 1,
            },
          ],
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Collect requests for new features",
    category: "",
    description: "",
    survey: {
      id: "2ef8ac4310ceb833",
      name: "Collect requests for new features",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "",
          label: "How would you rate your experience with our product?",
          id: 1515697,
          orderNumber: 1,
          type: "smiley_scale",
          maxPath: 2,
          settings: {
            leftText: "Very dissatisfying",
            rightText: "Very satisfying",
            logic: [],
          },
          options: [
            {
              id: 4333278,
              label: "Extremely unsatisfied",
              orderNumber: 1,
            },
            {
              id: 4333279,
              label: "Unsatisfied",
              orderNumber: 2,
            },
            {
              id: 4333280,
              label: "Neutral",
              orderNumber: 3,
            },
            {
              id: 4333281,
              label: "Happy",
              orderNumber: 4,
            },
            {
              id: 4333282,
              label: "Extremely happy",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "",
          label: "If any, what features would you like us to add?",
          id: 1483495,
          orderNumber: 2,
          type: "text",
          maxPath: 1,
          settings: {
            logic: [
              {
                id: 147057882312,
                orderNumber: 1,
                destination: 1527485,
                condition: "any_value",
                values: [],
              },
            ],
          },
          options: [
            {
              id: 4240645,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "Thank you for your feedback! We appreciate it!",
          id: 1527485,
          orderNumber: 3,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Get feedback about your new product",
    category: "",
    description: "",
    survey: {
      id: "92df2b961f640c0b",
      name: "Get feedback about your new product",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "",
          label: "How would you rate the overall quality of the product?",
          id: 1489502,
          orderNumber: 1,
          type: "rating",
          maxPath: 4,
          settings: {
            shape: "stars",
            leftText: "Very poor",
            rightText: "Very good",
            logic: [],
          },
          options: [
            {
              id: 4259511,
              label: "1",
              orderNumber: 1,
            },
            {
              id: 4259512,
              label: "2",
              orderNumber: 2,
            },
            {
              id: 4259513,
              label: "3",
              orderNumber: 3,
            },
            {
              id: 4259514,
              label: "4",
              orderNumber: 4,
            },
            {
              id: 4259515,
              label: "5",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "",
          label: "How easy is it to use our product?",
          id: 1489503,
          orderNumber: 2,
          type: "rating",
          maxPath: 3,
          settings: {
            shape: "stars",
            leftText: "Not difficult",
            rightText: "Very easy",
            logic: [],
          },
          options: [
            {
              id: 4259518,
              label: "1",
              orderNumber: 1,
            },
            {
              id: 4259519,
              label: "2",
              orderNumber: 2,
            },
            {
              id: 4259520,
              label: "3",
              orderNumber: 3,
            },
            {
              id: 4259521,
              label: "4",
              orderNumber: 4,
            },
            {
              id: 4259522,
              label: "5",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "",
          label: "How useful is our product to you?",
          id: 1489504,
          orderNumber: 3,
          type: "rating",
          maxPath: 2,
          settings: {
            shape: "stars",
            leftText: "Not useful ",
            rightText: "Very useful",
            logic: [],
          },
          options: [
            {
              id: 4259525,
              label: "1",
              orderNumber: 1,
            },
            {
              id: 4259526,
              label: "2",
              orderNumber: 2,
            },
            {
              id: 4259527,
              label: "3",
              orderNumber: 3,
            },
            {
              id: 4259528,
              label: "4",
              orderNumber: 4,
            },
            {
              id: 4259529,
              label: "5",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "Thanks for sharing!",
          label:
            "If anything, what would you like us to change in [product name]? ",
          id: 1489506,
          orderNumber: 4,
          type: "text",
          maxPath: 1,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4259539,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "Thank you! Have a great day! 👋",
          id: 1832215,
          orderNumber: 5,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Measure Help Center experience. HIDDEN",
    category: "",
    description: "",
    survey: {
      id: "059bcf15190c59b9",
      name: "Measure Help Center experience. HIDDEN",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "",
          label: "How would you rate your experience with our Help Center?",
          id: 1229522,
          orderNumber: 1,
          type: "smiley_scale",
          maxPath: 2,
          settings: {
            leftText: "Very unsatisfied",
            rightText: "Very satisfied",
            logic: [
              {
                id: 16711113410,
                orderNumber: 1,
                destination: 1229524,
                condition: "is",
                values: [3453323, 3453325],
                operator: "or",
              },
            ],
          },
          options: [
            {
              id: 3453324,
              label: "Extremely unsatisfied",
              orderNumber: 1,
            },
            {
              id: 3453321,
              label: "Unsatisfied",
              orderNumber: 2,
            },
            {
              id: 3453322,
              label: "Neutral",
              orderNumber: 3,
            },
            {
              id: 3453323,
              label: "Happy",
              orderNumber: 4,
            },
            {
              id: 3453325,
              label: "Extremely happy",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "Sorry to hear that...",
          label: "Could you please share what you were looking for?",
          id: 1229523,
          orderNumber: 2,
          type: "text",
          maxPath: 1,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 3453326,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "Is there anything we could improve?",
          id: 1229524,
          orderNumber: 3,
          type: "text",
          maxPath: 0,
          settings: {},
          options: [
            {
              id: 3453327,
              orderNumber: 1,
            },
          ],
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Test your idea for the brand's name",
    category: "",
    description: "",
    survey: {
      id: "e2f0bbc47af7a241",
      name: "Test your idea for the brand's name",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "Please, name 3 adjectives",
          label:
            "What adjectives come to your mind when you hear [a brand name]?",
          id: 1792634,
          orderNumber: 1,
          type: "text",
          maxPath: 1,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 5025019,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "How likable or not is [a brand name] to you?",
          id: 1792636,
          orderNumber: 2,
          type: "smiley_scale",
          maxPath: 0,
          settings: {
            leftText: "I don't like it at all",
            rightText: "I like it a lot",
            logic: [],
          },
          options: [
            {
              id: 5025021,
              label: "Extremely unsatisfied",
              orderNumber: 1,
            },
            {
              id: 5025022,
              label: "Unsatisfied",
              orderNumber: 2,
            },
            {
              id: 5025023,
              label: "Neutral",
              orderNumber: 3,
            },
            {
              id: 5025024,
              label: "Happy",
              orderNumber: 4,
            },
            {
              id: 5025025,
              label: "Extremely happy",
              orderNumber: 5,
            },
          ],
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Collect feedback on the design of your website or product",
    category: "",
    description: "",
    survey: {
      id: "1ccb4fca453dcff8",
      name: "Collect feedback on the design of your website or product",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "",
          label:
            "How would you rate the overall look &amp; feel of our [website/product]?",
          id: 1561955,
          orderNumber: 1,
          type: "rating",
          maxPath: 3,
          settings: {
            shape: "stars",
            leftText: "Very dissatisfying",
            rightText: "Very satisfying",
            logic: [
              {
                id: 1667769668216,
                orderNumber: 1,
                destination: 1561997,
                condition: "is",
                values: [4453745],
                operator: "or",
              },
            ],
          },
          options: [
            {
              id: 4453741,
              label: "1",
              orderNumber: 1,
            },
            {
              id: 4453742,
              label: "2",
              orderNumber: 2,
            },
            {
              id: 4453743,
              label: "3",
              orderNumber: 3,
            },
            {
              id: 4453744,
              label: "4",
              orderNumber: 4,
            },
            {
              id: 4453745,
              label: "5",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "",
          label: "What should we improve?",
          id: 1561995,
          orderNumber: 2,
          type: "text",
          maxPath: 2,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4453827,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "Is there anything else you'd like to tell us?",
          id: 1561996,
          orderNumber: 3,
          type: "text",
          maxPath: 1,
          settings: {
            logic: [
              {
                id: 13368895136,
                orderNumber: 1,
                destination: 1562005,
                condition: "any_value",
                values: [],
              },
            ],
          },
          options: [
            {
              id: 4453835,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "Is there anything you'd like to tell us? :)",
          id: 1561997,
          orderNumber: 4,
          type: "text",
          maxPath: 1,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4453836,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "OK. Thanks for the feedback! :)<br />Noted! ",
          id: 1562005,
          orderNumber: 5,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Explore ease of use (Single Ease Question survey)",
    category: "",
    description: "",
    survey: {
      id: "699859d57b0e7fd6",
      name: "Explore ease of use (Single Ease Question survey)",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "",
          label: "Overall, how difficult or easy was the task to complete?",
          id: 1400980,
          orderNumber: 1,
          type: "rating",
          maxPath: 1,
          settings: {
            shape: "stars",
            leftText: "Very difficult",
            rightText: "Very easy",
            logic: [],
          },
          options: [
            {
              id: 3981055,
              label: "1",
              orderNumber: 1,
            },
            {
              id: 3981056,
              label: "2",
              orderNumber: 2,
            },
            {
              id: 3981057,
              label: "3",
              orderNumber: 3,
            },
            {
              id: 3981058,
              label: "4",
              orderNumber: 4,
            },
            {
              id: 3981059,
              label: "5",
              orderNumber: 5,
            },
            {
              id: 3981060,
              label: "6",
              orderNumber: 6,
            },
            {
              id: 3981061,
              label: "7",
              orderNumber: 7,
            },
          ],
        },
        {
          description: "",
          label: "Tell us in a couple of words why you chose this score:",
          id: 1400981,
          orderNumber: 2,
          type: "text",
          maxPath: 0,
          settings: {},
          options: [
            {
              id: 3981062,
              orderNumber: 1,
            },
          ],
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Keep track of the User Effort Score (UES)",
    category: "",
    description: "",
    survey: {
      id: "2756c9fd00e7f710",
      name: "Keep track of the User Effort Score (UES)",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "How true is it for you?",
          label: "[Product] made it easy for me to<br />[do a job].",
          id: 1652340,
          orderNumber: 1,
          type: "rating",
          maxPath: 2,
          settings: {
            shape: "stars",
            leftText: "Not true at all",
            rightText: "Very true",
            logic: [
              {
                id: 98595615375,
                orderNumber: 1,
                destination: 1652343,
                condition: "is",
                values: [4694078],
                operator: "or",
              },
              {
                id: 38435578875,
                orderNumber: 2,
                destination: 1652344,
                condition: "is",
                values: [4694079],
                operator: "or",
              },
            ],
          },
          options: [
            {
              id: 4694075,
              label: "1",
              orderNumber: 1,
            },
            {
              id: 4694076,
              label: "2",
              orderNumber: 2,
            },
            {
              id: 4694077,
              label: "3",
              orderNumber: 3,
            },
            {
              id: 4694078,
              label: "4",
              orderNumber: 4,
            },
            {
              id: 4694079,
              label: "5",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "We'd love to hear some more!",
          label: "What was problematic for you?",
          id: 1652342,
          orderNumber: 2,
          type: "text",
          maxPath: 1,
          settings: {
            logic: [
              {
                id: 960889471875,
                orderNumber: 1,
                destination: 1652344,
                condition: "any_value",
                values: [],
              },
            ],
          },
          options: [
            {
              id: 4694085,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "Is there anything we should improve?",
          id: 1652343,
          orderNumber: 3,
          type: "text",
          maxPath: 1,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4694089,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "Thank you for your feedback!",
          id: 1652344,
          orderNumber: 4,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Collect feedback on your website",
    category: "",
    description: "",
    survey: {
      id: "aba2778c638a05ea",
      name: "Collect feedback on your website",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "",
          label: "How often do you visit our website?",
          id: 1562127,
          orderNumber: 1,
          type: "single",
          maxPath: 6,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [],
          },
          options: [
            {
              id: 4454306,
              label: "Daily",
              orderNumber: 1,
            },
            {
              id: 4454307,
              label: "At least once a week",
              orderNumber: 2,
            },
            {
              id: 4454308,
              label: "A couple times a month",
              orderNumber: 3,
            },
            {
              id: 4454318,
              label: "Less than once a month",
              orderNumber: 4,
            },
          ],
        },
        {
          description: "",
          label: "How easy is it to find the information you need?",
          id: 1562128,
          orderNumber: 2,
          type: "rating",
          maxPath: 5,
          settings: {
            shape: "stars",
            leftText: "Very difficult",
            rightText: "Very easy",
            logic: [],
          },
          options: [
            {
              id: 4454311,
              label: "1",
              orderNumber: 1,
            },
            {
              id: 4454312,
              label: "2",
              orderNumber: 2,
            },
            {
              id: 4454313,
              label: "3",
              orderNumber: 3,
            },
            {
              id: 4454314,
              label: "4",
              orderNumber: 4,
            },
            {
              id: 4454315,
              label: "5",
              orderNumber: 5,
            },
            {
              id: 4454316,
              label: "6",
              orderNumber: 6,
            },
            {
              id: 4454317,
              label: "7",
              orderNumber: 7,
            },
          ],
        },
        {
          description: "",
          label:
            "Which categories/parts of the website do you visit most often?",
          id: 1562138,
          orderNumber: 3,
          type: "text",
          maxPath: 4,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4454344,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "How would you rate your experience with our website?",
          id: 1562139,
          orderNumber: 4,
          type: "rating",
          maxPath: 3,
          settings: {
            shape: "stars",
            leftText: "Poor",
            rightText: "Excellent",
            logic: [
              {
                id: 843927163490,
                orderNumber: 1,
                destination: 1562150,
                condition: "is",
                values: [4454354],
                operator: "or",
              },
            ],
          },
          options: [
            {
              id: 4454350,
              label: "1",
              orderNumber: 1,
            },
            {
              id: 4454351,
              label: "2",
              orderNumber: 2,
            },
            {
              id: 4454352,
              label: "3",
              orderNumber: 3,
            },
            {
              id: 4454353,
              label: "4",
              orderNumber: 4,
            },
            {
              id: 4454354,
              label: "5",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "",
          label: "What should we improve?",
          id: 1562147,
          orderNumber: 5,
          type: "text",
          maxPath: 2,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4454376,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "Is there anything else you'd like to tell us?",
          id: 1562148,
          orderNumber: 6,
          type: "text",
          maxPath: 1,
          settings: {
            logic: [
              {
                id: 1373679462156,
                orderNumber: 1,
                destination: 1562152,
                condition: "any_value",
                values: [],
              },
            ],
          },
          options: [
            {
              id: 4454377,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "Is there anything you'd like to tell us? :)",
          id: 1562150,
          orderNumber: 7,
          type: "text",
          maxPath: 1,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4454383,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "Thanks for the feedback! We appreciate it! :)",
          id: 1562152,
          orderNumber: 8,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Identify visitor goals",
    category: "",
    description: "",
    survey: {
      id: "9aabf0dab5c574f1",
      name: "Identify visitor goals",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "This will help us improve your experience",
          label: "Have you achieved your goal on our website?",
          id: 1781874,
          orderNumber: 1,
          type: "single",
          maxPath: 4,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [
              {
                id: 409633403815,
                orderNumber: 1,
                destination: 1777559,
                condition: "is",
                values: [4992517],
                operator: "or",
              },
            ],
          },
          options: [
            {
              id: 4992516,
              label: "Yes",
              orderNumber: 1,
            },
            {
              id: 4992517,
              label: "No",
              orderNumber: 2,
            },
          ],
        },
        {
          description: "",
          label: "How easy or difficult was it to achieve your goal?",
          id: 1781875,
          orderNumber: 2,
          type: "rating",
          maxPath: 3,
          settings: {
            shape: "thumbs",
            leftText: "Very hard",
            rightText: "Very easy",
            logic: [],
          },
          options: [
            {
              id: 4992525,
              label: "1",
              orderNumber: 1,
            },
            {
              id: 4992526,
              label: "2",
              orderNumber: 2,
            },
            {
              id: 4992527,
              label: "3",
              orderNumber: 3,
            },
            {
              id: 4992528,
              label: "4",
              orderNumber: 4,
            },
            {
              id: 4992529,
              label: "5",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "",
          label: "Why did you visit our site today?\n",
          id: 1777559,
          orderNumber: 3,
          type: "single",
          maxPath: 2,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [],
          },
          options: [
            {
              id: 4980673,
              label: "Looking for a general product information",
              orderNumber: 1,
            },
            {
              id: 4980674,
              label: "Searching for information about specific features",
              orderNumber: 2,
            },
            {
              id: 4980676,
              label: "Sign up for an account",
              orderNumber: 3,
            },
            {
              id: 4980677,
              label: "Something else",
              orderNumber: 4,
            },
          ],
        },
        {
          description: "",
          label:
            "Is there anything we can improve to help you achieve your goal?",
          id: 1777576,
          orderNumber: 4,
          type: "text",
          maxPath: 1,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4980706,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label:
            "Thank you for your feedback!<br />This will help us improve your experience",
          id: 1777564,
          orderNumber: 5,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Tailor content to meet your audience' needs",
    category: "",
    description: "",
    survey: {
      id: "4609b0558cfaee97",
      name: "Tailor content to meet your audience' needs",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "",
          label: "How relevant was the article/video/podcast to you?",
          id: 1481572,
          orderNumber: 1,
          type: "smiley_scale",
          maxPath: 2,
          settings: {
            leftText: "Not at all",
            rightText: "Very much",
            logic: [
              {
                id: 833885280713,
                orderNumber: 1,
                destination: 1583410,
                condition: "is",
                values: [4235778],
                operator: "or",
              },
            ],
          },
          options: [
            {
              id: 4235774,
              label: "Extremely unsatisfied",
              orderNumber: 1,
            },
            {
              id: 4235775,
              label: "Unsatisfied",
              orderNumber: 2,
            },
            {
              id: 4235776,
              label: "Neutral",
              orderNumber: 3,
            },
            {
              id: 4235777,
              label: "Happy",
              orderNumber: 4,
            },
            {
              id: 4235778,
              label: "Extremely happy",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "Sorry to hear that...",
          label: "Please, tell us more ↓",
          id: 1481573,
          orderNumber: 2,
          type: "text",
          maxPath: 1,
          settings: {
            logic: [
              {
                id: 583218362663,
                orderNumber: 1,
                destination: 1481575,
                condition: "any_value",
                values: [],
              },
            ],
          },
          options: [
            {
              id: 4235779,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "Great to hear that! 🎉 :)",
          label: "Is there anything you'd like to tell us?",
          id: 1583410,
          orderNumber: 3,
          type: "text",
          maxPath: 1,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4511027,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "Noted. Thanks for the feedback! :)",
          id: 1481575,
          orderNumber: 4,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Understand cart abandonment",
    category: "",
    description: "",
    survey: {
      id: "8cf126975be7ab3c",
      name: "Understand cart abandonment",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "",
          label: "What stops you from completing the purchase?",
          id: 1518727,
          orderNumber: 1,
          type: "multiple",
          maxPath: 0,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
          },
          options: [
            {
              id: 4340222,
              label: "Still completing it",
              orderNumber: 1,
            },
            {
              id: 4340223,
              label: "Not sure if I can spend this much",
              orderNumber: 2,
            },
            {
              id: 4340225,
              label: "Comparing other offers",
              orderNumber: 3,
            },
            {
              id: 4340227,
              label: "Other",
              orderNumber: 4,
            },
          ],
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Source ideas for innovative solutions",
    category: "",
    description: "",
    survey: {
      id: "ccd3cf555bb7039d",
      name: "Source ideas for innovative solutions",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "",
          label:
            "👋 We're looking for ways to make your life easier! Would you like to answer a few questions?",
          id: 1814258,
          orderNumber: 1,
          type: "cta",
          maxPath: 8,
          settings: {
            text: "OK",
            type: "next",
          },
        },
        {
          description: "",
          label: "How do you go about [name an activity]?",
          id: 1814259,
          orderNumber: 2,
          type: "text",
          maxPath: 7,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 5074735,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "What aspect of [activity] takes the longest?",
          id: 1814260,
          orderNumber: 3,
          type: "text",
          maxPath: 6,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 5074736,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "How important would it be for you to do it quicker?",
          id: 1814261,
          orderNumber: 4,
          type: "rating",
          maxPath: 5,
          settings: {
            shape: "stars",
            leftText: "Not important at all",
            rightText: "Very important",
            logic: [],
          },
          options: [
            {
              id: 5074737,
              label: "1",
              orderNumber: 1,
            },
            {
              id: 5074738,
              label: "2",
              orderNumber: 2,
            },
            {
              id: 5074739,
              label: "3",
              orderNumber: 3,
            },
            {
              id: 5074740,
              label: "4",
              orderNumber: 4,
            },
            {
              id: 5074741,
              label: "5",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "",
          label: "If any, what tools do you use to accomplish [an activity]?",
          id: 1814262,
          orderNumber: 5,
          type: "text",
          maxPath: 4,
          settings: {
            logic: [
              {
                id: 973435380636,
                orderNumber: 1,
                destination: 1814266,
                condition: "not_answered",
                values: [],
              },
            ],
          },
          options: [
            {
              id: 5074744,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "How satisfied are your with the tools you use? ",
          id: 1814263,
          orderNumber: 6,
          type: "smiley_scale",
          maxPath: 3,
          settings: {
            leftText: "Very dissatisfied",
            rightText: "Very satisfied",
            logic: [
              {
                id: 699287170376,
                orderNumber: 1,
                destination: -1,
                condition: "between",
                values: [5074748, 5074749],
              },
            ],
          },
          options: [
            {
              id: 5074745,
              label: "Extremely unsatisfied",
              orderNumber: 1,
            },
            {
              id: 5074746,
              label: "Unsatisfied",
              orderNumber: 2,
            },
            {
              id: 5074747,
              label: "Neutral",
              orderNumber: 3,
            },
            {
              id: 5074748,
              label: "Happy",
              orderNumber: 4,
            },
            {
              id: 5074749,
              label: "Extremely happy",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "",
          label: "What do you find frustrating?",
          id: 1814264,
          orderNumber: 7,
          type: "text",
          maxPath: 2,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 5074750,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "If anything was possible, how would you like things to work?",
          id: 1814265,
          orderNumber: 8,
          type: "text",
          maxPath: 1,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 5074751,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "Thank you for taking the time! Your input matters a lot!",
          id: 1814266,
          orderNumber: 9,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Discover churn reason (choices) 2",
    category: "",
    description: "",
    survey: {
      id: "1f45cac3bb3291ac",
      name: "Discover churn reason (choices) 2",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "We're sorry to see you go.",
          label: "What made you cancel your subscription?",
          id: 1246423,
          orderNumber: 1,
          type: "single",
          maxPath: 4,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [
              {
                id: 439502443113,
                orderNumber: 1,
                destination: 1246430,
                condition: "is",
                values: [3507951, 3507952, 3507968, 3507969],
                operator: "or",
              },
            ],
          },
          options: [
            {
              id: 3507951,
              label: "Price",
              orderNumber: 1,
            },
            {
              id: 3507952,
              label: "Customer service",
              orderNumber: 2,
            },
            {
              id: 3507968,
              label: "Missing feature",
              orderNumber: 3,
            },
            {
              id: 3507969,
              label: "No longer needed",
              orderNumber: 4,
            },
            {
              id: 3507971,
              label: "Other",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "",
          label: "Could you explain what exactly made you cancel?",
          id: 1246428,
          orderNumber: 2,
          type: "text",
          maxPath: 3,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 3507979,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "How could we improve our product?",
          id: 1246430,
          orderNumber: 3,
          type: "text",
          maxPath: 2,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 3507981,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "What would make you sign up again?",
          id: 1246431,
          orderNumber: 4,
          type: "text",
          maxPath: 1,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 3507988,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "Thank you for your answers!",
          id: 1246433,
          orderNumber: 5,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Measure customer satisfaction with key aspects of your services",
    category: "",
    description: "",
    survey: {
      id: "487423b9c169c45e",
      name: "Measure customer satisfaction with key aspects of your services",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "",
          label: "How would you rate the quality of our product?",
          id: 1594719,
          orderNumber: 1,
          type: "rating",
          maxPath: 3,
          settings: {
            shape: "stars",
            leftText: "Very poor",
            rightText: "Great",
            logic: [],
          },
          options: [
            {
              id: 4540285,
              label: "1",
              orderNumber: 1,
            },
            {
              id: 4540286,
              label: "2",
              orderNumber: 2,
            },
            {
              id: 4540287,
              label: "3",
              orderNumber: 3,
            },
            {
              id: 4540288,
              label: "4",
              orderNumber: 4,
            },
            {
              id: 4540289,
              label: "5",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "",
          label: "How would you rate the quality of our customer service?",
          id: 1594721,
          orderNumber: 2,
          type: "rating",
          maxPath: 2,
          settings: {
            shape: "stars",
            leftText: "Very poor",
            rightText: "Great",
            logic: [],
          },
          options: [
            {
              id: 4540294,
              label: "1",
              orderNumber: 1,
            },
            {
              id: 4540295,
              label: "2",
              orderNumber: 2,
            },
            {
              id: 4540296,
              label: "3",
              orderNumber: 3,
            },
            {
              id: 4540297,
              label: "4",
              orderNumber: 4,
            },
            {
              id: 4540298,
              label: "5",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "",
          label: "How would you rate the value for money you receive?",
          id: 1594722,
          orderNumber: 3,
          type: "rating",
          maxPath: 1,
          settings: {
            shape: "stars",
            leftText: "Very poor",
            rightText: "Great",
            logic: [],
          },
          options: [
            {
              id: 4540299,
              label: "1",
              orderNumber: 1,
            },
            {
              id: 4540300,
              label: "2",
              orderNumber: 2,
            },
            {
              id: 4540301,
              label: "3",
              orderNumber: 3,
            },
            {
              id: 4540302,
              label: "4",
              orderNumber: 4,
            },
            {
              id: 4540303,
              label: "5",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "",
          label: "Thanks for your feedback! It means a lot to us!",
          id: 1594723,
          orderNumber: 4,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Improve the checkout experience",
    category: "",
    description: "",
    survey: {
      id: "5d10052384597995",
      name: "Improve the checkout experience",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "",
          label: "How easy or difficult was it for you to check out?",
          id: 1505112,
          orderNumber: 1,
          type: "rating",
          maxPath: 1,
          settings: {
            shape: "stars",
            leftText: "Very difficult",
            rightText: "Very easy",
            logic: [
              {
                id: 713577431175,
                orderNumber: 1,
                destination: 1505113,
                condition: "is",
                values: [4303745, 4303746],
                operator: "or",
              },
            ],
          },
          options: [
            {
              id: 4303742,
              label: "1",
              orderNumber: 1,
            },
            {
              id: 4303743,
              label: "2",
              orderNumber: 2,
            },
            {
              id: 4303744,
              label: "3",
              orderNumber: 3,
            },
            {
              id: 4303745,
              label: "4",
              orderNumber: 4,
            },
            {
              id: 4303746,
              label: "5",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "Sorry about that...",
          label: "What should we improve?",
          id: 175216,
          orderNumber: 2,
          type: "text",
          maxPath: 0,
          settings: {
            logic: [
              {
                id: 685168025250,
                orderNumber: 1,
                destination: -1,
                condition: "any_value",
                values: [],
              },
            ],
          },
          options: [
            {
              id: 316762,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "Great!",
          label: "Is there anything you'd like us to improve or change?",
          id: 1505113,
          orderNumber: 3,
          type: "text",
          maxPath: 0,
          settings: {},
          options: [
            {
              id: 4303749,
              orderNumber: 1,
            },
          ],
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Uncover traffic sources (choices)",
    category: "",
    description: "",
    survey: {
      id: "c490b5d2c59d5907",
      name: "Uncover traffic sources (choices)",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "Hi there! Could you please tell us:",
          label: "How did you discover our company?",
          id: 1890747,
          orderNumber: 1,
          type: "single",
          maxPath: 6,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [
              {
                id: 108575153349,
                orderNumber: 1,
                destination: 1890752,
                condition: "is",
                values: [5264165],
                operator: "or",
              },
              {
                id: 254222357574,
                orderNumber: 2,
                destination: 1890753,
                condition: "is",
                values: [5264166],
                operator: "or",
              },
              {
                id: 1614926924328,
                orderNumber: 3,
                destination: 1890754,
                condition: "is",
                values: [5264167, 5264169],
                operator: "or",
              },
              {
                id: 1344514091002,
                orderNumber: 4,
                destination: 1890751,
                condition: "is",
                values: [5264168],
                operator: "or",
              },
            ],
          },
          options: [
            {
              id: 5264164,
              label: "Search engine",
              orderNumber: 1,
            },
            {
              id: 5264165,
              label: "Social media",
              orderNumber: 2,
            },
            {
              id: 5264166,
              label: "Another website",
              orderNumber: 3,
            },
            {
              id: 5264167,
              label: "Referral",
              orderNumber: 4,
            },
            {
              id: 5264168,
              label: "Ad",
              orderNumber: 5,
            },
            {
              id: 5264169,
              label: "Other",
              orderNumber: 6,
            },
          ],
        },
        {
          description: "",
          label: "Can you remember which search engine?",
          id: 1890748,
          orderNumber: 2,
          type: "single",
          maxPath: 5,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [
              {
                id: 176457976968,
                orderNumber: 1,
                destination: 1890754,
                condition: "is",
                values: [5264179],
                operator: "or",
              },
            ],
          },
          options: [
            {
              id: 5264170,
              label: "Google",
              orderNumber: 1,
            },
            {
              id: 5264171,
              label: "Yahoo",
              orderNumber: 2,
            },
            {
              id: 5264178,
              label: "Bing",
              orderNumber: 3,
            },
            {
              id: 5264179,
              label: "Other",
              orderNumber: 4,
            },
          ],
        },
        {
          description: "",
          label: "Can you remember where you saw the ad?",
          id: 1890751,
          orderNumber: 3,
          type: "single",
          maxPath: 4,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [
              {
                id: 1058280001958,
                orderNumber: 1,
                destination: 1890754,
                condition: "is",
                values: [5264184],
                operator: "or",
              },
            ],
          },
          options: [
            {
              id: 5264181,
              label: "Google search",
              orderNumber: 1,
            },
            {
              id: 5264182,
              label: "Facebook",
              orderNumber: 2,
            },
            {
              id: 5264183,
              label: "LinkedIn",
              orderNumber: 3,
            },
            {
              id: 5264184,
              label: "Other",
              orderNumber: 4,
            },
          ],
        },
        {
          description: "",
          label: "Can you remember where exactly?",
          id: 1890752,
          orderNumber: 4,
          type: "single",
          maxPath: 3,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [
              {
                id: 505241664489,
                orderNumber: 1,
                destination: 1890754,
                condition: "is",
                values: [5264189],
                operator: "or",
              },
            ],
          },
          options: [
            {
              id: 5264185,
              label: "LinkedIn",
              orderNumber: 1,
            },
            {
              id: 5264186,
              label: "Facebook",
              orderNumber: 2,
            },
            {
              id: 5264187,
              label: "Twitter",
              orderNumber: 3,
            },
            {
              id: 5264188,
              label: "Instagram",
              orderNumber: 4,
            },
            {
              id: 5264189,
              label: "Other",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "",
          label: "Can you remember which site?",
          id: 1890753,
          orderNumber: 5,
          type: "text",
          maxPath: 2,
          settings: {
            logic: [
              {
                id: 1541257718139,
                orderNumber: 1,
                destination: 1890767,
                condition: "answered",
                values: [],
              },
            ],
          },
          options: [
            {
              id: 5264190,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "Can you specify?",
          id: 1890754,
          orderNumber: 6,
          type: "text",
          maxPath: 1,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 5264192,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "Thanks for sharing!",
          id: 1890767,
          orderNumber: 7,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Customer Effort Score (CES) 7 point HIDDEN",
    category: "",
    description: "",
    survey: {
      id: "6fa1e638be2363b4",
      name: "Customer Effort Score (CES) 7 point HIDDEN",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "",
          label: "How would you rate your experience with our product?",
          id: 1482004,
          orderNumber: 1,
          type: "csat",
          maxPath: 2,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4237087,
              label: "Very unsatisfied",
              orderNumber: 1,
            },
            {
              id: 4237088,
              label: "Unsatisfied",
              orderNumber: 2,
            },
            {
              id: 4237089,
              label: "Neutral",
              orderNumber: 3,
            },
            {
              id: 4237090,
              label: "Satisfied",
              orderNumber: 4,
            },
            {
              id: 4237091,
              label: "Very satisfied",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "",
          label: "What is the reason for your score?",
          id: 1482005,
          orderNumber: 2,
          type: "text",
          maxPath: 1,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4237034,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "Thank you",
          label: "Have a great day!",
          id: 176019,
          orderNumber: 3,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Improve the ease of use (5-point scale with NPS)",
    category: "",
    description: "",
    survey: {
      id: "b7b8436d6ee913a1",
      name: "Improve the ease of use (5-point scale with NPS)",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "",
          label: "How easy or difficult is it to use [product name]?",
          id: 1483502,
          orderNumber: 1,
          type: "rating",
          maxPath: 3,
          settings: {
            shape: "stars",
            leftText: "Very difficult",
            rightText: "Very easy",
            logic: [
              {
                id: 523067786231,
                orderNumber: 1,
                destination: 1574382,
                condition: "is",
                values: [4486502, 4486504],
                operator: "or",
              },
              {
                id: 990987850591,
                orderNumber: 2,
                destination: 1483504,
                condition: "is",
                values: [4486503],
                operator: "or",
              },
            ],
          },
          options: [
            {
              id: 4486500,
              label: "1",
              orderNumber: 1,
            },
            {
              id: 4486501,
              label: "2",
              orderNumber: 2,
            },
            {
              id: 4486502,
              label: "3",
              orderNumber: 3,
            },
            {
              id: 4486503,
              label: "4",
              orderNumber: 4,
            },
            {
              id: 4486504,
              label: "5",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "",
          label: "What problems did you encounter while using [product name]?",
          id: 1483503,
          orderNumber: 2,
          type: "text",
          maxPath: 2,
          settings: {
            logic: [
              {
                id: 862309832892,
                orderNumber: 1,
                destination: 1574382,
                condition: "any_value",
                values: [],
              },
            ],
          },
          options: [
            {
              id: 4240687,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "What would make [product name] even easier to use for you?",
          id: 1483504,
          orderNumber: 3,
          type: "text",
          maxPath: 2,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4240688,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label:
            "How likely is it that you will recommend [product name] to someone like you?",
          id: 1574382,
          orderNumber: 4,
          type: "nps",
          maxPath: 1,
          settings: {
            leftText: "Not likely",
            rightText: "Very likely",
            logic: [],
          },
        },
        {
          description: "",
          label: "Thanks for your feedback! :)",
          id: 1580864,
          orderNumber: 5,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Run beta feature research",
    category: "",
    description: "",
    survey: {
      id: "2fc594f82c5ad1ec",
      name: "Run beta feature research",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "",
          label: "Have you tried out [beta feature] yet?",
          id: 1528608,
          orderNumber: 1,
          type: "single",
          maxPath: 5,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [
              {
                id: 1283414259456,
                orderNumber: 1,
                destination: 1528620,
                condition: "is",
                values: [4367913],
                operator: "or",
              },
              {
                id: 1114321137714,
                orderNumber: 2,
                destination: 2086745,
                condition: "is",
                values: [4367914],
                operator: "or",
              },
            ],
          },
          options: [
            {
              id: 4367913,
              label: "Yes",
              orderNumber: 1,
            },
            {
              id: 4367914,
              label: "No",
              orderNumber: 2,
            },
          ],
        },
        {
          description: "",
          label:
            "Please rate your overall experience with using [beta feature].",
          id: 1528620,
          orderNumber: 2,
          type: "rating",
          maxPath: 4,
          settings: {
            shape: "stars",
            leftText: "Very dissatisfying",
            rightText: "Very satsifying",
            logic: [
              {
                id: 1408747683231,
                orderNumber: 1,
                destination: 1528623,
                condition: "is",
                values: [4367940],
                operator: "or",
              },
            ],
          },
          options: [
            {
              id: 4367936,
              label: "1",
              orderNumber: 1,
            },
            {
              id: 4367937,
              label: "2",
              orderNumber: 2,
            },
            {
              id: 4367938,
              label: "3",
              orderNumber: 3,
            },
            {
              id: 4367939,
              label: "4",
              orderNumber: 4,
            },
            {
              id: 4367940,
              label: "5",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "",
          label: "What would you improve?",
          id: 1528621,
          orderNumber: 3,
          type: "text",
          maxPath: 3,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4367946,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "Is there anything else you'd like to tell us?",
          id: 2086744,
          orderNumber: 4,
          type: "single",
          maxPath: 2,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [],
          },
          options: [
            {
              id: 5709923,
              label: "No, thanks",
              orderNumber: 1,
            },
            {
              id: 5709924,
              label: "Yes, actually...",
              orderNumber: 2,
            },
          ],
        },
        {
          description: "",
          label: "Share your thoughts :)",
          id: 1528624,
          orderNumber: 5,
          type: "text",
          maxPath: 1,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4367951,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "Thanks for your feedback! Have a great day!",
          id: 1528623,
          orderNumber: 6,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
        {
          description: "",
          label: "Feel free to give it a try!",
          id: 2086745,
          orderNumber: 7,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Measure satisfaction after a completed purchase",
    category: "",
    description: "",
    survey: {
      id: "fd7ef463a8e4cba5",
      name: "Measure satisfaction after a completed purchase",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "",
          label: "How happy are you with the overall purchase experience?",
          id: 1584914,
          orderNumber: 1,
          type: "rating",
          maxPath: 7,
          settings: {
            shape: "stars",
            leftText: "Very unhappy",
            rightText: "Very happy",
            logic: [],
          },
          options: [
            {
              id: 4514770,
              label: "1",
              orderNumber: 1,
            },
            {
              id: 4514771,
              label: "2",
              orderNumber: 2,
            },
            {
              id: 4514772,
              label: "3",
              orderNumber: 3,
            },
            {
              id: 4514773,
              label: "4",
              orderNumber: 4,
            },
            {
              id: 4514774,
              label: "5",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "",
          label: "How happy are you with the price of [product name]?",
          id: 1943093,
          orderNumber: 2,
          type: "rating",
          maxPath: 6,
          settings: {
            shape: "stars",
            leftText: "Very unhappy",
            rightText: "Very happy",
            logic: [],
          },
          options: [
            {
              id: 5386882,
              label: "1",
              orderNumber: 1,
            },
            {
              id: 5386883,
              label: "2",
              orderNumber: 2,
            },
            {
              id: 5386884,
              label: "3",
              orderNumber: 3,
            },
            {
              id: 5386885,
              label: "4",
              orderNumber: 4,
            },
            {
              id: 5386886,
              label: "5",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "",
          label: "How happy are you with the delivery time?",
          id: 1943094,
          orderNumber: 3,
          type: "rating",
          maxPath: 5,
          settings: {
            shape: "stars",
            leftText: "Very unhappy",
            rightText: "Very happy",
            logic: [],
          },
          options: [
            {
              id: 5386887,
              label: "1",
              orderNumber: 1,
            },
            {
              id: 5386888,
              label: "2",
              orderNumber: 2,
            },
            {
              id: 5386889,
              label: "3",
              orderNumber: 3,
            },
            {
              id: 5386890,
              label: "4",
              orderNumber: 4,
            },
            {
              id: 5386891,
              label: "5",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "",
          label: "How happy are you with the quality of products?",
          id: 1943095,
          orderNumber: 4,
          type: "rating",
          maxPath: 4,
          settings: {
            shape: "stars",
            leftText: "Very unhappy",
            rightText: "Very happy",
            logic: [],
          },
          options: [
            {
              id: 5386899,
              label: "1",
              orderNumber: 1,
            },
            {
              id: 5386900,
              label: "2",
              orderNumber: 2,
            },
            {
              id: 5386901,
              label: "3",
              orderNumber: 3,
            },
            {
              id: 5386902,
              label: "4",
              orderNumber: 4,
            },
            {
              id: 5386903,
              label: "5",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "",
          label: "Have you ever contacted our customer support?<br />",
          id: 1584936,
          orderNumber: 5,
          type: "single",
          maxPath: 3,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [
              {
                id: 1614325145538,
                orderNumber: 1,
                destination: 1622400,
                condition: "is",
                values: [4514827],
                operator: "or",
              },
            ],
          },
          options: [
            {
              id: 4514826,
              label: "Yes",
              orderNumber: 1,
            },
            {
              id: 4514827,
              label: "No",
              orderNumber: 2,
            },
          ],
        },
        {
          description: "",
          label: "How happy are you with the experience?",
          id: 1584951,
          orderNumber: 6,
          type: "rating",
          maxPath: 2,
          settings: {
            shape: "stars",
            leftText: "Very unhappy",
            rightText: "Very happy",
            logic: [
              {
                id: 1430499300808,
                orderNumber: 1,
                destination: 1622400,
                condition: "is",
                values: [4514877],
                operator: "or",
              },
            ],
          },
          options: [
            {
              id: 4514873,
              label: "1",
              orderNumber: 1,
            },
            {
              id: 4514874,
              label: "2",
              orderNumber: 2,
            },
            {
              id: 4514875,
              label: "3",
              orderNumber: 3,
            },
            {
              id: 4514876,
              label: "4",
              orderNumber: 4,
            },
            {
              id: 4514877,
              label: "5",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "",
          label: "What should we improve?",
          id: 1584953,
          orderNumber: 7,
          type: "text",
          maxPath: 1,
          settings: {
            logic: [
              {
                id: 738645667006,
                orderNumber: 1,
                destination: 1584954,
                condition: "any_value",
                values: [],
              },
            ],
          },
          options: [
            {
              id: 4514881,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label:
            "If anything, what would you like us to improve your shopping experience?",
          id: 1622400,
          orderNumber: 8,
          type: "text",
          maxPath: 1,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4604227,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "Thanks for sharing!",
          id: 1584954,
          orderNumber: 9,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Understand frictions to try out your product",
    category: "",
    description: "",
    survey: {
      id: "1878e24bc14cbf69",
      name: "Understand frictions to try out your product",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "",
          label:
            "Do you have any questions before starting a free 14-day trial?",
          id: 175296,
          orderNumber: 1,
          type: "text",
          maxPath: 3,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 316904,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "How would you like us to get in touch?",
          id: 1681289,
          orderNumber: 2,
          type: "single",
          maxPath: 2,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [
              {
                id: 1191502711261,
                orderNumber: 1,
                destination: 1681292,
                condition: "is",
                values: [4765681],
                operator: "or",
              },
              {
                id: 370986818934,
                orderNumber: 2,
                destination: 1681296,
                condition: "is",
                values: [4765684],
                operator: "or",
              },
            ],
          },
          options: [
            {
              id: 4765680,
              label: "I prefer an email.",
              orderNumber: 1,
            },
            {
              id: 4765681,
              label: "Call me. Let's talk. ",
              orderNumber: 2,
            },
            {
              id: 4765684,
              label: "I don't wish to be contacted about the matter.",
              orderNumber: 3,
            },
          ],
        },
        {
          description: "We'll be happy to help!",
          label: "Help us to get in touch:",
          id: 1681287,
          orderNumber: 3,
          type: "form",
          maxPath: 1,
          settings: {
            disclaimer: false,
            disclaimerText: "",
            consent: true,
            consentText: "Do you consent to this?",
            logic: [
              {
                id: 539769110431,
                orderNumber: 1,
                destination: 175297,
              },
            ],
          },
          options: [
            {
              id: 371409,
              label: "What's your name?",
              orderNumber: 3,
              required: false,
              type: "first_name",
            },
            {
              id: 371410,
              label: "What's your email address?",
              orderNumber: 3,
              required: false,
              type: "email",
            },
          ],
        },
        {
          description: "We'll be happy to help!",
          label: "Help us to get in touch:",
          id: 1681292,
          orderNumber: 4,
          type: "form",
          maxPath: 1,
          settings: {
            disclaimer: false,
            disclaimerText: "",
            consent: true,
            consentText: "Do you consent to this?",
            logic: [],
          },
          options: [
            {
              id: 371412,
              label: "What's your name?",
              orderNumber: 4,
              required: false,
              type: "first_name",
            },
            {
              id: 371413,
              label: "What's your phone number?",
              orderNumber: 4,
              required: false,
              type: "phone",
            },
          ],
        },
        {
          description: "",
          label: "We normally get in touch within 2 hours. Talk to you soon!",
          id: 175297,
          orderNumber: 5,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
        {
          description: "",
          label: "No worries! Thank you for taking interest in us!",
          id: 1681296,
          orderNumber: 6,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Measure Customer Effort Score (CES), 5-point scale",
    category: "",
    description: "",
    survey: {
      id: "6275bc10b53f50fa",
      name: "Measure Customer Effort Score (CES), 5-point scale",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "Based on your last experience...",
          label: "How easy or difficult was it to interact with our company?",
          id: 1655002,
          orderNumber: 1,
          type: "rating",
          maxPath: 1,
          settings: {
            shape: "stars",
            leftText: "Very difficult",
            rightText: "Very easy",
            logic: [
              {
                id: 1460577791612,
                orderNumber: 1,
                destination: 1655005,
                condition: "is",
                values: [4701583],
                operator: "or",
              },
              {
                id: 925812467452,
                orderNumber: 2,
                destination: -1,
                condition: "is",
                values: [4701584],
                operator: "or",
              },
            ],
          },
          options: [
            {
              id: 4701580,
              label: "1",
              orderNumber: 1,
            },
            {
              id: 4701581,
              label: "2",
              orderNumber: 2,
            },
            {
              id: 4701582,
              label: "3",
              orderNumber: 3,
            },
            {
              id: 4701583,
              label: "4",
              orderNumber: 4,
            },
            {
              id: 4701584,
              label: "5",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "Sorry to hear that...",
          label: "What should we improve on?",
          id: 1655004,
          orderNumber: 2,
          type: "text",
          maxPath: 0,
          settings: {
            logic: [
              {
                id: 820530544258,
                orderNumber: 1,
                destination: -1,
                condition: "any_value",
                values: [],
              },
            ],
          },
          options: [
            {
              id: 4701594,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "Is there anything you'd like us to improve?",
          id: 1655005,
          orderNumber: 3,
          type: "text",
          maxPath: 0,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4701596,
              orderNumber: 1,
            },
          ],
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Collect reviews with an NPS survey",
    category: "",
    description: "",
    survey: {
      id: "71c6fb89bdb209f8",
      name: "Collect reviews with an NPS survey",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "",
          label:
            "How likely is it that you will recommend our product to a friend or colleague?",
          id: 1484669,
          orderNumber: 1,
          type: "nps",
          maxPath: 3,
          settings: {
            leftText: "Not likely",
            rightText: "Very likely",
            logic: [
              {
                id: 890718650289,
                orderNumber: 1,
                destination: 1484678,
                condition: "between",
                values: [9, 10],
              },
            ],
          },
        },
        {
          description: "Sorry to hear that!",
          label: "What should we improve?",
          id: 1533473,
          orderNumber: 2,
          type: "text",
          maxPath: 1,
          settings: {
            logic: [
              {
                id: 549805695957,
                orderNumber: 1,
                destination: 1533477,
                condition: "any_value",
                values: [],
              },
            ],
          },
          options: [
            {
              id: 4381611,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "Would you mind leaving us a short review?",
          id: 1484678,
          orderNumber: 3,
          type: "single",
          maxPath: 2,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [
              {
                id: 568188257220,
                orderNumber: 1,
                destination: 1533477,
                condition: "is",
                values: [4244602],
                operator: "or",
              },
            ],
          },
          options: [
            {
              id: 4244601,
              label: "Sure, why not!",
              orderNumber: 1,
            },
            {
              id: 4244602,
              label: "Sorry, maybe another time!",
              orderNumber: 2,
            },
          ],
        },
        {
          description: "",
          label:
            "Fantastic! Leave your email address so that we can contact you!",
          id: 1484688,
          orderNumber: 4,
          type: "form",
          maxPath: 1,
          settings: {
            disclaimer: false,
            disclaimerText: "",
            consent: true,
            consentText: "Do you consent to this?",
            logic: [],
          },
          options: [
            {
              id: 285853,
              label: "Name",
              orderNumber: 4,
              required: false,
              type: "first_name",
            },
            {
              id: 285854,
              label: "Email address",
              orderNumber: 4,
              required: false,
              type: "email",
            },
          ],
        },
        {
          description: "",
          label: "Thanks! We'll get in touch!",
          id: 1533481,
          orderNumber: 5,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
        {
          description: "",
          label: "OK. Thanks for your feedback!",
          id: 1533477,
          orderNumber: 6,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Verify the usefulness of the help articles",
    category: "",
    description: "",
    survey: {
      id: "4ebc44f18a111ebb",
      name: "Verify the usefulness of the help articles",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "",
          label: "Was this article helpful?",
          id: 175837,
          orderNumber: 1,
          type: "single",
          maxPath: 2,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [
              {
                id: 1514028350820,
                orderNumber: 1,
                destination: 175840,
                condition: "is",
                values: [317967],
                operator: "or",
              },
            ],
          },
          options: [
            {
              id: 317967,
              label: "Yes",
              orderNumber: 1,
            },
            {
              id: 317968,
              label: "No",
              orderNumber: 2,
            },
          ],
        },
        {
          description: "Sorry to hear...",
          label: "Tell us what problem you haven't found a solution to:",
          id: 175838,
          orderNumber: 2,
          type: "text",
          maxPath: 1,
          settings: {
            logic: [
              {
                id: 822187581240,
                orderNumber: 1,
                destination: 1630257,
                condition: "any_value",
                values: [],
              },
            ],
          },
          options: [
            {
              id: 317969,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "Happy to hear that :)",
          label: "Thank you for your feedback!",
          id: 175840,
          orderNumber: 3,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
        {
          description: "",
          label:
            "Thank you for your feedback.<br />We'll take it into account!",
          id: 1630257,
          orderNumber: 4,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Measure CSAT with 10-point rating scale",
    category: "",
    description: "",
    survey: {
      id: "01973e23290df5a6",
      name: "Measure CSAT with 10-point rating scale",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "Hi there! Mind answering one question?",
          label: "How would you rate your experience with our company?",
          id: 1721103,
          orderNumber: 1,
          type: "rating",
          maxPath: 2,
          settings: {
            shape: "stars",
            leftText: "Very dissatisfying",
            rightText: "Very satisfying",
            logic: [],
          },
          options: [
            {
              id: 4847761,
              label: "1",
              orderNumber: 1,
            },
            {
              id: 4847762,
              label: "2",
              orderNumber: 2,
            },
            {
              id: 4847763,
              label: "3",
              orderNumber: 3,
            },
            {
              id: 4847764,
              label: "4",
              orderNumber: 4,
            },
            {
              id: 4847765,
              label: "5",
              orderNumber: 5,
            },
            {
              id: 4847766,
              label: "6",
              orderNumber: 6,
            },
            {
              id: 4847767,
              label: "7",
              orderNumber: 7,
            },
            {
              id: 4847768,
              label: "8",
              orderNumber: 8,
            },
            {
              id: 4847769,
              label: "9",
              orderNumber: 9,
            },
            {
              id: 4847770,
              label: "10",
              orderNumber: 10,
            },
          ],
        },
        {
          description: "",
          label: "What is the reason for your score?",
          id: 1721104,
          orderNumber: 2,
          type: "text",
          maxPath: 1,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4847771,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "Thank you for sharing!",
          id: 1721105,
          orderNumber: 3,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Gauge price sensitivity with Van Westendorp's pricing questions",
    category: "",
    description: "",
    survey: {
      id: "47121343948c035e",
      name: "Gauge price sensitivity with Van Westendorp's pricing questions",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "At what price per month would you think...",
          label: "the price is too low for [product name] to be good quality?",
          id: 1604048,
          orderNumber: 1,
          type: "dropdown",
          maxPath: 5,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [],
          },
          options: [
            {
              id: 4560692,
              label: "$49",
              orderNumber: 1,
            },
            {
              id: 4560693,
              label: "$89",
              orderNumber: 2,
            },
            {
              id: 4560716,
              label: "$179",
              orderNumber: 3,
            },
            {
              id: 4560717,
              label: "$249",
              orderNumber: 4,
            },
          ],
        },
        {
          description: "At what price per month would you think...",
          label: "[product name] is a good value?",
          id: 1604054,
          orderNumber: 2,
          type: "dropdown",
          maxPath: 4,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [],
          },
          options: [
            {
              id: 4560718,
              label: "$49",
              orderNumber: 1,
            },
            {
              id: 4560719,
              label: "$89",
              orderNumber: 2,
            },
            {
              id: 4560720,
              label: "$179",
              orderNumber: 3,
            },
            {
              id: 4560721,
              label: "$249",
              orderNumber: 4,
            },
          ],
        },
        {
          description: "At what price per month would you think...",
          label: "our offer is expensive, but you would still consider it?",
          id: 1604055,
          orderNumber: 3,
          type: "dropdown",
          maxPath: 3,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [],
          },
          options: [
            {
              id: 4560722,
              label: "$49",
              orderNumber: 1,
            },
            {
              id: 4560723,
              label: "$89",
              orderNumber: 2,
            },
            {
              id: 4560724,
              label: "$179",
              orderNumber: 3,
            },
            {
              id: 4560725,
              label: "$249",
              orderNumber: 4,
            },
          ],
        },
        {
          description: "At what price per month would you think...",
          label: "[product name] is too expensive to consider buying it?",
          id: 1604056,
          orderNumber: 4,
          type: "dropdown",
          maxPath: 2,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [],
          },
          options: [
            {
              id: 4560726,
              label: "$49",
              orderNumber: 1,
            },
            {
              id: 4560727,
              label: "$89",
              orderNumber: 2,
            },
            {
              id: 4560728,
              label: "$179",
              orderNumber: 3,
            },
            {
              id: 4560729,
              label: "$249",
              orderNumber: 4,
            },
          ],
        },
        {
          description: "(Select as many as you want)",
          label:
            "Which of the following features [a product]\nare must-haves for you to invest in it?",
          id: 1603991,
          orderNumber: 5,
          type: "multiple",
          maxPath: 1,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [],
          },
          options: [
            {
              id: 4560464,
              label: "Feature 1",
              orderNumber: 1,
            },
            {
              id: 4560465,
              label: "Feature 2",
              orderNumber: 2,
            },
            {
              id: 4560468,
              label: "Feature 3",
              orderNumber: 3,
            },
            {
              id: 4560469,
              label: "Feature 4",
              orderNumber: 4,
            },
            {
              id: 4560470,
              label: "Other",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "",
          label: "Thanks for your feedback! :)",
          id: 1603998,
          orderNumber: 6,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Measure System Usability with SUS",
    category: "",
    description: "",
    survey: {
      id: "9c8507365d4af02a",
      name: "Measure System Usability with SUS",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "",
          label:
            "Thanks for taking part in the survey! <br /><br />It comprises 10 statements. <br /><br />Select the responses that best describe your experience with [a product name] ↓",
          id: 1579155,
          orderNumber: 1,
          type: "cta",
          maxPath: 11,
          settings: {
            text: "OK",
            type: "next",
          },
        },
        {
          description: "",
          label: "I think I'd like to use this [a product name] frequently.",
          id: 1579156,
          orderNumber: 2,
          type: "single",
          maxPath: 10,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [],
          },
          options: [
            {
              id: 4500825,
              label: "Strongly agree",
              orderNumber: 1,
            },
            {
              id: 4500826,
              label: "Agree",
              orderNumber: 2,
            },
            {
              id: 4500854,
              label: "Neutral",
              orderNumber: 3,
            },
            {
              id: 4500855,
              label: "Disagree",
              orderNumber: 4,
            },
            {
              id: 4500856,
              label: "Strongly disagree",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "",
          label: "I found [a product name] unnecessarily complex.",
          id: 1579164,
          orderNumber: 3,
          type: "single",
          maxPath: 9,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [],
          },
          options: [
            {
              id: 4500857,
              label: "Strongly agree",
              orderNumber: 1,
            },
            {
              id: 4500858,
              label: "Agree",
              orderNumber: 2,
            },
            {
              id: 4500859,
              label: "Neutral",
              orderNumber: 3,
            },
            {
              id: 4500860,
              label: "Disagree",
              orderNumber: 4,
            },
            {
              id: 4500861,
              label: "Strongly disagree",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "",
          label: "I thought [a product name] was easy to use.",
          id: 1579165,
          orderNumber: 4,
          type: "single",
          maxPath: 8,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [],
          },
          options: [
            {
              id: 4500862,
              label: "Strongly agree",
              orderNumber: 1,
            },
            {
              id: 4500863,
              label: "Agree",
              orderNumber: 2,
            },
            {
              id: 4500864,
              label: "Neutral",
              orderNumber: 3,
            },
            {
              id: 4500865,
              label: "Disagree",
              orderNumber: 4,
            },
            {
              id: 4500866,
              label: "Strongly disagree",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "",
          label:
            "I think that I would need the support of a technical person to be able to use [a product name].",
          id: 1579166,
          orderNumber: 5,
          type: "single",
          maxPath: 7,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [],
          },
          options: [
            {
              id: 4500867,
              label: "Strongly agree",
              orderNumber: 1,
            },
            {
              id: 4500868,
              label: "Agree",
              orderNumber: 2,
            },
            {
              id: 4500869,
              label: "Neutral",
              orderNumber: 3,
            },
            {
              id: 4500870,
              label: "Disagree",
              orderNumber: 4,
            },
            {
              id: 4500871,
              label: "Strongly disagree",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "",
          label:
            "I found the various functions in [a product name] were well integrated.",
          id: 1579167,
          orderNumber: 6,
          type: "single",
          maxPath: 6,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [],
          },
          options: [
            {
              id: 4500872,
              label: "Strongly agree",
              orderNumber: 1,
            },
            {
              id: 4500873,
              label: "Agree",
              orderNumber: 2,
            },
            {
              id: 4500874,
              label: "Neutral",
              orderNumber: 3,
            },
            {
              id: 4500875,
              label: "Disagree",
              orderNumber: 4,
            },
            {
              id: 4500876,
              label: "Strongly disagree",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "",
          label:
            "I thought there was too much inconsistency in [a product name].",
          id: 1579168,
          orderNumber: 7,
          type: "single",
          maxPath: 5,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [],
          },
          options: [
            {
              id: 4500877,
              label: "Strongly agree",
              orderNumber: 1,
            },
            {
              id: 4500878,
              label: "Agree",
              orderNumber: 2,
            },
            {
              id: 4500879,
              label: "Neutral",
              orderNumber: 3,
            },
            {
              id: 4500880,
              label: "Disagree",
              orderNumber: 4,
            },
            {
              id: 4500881,
              label: "Strongly disagree",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "",
          label:
            "I think that most people would learn to use [a product name] very quickly.",
          id: 1579169,
          orderNumber: 8,
          type: "single",
          maxPath: 4,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [],
          },
          options: [
            {
              id: 4500882,
              label: "Strongly agree",
              orderNumber: 1,
            },
            {
              id: 4500883,
              label: "Agree",
              orderNumber: 2,
            },
            {
              id: 4500884,
              label: "Neutral",
              orderNumber: 3,
            },
            {
              id: 4500885,
              label: "Disagree",
              orderNumber: 4,
            },
            {
              id: 4500886,
              label: "Strongly disagree",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "",
          label: "I found [a product name] complicated and difficult to use.",
          id: 1579170,
          orderNumber: 9,
          type: "single",
          maxPath: 3,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [],
          },
          options: [
            {
              id: 4500887,
              label: "Strongly agree",
              orderNumber: 1,
            },
            {
              id: 4500888,
              label: "Agree",
              orderNumber: 2,
            },
            {
              id: 4500889,
              label: "Neutral",
              orderNumber: 3,
            },
            {
              id: 4500890,
              label: "Disagree",
              orderNumber: 4,
            },
            {
              id: 4500891,
              label: "Strongly disagree",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "",
          label: "I felt very confident using [a product name].",
          id: 1579171,
          orderNumber: 10,
          type: "single",
          maxPath: 2,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [],
          },
          options: [
            {
              id: 4500892,
              label: "Strongly agree",
              orderNumber: 1,
            },
            {
              id: 4500893,
              label: "Agree",
              orderNumber: 2,
            },
            {
              id: 4500894,
              label: "Neutral",
              orderNumber: 3,
            },
            {
              id: 4500895,
              label: "Disagree",
              orderNumber: 4,
            },
            {
              id: 4500896,
              label: "Strongly disagree",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "",
          label:
            "I needed to learn a lot before I could start using [a product name].",
          id: 1579172,
          orderNumber: 11,
          type: "single",
          maxPath: 1,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [],
          },
          options: [
            {
              id: 4500897,
              label: "Strongly agree",
              orderNumber: 1,
            },
            {
              id: 4500898,
              label: "Agree",
              orderNumber: 2,
            },
            {
              id: 4500899,
              label: "Neutral",
              orderNumber: 3,
            },
            {
              id: 4500900,
              label: "Disagree",
              orderNumber: 4,
            },
            {
              id: 4500901,
              label: "Strongly disagree",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "",
          label: "Thanks for the feedback! ",
          id: 1579178,
          orderNumber: 12,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Improve messaging clarity",
    category: "",
    description: "",
    survey: {
      id: "7e1d9dde7e8b001c",
      name: "Improve messaging clarity",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "",
          label:
            "Does the page tell you everything you need to know about the product?",
          id: 1518732,
          orderNumber: 1,
          type: "single",
          maxPath: 2,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [
              {
                id: 1341927148859,
                orderNumber: 1,
                destination: 1521816,
                condition: "is",
                values: [4340246],
                operator: "or",
              },
            ],
          },
          options: [
            {
              id: 4340246,
              label: "Yes, totally",
              orderNumber: 1,
            },
            {
              id: 4340247,
              label: "Sort of...",
              orderNumber: 2,
            },
            {
              id: 4340248,
              label: "Not at all",
              orderNumber: 3,
            },
          ],
        },
        {
          description: "",
          label: "Do you have any questions? What is unclear?",
          id: 1518733,
          orderNumber: 2,
          type: "text",
          maxPath: 1,
          settings: {
            logic: [
              {
                id: 282423023857,
                orderNumber: 1,
                destination: 1521821,
                condition: "any_value",
                values: [],
              },
            ],
          },
          options: [
            {
              id: 4340249,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "Fantastic!",
          label: "Thanks for your feedback! We appreciate it! 🙂",
          id: 1521816,
          orderNumber: 3,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
        {
          description: "",
          label: "Thanks for your feedback! We appreciate it! 🙂",
          id: 1521821,
          orderNumber: 4,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Measure SUPR-Q of your website",
    category: "",
    description: "",
    survey: {
      id: "4db2a82b2a64527b",
      name: "Measure SUPR-Q of your website",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "",
          label: "[Website] is easy to use.",
          id: 1526199,
          orderNumber: 1,
          type: "rating",
          maxPath: 8,
          settings: {
            shape: "stars",
            leftText: "Strongly disagree",
            rightText: "Strongly dagree",
            logic: [],
          },
          options: [
            {
              id: 4361207,
              label: "1",
              orderNumber: 1,
            },
            {
              id: 4361208,
              label: "2",
              orderNumber: 2,
            },
            {
              id: 4361209,
              label: "3",
              orderNumber: 3,
            },
            {
              id: 4361210,
              label: "4",
              orderNumber: 4,
            },
            {
              id: 4361211,
              label: "5",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "",
          label: "[Website] is easy to navigate.",
          id: 1526205,
          orderNumber: 2,
          type: "rating",
          maxPath: 7,
          settings: {
            shape: "stars",
            leftText: "Strongly disagree",
            rightText: "Strongly agree",
            logic: [],
          },
          options: [
            {
              id: 4361268,
              label: "1",
              orderNumber: 1,
            },
            {
              id: 4361269,
              label: "2",
              orderNumber: 2,
            },
            {
              id: 4361270,
              label: "3",
              orderNumber: 3,
            },
            {
              id: 4361271,
              label: "4",
              orderNumber: 4,
            },
            {
              id: 4361272,
              label: "5",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "",
          label: "The information on [website] is credible.",
          id: 1526206,
          orderNumber: 3,
          type: "rating",
          maxPath: 6,
          settings: {
            shape: "stars",
            leftText: "Strongly disagree",
            rightText: "Strongly agree",
            logic: [],
          },
          options: [
            {
              id: 4361275,
              label: "1",
              orderNumber: 1,
            },
            {
              id: 4361276,
              label: "2",
              orderNumber: 2,
            },
            {
              id: 4361277,
              label: "3",
              orderNumber: 3,
            },
            {
              id: 4361278,
              label: "4",
              orderNumber: 4,
            },
            {
              id: 4361279,
              label: "5",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "",
          label: "The information on [website] is trustworthy.",
          id: 1526200,
          orderNumber: 4,
          type: "rating",
          maxPath: 5,
          settings: {
            shape: "stars",
            leftText: "Strongly disagree",
            rightText: "Strongly agree",
            logic: [],
          },
          options: [
            {
              id: 4361214,
              label: "1",
              orderNumber: 1,
            },
            {
              id: 4361215,
              label: "2",
              orderNumber: 2,
            },
            {
              id: 4361216,
              label: "3",
              orderNumber: 3,
            },
            {
              id: 4361217,
              label: "4",
              orderNumber: 4,
            },
            {
              id: 4361218,
              label: "5",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "",
          label: "I find [website] to be attractive.",
          id: 1526201,
          orderNumber: 5,
          type: "rating",
          maxPath: 4,
          settings: {
            shape: "stars",
            leftText: "Strongly disagree",
            rightText: "Strongly agree",
            logic: [],
          },
          options: [
            {
              id: 4361233,
              label: "1",
              orderNumber: 1,
            },
            {
              id: 4361234,
              label: "2",
              orderNumber: 2,
            },
            {
              id: 4361235,
              label: "3",
              orderNumber: 3,
            },
            {
              id: 4361236,
              label: "4",
              orderNumber: 4,
            },
            {
              id: 4361237,
              label: "5",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "",
          label: "[Website] has a clean and simple presentation.",
          id: 1526202,
          orderNumber: 6,
          type: "rating",
          maxPath: 3,
          settings: {
            shape: "stars",
            leftText: "Strongly disagree",
            rightText: "Strongly agree",
            logic: [],
          },
          options: [
            {
              id: 4361254,
              label: "1",
              orderNumber: 1,
            },
            {
              id: 4361255,
              label: "2",
              orderNumber: 2,
            },
            {
              id: 4361256,
              label: "3",
              orderNumber: 3,
            },
            {
              id: 4361257,
              label: "4",
              orderNumber: 4,
            },
            {
              id: 4361258,
              label: "5",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "",
          label: "I will likely return to [website] in the future.",
          id: 1526203,
          orderNumber: 7,
          type: "rating",
          maxPath: 2,
          settings: {
            shape: "stars",
            leftText: "Strongly disagree",
            rightText: "Strongly agree",
            logic: [],
          },
          options: [
            {
              id: 4361261,
              label: "1",
              orderNumber: 1,
            },
            {
              id: 4361262,
              label: "2",
              orderNumber: 2,
            },
            {
              id: 4361263,
              label: "3",
              orderNumber: 3,
            },
            {
              id: 4361264,
              label: "4",
              orderNumber: 4,
            },
            {
              id: 4361265,
              label: "5",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "",
          label:
            "How likely are you to recommend Survicate to a friend or colleague?",
          id: 1526204,
          orderNumber: 8,
          type: "nps",
          maxPath: 1,
          settings: {
            leftText: "Not likely",
            rightText: "Very likely",
            logic: [],
          },
        },
        {
          description: "",
          label: "Thanks for your feedback! We appreciate it! :)",
          id: 1526479,
          orderNumber: 9,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Improve the search experience",
    category: "",
    description: "",
    survey: {
      id: "91d3e3121c1beb89",
      name: "Improve the search experience",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "",
          label: "How relevant are these results?",
          id: 1534731,
          orderNumber: 1,
          type: "smiley_scale",
          maxPath: 2,
          settings: {
            leftText: "Not at all",
            rightText: "Very",
            logic: [
              {
                id: 872336377692,
                orderNumber: 1,
                destination: 1534733,
                condition: "is",
                values: [4385149, 4385150],
                operator: "or",
              },
            ],
          },
          options: [
            {
              id: 4385146,
              label: "Extremely unsatisfied",
              orderNumber: 1,
            },
            {
              id: 4385147,
              label: "Unsatisfied",
              orderNumber: 2,
            },
            {
              id: 4385148,
              label: "Neutral",
              orderNumber: 3,
            },
            {
              id: 4385149,
              label: "Happy",
              orderNumber: 4,
            },
            {
              id: 4385150,
              label: "Extremely happy",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "Sorry to hear that!",
          label: "What were you hoping to find?",
          id: 1534732,
          orderNumber: 2,
          type: "text",
          maxPath: 1,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4385151,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "Happy to hear that!",
          label: "Is there anything we can do to improve your search results?",
          id: 1534733,
          orderNumber: 3,
          type: "text",
          maxPath: 0,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4385152,
              orderNumber: 1,
            },
          ],
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Classic CSAT - Measure customer satisfaction",
    category: "",
    description: "",
    survey: {
      id: "c424557e36f7dd84",
      name: "Classic CSAT - Measure customer satisfaction",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "",
          label: "How satisfied are you with your experience with [product]?",
          id: 1780882,
          orderNumber: 1,
          type: "numerical_scale",
          maxPath: 3,
          settings: {
            logic: [
              {
                id: 780954726920,
                orderNumber: 1,
                destination: 1781745,
                condition: "between",
                values: [4990384, 4990385],
              },
              {
                id: 224665348891,
                orderNumber: 2,
                destination: 1780884,
                condition: "is",
                values: [4990386],
                operator: "or",
              },
            ],
          },
          options: [
            {
              id: 4990380,
              label: "1",
              orderNumber: 1,
            },
            {
              id: 4990381,
              label: "2",
              orderNumber: 2,
            },
            {
              id: 4990382,
              label: "3",
              orderNumber: 3,
            },
            {
              id: 4990383,
              label: "4",
              orderNumber: 4,
            },
            {
              id: 4990384,
              label: "5",
              orderNumber: 5,
            },
            {
              id: 4990385,
              label: "6",
              orderNumber: 6,
            },
            {
              id: 4990386,
              label: "7",
              orderNumber: 7,
            },
          ],
        },
        {
          description: "Sorry to hear that! ",
          label: "How could we improve your experience?<br /><br />",
          id: 1780883,
          orderNumber: 2,
          type: "text",
          maxPath: 2,
          settings: {
            logic: [
              {
                id: 622711855820,
                orderNumber: 1,
                destination: -1,
                condition: "answered",
                values: [],
              },
            ],
          },
          options: [
            {
              id: 4990387,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "We hope to do better…",
          label: "Is there anything we can do to improve your experience?",
          id: 1781745,
          orderNumber: 3,
          type: "text",
          maxPath: 1,
          settings: {
            logic: [
              {
                id: 511933008837,
                orderNumber: 1,
                destination: -1,
                condition: "answered",
                values: [],
              },
            ],
          },
          options: [
            {
              id: 4992176,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "That’s great! ",
          label: "Is there anything we can do to improve your experience?",
          id: 1780884,
          orderNumber: 4,
          type: "text",
          maxPath: 0,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4990388,
              orderNumber: 1,
            },
          ],
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Assess the content of your blog articles",
    category: "",
    description: "",
    survey: {
      id: "a7bc3cb4cbce3efe",
      name: "Assess the content of your blog articles",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "",
          label: "How helpful is this blog post for you?",
          id: 1789845,
          orderNumber: 1,
          type: "smiley_scale",
          maxPath: 5,
          settings: {
            leftText: "Not at all",
            rightText: "Very helpful",
            logic: [
              {
                id: 4604424470,
                orderNumber: 1,
                destination: 1789866,
                condition: "is",
                values: [5015065, 5015066],
                operator: "or",
              },
            ],
          },
          options: [
            {
              id: 5015062,
              label: "Extremely unsatisfied",
              orderNumber: 1,
            },
            {
              id: 5015063,
              label: "Unsatisfied",
              orderNumber: 2,
            },
            {
              id: 5015064,
              label: "Neutral",
              orderNumber: 3,
            },
            {
              id: 5015065,
              label: "Happy",
              orderNumber: 4,
            },
            {
              id: 5015066,
              label: "Extremely happy",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "Help us improve!",
          label: "What questions of yours haven't we addressed? ",
          id: 1789857,
          orderNumber: 2,
          type: "text",
          maxPath: 4,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 5015089,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "Is there anything else you'd like to read about on our blog?",
          id: 1789858,
          orderNumber: 3,
          type: "text",
          maxPath: 3,
          settings: {
            logic: [
              {
                id: 914960827711,
                orderNumber: 1,
                destination: 1789878,
                condition: "any_value",
                values: [],
              },
            ],
          },
          options: [
            {
              id: 5015090,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label:
            "Happy to hear that! Would you like to receive updates on the articles we publish?",
          id: 1789866,
          orderNumber: 4,
          type: "single",
          maxPath: 2,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [
              {
                id: 964473318721,
                orderNumber: 1,
                destination: 1789876,
                condition: "is",
                values: [5015111],
                operator: "or",
              },
            ],
          },
          options: [
            {
              id: 5015110,
              label: "Sounds interesting!",
              orderNumber: 1,
            },
            {
              id: 5015111,
              label: "Maybe another time...",
              orderNumber: 2,
            },
          ],
        },
        {
          description: "Great!",
          label: "Leave your contact details so that we can get in touch:",
          id: 1789874,
          orderNumber: 5,
          type: "form",
          maxPath: 1,
          settings: {
            disclaimer: false,
            disclaimerText: "",
            consent: true,
            consentText: "Do you consent to this?",
            logic: [
              {
                id: 518694858556,
                orderNumber: 1,
                destination: 1789877,
              },
            ],
          },
          options: [
            {
              id: 417060,
              label: "Name",
              orderNumber: 5,
              required: true,
              type: "first_name",
            },
            {
              id: 417061,
              label: "Business email",
              orderNumber: 5,
              required: true,
              type: "email",
            },
          ],
        },
        {
          description: "",
          label: "No problem! Thanks for sharing your thoughts!",
          id: 1789876,
          orderNumber: 6,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
        {
          description: "",
          label: "No problem! Thanks for sharing your thoughts!",
          id: 1789895,
          orderNumber: 7,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
        {
          description: "",
          label: "Would you like to hear from us when we publish an article?",
          id: 1789878,
          orderNumber: 8,
          type: "single",
          maxPath: 2,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [
              {
                id: 1150445376636,
                orderNumber: 1,
                destination: 1789890,
                condition: "is",
                values: [5015131],
                operator: "or",
              },
            ],
          },
          options: [
            {
              id: 5015130,
              label: "Yes! Why not?",
              orderNumber: 1,
            },
            {
              id: 5015131,
              label: "Maybe another time...",
              orderNumber: 2,
            },
          ],
        },
        {
          description: "",
          label: "Leave your contact details so that we can get in touch:",
          id: 1789889,
          orderNumber: 9,
          type: "form",
          maxPath: 1,
          settings: {
            disclaimer: false,
            disclaimerText: "",
            consent: true,
            consentText: "Do you consent to this?",
            logic: [],
          },
          options: [
            {
              id: 417081,
              label: "Name",
              orderNumber: 9,
              required: true,
              type: "first_name",
            },
            {
              id: 417082,
              label: "Business email",
              orderNumber: 9,
              required: true,
              type: "email",
            },
          ],
        },
        {
          description: "",
          label: "Thanks for your time! Keep in touch! :)",
          id: 1789877,
          orderNumber: 10,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
        {
          description: "",
          label: "No problem! Thanks for sharing your thoughts!",
          id: 1789890,
          orderNumber: 11,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Measure the satisfaction of new users",
    category: "",
    description: "",
    survey: {
      id: "ec99794ae7ad5453",
      name: "Measure the satisfaction of new users",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "",
          label:
            "How would you rate your experience with [product name] so far?",
          id: 1613671,
          orderNumber: 1,
          type: "rating",
          maxPath: 8,
          settings: {
            shape: "stars",
            leftText: "Very bad",
            rightText: "Very good",
            logic: [
              {
                id: 1380364809362,
                orderNumber: 1,
                destination: 1613702,
                condition: "is",
                values: [4582177, 4582176],
                operator: "or",
              },
            ],
          },
          options: [
            {
              id: 4582173,
              label: "1",
              orderNumber: 1,
            },
            {
              id: 4582174,
              label: "2",
              orderNumber: 2,
            },
            {
              id: 4582175,
              label: "3",
              orderNumber: 3,
            },
            {
              id: 4582176,
              label: "4",
              orderNumber: 4,
            },
            {
              id: 4582177,
              label: "5",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "",
          label: "How can we improve your experience?",
          id: 1613672,
          orderNumber: 2,
          type: "text",
          maxPath: 7,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4582180,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "How true is the statement for you?",
          label: "[Product name] does what I expected it to.",
          id: 1613702,
          orderNumber: 3,
          type: "rating",
          maxPath: 6,
          settings: {
            shape: "stars",
            leftText: "Not true at all",
            rightText: "Very true",
            logic: [
              {
                id: 701880411540,
                orderNumber: 1,
                destination: 1613739,
                condition: "is",
                values: [4582308, 4582307],
                operator: "or",
              },
            ],
          },
          options: [
            {
              id: 4582304,
              label: "1",
              orderNumber: 1,
            },
            {
              id: 4582305,
              label: "2",
              orderNumber: 2,
            },
            {
              id: 4582306,
              label: "3",
              orderNumber: 3,
            },
            {
              id: 4582307,
              label: "4",
              orderNumber: 4,
            },
            {
              id: 4582308,
              label: "5",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "Help us improve!",
          label: "What haven't you been able to do with [product name]?",
          id: 1613771,
          orderNumber: 4,
          type: "text",
          maxPath: 5,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4582583,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "How true is the statement for you?",
          label: "I know how to use all the features of [product name].",
          id: 1613739,
          orderNumber: 5,
          type: "rating",
          maxPath: 4,
          settings: {
            shape: "stars",
            leftText: "Not true at all",
            rightText: "Very true",
            logic: [
              {
                id: 1365324514829,
                orderNumber: 1,
                destination: 1613741,
                condition: "is",
                values: [4582452, 4582451],
                operator: "or",
              },
            ],
          },
          options: [
            {
              id: 4582448,
              label: "1",
              orderNumber: 1,
            },
            {
              id: 4582449,
              label: "2",
              orderNumber: 2,
            },
            {
              id: 4582450,
              label: "3",
              orderNumber: 3,
            },
            {
              id: 4582451,
              label: "4",
              orderNumber: 4,
            },
            {
              id: 4582452,
              label: "5",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "",
          label: "What features do you find difficult to use?",
          id: 1613803,
          orderNumber: 6,
          type: "text",
          maxPath: 3,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4582713,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "How true is the statement for you?",
          label: "I find [product name] easy to use.",
          id: 1613741,
          orderNumber: 7,
          type: "rating",
          maxPath: 2,
          settings: {
            shape: "stars",
            leftText: "Not true at all",
            rightText: "Very true",
            logic: [
              {
                id: 396061089369,
                orderNumber: 1,
                destination: 1613907,
                condition: "is",
                values: [4582459, 4582458],
                operator: "or",
              },
            ],
          },
          options: [
            {
              id: 4582455,
              label: "1",
              orderNumber: 1,
            },
            {
              id: 4582456,
              label: "2",
              orderNumber: 2,
            },
            {
              id: 4582457,
              label: "3",
              orderNumber: 3,
            },
            {
              id: 4582458,
              label: "4",
              orderNumber: 4,
            },
            {
              id: 4582459,
              label: "5",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "We'd love to learn more!",
          label: "What problems have you had with it? ",
          id: 1613906,
          orderNumber: 8,
          type: "text",
          maxPath: 1,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4583075,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "Thank you for your feedback! 🎉",
          id: 1613907,
          orderNumber: 9,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Grow your newsletter mailing list",
    category: "",
    description: "",
    survey: {
      id: "df488c976c7c63d1",
      name: "Grow your newsletter mailing list",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "",
          label: "How helpful was what you've just read?",
          id: 1669237,
          orderNumber: 1,
          type: "smiley_scale",
          maxPath: 2,
          settings: {
            leftText: "Not at all",
            rightText: "Very much so",
            logic: [
              {
                id: 1211579156400,
                orderNumber: 1,
                destination: 1669249,
                condition: "is",
                values: [4737667, 4737668, 4737669],
                operator: "or",
              },
            ],
          },
          options: [
            {
              id: 4737667,
              label: "Extremely unsatisfied",
              orderNumber: 1,
            },
            {
              id: 4737668,
              label: "Unsatisfied",
              orderNumber: 2,
            },
            {
              id: 4737669,
              label: "Neutral",
              orderNumber: 3,
            },
            {
              id: 4737670,
              label: "Happy",
              orderNumber: 4,
            },
            {
              id: 4737671,
              label: "Extremely happy",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "😍 🙌 We're happy to hear that!",
          label:
            "If you wish, help us contact you so that we can send some more quality feed!  ",
          id: 1669239,
          orderNumber: 2,
          type: "form",
          maxPath: 1,
          settings: {
            disclaimer: false,
            disclaimerText: "",
            consent: true,
            consentText: "Do you consent to this?",
            logic: [],
          },
          options: [
            {
              id: 366624,
              label: "What's your name?",
              orderNumber: 2,
              required: false,
              type: "first_name",
            },
            {
              id: 366625,
              label: "What's your email address?",
              orderNumber: 2,
              required: false,
              type: "email",
            },
          ],
        },
        {
          description: "",
          label: "Thanks a lot! Happy to see you want to stay in touch! :) ",
          id: 1669248,
          orderNumber: 3,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
        {
          description: "Hmm... Help us improve!",
          label: "What were you expect to learn from the article?",
          id: 1669249,
          orderNumber: 4,
          type: "text",
          maxPath: 1,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4737714,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "Thanks for sharing your opinion! It means a lot! ",
          id: 1669251,
          orderNumber: 5,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Extended NPS survey",
    category: "",
    description: "",
    survey: {
      id: "1d35c500d468fd7e",
      name: "Extended NPS survey",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "",
          label:
            "How likely is it that you will recommend [company / product name]\nto a friend or colleague?",
          id: 1531495,
          orderNumber: 1,
          type: "nps",
          maxPath: 6,
          settings: {
            leftText: "Not likely",
            rightText: "Very likely",
            logic: [],
          },
        },
        {
          description: "",
          label: "Did you interact with our customer service team?",
          id: 1531580,
          orderNumber: 2,
          type: "single",
          maxPath: 5,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [
              {
                id: 381013513428,
                orderNumber: 1,
                destination: 1531584,
                condition: "is",
                values: [4376194],
                operator: "or",
              },
            ],
          },
          options: [
            {
              id: 4376193,
              label: "Yes",
              orderNumber: 1,
            },
            {
              id: 4376194,
              label: "No",
              orderNumber: 2,
            },
          ],
        },
        {
          description: "",
          label: "How would you rate your experience?",
          id: 1531581,
          orderNumber: 3,
          type: "smiley_scale",
          maxPath: 4,
          settings: {
            leftText: "Very unsatisfying",
            rightText: "Very satisfying",
            logic: [
              {
                id: 402737968141,
                orderNumber: 1,
                destination: 1531591,
                condition: "is",
                values: [4376199],
                operator: "or",
              },
            ],
          },
          options: [
            {
              id: 4376195,
              label: "Extremely unsatisfied",
              orderNumber: 1,
            },
            {
              id: 4376196,
              label: "Unsatisfied",
              orderNumber: 2,
            },
            {
              id: 4376197,
              label: "Neutral",
              orderNumber: 3,
            },
            {
              id: 4376198,
              label: "Happy",
              orderNumber: 4,
            },
            {
              id: 4376199,
              label: "Extremely happy",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "",
          label: "How can we improve your experience?",
          id: 1531582,
          orderNumber: 4,
          type: "text",
          maxPath: 3,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4376200,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "How would you rate the quality of the product?",
          id: 1531584,
          orderNumber: 5,
          type: "rating",
          maxPath: 2,
          settings: {
            shape: "stars",
            leftText: "Very poor ",
            rightText: "Very good",
            logic: [],
          },
          options: [
            {
              id: 4376206,
              label: "1",
              orderNumber: 1,
            },
            {
              id: 4376207,
              label: "2",
              orderNumber: 2,
            },
            {
              id: 4376208,
              label: "3",
              orderNumber: 3,
            },
            {
              id: 4376209,
              label: "4",
              orderNumber: 4,
            },
            {
              id: 4376210,
              label: "5",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "",
          label:
            "Which of the following words would you use to describe our products? Select all that apply.",
          id: 1531591,
          orderNumber: 6,
          type: "multiple",
          maxPath: 1,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [],
          },
          options: [
            {
              id: 4376228,
              label: "Reliable",
              orderNumber: 1,
            },
            {
              id: 4376229,
              label: "Useful",
              orderNumber: 2,
            },
            {
              id: 4376231,
              label: "Good value for money",
              orderNumber: 3,
            },
            {
              id: 4376232,
              label: "Irreplaceable",
              orderNumber: 4,
            },
            {
              id: 4376233,
              label: "Other",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "",
          label: "Thank you for taking the time!",
          id: 1531596,
          orderNumber: 7,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Measure users' satisfaction with your MVP",
    category: "",
    description: "",
    survey: {
      id: "946a00d5f19e5834",
      name: "Measure users' satisfaction with your MVP",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "",
          label: "How satisfied are you with [product name]?",
          id: 1785922,
          orderNumber: 1,
          type: "smiley_scale",
          maxPath: 3,
          settings: {
            leftText: "Very dissatisfied",
            rightText: "Very satisfied",
            logic: [
              {
                id: 435644771607,
                orderNumber: 1,
                destination: 1785925,
                condition: "between",
                values: [5001820, 5001822],
              },
            ],
          },
          options: [
            {
              id: 5001820,
              label: "Extremely unsatisfied",
              orderNumber: 1,
            },
            {
              id: 5001821,
              label: "Unsatisfied",
              orderNumber: 2,
            },
            {
              id: 5001822,
              label: "Neutral",
              orderNumber: 3,
            },
            {
              id: 5001823,
              label: "Happy",
              orderNumber: 4,
            },
            {
              id: 5001824,
              label: "Extremely happy",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "",
          label: "What do you appreciate the most about [product name]?",
          id: 1785923,
          orderNumber: 2,
          type: "text",
          maxPath: 2,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 5001825,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "If anything, what would change about [product name]?",
          id: 1785924,
          orderNumber: 3,
          type: "text",
          maxPath: 1,
          settings: {
            logic: [
              {
                id: 151552617922,
                orderNumber: 1,
                destination: 1785934,
                condition: "any_value",
                values: [],
              },
            ],
          },
          options: [
            {
              id: 5001826,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "Sorry to hear that...",
          label: "What would you change about [product name]?",
          id: 1785925,
          orderNumber: 4,
          type: "text",
          maxPath: 1,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 5001827,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "Thanks for sharing! Your input matters a lot! 🙌",
          id: 1785934,
          orderNumber: 5,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Collect continuous feedback on your product or services",
    category: "",
    description: "",
    survey: {
      id: "d772292a752b04f0",
      name: "Collect continuous feedback on your product or services",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "👋 We'd love to ensure you great experience with us!",
          label: "Would you like to share thoughts?",
          id: 1883211,
          orderNumber: 1,
          type: "cta",
          maxPath: 4,
          settings: {
            text: "OK",
            type: "next",
          },
        },
        {
          description: "",
          label: "How would you rate your experience with [company name]?",
          id: 1883214,
          orderNumber: 2,
          type: "rating",
          maxPath: 3,
          settings: {
            shape: "stars",
            leftText: "Very dissatisfying",
            rightText: "Very satisfying",
            logic: [
              {
                id: 841359409964,
                orderNumber: 1,
                destination: 1883283,
                condition: "is",
                values: [5247526],
                operator: "or",
              },
            ],
          },
          options: [
            {
              id: 5247522,
              label: "1",
              orderNumber: 1,
            },
            {
              id: 5247523,
              label: "2",
              orderNumber: 2,
            },
            {
              id: 5247524,
              label: "3",
              orderNumber: 3,
            },
            {
              id: 5247525,
              label: "4",
              orderNumber: 4,
            },
            {
              id: 5247526,
              label: "5",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "Select all that apply",
          label: "Which of the following needs improvement the most?",
          id: 1883242,
          orderNumber: 3,
          type: "multiple",
          maxPath: 2,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [],
          },
          options: [
            {
              id: 5247567,
              label: "Website search experience",
              orderNumber: 1,
            },
            {
              id: 5247568,
              label: "Content of the website",
              orderNumber: 2,
            },
            {
              id: 5247569,
              label: "Offer",
              orderNumber: 3,
            },
            {
              id: 5247573,
              label: "Something else",
              orderNumber: 4,
            },
          ],
        },
        {
          description: "",
          label: "Please, share your thoughts below:",
          id: 1883277,
          orderNumber: 4,
          type: "text",
          maxPath: 1,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 5247574,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "Thank you for sharing! :)",
          id: 1883283,
          orderNumber: 5,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Uncover Users’ Primary Benefits HIDDEN",
    category: "",
    description: "",
    survey: {
      id: "d4b855c22dc284fe",
      name: "Uncover Users’ Primary Benefits HIDDEN",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "",
          label:
            "What is the primary benefit that you have gained from our company?",
          id: 174323,
          orderNumber: 1,
          type: "text",
          maxPath: 1,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 314499,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "Thank you!",
          id: 1481181,
          orderNumber: 2,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Quickly evaluate different product aspects",
    category: "",
    description: "",
    survey: {
      id: "0bfe16cd31a9226b",
      name: "Quickly evaluate different product aspects",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "",
          label: "How would you rate [product's] ease of use?",
          id: 1488634,
          orderNumber: 1,
          type: "rating",
          maxPath: 6,
          settings: {
            shape: "stars",
            leftText: "Very poor",
            rightText: "Very good",
            logic: [],
          },
          options: [
            {
              id: 4257266,
              label: "1",
              orderNumber: 1,
            },
            {
              id: 4257267,
              label: "2",
              orderNumber: 2,
            },
            {
              id: 4257268,
              label: "3",
              orderNumber: 3,
            },
            {
              id: 4257269,
              label: "4",
              orderNumber: 4,
            },
            {
              id: 4257270,
              label: "5",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "",
          label: "How would you rate the quality of [product name]?",
          id: 1488636,
          orderNumber: 2,
          type: "rating",
          maxPath: 5,
          settings: {
            shape: "stars",
            leftText: "Very poor",
            rightText: "Very good",
            logic: [],
          },
          options: [
            {
              id: 4257283,
              label: "1",
              orderNumber: 1,
            },
            {
              id: 4257284,
              label: "2",
              orderNumber: 2,
            },
            {
              id: 4257285,
              label: "3",
              orderNumber: 3,
            },
            {
              id: 4257286,
              label: "4",
              orderNumber: 4,
            },
            {
              id: 4257287,
              label: "5",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "",
          label: "How would you rate the value for money?",
          id: 1488638,
          orderNumber: 3,
          type: "rating",
          maxPath: 4,
          settings: {
            shape: "stars",
            leftText: "Very poor",
            rightText: "Very good",
            logic: [],
          },
          options: [
            {
              id: 4257292,
              label: "1",
              orderNumber: 1,
            },
            {
              id: 4257293,
              label: "2",
              orderNumber: 2,
            },
            {
              id: 4257294,
              label: "3",
              orderNumber: 3,
            },
            {
              id: 4257295,
              label: "4",
              orderNumber: 4,
            },
            {
              id: 4257296,
              label: "5",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "",
          label: "How would you rate the design of the product? ",
          id: 1488639,
          orderNumber: 4,
          type: "rating",
          maxPath: 3,
          settings: {
            shape: "stars",
            leftText: "Very unsatisfied",
            rightText: "Very satisfied",
            logic: [],
          },
          options: [
            {
              id: 4257297,
              label: "1",
              orderNumber: 1,
            },
            {
              id: 4257298,
              label: "2",
              orderNumber: 2,
            },
            {
              id: 4257299,
              label: "3",
              orderNumber: 3,
            },
            {
              id: 4257300,
              label: "4",
              orderNumber: 4,
            },
            {
              id: 4257301,
              label: "5",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "",
          label:
            "How likely are you to recommend [product's name] to someone like you?",
          id: 1488640,
          orderNumber: 5,
          type: "nps",
          maxPath: 2,
          settings: {
            leftText: "Not likely",
            rightText: "Very likely",
            logic: [
              {
                id: 594915691152,
                orderNumber: 1,
                destination: 1533124,
                condition: "between",
                values: [7, 8],
              },
              {
                id: 441173433888,
                orderNumber: 2,
                destination: 1533125,
                condition: "between",
                values: [9, 10],
              },
            ],
          },
        },
        {
          description: "Sorry to hear that!",
          label: "What can we improve?",
          id: 1533123,
          orderNumber: 6,
          type: "text",
          maxPath: 1,
          settings: {
            logic: [
              {
                id: 1400391430296,
                orderNumber: 1,
                destination: 1563187,
                condition: "any_value",
                values: [],
              },
            ],
          },
          options: [
            {
              id: 4380451,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "That's not bad at all!",
          label: "Is there anything we could improve?",
          id: 1533124,
          orderNumber: 7,
          type: "text",
          maxPath: 1,
          settings: {
            logic: [
              {
                id: 511360116552,
                orderNumber: 1,
                destination: 1563187,
                condition: "any_value",
                values: [],
              },
            ],
          },
          options: [
            {
              id: 4380453,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "Happy to hear! Tell us more! :)",
          label: "What do you like most about [product name]?",
          id: 1533125,
          orderNumber: 8,
          type: "text",
          maxPath: 1,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4380466,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "Thanks for your feedback! We appreciate that! :)",
          id: 1563187,
          orderNumber: 9,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Find out what first impression you leave",
    category: "",
    description: "",
    survey: {
      id: "3be2090541870f04",
      name: "Find out what first impression you leave",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "",
          label:
            "We'd love to find out what your first impression of us is. <br /><br />Would you like to answer 3 short questions?",
          id: 1649219,
          orderNumber: 1,
          type: "cta",
          maxPath: 4,
          settings: {
            text: "OK",
            type: "next",
          },
        },
        {
          description: "Based on what you've seen so far...",
          label:
            "How would you rate the reliability of\nthe information on the website?",
          id: 1649222,
          orderNumber: 2,
          type: "rating",
          maxPath: 3,
          settings: {
            shape: "stars",
            leftText: "Very unreliable",
            rightText: "Very reliable",
            logic: [],
          },
          options: [
            {
              id: 4684263,
              label: "1",
              orderNumber: 1,
            },
            {
              id: 4684264,
              label: "2",
              orderNumber: 2,
            },
            {
              id: 4684265,
              label: "3",
              orderNumber: 3,
            },
            {
              id: 4684266,
              label: "4",
              orderNumber: 4,
            },
            {
              id: 4684267,
              label: "5",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "Based on what you've seen so far...",
          label: "How interesting is the company to you?",
          id: 1649224,
          orderNumber: 3,
          type: "rating",
          maxPath: 2,
          settings: {
            shape: "stars",
            leftText: "Not at all",
            rightText: "Very ",
            logic: [],
          },
          options: [
            {
              id: 4684271,
              label: "1",
              orderNumber: 1,
            },
            {
              id: 4684272,
              label: "2",
              orderNumber: 2,
            },
            {
              id: 4684273,
              label: "3",
              orderNumber: 3,
            },
            {
              id: 4684274,
              label: "4",
              orderNumber: 4,
            },
            {
              id: 4684275,
              label: "5",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "",
          label: "What price range do you think the product we offer is is?",
          id: 1649228,
          orderNumber: 4,
          type: "dropdown",
          maxPath: 1,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [],
          },
          options: [
            {
              id: 4684297,
              label: "less than 100 $",
              orderNumber: 1,
            },
            {
              id: 4684298,
              label: "100-500 $",
              orderNumber: 2,
            },
            {
              id: 4684307,
              label: "more than 500 $",
              orderNumber: 3,
            },
          ],
        },
        {
          description: "",
          label: "Thanks for your feedback! ",
          id: 1649230,
          orderNumber: 5,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Understand and quickly prevent churn",
    category: "",
    description: "",
    survey: {
      id: "a8883409567d0126",
      name: "Understand and quickly prevent churn",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "",
          label:
            "Hey... 👋 Sorry to see you go... 🥹 <br /><br />Would you mind sharing your reasons with us?<br />",
          id: 1795723,
          orderNumber: 1,
          type: "cta",
          maxPath: 4,
          settings: {
            text: "OK",
            type: "next",
          },
        },
        {
          description: "Thanks! ❤️",
          label: "Please, select all the reasons that apply:",
          id: 1795717,
          orderNumber: 2,
          type: "multiple",
          maxPath: 3,
          settings: {
            randomize: true,
            randomizeExceptLast: true,
            logic: [
              {
                id: 637690129070,
                orderNumber: 1,
                destination: 1795721,
                condition: "includes_any",
                values: [5032188, 5032191, 5032192],
                operator: "or",
              },
            ],
          },
          options: [
            {
              id: 5032187,
              label: "Found an alternative",
              orderNumber: 1,
            },
            {
              id: 5032188,
              label: "The price is too high",
              orderNumber: 2,
            },
            {
              id: 5032189,
              label: "Missing features",
              orderNumber: 3,
            },
            {
              id: 5032190,
              label: "Not happy with your customer service ",
              orderNumber: 4,
            },
            {
              id: 5032191,
              label: "Needed it for one project ",
              orderNumber: 5,
            },
            {
              id: 5032192,
              label: "Other",
              orderNumber: 6,
            },
          ],
        },
        {
          description: "",
          label: "Would you like to tell us more?",
          id: 1842146,
          orderNumber: 3,
          type: "text",
          maxPath: 2,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 5142464,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "Thanks for sharing! We really hate to see you go... 😏",
          label:
            "We'd like to offer you X% discount and extra features.\nWould you like to learn more?",
          id: 1795721,
          orderNumber: 4,
          type: "single",
          maxPath: 1,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [
              {
                id: 10516218825,
                orderNumber: 1,
                destination: 1795732,
                condition: "is",
                values: [5032200],
                operator: "or",
              },
            ],
          },
          options: [
            {
              id: 5032199,
              label: "Tell me more ...",
              orderNumber: 1,
            },
            {
              id: 5032200,
              label: "No, thanks",
              orderNumber: 2,
            },
          ],
        },
        {
          description: "",
          label: "Good! :) Please, check your inbox. You've got an offer! :)",
          id: 1795730,
          orderNumber: 5,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
        {
          description: "",
          label:
            "That's all right. <br /><br />If you change your mind, let us know at: company@domain.com *<br /><br />*It's a limited time offer! So, make haste! ;) <br />",
          id: 1795732,
          orderNumber: 6,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Create a user persona",
    category: "",
    description: "",
    survey: {
      id: "2244e7433b2f24d1",
      name: "Create a user persona",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "",
          label:
            "👋<br />We've been losing nights of sleep, trying to figure out how to better meet your needs. <br /><br />Would you like to answer 7 short questions and help us sleep better? ;) <br /><br />It'll take max 5 minutes!<br />",
          id: 1693284,
          orderNumber: 1,
          type: "cta",
          maxPath: 7,
          settings: {
            text: "OK",
            type: "next",
          },
        },
        {
          description: "",
          label: "What is your core responsibility at work?",
          id: 1693308,
          orderNumber: 2,
          type: "text",
          maxPath: 6,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4794349,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label:
            "How satisfied are you with the way you handle the responsibility?",
          id: 1693309,
          orderNumber: 3,
          type: "rating",
          maxPath: 5,
          settings: {
            shape: "stars",
            leftText: "Very dissatisfied",
            rightText: "Very satisfied",
            logic: [
              {
                id: 1476054390208,
                orderNumber: 1,
                destination: 1693394,
                condition: "is",
                values: [4794370, 4794371],
                operator: "or",
              },
            ],
          },
          options: [
            {
              id: 4794367,
              label: "1",
              orderNumber: 1,
            },
            {
              id: 4794368,
              label: "2",
              orderNumber: 2,
            },
            {
              id: 4794369,
              label: "3",
              orderNumber: 3,
            },
            {
              id: 4794370,
              label: "4",
              orderNumber: 4,
            },
            {
              id: 4794371,
              label: "5",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "Sorry to hear that! Help us understand... ",
          label: "What makes you feel dissatisfied?",
          id: 1693331,
          orderNumber: 4,
          type: "text",
          maxPath: 4,
          settings: {
            logic: [
              {
                id: 91939967680,
                orderNumber: 1,
                destination: 1693295,
                condition: "any_value",
                values: [],
              },
            ],
          },
          options: [
            {
              id: 4794490,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "What makes you feel not as satisfied?",
          id: 1693394,
          orderNumber: 5,
          type: "text",
          maxPath: 4,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4794843,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "What is your biggest challenge right now? ",
          id: 1693295,
          orderNumber: 6,
          type: "text",
          maxPath: 3,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4794312,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "How happy are you with the way you deal with it?",
          id: 1693485,
          orderNumber: 7,
          type: "smiley_scale",
          maxPath: 2,
          settings: {
            leftText: "Very unhappy",
            rightText: "Very happy",
            logic: [],
          },
          options: [
            {
              id: 4795189,
              label: "Extremely unsatisfied",
              orderNumber: 1,
            },
            {
              id: 4795190,
              label: "Unsatisfied",
              orderNumber: 2,
            },
            {
              id: 4795191,
              label: "Neutral",
              orderNumber: 3,
            },
            {
              id: 4795192,
              label: "Happy",
              orderNumber: 4,
            },
            {
              id: 4795193,
              label: "Extremely happy",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "",
          label: "What would happen if you didn't sort out the challenge?",
          id: 1693306,
          orderNumber: 8,
          type: "text",
          maxPath: 1,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4794345,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "Thank you for sharing! It means a world! :)",
          id: 1693439,
          orderNumber: 9,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Test the messaging on your homepage",
    category: "",
    description: "",
    survey: {
      id: "9b48887a4fb46e69",
      name: "Test the messaging on your homepage",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "",
          label:
            "Would you like to help us make sure our message comes across? <br /><br />It'll take 2-3 minutes, and we'll be grateful forever! :)",
          id: 1650074,
          orderNumber: 1,
          type: "cta",
          maxPath: 7,
          settings: {
            text: "OK",
            type: "next",
          },
        },
        {
          description: "Based on the main headline on the page...",
          label: "How clear is it what we do?",
          id: 1650075,
          orderNumber: 2,
          type: "numerical_scale",
          maxPath: 6,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4686749,
              label: "1",
              orderNumber: 1,
            },
            {
              id: 4686750,
              label: "2",
              orderNumber: 2,
            },
            {
              id: 4686751,
              label: "3",
              orderNumber: 3,
            },
            {
              id: 4686752,
              label: "4",
              orderNumber: 4,
            },
            {
              id: 4686753,
              label: "5",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "Based on the information on this page...",
          label: "How clear is it who we serve?",
          id: 1650076,
          orderNumber: 3,
          type: "numerical_scale",
          maxPath: 5,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4686756,
              label: "1",
              orderNumber: 1,
            },
            {
              id: 4686757,
              label: "2",
              orderNumber: 2,
            },
            {
              id: 4686758,
              label: "3",
              orderNumber: 3,
            },
            {
              id: 4686759,
              label: "4",
              orderNumber: 4,
            },
            {
              id: 4686760,
              label: "5",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "Based on the information on this page...",
          label: "How clear is it what differentiates us from others?",
          id: 1650077,
          orderNumber: 4,
          type: "numerical_scale",
          maxPath: 4,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4686761,
              label: "1",
              orderNumber: 1,
            },
            {
              id: 4686762,
              label: "2",
              orderNumber: 2,
            },
            {
              id: 4686763,
              label: "3",
              orderNumber: 3,
            },
            {
              id: 4686764,
              label: "4",
              orderNumber: 4,
            },
            {
              id: 4686765,
              label: "5",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "Based on the information on this page...",
          label: "How likely are you to buy [product name]?",
          id: 1650078,
          orderNumber: 5,
          type: "nps",
          maxPath: 3,
          settings: {
            leftText: "Not likely",
            rightText: "Very likely",
            logic: [
              {
                id: 269359042466,
                orderNumber: 1,
                destination: 1836392,
                condition: "between",
                values: [9, 10],
              },
            ],
          },
        },
        {
          description: "",
          label: "What are your biggest doubts about the offer?",
          id: 1780303,
          orderNumber: 6,
          type: "text",
          maxPath: 2,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4988329,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "Please, select all that apply!",
          label: "Which of the benefits matter to you the most?",
          id: 1836392,
          orderNumber: 7,
          type: "multiple",
          maxPath: 1,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [],
          },
          options: [
            {
              id: 5127067,
              label: "Benefit 1",
              orderNumber: 1,
            },
            {
              id: 5127068,
              label: "Benefit 2",
              orderNumber: 2,
            },
            {
              id: 5127069,
              label: "Benefit 3",
              orderNumber: 3,
            },
            {
              id: 5127070,
              label: "Benefit 4",
              orderNumber: 4,
            },
            {
              id: 5127071,
              label: "Other",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "",
          label: "Thanks for your time! <br />Much appreciated! ",
          id: 1650082,
          orderNumber: 8,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Improve the sign-up experience",
    category: "",
    description: "",
    survey: {
      id: "8a6f48ae9e6dd41c",
      name: "Improve the sign-up experience",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "Hi! Great to see you! 🥳",
          label:
            "How would you rate the experience of signing up to [product name]?",
          id: 1500125,
          orderNumber: 1,
          type: "rating",
          maxPath: 2,
          settings: {
            shape: "stars",
            leftText: "Very bad",
            rightText: "Very good",
            logic: [],
          },
          options: [
            {
              id: 4286701,
              label: "1",
              orderNumber: 1,
            },
            {
              id: 4286702,
              label: "2",
              orderNumber: 2,
            },
            {
              id: 4286703,
              label: "3",
              orderNumber: 3,
            },
            {
              id: 4286704,
              label: "4",
              orderNumber: 4,
            },
            {
              id: 4286705,
              label: "5",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "Sorry to hear that!",
          label: "What would you improve?",
          id: 1500126,
          orderNumber: 2,
          type: "text",
          maxPath: 1,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4286709,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "Is there anything you'd change?",
          id: 1500127,
          orderNumber: 3,
          type: "text",
          maxPath: 0,
          settings: {},
          options: [
            {
              id: 4286710,
              orderNumber: 1,
            },
          ],
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Evaluate your software across all dimensions",
    category: "",
    description: "",
    survey: {
      id: "910d6c4fcaccebee",
      name: "Evaluate your software across all dimensions",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "",
          label: "How satisfied are you with [product]'s capabilities?",
          id: 1586772,
          orderNumber: 1,
          type: "rating",
          maxPath: 7,
          settings: {
            shape: "stars",
            leftText: "Very dissatisfied",
            rightText: "Very satisfied",
            logic: [],
          },
          options: [
            {
              id: 4520336,
              label: "1",
              orderNumber: 1,
            },
            {
              id: 4520337,
              label: "2",
              orderNumber: 2,
            },
            {
              id: 4520338,
              label: "3",
              orderNumber: 3,
            },
            {
              id: 4520339,
              label: "4",
              orderNumber: 4,
            },
            {
              id: 4520340,
              label: "5",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "",
          label: "How satisfied are you with [product]'s ease of use?",
          id: 1586773,
          orderNumber: 2,
          type: "rating",
          maxPath: 6,
          settings: {
            shape: "stars",
            leftText: "Very dissatisfied",
            rightText: "Very satisfied",
            logic: [],
          },
          options: [
            {
              id: 4520341,
              label: "1",
              orderNumber: 1,
            },
            {
              id: 4520342,
              label: "2",
              orderNumber: 2,
            },
            {
              id: 4520343,
              label: "3",
              orderNumber: 3,
            },
            {
              id: 4520344,
              label: "4",
              orderNumber: 4,
            },
            {
              id: 4520345,
              label: "5",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "",
          label: "How satisfied are you with [product]'s reliability?",
          id: 1586770,
          orderNumber: 3,
          type: "rating",
          maxPath: 5,
          settings: {
            shape: "stars",
            leftText: "Very dissatisfied",
            rightText: "Very satisfied",
            logic: [],
          },
          options: [
            {
              id: 4520329,
              label: "1",
              orderNumber: 1,
            },
            {
              id: 4520330,
              label: "2",
              orderNumber: 2,
            },
            {
              id: 4520331,
              label: "3",
              orderNumber: 3,
            },
            {
              id: 4520332,
              label: "4",
              orderNumber: 4,
            },
            {
              id: 4520333,
              label: "5",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "",
          label: "How satisfied are you with [product]'s integrations?",
          id: 1586774,
          orderNumber: 4,
          type: "rating",
          maxPath: 4,
          settings: {
            shape: "stars",
            leftText: "Very dissatisfied",
            rightText: "Very satisfied",
            logic: [],
          },
          options: [
            {
              id: 4520346,
              label: "1",
              orderNumber: 1,
            },
            {
              id: 4520347,
              label: "2",
              orderNumber: 2,
            },
            {
              id: 4520348,
              label: "3",
              orderNumber: 3,
            },
            {
              id: 4520349,
              label: "4",
              orderNumber: 4,
            },
            {
              id: 4520350,
              label: "5",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "",
          label:
            "How satisfied are you with the look of [product]'s interface?",
          id: 1586775,
          orderNumber: 5,
          type: "rating",
          maxPath: 3,
          settings: {
            shape: "stars",
            leftText: "Very dissatisfied",
            rightText: "Very satisfied",
            logic: [],
          },
          options: [
            {
              id: 4520351,
              label: "1",
              orderNumber: 1,
            },
            {
              id: 4520352,
              label: "2",
              orderNumber: 2,
            },
            {
              id: 4520353,
              label: "3",
              orderNumber: 3,
            },
            {
              id: 4520354,
              label: "4",
              orderNumber: 4,
            },
            {
              id: 4520355,
              label: "5",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "",
          label:
            "How satisfied are you with the way [product]'s features are named?",
          id: 1586776,
          orderNumber: 6,
          type: "rating",
          maxPath: 2,
          settings: {
            shape: "stars",
            leftText: "Very dissatisfied",
            rightText: "Very satisfied",
            logic: [],
          },
          options: [
            {
              id: 4520356,
              label: "1",
              orderNumber: 1,
            },
            {
              id: 4520357,
              label: "2",
              orderNumber: 2,
            },
            {
              id: 4520358,
              label: "3",
              orderNumber: 3,
            },
            {
              id: 4520359,
              label: "4",
              orderNumber: 4,
            },
            {
              id: 4520360,
              label: "5",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "",
          label: "How satisfied are you with the [product]'s value for money?",
          id: 1586777,
          orderNumber: 7,
          type: "rating",
          maxPath: 1,
          settings: {
            shape: "stars",
            leftText: "Very dissatisfied",
            rightText: "Very satisfied",
            logic: [],
          },
          options: [
            {
              id: 4520361,
              label: "1",
              orderNumber: 1,
            },
            {
              id: 4520362,
              label: "2",
              orderNumber: 2,
            },
            {
              id: 4520363,
              label: "3",
              orderNumber: 3,
            },
            {
              id: 4520364,
              label: "4",
              orderNumber: 4,
            },
            {
              id: 4520365,
              label: "5",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "",
          label: "Is there anything you'd especially like us to improve?",
          id: 1586778,
          orderNumber: 8,
          type: "text",
          maxPath: 0,
          settings: {},
          options: [
            {
              id: 4520366,
              orderNumber: 1,
            },
          ],
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Measure user satisfaction with product trials",
    category: "",
    description: "",
    survey: {
      id: "f6fb5aa6fed63cd1",
      name: "Measure user satisfaction with product trials",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "",
          label: "👋 <br />How satisfied are you with your free trial so far?",
          id: 1616833,
          orderNumber: 1,
          type: "smiley_scale",
          maxPath: 2,
          settings: {
            leftText: "Very dissatified",
            rightText: "Very satisfied",
            logic: [
              {
                id: 33422879300,
                orderNumber: 1,
                destination: 1616835,
                condition: "is",
                values: [4591883, 4591884],
                operator: "or",
              },
            ],
          },
          options: [
            {
              id: 4591880,
              label: "Extremely unsatisfied",
              orderNumber: 1,
            },
            {
              id: 4591881,
              label: "Unsatisfied",
              orderNumber: 2,
            },
            {
              id: 4591882,
              label: "Neutral",
              orderNumber: 3,
            },
            {
              id: 4591883,
              label: "Happy",
              orderNumber: 4,
            },
            {
              id: 4591884,
              label: "Extremely happy",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "Sorry to hear that!",
          label: "How can we improve your experience?",
          id: 1616834,
          orderNumber: 2,
          type: "text",
          maxPath: 1,
          settings: {
            logic: [
              {
                id: 721934192880,
                orderNumber: 1,
                destination: 1616836,
                condition: "any_value",
                values: [],
              },
            ],
          },
          options: [
            {
              id: 4591885,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "Great to hear that!",
          label: "Is there anything you'd like to tell us?",
          id: 1616835,
          orderNumber: 3,
          type: "text",
          maxPath: 1,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4591886,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label:
            "Thanks for taking the time! Your feedback matters a lot to us! ",
          id: 1616836,
          orderNumber: 4,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Improve search results accuracy",
    category: "",
    description: "",
    survey: {
      id: "c5817fc061297277",
      name: "Improve search results accuracy",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "",
          label: "How happy are you with the search results?",
          id: 1683131,
          orderNumber: 1,
          type: "smiley_scale",
          maxPath: 2,
          settings: {
            leftText: "Very unhappy",
            rightText: "Very happy",
            logic: [
              {
                id: 853954223234,
                orderNumber: 1,
                destination: 1683132,
                condition: "is",
                values: [4770248],
                operator: "or",
              },
            ],
          },
          options: [
            {
              id: 4770244,
              label: "Extremely unsatisfied",
              orderNumber: 1,
            },
            {
              id: 4770245,
              label: "Unsatisfied",
              orderNumber: 2,
            },
            {
              id: 4770246,
              label: "Neutral",
              orderNumber: 3,
            },
            {
              id: 4770247,
              label: "Happy",
              orderNumber: 4,
            },
            {
              id: 4770248,
              label: "Extremely happy",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "Help us improve the search bar:",
          label: "What exactly have you been browsing for?",
          id: 175915,
          orderNumber: 2,
          type: "text",
          maxPath: 1,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 318082,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label:
            "Thanks a lot! Your feedback will help us improve the search experience for you!",
          id: 175916,
          orderNumber: 3,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
        {
          description: "",
          label: "Happy to hear that! 🎊🙏",
          id: 1683132,
          orderNumber: 4,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Uncover your customers' motivations",
    category: "",
    description: "",
    survey: {
      id: "928b86244d52a0d5",
      name: "Uncover your customers' motivations",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "",
          label:
            "Do you recall what motivated you to look for a solution like [product name]?",
          id: 1500292,
          orderNumber: 1,
          type: "single",
          maxPath: 5,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [
              {
                id: 1017725781282,
                orderNumber: 1,
                destination: 1500294,
                condition: "is",
                values: [4287165],
                operator: "or",
              },
            ],
          },
          options: [
            {
              id: 4287164,
              label: "Yes",
              orderNumber: 1,
            },
            {
              id: 4287165,
              label: "No",
              orderNumber: 2,
            },
          ],
        },
        {
          description: "We'd love to know more.",
          label: "Would you mind telling us what it was?",
          id: 1500293,
          orderNumber: 2,
          type: "text",
          maxPath: 4,
          settings: {
            logic: [
              {
                id: 1335242855902,
                orderNumber: 1,
                destination: 1500295,
                condition: "any_value",
                values: [],
              },
            ],
          },
          options: [
            {
              id: 4287166,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label:
            "What do you expect to be able to achieve with [product name]?",
          id: 1500294,
          orderNumber: 3,
          type: "text",
          maxPath: 4,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4287167,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label:
            "If anything was possible,\nhow would you like [product name] to work?",
          id: 1500295,
          orderNumber: 4,
          type: "text",
          maxPath: 3,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4287168,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label:
            "How likely is it that you will recommend our product to a friend or colleague?",
          id: 1500296,
          orderNumber: 5,
          type: "nps",
          maxPath: 2,
          settings: {
            leftText: "Not likely",
            rightText: "Very likely",
            logic: [],
          },
        },
        {
          description: "",
          label: "Why did you choose this score?",
          id: 1539420,
          orderNumber: 6,
          type: "text",
          maxPath: 1,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4396532,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "Thank you for your feedback!",
          id: 1539427,
          orderNumber: 7,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Verify your website's usability",
    category: "",
    description: "",
    survey: {
      id: "a03fc56af998dd78",
      name: "Verify your website's usability",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "",
          label:
            "👋 We'd like to ask you some questions about our website.\n<br /><br />It'll take you 2 minutes and be of huge help for us. ",
          id: 1723390,
          orderNumber: 1,
          type: "cta",
          maxPath: 7,
          settings: {
            text: "OK",
            type: "next",
          },
        },
        {
          description: "",
          label: "How often do you visit our website?",
          id: 1723391,
          orderNumber: 2,
          type: "single",
          maxPath: 6,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [],
          },
          options: [
            {
              id: 4853000,
              label: "More than once a week",
              orderNumber: 1,
            },
            {
              id: 4853001,
              label: "Once a week",
              orderNumber: 2,
            },
            {
              id: 4853002,
              label: "A few times a month",
              orderNumber: 3,
            },
            {
              id: 4853003,
              label: "Less than once a month",
              orderNumber: 4,
            },
          ],
        },
        {
          description: "",
          label: "What do you use our website for?",
          id: 1723392,
          orderNumber: 3,
          type: "text",
          maxPath: 5,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4853004,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "Select the answer that best describes you:",
          label:
            "How easy or difficult is it for your to find information you need?",
          id: 1723408,
          orderNumber: 4,
          type: "rating",
          maxPath: 4,
          settings: {
            shape: "stars",
            leftText: "Very difficult",
            rightText: "Very easy",
            logic: [
              {
                id: 743511336633,
                orderNumber: 1,
                destination: 1723399,
                condition: "is_not",
                values: [4853047, 4853048, 4853049, 4853050],
                operator: "or",
              },
            ],
          },
          options: [
            {
              id: 4853047,
              label: "1",
              orderNumber: 1,
            },
            {
              id: 4853048,
              label: "2",
              orderNumber: 2,
            },
            {
              id: 4853049,
              label: "3",
              orderNumber: 3,
            },
            {
              id: 4853050,
              label: "4",
              orderNumber: 4,
            },
            {
              id: 4853051,
              label: "5",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "",
          label: "Could you please tell us what difficulties you've had?",
          id: 1723394,
          orderNumber: 5,
          type: "text",
          maxPath: 3,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4853010,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label:
            "What feature/category on our website do you find most useful and why?",
          id: 1723399,
          orderNumber: 6,
          type: "text",
          maxPath: 2,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4853023,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "If anything, what would you like us to change?",
          id: 1723402,
          orderNumber: 7,
          type: "text",
          maxPath: 1,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4853027,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label:
            "Thank you for sharing! <br />You're the best in humankind! 🚀",
          id: 1723403,
          orderNumber: 8,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Discover churn reason (choices) 1",
    category: "",
    description: "",
    survey: {
      id: "4c372fbb0abfbc5e",
      name: "Discover churn reason (choices) 1",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "We're sorry to see you go!",
          label: "What is the primary reason for canceling your subscription?",
          id: 1481276,
          orderNumber: 1,
          type: "single",
          maxPath: 2,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [
              {
                id: 349499742339,
                orderNumber: 1,
                destination: 1712897,
                condition: "is",
                values: [4234780, 4234781, 4234786],
                operator: "or",
              },
              {
                id: 386289188901,
                orderNumber: 2,
                destination: 1481286,
                condition: "is",
                values: [4234783],
                operator: "or",
              },
              {
                id: 362877722907,
                orderNumber: 3,
                destination: 1481285,
                condition: "is",
                values: [4234784],
                operator: "or",
              },
              {
                id: 1560206983743,
                orderNumber: 4,
                destination: 1481287,
                condition: "is",
                values: [4234785],
                operator: "or",
              },
            ],
          },
          options: [
            {
              id: 4234780,
              label: "I don't need it at the moment. I will be back!",
              orderNumber: 1,
            },
            {
              id: 4234781,
              label: "I no longer need it",
              orderNumber: 2,
            },
            {
              id: 4234782,
              label: "I found an alternative",
              orderNumber: 3,
            },
            {
              id: 4234783,
              label: "Price is too high",
              orderNumber: 4,
            },
            {
              id: 4234784,
              label: "It doesn't meet my needs - missing features",
              orderNumber: 5,
            },
            {
              id: 4234785,
              label: "Customer service was less than expected",
              orderNumber: 6,
            },
            {
              id: 4234786,
              label: "Other",
              orderNumber: 7,
            },
          ],
        },
        {
          description: "",
          label: "What alternative did you find?",
          id: 1481283,
          orderNumber: 2,
          type: "text",
          maxPath: 1,
          settings: {
            logic: [
              {
                id: 1484955843048,
                orderNumber: 1,
                destination: 1712897,
                condition: "any_value",
                values: [],
              },
            ],
          },
          options: [
            {
              id: 4234801,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "Help us improve!",
          label: "What did [product name] fail to do?<br />",
          id: 1481285,
          orderNumber: 3,
          type: "text",
          maxPath: 1,
          settings: {
            logic: [
              {
                id: 220736679372,
                orderNumber: 1,
                destination: 1712897,
                condition: "any_value",
                values: [],
              },
            ],
          },
          options: [
            {
              id: 4234802,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "What would be the right price, in your opinion?",
          id: 1481286,
          orderNumber: 4,
          type: "text",
          maxPath: 1,
          settings: {
            logic: [
              {
                id: 827762547645,
                orderNumber: 1,
                destination: 1712897,
                condition: "any_value",
                values: [],
              },
            ],
          },
          options: [
            {
              id: 4234803,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "Sorry to hear that...",
          label: "How did we fall short of meeting your expectations?",
          id: 1481287,
          orderNumber: 5,
          type: "text",
          maxPath: 1,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4234804,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "Thank you for sharing!",
          id: 1712897,
          orderNumber: 6,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "See if your product meets customers’ needs",
    category: "",
    description: "",
    survey: {
      id: "46ec19ece6164a11",
      name: "See if your product meets customers’ needs",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "",
          label: "How well does [product] meet your needs?",
          id: 1786036,
          orderNumber: 1,
          type: "rating",
          maxPath: 3,
          settings: {
            shape: "stars",
            leftText: "Not at all",
            rightText: "Very well",
            logic: [
              {
                id: 222662410602,
                orderNumber: 1,
                destination: 1786038,
                condition: "between",
                values: [5002274, 5002275],
              },
            ],
          },
          options: [
            {
              id: 5002271,
              label: "1",
              orderNumber: 1,
            },
            {
              id: 5002272,
              label: "2",
              orderNumber: 2,
            },
            {
              id: 5002273,
              label: "3",
              orderNumber: 3,
            },
            {
              id: 5002274,
              label: "4",
              orderNumber: 4,
            },
            {
              id: 5002275,
              label: "5",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "",
          label:
            "Sorry to hear that. How could [product] better meet your needs?",
          id: 1786037,
          orderNumber: 2,
          type: "text",
          maxPath: 2,
          settings: {
            logic: [
              {
                id: 1225782272309,
                orderNumber: 1,
                destination: -1,
                condition: "answered",
                values: [],
              },
            ],
          },
          options: [
            {
              id: 5002278,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "That’s great! Is there anything you’d like to tell us?",
          id: 1786038,
          orderNumber: 3,
          type: "text",
          maxPath: 1,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 5002279,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "Thank you for participating!",
          id: 1794075,
          orderNumber: 4,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Uncover Traffic Sources (choices) HIDDEN. DUPLICATE",
    category: "",
    description: "",
    survey: {
      id: "d750c83e2918a7a5",
      name: "Uncover Traffic Sources (choices) HIDDEN. DUPLICATE",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "Hi there! Could you please tell us:",
          label: "How did you discover our company?",
          id: 1479236,
          orderNumber: 1,
          type: "single",
          maxPath: 5,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [],
          },
          options: [
            {
              id: 4228740,
              label: "Search engine",
              orderNumber: 1,
            },
            {
              id: 4228741,
              label: "Social media",
              orderNumber: 2,
            },
            {
              id: 4228760,
              label: "Another website",
              orderNumber: 3,
            },
            {
              id: 4228761,
              label: "Referral",
              orderNumber: 4,
            },
            {
              id: 4228762,
              label: "Ad",
              orderNumber: 5,
            },
            {
              id: 4228763,
              label: "Other",
              orderNumber: 6,
            },
          ],
        },
        {
          description: "",
          label: "Can you remember which search engine?",
          id: 1479241,
          orderNumber: 2,
          type: "single",
          maxPath: 4,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [],
          },
          options: [
            {
              id: 4228764,
              label: "Google",
              orderNumber: 1,
            },
            {
              id: 4228765,
              label: "Yahoo",
              orderNumber: 2,
            },
            {
              id: 4228766,
              label: "Bing",
              orderNumber: 3,
            },
            {
              id: 4228767,
              label: "Other",
              orderNumber: 4,
            },
          ],
        },
        {
          description: "",
          label: "Can you remember where you saw the ad?",
          id: 1479242,
          orderNumber: 3,
          type: "single",
          maxPath: 3,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [],
          },
          options: [
            {
              id: 4228768,
              label: "Google search",
              orderNumber: 1,
            },
            {
              id: 4228769,
              label: "Facebook",
              orderNumber: 2,
            },
            {
              id: 4228770,
              label: "LinkedIn",
              orderNumber: 3,
            },
            {
              id: 4228771,
              label: "Other",
              orderNumber: 4,
            },
          ],
        },
        {
          description: "",
          label: "Can you remember where exactly?",
          id: 1479243,
          orderNumber: 4,
          type: "single",
          maxPath: 2,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [],
          },
          options: [
            {
              id: 4228772,
              label: "LinkedIn",
              orderNumber: 1,
            },
            {
              id: 4228773,
              label: "Facebook",
              orderNumber: 2,
            },
            {
              id: 4228774,
              label: "Twitter",
              orderNumber: 3,
            },
            {
              id: 4228775,
              label: "Instagram",
              orderNumber: 4,
            },
            {
              id: 4228776,
              label: "Other",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "",
          label: "Can you remember which site?",
          id: 1479244,
          orderNumber: 5,
          type: "text",
          maxPath: 1,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4228777,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "Can you specify?",
          id: 1479245,
          orderNumber: 6,
          type: "text",
          maxPath: 0,
          settings: {},
          options: [
            {
              id: 4228778,
              orderNumber: 1,
            },
          ],
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Recruit research panel participants",
    category: "",
    description: "",
    survey: {
      id: "3dae64baed893106",
      name: "Recruit research panel participants",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "",
          label: "Would you be interested to join our research panel?",
          id: 1506844,
          orderNumber: 1,
          type: "single",
          maxPath: 3,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [
              {
                id: 315840283101,
                orderNumber: 1,
                destination: -1,
                condition: "is",
                values: [4308118],
                operator: "or",
              },
            ],
          },
          options: [
            {
              id: 4308117,
              label: "Yes, sure! ",
              orderNumber: 1,
            },
            {
              id: 4308118,
              label: "No, thanks. ",
              orderNumber: 2,
            },
          ],
        },
        {
          description: "Fantastic! Let us first ask you a couple of questions:",
          label: "Do you use [product name] for business or personal purposes?",
          id: 1506845,
          orderNumber: 2,
          type: "single",
          maxPath: 2,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [],
          },
          options: [
            {
              id: 4308119,
              label: "Personal",
              orderNumber: 1,
            },
            {
              id: 4308120,
              label: "Business",
              orderNumber: 2,
            },
          ],
        },
        {
          description: "",
          label:
            "How likely are you to recommend [product name]\nto someone like you?",
          id: 1506846,
          orderNumber: 3,
          type: "nps",
          maxPath: 1,
          settings: {
            leftText: "Not likely",
            rightText: "Very likely",
            logic: [],
          },
        },
        {
          description: "Thanks a lot!",
          label: "Help us contact you:",
          id: 1506847,
          orderNumber: 4,
          type: "form",
          maxPath: 0,
          settings: {
            disclaimer: false,
            disclaimerText: "",
            consent: true,
            consentText: "Do you consent to this?",
          },
          options: [
            {
              id: 294255,
              label: "First name",
              orderNumber: 4,
              required: false,
              type: "first_name",
            },
            {
              id: 294256,
              label: "Email addres",
              orderNumber: 4,
              required: false,
              type: "email",
            },
          ],
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "See who visits your careers page",
    category: "",
    description: "",
    survey: {
      id: "569e44e7c326d894",
      name: "See who visits your careers page",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "",
          label: "Which of the following best describes you?",
          id: 175888,
          orderNumber: 1,
          type: "single",
          maxPath: 6,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [],
          },
          options: [
            {
              id: 318054,
              label: "Looking for my first job",
              orderNumber: 1,
            },
            {
              id: 318055,
              label: "Looking for new growth opportunities",
              orderNumber: 2,
            },
            {
              id: 318058,
              label: "Unemployed, looking for a job",
              orderNumber: 3,
            },
            {
              id: 4556510,
              label: "Other",
              orderNumber: 4,
            },
          ],
        },
        {
          description: "",
          label:
            "If any, which of the job offers advertised are you interested in?",
          id: 1602329,
          orderNumber: 2,
          type: "text",
          maxPath: 5,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4556696,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "How likely are you to apply?",
          id: 1602330,
          orderNumber: 3,
          type: "nps",
          maxPath: 4,
          settings: {
            leftText: "Not likely",
            rightText: "Very likely",
            logic: [
              {
                id: 970933147590,
                orderNumber: 1,
                destination: 1602352,
                condition: "between",
                values: [0, 6],
              },
              {
                id: 1124678155470,
                orderNumber: 2,
                destination: 175890,
                condition: "between",
                values: [9, 10],
              },
            ],
          },
        },
        {
          description: "",
          label: "Would you mind telling us why?",
          id: 1602331,
          orderNumber: 4,
          type: "text",
          maxPath: 3,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4556697,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "What compensation for the position would you expect?",
          id: 1602351,
          orderNumber: 5,
          type: "single",
          maxPath: 2,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [],
          },
          options: [
            {
              id: 4556735,
              label: "X - X USD",
              orderNumber: 1,
            },
            {
              id: 4556736,
              label: "Y - Y USD",
              orderNumber: 2,
            },
            {
              id: 4556737,
              label: "Z - Z USD",
              orderNumber: 3,
            },
          ],
        },
        {
          description: "",
          label: "Would you mind telling us why?",
          id: 1602352,
          orderNumber: 6,
          type: "text",
          maxPath: 1,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4556738,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "Thank you for taking part in the survey!",
          label: "Looking forward to seeing your CV!",
          id: 175890,
          orderNumber: 7,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Gauge task accomplishment",
    category: "",
    description: "",
    survey: {
      id: "b60d03663a3072f4",
      name: "Gauge task accomplishment",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "",
          label: "Were you able to accomplish what you came here for? ",
          id: 1484859,
          orderNumber: 1,
          type: "single",
          maxPath: 4,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [
              {
                id: 1288451299260,
                orderNumber: 1,
                destination: 1484862,
                condition: "is",
                values: [4245315],
                operator: "or",
              },
              {
                id: 671799510120,
                orderNumber: 2,
                destination: 1499966,
                condition: "is",
                values: [4286220],
                operator: "or",
              },
            ],
          },
          options: [
            {
              id: 4286220,
              label: "Yes",
              orderNumber: 1,
            },
            {
              id: 4245314,
              label: "Still working on it",
              orderNumber: 2,
            },
            {
              id: 4245315,
              label: "No",
              orderNumber: 3,
            },
          ],
        },
        {
          description: "Help us improve your experience.",
          label: "What are you trying to achieve?",
          id: 1484860,
          orderNumber: 2,
          type: "text",
          maxPath: 3,
          settings: {
            logic: [
              {
                id: 1574216762520,
                orderNumber: 1,
                destination: 1499966,
                condition: "any_value",
                values: [],
              },
            ],
          },
          options: [
            {
              id: 4245316,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "Help us improve your experience!",
          label: "What did you want to achieve?",
          id: 1484862,
          orderNumber: 3,
          type: "text",
          maxPath: 3,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4245319,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label:
            "How likely is it that you will recommend our product to a friend or colleague?",
          id: 1499966,
          orderNumber: 4,
          type: "nps",
          maxPath: 2,
          settings: {
            leftText: "Not likely",
            rightText: "Very likely",
            logic: [],
          },
        },
        {
          description: "",
          label: "Would you like to tell us why you selected this answer?",
          id: 1500002,
          orderNumber: 5,
          type: "text",
          maxPath: 1,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4286344,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "Thank you for taking the time!",
          id: 1535427,
          orderNumber: 6,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Prepare your event better",
    category: "",
    description: "",
    survey: {
      id: "5ecdac200e15074d",
      name: "Prepare your event better",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "",
          label: "How did you hear about the event?",
          id: 1775341,
          orderNumber: 1,
          type: "single",
          maxPath: 5,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [],
          },
          options: [
            {
              id: 4974631,
              label: "Our website",
              orderNumber: 1,
            },
            {
              id: 4974632,
              label: "Social media",
              orderNumber: 2,
            },
            {
              id: 4974633,
              label: "Ads",
              orderNumber: 3,
            },
            {
              id: 4974634,
              label: "Attended last year event",
              orderNumber: 4,
            },
            {
              id: 4974635,
              label: "At work",
              orderNumber: 5,
            },
            {
              id: 4974636,
              label: "Other",
              orderNumber: 6,
            },
          ],
        },
        {
          description: "",
          label: "What are you hoping to get out of the event?",
          id: 1775343,
          orderNumber: 2,
          type: "text",
          maxPath: 4,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4974638,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "Select all that apply",
          label: "What speakers are you looking forward to the most?",
          id: 1775357,
          orderNumber: 3,
          type: "multiple",
          maxPath: 3,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [],
          },
          options: [
            {
              id: 4974705,
              label: "Speaker 1",
              orderNumber: 1,
            },
            {
              id: 4974706,
              label: "Speaker 2",
              orderNumber: 2,
            },
            {
              id: 4974714,
              label: "Speaker 3",
              orderNumber: 3,
            },
          ],
        },
        {
          description: "",
          label: "What questions do you hope to find the answer to?",
          id: 1776175,
          orderNumber: 4,
          type: "text",
          maxPath: 2,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4977138,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "Select all that apply",
          label:
            "Is there any event information that you couldn't find or access easily?",
          id: 1776171,
          orderNumber: 5,
          type: "multiple",
          maxPath: 1,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [],
          },
          options: [
            {
              id: 4977124,
              label: "Location of the events",
              orderNumber: 1,
            },
            {
              id: 4977125,
              label: "Time of the events",
              orderNumber: 2,
            },
            {
              id: 4977126,
              label: "Nearby hotels",
              orderNumber: 3,
            },
            {
              id: 4977127,
              label: "How to commute from the airport",
              orderNumber: 4,
            },
            {
              id: 4977128,
              label: "Other",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "",
          label: "Thank you for participating! See you soon :) ",
          id: 1775393,
          orderNumber: 6,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Segment customers effectively",
    category: "",
    description: "",
    survey: {
      id: "ef16c332b086272c",
      name: "Segment customers effectively",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "",
          label: "What industry does your company operate in?",
          id: 1772659,
          orderNumber: 1,
          type: "single",
          maxPath: 5,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [],
          },
          options: [
            {
              id: 4966023,
              label: "Healthcare",
              orderNumber: 1,
            },
            {
              id: 4966024,
              label: "Wellness",
              orderNumber: 2,
            },
            {
              id: 4966025,
              label: "Automotive",
              orderNumber: 3,
            },
            {
              id: 4966026,
              label: "Finance",
              orderNumber: 4,
            },
            {
              id: 4966027,
              label: "Other",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "",
          label: "How big is your company?",
          id: 1772660,
          orderNumber: 2,
          type: "single",
          maxPath: 4,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [],
          },
          options: [
            {
              id: 4966028,
              label: "1-20 employees",
              orderNumber: 1,
            },
            {
              id: 4966029,
              label: "21-100 employees",
              orderNumber: 2,
            },
            {
              id: 4966030,
              label: "101-250 employees",
              orderNumber: 3,
            },
            {
              id: 4966031,
              label: "More that 250 employees",
              orderNumber: 4,
            },
          ],
        },
        {
          description: "",
          label: "What’s your role within the company?",
          id: 1772661,
          orderNumber: 3,
          type: "single",
          maxPath: 3,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [],
          },
          options: [
            {
              id: 4966032,
              label: "C-level manager",
              orderNumber: 1,
            },
            {
              id: 4966033,
              label: "Director or head of a department",
              orderNumber: 2,
            },
            {
              id: 4966034,
              label: "Mid-manager",
              orderNumber: 3,
            },
            {
              id: 4966035,
              label: "Expert",
              orderNumber: 4,
            },
            {
              id: 4966036,
              label: "Other",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "",
          label:
            "What is the biggest challenge [product name] helps you solve? ",
          id: 1772663,
          orderNumber: 4,
          type: "text",
          maxPath: 2,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4966039,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label:
            "On a scale of 1-5, how important is solving the challenge to you?",
          id: 1772664,
          orderNumber: 5,
          type: "rating",
          maxPath: 1,
          settings: {
            shape: "stars",
            leftText: "Not important at all",
            rightText: "Very important",
            logic: [],
          },
          options: [
            {
              id: 4966047,
              label: "1",
              orderNumber: 1,
            },
            {
              id: 4966048,
              label: "2",
              orderNumber: 2,
            },
            {
              id: 4966049,
              label: "3",
              orderNumber: 3,
            },
            {
              id: 4966050,
              label: "4",
              orderNumber: 4,
            },
            {
              id: 4966051,
              label: "5",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "",
          label: "What location do you work from?",
          id: 1772665,
          orderNumber: 6,
          type: "single",
          maxPath: 0,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [],
          },
          options: [
            {
              id: 4966054,
              label: "Europe",
              orderNumber: 1,
            },
            {
              id: 4966055,
              label: "North America",
              orderNumber: 2,
            },
            {
              id: 4966056,
              label: "South America",
              orderNumber: 3,
            },
            {
              id: 4966057,
              label: "Asia",
              orderNumber: 4,
            },
            {
              id: 4966058,
              label: "Africa",
              orderNumber: 5,
            },
            {
              id: 4966059,
              label: "Australia",
              orderNumber: 6,
            },
          ],
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Learn how users describe your product. HIDDEN",
    category: "",
    description: "",
    survey: {
      id: "5da8055ced135258",
      name: "Learn how users describe your product. HIDDEN",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "",
          label: "How would you describe our product?",
          id: 175799,
          orderNumber: 1,
          type: "text",
          maxPath: 1,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 317874,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "Thank you",
          label: "Have a great day",
          id: 175802,
          orderNumber: 2,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Measure transactional NPS (tNPS)",
    category: "",
    description: "",
    survey: {
      id: "15061c13daa0f3c7",
      name: "Measure transactional NPS (tNPS)",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "",
          label:
            "Based on the last interaction with [company name], <br />how likely are you to recommend our services to someone like you?",
          id: 1761183,
          orderNumber: 1,
          type: "nps",
          maxPath: 3,
          settings: {
            leftText: "Not likely",
            rightText: "Very likely",
            logic: [
              {
                id: 516922418654,
                orderNumber: 1,
                destination: 1761184,
                condition: "between",
                values: [0, 6],
              },
              {
                id: 1351989113524,
                orderNumber: 2,
                destination: 1761187,
                condition: "between",
                values: [7, 8],
              },
              {
                id: 766341756415,
                orderNumber: 3,
                destination: 1761186,
                condition: "between",
                values: [9, 10],
              },
            ],
          },
        },
        {
          description: "Thank you for sharing...",
          label: "How have we failed to meet your expectations?",
          id: 1761184,
          orderNumber: 2,
          type: "text",
          maxPath: 2,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4938499,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "Help us improve!",
          label: "In a perfect world, how would you like things to work?",
          id: 1761185,
          orderNumber: 3,
          type: "text",
          maxPath: 1,
          settings: {
            logic: [
              {
                id: 72646158919,
                orderNumber: 1,
                destination: 1761188,
                condition: "any_value",
                values: [],
              },
            ],
          },
          options: [
            {
              id: 4938500,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "What should we improve on?",
          id: 1761187,
          orderNumber: 4,
          type: "text",
          maxPath: 1,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4938501,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "Thanks for sharing! Your input matters to us!",
          id: 1761188,
          orderNumber: 5,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
        {
          description: "",
          label: "Happy to hear that! Thanks for being with us!",
          id: 1761186,
          orderNumber: 6,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Discover your audience's social media habits",
    category: "",
    description: "",
    survey: {
      id: "b1d947b1bfd54bd7",
      name: "Discover your audience's social media habits",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "",
          label: "Which of the following social media platforms do you use?",
          id: 1604508,
          orderNumber: 1,
          type: "multiple",
          maxPath: 4,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [],
          },
          options: [
            {
              id: 4561603,
              label: "LinkedIn",
              orderNumber: 1,
            },
            {
              id: 4561602,
              label: "Twitter",
              orderNumber: 2,
            },
            {
              id: 4561601,
              label: "Facebook",
              orderNumber: 3,
            },
            {
              id: 4561604,
              label: "Instagram",
              orderNumber: 4,
            },
            {
              id: 4561605,
              label: "Tik Tok",
              orderNumber: 5,
            },
            {
              id: 4561692,
              label: "Other",
              orderNumber: 6,
            },
          ],
        },
        {
          description: "",
          label: "Which one do you use most often?",
          id: 1604544,
          orderNumber: 2,
          type: "dropdown",
          maxPath: 3,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [
              {
                id: 815517782048,
                orderNumber: 1,
                destination: 1604553,
                condition: "is",
                values: [4561712],
                operator: "or",
              },
            ],
          },
          options: [
            {
              id: 4561684,
              label: "LinkedIn",
              orderNumber: 1,
            },
            {
              id: 4561685,
              label: "Twitter",
              orderNumber: 2,
            },
            {
              id: 4561686,
              label: "Facebook",
              orderNumber: 3,
            },
            {
              id: 4561687,
              label: "Instagram",
              orderNumber: 4,
            },
            {
              id: 4561688,
              label: "Tik Tok",
              orderNumber: 5,
            },
            {
              id: 4561712,
              label: "Doesn't apply",
              orderNumber: 6,
            },
          ],
        },
        {
          description: "",
          label: "How often do you use it?",
          id: 1604545,
          orderNumber: 3,
          type: "dropdown",
          maxPath: 2,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [],
          },
          options: [
            {
              id: 4561689,
              label: "Every day or so",
              orderNumber: 1,
            },
            {
              id: 4561690,
              label: "Every other day",
              orderNumber: 2,
            },
            {
              id: 4561691,
              label: "Once a week or less often",
              orderNumber: 3,
            },
          ],
        },
        {
          description: "Describe broader context if you can!",
          label: "Would you mind telling us when you use them? ",
          id: 1604546,
          orderNumber: 4,
          type: "text",
          maxPath: 1,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4561695,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "Thank you for your feedback!",
          id: 1604553,
          orderNumber: 5,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Collect feedback on the UX of filtering",
    category: "",
    description: "",
    survey: {
      id: "87643594aa63f9d8",
      name: "Collect feedback on the UX of filtering",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "",
          label: "How happy are you with the filters on this page?",
          id: 2095452,
          orderNumber: 1,
          type: "smiley_scale",
          maxPath: 3,
          settings: {
            leftText: "Very unhappy",
            rightText: "Very happy",
            logic: [],
          },
          options: [
            {
              id: 5729139,
              label: "Extremely unsatisfied",
              orderNumber: 1,
            },
            {
              id: 5729140,
              label: "Unsatisfied",
              orderNumber: 2,
            },
            {
              id: 5729141,
              label: "Neutral",
              orderNumber: 3,
            },
            {
              id: 5729142,
              label: "Happy",
              orderNumber: 4,
            },
            {
              id: 5729143,
              label: "Extremely happy",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "",
          label: "What information you were looking for today?",
          id: 1758463,
          orderNumber: 2,
          type: "text",
          maxPath: 2,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4931900,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "If anything, what would you change?",
          id: 1758457,
          orderNumber: 3,
          type: "text",
          maxPath: 1,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4931896,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "Thanks for sharing! Your feedback matters to us!",
          id: 1758466,
          orderNumber: 4,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Improve users' onboarding experience",
    category: "",
    description: "",
    survey: {
      id: "844081aef0496ab8",
      name: "Improve users' onboarding experience",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "",
          label: "How easy was it to get started with [product]?",
          id: 1780798,
          orderNumber: 1,
          type: "smiley_scale",
          maxPath: 3,
          settings: {
            leftText: "Very difficult",
            rightText: "Very easy",
            logic: [
              {
                id: 1123865542098,
                orderNumber: 1,
                destination: 1780800,
                condition: "is",
                values: [4990006, 4990005],
                operator: "or",
              },
              {
                id: 897205483949,
                orderNumber: 2,
                destination: 1780815,
                condition: "is",
                values: [4990007],
                operator: "or",
              },
            ],
          },
          options: [
            {
              id: 4990003,
              label: "Extremely unsatisfied",
              orderNumber: 1,
            },
            {
              id: 4990004,
              label: "Unsatisfied",
              orderNumber: 2,
            },
            {
              id: 4990005,
              label: "Neutral",
              orderNumber: 3,
            },
            {
              id: 4990006,
              label: "Happy",
              orderNumber: 4,
            },
            {
              id: 4990007,
              label: "Extremely happy",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "",
          label: "What was difficult about getting started with [product]?",
          id: 1780799,
          orderNumber: 2,
          type: "text",
          maxPath: 2,
          settings: {
            logic: [
              {
                id: 1108279803603,
                orderNumber: 1,
                destination: 1780801,
                condition: "any_value",
                values: [],
              },
            ],
          },
          options: [
            {
              id: 4990008,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "What could we improve?",
          id: 1780800,
          orderNumber: 3,
          type: "text",
          maxPath: 2,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4990010,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "Would you like to help us make [product name] easier to use?",
          id: 1780801,
          orderNumber: 4,
          type: "single",
          maxPath: 1,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [
              {
                id: 481993263340,
                orderNumber: 1,
                destination: 1780814,
                condition: "is",
                values: [4990012],
                operator: "or",
              },
            ],
          },
          options: [
            {
              id: 4990011,
              label: "Sure! ",
              orderNumber: 1,
            },
            {
              id: 4990012,
              label: "Maybe another time",
              orderNumber: 2,
            },
          ],
        },
        {
          description: "",
          label: "Thanks! Please, check your inbox. You've got a message!",
          id: 1780808,
          orderNumber: 5,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
        {
          description: "",
          label: "That's all right! Thanks for your feedback!",
          id: 1780814,
          orderNumber: 6,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
        {
          description: "",
          label: "Fantastic! Enjoy using [product name]!",
          id: 1780815,
          orderNumber: 7,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Comprehensive CSAT",
    category: "",
    description: "",
    survey: {
      id: "eee6e29e8ed9c2a1",
      name: "Comprehensive CSAT",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "",
          label:
            "Overall, how satisfied or dissatisfied are you with our company?",
          id: 1809389,
          orderNumber: 1,
          type: "rating",
          maxPath: 9,
          settings: {
            shape: "stars",
            leftText: "Very dissatisfied",
            rightText: "Very satisfied",
            logic: [],
          },
          options: [
            {
              id: 5064728,
              label: "1",
              orderNumber: 1,
            },
            {
              id: 5064729,
              label: "2",
              orderNumber: 2,
            },
            {
              id: 5064730,
              label: "3",
              orderNumber: 3,
            },
            {
              id: 5064731,
              label: "4",
              orderNumber: 4,
            },
            {
              id: 5064732,
              label: "5",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "",
          label:
            "How likely is it that you will recommend our product to a friend or colleague?",
          id: 1809390,
          orderNumber: 2,
          type: "nps",
          maxPath: 8,
          settings: {
            leftText: "Not likely",
            rightText: "Very likely",
            logic: [],
          },
        },
        {
          description: "",
          label: "How well do our products meet your needs?",
          id: 1809391,
          orderNumber: 3,
          type: "rating",
          maxPath: 7,
          settings: {
            shape: "stars",
            leftText: "Not at all well",
            rightText: "Extremely well",
            logic: [],
          },
          options: [
            {
              id: 5064735,
              label: "1",
              orderNumber: 1,
            },
            {
              id: 5064736,
              label: "2",
              orderNumber: 2,
            },
            {
              id: 5064737,
              label: "3",
              orderNumber: 3,
            },
            {
              id: 5064738,
              label: "4",
              orderNumber: 4,
            },
            {
              id: 5064739,
              label: "5",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "",
          label: "How would you rate the quality of the product?",
          id: 1809392,
          orderNumber: 4,
          type: "rating",
          maxPath: 6,
          settings: {
            shape: "stars",
            leftText: "Very low quality",
            rightText: "Very high quality",
            logic: [],
          },
          options: [
            {
              id: 5064742,
              label: "1",
              orderNumber: 1,
            },
            {
              id: 5064743,
              label: "2",
              orderNumber: 2,
            },
            {
              id: 5064744,
              label: "3",
              orderNumber: 3,
            },
            {
              id: 5064745,
              label: "4",
              orderNumber: 4,
            },
            {
              id: 5064746,
              label: "5",
              orderNumber: 5,
            },
            {
              id: 5064747,
              label: "6",
              orderNumber: 6,
            },
            {
              id: 5064748,
              label: "7",
              orderNumber: 7,
            },
          ],
        },
        {
          description:
            "Almost there - just a few more questions. Thanks for your input 🤩",
          label: "How would you rate the value for money of the product?",
          id: 1809393,
          orderNumber: 5,
          type: "rating",
          maxPath: 5,
          settings: {
            shape: "stars",
            leftText: "Poor",
            rightText: "Excellent",
            logic: [],
          },
          options: [
            {
              id: 5064749,
              label: "1",
              orderNumber: 1,
            },
            {
              id: 5064750,
              label: "2",
              orderNumber: 2,
            },
            {
              id: 5064751,
              label: "3",
              orderNumber: 3,
            },
            {
              id: 5064752,
              label: "4",
              orderNumber: 4,
            },
            {
              id: 5064753,
              label: "5",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "",
          label:
            "How responsive have we been to your questions or concerns about our products?",
          id: 1809394,
          orderNumber: 6,
          type: "rating",
          maxPath: 4,
          settings: {
            shape: "stars",
            leftText: "Not applicable",
            rightText: "Extremely responsive",
            logic: [],
          },
          options: [
            {
              id: 5064756,
              label: "1",
              orderNumber: 1,
            },
            {
              id: 5064757,
              label: "2",
              orderNumber: 2,
            },
            {
              id: 5064758,
              label: "3",
              orderNumber: 3,
            },
            {
              id: 5064759,
              label: "4",
              orderNumber: 4,
            },
            {
              id: 5064760,
              label: "5",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "",
          label: "How long have you been a customer of our company?",
          id: 1809399,
          orderNumber: 7,
          type: "single",
          maxPath: 3,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [],
          },
          options: [
            {
              id: 5064772,
              label: "Less than six months",
              orderNumber: 1,
            },
            {
              id: 5064774,
              label: "Six months to a year",
              orderNumber: 2,
            },
            {
              id: 5064775,
              label: "1-2 years",
              orderNumber: 3,
            },
            {
              id: 5064776,
              label: "3 or more years",
              orderNumber: 4,
            },
          ],
        },
        {
          description: "",
          label: "How likely are you to purchase any of our products again?",
          id: 1809400,
          orderNumber: 8,
          type: "rating",
          maxPath: 2,
          settings: {
            shape: "stars",
            leftText: "Not at all likely",
            rightText: "Extremely likely",
            logic: [
              {
                id: 578720245085,
                orderNumber: 1,
                destination: 1822048,
                condition: "between",
                values: [5064780, 5064781],
              },
            ],
          },
          options: [
            {
              id: 5064777,
              label: "1",
              orderNumber: 1,
            },
            {
              id: 5064778,
              label: "2",
              orderNumber: 2,
            },
            {
              id: 5064779,
              label: "3",
              orderNumber: 3,
            },
            {
              id: 5064780,
              label: "4",
              orderNumber: 4,
            },
            {
              id: 5064781,
              label: "5",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "Sorry to hear that...",
          label: "How we can improve to ensure better experience for you?",
          id: 1809401,
          orderNumber: 9,
          type: "text",
          maxPath: 1,
          settings: {
            logic: [
              {
                id: 1417127244715,
                orderNumber: 1,
                destination: -1,
                condition: "answered",
                values: [],
              },
            ],
          },
          options: [
            {
              id: 5064784,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "Happy to hear that! ",
          label: "Is there anything we can do to improve for you?",
          id: 1822048,
          orderNumber: 10,
          type: "text",
          maxPath: 0,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 5092956,
              orderNumber: 1,
            },
          ],
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Identify sign-up barriers",
    category: "",
    description: "",
    survey: {
      id: "5b5d4bcf0d14e088",
      name: "Identify sign-up barriers",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "",
          label: "How likely are you to give the [product name] a try?",
          id: 1740776,
          orderNumber: 1,
          type: "numerical_scale",
          maxPath: 5,
          settings: {
            logic: [
              {
                id: 702335759264,
                orderNumber: 1,
                destination: 1740771,
                condition: "between",
                values: [4892257, 4892261],
              },
            ],
          },
          options: [
            {
              id: 4892257,
              label: "1",
              orderNumber: 1,
            },
            {
              id: 4892258,
              label: "2",
              orderNumber: 2,
            },
            {
              id: 4892259,
              label: "3",
              orderNumber: 3,
            },
            {
              id: 4892260,
              label: "4",
              orderNumber: 4,
            },
            {
              id: 4892261,
              label: "5",
              orderNumber: 5,
            },
            {
              id: 4892262,
              label: "6",
              orderNumber: 6,
            },
            {
              id: 4892263,
              label: "7",
              orderNumber: 7,
            },
          ],
        },
        {
          description: "",
          label: "Would you like us to get in touch?",
          id: 1740821,
          orderNumber: 2,
          type: "single",
          maxPath: 2,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [
              {
                id: 1609254736052,
                orderNumber: 1,
                destination: 1740799,
                condition: "is_not",
                values: [4892383],
                operator: "or",
              },
            ],
          },
          options: [
            {
              id: 4892383,
              label: "Sure! Let's talk",
              orderNumber: 1,
            },
            {
              id: 4892384,
              label: "No thanks",
              orderNumber: 2,
            },
          ],
        },
        {
          description: "Great!",
          label: "Leave your contact details for us to get in touch!",
          id: 1740827,
          orderNumber: 3,
          type: "form",
          maxPath: 1,
          settings: {
            disclaimer: false,
            disclaimerText: "",
            consent: true,
            consentText: "Do you consent to this?",
            logic: [
              {
                id: 1258124206250,
                orderNumber: 1,
                destination: 1740812,
              },
            ],
          },
          options: [
            {
              id: 394938,
              label: "First name",
              orderNumber: 3,
              required: false,
              type: "first_name",
            },
            {
              id: 394939,
              label: "Business email",
              orderNumber: 3,
              required: false,
              type: "email",
            },
            {
              id: 394940,
              label: "Job title",
              orderNumber: 3,
              required: false,
              type: "job_title",
            },
          ],
        },
        {
          description: "Select all that apply",
          label: "What is holding you back from trying [product name]?",
          id: 1740771,
          orderNumber: 4,
          type: "multiple",
          maxPath: 4,
          settings: {
            randomize: true,
            randomizeExceptLast: true,
            logic: [
              {
                id: 1636517020704,
                orderNumber: 1,
                destination: 1740801,
                condition: "exactly",
                values: [4892246],
                operator: "and",
              },
              {
                id: 1284445230762,
                orderNumber: 2,
                destination: 1740792,
                condition: "exactly",
                values: [4892252],
                operator: "and",
              },
              {
                id: 1037855278753,
                orderNumber: 3,
                destination: 1740799,
                condition: "exactly",
                values: [4892253],
                operator: "and",
              },
            ],
          },
          options: [
            {
              id: 4892246,
              label: "The price is too high",
              orderNumber: 1,
            },
            {
              id: 4892247,
              label: "I have a question about the pricing",
              orderNumber: 2,
            },
            {
              id: 4892251,
              label: "I'm not sure if it is what I’m looking for",
              orderNumber: 3,
            },
            {
              id: 4892252,
              label: "I'm still considering other options",
              orderNumber: 4,
            },
            {
              id: 4892253,
              label: "Something else",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "",
          label: "Got it. What concerns do you have about pricing?",
          id: 1740784,
          orderNumber: 5,
          type: "text",
          maxPath: 3,
          settings: {
            logic: [
              {
                id: 1358104219034,
                orderNumber: 1,
                destination: 1740801,
                condition: "any_value",
                values: [],
              },
            ],
          },
          options: [
            {
              id: 4892286,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "Got it. What exactly are you looking for?",
          id: 1740790,
          orderNumber: 6,
          type: "text",
          maxPath: 3,
          settings: {
            logic: [
              {
                id: 1182786587492,
                orderNumber: 1,
                destination: 1740801,
                condition: "any_value",
                values: [],
              },
            ],
          },
          options: [
            {
              id: 4892299,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "Got it. What other options are you considering?",
          id: 1740792,
          orderNumber: 7,
          type: "text",
          maxPath: 3,
          settings: {
            logic: [
              {
                id: 370045214048,
                orderNumber: 1,
                destination: 1740801,
                condition: "any_value",
                values: [],
              },
            ],
          },
          options: [
            {
              id: 4892303,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "Thanks for the feedback! ",
          label: "What's your company size?",
          id: 1740801,
          orderNumber: 8,
          type: "single",
          maxPath: 2,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [],
          },
          options: [
            {
              id: 4892320,
              label: "1-50 employees",
              orderNumber: 1,
            },
            {
              id: 4892321,
              label: "51-100 employees",
              orderNumber: 2,
            },
            {
              id: 4892327,
              label: "101-200 employees",
              orderNumber: 3,
            },
            {
              id: 4892330,
              label: "Over 200 employees",
              orderNumber: 4,
            },
          ],
        },
        {
          description: "",
          label:
            "Leave your contact details, if you'd like us to get in touch! ",
          id: 1740807,
          orderNumber: 9,
          type: "form",
          maxPath: 1,
          settings: {
            disclaimer: false,
            disclaimerText: "",
            consent: true,
            consentText: "Do you consent to this?",
            logic: [],
          },
          options: [
            {
              id: 394905,
              label: "First name",
              orderNumber: 9,
              required: false,
              type: "first_name",
            },
            {
              id: 394906,
              label: "Business email",
              orderNumber: 9,
              required: false,
              type: "email",
            },
            {
              id: 394907,
              label: "Job title",
              orderNumber: 9,
              required: false,
              type: "job_title",
            },
          ],
        },
        {
          description: "",
          label:
            "Thanks!<br />Pls, check your mailbox! You've got an email from us! :)<br />",
          id: 1740812,
          orderNumber: 10,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
        {
          description: "",
          label: "Thanks for taking the time!",
          id: 1740799,
          orderNumber: 11,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Validate a name of a feature",
    category: "",
    description: "",
    survey: {
      id: "e2703e62372657ce",
      name: "Validate a name of a feature",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "",
          label:
            'What would you expect to be able to do with a "[...]" feature?',
          id: 1579414,
          orderNumber: 1,
          type: "text",
          maxPath: 1,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4501539,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "Thanks for your feedback! <br />Very helpful! ",
          id: 1579425,
          orderNumber: 2,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Improve the onboarding experience",
    category: "",
    description: "",
    survey: {
      id: "1ebbabdbbd0c2b7c",
      name: "Improve the onboarding experience",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "",
          label:
            "How would you rate your experience getting started with [product name]?",
          id: 1776609,
          orderNumber: 1,
          type: "rating",
          maxPath: 4,
          settings: {
            shape: "thumbs",
            leftText: "Very dissatisfying",
            rightText: "Very satisfying",
            logic: [
              {
                id: 88716478950,
                orderNumber: 1,
                destination: 1776611,
                condition: "between",
                values: [4978452, 4978453],
              },
            ],
          },
          options: [
            {
              id: 4978449,
              label: "1",
              orderNumber: 1,
            },
            {
              id: 4978450,
              label: "2",
              orderNumber: 2,
            },
            {
              id: 4978451,
              label: "3",
              orderNumber: 3,
            },
            {
              id: 4978452,
              label: "4",
              orderNumber: 4,
            },
            {
              id: 4978453,
              label: "5",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "Help us improve!",
          label:
            "What was difficult about getting started with [product name]?",
          id: 1776610,
          orderNumber: 2,
          type: "text",
          maxPath: 3,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4978456,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label:
            "How hopeful are you about the way [product name] will meet your needs?",
          id: 1776611,
          orderNumber: 3,
          type: "rating",
          maxPath: 2,
          settings: {
            shape: "stars",
            leftText: "Full of doubts",
            rightText: "Very hopeful",
            logic: [
              {
                id: 446724927498,
                orderNumber: 1,
                destination: 1776613,
                condition: "is",
                values: [4978468, 4978467],
                operator: "or",
              },
            ],
          },
          options: [
            {
              id: 4978464,
              label: "1",
              orderNumber: 1,
            },
            {
              id: 4978465,
              label: "2",
              orderNumber: 2,
            },
            {
              id: 4978466,
              label: "3",
              orderNumber: 3,
            },
            {
              id: 4978467,
              label: "4",
              orderNumber: 4,
            },
            {
              id: 4978468,
              label: "5",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "",
          label: "What important goal won't [product name] help you achieve?",
          id: 1776612,
          orderNumber: 4,
          type: "text",
          maxPath: 1,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4978471,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "Thank you for sharing!",
          id: 1776613,
          orderNumber: 5,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Understand your customers' toolstack",
    category: "",
    description: "",
    survey: {
      id: "2ac71984847f3062",
      name: "Understand your customers' toolstack",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "",
          label:
            "We wonder what tools we should integrate with to better serve your needs...\n<br /><br /> Would you like to answer 2 questions and share your thoughts?",
          id: 1649050,
          orderNumber: 1,
          type: "cta",
          maxPath: 5,
          settings: {
            text: "OK",
            type: "next",
          },
        },
        {
          description: "",
          label: "What tools you use at work on a daily basis?",
          id: 1649051,
          orderNumber: 2,
          type: "text",
          maxPath: 4,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4683524,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "Which of the tools you named do you spend most time using?",
          id: 1649052,
          orderNumber: 3,
          type: "text",
          maxPath: 3,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4683525,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "We might need to learn more...",
          label: "Can we get in touch?",
          id: 1649054,
          orderNumber: 4,
          type: "single",
          maxPath: 2,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [
              {
                id: 121991190454,
                orderNumber: 1,
                destination: 1649057,
                condition: "is",
                values: [4683527],
                operator: "or",
              },
            ],
          },
          options: [
            {
              id: 4683526,
              label: "Yes",
              orderNumber: 1,
            },
            {
              id: 4683527,
              label: "No",
              orderNumber: 2,
            },
          ],
        },
        {
          description: "",
          label: "Great! Help us contact you!",
          id: 1649055,
          orderNumber: 5,
          type: "form",
          maxPath: 1,
          settings: {
            disclaimer: false,
            disclaimerText: "",
            consent: true,
            consentText: "Do you consent to this?",
            logic: [],
          },
          options: [
            {
              id: 356229,
              label: "First name",
              orderNumber: 5,
              required: false,
              type: "first_name",
            },
            {
              id: 356230,
              label: "E-mail",
              orderNumber: 5,
              required: false,
              type: "email",
            },
            {
              id: 356231,
              label: "Job title",
              orderNumber: 5,
              required: false,
              type: "job_title",
            },
          ],
        },
        {
          description: "",
          label: "Thank you for sharing!\n<br />Stay in touch!",
          id: 1649056,
          orderNumber: 6,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
        {
          description: "",
          label: "No worries! Thank you for your time!",
          id: 1649057,
          orderNumber: 7,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Improve in-product copy clarity",
    category: "",
    description: "",
    survey: {
      id: "b2e7dcd9303ee5a4",
      name: "Improve in-product copy clarity",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "",
          label: "How clear is the language we use in [product name] app?",
          id: 1615927,
          orderNumber: 1,
          type: "smiley_scale",
          maxPath: 3,
          settings: {
            leftText: "Very unclear",
            rightText: "Very clear",
            logic: [
              {
                id: 820531219383,
                orderNumber: 1,
                destination: 1615938,
                condition: "is",
                values: [4588664],
                operator: "or",
              },
            ],
          },
          options: [
            {
              id: 4588660,
              label: "Extremely unsatisfied",
              orderNumber: 1,
            },
            {
              id: 4588661,
              label: "Unsatisfied",
              orderNumber: 2,
            },
            {
              id: 4588662,
              label: "Neutral",
              orderNumber: 3,
            },
            {
              id: 4588663,
              label: "Happy",
              orderNumber: 4,
            },
            {
              id: 4588664,
              label: "Extremely happy",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "Select all that apply:",
          label: "Which areas in the app do you find confusing?",
          id: 1615934,
          orderNumber: 2,
          type: "multiple",
          maxPath: 2,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [],
          },
          options: [
            {
              id: 4588718,
              label: "Main screen",
              orderNumber: 1,
            },
            {
              id: 4588719,
              label: "My account section",
              orderNumber: 2,
            },
            {
              id: 4588727,
              label: "Shopping cart",
              orderNumber: 3,
            },
            {
              id: 4588728,
              label: "Billing section",
              orderNumber: 4,
            },
            {
              id: 4588729,
              label: "Other",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "Tell us more!",
          label: "What is unclear or confusing?",
          id: 1615936,
          orderNumber: 3,
          type: "text",
          maxPath: 1,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4588730,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "Thanks for the feedback! We'll do our best!",
          id: 1615937,
          orderNumber: 4,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
        {
          description: "",
          label: "Fantastic! 🎉 Thanks for the feedback!",
          id: 1615938,
          orderNumber: 5,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Understand customer journey better (new customers)",
    category: "",
    description: "",
    survey: {
      id: "27750f4f2c86872d",
      name: "Understand customer journey better (new customers)",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "",
          label:
            "👋 Happy to have you as a customer! <br /><br />Would you like to answer a couple of questions? (All you need is 2 minutes!)",
          id: 1804582,
          orderNumber: 1,
          type: "cta",
          maxPath: 9,
          settings: {
            text: "OK",
            type: "next",
          },
        },
        {
          description: "Thanks! 🙂",
          label: "How did you hear about us?",
          id: 1804750,
          orderNumber: 2,
          type: "single",
          maxPath: 8,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [],
          },
          options: [
            {
              id: 5054340,
              label: "An online forum",
              orderNumber: 1,
            },
            {
              id: 5054341,
              label: "Social media",
              orderNumber: 2,
            },
            {
              id: 5054342,
              label: "A friend",
              orderNumber: 3,
            },
            {
              id: 5054343,
              label: "Google",
              orderNumber: 4,
            },
            {
              id: 5054344,
              label: "Other",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "",
          label: "Did you consider buying any other alternative products?",
          id: 1804751,
          orderNumber: 3,
          type: "single",
          maxPath: 7,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [
              {
                id: 1006461110566,
                orderNumber: 1,
                destination: 1804754,
                condition: "is_not",
                values: [5054345],
                operator: "or",
              },
            ],
          },
          options: [
            {
              id: 5054345,
              label: "Yes",
              orderNumber: 1,
            },
            {
              id: 5054346,
              label: "No",
              orderNumber: 2,
            },
          ],
        },
        {
          description: "",
          label: "What alternatives did you take into account?",
          id: 1804752,
          orderNumber: 4,
          type: "text",
          maxPath: 6,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 5054348,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "Select both, if applies :) ",
          label:
            "Do you need [product name] for business or personal purposes? ",
          id: 1804754,
          orderNumber: 5,
          type: "multiple",
          maxPath: 5,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [
              {
                id: 893056428004,
                orderNumber: 1,
                destination: 1804757,
                condition: "exactly",
                values: [5054357],
                operator: "and",
              },
            ],
          },
          options: [
            {
              id: 5054356,
              label: "Business",
              orderNumber: 1,
            },
            {
              id: 5054357,
              label: "Personal",
              orderNumber: 2,
            },
          ],
        },
        {
          description: "",
          label: "What industry do you operate in?",
          id: 1804755,
          orderNumber: 6,
          type: "dropdown",
          maxPath: 4,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [
              {
                id: 1221369260923,
                orderNumber: 1,
                destination: 1804757,
                condition: "is_not",
                values: [5054386],
                operator: "or",
              },
            ],
          },
          options: [
            {
              id: 5054358,
              label: "Automotive",
              orderNumber: 1,
            },
            {
              id: 5054359,
              label: "Banking",
              orderNumber: 2,
            },
            {
              id: 5054381,
              label: "Healthcare",
              orderNumber: 3,
            },
            {
              id: 5054382,
              label: "Health &amp; Wellness",
              orderNumber: 4,
            },
            {
              id: 5054383,
              label: "Hospitality",
              orderNumber: 5,
            },
            {
              id: 5054384,
              label: "IT",
              orderNumber: 6,
            },
            {
              id: 5054385,
              label: "Education",
              orderNumber: 7,
            },
            {
              id: 5054386,
              label: "Other",
              orderNumber: 8,
            },
          ],
        },
        {
          description: "",
          label: "Can you please specify?",
          id: 1804756,
          orderNumber: 7,
          type: "text",
          maxPath: 3,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 5054372,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "What was your biggest motivation to buy [product name]?",
          id: 1804757,
          orderNumber: 8,
          type: "text",
          maxPath: 2,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 5054373,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label:
            "Would you like our customer success team\nto reach out with useful tips &amp; tricks?",
          id: 1804758,
          orderNumber: 9,
          type: "single",
          maxPath: 1,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [
              {
                id: 857157562710,
                orderNumber: 1,
                destination: 1804761,
                condition: "is",
                values: [5054375],
                operator: "or",
              },
            ],
          },
          options: [
            {
              id: 5054374,
              label: "Yes. Would be nice!",
              orderNumber: 1,
            },
            {
              id: 5054375,
              label: "No, thanks ...",
              orderNumber: 2,
            },
          ],
        },
        {
          description: "",
          label:
            "Thanks for taking this survey! <br /><br />Please, check your inbox. We've sent you an email to arrange a call. :)<br /><br />Talk to you soon! 👋",
          id: 1804760,
          orderNumber: 10,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
        {
          description: "",
          label:
            "No worries! Thanks for taking the survey!<br /><br />Have fun using [product name]! 🚀👋",
          id: 1804761,
          orderNumber: 11,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Discover your audience's buying criteria",
    category: "",
    description: "",
    survey: {
      id: "4e1343866e207f09",
      name: "Discover your audience's buying criteria",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "Select 1-3 the most important criteria:",
          label:
            "Which of the following are the most important\nto you when buying software?",
          id: 1814141,
          orderNumber: 1,
          type: "multiple",
          maxPath: 2,
          settings: {
            randomize: true,
            randomizeExceptLast: true,
            logic: [],
          },
          options: [
            {
              id: 5074568,
              label: "The price",
              orderNumber: 1,
            },
            {
              id: 5074569,
              label: "Integrations with existing tool stack ",
              orderNumber: 2,
            },
            {
              id: 5074570,
              label: "Can be implemented without coding skills",
              orderNumber: 3,
            },
            {
              id: 5074571,
              label: "The software is the category leader",
              orderNumber: 4,
            },
            {
              id: 5074572,
              label: "Can adapt to existing processes",
              orderNumber: 5,
            },
            {
              id: 5074573,
              label: "24/7 customer support",
              orderNumber: 6,
            },
            {
              id: 5074574,
              label: "Other",
              orderNumber: 7,
            },
          ],
        },
        {
          description: "",
          label: "What size company do you work for?",
          id: 1812794,
          orderNumber: 2,
          type: "single",
          maxPath: 1,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [],
          },
          options: [
            {
              id: 5072596,
              label: "1-100 employees",
              orderNumber: 1,
            },
            {
              id: 5072597,
              label: "101-500 employees",
              orderNumber: 2,
            },
            {
              id: 5072598,
              label: "over 500 employees",
              orderNumber: 3,
            },
          ],
        },
        {
          description: "",
          label: "Thanks for sharing! Means a lot!",
          id: 1812766,
          orderNumber: 3,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Measure user experience with UMUX",
    category: "",
    description: "",
    survey: {
      id: "f4e75cfa1325b7aa",
      name: "Measure user experience with UMUX",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "How true are the statements for you?",
          label:
            "This [website's/ product's/ tool's/ software's] capabilities meet my requirements.",
          id: 1740995,
          orderNumber: 1,
          type: "single",
          maxPath: 5,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [],
          },
          options: [
            {
              id: 4892740,
              label: "Strongly disagree",
              orderNumber: 1,
            },
            {
              id: 4892741,
              label: "Disagree",
              orderNumber: 2,
            },
            {
              id: 4892745,
              label: "Somewhat disagree",
              orderNumber: 3,
            },
            {
              id: 4892746,
              label: "Neither agree nor disagree",
              orderNumber: 4,
            },
            {
              id: 4892747,
              label: "Somewhat agree",
              orderNumber: 5,
            },
            {
              id: 4892748,
              label: "Agree",
              orderNumber: 6,
            },
            {
              id: 4892749,
              label: "Strongly agree",
              orderNumber: 7,
            },
          ],
        },
        {
          description: "",
          label:
            "Using this [website/ product/ tool/ software] is a frustrating experience.",
          id: 1740999,
          orderNumber: 2,
          type: "single",
          maxPath: 4,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [],
          },
          options: [
            {
              id: 4892751,
              label: "Strongly disagree",
              orderNumber: 1,
            },
            {
              id: 4892752,
              label: "Disagree",
              orderNumber: 2,
            },
            {
              id: 4892755,
              label: "Somewhat disagree",
              orderNumber: 3,
            },
            {
              id: 4892756,
              label: "Neither agree nor disagree",
              orderNumber: 4,
            },
            {
              id: 4892757,
              label: "Somewhat agree",
              orderNumber: 5,
            },
            {
              id: 4892758,
              label: "Agree",
              orderNumber: 6,
            },
            {
              id: 4892759,
              label: "Strongly agree",
              orderNumber: 7,
            },
          ],
        },
        {
          description: "",
          label: "This [website/ product/ tool/ software] is easy to use.",
          id: 1741001,
          orderNumber: 3,
          type: "single",
          maxPath: 3,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [],
          },
          options: [
            {
              id: 4892760,
              label: "Strongly disagree",
              orderNumber: 1,
            },
            {
              id: 4892761,
              label: "Disagree",
              orderNumber: 2,
            },
            {
              id: 4892763,
              label: "Somewhat disagree",
              orderNumber: 3,
            },
            {
              id: 4892764,
              label: "Neither agree nor disagree",
              orderNumber: 4,
            },
            {
              id: 4892765,
              label: "Somewhat agree",
              orderNumber: 5,
            },
            {
              id: 4892766,
              label: "Agree",
              orderNumber: 6,
            },
            {
              id: 4892767,
              label: "Strongly agree",
              orderNumber: 7,
            },
          ],
        },
        {
          description: "",
          label:
            "I have to spend too much time correcting things with this [website/ product/ tool/ software].",
          id: 1741002,
          orderNumber: 4,
          type: "single",
          maxPath: 2,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [],
          },
          options: [
            {
              id: 4892769,
              label: "Strongly disagree",
              orderNumber: 1,
            },
            {
              id: 4892770,
              label: "Disagree",
              orderNumber: 2,
            },
            {
              id: 4892771,
              label: "Somewhat disagree",
              orderNumber: 3,
            },
            {
              id: 4892772,
              label: "Neither agree nor disagree",
              orderNumber: 4,
            },
            {
              id: 4892773,
              label: "Somewhat agree",
              orderNumber: 5,
            },
            {
              id: 4892774,
              label: "Agree",
              orderNumber: 6,
            },
            {
              id: 4892775,
              label: "Strongly agree",
              orderNumber: 7,
            },
          ],
        },
        {
          description: "",
          label: "If there's anything you'd like to add, feel free:",
          id: 1741003,
          orderNumber: 5,
          type: "text",
          maxPath: 1,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4892776,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "Thank you for sharing!",
          id: 1741004,
          orderNumber: 6,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Recruit research participants based on their experience level",
    category: "",
    description: "",
    survey: {
      id: "ebfc69a43a19cd6b",
      name: "Recruit research participants based on their experience level",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "",
          label:
            "👋 Would you like to help us design a [category name] app? <br />",
          id: 1810194,
          orderNumber: 1,
          type: "cta",
          maxPath: 7,
          settings: {
            text: "OK",
            type: "next",
          },
        },
        {
          description:
            "Please, select the statements you identify with the most. ",
          label: "What is your take on technology?",
          id: 1810198,
          orderNumber: 2,
          type: "multiple",
          maxPath: 6,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [],
          },
          options: [
            {
              id: 5067042,
              label:
                "I couldn’t live without it. I’m always the first one to try new pieces of technology. ",
              orderNumber: 1,
            },
            {
              id: 5067043,
              label: "I don't mind it.",
              orderNumber: 2,
            },
            {
              id: 5067052,
              label:
                "I often feel confused about it as I don’t know how to use it. ",
              orderNumber: 3,
            },
            {
              id: 5067053,
              label:
                "I wish tech were designed with people with disabilities in mind more often.",
              orderNumber: 4,
            },
            {
              id: 5067054,
              label: "Other",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "",
          label:
            "In the past 3 months, how often have you done [job to be done]? ",
          id: 1810210,
          orderNumber: 3,
          type: "single",
          maxPath: 5,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [],
          },
          options: [
            {
              id: 5067062,
              label: "Hard to say. I do it all the time",
              orderNumber: 1,
            },
            {
              id: 5067063,
              label: "Quite often",
              orderNumber: 2,
            },
            {
              id: 5067065,
              label: "Once or twice",
              orderNumber: 3,
            },
            {
              id: 5067066,
              label: "I haven’t done it in the past 3 months",
              orderNumber: 4,
            },
          ],
        },
        {
          description: "Select all the apps you have ever used.",
          label: "What apps have you used to [do the job]?",
          id: 1810213,
          orderNumber: 4,
          type: "multiple",
          maxPath: 4,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [],
          },
          options: [
            {
              id: 5067067,
              label: "Competitor 1",
              orderNumber: 1,
            },
            {
              id: 5067068,
              label: "Competitor 2",
              orderNumber: 2,
            },
            {
              id: 5067085,
              label: "Competitor 3",
              orderNumber: 3,
            },
            {
              id: 5067086,
              label: "Other",
              orderNumber: 4,
            },
          ],
        },
        {
          description: "",
          label: "How satisfied are you with the way it works/they work? ",
          id: 1810219,
          orderNumber: 5,
          type: "smiley_scale",
          maxPath: 3,
          settings: {
            leftText: "Very unsatisfied",
            rightText: "Very satisfied",
            logic: [],
          },
          options: [
            {
              id: 5067087,
              label: "Extremely unsatisfied",
              orderNumber: 1,
            },
            {
              id: 5067088,
              label: "Unsatisfied",
              orderNumber: 2,
            },
            {
              id: 5067089,
              label: "Neutral",
              orderNumber: 3,
            },
            {
              id: 5067090,
              label: "Happy",
              orderNumber: 4,
            },
            {
              id: 5067091,
              label: "Extremely happy",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "Select all that apply",
          label: "Which of the operating systems below have you ever used?",
          id: 1810222,
          orderNumber: 6,
          type: "multiple",
          maxPath: 2,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [],
          },
          options: [
            {
              id: 5067094,
              label: "MacOS ",
              orderNumber: 1,
            },
            {
              id: 5067095,
              label: "iOS",
              orderNumber: 2,
            },
            {
              id: 5067098,
              label: "Android ",
              orderNumber: 3,
            },
            {
              id: 5067099,
              label: "Windows Phone",
              orderNumber: 4,
            },
          ],
        },
        {
          description:
            "If interested in taking part in helping us design the app... ",
          label: "Leave your contact details for us to get in touch!",
          id: 1810227,
          orderNumber: 7,
          type: "form",
          maxPath: 1,
          settings: {
            disclaimer: false,
            disclaimerText: "",
            consent: true,
            consentText: "Do you consent to this?",
            logic: [],
          },
          options: [
            {
              id: 426467,
              label: "Name",
              orderNumber: 7,
              required: true,
              type: "first_name",
            },
            {
              id: 426468,
              label: "Email address",
              orderNumber: 7,
              required: true,
              type: "email",
            },
            {
              id: 426469,
              label: "Phone number",
              orderNumber: 7,
              required: false,
              type: "phone",
            },
            {
              id: 426470,
              label: "Job title",
              orderNumber: 7,
              required: false,
              type: "job_title",
            },
          ],
        },
        {
          description: "",
          label:
            "Thanks for your time! 🙌 <br /><br />We'll get in touch to inform you about the next steps!",
          id: 1810228,
          orderNumber: 8,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Check if users need onboarding assistance",
    category: "",
    description: "",
    survey: {
      id: "098605f58774a0cf",
      name: "Check if users need onboarding assistance",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "",
          label: "How easy is using [product name] to you?",
          id: 1739604,
          orderNumber: 1,
          type: "rating",
          maxPath: 4,
          settings: {
            shape: "stars",
            leftText: "Very difficult",
            rightText: "Very easy",
            logic: [
              {
                id: 662453952087,
                orderNumber: 1,
                destination: 1761703,
                condition: "between",
                values: [4889547, 4889548],
              },
            ],
          },
          options: [
            {
              id: 4889544,
              label: "1",
              orderNumber: 1,
            },
            {
              id: 4889545,
              label: "2",
              orderNumber: 2,
            },
            {
              id: 4889546,
              label: "3",
              orderNumber: 3,
            },
            {
              id: 4889547,
              label: "4",
              orderNumber: 4,
            },
            {
              id: 4889548,
              label: "5",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "",
          label: "Would you like us to walk you though it?",
          id: 1739605,
          orderNumber: 2,
          type: "single",
          maxPath: 3,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [
              {
                id: 389055145805,
                orderNumber: 1,
                destination: 1761703,
                condition: "is",
                values: [4889552],
                operator: "or",
              },
            ],
          },
          options: [
            {
              id: 4889551,
              label: "Yes",
              orderNumber: 1,
            },
            {
              id: 4889552,
              label: "No",
              orderNumber: 2,
            },
          ],
        },
        {
          description: "Sure! We will be happy to assist you!",
          label: "What will you need help with?",
          id: 1739606,
          orderNumber: 3,
          type: "multiple",
          maxPath: 2,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [],
          },
          options: [
            {
              id: 4889553,
              label: "General set up",
              orderNumber: 1,
            },
            {
              id: 4889554,
              label: "Tips and tricks",
              orderNumber: 2,
            },
            {
              id: 4889571,
              label: "Deep technical support",
              orderNumber: 3,
            },
            {
              id: 4889572,
              label: "Other ",
              orderNumber: 4,
            },
          ],
        },
        {
          description: "",
          label: "What would you like to achieve with [product name]?",
          id: 1739612,
          orderNumber: 4,
          type: "text",
          maxPath: 1,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4889573,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "Thanks for sharing!",
          label: "Please, check your mailbox! ",
          id: 1739616,
          orderNumber: 5,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
        {
          description: "",
          label: "Thank you for sharing! Have fun using [product name]!",
          id: 1761703,
          orderNumber: 6,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Test the messaging on your website (open-ended)",
    category: "",
    description: "",
    survey: {
      id: "203ee9ecb2e9dc20",
      name: "Test the messaging on your website (open-ended)",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "",
          label:
            "Would you like to help us make sure our message comes across?\n<br /><br />It'll take 2-3 minutes, and we'll be grateful forever! ♾ ;)",
          id: 1780375,
          orderNumber: 1,
          type: "cta",
          maxPath: 6,
          settings: {
            text: "OK",
            type: "next",
          },
        },
        {
          description: "Based on the information on this page...",
          label: "What do you think we do?",
          id: 1780376,
          orderNumber: 2,
          type: "text",
          maxPath: 5,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4988649,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "Based on the information on this page...",
          label: "Who do we cater to?",
          id: 1780377,
          orderNumber: 3,
          type: "text",
          maxPath: 4,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4988650,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "Based on the information on this page...",
          label:
            "What makes us different from other [product/service category] providers?",
          id: 1780378,
          orderNumber: 4,
          type: "text",
          maxPath: 3,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4988651,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "Based on the information on this page...",
          label: "How likely are you to buy [product name]?",
          id: 1780379,
          orderNumber: 5,
          type: "nps",
          maxPath: 2,
          settings: {
            leftText: "Not likely",
            rightText: "Very likely",
            logic: [
              {
                id: 523468808449,
                orderNumber: 1,
                destination: 1780392,
                condition: "between",
                values: [9, 10],
              },
            ],
          },
        },
        {
          description: "",
          label: "What makes you hesitate?",
          id: 1780380,
          orderNumber: 6,
          type: "text",
          maxPath: 1,
          settings: {
            logic: [
              {
                id: 700868723916,
                orderNumber: 1,
                destination: 1780394,
                condition: "any_value",
                values: [],
              },
            ],
          },
          options: [
            {
              id: 4988652,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "Great!",
          label: "What aspect of the offer is the most attractive to you?",
          id: 1780392,
          orderNumber: 7,
          type: "text",
          maxPath: 1,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4988710,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "Thank you for sharing! You're one of a kind! 🥇 ;)",
          id: 1780394,
          orderNumber: 8,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Measure customer satisfaction (1-3 CSAT)",
    category: "",
    description: "",
    survey: {
      id: "6ec733525a0b768d",
      name: "Measure customer satisfaction (1-3 CSAT)",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "",
          label: "How satisfied are your with your recent contact with us?",
          id: 1669356,
          orderNumber: 1,
          type: "rating",
          maxPath: 2,
          settings: {
            shape: "stars",
            leftText: "Dissatisfied",
            rightText: "Satisfied",
            logic: [
              {
                id: 546463393779,
                orderNumber: 1,
                destination: 1669393,
                condition: "is",
                values: [4738339],
                operator: "or",
              },
              {
                id: 464577441806,
                orderNumber: 2,
                destination: 1669369,
                condition: "is",
                values: [4738340],
                operator: "or",
              },
            ],
          },
          options: [
            {
              id: 4738338,
              label: "1",
              orderNumber: 1,
            },
            {
              id: 4738339,
              label: "2",
              orderNumber: 2,
            },
            {
              id: 4738340,
              label: "3",
              orderNumber: 3,
            },
          ],
        },
        {
          description: "Sorry about that! We'd love to hear more.",
          label: "Please, share your thoughts:",
          id: 1669368,
          orderNumber: 2,
          type: "text",
          maxPath: 1,
          settings: {
            logic: [
              {
                id: 1265054400889,
                orderNumber: 1,
                destination: 1669369,
                condition: "any_value",
                values: [],
              },
            ],
          },
          options: [
            {
              id: 4738355,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "Is there anything you'd like us to improve?",
          id: 1669393,
          orderNumber: 3,
          type: "text",
          maxPath: 1,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4738408,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "Thanks for the feedback! Means a lot! ",
          id: 1669369,
          orderNumber: 4,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Uncover exit intent reason (subtle) HIDDEN. DUPLICATE",
    category: "",
    description: "",
    survey: {
      id: "22c596305ade9e09",
      name: "Uncover exit intent reason (subtle) HIDDEN. DUPLICATE",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "Leaving already?",
          label: "Did you find what you were looking for?",
          id: 1481436,
          orderNumber: 1,
          type: "single",
          maxPath: 2,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [
              {
                id: 828871565392,
                orderNumber: 1,
                destination: -1,
                condition: "is",
                values: [4235168],
                operator: "or",
              },
              {
                id: 743644852015,
                orderNumber: 2,
                destination: 1481438,
                condition: "is",
                values: [4235169],
                operator: "or",
              },
            ],
          },
          options: [
            {
              id: 4235168,
              label: "Yes",
              orderNumber: 1,
            },
            {
              id: 4235169,
              label: "No",
              orderNumber: 2,
            },
          ],
        },
        {
          description: "",
          label: "What was the goal of your visit today?",
          id: 1481437,
          orderNumber: 2,
          type: "text",
          maxPath: 2,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4235170,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "What was missing?",
          id: 1481438,
          orderNumber: 3,
          type: "text",
          maxPath: 1,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4235171,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "Thank you",
          id: 1481439,
          orderNumber: 4,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Hear the voice of the customer (VoC survey)",
    category: "",
    description: "",
    survey: {
      id: "d6ba57b902ba1264",
      name: "Hear the voice of the customer (VoC survey)",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "",
          label:
            "How likely are you to recommend our product to someone like you?",
          id: 1616488,
          orderNumber: 1,
          type: "nps",
          maxPath: 6,
          settings: {
            leftText: "Not likely",
            rightText: "Very likely",
            logic: [
              {
                id: 1651089825424,
                orderNumber: 1,
                destination: 1616495,
                condition: "between",
                values: [0, 6],
              },
              {
                id: 1413787441608,
                orderNumber: 2,
                destination: 1616495,
                condition: "between",
                values: [7, 8],
              },
            ],
          },
        },
        {
          description: "",
          label:
            "What is the most important benefit you gain\n from using [product name]?",
          id: 1616499,
          orderNumber: 2,
          type: "text",
          maxPath: 5,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4590385,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "How would you rate [product name]'s ease of use?",
          id: 1616495,
          orderNumber: 3,
          type: "rating",
          maxPath: 4,
          settings: {
            shape: "stars",
            leftText: "Very poor",
            rightText: "Very good",
            logic: [],
          },
          options: [
            {
              id: 4590344,
              label: "1",
              orderNumber: 1,
            },
            {
              id: 4590345,
              label: "2",
              orderNumber: 2,
            },
            {
              id: 4590346,
              label: "3",
              orderNumber: 3,
            },
            {
              id: 4590347,
              label: "4",
              orderNumber: 4,
            },
            {
              id: 4590348,
              label: "5",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "",
          label: "How would you rate [product name]'s value for money?",
          id: 1616497,
          orderNumber: 4,
          type: "rating",
          maxPath: 3,
          settings: {
            shape: "stars",
            leftText: "Very poor",
            rightText: "Very good",
            logic: [],
          },
          options: [
            {
              id: 4590368,
              label: "1",
              orderNumber: 1,
            },
            {
              id: 4590369,
              label: "2",
              orderNumber: 2,
            },
            {
              id: 4590370,
              label: "3",
              orderNumber: 3,
            },
            {
              id: 4590371,
              label: "4",
              orderNumber: 4,
            },
            {
              id: 4590372,
              label: "5",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "",
          label: "How would you rate [product name]'s 24/7 support?",
          id: 1616498,
          orderNumber: 5,
          type: "rating",
          maxPath: 2,
          settings: {
            shape: "stars",
            leftText: "Very poor",
            rightText: "Very good",
            logic: [],
          },
          options: [
            {
              id: 4590373,
              label: "1",
              orderNumber: 1,
            },
            {
              id: 4590374,
              label: "2",
              orderNumber: 2,
            },
            {
              id: 4590375,
              label: "3",
              orderNumber: 3,
            },
            {
              id: 4590376,
              label: "4",
              orderNumber: 4,
            },
            {
              id: 4590377,
              label: "5",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "(Name the thing that matters to you most.)",
          label: "What should we improve?",
          id: 1616500,
          orderNumber: 6,
          type: "text",
          maxPath: 1,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4590386,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "Thank you for your feedback!",
          id: 1616663,
          orderNumber: 7,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Dig deep into the NPS score",
    category: "",
    description: "",
    survey: {
      id: "5ed4f014488cb890",
      name: "Dig deep into the NPS score",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "",
          label:
            "On a scale of 0 to 10, how likely are you to recommend [product name] to a friend or colleague?",
          id: 1790148,
          orderNumber: 1,
          type: "nps",
          maxPath: 5,
          settings: {
            leftText: "Not likely",
            rightText: "Very likely",
            logic: [
              {
                id: 1485605821998,
                orderNumber: 1,
                destination: 1790151,
                condition: "between",
                values: [0, 6],
              },
              {
                id: 20844405425,
                orderNumber: 2,
                destination: 1790149,
                condition: "between",
                values: [7, 8],
              },
              {
                id: 738989213536,
                orderNumber: 3,
                destination: 1790150,
                condition: "between",
                values: [9, 10],
              },
            ],
          },
        },
        {
          description: "",
          label: "What is the primary reason for your score? ",
          id: 1790149,
          orderNumber: 2,
          type: "text",
          maxPath: 4,
          settings: {
            logic: [
              {
                id: 1163014040298,
                orderNumber: 1,
                destination: 1790151,
                condition: "any_value",
                values: [],
              },
            ],
          },
          options: [
            {
              id: 5016197,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "What do you value most about [product name]?",
          id: 1790150,
          orderNumber: 3,
          type: "text",
          maxPath: 3,
          settings: {
            logic: [
              {
                id: 1328331395164,
                orderNumber: 1,
                destination: 1790152,
                condition: "any_value",
                values: [],
              },
            ],
          },
          options: [
            {
              id: 5016198,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label:
            "What's the one thing we could do to make [product name] better?",
          id: 1790151,
          orderNumber: 4,
          type: "text",
          maxPath: 3,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 5016199,
              orderNumber: 1,
            },
          ],
        },
        {
          description:
            "By participating in user interviews, you have greater say on the product",
          label: "Would you like to take part in user interviews? ",
          id: 1790152,
          orderNumber: 5,
          type: "single",
          maxPath: 2,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [
              {
                id: 334969041250,
                orderNumber: 1,
                destination: 1790161,
                condition: "is",
                values: [5016201],
                operator: "or",
              },
            ],
          },
          options: [
            {
              id: 5016200,
              label: "Sure! Sounds interesting",
              orderNumber: 1,
            },
            {
              id: 5016201,
              label: "Sorry. Maybe another time",
              orderNumber: 2,
            },
          ],
        },
        {
          description: "Happy to hear that!",
          label: "Leave your contact details so that we can get in touch!",
          id: 1790153,
          orderNumber: 6,
          type: "form",
          maxPath: 1,
          settings: {
            disclaimer: false,
            disclaimerText: "",
            consent: true,
            consentText: "Do you consent to this?",
            logic: [],
          },
          options: [
            {
              id: 417116,
              label: "Name",
              orderNumber: 6,
              required: false,
              type: "first_name",
            },
            {
              id: 417117,
              label: "Business email",
              orderNumber: 6,
              required: true,
              type: "email",
            },
          ],
        },
        {
          description: "",
          label:
            "Thank you! We'll send you an email when we before the the next round!",
          id: 1790154,
          orderNumber: 7,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
        {
          description: "",
          label: "No worries! Thanks for your time!",
          id: 1790161,
          orderNumber: 8,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Determine your activation points",
    category: "",
    description: "",
    survey: {
      id: "41b527aa40f58259",
      name: "Determine your activation points",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "",
          label:
            "Which of the following was the first moment you felt that [product name] solves your problem?",
          id: 1649008,
          orderNumber: 1,
          type: "multiple",
          maxPath: 3,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [],
          },
          options: [
            {
              id: 4683409,
              label: "Action 1 ",
              orderNumber: 1,
            },
            {
              id: 4683410,
              label: "Action 2",
              orderNumber: 2,
            },
            {
              id: 4683411,
              label: "Action 3",
              orderNumber: 3,
            },
            {
              id: 4683412,
              label: "Action 4",
              orderNumber: 4,
            },
            {
              id: 4683413,
              label: "Action 5",
              orderNumber: 5,
            },
            {
              id: 4683414,
              label: "Other",
              orderNumber: 6,
            },
          ],
        },
        {
          description: "",
          label:
            "How likely are you to recommend [product name] to your friend or a colleague?",
          id: 1649009,
          orderNumber: 2,
          type: "nps",
          maxPath: 2,
          settings: {
            leftText: "Not likely",
            rightText: "Very likely",
            logic: [
              {
                id: 426133738500,
                orderNumber: 1,
                destination: 1649012,
                condition: "between",
                values: [9, 10],
              },
            ],
          },
        },
        {
          description: "",
          label: "What improvements would you like to see?",
          id: 1649010,
          orderNumber: 3,
          type: "text",
          maxPath: 1,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4683415,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "Thank you for sharing!",
          id: 1649011,
          orderNumber: 4,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
        {
          description: "Great to hear! ",
          label: "Thanks for the taking the time!",
          id: 1649012,
          orderNumber: 5,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Explore users' jobs, pains, and gains. (Extended version)",
    category: "",
    description: "",
    survey: {
      id: "1a3e0b163a18664e",
      name: "Explore users' jobs, pains, and gains. (Extended version)",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "",
          label:
            "👋 We're looking for ways to help you with your tasks! <br /><br />Have a minute to share your thoughts? ⏳☕️ ;)",
          id: 1807706,
          orderNumber: 1,
          type: "cta",
          maxPath: 10,
          settings: {
            text: "OK",
            type: "next",
          },
        },
        {
          description: "",
          label: "What role within the organisation do you hold?",
          id: 1807705,
          orderNumber: 2,
          type: "single",
          maxPath: 9,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [],
          },
          options: [
            {
              id: 5061065,
              label: "Role 1 ",
              orderNumber: 1,
            },
            {
              id: 5061066,
              label: "Role 2",
              orderNumber: 2,
            },
            {
              id: 5061067,
              label: "Role 3",
              orderNumber: 3,
            },
            {
              id: 5061068,
              label: "Other",
              orderNumber: 4,
            },
          ],
        },
        {
          description: "",
          label: "What is your main responsibility in your current role?",
          id: 1807707,
          orderNumber: 3,
          type: "text",
          maxPath: 8,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 5061069,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label:
            "What outcomes concerning this responsibility would you need to have to feel accomplished? ",
          id: 1807708,
          orderNumber: 4,
          type: "text",
          maxPath: 7,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 5061070,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label:
            "On a scale of 1-10, how straightforward or complex\nis achieving these outcomes? ",
          id: 1807709,
          orderNumber: 5,
          type: "rating",
          maxPath: 6,
          settings: {
            shape: "stars",
            leftText: "Very complex",
            rightText: "Very straightforward",
            logic: [],
          },
          options: [
            {
              id: 5061071,
              label: "1",
              orderNumber: 1,
            },
            {
              id: 5061072,
              label: "2",
              orderNumber: 2,
            },
            {
              id: 5061073,
              label: "3",
              orderNumber: 3,
            },
            {
              id: 5061074,
              label: "4",
              orderNumber: 4,
            },
            {
              id: 5061075,
              label: "5",
              orderNumber: 5,
            },
            {
              id: 5061076,
              label: "6",
              orderNumber: 6,
            },
            {
              id: 5061077,
              label: "7",
              orderNumber: 7,
            },
            {
              id: 5061078,
              label: "8",
              orderNumber: 8,
            },
            {
              id: 5061079,
              label: "9",
              orderNumber: 9,
            },
            {
              id: 5061080,
              label: "10",
              orderNumber: 10,
            },
          ],
        },
        {
          description: "",
          label: "What are the biggest roadblocks that get in the way? ",
          id: 1807711,
          orderNumber: 6,
          type: "text",
          maxPath: 5,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 5061081,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label:
            "What consequences for the business (or your job) would\nsorting out the roadblocks have? ",
          id: 1807712,
          orderNumber: 7,
          type: "text",
          maxPath: 4,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 5061082,
              orderNumber: 1,
            },
          ],
        },
        {
          description:
            "If you've mentioned more than one roadblock, feel free to focus on one.",
          label:
            "If anything was possible, how would you like things to work? ",
          id: 1807714,
          orderNumber: 8,
          type: "text",
          maxPath: 3,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 5061090,
              orderNumber: 1,
            },
          ],
        },
        {
          description:
            "Say 'yes' if you want to have bigger impact on the solution we design. :)",
          label: "Would you be interested in taking part in user interviews? ",
          id: 1807717,
          orderNumber: 9,
          type: "single",
          maxPath: 2,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [
              {
                id: 99815923126,
                orderNumber: 1,
                destination: 1807720,
                condition: "is",
                values: [5061094],
                operator: "or",
              },
            ],
          },
          options: [
            {
              id: 5061093,
              label: "Yes",
              orderNumber: 1,
            },
            {
              id: 5061094,
              label: "No",
              orderNumber: 2,
            },
          ],
        },
        {
          description: "",
          label: "Leave your contact details so that we can get in touch!",
          id: 1807718,
          orderNumber: 10,
          type: "form",
          maxPath: 1,
          settings: {
            disclaimer: false,
            disclaimerText: "",
            consent: true,
            consentText: "Do you consent to this?",
            logic: [],
          },
          options: [
            {
              id: 424983,
              label: "Name",
              orderNumber: 10,
              required: true,
              type: "first_name",
            },
            {
              id: 424984,
              label: "Business email",
              orderNumber: 10,
              required: true,
              type: "email",
            },
          ],
        },
        {
          description: "",
          label:
            "Fantastic! <br /><br />We'll send you an email when we're ready to arrange the interviews!",
          id: 1807719,
          orderNumber: 11,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
        {
          description: "",
          label: "Thank you for sharing your thoughts! Much appreciated! ☀️",
          id: 1807720,
          orderNumber: 12,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Improve the checkout experience (open-ended)",
    category: "",
    description: "",
    survey: {
      id: "4d15626ad8ae9226",
      name: "Improve the checkout experience (open-ended)",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "Thanks for shopping with us! 💛",
          label:
            "Is there anything about the checkout process we should improve? ",
          id: 1779668,
          orderNumber: 1,
          type: "text",
          maxPath: 0,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4986643,
              orderNumber: 1,
            },
          ],
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Plan your content marketing mix better",
    category: "",
    description: "",
    survey: {
      id: "d1f69ad6270a423a",
      name: "Plan your content marketing mix better",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "",
          label:
            "👋 <br />We'd love to tailor our newsletter to your specific needs. Would you help us understand them better?",
          id: 1686640,
          orderNumber: 1,
          type: "cta",
          maxPath: 4,
          settings: {
            text: "OK",
            type: "next",
          },
        },
        {
          description: "Select all that apply ↓",
          label: "What type of content would you like to receive from us?",
          id: 1481580,
          orderNumber: 2,
          type: "multiple",
          maxPath: 3,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [],
          },
          options: [
            {
              id: 4235802,
              label: "Newsletters with educational content",
              orderNumber: 1,
            },
            {
              id: 4235803,
              label: "Product articles with feature updates and so on...",
              orderNumber: 2,
            },
            {
              id: 4235804,
              label: "Inspiring customer case studies",
              orderNumber: 3,
            },
            {
              id: 4235805,
              label: "Webinars with field experts",
              orderNumber: 4,
            },
            {
              id: 4235806,
              label: "Other (please specify)",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "",
          label:
            "How often would you like to\nhave them delivered to your mailbox?",
          id: 1481581,
          orderNumber: 3,
          type: "single",
          maxPath: 2,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [],
          },
          options: [
            {
              id: 4235807,
              label: "Once a week",
              orderNumber: 1,
            },
            {
              id: 4235808,
              label: "Every second week",
              orderNumber: 2,
            },
            {
              id: 4778699,
              label: "Once a month",
              orderNumber: 3,
            },
            {
              id: 4778700,
              label: "Never",
              orderNumber: 4,
            },
            {
              id: 4778701,
              label: "None of the above",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "Is there anything you'd like to know more about?",
          label:
            "Feel free to share what topics you'd like\nto explore more in the nearest future:",
          id: 1481582,
          orderNumber: 4,
          type: "text",
          maxPath: 1,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4235809,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "Thanks for sharing! Stay tuned! :)",
          id: 1481583,
          orderNumber: 5,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Gauge product satisfaction and readiness to upgrade",
    category: "",
    description: "",
    survey: {
      id: "5606470eda01e30a",
      name: "Gauge product satisfaction and readiness to upgrade",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "",
          label: "How happy are you with [product name]?",
          id: 1776370,
          orderNumber: 1,
          type: "smiley_scale",
          maxPath: 6,
          settings: {
            leftText: "Not happy at all",
            rightText: "Very happy",
            logic: [
              {
                id: 234901842552,
                orderNumber: 1,
                destination: 1776375,
                condition: "between",
                values: [4977662, 4977663],
              },
            ],
          },
          options: [
            {
              id: 4977659,
              label: "Extremely unsatisfied",
              orderNumber: 1,
            },
            {
              id: 4977660,
              label: "Unsatisfied",
              orderNumber: 2,
            },
            {
              id: 4977661,
              label: "Neutral",
              orderNumber: 3,
            },
            {
              id: 4977662,
              label: "Happy",
              orderNumber: 4,
            },
            {
              id: 4977663,
              label: "Extremely happy",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "Sorry to hear that",
          label: "What is the main reason you aren't satisfied with it?",
          id: 1776371,
          orderNumber: 2,
          type: "text",
          maxPath: 5,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4977664,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label:
            "Have you ever had doubts about any features or functionalities in the software?",
          id: 1776372,
          orderNumber: 3,
          type: "single",
          maxPath: 4,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [
              {
                id: 260846133515,
                orderNumber: 1,
                destination: 1776377,
                condition: "is",
                values: [4977666],
                operator: "or",
              },
            ],
          },
          options: [
            {
              id: 4977665,
              label: "Yes",
              orderNumber: 1,
            },
            {
              id: 4977666,
              label: "No",
              orderNumber: 2,
            },
          ],
        },
        {
          description: "Select all that apply",
          label: "Which of the following have you encountered problems with? ",
          id: 1776373,
          orderNumber: 4,
          type: "multiple",
          maxPath: 3,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [],
          },
          options: [
            {
              id: 4977667,
              label: "Feature/functionality 1",
              orderNumber: 1,
            },
            {
              id: 4977668,
              label: "Feature/functionality 2",
              orderNumber: 2,
            },
            {
              id: 4977669,
              label: "Feature/functionality 3",
              orderNumber: 3,
            },
            {
              id: 4977670,
              label: "Other",
              orderNumber: 4,
            },
          ],
        },
        {
          description: "",
          label:
            "Would you like us to let you know when our customer success team prepares an explainer video/article about it? ",
          id: 1776374,
          orderNumber: 5,
          type: "single",
          maxPath: 2,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [
              {
                id: 1381384691816,
                orderNumber: 1,
                destination: 1776377,
                condition: "is",
                values: [4977672],
                operator: "or",
              },
            ],
          },
          options: [
            {
              id: 4977671,
              label: "Yes",
              orderNumber: 1,
            },
            {
              id: 4977672,
              label: "No",
              orderNumber: 2,
            },
          ],
        },
        {
          description: "Happy to hear that!",
          label:
            "Which of the following features\nwould you be interested to try out? (Select all that apply)",
          id: 1776375,
          orderNumber: 6,
          type: "multiple",
          maxPath: 1,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [],
          },
          options: [
            {
              id: 4977673,
              label: "Feature/functionality 1",
              orderNumber: 1,
            },
            {
              id: 4977674,
              label: "Feature/functionality 2",
              orderNumber: 2,
            },
            {
              id: 4977675,
              label: "Feature/functionality 3",
              orderNumber: 3,
            },
            {
              id: 4977676,
              label: "Other",
              orderNumber: 4,
            },
          ],
        },
        {
          description: "",
          label: "OK! Thank you for sharing!",
          id: 1776377,
          orderNumber: 7,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Find out how much are users willing to pay (open-ended)",
    category: "",
    description: "",
    survey: {
      id: "2d3d097ab702ae7f",
      name: "Find out how much are users willing to pay (open-ended)",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "",
          label:
            "What price would be so low that you would start to question [product name]’s quality?",
          id: 1778287,
          orderNumber: 1,
          type: "text",
          maxPath: 3,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4983171,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label:
            "At what price would you consider [product name] is a bargain?",
          id: 1778288,
          orderNumber: 2,
          type: "text",
          maxPath: 2,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4983172,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label:
            "At what price would [product name] begin to seem rather expensive?",
          id: 1778289,
          orderNumber: 3,
          type: "text",
          maxPath: 1,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4983173,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label:
            "What price would make you think [product name] is too expensive?",
          id: 1778290,
          orderNumber: 4,
          type: "text",
          maxPath: 0,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4983174,
              orderNumber: 1,
            },
          ],
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Evaluate your customer support",
    category: "",
    description: "",
    survey: {
      id: "1516b681faeb737c",
      name: "Evaluate your customer support",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "",
          label:
            "How would you rate your experience with our customer help team?",
          id: 1708445,
          orderNumber: 1,
          type: "smiley_scale",
          maxPath: 4,
          settings: {
            leftText: "Very negative",
            rightText: "Very positive",
            logic: [],
          },
          options: [
            {
              id: 4826112,
              label: "Extremely unsatisfied",
              orderNumber: 1,
            },
            {
              id: 4826113,
              label: "Unsatisfied",
              orderNumber: 2,
            },
            {
              id: 4826114,
              label: "Neutral",
              orderNumber: 3,
            },
            {
              id: 4826115,
              label: "Happy",
              orderNumber: 4,
            },
            {
              id: 4826116,
              label: "Extremely happy",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "",
          label: "How much time did it take us to solve your problem?",
          id: 1708446,
          orderNumber: 2,
          type: "single",
          maxPath: 3,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [
              {
                id: 494860768616,
                orderNumber: 1,
                destination: 1708447,
                condition: "is",
                values: [4826122],
                operator: "or",
              },
            ],
          },
          options: [
            {
              id: 4826117,
              label: "Much shorter than expected",
              orderNumber: 1,
            },
            {
              id: 4826118,
              label: "Shorter than expected",
              orderNumber: 2,
            },
            {
              id: 4826119,
              label: "About what I expected",
              orderNumber: 3,
            },
            {
              id: 4826120,
              label: "Longer than expected",
              orderNumber: 4,
            },
            {
              id: 4826121,
              label: "Much longer than expected",
              orderNumber: 5,
            },
            {
              id: 4826122,
              label: "You didn't solve it",
              orderNumber: 6,
            },
          ],
        },
        {
          description: "",
          label:
            "How likely are you to recommend [product name] to a friend or colleague?",
          id: 1708448,
          orderNumber: 3,
          type: "nps",
          maxPath: 2,
          settings: {
            leftText: "Not likely",
            rightText: "Very likely",
            logic: [],
          },
        },
        {
          description: "",
          label: "Do you have any other comments / questions / concerns?",
          id: 1708449,
          orderNumber: 4,
          type: "text",
          maxPath: 1,
          settings: {
            logic: [
              {
                id: 911145671945,
                orderNumber: 1,
                destination: 1708451,
                condition: "any_value",
                values: [],
              },
            ],
          },
          options: [
            {
              id: 4826124,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "Sorry about that!",
          label: "Can you tell us once again what the problem was?",
          id: 1708447,
          orderNumber: 5,
          type: "text",
          maxPath: 1,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4826123,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "Thank you for your input!",
          id: 1708451,
          orderNumber: 6,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Succeed at B2B messaging",
    category: "",
    description: "",
    survey: {
      id: "7c6e1e8d025fed6b",
      name: "Succeed at B2B messaging",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "",
          label:
            "What is your main motivation for looking for [product category]?",
          id: 1814206,
          orderNumber: 1,
          type: "text",
          maxPath: 4,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 5074627,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label:
            "What is your most critical pain point connected with [product category]?",
          id: 1814207,
          orderNumber: 2,
          type: "text",
          maxPath: 3,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 5074628,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label:
            "If any, what doubts about buying [product category] do you have?",
          id: 1814208,
          orderNumber: 3,
          type: "text",
          maxPath: 2,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 5074629,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label:
            "What are your most important buying criteria when buying software? ",
          id: 1814209,
          orderNumber: 4,
          type: "text",
          maxPath: 1,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 5074630,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "How will you know you’ve made a good buying decision?",
          id: 1814210,
          orderNumber: 5,
          type: "text",
          maxPath: 0,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 5074631,
              orderNumber: 1,
            },
          ],
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Screen and recruit research participants in-house",
    category: "",
    description: "",
    survey: {
      id: "2126c0c672e24e77",
      name: "Screen and recruit research participants in-house",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "",
          label:
            "👋 Would you be interested in helping us design an app?<br /><br />Every person taking part in our user research will receive [compensation]<br />",
          id: 1812708,
          orderNumber: 1,
          type: "cta",
          maxPath: 11,
          settings: {
            text: "OK",
            type: "next",
          },
        },
        {
          description: "",
          label:
            "Fantastic! 🙌 We need to ask you some questions to see if you're the person we're looking for in the project. <br />",
          id: 1812710,
          orderNumber: 2,
          type: "cta",
          maxPath: 10,
          settings: {
            text: "OK",
            type: "next",
          },
        },
        {
          description: "Tell us shortly:",
          label: "What do you do for a living? ",
          id: 1812713,
          orderNumber: 3,
          type: "text",
          maxPath: 9,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 5072448,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "How would you describe your attitude to technology?",
          id: 1812714,
          orderNumber: 4,
          type: "multiple",
          maxPath: 8,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [],
          },
          options: [
            {
              id: 5072449,
              label: "It can be really confusing",
              orderNumber: 1,
            },
            {
              id: 5072450,
              label: "I don't think of it much. I simply use it. ",
              orderNumber: 2,
            },
            {
              id: 5072451,
              label: "I love technology. I'm always interested in new apps. ",
              orderNumber: 3,
            },
            {
              id: 5072452,
              label:
                "I have a set of apps that I use. But I don't like trying new things. ",
              orderNumber: 4,
            },
          ],
        },
        {
          description: "",
          label:
            "How would you describe your attitude to [eg., making monetary transactions online]? ",
          id: 1812715,
          orderNumber: 5,
          type: "text",
          maxPath: 7,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 5072453,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "Which of the following best describes you? ",
          id: 1812717,
          orderNumber: 6,
          type: "multiple",
          maxPath: 6,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [],
          },
          options: [
            {
              id: 5072455,
              label: "A statement characterizing your persona 1",
              orderNumber: 1,
            },
            {
              id: 5072456,
              label: "A statement characterizing your persona 2",
              orderNumber: 2,
            },
            {
              id: 5072457,
              label:
                "A misleading statement - one that doesn’t characterize your persona ",
              orderNumber: 3,
            },
            {
              id: 5072458,
              label: "A statement characterizing your persona 3",
              orderNumber: 4,
            },
          ],
        },
        {
          description: "",
          label:
            "In the past 6 months, which of the following things have you done?",
          id: 1812719,
          orderNumber: 7,
          type: "multiple",
          maxPath: 5,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [],
          },
          options: [
            {
              id: 5072463,
              label: "A job to be done 1",
              orderNumber: 1,
            },
            {
              id: 5072464,
              label: "A job to be done 2",
              orderNumber: 2,
            },
            {
              id: 5072465,
              label: "A misleading job to be done 1",
              orderNumber: 3,
            },
            {
              id: 5072466,
              label: "A misleading job to be done 2",
              orderNumber: 4,
            },
          ],
        },
        {
          description: "Please, tell us shortly:",
          label: "How did you do it?",
          id: 1812716,
          orderNumber: 8,
          type: "text",
          maxPath: 4,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 5072454,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label:
            "Are you available for an hour call on\n[day] between [time frame]?",
          id: 1812723,
          orderNumber: 9,
          type: "single",
          maxPath: 3,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [
              {
                id: 517721257249,
                orderNumber: 1,
                destination: 1812725,
                condition: "is",
                values: [5072475],
                operator: "or",
              },
            ],
          },
          options: [
            {
              id: 5072475,
              label: "Yes",
              orderNumber: 1,
            },
            {
              id: 5072476,
              label: "No",
              orderNumber: 2,
            },
            {
              id: 5072477,
              label: "I'm not sure",
              orderNumber: 3,
            },
          ],
        },
        {
          description: "",
          label:
            "Can we contact you to check your availability on another date?",
          id: 1812724,
          orderNumber: 10,
          type: "single",
          maxPath: 2,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [
              {
                id: 1464428499730,
                orderNumber: 1,
                destination: 1812727,
                condition: "is",
                values: [5072480],
                operator: "or",
              },
            ],
          },
          options: [
            {
              id: 5072479,
              label: "Yes",
              orderNumber: 1,
            },
            {
              id: 5072480,
              label: "No",
              orderNumber: 2,
            },
          ],
        },
        {
          description: "",
          label: "Help us get in touch:",
          id: 1812725,
          orderNumber: 11,
          type: "form",
          maxPath: 1,
          settings: {
            disclaimer: false,
            disclaimerText: "",
            consent: true,
            consentText: "Do you consent to this?",
            logic: [],
          },
          options: [
            {
              id: 427364,
              label: "Name",
              orderNumber: 11,
              required: true,
              type: "first_name",
            },
            {
              id: 427365,
              label: "Email address",
              orderNumber: 11,
              required: true,
              type: "email",
            },
            {
              id: 427366,
              label: "Phone number",
              orderNumber: 11,
              required: false,
              type: "phone",
            },
          ],
        },
        {
          description: "",
          label:
            "Thanks! 🙌<br /><br />Please, keep an eye on the inbox! :) <br /><br />Next week, we'll send you an email informing about the next steps!",
          id: 1812726,
          orderNumber: 12,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
        {
          description: "",
          label: "That's all right! Thanks for taking the time!",
          id: 1812727,
          orderNumber: 13,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Discover your customers' purchasing criteria",
    category: "",
    description: "",
    survey: {
      id: "6e86aa5e101f2c20",
      name: "Discover your customers' purchasing criteria",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "Select all that apply!",
          label:
            "Which aspects are the most important for you\nwhen buying software?",
          id: 1730621,
          orderNumber: 1,
          type: "multiple",
          maxPath: 3,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [],
          },
          options: [
            {
              id: 4867448,
              label: "Price",
              orderNumber: 1,
            },
            {
              id: 4867449,
              label: "Features",
              orderNumber: 2,
            },
            {
              id: 4867462,
              label: "Support",
              orderNumber: 3,
            },
            {
              id: 4867463,
              label: "Design",
              orderNumber: 4,
            },
            {
              id: 4867464,
              label: "Ease of use",
              orderNumber: 5,
            },
            {
              id: 4867465,
              label: "Ease of implementation",
              orderNumber: 6,
            },
            {
              id: 4867466,
              label: "Integrations",
              orderNumber: 7,
            },
            {
              id: 4867485,
              label: "Other",
              orderNumber: 8,
            },
          ],
        },
        {
          description: "",
          label: "How satisfied are you with [product name]?",
          id: 1730707,
          orderNumber: 2,
          type: "smiley_scale",
          maxPath: 2,
          settings: {
            leftText: "Very dissatisfied",
            rightText: "Very satisfied",
            logic: [
              {
                id: 632726472384,
                orderNumber: 1,
                destination: 1730713,
                condition: "is",
                values: [4867576, 4867575],
                operator: "or",
              },
              {
                id: 1097111674576,
                orderNumber: 2,
                destination: 1730658,
                condition: "is",
                values: [4867577],
                operator: "or",
              },
            ],
          },
          options: [
            {
              id: 4867573,
              label: "Extremely unsatisfied",
              orderNumber: 1,
            },
            {
              id: 4867574,
              label: "Unsatisfied",
              orderNumber: 2,
            },
            {
              id: 4867575,
              label: "Neutral",
              orderNumber: 3,
            },
            {
              id: 4867576,
              label: "Happy",
              orderNumber: 4,
            },
            {
              id: 4867577,
              label: "Extremely happy",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "",
          label: "What should we improve?",
          id: 1730710,
          orderNumber: 3,
          type: "text",
          maxPath: 1,
          settings: {
            logic: [
              {
                id: 1636613594710,
                orderNumber: 1,
                destination: 1730658,
                condition: "answered",
                values: [],
              },
              {
                id: 1545070045359,
                orderNumber: 2,
                destination: 1730658,
                condition: "not_answered",
                values: [],
              },
            ],
          },
          options: [
            {
              id: 4867588,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "Is there anything you'd like us to change?",
          id: 1730713,
          orderNumber: 4,
          type: "text",
          maxPath: 1,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4867591,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "Thanks for sharing! Your feedback matters a lot to us!",
          id: 1730658,
          orderNumber: 5,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Intercept prospects before competition",
    category: "",
    description: "",
    survey: {
      id: "dc7c1bcb90aa3c35",
      name: "Intercept prospects before competition",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "(Select all that apply)",
          label: "What does [product name] help you do?",
          id: 1649757,
          orderNumber: 1,
          type: "multiple",
          maxPath: 5,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [],
          },
          options: [
            {
              id: 4685890,
              label: "Job to be done 1 ",
              orderNumber: 1,
            },
            {
              id: 4685891,
              label: "Job to be done 2",
              orderNumber: 2,
            },
            {
              id: 4685892,
              label: "Job to be done 3",
              orderNumber: 3,
            },
            {
              id: 4685893,
              label: "Other",
              orderNumber: 4,
            },
          ],
        },
        {
          description: "Thanks for sharing!",
          label: "When did you first realize you needed to do that?",
          id: 1649759,
          orderNumber: 2,
          type: "text",
          maxPath: 4,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4685895,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "What happened that made you realize it?",
          id: 1658931,
          orderNumber: 3,
          type: "text",
          maxPath: 3,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4709357,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label:
            "Where did you look first? <br />Who did you talk to? <br />What did you ask for?",
          id: 1649763,
          orderNumber: 4,
          type: "text",
          maxPath: 2,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4685905,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "How did you find us exactly?",
          id: 1707969,
          orderNumber: 5,
          type: "text",
          maxPath: 1,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4825090,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "Thanks for taking the time! 🎉",
          id: 1649764,
          orderNumber: 6,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Find out if the product meets users' expectations",
    category: "",
    description: "",
    survey: {
      id: "dc92d5fb67709103",
      name: "Find out if the product meets users' expectations",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "",
          label: "Does [product name] work as you expected it to?",
          id: 1809180,
          orderNumber: 1,
          type: "single",
          maxPath: 5,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [
              {
                id: 1346123542052,
                orderNumber: 1,
                destination: 1809183,
                condition: "is",
                values: [5064145],
                operator: "or",
              },
              {
                id: 1400593440936,
                orderNumber: 2,
                destination: 1809186,
                condition: "is",
                values: [5064151],
                operator: "or",
              },
              {
                id: 988350782884,
                orderNumber: 3,
                destination: 1809227,
                condition: "is",
                values: [5064152],
                operator: "or",
              },
            ],
          },
          options: [
            {
              id: 5064144,
              label: "Very much so. It works exactly as expected.",
              orderNumber: 1,
            },
            {
              id: 5064145,
              label:
                "Somewhat. It meets some of the expectation but not all of them.",
              orderNumber: 2,
            },
            {
              id: 5064151,
              label: "Not at all. It's not what I expected.",
              orderNumber: 3,
            },
            {
              id: 5064152,
              label: "I'm not sure yet.",
              orderNumber: 4,
            },
          ],
        },
        {
          description: "Happy to hear that! ",
          label: "Is there anything you'd like to share with us? ",
          id: 1809182,
          orderNumber: 2,
          type: "text",
          maxPath: 4,
          settings: {
            logic: [
              {
                id: 1372548456226,
                orderNumber: 1,
                destination: 1809227,
                condition: "answered",
                values: [],
              },
            ],
          },
          options: [
            {
              id: 5064153,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "Help us do better!",
          label: "What should we improve?",
          id: 1809183,
          orderNumber: 3,
          type: "text",
          maxPath: 3,
          settings: {
            logic: [
              {
                id: 152117941559,
                orderNumber: 1,
                destination: 1809227,
                condition: "answered",
                values: [],
              },
            ],
          },
          options: [
            {
              id: 5064154,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "Sorry to hear that...",
          label: "How has it fallen short of your expectations?",
          id: 1809186,
          orderNumber: 4,
          type: "text",
          maxPath: 2,
          settings: {
            logic: [
              {
                id: 467365436999,
                orderNumber: 1,
                destination: 1809227,
                condition: "answered",
                values: [],
              },
            ],
          },
          options: [
            {
              id: 5064156,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "What is your role within the company?",
          id: 1809227,
          orderNumber: 5,
          type: "single",
          maxPath: 1,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [],
          },
          options: [
            {
              id: 5064250,
              label: "Role 1",
              orderNumber: 1,
            },
            {
              id: 5064251,
              label: "Role 2",
              orderNumber: 2,
            },
            {
              id: 5064252,
              label: "Role 3",
              orderNumber: 3,
            },
            {
              id: 5064253,
              label: "Other",
              orderNumber: 4,
            },
          ],
        },
        {
          description: "",
          label: "Thank you for sharing! Means a lot!",
          id: 1809187,
          orderNumber: 6,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
        {
          description: "",
          label: "Would you like our customer success team walk you around? ",
          id: 1809188,
          orderNumber: 7,
          type: "single",
          maxPath: 1,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [],
          },
          options: [
            {
              id: 5064157,
              label: "Sure! Would be nice!",
              orderNumber: 1,
            },
            {
              id: 5064158,
              label: "No, thanks. No need...",
              orderNumber: 2,
            },
          ],
        },
        {
          description: "",
          label: "Please, check your inbox! We've sent you an email!",
          id: 1809195,
          orderNumber: 8,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
        {
          description: "",
          label: "OK! Let us know if you change your mind! ",
          id: 1809196,
          orderNumber: 9,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Understand future purchase intent",
    category: "",
    description: "",
    survey: {
      id: "1eeeb4bb214f4969",
      name: "Understand future purchase intent",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "",
          label:
            "How likely are you to purchase from [brand] again in the next 3 months?",
          id: 1794174,
          orderNumber: 1,
          type: "rating",
          maxPath: 2,
          settings: {
            shape: "stars",
            leftText: "Not at all",
            rightText: "Very likely",
            logic: [
              {
                id: 380859964970,
                orderNumber: 1,
                destination: 1794176,
                condition: "between",
                values: [5027898, 5027899],
              },
            ],
          },
          options: [
            {
              id: 5027895,
              label: "1",
              orderNumber: 1,
            },
            {
              id: 5027896,
              label: "2",
              orderNumber: 2,
            },
            {
              id: 5027897,
              label: "3",
              orderNumber: 3,
            },
            {
              id: 5027898,
              label: "4",
              orderNumber: 4,
            },
            {
              id: 5027899,
              label: "5",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "",
          label:
            "Can you let us know why you don’t expect to purchase from us again?",
          id: 1794175,
          orderNumber: 2,
          type: "text",
          maxPath: 1,
          settings: {
            logic: [
              {
                id: 1304766251387,
                orderNumber: 1,
                destination: -1,
                condition: "answered",
                values: [],
              },
            ],
          },
          options: [
            {
              id: 5027902,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "Is there anything you'd like to share with us?",
          id: 1794176,
          orderNumber: 3,
          type: "text",
          maxPath: 0,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 5027903,
              orderNumber: 1,
            },
          ],
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Evaluate each stage of user journey",
    category: "",
    description: "",
    survey: {
      id: "5a14b6615c3fa7e0",
      name: "Evaluate each stage of user journey",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "To what extent do you agree with the statement below?",
          label: "The information on the website was clear to me",
          id: 1813216,
          orderNumber: 1,
          type: "rating",
          maxPath: 7,
          settings: {
            shape: "stars",
            leftText: "Disagree",
            rightText: "Agree",
            logic: [],
          },
          options: [
            {
              id: 5073438,
              label: "1",
              orderNumber: 1,
            },
            {
              id: 5073439,
              label: "2",
              orderNumber: 2,
            },
            {
              id: 5073440,
              label: "3",
              orderNumber: 3,
            },
          ],
        },
        {
          description: "To what extent do you agree with the statement below?",
          label:
            "It's easy to see how the [product name] differs from alternative products.",
          id: 1813217,
          orderNumber: 2,
          type: "rating",
          maxPath: 6,
          settings: {
            shape: "stars",
            leftText: "Disagree",
            rightText: "Agree",
            logic: [],
          },
          options: [
            {
              id: 5073445,
              label: "1",
              orderNumber: 1,
            },
            {
              id: 5073446,
              label: "2",
              orderNumber: 2,
            },
            {
              id: 5073447,
              label: "3",
              orderNumber: 3,
            },
          ],
        },
        {
          description: "To what extent do you agree with the statement below?",
          label: "The purchase process was smooth",
          id: 1813218,
          orderNumber: 3,
          type: "rating",
          maxPath: 5,
          settings: {
            shape: "stars",
            leftText: "Disagree",
            rightText: "Agree",
            logic: [],
          },
          options: [
            {
              id: 5073448,
              label: "1",
              orderNumber: 1,
            },
            {
              id: 5073449,
              label: "2",
              orderNumber: 2,
            },
            {
              id: 5073450,
              label: "3",
              orderNumber: 3,
            },
          ],
        },
        {
          description: "To what extent do you agree with the statement below?",
          label: "The payment process was effortless",
          id: 1813219,
          orderNumber: 4,
          type: "rating",
          maxPath: 4,
          settings: {
            shape: "stars",
            leftText: "Disagree",
            rightText: "Agree",
            logic: [],
          },
          options: [
            {
              id: 5073451,
              label: "1",
              orderNumber: 1,
            },
            {
              id: 5073452,
              label: "2",
              orderNumber: 2,
            },
            {
              id: 5073453,
              label: "3",
              orderNumber: 3,
            },
          ],
        },
        {
          description: "To what extent do you agree with the statement below?",
          label: "I had no issues with configuration",
          id: 1813220,
          orderNumber: 5,
          type: "rating",
          maxPath: 3,
          settings: {
            shape: "stars",
            leftText: "Disagree",
            rightText: "Agree",
            logic: [],
          },
          options: [
            {
              id: 5073454,
              label: "1",
              orderNumber: 1,
            },
            {
              id: 5073455,
              label: "2",
              orderNumber: 2,
            },
            {
              id: 5073456,
              label: "3",
              orderNumber: 3,
            },
          ],
        },
        {
          description: "To what extent do you agree with the statement below?",
          label:
            "The support team was very helpful when I encountered an issue",
          id: 1813221,
          orderNumber: 6,
          type: "rating",
          maxPath: 2,
          settings: {
            shape: "stars",
            leftText: "Disagree",
            rightText: "Agree",
            logic: [],
          },
          options: [
            {
              id: 5073457,
              label: "1",
              orderNumber: 1,
            },
            {
              id: 5073458,
              label: "2",
              orderNumber: 2,
            },
            {
              id: 5073459,
              label: "3",
              orderNumber: 3,
            },
          ],
        },
        {
          description: "To what extent do you agree with the statement below?",
          label: "I will use [product name] at least for a year from now",
          id: 1813222,
          orderNumber: 7,
          type: "rating",
          maxPath: 1,
          settings: {
            shape: "stars",
            leftText: "Disagree",
            rightText: "Agree",
            logic: [],
          },
          options: [
            {
              id: 5073460,
              label: "1",
              orderNumber: 1,
            },
            {
              id: 5073461,
              label: "2",
              orderNumber: 2,
            },
            {
              id: 5073462,
              label: "3",
              orderNumber: 3,
            },
          ],
        },
        {
          description: "",
          label: "Is there anything else you'd like to bring to our attention?",
          id: 1813225,
          orderNumber: 8,
          type: "text",
          maxPath: 0,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 5073467,
              orderNumber: 1,
            },
          ],
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Uncover the customer perceived value",
    category: "",
    description: "",
    survey: {
      id: "a7cf46849f32e4f7",
      name: "Uncover the customer perceived value",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "",
          label: "Would you recommend [product name] to someone like you?",
          id: 1521043,
          orderNumber: 1,
          type: "nps",
          maxPath: 4,
          settings: {
            leftText: "Not likely",
            rightText: "Very likely",
            logic: [
              {
                id: 810504277885,
                orderNumber: 1,
                destination: 1521046,
                condition: "between",
                values: [9, 10],
              },
            ],
          },
        },
        {
          description: "Sorry to hear that!",
          label: "How could we improve it for you?",
          id: 1521044,
          orderNumber: 2,
          type: "text",
          maxPath: 3,
          settings: {
            logic: [
              {
                id: 452879709911,
                orderNumber: 1,
                destination: 1521047,
                condition: "any_value",
                values: [],
              },
            ],
          },
          options: [
            {
              id: 4345468,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "Happy to hear that!",
          label: "What is the main thing you value [product name] for?",
          id: 1521046,
          orderNumber: 3,
          type: "text",
          maxPath: 3,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4345471,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "What 3 adjectives describe [product name] best? ",
          id: 1521047,
          orderNumber: 4,
          type: "text",
          maxPath: 2,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4345474,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label:
            "Which of the following brands could we <i>make friends </i>with?",
          id: 1554189,
          orderNumber: 5,
          type: "multiple",
          maxPath: 1,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [],
          },
          options: [
            {
              id: 4435663,
              label: "[A brand you'd like to be associated with]",
              orderNumber: 1,
            },
            {
              id: 4435664,
              label: "[A brand you'd like to be associated with]",
              orderNumber: 2,
            },
            {
              id: 4435665,
              label: "[A brand name you wouldn't like to be associated with]",
              orderNumber: 3,
            },
            {
              id: 4435668,
              label: "None of the above",
              orderNumber: 4,
            },
          ],
        },
        {
          description: "",
          label: "How happy are you with the value for money?",
          id: 1521049,
          orderNumber: 6,
          type: "smiley_scale",
          maxPath: 0,
          settings: {
            leftText: "Very unhappy",
            rightText: "Very happy",
          },
          options: [
            {
              id: 4345476,
              label: "Extremely unsatisfied",
              orderNumber: 1,
            },
            {
              id: 4345477,
              label: "Unsatisfied",
              orderNumber: 2,
            },
            {
              id: 4345478,
              label: "Neutral",
              orderNumber: 3,
            },
            {
              id: 4345479,
              label: "Happy",
              orderNumber: 4,
            },
            {
              id: 4345480,
              label: "Extremely happy",
              orderNumber: 5,
            },
          ],
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Discover why things matter to your customers",
    category: "",
    description: "",
    survey: {
      id: "9dacdc3681b71b81",
      name: "Discover why things matter to your customers",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "",
          label: "Would you miss [a feature/offer/product] if it was gone?",
          id: 1562893,
          orderNumber: 1,
          type: "single",
          maxPath: 3,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [
              {
                id: 1388719567911,
                orderNumber: 1,
                destination: 1562899,
                condition: "is",
                values: [4456519],
                operator: "or",
              },
              {
                id: 1017725892729,
                orderNumber: 2,
                destination: 1562900,
                condition: "is",
                values: [4456520],
                operator: "or",
              },
            ],
          },
          options: [
            {
              id: 4456509,
              label: "Very much ",
              orderNumber: 1,
            },
            {
              id: 4456510,
              label: "Somewhat",
              orderNumber: 2,
            },
            {
              id: 4456519,
              label: "Not much",
              orderNumber: 3,
            },
            {
              id: 4456520,
              label: "Not at all",
              orderNumber: 4,
            },
          ],
        },
        {
          description: "",
          label:
            "What is the biggest value you get from [a feature/offer/product]?",
          id: 1562898,
          orderNumber: 2,
          type: "text",
          maxPath: 2,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4456521,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label:
            "Would you like us to change anything about [a feature/offer/product]?",
          id: 1562899,
          orderNumber: 3,
          type: "text",
          maxPath: 1,
          settings: {
            logic: [
              {
                id: 1275081865603,
                orderNumber: 1,
                destination: 1562901,
                condition: "any_value",
                values: [],
              },
            ],
          },
          options: [
            {
              id: 4456522,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "Why not? Tell us more:",
          id: 1562900,
          orderNumber: 4,
          type: "text",
          maxPath: 1,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4456523,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "Thanks for sharing! We appreciate it! :)",
          id: 1562901,
          orderNumber: 5,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Measure usability with UMUX Lite (7-point scale)",
    category: "",
    description: "",
    survey: {
      id: "24c8344165a84109",
      name: "Measure usability with UMUX Lite (7-point scale)",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "",
          label: "This [website/ software] capabilities meet my requirements.",
          id: 1809652,
          orderNumber: 1,
          type: "rating",
          maxPath: 1,
          settings: {
            shape: "stars",
            leftText: "Strongly disagree",
            rightText: "Strongly agree",
            logic: [],
          },
          options: [
            {
              id: 5065564,
              label: "1",
              orderNumber: 1,
            },
            {
              id: 5065565,
              label: "2",
              orderNumber: 2,
            },
            {
              id: 5065566,
              label: "3",
              orderNumber: 3,
            },
            {
              id: 5065567,
              label: "4",
              orderNumber: 4,
            },
            {
              id: 5065568,
              label: "5",
              orderNumber: 5,
            },
            {
              id: 5065574,
              label: "6",
              orderNumber: 6,
            },
            {
              id: 5065575,
              label: "7",
              orderNumber: 7,
            },
          ],
        },
        {
          description: "",
          label: "This [website/ software] is easy to use.",
          id: 1809653,
          orderNumber: 2,
          type: "rating",
          maxPath: 0,
          settings: {
            shape: "stars",
            leftText: "Strongly disagree",
            rightText: "Strongly agree",
            logic: [],
          },
          options: [
            {
              id: 5065569,
              label: "1",
              orderNumber: 1,
            },
            {
              id: 5065570,
              label: "2",
              orderNumber: 2,
            },
            {
              id: 5065571,
              label: "3",
              orderNumber: 3,
            },
            {
              id: 5065572,
              label: "4",
              orderNumber: 4,
            },
            {
              id: 5065573,
              label: "5",
              orderNumber: 5,
            },
            {
              id: 5065576,
              label: "6",
              orderNumber: 6,
            },
            {
              id: 5065577,
              label: "7",
              orderNumber: 7,
            },
          ],
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Measure usability with UMUX Lite (5-point scale)",
    category: "",
    description: "",
    survey: {
      id: "8d367a8b79afe035",
      name: "Measure usability with UMUX Lite (5-point scale)",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "",
          label: "This [website/ software] capabilities meet my requirements.",
          id: 1809588,
          orderNumber: 1,
          type: "rating",
          maxPath: 1,
          settings: {
            shape: "stars",
            leftText: "Strongly disagree",
            rightText: "Strongly agree",
            logic: [],
          },
          options: [
            {
              id: 5065343,
              label: "1",
              orderNumber: 1,
            },
            {
              id: 5065344,
              label: "2",
              orderNumber: 2,
            },
            {
              id: 5065345,
              label: "3",
              orderNumber: 3,
            },
            {
              id: 5065346,
              label: "4",
              orderNumber: 4,
            },
            {
              id: 5065347,
              label: "5",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "",
          label: "This [website/ software] is easy to use.",
          id: 1809589,
          orderNumber: 2,
          type: "rating",
          maxPath: 0,
          settings: {
            shape: "stars",
            leftText: "Strongly disagree",
            rightText: "Strongly agree",
            logic: [],
          },
          options: [
            {
              id: 5065350,
              label: "1",
              orderNumber: 1,
            },
            {
              id: 5065351,
              label: "2",
              orderNumber: 2,
            },
            {
              id: 5065352,
              label: "3",
              orderNumber: 3,
            },
            {
              id: 5065353,
              label: "4",
              orderNumber: 4,
            },
            {
              id: 5065354,
              label: "5",
              orderNumber: 5,
            },
          ],
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Learn what matters most for consumers (e-commerce)",
    category: "",
    description: "",
    survey: {
      id: "566b3978e8fe39ca",
      name: "Learn what matters most for consumers (e-commerce)",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "",
          label:
            "👋 Fancy a coffee break? ☕️ ;)<br /><br />We'd like to ask you a few of questions. <br /><br />It'll take you 2-3 minutes and will help us improve your shopping experience with us!",
          id: 1805185,
          orderNumber: 1,
          type: "cta",
          maxPath: 10,
          settings: {
            text: "OK",
            type: "next",
          },
        },
        {
          description: "Please, select from 1-3 answers.",
          label:
            "Which of the following matter to you most when it comes to buying things online? ",
          id: 1805159,
          orderNumber: 2,
          type: "multiple",
          maxPath: 9,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [],
          },
          options: [
            {
              id: 5055691,
              label: "Brand",
              orderNumber: 1,
            },
            {
              id: 5055692,
              label: "Price",
              orderNumber: 2,
            },
            {
              id: 5055735,
              label: "Product quality",
              orderNumber: 3,
            },
            {
              id: 5055736,
              label: "Positive reviews",
              orderNumber: 4,
            },
            {
              id: 5055737,
              label: "Sustainable manufacturing",
              orderNumber: 5,
            },
            {
              id: 5055738,
              label: "Other",
              orderNumber: 6,
            },
          ],
        },
        {
          description: "Please, select from 1-3 answers.",
          label:
            "Which of the following aspects of shopping online matter to you the most?",
          id: 1805169,
          orderNumber: 3,
          type: "multiple",
          maxPath: 8,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [],
          },
          options: [
            {
              id: 5055751,
              label: "Short delivery time",
              orderNumber: 1,
            },
            {
              id: 5055752,
              label: "Selection of delivery options",
              orderNumber: 2,
            },
            {
              id: 5055762,
              label: "Payments in installments",
              orderNumber: 3,
            },
            {
              id: 5055763,
              label: "Possibility to pay later on",
              orderNumber: 4,
            },
            {
              id: 5055764,
              label: "Long time to return the items",
              orderNumber: 5,
            },
            {
              id: 5055765,
              label: "24/7 customer service",
              orderNumber: 6,
            },
            {
              id: 5055766,
              label: "Other",
              orderNumber: 7,
            },
          ],
        },
        {
          description: "",
          label:
            "In the past 3 months, how often have you tried to call a customer service of an online shop? ",
          id: 1805173,
          orderNumber: 4,
          type: "single",
          maxPath: 7,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [],
          },
          options: [
            {
              id: 5055767,
              label: "Never",
              orderNumber: 1,
            },
            {
              id: 5055768,
              label: "Once or twice",
              orderNumber: 2,
            },
            {
              id: 5055769,
              label: "3 times or more",
              orderNumber: 3,
            },
            {
              id: 5055770,
              label: "I don't remember",
              orderNumber: 4,
            },
          ],
        },
        {
          description: "",
          label:
            "In the past 3 months, how often have you returned an item you bought online?",
          id: 1805174,
          orderNumber: 5,
          type: "single",
          maxPath: 6,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [],
          },
          options: [
            {
              id: 5055771,
              label: "Never",
              orderNumber: 1,
            },
            {
              id: 5055772,
              label: "Once or twice",
              orderNumber: 2,
            },
            {
              id: 5055773,
              label: "3 times or more",
              orderNumber: 3,
            },
            {
              id: 5055774,
              label: "I don't remember",
              orderNumber: 4,
            },
          ],
        },
        {
          description: "",
          label:
            "In the past 3 months, how often have you opted for installments while buying?",
          id: 1805176,
          orderNumber: 6,
          type: "single",
          maxPath: 5,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [],
          },
          options: [
            {
              id: 5055777,
              label: "Never",
              orderNumber: 1,
            },
            {
              id: 5055778,
              label: "Once or twice",
              orderNumber: 2,
            },
            {
              id: 5055779,
              label: "3 times or more",
              orderNumber: 3,
            },
            {
              id: 5055780,
              label: "I don't remember",
              orderNumber: 4,
            },
          ],
        },
        {
          description: "",
          label:
            "How would you rate your experience of shopping at [shop's name]?",
          id: 1805178,
          orderNumber: 7,
          type: "smiley_scale",
          maxPath: 4,
          settings: {
            leftText: "Very dissatisfying",
            rightText: "Very satisfying",
            logic: [
              {
                id: 978685817940,
                orderNumber: 1,
                destination: 1805181,
                condition: "between",
                values: [5055791, 5055792],
              },
            ],
          },
          options: [
            {
              id: 5055788,
              label: "Extremely unsatisfied",
              orderNumber: 1,
            },
            {
              id: 5055789,
              label: "Unsatisfied",
              orderNumber: 2,
            },
            {
              id: 5055790,
              label: "Neutral",
              orderNumber: 3,
            },
            {
              id: 5055791,
              label: "Happy",
              orderNumber: 4,
            },
            {
              id: 5055792,
              label: "Extremely happy",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "Sorry to hear that!",
          label: "What would you like us to improve on?",
          id: 1805180,
          orderNumber: 8,
          type: "text",
          maxPath: 3,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 5055795,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label:
            "What do you like most about us, so we should never change it?",
          id: 1805181,
          orderNumber: 9,
          type: "text",
          maxPath: 2,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 5055796,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label:
            "Is there anything you want to share with us\nthat we haven't asked? ",
          id: 1805183,
          orderNumber: 10,
          type: "text",
          maxPath: 1,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 5055797,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "Thank you for sharing your thoughts! We appreciate it! 🙌",
          id: 1805184,
          orderNumber: 11,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Find out how your audience describes you",
    category: "",
    description: "",
    survey: {
      id: "9078beddfecee8cf",
      name: "Find out how your audience describes you",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "",
          label:
            "If you were to choose 3 adjectives to describe [product name], what would they be?",
          id: 1796898,
          orderNumber: 1,
          type: "text",
          maxPath: 3,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 5034945,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label:
            "How would you describe [product name] to someone in one sentence?",
          id: 1796899,
          orderNumber: 2,
          type: "text",
          maxPath: 2,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 5034946,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "Do you want to share anything else about [product]?",
          id: 1796908,
          orderNumber: 3,
          type: "text",
          maxPath: 1,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 5034974,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "Thank you for sharing your insights! 💫",
          id: 1796914,
          orderNumber: 4,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Uncover alternatives currently in use",
    category: "",
    description: "",
    survey: {
      id: "7c17e7324d2c6e50",
      name: "Uncover alternatives currently in use",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "",
          label:
            "Are there any other companies offering [service/product name]\nthat you're considering?",
          id: 1583362,
          orderNumber: 1,
          type: "single",
          maxPath: 4,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [
              {
                id: 1392061383461,
                orderNumber: 1,
                destination: 1583365,
                condition: "is",
                values: [4510901],
                operator: "or",
              },
            ],
          },
          options: [
            {
              id: 4510900,
              label: "Yes",
              orderNumber: 1,
            },
            {
              id: 4510901,
              label: "No",
              orderNumber: 2,
            },
          ],
        },
        {
          description: "",
          label: "Would you mind telling us what they are?",
          id: 1583363,
          orderNumber: 2,
          type: "text",
          maxPath: 3,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4510902,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "What makes you consider other options?",
          id: 1583364,
          orderNumber: 3,
          type: "text",
          maxPath: 2,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4510903,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label:
            "How likely are you to recommend our product to someone like you?",
          id: 1583365,
          orderNumber: 4,
          type: "nps",
          maxPath: 1,
          settings: {
            leftText: "Not likely",
            rightText: "Very likely",
            logic: [],
          },
        },
        {
          description: "",
          label: "Thanks for the feedback! :)",
          id: 1583366,
          orderNumber: 5,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Net Promoter Score (NPS) + Root Cause",
    category: "",
    description: "",
    survey: {
      id: "1a6f5954f876e68e",
      name: "Net Promoter Score (NPS) + Root Cause",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "",
          label:
            "How likely is it that you will recommend our product to a friend or colleague?",
          id: 1482041,
          orderNumber: 1,
          type: "nps",
          maxPath: 4,
          settings: {
            leftText: "Not likely",
            rightText: "Very likely",
            logic: [],
          },
        },
        {
          description: "",
          label: "What is the main reason for your score?",
          id: 1482042,
          orderNumber: 2,
          type: "single",
          maxPath: 3,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [],
          },
          options: [
            {
              id: 4237142,
              label: "Price",
              orderNumber: 1,
            },
            {
              id: 4237143,
              label: "Customer Service",
              orderNumber: 2,
            },
            {
              id: 4237144,
              label: "Usability",
              orderNumber: 3,
            },
            {
              id: 4237145,
              label: "Design",
              orderNumber: 4,
            },
            {
              id: 4237146,
              label: "Features",
              orderNumber: 5,
            },
            {
              id: 4237147,
              label: "Other",
              orderNumber: 6,
            },
          ],
        },
        {
          description: "Got it!",
          label: "Do you have any comments regarding your score?",
          id: 1482043,
          orderNumber: 3,
          type: "text",
          maxPath: 2,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4237149,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "Last question:",
          label:
            "What is one thing we could do differently to improve your experience?",
          id: 1482044,
          orderNumber: 4,
          type: "text",
          maxPath: 1,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4237150,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "Thank you!",
          label: "Gave a good one!",
          id: 1482045,
          orderNumber: 5,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Discover media outlets your audience visits",
    category: "",
    description: "",
    survey: {
      id: "03f04c8678527936",
      name: "Discover media outlets your audience visits",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "",
          label: "👋  Would you like to help us pen better articles for you?",
          id: 1788970,
          orderNumber: 1,
          type: "cta",
          maxPath: 4,
          settings: {
            text: "OK",
            type: "next",
          },
        },
        {
          description: "Thanks! Help us get inspired!",
          label:
            "What other [your specialization]-related blogs\n<br />or websites do you read?",
          id: 1788980,
          orderNumber: 2,
          type: "text",
          maxPath: 3,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 5012580,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "What topics do you usually read there?",
          id: 1788981,
          orderNumber: 3,
          type: "text",
          maxPath: 2,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 5012581,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "If anything, what would like us to write more about?",
          id: 1788982,
          orderNumber: 4,
          type: "text",
          maxPath: 1,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 5012582,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "Thanks for your input! It means a lot! ☀️",
          id: 1788985,
          orderNumber: 5,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Have users select the next feature you build",
    category: "",
    description: "",
    survey: {
      id: "7adaf350faf51faa",
      name: "Have users select the next feature you build",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "",
          label: "Which of the following features should we build first?",
          id: 1481970,
          orderNumber: 1,
          type: "single",
          maxPath: 1,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [],
          },
          options: [
            {
              id: 4236950,
              label: "Feature 1",
              orderNumber: 1,
            },
            {
              id: 4236951,
              label: "Feature 2",
              orderNumber: 2,
            },
            {
              id: 4236952,
              label: "Feature 3",
              orderNumber: 3,
            },
            {
              id: 4236953,
              label: "Feature 4",
              orderNumber: 4,
            },
            {
              id: 4236954,
              label: "Other",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "",
          label: "Why do you need it the most?<br />",
          id: 1481971,
          orderNumber: 2,
          type: "text",
          maxPath: 0,
          settings: {},
          options: [
            {
              id: 4236955,
              orderNumber: 1,
            },
          ],
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Discover innovation opportunites",
    category: "",
    description: "",
    survey: {
      id: "f377540c4154de6d",
      name: "Discover innovation opportunites",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "",
          label: "What is the main thing [product name] helps you do?",
          id: 1667710,
          orderNumber: 1,
          type: "text",
          maxPath: 2,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4734467,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label:
            "If anything was possible,\nhow would you like [product name] to work?",
          id: 1667711,
          orderNumber: 2,
          type: "text",
          maxPath: 1,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4734468,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "Thank you for sharing! Your input matters a lot to us! ",
          id: 1667712,
          orderNumber: 3,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Evaluate the quality of the customer service you provide",
    category: "",
    description: "",
    survey: {
      id: "2bda7a8df20ad473",
      name: "Evaluate the quality of the customer service you provide",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "",
          label:
            "How would you rate your most recent interaction with customer service?",
          id: 1708665,
          orderNumber: 1,
          type: "smiley_scale",
          maxPath: 6,
          settings: {
            leftText: "Very dissatisfying",
            rightText: "Very satisfying",
            logic: [
              {
                id: 804147972667,
                orderNumber: 1,
                destination: 1708667,
                condition: "is",
                values: [4826559, 4826560, 4826561],
                operator: "or",
              },
            ],
          },
          options: [
            {
              id: 4826557,
              label: "Extremely unsatisfied",
              orderNumber: 1,
            },
            {
              id: 4826558,
              label: "Unsatisfied",
              orderNumber: 2,
            },
            {
              id: 4826559,
              label: "Neutral",
              orderNumber: 3,
            },
            {
              id: 4826560,
              label: "Happy",
              orderNumber: 4,
            },
            {
              id: 4826561,
              label: "Extremely happy",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "",
          label: "Please share the reason for your answer:",
          id: 1708666,
          orderNumber: 2,
          type: "text",
          maxPath: 5,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4826562,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label:
            "Did the customer service agent you spoke to help you with your request?",
          id: 1708667,
          orderNumber: 3,
          type: "single",
          maxPath: 4,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [
              {
                id: 974674153981,
                orderNumber: 1,
                destination: 1708669,
                condition: "is",
                values: [4826563],
                operator: "or",
              },
            ],
          },
          options: [
            {
              id: 4826563,
              label: "Yes",
              orderNumber: 1,
            },
            {
              id: 4826564,
              label: "Partially",
              orderNumber: 2,
            },
            {
              id: 4826565,
              label: "No",
              orderNumber: 3,
            },
          ],
        },
        {
          description: "",
          label: "What wasn't he/she able to help you with?",
          id: 1708668,
          orderNumber: 4,
          type: "text",
          maxPath: 3,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4826566,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label:
            "How would you rate the responsiveness of our customer support team?",
          id: 1708669,
          orderNumber: 5,
          type: "smiley_scale",
          maxPath: 2,
          settings: {
            leftText: "Very dissatisfying",
            rightText: "Very satisfying",
            logic: [],
          },
          options: [
            {
              id: 4826567,
              label: "Extremely unsatisfied",
              orderNumber: 1,
            },
            {
              id: 4826568,
              label: "Unsatisfied",
              orderNumber: 2,
            },
            {
              id: 4826569,
              label: "Neutral",
              orderNumber: 3,
            },
            {
              id: 4826570,
              label: "Happy",
              orderNumber: 4,
            },
            {
              id: 4826571,
              label: "Extremely happy",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "",
          label: "Is there anything else you'd like to bring to our attention?",
          id: 1708670,
          orderNumber: 6,
          type: "text",
          maxPath: 1,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4826572,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "Thank you for sharing!",
          id: 1708672,
          orderNumber: 7,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Measure subscribers' satisfaction with their plans",
    category: "",
    description: "",
    survey: {
      id: "06cb65a71e47a1a5",
      name: "Measure subscribers' satisfaction with their plans",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "",
          label:
            "How satisfied are you with your subscription to [product name]?",
          id: 1613596,
          orderNumber: 1,
          type: "smiley_scale",
          maxPath: 2,
          settings: {
            leftText: "Not at all",
            rightText: "Very satisfied",
            logic: [
              {
                id: 1534080237660,
                orderNumber: 1,
                destination: 1620826,
                condition: "is",
                values: [4581879],
                operator: "or",
              },
              {
                id: 630008986490,
                orderNumber: 2,
                destination: 1613598,
                condition: "is",
                values: [4581880],
                operator: "or",
              },
            ],
          },
          options: [
            {
              id: 4581876,
              label: "Extremely unsatisfied",
              orderNumber: 1,
            },
            {
              id: 4581877,
              label: "Unsatisfied",
              orderNumber: 2,
            },
            {
              id: 4581878,
              label: "Neutral",
              orderNumber: 3,
            },
            {
              id: 4581879,
              label: "Happy",
              orderNumber: 4,
            },
            {
              id: 4581880,
              label: "Extremely happy",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "Sorry to hear that! ",
          label: "Tell us what you aren’t satisfied with, so we can improve!",
          id: 1613597,
          orderNumber: 2,
          type: "text",
          maxPath: 1,
          settings: {
            logic: [
              {
                id: 259022262350,
                orderNumber: 1,
                destination: 1620827,
                condition: "any_value",
                values: [],
              },
            ],
          },
          options: [
            {
              id: 4581881,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "What can we do better?",
          id: 1620826,
          orderNumber: 3,
          type: "text",
          maxPath: 1,
          settings: {
            logic: [
              {
                id: 106951127680,
                orderNumber: 1,
                destination: 1620827,
                condition: "any_value",
                values: [],
              },
            ],
          },
          options: [
            {
              id: 4599988,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "Happy to hear that!",
          label: "Is there anything you'd like to tell us?",
          id: 1613598,
          orderNumber: 4,
          type: "text",
          maxPath: 1,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4581882,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "Thanks for the feedback!",
          id: 1620827,
          orderNumber: 5,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Measure users' perceptions of your product with the SUPR-Q survey",
    category: "",
    description: "",
    survey: {
      id: "12e9815cea03429c",
      name: "Measure users' perceptions of your product with the SUPR-Q survey",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "",
          label:
            "Do you have a minute to spare?  <br /><br />We'd love to know what you think of [product name]!<br />",
          id: 1809886,
          orderNumber: 1,
          type: "cta",
          maxPath: 7,
          settings: {
            text: "OK",
            type: "next",
          },
        },
        {
          description: "How true are the statements for you?",
          label: "I find [product name] easy to use. ",
          id: 1809896,
          orderNumber: 2,
          type: "numerical_scale",
          maxPath: 6,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 5066225,
              label: "1",
              orderNumber: 1,
            },
            {
              id: 5066226,
              label: "2",
              orderNumber: 2,
            },
            {
              id: 5066227,
              label: "3",
              orderNumber: 3,
            },
            {
              id: 5066228,
              label: "4",
              orderNumber: 4,
            },
            {
              id: 5066229,
              label: "5",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "",
          label: "I find [product name] easy to navigate.",
          id: 1809897,
          orderNumber: 3,
          type: "numerical_scale",
          maxPath: 5,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 5066232,
              label: "1",
              orderNumber: 1,
            },
            {
              id: 5066233,
              label: "2",
              orderNumber: 2,
            },
            {
              id: 5066234,
              label: "3",
              orderNumber: 3,
            },
            {
              id: 5066235,
              label: "4",
              orderNumber: 4,
            },
            {
              id: 5066236,
              label: "5",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "",
          label: "I feel confident making transactions in [product name].",
          id: 1809899,
          orderNumber: 4,
          type: "numerical_scale",
          maxPath: 4,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 5066242,
              label: "1",
              orderNumber: 1,
            },
            {
              id: 5066243,
              label: "2",
              orderNumber: 2,
            },
            {
              id: 5066244,
              label: "3",
              orderNumber: 3,
            },
            {
              id: 5066245,
              label: "4",
              orderNumber: 4,
            },
            {
              id: 5066246,
              label: "5",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "",
          label: "I find [product name] to be attractive.",
          id: 1809901,
          orderNumber: 5,
          type: "numerical_scale",
          maxPath: 3,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 5066247,
              label: "1",
              orderNumber: 1,
            },
            {
              id: 5066248,
              label: "2",
              orderNumber: 2,
            },
            {
              id: 5066249,
              label: "3",
              orderNumber: 3,
            },
            {
              id: 5066250,
              label: "4",
              orderNumber: 4,
            },
            {
              id: 5066251,
              label: "5",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "",
          label:
            "The presentation of information on [product name] is clear to me.",
          id: 1809902,
          orderNumber: 6,
          type: "numerical_scale",
          maxPath: 2,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 5066252,
              label: "1",
              orderNumber: 1,
            },
            {
              id: 5066253,
              label: "2",
              orderNumber: 2,
            },
            {
              id: 5066254,
              label: "3",
              orderNumber: 3,
            },
            {
              id: 5066255,
              label: "4",
              orderNumber: 4,
            },
            {
              id: 5066256,
              label: "5",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "",
          label: "Is there anything you'd like to add?",
          id: 1809955,
          orderNumber: 7,
          type: "text",
          maxPath: 1,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 5066376,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "Thanks a lot! Huge help! 💛",
          id: 1809903,
          orderNumber: 8,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Research product development opportunities",
    category: "",
    description: "",
    survey: {
      id: "a191614d12d94d47",
      name: "Research product development opportunities",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "",
          label:
            "How likely are you to recommend [product name] to someone like you?",
          id: 1778405,
          orderNumber: 1,
          type: "nps",
          maxPath: 5,
          settings: {
            leftText: "Not likely",
            rightText: "Very likely",
            logic: [
              {
                id: 569415880827,
                orderNumber: 1,
                destination: 1778406,
                condition: "between",
                values: [0, 6],
              },
              {
                id: 55877150890,
                orderNumber: 2,
                destination: 1778409,
                condition: "between",
                values: [9, 10],
              },
            ],
          },
        },
        {
          description: "Thank you for sharing! Your input matters a lot to us!",
          label:
            "If anything was possible, how would you like [product name] to work?",
          id: 1778406,
          orderNumber: 2,
          type: "text",
          maxPath: 4,
          settings: {
            logic: [
              {
                id: 996949798331,
                orderNumber: 1,
                destination: 1913414,
                condition: "any_value",
                values: [],
              },
            ],
          },
          options: [
            {
              id: 4983561,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "Happy to hear that!",
          label: "What do you like most about [product name]?",
          id: 1778409,
          orderNumber: 3,
          type: "text",
          maxPath: 4,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4983566,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "What is your job title?",
          id: 1913414,
          orderNumber: 4,
          type: "dropdown",
          maxPath: 3,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [],
          },
          options: [
            {
              id: 5315559,
              label: "Job title 1",
              orderNumber: 1,
            },
            {
              id: 5315560,
              label: "Job title 2",
              orderNumber: 2,
            },
            {
              id: 5315561,
              label: "Job title 3",
              orderNumber: 3,
            },
            {
              id: 5315562,
              label: "Other",
              orderNumber: 4,
            },
          ],
        },
        {
          description: "",
          label:
            "Would you like to take part in a user research to help us design a better product?",
          id: 1913415,
          orderNumber: 5,
          type: "single",
          maxPath: 2,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [
              {
                id: 977281532326,
                orderNumber: 1,
                destination: 1778411,
                condition: "is",
                values: [5315564],
                operator: "or",
              },
            ],
          },
          options: [
            {
              id: 5315563,
              label: "Yes",
              orderNumber: 1,
            },
            {
              id: 5315564,
              label: "No",
              orderNumber: 2,
            },
          ],
        },
        {
          description: "Thank you!",
          label: "Leave us your email. We'll be in touch shortly:",
          id: 1913416,
          orderNumber: 6,
          type: "form",
          maxPath: 1,
          settings: {
            disclaimer: false,
            disclaimerText: "",
            consent: true,
            consentText: "Do you consent to this?",
            logic: [],
          },
          options: [
            {
              id: 470147,
              label: "First name",
              orderNumber: 6,
              required: false,
              type: "first_name",
            },
            {
              id: 470148,
              label: "Email address",
              orderNumber: 6,
              required: false,
              type: "email",
            },
          ],
        },
        {
          description: "",
          label: "Thank you for sharing!",
          id: 1778411,
          orderNumber: 7,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Improve user activation",
    category: "",
    description: "",
    survey: {
      id: "c3fbdb7a95e79674",
      name: "Improve user activation",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "",
          label: "How satisfied are you with [product name]?",
          id: 1488661,
          orderNumber: 1,
          type: "rating",
          maxPath: 5,
          settings: {
            shape: "stars",
            leftText: "Very unsatisfied",
            rightText: "Very satisfied",
            logic: [],
          },
          options: [
            {
              id: 4257382,
              label: "1",
              orderNumber: 1,
            },
            {
              id: 4257383,
              label: "2",
              orderNumber: 2,
            },
            {
              id: 4257384,
              label: "3",
              orderNumber: 3,
            },
            {
              id: 4257385,
              label: "4",
              orderNumber: 4,
            },
            {
              id: 4257386,
              label: "5",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "",
          label: "How easy or difficult to use is [product name]?",
          id: 1488662,
          orderNumber: 2,
          type: "rating",
          maxPath: 4,
          settings: {
            shape: "stars",
            leftText: "Very difficult",
            rightText: "Very easy",
            logic: [],
          },
          options: [
            {
              id: 4257389,
              label: "1",
              orderNumber: 1,
            },
            {
              id: 4257390,
              label: "2",
              orderNumber: 2,
            },
            {
              id: 4257391,
              label: "3",
              orderNumber: 3,
            },
            {
              id: 4257392,
              label: "4",
              orderNumber: 4,
            },
            {
              id: 4257393,
              label: "5",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "",
          label:
            "On a scale of 1-5, how true is the sentence for you?\n<br /><br />“[Product name] helps me do my job.”",
          id: 1488663,
          orderNumber: 3,
          type: "rating",
          maxPath: 3,
          settings: {
            shape: "stars",
            leftText: "Not true at all",
            rightText: "Very true",
            logic: [],
          },
          options: [
            {
              id: 4257399,
              label: "1",
              orderNumber: 1,
            },
            {
              id: 4257400,
              label: "2",
              orderNumber: 2,
            },
            {
              id: 4257401,
              label: "3",
              orderNumber: 3,
            },
            {
              id: 4257402,
              label: "4",
              orderNumber: 4,
            },
            {
              id: 4257403,
              label: "5",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "",
          label: "Have you ever looked for a feature but couldn't find it?",
          id: 1488664,
          orderNumber: 4,
          type: "single",
          maxPath: 2,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [
              {
                id: 673470737407,
                orderNumber: 1,
                destination: 1488665,
                condition: "is",
                values: [4257407, 4257408],
                operator: "or",
              },
            ],
          },
          options: [
            {
              id: 4257406,
              label: "Yes, I have.",
              orderNumber: 1,
            },
            {
              id: 4257407,
              label: "No, I haven't.",
              orderNumber: 2,
            },
            {
              id: 4257408,
              label: "I don’t remember.",
              orderNumber: 3,
            },
          ],
        },
        {
          description: "",
          label: "What feature was it?",
          id: 1499719,
          orderNumber: 5,
          type: "text",
          maxPath: 1,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4285499,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label:
            "You don't use [product name] very often. Would you mind telling us why?",
          id: 1488665,
          orderNumber: 6,
          type: "text",
          maxPath: 0,
          settings: {},
          options: [
            {
              id: 4257409,
              orderNumber: 1,
            },
          ],
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Identify the most lucrative jobs to be done",
    category: "",
    description: "",
    survey: {
      id: "ed6ea88bb1032cda",
      name: "Identify the most lucrative jobs to be done",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "",
          label:
            "👋 We're looking for ways to help you with your tasks! Have a minute to share your thoughts? ⏳☕️ ;)",
          id: 1807119,
          orderNumber: 1,
          type: "cta",
          maxPath: 8,
          settings: {
            text: "OK",
            type: "next",
          },
        },
        {
          description: "",
          label: "What is your role within your company? ",
          id: 1807263,
          orderNumber: 2,
          type: "single",
          maxPath: 7,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [],
          },
          options: [
            {
              id: 5060304,
              label: "Role 1 ",
              orderNumber: 1,
            },
            {
              id: 5060305,
              label: "Role 2",
              orderNumber: 2,
            },
            {
              id: 5060307,
              label: "Role 3",
              orderNumber: 3,
            },
            {
              id: 5060308,
              label: "Other",
              orderNumber: 4,
            },
          ],
        },
        {
          description: "",
          label:
            "What task/activity takes up\nthe most time in your current role? ",
          id: 1807265,
          orderNumber: 3,
          type: "single",
          maxPath: 6,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [],
          },
          options: [
            {
              id: 5060309,
              label: "Job to be done 1",
              orderNumber: 1,
            },
            {
              id: 5060310,
              label: "Job to be done 2",
              orderNumber: 2,
            },
            {
              id: 5060313,
              label: "Job to be done 3",
              orderNumber: 3,
            },
            {
              id: 5060314,
              label: "Other",
              orderNumber: 4,
            },
          ],
        },
        {
          description: "",
          label: "If any, what tools do you use to accomplish those tasks?",
          id: 1807267,
          orderNumber: 4,
          type: "text",
          maxPath: 5,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 5060315,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label:
            "On a scale of 1-10, <br />how important would it be to you <br />to shorten the time to accomplish these tasks? ",
          id: 1807268,
          orderNumber: 5,
          type: "rating",
          maxPath: 4,
          settings: {
            shape: "stars",
            leftText: "Not important at all",
            rightText: "Very important",
            logic: [
              {
                id: 834253220869,
                orderNumber: 1,
                destination: 1807296,
                condition: "between",
                values: [5060316, 5060322],
              },
            ],
          },
          options: [
            {
              id: 5060316,
              label: "1",
              orderNumber: 1,
            },
            {
              id: 5060317,
              label: "2",
              orderNumber: 2,
            },
            {
              id: 5060318,
              label: "3",
              orderNumber: 3,
            },
            {
              id: 5060319,
              label: "4",
              orderNumber: 4,
            },
            {
              id: 5060320,
              label: "5",
              orderNumber: 5,
            },
            {
              id: 5060321,
              label: "6",
              orderNumber: 6,
            },
            {
              id: 5060322,
              label: "7",
              orderNumber: 7,
            },
            {
              id: 5060323,
              label: "8",
              orderNumber: 8,
            },
            {
              id: 5060324,
              label: "9",
              orderNumber: 9,
            },
            {
              id: 5060325,
              label: "10",
              orderNumber: 10,
            },
          ],
        },
        {
          description: "",
          label:
            "If anything was possible, how would you like things to work? ",
          id: 1807275,
          orderNumber: 6,
          type: "text",
          maxPath: 3,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 5060352,
              orderNumber: 1,
            },
          ],
        },
        {
          description:
            "Select 'Yes' if taking part in a user research sounds like fun to you! :)",
          label:
            "Would you like to help us design a solution that meets your needs?",
          id: 1807282,
          orderNumber: 7,
          type: "single",
          maxPath: 2,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [
              {
                id: 1545978950880,
                orderNumber: 1,
                destination: 1807296,
                condition: "is",
                values: [5060359],
                operator: "or",
              },
            ],
          },
          options: [
            {
              id: 5060358,
              label: "Yes",
              orderNumber: 1,
            },
            {
              id: 5060359,
              label: "No",
              orderNumber: 2,
            },
          ],
        },
        {
          description: "",
          label: "Leave your contact details so that we can get in touch!",
          id: 1807288,
          orderNumber: 8,
          type: "form",
          maxPath: 1,
          settings: {
            disclaimer: false,
            disclaimerText: "",
            consent: true,
            consentText: "Do you consent to this?",
            logic: [],
          },
          options: [
            {
              id: 424566,
              label: "Name",
              orderNumber: 8,
              required: true,
              type: "first_name",
            },
            {
              id: 424567,
              label: "Business email",
              orderNumber: 8,
              required: true,
              type: "email",
            },
          ],
        },
        {
          description: "",
          label:
            "Fantastic! Thanks for your openness! <br /><br />We'll send you an email when we're ready to arrange the interviews!",
          id: 1807297,
          orderNumber: 9,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
        {
          description: "",
          label: "Thank you for sharing your thoughts! Much appreciated! ☀️",
          id: 1807296,
          orderNumber: 10,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Collect customer testimonials for your website",
    category: "",
    description: "",
    survey: {
      id: "046073e08528fa3d",
      name: "Collect customer testimonials for your website",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "",
          label:
            "How likely are you to recommend our product to someone like you?",
          id: 1585266,
          orderNumber: 1,
          type: "nps",
          maxPath: 4,
          settings: {
            leftText: "Not likely",
            rightText: "Very likely",
            logic: [
              {
                id: 1385351275161,
                orderNumber: 1,
                destination: 1585268,
                condition: "between",
                values: [9, 10],
              },
            ],
          },
        },
        {
          description: "Sorry to hear that!",
          label: "What should we improve?",
          id: 1585275,
          orderNumber: 2,
          type: "text",
          maxPath: 1,
          settings: {
            logic: [
              {
                id: 1128000133575,
                orderNumber: 1,
                destination: 1585272,
                condition: "any_value",
                values: [],
              },
            ],
          },
          options: [
            {
              id: 4515989,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "What is the biggest value you get from using [product name]?",
          id: 1585268,
          orderNumber: 3,
          type: "text",
          maxPath: 3,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4515986,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "Can we publish your testimonial on our website?",
          id: 1585269,
          orderNumber: 4,
          type: "single",
          maxPath: 2,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [
              {
                id: 401066714160,
                orderNumber: 1,
                destination: 1585272,
                condition: "is",
                values: [4515988],
                operator: "or",
              },
            ],
          },
          options: [
            {
              id: 4515987,
              label: "Yes, sure",
              orderNumber: 1,
            },
            {
              id: 4515988,
              label: "No, I'd rather you didn't",
              orderNumber: 2,
            },
          ],
        },
        {
          description: "Fantastic!",
          label: "Help us get in touch!",
          id: 1585270,
          orderNumber: 5,
          type: "form",
          maxPath: 1,
          settings: {
            disclaimer: false,
            disclaimerText: "",
            consent: true,
            consentText: "Do you consent to this?",
            logic: [],
          },
          options: [
            {
              id: 328674,
              label: "What's your name?",
              orderNumber: 5,
              required: false,
              type: "first_name",
            },
            {
              id: 328675,
              label: "What's your business email address?",
              orderNumber: 5,
              required: false,
              type: "email",
            },
            {
              id: 328707,
              label: "What's your job title?",
              orderNumber: 5,
              required: false,
              type: "job_title",
            },
          ],
        },
        {
          description: "",
          label: "Thank you for your feedback! <br />We'll get in touch!",
          id: 1585273,
          orderNumber: 6,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
        {
          description: "",
          label: "OK. Thanks for your feedback!",
          id: 1585272,
          orderNumber: 7,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Improve the search experience",
    category: "",
    description: "",
    survey: {
      id: "cb249c382372aced",
      name: "Improve the search experience",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "",
          label: "How relevant are these search results?",
          id: 1481847,
          orderNumber: 1,
          type: "numerical_scale",
          maxPath: 2,
          settings: {
            logic: [
              {
                id: 1276753541556,
                orderNumber: 1,
                destination: 1481849,
                condition: "is",
                values: [4236471, 4236472],
                operator: "or",
              },
            ],
          },
          options: [
            {
              id: 4236468,
              label: "1",
              orderNumber: 1,
            },
            {
              id: 4236469,
              label: "2",
              orderNumber: 2,
            },
            {
              id: 4236470,
              label: "3",
              orderNumber: 3,
            },
            {
              id: 4236471,
              label: "4",
              orderNumber: 4,
            },
            {
              id: 4236472,
              label: "5",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "Sorry to hear that.",
          label: "What were you hoping to find?",
          id: 1481848,
          orderNumber: 2,
          type: "text",
          maxPath: 1,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4236475,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "Happy to hear that!",
          label: "Is there anything we can do to improve your search results?",
          id: 1481849,
          orderNumber: 3,
          type: "text",
          maxPath: 0,
          settings: {},
          options: [
            {
              id: 4236476,
              orderNumber: 1,
            },
          ],
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Measure customer loyalty with an alternative NPS survey 1",
    category: "",
    description: "",
    survey: {
      id: "c36a33977274a164",
      name: "Measure customer loyalty with an alternative NPS survey 1",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "",
          label:
            "A friend asks you whether you would recommend [product]. Would you? ",
          id: 1794105,
          orderNumber: 1,
          type: "single",
          maxPath: 3,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [
              {
                id: 41242643631,
                orderNumber: 1,
                destination: 1794108,
                condition: "is",
                values: [5027785],
                operator: "or",
              },
            ],
          },
          options: [
            {
              id: 5027784,
              label: "Yes",
              orderNumber: 1,
            },
            {
              id: 5027785,
              label: "No",
              orderNumber: 2,
            },
          ],
        },
        {
          description: "",
          label: "We'd love to know what made you recommend us!",
          id: 1794107,
          orderNumber: 2,
          type: "text",
          maxPath: 2,
          settings: {
            logic: [
              {
                id: 106459792754,
                orderNumber: 1,
                destination: 1794111,
                condition: "answered",
                values: [],
              },
            ],
          },
          options: [
            {
              id: 5027788,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "Please let us know what is the reason behind this. ",
          id: 1794108,
          orderNumber: 3,
          type: "text",
          maxPath: 1,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 5027789,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "Thank you for participating!",
          id: 1794111,
          orderNumber: 4,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Measure task complexity with the After Scenario Questionnaire",
    category: "",
    description: "",
    survey: {
      id: "ce8b384a895c8056",
      name: "Measure task complexity with the After Scenario Questionnaire",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "",
          label:
            "Overall, I am satisfied with the ease of completing the task in this scenario.",
          id: 1613400,
          orderNumber: 1,
          type: "rating",
          maxPath: 3,
          settings: {
            shape: "stars",
            leftText: "Very dissatisfied",
            rightText: "Very satisfied",
            logic: [],
          },
          options: [
            {
              id: 4581178,
              label: "1",
              orderNumber: 1,
            },
            {
              id: 4581179,
              label: "2",
              orderNumber: 2,
            },
            {
              id: 4581180,
              label: "3",
              orderNumber: 3,
            },
            {
              id: 4581181,
              label: "4",
              orderNumber: 4,
            },
            {
              id: 4581182,
              label: "5",
              orderNumber: 5,
            },
            {
              id: 4581183,
              label: "6",
              orderNumber: 6,
            },
            {
              id: 4581184,
              label: "7",
              orderNumber: 7,
            },
          ],
        },
        {
          description: "",
          label:
            "Overall, I am satisfied with the amount of time it took to complete the task in this scenario.",
          id: 1613401,
          orderNumber: 2,
          type: "rating",
          maxPath: 2,
          settings: {
            shape: "stars",
            leftText: "Very dissatisfied",
            rightText: "Very satisfied",
            logic: [],
          },
          options: [
            {
              id: 4581186,
              label: "1",
              orderNumber: 1,
            },
            {
              id: 4581187,
              label: "2",
              orderNumber: 2,
            },
            {
              id: 4581188,
              label: "3",
              orderNumber: 3,
            },
            {
              id: 4581189,
              label: "4",
              orderNumber: 4,
            },
            {
              id: 4581190,
              label: "5",
              orderNumber: 5,
            },
            {
              id: 4581191,
              label: "6",
              orderNumber: 6,
            },
            {
              id: 4581192,
              label: "7",
              orderNumber: 7,
            },
          ],
        },
        {
          description: "",
          label:
            "Overall, I am satisfied with the support information when completing the task.",
          id: 1613402,
          orderNumber: 3,
          type: "rating",
          maxPath: 1,
          settings: {
            shape: "stars",
            leftText: "Very dissatisfied",
            rightText: "Very satisfied",
            logic: [],
          },
          options: [
            {
              id: 4581193,
              label: "1",
              orderNumber: 1,
            },
            {
              id: 4581194,
              label: "2",
              orderNumber: 2,
            },
            {
              id: 4581195,
              label: "3",
              orderNumber: 3,
            },
            {
              id: 4581196,
              label: "4",
              orderNumber: 4,
            },
            {
              id: 4581197,
              label: "5",
              orderNumber: 5,
            },
            {
              id: 4581198,
              label: "6",
              orderNumber: 6,
            },
            {
              id: 4581199,
              label: "7",
              orderNumber: 7,
            },
          ],
        },
        {
          description: "",
          label: "Thanks for your input!",
          id: 1926286,
          orderNumber: 4,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Uncover Traffic Sources (open) HIDDEN",
    category: "",
    description: "",
    survey: {
      id: "b791887cf9b49a3d",
      name: "Uncover Traffic Sources (open) HIDDEN",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "",
          label: "How did you hear about our website?",
          id: 175583,
          orderNumber: 1,
          type: "text",
          maxPath: 5,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 317488,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "What do you want to accomplish by visiting us today?",
          id: 1479226,
          orderNumber: 2,
          type: "text",
          maxPath: 4,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4228723,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "How did this website compare to your expectations?",
          id: 1479227,
          orderNumber: 3,
          type: "text",
          maxPath: 3,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4228724,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label:
            "Which of our competitors, both online and offline, did you consider before visiting us?",
          id: 1479232,
          orderNumber: 4,
          type: "text",
          maxPath: 2,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4228728,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "Is there anything missing on our website?",
          id: 1479234,
          orderNumber: 5,
          type: "text",
          maxPath: 1,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4228731,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label:
            "How much do you trust the information provided on our website?",
          id: 1479235,
          orderNumber: 6,
          type: "rating",
          maxPath: 0,
          settings: {
            shape: "stars",
            leftText: "Very unsatisfied",
            rightText: "Very satisfied",
          },
          options: [
            {
              id: 4228733,
              label: "1",
              orderNumber: 1,
            },
            {
              id: 4228734,
              label: "2",
              orderNumber: 2,
            },
            {
              id: 4228735,
              label: "3",
              orderNumber: 3,
            },
            {
              id: 4228736,
              label: "4",
              orderNumber: 4,
            },
            {
              id: 4228737,
              label: "5",
              orderNumber: 5,
            },
          ],
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Catch weak points of a page",
    category: "",
    description: "",
    survey: {
      id: "3c6fb6e3038445e8",
      name: "Catch weak points of a page",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "",
          label: "Is there something you do not like about this page?",
          id: 175291,
          orderNumber: 1,
          type: "single",
          maxPath: 2,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [],
          },
          options: [
            {
              id: 316896,
              label: "I don't like the color scheme",
              orderNumber: 1,
            },
            {
              id: 316897,
              label: "I don't understand what this is",
              orderNumber: 2,
            },
            {
              id: 316898,
              label: "Hard to navigate",
              orderNumber: 3,
            },
            {
              id: 316899,
              label: "Nothings wrong with it. I love it!",
              orderNumber: 4,
            },
          ],
        },
        {
          description: "Thanks!",
          label: "Could you explain exactly?",
          id: 1481478,
          orderNumber: 2,
          type: "text",
          maxPath: 1,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4235295,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "Thank you",
          label: "Have a great day",
          id: 175292,
          orderNumber: 3,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Uncover benefits expected from your company. HIDDEN",
    category: "",
    description: "",
    survey: {
      id: "b97ff7059772c694",
      name: "Uncover benefits expected from your company. HIDDEN",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "",
          label:
            "What is the primary benefit you hope to get from our product?",
          id: 175339,
          orderNumber: 1,
          type: "text",
          maxPath: 1,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 316990,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "Thank you",
          label: "Have a great day",
          id: 175340,
          orderNumber: 2,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Find out if customers ever refer your product. HIDDEN",
    category: "",
    description: "",
    survey: {
      id: "8f29b7f037ca9681",
      name: "Find out if customers ever refer your product. HIDDEN",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "Hey there, quick question:",
          label: "Have you recommended us to anyone in the past?",
          id: 174348,
          orderNumber: 1,
          type: "single",
          maxPath: 2,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [
              {
                id: 1208288479704,
                orderNumber: 1,
                destination: 174350,
                condition: "is",
                values: [314530],
                operator: "or",
              },
            ],
          },
          options: [
            {
              id: 314529,
              label: "Yes",
              orderNumber: 1,
            },
            {
              id: 314530,
              label: "No",
              orderNumber: 2,
            },
          ],
        },
        {
          description: "Great to hear that!",
          label:
            "Would you mind to share, what was the reason for such recommendation?",
          id: 174349,
          orderNumber: 2,
          type: "text",
          maxPath: 1,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 314531,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "Could we do something for you, to improve your experience?",
          id: 174350,
          orderNumber: 3,
          type: "text",
          maxPath: 0,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 314532,
              orderNumber: 1,
            },
          ],
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Build content strategy that meets your readers' needs",
    category: "",
    description: "",
    survey: {
      id: "f0d16fe41577d5c1",
      name: "Build content strategy that meets your readers' needs",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "",
          label: "How happy are you with the content of our blog?",
          id: 1604425,
          orderNumber: 1,
          type: "smiley_scale",
          maxPath: 5,
          settings: {
            leftText: "Very unhappy",
            rightText: "Very happy",
            logic: [],
          },
          options: [
            {
              id: 4561411,
              label: "Extremely unsatisfied",
              orderNumber: 1,
            },
            {
              id: 4561412,
              label: "Unsatisfied",
              orderNumber: 2,
            },
            {
              id: 4561413,
              label: "Neutral",
              orderNumber: 3,
            },
            {
              id: 4561414,
              label: "Happy",
              orderNumber: 4,
            },
            {
              id: 4561415,
              label: "Extremely happy",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "Select as many as you'd like:",
          label:
            "If any, which of the topics listed below would you like to learn more?",
          id: 1604426,
          orderNumber: 2,
          type: "multiple",
          maxPath: 4,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [],
          },
          options: [
            {
              id: 4561416,
              label: "Topic 1",
              orderNumber: 1,
            },
            {
              id: 4561417,
              label: "Topic 2",
              orderNumber: 2,
            },
            {
              id: 4561418,
              label: "Topic 3",
              orderNumber: 3,
            },
            {
              id: 4561419,
              label: "None of above",
              orderNumber: 4,
            },
          ],
        },
        {
          description: "",
          label:
            "How often would you like to have the articles delivered\nto your email box?",
          id: 1604427,
          orderNumber: 3,
          type: "single",
          maxPath: 3,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [
              {
                id: 192181547350,
                orderNumber: 1,
                destination: 1604432,
                condition: "is",
                values: [4561432],
                operator: "or",
              },
            ],
          },
          options: [
            {
              id: 4561420,
              label: "Once a week",
              orderNumber: 1,
            },
            {
              id: 4561421,
              label: "Twice a week",
              orderNumber: 2,
            },
            {
              id: 4561422,
              label: "Once a month",
              orderNumber: 3,
            },
            {
              id: 4561432,
              label: "Never. I'm not interested in a newsletter",
              orderNumber: 4,
            },
            {
              id: 4561423,
              label: "Other",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "",
          label: "What day/days of the week\n would you like to hear from us?",
          id: 1604428,
          orderNumber: 4,
          type: "multiple",
          maxPath: 2,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [],
          },
          options: [
            {
              id: 4561424,
              label: "Monday",
              orderNumber: 1,
            },
            {
              id: 4561425,
              label: "Tuesday",
              orderNumber: 2,
            },
            {
              id: 4561426,
              label: "Wednesday",
              orderNumber: 3,
            },
            {
              id: 4561427,
              label: "Thursday",
              orderNumber: 4,
            },
            {
              id: 4561428,
              label: "Friday",
              orderNumber: 5,
            },
            {
              id: 4561429,
              label: "Saturday",
              orderNumber: 6,
            },
          ],
        },
        {
          description: "",
          label: "Where should we post the articles to?",
          id: 1604430,
          orderNumber: 5,
          type: "form",
          maxPath: 1,
          settings: {
            disclaimer: false,
            disclaimerText: "",
            consent: true,
            consentText: "Do you consent to this?",
            logic: [],
          },
          options: [
            {
              id: 336990,
              label: "Name",
              orderNumber: 5,
              required: false,
              type: "first_name",
            },
            {
              id: 337023,
              label: "Job title",
              orderNumber: 5,
              required: false,
              type: "last_name",
            },
            {
              id: 336992,
              label: "E-mail address",
              orderNumber: 5,
              required: false,
              type: "email",
            },
          ],
        },
        {
          description: "",
          label: "Thanks a lot! Stay in touch! :)",
          id: 1604431,
          orderNumber: 6,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
        {
          description: "",
          label: "OK! Thank you for your feedback! ",
          id: 1604432,
          orderNumber: 7,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Measure customer loyalty with an alternative NPS survey 2",
    category: "",
    description: "",
    survey: {
      id: "bc72877c832a1a34",
      name: "Measure customer loyalty with an alternative NPS survey 2",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "👋 We wonder if customers actually recommend us... ",
          label:
            "Have you ever recommended [product] to a friend or colleague? ",
          id: 1794140,
          orderNumber: 1,
          type: "single",
          maxPath: 3,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [
              {
                id: 1251974770782,
                orderNumber: 1,
                destination: 1804386,
                condition: "is_not",
                values: [5027838],
                operator: "or",
              },
            ],
          },
          options: [
            {
              id: 5027838,
              label: "Yes",
              orderNumber: 1,
            },
            {
              id: 5027839,
              label: "No",
              orderNumber: 2,
            },
          ],
        },
        {
          description: "Thanks for doing that! 🙌",
          label:
            "What features or qualities of [product name] made you recommend it?",
          id: 1794141,
          orderNumber: 2,
          type: "text",
          maxPath: 1,
          settings: {
            logic: [
              {
                id: 275068193342,
                orderNumber: 1,
                destination: 1804393,
                condition: "any_value",
                values: [],
              },
            ],
          },
          options: [
            {
              id: 5027840,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label:
            "How likely is it that you will recommend [product name] in the future?",
          id: 1804386,
          orderNumber: 3,
          type: "nps",
          maxPath: 2,
          settings: {
            leftText: "Not likely",
            rightText: "Very likely",
            logic: [
              {
                id: 1006525699670,
                orderNumber: 1,
                destination: 1804390,
                condition: "between",
                values: [9, 10],
              },
            ],
          },
        },
        {
          description: "",
          label: "What is the main reason for your score?",
          id: 1804389,
          orderNumber: 4,
          type: "text",
          maxPath: 1,
          settings: {
            logic: [
              {
                id: 575567181969,
                orderNumber: 1,
                destination: 1804393,
                condition: "any_value",
                values: [],
              },
            ],
          },
          options: [
            {
              id: 5053321,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "Happy to hear that! ",
          label: "What do you value [product name] most for?",
          id: 1804390,
          orderNumber: 5,
          type: "text",
          maxPath: 1,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 5053322,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "Thank you for sharing! ",
          id: 1804393,
          orderNumber: 6,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Collect feedback on the help desk",
    category: "",
    description: "",
    survey: {
      id: "5e3770630f852391",
      name: "Collect feedback on the help desk",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "",
          label:
            "How would you rate your most recent interaction with our help desk?",
          id: 1652293,
          orderNumber: 1,
          type: "smiley_scale",
          maxPath: 5,
          settings: {
            leftText: "Very dissatisfying",
            rightText: "Very satisfying",
            logic: [
              {
                id: 1370336071000,
                orderNumber: 1,
                destination: 1652301,
                condition: "is",
                values: [4693863, 4693864],
                operator: "or",
              },
              {
                id: 1089584290600,
                orderNumber: 2,
                destination: 1652305,
                condition: "is",
                values: [4693865],
                operator: "or",
              },
            ],
          },
          options: [
            {
              id: 4693861,
              label: "Extremely unsatisfied",
              orderNumber: 1,
            },
            {
              id: 4693862,
              label: "Unsatisfied",
              orderNumber: 2,
            },
            {
              id: 4693863,
              label: "Neutral",
              orderNumber: 3,
            },
            {
              id: 4693864,
              label: "Happy",
              orderNumber: 4,
            },
            {
              id: 4693865,
              label: "Extremely happy",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "We'd love to do better!",
          label: "What should we improve on?",
          id: 1652300,
          orderNumber: 2,
          type: "text",
          maxPath: 4,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4693874,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label:
            "Did the help desk agent you spoke to help solve your request?",
          id: 1652301,
          orderNumber: 3,
          type: "single",
          maxPath: 3,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [],
          },
          options: [
            {
              id: 4693875,
              label: "Yes",
              orderNumber: 1,
            },
            {
              id: 4693876,
              label: "Partially",
              orderNumber: 2,
            },
            {
              id: 4693877,
              label: "No",
              orderNumber: 3,
            },
          ],
        },
        {
          description: "",
          label:
            "How would you rate the responsiveness <br />of our help desk team?",
          id: 1652302,
          orderNumber: 4,
          type: "rating",
          maxPath: 2,
          settings: {
            shape: "stars",
            leftText: "Not responsive at all",
            rightText: "Very responsive",
            logic: [],
          },
          options: [
            {
              id: 4693885,
              label: "1",
              orderNumber: 1,
            },
            {
              id: 4693886,
              label: "2",
              orderNumber: 2,
            },
            {
              id: 4693887,
              label: "3",
              orderNumber: 3,
            },
            {
              id: 4693888,
              label: "4",
              orderNumber: 4,
            },
            {
              id: 4693889,
              label: "5",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "",
          label:
            "How would you rate the competence\n<br /> of our help desk team?",
          id: 1652303,
          orderNumber: 5,
          type: "rating",
          maxPath: 1,
          settings: {
            shape: "stars",
            leftText: "Not competent at all",
            rightText: "Very competent ",
            logic: [],
          },
          options: [
            {
              id: 4693899,
              label: "1",
              orderNumber: 1,
            },
            {
              id: 4693900,
              label: "2",
              orderNumber: 2,
            },
            {
              id: 4693901,
              label: "3",
              orderNumber: 3,
            },
            {
              id: 4693902,
              label: "4",
              orderNumber: 4,
            },
            {
              id: 4693903,
              label: "5",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "",
          label:
            "If there is anything else you'd like to share with us, feel free to! ✍️",
          id: 1652305,
          orderNumber: 6,
          type: "text",
          maxPath: 0,
          settings: {},
          options: [
            {
              id: 4693907,
              orderNumber: 1,
            },
          ],
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Check if differences between products are clear",
    category: "",
    description: "",
    survey: {
      id: "931f24ef78a10009",
      name: "Check if differences between products are clear",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "",
          label:
            "Is the difference between <b>A (product/plan)</b> and <b>B</b> clear to you?",
          id: 175255,
          orderNumber: 1,
          type: "single",
          maxPath: 3,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [
              {
                id: 675141573636,
                orderNumber: 1,
                destination: 1481693,
                condition: "is",
                values: [316823],
                operator: "or",
              },
            ],
          },
          options: [
            {
              id: 316823,
              label: "Yes",
              orderNumber: 1,
            },
            {
              id: 316824,
              label: "No, I have some questions, comments",
              orderNumber: 2,
            },
          ],
        },
        {
          description: "",
          label: "What's unclear?",
          id: 1481692,
          orderNumber: 2,
          type: "text",
          maxPath: 2,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4236021,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "Anything else you'd like to add?",
          id: 1481693,
          orderNumber: 3,
          type: "text",
          maxPath: 1,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4236022,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "Thank you",
          id: 175257,
          orderNumber: 4,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Capture your actual competitive advantage",
    category: "",
    description: "",
    survey: {
      id: "4310ee1b93869ca8",
      name: "Capture your actual competitive advantage",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "",
          label:
            "How likely are you to recommend our product to someone like you?",
          id: 1717910,
          orderNumber: 1,
          type: "nps",
          maxPath: 5,
          settings: {
            leftText: "Not likely",
            rightText: "Very likely",
            logic: [
              {
                id: 874800623005,
                orderNumber: 1,
                destination: 1717915,
                condition: "between",
                values: [0, 6],
              },
              {
                id: 227481615160,
                orderNumber: 2,
                destination: 1717915,
                condition: "between",
                values: [7, 8],
              },
            ],
          },
        },
        {
          description: "",
          label: "Have you ever used a competitive product?",
          id: 1717911,
          orderNumber: 2,
          type: "single",
          maxPath: 4,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [
              {
                id: 1632515120560,
                orderNumber: 1,
                destination: 1717914,
                condition: "is",
                values: [4841557],
                operator: "or",
              },
            ],
          },
          options: [
            {
              id: 4841556,
              label: "Yes",
              orderNumber: 1,
            },
            {
              id: 4841557,
              label: "No",
              orderNumber: 2,
            },
          ],
        },
        {
          description: "",
          label: "Which of these have you experience using?",
          id: 1717912,
          orderNumber: 3,
          type: "multiple",
          maxPath: 3,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [],
          },
          options: [
            {
              id: 4841558,
              label: "Alternative 1",
              orderNumber: 1,
            },
            {
              id: 4841559,
              label: "Alternative 2",
              orderNumber: 2,
            },
            {
              id: 4841560,
              label: "Alternative 3",
              orderNumber: 3,
            },
            {
              id: 4841561,
              label: "Other",
              orderNumber: 4,
            },
          ],
        },
        {
          description: "",
          label:
            "What is the reason you use [product name]\nrather than the competitive product(s)?",
          id: 1717913,
          orderNumber: 4,
          type: "text",
          maxPath: 2,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4841562,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "What is our biggest advantage, in your opinion?",
          id: 1717914,
          orderNumber: 5,
          type: "text",
          maxPath: 1,
          settings: {
            logic: [
              {
                id: 1505393041500,
                orderNumber: 1,
                destination: 1717916,
                condition: "any_value",
                values: [],
              },
            ],
          },
          options: [
            {
              id: 4841563,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "Sorry to hear that!",
          label: "What should we improve on?",
          id: 1717915,
          orderNumber: 6,
          type: "text",
          maxPath: 1,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4841564,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "Thank you for sharing!",
          id: 1717916,
          orderNumber: 7,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Evaluate the risk of increasing your prices HIDDEN (DUPLICATE)",
    category: "",
    description: "",
    survey: {
      id: "f2ae66e43773f6e2",
      name: "Evaluate the risk of increasing your prices HIDDEN (DUPLICATE)",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "",
          label:
            "Would an increase in prices cause you to look elsewhere for the same product/services?",
          id: 1481652,
          orderNumber: 1,
          type: "single",
          maxPath: 3,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [],
          },
          options: [
            {
              id: 4235898,
              label: "Yes",
              orderNumber: 1,
            },
            {
              id: 4235899,
              label: "No",
              orderNumber: 2,
            },
          ],
        },
        {
          description: "",
          label:
            "What would our product or service need to include in it for it to be worth the money you pay?",
          id: 1481653,
          orderNumber: 2,
          type: "text",
          maxPath: 2,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4235900,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "Which renewal term is the most convenient for you?",
          id: 1481655,
          orderNumber: 3,
          type: "single",
          maxPath: 1,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [],
          },
          options: [
            {
              id: 4235904,
              label: "Monthly",
              orderNumber: 1,
            },
            {
              id: 4235905,
              label: "Quarterly",
              orderNumber: 2,
            },
            {
              id: 4235906,
              label: "Yearly",
              orderNumber: 3,
            },
          ],
        },
        {
          description: "",
          label:
            "Is there anything else we can do to improve our pricing model?",
          id: 1481657,
          orderNumber: 4,
          type: "text",
          maxPath: 0,
          settings: {},
          options: [
            {
              id: 4235910,
              orderNumber: 1,
            },
          ],
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Gauge product satisfaction",
    category: "",
    description: "",
    survey: {
      id: "69c4c668fb7526f9",
      name: "Gauge product satisfaction",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "",
          label: "How satisfied are you with [product name] ?",
          id: 1464084,
          orderNumber: 1,
          type: "smiley_scale",
          maxPath: 5,
          settings: {
            leftText: "Very unsatisfied",
            rightText: "Very satisfied",
            logic: [
              {
                id: 897403138545,
                orderNumber: 1,
                destination: 1464090,
                condition: "is",
                values: [4182026],
                operator: "or",
              },
            ],
          },
          options: [
            {
              id: 4182026,
              label: "Extremely unsatisfied",
              orderNumber: 1,
            },
            {
              id: 4182027,
              label: "Unsatisfied",
              orderNumber: 2,
            },
            {
              id: 4182028,
              label: "Neutral",
              orderNumber: 3,
            },
            {
              id: 4182029,
              label: "Happy",
              orderNumber: 4,
            },
            {
              id: 4182030,
              label: "Extremely happy",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "",
          label:
            "Are there any other similar products you use or are considering?",
          id: 1464085,
          orderNumber: 2,
          type: "single",
          maxPath: 4,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [
              {
                id: 252342409535,
                orderNumber: 1,
                destination: 1464088,
                condition: "is",
                values: [4182032],
                operator: "or",
              },
            ],
          },
          options: [
            {
              id: 4182031,
              label: "Yes",
              orderNumber: 1,
            },
            {
              id: 4182032,
              label: "No",
              orderNumber: 2,
            },
          ],
        },
        {
          description: "",
          label: "Would you mind telling us what they are?",
          id: 1464086,
          orderNumber: 3,
          type: "text",
          maxPath: 3,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4182034,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "Are you going to keep using [product name] ?",
          id: 1464088,
          orderNumber: 4,
          type: "single",
          maxPath: 2,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [
              {
                id: 840584317855,
                orderNumber: 1,
                destination: 1464089,
                condition: "is",
                values: [4182037],
                operator: "or",
              },
            ],
          },
          options: [
            {
              id: 4182036,
              label: "Yes",
              orderNumber: 1,
            },
            {
              id: 4182037,
              label: "No",
              orderNumber: 2,
            },
          ],
        },
        {
          description: "",
          label: "Fantastic! Thank you for being with us! :)",
          id: 1464090,
          orderNumber: 5,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
        {
          description: "",
          label: "What can we do to make you change your mind?",
          id: 1464089,
          orderNumber: 6,
          type: "text",
          maxPath: 1,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4182038,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label:
            "Thanks for the feedback! We appreciate it and will take it into account! ",
          id: 1464091,
          orderNumber: 7,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Make sure your gives all necessary information. HIDDEN",
    category: "",
    description: "",
    survey: {
      id: "51a8b290e2ad8f07",
      name: "Make sure your gives all necessary information. HIDDEN",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "",
          label: "Did you find what you were looking for on our website?",
          id: 1231127,
          orderNumber: 1,
          type: "single",
          maxPath: 3,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [
              {
                id: 589902898884,
                orderNumber: 1,
                destination: 1231134,
                condition: "is",
                values: [3458179, 4228652],
                operator: "or",
              },
            ],
          },
          options: [
            {
              id: 3458179,
              label: "Yes",
              orderNumber: 1,
            },
            {
              id: 4228652,
              label: "Yes, eventualy",
              orderNumber: 2,
            },
            {
              id: 3458180,
              label: "No",
              orderNumber: 3,
            },
          ],
        },
        {
          description: "",
          label: "Tell us what's missing?",
          id: 1231128,
          orderNumber: 2,
          type: "text",
          maxPath: 2,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 3458181,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label:
            "If you could change anything about this website, what would you do?",
          id: 1231134,
          orderNumber: 3,
          type: "text",
          maxPath: 1,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 3458192,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "Thanks for your response!",
          id: 1231138,
          orderNumber: 4,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Collect reviews with NPS survey",
    category: "",
    description: "",
    survey: {
      id: "91436228cadef5c3",
      name: "Collect reviews with NPS survey",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "",
          label:
            "How likely is it that you will recommend our product to a friend or colleague?",
          id: 1481954,
          orderNumber: 1,
          type: "nps",
          maxPath: 2,
          settings: {
            leftText: "Not likely",
            rightText: "Very likely",
            logic: [
              {
                id: 1241658860411,
                orderNumber: 1,
                destination: 1481956,
                condition: "between",
                values: [0, 6],
              },
              {
                id: 344255350262,
                orderNumber: 2,
                destination: 1481956,
                condition: "between",
                values: [7, 8],
              },
            ],
          },
        },
        {
          description: "Thank you for your feedback!",
          label: "Would you mind leaving us a quick review on G2?",
          id: 1481955,
          orderNumber: 2,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "link",
          },
        },
        {
          description: "",
          label: "What is the reason for your score?",
          id: 1481956,
          orderNumber: 3,
          type: "text",
          maxPath: 1,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4236874,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "Thank you! Have a good one!",
          id: 1481957,
          orderNumber: 4,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Do effective influencer marketing",
    category: "",
    description: "",
    survey: {
      id: "a01d088bb2371bf6",
      name: "Do effective influencer marketing",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "",
          label:
            "How likely are you to be interested in software <br />because an influencer reviewed it online?",
          id: 1649918,
          orderNumber: 1,
          type: "rating",
          maxPath: 3,
          settings: {
            shape: "stars",
            leftText: "Very unlikely",
            rightText: "Very likely",
            logic: [
              {
                id: 942524494644,
                orderNumber: 1,
                destination: 1649947,
                condition: "is",
                values: [4686340, 4686341],
                operator: "or",
              },
              {
                id: 1470605594480,
                orderNumber: 2,
                destination: 1649930,
                condition: "is",
                values: [4686342],
                operator: "or",
              },
            ],
          },
          options: [
            {
              id: 4686340,
              label: "1",
              orderNumber: 1,
            },
            {
              id: 4686341,
              label: "2",
              orderNumber: 2,
            },
            {
              id: 4686342,
              label: "3",
              orderNumber: 3,
            },
            {
              id: 4686343,
              label: "4",
              orderNumber: 4,
            },
            {
              id: 4686344,
              label: "5",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "Select all that apply:",
          label: "Who out of the following influencers do you know and trust?",
          id: 1649919,
          orderNumber: 2,
          type: "multiple",
          maxPath: 2,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [],
          },
          options: [
            {
              id: 4686338,
              label: "Influencer 1",
              orderNumber: 1,
            },
            {
              id: 4686339,
              label: "Influencer 2",
              orderNumber: 2,
            },
            {
              id: 4686364,
              label: "Influencer 3",
              orderNumber: 3,
            },
            {
              id: 4686365,
              label: "Other",
              orderNumber: 4,
            },
          ],
        },
        {
          description: "Choose all you often visit:",
          label: "Which of the following platforms do you visit most often?",
          id: 1649930,
          orderNumber: 3,
          type: "multiple",
          maxPath: 1,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [],
          },
          options: [
            {
              id: 4686366,
              label: "YouTube",
              orderNumber: 1,
            },
            {
              id: 4686367,
              label: "TikTok",
              orderNumber: 2,
            },
            {
              id: 4686368,
              label: "Instagram",
              orderNumber: 3,
            },
            {
              id: 4686369,
              label: "Other",
              orderNumber: 4,
            },
          ],
        },
        {
          description: "",
          label: "Thank you for sharing! :)",
          id: 1649947,
          orderNumber: 4,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
        {
          description: "",
          label: "Thanks for taking your time! 👋",
          id: 1649948,
          orderNumber: 5,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Evaluate self-service support effectiveness",
    category: "",
    description: "",
    survey: {
      id: "b921de66199b3f2e",
      name: "Evaluate self-service support effectiveness",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "To what extent do you agree with the statement below?",
          label: "It was easy to find the correct documentation",
          id: 1812155,
          orderNumber: 1,
          type: "rating",
          maxPath: 4,
          settings: {
            shape: "stars",
            leftText: "Strongly disagree",
            rightText: "Strongly agree",
            logic: [],
          },
          options: [
            {
              id: 5071056,
              label: "1",
              orderNumber: 1,
            },
            {
              id: 5071057,
              label: "2",
              orderNumber: 2,
            },
            {
              id: 5071058,
              label: "3",
              orderNumber: 3,
            },
            {
              id: 5073433,
              label: "4",
              orderNumber: 4,
            },
          ],
        },
        {
          description: "To what extent do you agree with the statement below?",
          label: "The help articles are clear and easy-to-understand",
          id: 1812156,
          orderNumber: 2,
          type: "rating",
          maxPath: 3,
          settings: {
            shape: "stars",
            leftText: "Strongly disagree",
            rightText: "Strongly agree",
            logic: [],
          },
          options: [
            {
              id: 5071063,
              label: "1",
              orderNumber: 1,
            },
            {
              id: 5071064,
              label: "2",
              orderNumber: 2,
            },
            {
              id: 5071065,
              label: "3",
              orderNumber: 3,
            },
            {
              id: 5073434,
              label: "4",
              orderNumber: 4,
            },
          ],
        },
        {
          description: "To what extent do you agree with the statement below?",
          label:
            "The self-service option available enable me to resolve most doubts on my own",
          id: 1812157,
          orderNumber: 3,
          type: "rating",
          maxPath: 2,
          settings: {
            shape: "stars",
            leftText: "Strongly disagree",
            rightText: "Strongly agree",
            logic: [],
          },
          options: [
            {
              id: 5071066,
              label: "1",
              orderNumber: 1,
            },
            {
              id: 5071067,
              label: "2",
              orderNumber: 2,
            },
            {
              id: 5071068,
              label: "3",
              orderNumber: 3,
            },
            {
              id: 5073435,
              label: "4",
              orderNumber: 4,
            },
          ],
        },
        {
          description: "To what extent do you agree with the statement below?",
          label:
            "With self-service options, I can find answers faster than by contacting your team",
          id: 1812158,
          orderNumber: 4,
          type: "rating",
          maxPath: 1,
          settings: {
            shape: "stars",
            leftText: "Strongly disagree",
            rightText: "Strongly agree",
            logic: [],
          },
          options: [
            {
              id: 5071069,
              label: "1",
              orderNumber: 1,
            },
            {
              id: 5071070,
              label: "2",
              orderNumber: 2,
            },
            {
              id: 5071071,
              label: "3",
              orderNumber: 3,
            },
            {
              id: 5073436,
              label: "4",
              orderNumber: 4,
            },
          ],
        },
        {
          description: "",
          label: "Thanks for your input! 🙏",
          id: 1926392,
          orderNumber: 5,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Improve the trial-user-to-customer conversion rates",
    category: "",
    description: "",
    survey: {
      id: "42f418a8f3e8de4e",
      name: "Improve the trial-user-to-customer conversion rates",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "",
          label:
            "How would you rate your experience with [product name] so far?",
          id: 1795207,
          orderNumber: 1,
          type: "rating",
          maxPath: 4,
          settings: {
            shape: "stars",
            leftText: "Very dissatisfying",
            rightText: "Very satisfying",
            logic: [
              {
                id: 243744314381,
                orderNumber: 1,
                destination: 1795216,
                condition: "between",
                values: [5030716, 5030717],
              },
            ],
          },
          options: [
            {
              id: 5030713,
              label: "1",
              orderNumber: 1,
            },
            {
              id: 5030714,
              label: "2",
              orderNumber: 2,
            },
            {
              id: 5030715,
              label: "3",
              orderNumber: 3,
            },
            {
              id: 5030716,
              label: "4",
              orderNumber: 4,
            },
            {
              id: 5030717,
              label: "5",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "Sorry to hear that!",
          label: "Have you experienced any problems using it?",
          id: 1795209,
          orderNumber: 2,
          type: "single",
          maxPath: 3,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [
              {
                id: 894307438781,
                orderNumber: 1,
                destination: 1795212,
                condition: "is",
                values: [5030722],
                operator: "or",
              },
            ],
          },
          options: [
            {
              id: 5030721,
              label: "Yes",
              orderNumber: 1,
            },
            {
              id: 5030722,
              label: "No",
              orderNumber: 2,
            },
          ],
        },
        {
          description: "Help us improve!",
          label: "What was the issue?",
          id: 1795211,
          orderNumber: 3,
          type: "text",
          maxPath: 2,
          settings: {
            logic: [
              {
                id: 1192731740411,
                orderNumber: 1,
                destination: 1795214,
                condition: "any_value",
                values: [],
              },
            ],
          },
          options: [
            {
              id: 5030724,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "We'd love to understand your dissatisfaction.",
          label: "Please, share your thoughts on [product name]:",
          id: 1795212,
          orderNumber: 4,
          type: "text",
          maxPath: 2,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 5030725,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "Would you like our team to walk you through it?",
          id: 1795214,
          orderNumber: 5,
          type: "single",
          maxPath: 1,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [
              {
                id: 187124090006,
                orderNumber: 1,
                destination: 1795224,
                condition: "is",
                values: [5030726],
                operator: "or",
              },
              {
                id: 1562211583703,
                orderNumber: 2,
                destination: 1795222,
                condition: "is",
                values: [5030727],
                operator: "or",
              },
            ],
          },
          options: [
            {
              id: 5030726,
              label: "Sure!",
              orderNumber: 1,
            },
            {
              id: 5030727,
              label: "No, thanks",
              orderNumber: 2,
            },
          ],
        },
        {
          description: "Happy to hear that!",
          label:
            "We want to offer you 10% off for early sign-up to a paid plan. Are you interested? :)",
          id: 1795216,
          orderNumber: 6,
          type: "single",
          maxPath: 1,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [
              {
                id: 59934341722,
                orderNumber: 1,
                destination: 1795222,
                condition: "is",
                values: [5030736],
                operator: "or",
              },
            ],
          },
          options: [
            {
              id: 5030735,
              label: "Sure! Sounds great! ",
              orderNumber: 1,
            },
            {
              id: 5030736,
              label: "I'll pass on it. Thanks!",
              orderNumber: 2,
            },
          ],
        },
        {
          description: "",
          label: "Great! 🎊 Check your inbox for more details! :)",
          id: 1795219,
          orderNumber: 7,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
        {
          description: "",
          label: "Not worries. Let us know if you change your mind!",
          id: 1795222,
          orderNumber: 8,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
        {
          description: "",
          label:
            "We'll be happy to help! We'll get in touch with you via email to arrange the details. Talk to you soon!",
          id: 1795224,
          orderNumber: 9,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Verify the gravity of customers' pains",
    category: "",
    description: "",
    survey: {
      id: "0cb2e15ac3cc5267",
      name: "Verify the gravity of customers' pains",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "",
          label:
            "In the past 6 months, how often have you experienced [a pain point] ?",
          id: 1530937,
          orderNumber: 1,
          type: "single",
          maxPath: 8,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [
              {
                id: 1268373634572,
                orderNumber: 1,
                destination: 1926204,
                condition: "is",
                values: [4374184],
                operator: "or",
              },
            ],
          },
          options: [
            {
              id: 4374179,
              label: "More than 3 times",
              orderNumber: 1,
            },
            {
              id: 4374180,
              label: "Once or twice",
              orderNumber: 2,
            },
            {
              id: 4374184,
              label: "Never",
              orderNumber: 3,
            },
            {
              id: 4374185,
              label: "Other",
              orderNumber: 4,
            },
          ],
        },
        {
          description: "(It's an optional question, but please answer it.)",
          label: "Can you tell us more about what happened?",
          id: 1530942,
          orderNumber: 2,
          type: "text",
          maxPath: 7,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4374198,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label:
            "On a scale of 1- 5, how important to you was [insert a scenario] ?",
          id: 1530960,
          orderNumber: 3,
          type: "rating",
          maxPath: 6,
          settings: {
            shape: "stars",
            leftText: "Not important at all",
            rightText: "Very important",
            logic: [
              {
                id: 516373455972,
                orderNumber: 1,
                destination: 1926204,
                condition: "is",
                values: [4374250, 4374251, 4374252],
                operator: "or",
              },
            ],
          },
          options: [
            {
              id: 4374250,
              label: "1",
              orderNumber: 1,
            },
            {
              id: 4374251,
              label: "2",
              orderNumber: 2,
            },
            {
              id: 4374252,
              label: "3",
              orderNumber: 3,
            },
            {
              id: 4374253,
              label: "4",
              orderNumber: 4,
            },
            {
              id: 4374254,
              label: "5",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "",
          label: "How did you go about the problem?",
          id: 1530961,
          orderNumber: 4,
          type: "text",
          maxPath: 5,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4374260,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "If any, what tools did you use?",
          id: 1530962,
          orderNumber: 5,
          type: "text",
          maxPath: 4,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4374261,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "How satisfied were you with the solution you found?",
          id: 1530963,
          orderNumber: 6,
          type: "smiley_scale",
          maxPath: 3,
          settings: {
            leftText: "Very dissatisfied",
            rightText: "Very satisfied",
            logic: [
              {
                id: 1310151422272,
                orderNumber: 1,
                destination: 1530967,
                condition: "is",
                values: [4374266],
                operator: "or",
              },
            ],
          },
          options: [
            {
              id: 4374262,
              label: "Extremely unsatisfied",
              orderNumber: 1,
            },
            {
              id: 4374263,
              label: "Unsatisfied",
              orderNumber: 2,
            },
            {
              id: 4374264,
              label: "Neutral",
              orderNumber: 3,
            },
            {
              id: 4374265,
              label: "Happy",
              orderNumber: 4,
            },
            {
              id: 4374266,
              label: "Extremely happy",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "",
          label:
            "If anything was possible, how would you like the solution to work?",
          id: 1530964,
          orderNumber: 7,
          type: "text",
          maxPath: 2,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4374267,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "We may need to learn some more. ",
          label: "If you agree that we contact you, help us get in touch!",
          id: 1530967,
          orderNumber: 8,
          type: "form",
          maxPath: 1,
          settings: {
            disclaimer: false,
            disclaimerText: "",
            consent: true,
            consentText: "Do you consent to this?",
            logic: [],
          },
          options: [
            {
              id: 304287,
              label: "Type in your name...",
              orderNumber: 8,
              required: false,
              type: "first_name",
            },
            {
              id: 304288,
              label: "Type in your email address...",
              orderNumber: 8,
              required: false,
              type: "email",
            },
          ],
        },
        {
          description: "Fantastic!",
          label: "Thank you very much!",
          id: 1530966,
          orderNumber: 9,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
        {
          description: "",
          label: "No problem. Thanks for your input!",
          id: 1926205,
          orderNumber: 10,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
        {
          description: "",
          label: "Thanks!",
          id: 1926204,
          orderNumber: 11,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Uncover your true competitors HIDDEN",
    category: "",
    description: "",
    survey: {
      id: "73433b0fd035f07a",
      name: "Uncover your true competitors HIDDEN",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "",
          label:
            "Which other options did you consider before choosing our product?",
          id: 174326,
          orderNumber: 1,
          type: "text",
          maxPath: 2,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 314500,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "What were the reasons  you chose us?",
          id: 298092,
          orderNumber: 2,
          type: "multiple",
          maxPath: 1,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [],
          },
          options: [
            {
              id: 764205,
              label: "Quality of service",
              orderNumber: 1,
            },
            {
              id: 764215,
              label: "Quality of product",
              orderNumber: 2,
            },
            {
              id: 764206,
              label: "Price",
              orderNumber: 3,
            },
            {
              id: 764216,
              label: "Available features",
              orderNumber: 4,
            },
            {
              id: 764217,
              label: "Design",
              orderNumber: 5,
            },
            {
              id: 764581,
              label: "Ease of use",
              orderNumber: 6,
            },
            {
              id: 764218,
              label: "Recommendation",
              orderNumber: 7,
            },
            {
              id: 764219,
              label: "Other",
              orderNumber: 8,
            },
          ],
        },
        {
          description: "Thank you for your feedback.",
          label: "Have a great day!",
          id: 175882,
          orderNumber: 3,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Gather insights to improve signup conversion. HIDDEN",
    category: "",
    description: "",
    survey: {
      id: "3d0d59ce5e98ed98",
      name: "Gather insights to improve signup conversion. HIDDEN",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "Hey there, quick question:",
          label:
            "Before signing up, what was your biggest fear or concern about trying us?",
          id: 175569,
          orderNumber: 1,
          type: "text",
          maxPath: 2,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 317466,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "Got it!",
          label:
            "If you were in charge of our communication, how would you handle those doubts?",
          id: 1481508,
          orderNumber: 2,
          type: "text",
          maxPath: 1,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4235402,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "Thank you",
          label: "Have a great day",
          id: 175570,
          orderNumber: 3,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Uncover Alternatives Currently In Use",
    category: "",
    description: "",
    survey: {
      id: "e21d589f80a4ac8a",
      name: "Uncover Alternatives Currently In Use",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "",
          label:
            "Are we the sole provider for [activity/goals] or do you also use alternative solutions?",
          id: 174328,
          orderNumber: 1,
          type: "single",
          maxPath: 2,
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [
              {
                id: 955894197544,
                orderNumber: 1,
                destination: 174329,
                condition: "is",
                values: [314502],
                operator: "or",
              },
              {
                id: 370993901844,
                orderNumber: 2,
                destination: 174330,
                condition: "is",
                values: [314503],
                operator: "or",
              },
            ],
          },
          options: [
            {
              id: 314502,
              label: "I use only your solution",
              orderNumber: 1,
            },
            {
              id: 314503,
              label: "I use other solutions",
              orderNumber: 2,
            },
          ],
        },
        {
          description: "",
          label:
            "Please list the most crucial aspects that persuaded you to use us rather than a competitor.",
          id: 174329,
          orderNumber: 2,
          type: "text",
          maxPath: 1,
          settings: {
            logic: [
              {
                id: 1452223877038,
                orderNumber: 1,
                destination: 174338,
                condition: "any_value",
                values: [],
              },
            ],
          },
          options: [
            {
              id: 314504,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "What would persuade you to use our solution only?",
          id: 174330,
          orderNumber: 3,
          type: "text",
          maxPath: 1,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 314505,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "Thank you",
          label: "Have a great day",
          id: 174338,
          orderNumber: 4,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
  {
    name: "Understand purchase intentions",
    category: "",
    description: "",
    survey: {
      id: "73ed595184ca25af",
      name: "Understand purchase intentions",
      theme: {
        question: "#050505",
        answer: "#575656",
        button: "#050505",
        background: "#ffffff",
        progressBar: "#0000FF",
      },
      questions: [
        {
          description: "",
          label: "How likely are you to make a purchase on BRAND today?",
          id: 1483496,
          orderNumber: 1,
          type: "numerical_scale",
          maxPath: 2,
          settings: {
            logic: [
              {
                id: 858966973608,
                orderNumber: 1,
                destination: 1483499,
                condition: "is",
                values: [4240655, 4240656, 4240657],
                operator: "or",
              },
            ],
          },
          options: [
            {
              id: 4240653,
              label: "1",
              orderNumber: 1,
            },
            {
              id: 4240654,
              label: "2",
              orderNumber: 2,
            },
            {
              id: 4240655,
              label: "3",
              orderNumber: 3,
            },
            {
              id: 4240656,
              label: "4",
              orderNumber: 4,
            },
            {
              id: 4240657,
              label: "5",
              orderNumber: 5,
            },
          ],
        },
        {
          description: "Got it!",
          label: "What’s the primary reason for visiting today?",
          id: 1483497,
          orderNumber: 2,
          type: "text",
          maxPath: 1,
          settings: {
            logic: [
              {
                id: 1250014195056,
                orderNumber: 1,
                destination: 1483500,
                condition: "any_value",
                values: [],
              },
            ],
          },
          options: [
            {
              id: 4240660,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label:
            "What, if anything, might hold you back from making a purchase today?",
          id: 1483499,
          orderNumber: 3,
          type: "text",
          maxPath: 1,
          settings: {
            logic: [],
          },
          options: [
            {
              id: 4240663,
              orderNumber: 1,
            },
          ],
        },
        {
          description: "",
          label: "Thanks a lot!",
          id: 1483500,
          orderNumber: 4,
          type: "cta",
          maxPath: 0,
          settings: {
            text: "OK",
            type: "hidden",
          },
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: "center",
        showProgressBar: true,
        submitText: "Submit",
        showBranding: true,
        close: true,
      },
    },
  },
];
