import { Template } from '@/types';
import {
  AnswerType,
  FormFieldType,
  LogicSingleCondition,
  LogicTextCondition,
  CTAType,
} from '@integraflow/web';

type CategoryData = {
  [key: string]: {
    name: string;
    subcategories: string[];
  };
};

export const surveyTemplates: Template[] = [
  {
    name: 'Product Market Fit (Superhuman)',
    category: 'Product Experience',
    subcategory: ['Sales Operation', 'Product Overview'],
    objectives: [
      'improve_user_retention',
      'increase_conversion',
      'increase_user_adoption',
    ],
    description:
      'Measure PMF by assessing how disappointed users would be if your product disappeared.',
    survey: {
      id: 1,
      name: 'Product Market Fit (Superhuman)',
      theme: {
        question: '#050505',
        answer: '#575656',
        button: '#050505',
        background: '#ffffff',
        progressBar: '#0000FF',
      },
      questions: [
        {
          id: 12,
          orderNumber: -1,
          label: 'How likely are you to recommend Formily?',
          settings: {
            leftText: 'Very unsatisfied',
            rightText: 'Very satisfied',
            count: 3,
          },
          type: AnswerType.NUMERICAL_SCALE,
        },
        {
          id: 11,
          type: AnswerType.FORM,
          orderNumber: 0,
          label: 'Let us know you',
          description: 'Please stions:',
          options: [
            {
              id: 1,
              label: 'First Name ',
              orderNumber: 1,
              required: false,
              type: FormFieldType.FIRST_NAME,
            },
            {
              id: 2,
              label: 'Last Name',
              orderNumber: 2,
              required: true,
              type: FormFieldType.LAST_NAME,
            },
            {
              id: 3,
              label: 'Email',
              orderNumber: 3,
              required: true,
              type: FormFieldType.EMAIL,
            },
            {
              id: 4,
              label: 'Website',
              orderNumber: 4,
              required: true,
              type: FormFieldType.WEBSITE,
            },
          ],
          settings: {
            disclaimer: true,
            disclaimerText: 'Lorem ipsum ipsum ipsum',
            consent: true,
            consentText: 'do you consent to this',
          },
        },
        {
          id: 1,
          type: AnswerType.SINGLE,
          orderNumber: 1,
          label:
            'How disappointed would you be if you could no longer use Formily?',
          description: 'Please select one of the following options:',
          options: [
            {
              id: 1,
              label: 'Not at all disappointed',
              orderNumber: 1,
            },
            {
              id: 2,
              label: 'Somewhat disappointed',
              orderNumber: 2,
            },
            {
              id: 3,
              label: 'Very disappointed',
              orderNumber: 3,
            },
          ],
          settings: {
            randomize: false,
            randomizeExceptLast: false,
          },
        },
        {
          id: 2,
          type: AnswerType.MULTIPLE,
          orderNumber: 2,
          label: 'What is your role?',
          description: 'Please select one of the following options:',
          options: [
            {
              id: 1,
              label: 'Founder',
              orderNumber: 1,
            },
            {
              id: 2,
              label: 'Executive',
              orderNumber: 2,
            },
            {
              id: 3,
              label: 'Product Manager',
              orderNumber: 3,
            },
            {
              id: 4,
              label: 'Product Owner',
              orderNumber: 4,
            },
            {
              id: 5,
              label: 'Software Engineer',
              orderNumber: 5,
            },
          ],
          settings: {
            randomize: false,
            randomizeExceptLast: false,
            logic: [
              {
                id: 1,
                orderNumber: 1,
                destination: 4,
                condition: LogicSingleCondition.IS,
                values: [1, 2, 3, 4],
              },
              {
                id: 1,
                orderNumber: 1,
                destination: 3,
                condition: LogicSingleCondition.IS,
                values: [5],
              },
            ],
          },
        },
        {
          id: 3,
          type: AnswerType.TEXT,
          orderNumber: 3,
          label:
            'What type of people do you think would most benefit from Formily?',
          settings: {
            singleLine: false,
            logic: [
              {
                id: 1,
                orderNumber: 1,
                destination: 6,
                condition: LogicTextCondition.HAS_ANY_VALUE,
              },
            ],
          },
        },
        {
          id: 4,
          type: AnswerType.TEXT,
          orderNumber: 4,
          label: 'What is the main benefit you receive from Formily?',
          settings: {
            singleLine: false,
          },
        },
        {
          id: 5,
          type: AnswerType.TEXT,
          orderNumber: 5,
          label: 'How can we improve our service for you?',
          description: 'Please be as specific as possible.',
          settings: {
            singleLine: false,
          },
        },
        {
          id: 6,
          type: AnswerType.CTA,
          orderNumber: 6,
          label: 'Thank you!',
          description: 'We appreciate your feedback.',
          settings: {
            type: CTAType.CLOSE,
            text: 'Close',
          },
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: 'bottomRight',
        showProgressBar: true,
      },
    },
  },
  {
    name: 'Onboarding Segmentation',
    category: 'Customer Success',
    subcategory: ['Customer Satisfaction'],
    description: 'Learn more about who signed up to your product and why.',
    survey: {
      id: 2,
      name: 'Onboarding Segmentation',
      theme: {},
      questions: [
        {
          id: 1,
          type: AnswerType.SINGLE,
          orderNumber: 1,
          label: 'What is your role?',
          description: 'Please select one of the following options:',
          options: [
            {
              id: 1,
              label: 'Founder',
              orderNumber: 1,
            },
            {
              id: 2,
              label: 'Executive',
              orderNumber: 2,
            },
            {
              id: 3,
              label: 'Product Manager',
              orderNumber: 3,
            },
            {
              id: 4,
              label: 'Product Owner',
              orderNumber: 4,
            },
            {
              id: 5,
              label: 'Software Engineer',
              orderNumber: 5,
            },
          ],
          settings: {
            randomize: false,
            randomizeExceptLast: false,
          },
        },
        {
          id: 2,
          type: AnswerType.SINGLE,
          orderNumber: 2,
          label: "What's your company size?",
          description: 'Please select one of the following options:',
          options: [
            {
              id: 1,
              label: 'only me',
              orderNumber: 1,
            },
            {
              id: 2,
              label: '1-5 employees',
              orderNumber: 2,
            },
            {
              id: 3,
              label: '6-10 employees',
              orderNumber: 3,
            },
            {
              id: 4,
              label: '11-100 employees',
              orderNumber: 4,
            },
            {
              id: 5,
              label: 'over 100 employees',
              orderNumber: 5,
            },
          ],
          settings: {
            randomize: false,
            randomizeExceptLast: false,
          },
        },
        {
          id: 3,
          type: AnswerType.SINGLE,
          label: 'How did you hear about us first?',
          description: 'Please select one of the following options:',
          orderNumber: 3,
          options: [
            {
              id: 1,
              label: 'Recommendation',
              orderNumber: 1,
            },
            {
              id: 2,
              label: 'Social Media',
              orderNumber: 2,
            },
            {
              id: 3,
              label: 'Ads',
              orderNumber: 3,
            },
            {
              id: 4,
              label: 'Google Search',
              orderNumber: 4,
            },
            {
              id: 5,
              label: 'In a Podcast',
              orderNumber: 5,
            },
          ],
          settings: {
            randomize: false,
            randomizeExceptLast: false,
          },
        },
        {
          id: 4,
          type: AnswerType.CTA,
          orderNumber: 6,
          label: 'Thank you!',
          description: 'We appreciate your feedback.',
          settings: {
            type: CTAType.CLOSE,
            text: 'Close',
          },
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: 'center',
        showProgressBar: true,
      },
    },
  },
  {
    name: 'Onboarding Segmentation',
    category: 'Increase Revenue',
    subcategory: ['User Research'],
    description: 'Learn more about who signed up to your product and why.',
    survey: {
      id: 3,
      name: 'Onboarding Segmentation',
      questions: [
        {
          id: 1,
          type: AnswerType.SINGLE,
          orderNumber: 1,
          label: 'What is your role?',
          description: 'Please select one of the following options:',
          options: [
            {
              id: 1,
              label: 'Founder',
              orderNumber: 1,
            },
            {
              id: 2,
              label: 'Executive',
              orderNumber: 2,
            },
            {
              id: 3,
              label: 'Product Manager',
              orderNumber: 3,
            },
            {
              id: 4,
              label: 'Product Owner',
              orderNumber: 4,
            },
            {
              id: 5,
              label: 'Software Engineer',
              orderNumber: 5,
            },
          ],
          settings: {
            randomize: false,
            randomizeExceptLast: false,
          },
        },
        {
          id: 2,
          type: AnswerType.SINGLE,
          orderNumber: 2,
          label: "What's your company size?",
          description: 'Please select one of the following options:',
          options: [
            {
              id: 1,
              label: 'only me',
              orderNumber: 1,
            },
            {
              id: 2,
              label: '1-5 employees',
              orderNumber: 2,
            },
            {
              id: 3,
              label: '6-10 employees',
              orderNumber: 3,
            },
            {
              id: 4,
              label: '11-100 employees',
              orderNumber: 4,
            },
            {
              id: 5,
              label: 'over 100 employees',
              orderNumber: 5,
            },
          ],
          settings: {
            randomize: false,
            randomizeExceptLast: false,
          },
        },
        {
          id: 3,
          type: AnswerType.SINGLE,
          label: 'How did you hear about us first?',
          description: 'Please select one of the following options:',
          orderNumber: 3,
          options: [
            {
              id: 1,
              label: 'Recommendation',
              orderNumber: 1,
            },
            {
              id: 2,
              label: 'Social Media',
              orderNumber: 2,
            },
            {
              id: 3,
              label: 'Ads',
              orderNumber: 3,
            },
            {
              id: 4,
              label: 'Google Search',
              orderNumber: 4,
            },
            {
              id: 5,
              label: 'In a Podcast',
              orderNumber: 5,
            },
          ],
          settings: {
            randomize: false,
            randomizeExceptLast: false,
          },
        },
        {
          id: 4,
          type: AnswerType.CTA,
          orderNumber: 6,
          label: 'Thank you!',
          description: 'We appreciate your feedback.',
          settings: {
            type: CTAType.CLOSE,
            text: 'Close',
          },
        },
      ],
      settings: {
        recurring: false,
        recurringPeriod: 0,
        placement: 'center',
        showProgressBar: true,
      },
    },
  },
  {
    name: 'Product Market Fit (Superhuman)',
    category: 'Increase Revenue',
    subcategory: ['Product Activation', 'Features Feedback'],

    description:
      'Measure PMF by assessing how disappointed users would be if your product disappeared.',
    survey: {
      id: 4,
      name: 'Product Market Fit (Superhuman)',
      questions: [
        {
          id: 1,
          type: AnswerType.MULTIPLE,
          label:
            'How disappointed would you be if you could no longer use Formbricks?',
          description: 'Please select one of the following options:',
          orderNumber: 3,
          options: [
            {
              id: 1,
              label: 'Not at all disappointed',
              orderNumber: 1,
            },
            {
              id: 2,
              label: 'Somewhat disappointed',
              orderNumber: 2,
            },
            {
              id: 3,
              label: 'Very disappointed',
              orderNumber: 4,
            },
          ],
          settings: {},
        },
        {
          id: 2,
          orderNumber: 2,
          type: AnswerType.SINGLE,
          label: 'What is your role?',
          description: 'Please select one of the following options:',
          options: [
            {
              id: 1,
              label: 'Founder',
              orderNumber: 1,
            },
            {
              id: 2,
              label: 'Executive',
              orderNumber: 2,
            },
            {
              id: 3,
              label: 'Product Manager',
              orderNumber: 4,
            },
            {
              id: 4,
              label: 'Product Owner',
              orderNumber: 4,
            },
            {
              id: 5,
              label: 'Software Engineer',
              orderNumber: 5,
            },
          ],
          settings: {},
        },
        {
          id: 3,

          type: AnswerType.TEXT,
          label:
            'What type of people do you think would most benefit from Formbricks?',
          orderNumber: 3,
          settings: {},
        },
        {
          id: 4,
          type: AnswerType.TEXT,
          label: 'What is the main benefit your receive from Formbricks?',
          orderNumber: 4,
          settings: {
            randomize: true,
          },
        },
        {
          id: 5,
          type: AnswerType.TEXT,
          label: 'How can we improve our service for you?',
          description: 'Please be as specific as possible.',
          orderNumber: 5,
          settings: {},
        },
      ],
      settings: {
        recurring: true,
        recurringPeriod: 0,
        placement: 'center',
        showProgressBar: true,
      },
    },
  },
];

const categoryData: CategoryData = {};
surveyTemplates.forEach((template) => {
  const { category, subcategory } = template;
  if (category && !categoryData[category]) {
    categoryData[category] = {
      name: category,
      subcategories: [],
    };
  }
  if (subcategory) {
    categoryData[category].subcategories.push(...subcategory);
  }
});

export const surveyCategories = Object.values(categoryData);
