import { LibrarySurvey } from "@/types";

export const librarySurveys: LibrarySurvey[] = [
  {
    id: "9766f8c206d0ec7a",
    name: "Classic NPS (Net Promoter Score™ Survey)",
    comment:
      "Measure the customer's experience and predict growth. Turn unhappy customers into promoters.  Identify churn risks. Obtain reviews or referrals. Find customers willing to contribute with a testimonial or a case study.",
    type: "WidgetSurvey",
    library_excerpt: "The gold standard of customer experience metrics.",
    library_quick_tips: [
      "Measure NPS regularly to yield the biggest value of the metric.",
      "Send two weeks after purchase for e-commerce or one month into a subscription for online businesses.",
      "Customize follow-up questions based on NPS score.",
      "Enable Slack integration and receive important notifications.",
      "Keep it short and simple.",
    ],
    points_count: 5,
    thumbnail_url:
      "https://assets.survicate.com/survey-templates/Analytics.jpg",
    category_ids: [1, 3],
    subcategory_ids: [1, 2, 11, 37, 45],
    has_sample_results: true,
    first_point: "How likely are you to recommend us to someone like you?",
  },
  {
    id: "2805b05cdfaf24c3",
    name: "Improve your web app's user experience",
    comment:
      "Ask for feedback on the user experience of your app and collect potential improvement suggestions.",
    type: "WidgetSurvey",
    library_excerpt:
      "Ask for feedback on the user experience of your app and collect potential improvement suggestions.",
    library_quick_tips: [],
    points_count: 6,
    thumbnail_url:
      "https://assets.survicate.com/survey-templates/Researchers.jpg",
    category_ids: [3],
    subcategory_ids: [11],
    has_sample_results: true,
    first_point:
      "How would you rate your overall experience with [product name]?",
  },
  {
    id: "943fd1cedeefb82e",
    name: "Ensure Customer Satisfaction (CSAT)",
    comment:
      "CSAT (Customer Satisfaction Score) is an interaction-based, transactional metric. Use it regularly to ensure you deliver quality services or products.",
    type: "WidgetSurvey",
    library_excerpt:
      "Measure customer satisfaction with your product or/and services.",
    library_quick_tips: [
      "Measure CSAT systematically.",
      "Send the survey after important transactions or milestones.",
      "Follow-up with unhappy customers.",
    ],
    points_count: 5,
    thumbnail_url:
      "https://assets.survicate.com/survey-templates/Satisfied-people.jpg",
    category_ids: [],
    subcategory_ids: [],
    has_sample_results: true,
    first_point: "How satisfied are you with [product name]?",
  },
  {
    id: "24fb61bb3a740402",
    name: "Uncover page exit reasons",
    comment:
      "Find out why users are leaving your website without completing the expected actions. Let your users tell you what prevent them from continuing further or why their interest was lost at this step.",
    type: "WidgetSurvey",
    library_excerpt: "Find out why visitors are leaving your website.",
    library_quick_tips: [
      "Use exit intent targeting on people who visited just one page during the session.",
    ],
    points_count: 4,
    thumbnail_url: "https://assets.survicate.com/survey-templates/Business.jpg",
    category_ids: [2, 3],
    subcategory_ids: [6, 7, 11],
    has_sample_results: false,
    first_point: "Why did you decide to leave our site?",
  },
  {
    id: "bbe24de4bea326fb",
    name: "Measure product - market fit",
    comment:
      "Does your product or service address a significant market need? Is the market big enough to be worthwhile? Is your product taking off? Determine if your product has the market fit.",
    type: "WidgetSurvey",
    library_excerpt: "Discover if customers consider your product a must-have.",
    library_quick_tips: [
      "Send out the survey to a mixed audience of 40-100 people",
      "Target people who used your product at least twice in the last two weeks",
      "Target people who used your product's core features",
      "Embed the survey directly into an email for high response rates",
    ],
    points_count: 9,
    thumbnail_url:
      "https://assets.survicate.com/survey-templates/Dartboard.jpg",
    category_ids: [3],
    subcategory_ids: [9],
    has_sample_results: false,
    first_point:
      "How would you feel if you could no longer use [product name]?",
  },
  {
    id: "077760544de8035d",
    name: "Quickly measure product satisfaction",
    comment:
      "A straightforward survey to give your customer a chance to express their opinion on your product. Starting with a smiley scale, it asks follow up questions to collect more detailed information about what should be improved and how users would like the product to work.",
    type: "WidgetSurvey",
    library_excerpt:
      "Find out what your customers' sentiments about the product are.",
    library_quick_tips: [],
    points_count: 6,
    thumbnail_url:
      "https://assets.survicate.com/survey-templates/Home-office.jpg",
    category_ids: [3, 4],
    subcategory_ids: [9, 11, 43],
    has_sample_results: false,
    first_point: "How satisfied are you with [product name]?",
  },
  {
    id: "349fcd95fafcbcd8",
    name: "Improve your blog content strategy",
    comment:
      "Engage with your audience to ensure your blog content relevance and develop a successful content strategy.  Effortlessly grow newsletter subscriber base.",
    type: "WidgetSurvey",
    library_excerpt:
      "Collect feedback on your blog content. Ensure it's relevant to your audience and pays off.",
    library_quick_tips: [
      "Enable the contact form consent box to comply with legal regulations.",
    ],
    points_count: 6,
    thumbnail_url: "https://assets.survicate.com/survey-templates/feedback.jpg",
    category_ids: [2],
    subcategory_ids: [6, 7, 8],
    has_sample_results: false,
    first_point: "How relevant to you is the content on our blog?",
  },
  {
    id: "d2ad979ea8e28b29",
    name: "Find out how to improve the product",
    comment:
      "Discover the changes in the product your customers would like to see the most.",
    type: "WidgetSurvey",
    library_excerpt:
      "Discover the changes in the product your customers would like to see the most.",
    library_quick_tips: [],
    points_count: 4,
    thumbnail_url: "https://assets.survicate.com/survey-templates/time.jpg",
    category_ids: [3],
    subcategory_ids: [9, 11, 38],
    has_sample_results: false,
    first_point:
      "👋 Would you like to have a say on the development of [product name]?",
  },
  {
    id: "f563cb45e5046aff",
    name: "Ask open-ended questions about exit reasons",
    comment:
      "Find out why website visitors are bouncing off a site. Ask open-ended questions for more insights.",
    type: "WidgetSurvey",
    library_excerpt: "Ask web visitors why they are leaving your site.",
    library_quick_tips: ["Use exit intent targeting"],
    points_count: 2,
    thumbnail_url: "https://assets.survicate.com/survey-templates/Exit.jpg",
    category_ids: [2, 3],
    subcategory_ids: [6, 11],
    has_sample_results: false,
    first_point:
      "Would you mind telling us the reason you're leaving the site?",
  },
  {
    id: "e108bd6639492cff",
    name: "Website Improvement Ideas",
    comment:
      "Find out how your users would improve the usability of the website or a particular page. Gather feedback and potential new ideas and use them to identify and fix problems and flaws your users may be running into.",
    type: "WidgetSurvey",
    library_excerpt:
      "Ask your users how to improve the usability of the website.",
    library_quick_tips: [
      "Use page targeting if you want to research specific areas of your website",
      "You can run the survey on entire website and analyze page level feedback with CSV/XLS report",
      "Delay the survey for at least 15 second to give visitor some time to look around",
    ],
    points_count: 2,
    thumbnail_url: "https://assets.survicate.com/survey-templates/website3.jpg",
    category_ids: [],
    subcategory_ids: [],
    has_sample_results: false,
    first_point: "What could we do to make this site more useful?",
  },
  {
    id: "cb1153192d819010",
    name: "Find ideas for new features. HIDDEN.",
    comment:
      "Let your users chip in with their ideas on how to improve the product. Ask them directly what function or feature would make using your product indispensable. Act upon the feedback given to improve activation and retention metrics.",
    type: "WidgetSurvey",
    library_excerpt:
      "Let your users share their ideas on how to improve the product.",
    library_quick_tips: [
      "Survey users that have been using your product for some time now.",
      "You may want to add follow-up questions, i.e. if they're willing to pay extra for features.",
      "Asking about how they would use it is not a bad idea either.",
    ],
    points_count: 3,
    thumbnail_url: "https://assets.survicate.com/survey-templates/Idea.jpg",
    category_ids: [],
    subcategory_ids: [],
    has_sample_results: false,
    first_point:
      "What's one feature we can add that would make our product indispensable for you?",
  },
  {
    id: "f19700b9bb0d8f35",
    name: "Uncover the goals of your website's visitors",
    comment:
      "Discover what brought your visitors to your website with an unobtrusive question. Follow up with another to check if your visitors reached their goal. If not then give them a chance to tell you why.",
    type: "WidgetSurvey",
    library_excerpt: "Discover what brought your visitors to your website.",
    library_quick_tips: [
      "Target visitors that already have seen several pages.",
      "Allow visitors to spend some time on the website before you trigger the survey.",
      "Integrate Survicate with Google Analytics for deeper insights.",
    ],
    points_count: 5,
    thumbnail_url: "https://assets.survicate.com/survey-templates/UX.jpg",
    category_ids: [2],
    subcategory_ids: [4, 6],
    has_sample_results: false,
    first_point: "What is the goal of your visiting our website today?",
  },
  {
    id: "2d1d05aa734bd9ba",
    name: "Contact Form",
    comment: "Collect contact details from your website visitors.",
    type: "WidgetSurvey",
    library_excerpt: "Collect contact details from your website visitors.",
    library_quick_tips: [
      "Create leads in your favourite software using integration with Survicate.",
      "Collect more details from your leads.",
    ],
    points_count: 2,
    thumbnail_url:
      "https://assets.survicate.com/survey-templates/Business-meeting.jpg",
    category_ids: [],
    subcategory_ids: [],
    has_sample_results: false,
    first_point: "Please fill in your information so we can stay in touch:",
  },
  {
    id: "46a2bf20b0eae52e",
    name: "Prevent shopping cart abandonment",
    comment:
      "Boost shopping cart conversion rates by engaging in conversations with customers and leads. Collect feedback on what prevents customers from finalizing purchases. And implement strategies to boost sales.",
    type: "WidgetSurvey",
    library_excerpt:
      "Are you a B2B ecommerce? Selling goods with high profit margins? Boost shopping cart conversion rates by engaging in conversations with customers and leads.",
    library_quick_tips: ["Trigger the survey upon page exit."],
    points_count: 8,
    thumbnail_url:
      "https://assets.survicate.com/survey-templates/Coding-view.jpg",
    category_ids: [2, 3, 4],
    subcategory_ids: [6, 11, 36, 44],
    has_sample_results: false,
    first_point:
      "If anything, what has prevented you from completing the purchase today?",
  },
  {
    id: "f6ccebba5318db97",
    name: "Understand your audience's demographics",
    comment:
      "Learn more about the demographics of your target group. Create better personas and segment your audience more effectively.",
    type: "WidgetSurvey",
    library_excerpt: "Create a  demographic profile of your customers.",
    library_quick_tips: [],
    points_count: 12,
    thumbnail_url:
      "https://assets.survicate.com/survey-templates/Landscape-woman.jpg",
    category_ids: [2, 4, 1],
    subcategory_ids: [4, 13, 67],
    has_sample_results: false,
    first_point:
      "👋  We'd love to better understand our audience. Would you like to help us? (It'll take 2 minutes max!) ",
  },
  {
    id: "fc840de44a0209e5",
    name: "Advantages Over Competition",
    comment:
      "Find out what makes you better than your competition and what wins your users over. Focus your communication on such findings by identifying key advantages the user feels you have over your other companies.",
    type: "WidgetSurvey",
    library_excerpt:
      "Find out why users choose your product over the competition.",
    library_quick_tips: [
      "Use this survey on different stages of your customer life cycle",
      "Analyze results to understand your main advantages",
      "Use this knowledge in your marketing communication",
    ],
    points_count: 3,
    thumbnail_url:
      "https://assets.survicate.com/survey-templates/Research-board.jpg",
    category_ids: [],
    subcategory_ids: [],
    has_sample_results: false,
    first_point: "Why do you use our service rather than the alternatives?",
  },
  {
    id: "bc9e4c395e154c0b",
    name: "Check your pricing page clarity",
    comment:
      "Use this survey to check if your pricing page is comprehensible to the visitors and leads. Use a follow up question to offer a contact in case they have any concerns regarding your pricing. Or, if the offer is clear, encourage to sign up.",
    type: "WidgetSurvey",
    library_excerpt:
      "Check if your pricing page is comprehensible to the visitors.",
    library_quick_tips: [
      "Target users on your pricing page on your website or in the app.",
      "Use a time delay or an exit intent trigger.",
      "Consider adding contact forms - in case you want to reach out.",
    ],
    points_count: 4,
    thumbnail_url: "https://assets.survicate.com/survey-templates/Space.jpg",
    category_ids: [2, 1],
    subcategory_ids: [6, 35, 36, 39, 40],
    has_sample_results: false,
    first_point: "Is our pricing clear to you?",
  },
  {
    id: "f38acd4b04c5d384",
    name: "Segment your website traffic",
    comment:
      "A comprehensive set of questions that analyses the potential service receivers. Offering a wide range of topics, this survey can be used to segment your respondents, qualify leads or evaluate and study your user base, their company, customers, and market.",
    type: "WidgetSurvey",
    library_excerpt:
      "A comprehensive set of questions that analyses the potential service receivers.",
    library_quick_tips: [
      "Use this survey to analyze your customers",
      "Analyze results to understand your main advantages",
      "Use this knowledge in your marketing communication",
    ],
    points_count: 4,
    thumbnail_url: "",
    category_ids: [],
    subcategory_ids: [],
    has_sample_results: false,
    first_point:
      "Do you target customers individuals, companies or organizations, or a mix of both?",
  },
  {
    id: "af163aad704f4374",
    name: "Discover churn reason (open-ended)",
    comment:
      "Engage with customers that are leaving to understand and stop churn.",
    type: "WidgetSurvey",
    library_excerpt:
      "Engage with customers that are leaving to understand and stop churn.",
    library_quick_tips: [],
    points_count: 2,
    thumbnail_url:
      "https://assets.survicate.com/survey-templates/People-walking.jpg",
    category_ids: [1],
    subcategory_ids: [1, 2],
    has_sample_results: false,
    first_point: "What is the main reason you're canceling the account?",
  },
  {
    id: "b60c2b0d898770e2",
    name: "Evaluate the quality of the customer service you provide. HIDDEN. Equivalent created.",
    comment:
      "Find out what your visitors think of your customer service. Survey your current customers - you can target based on the number of visits or use external data, such as the fact that the person used your support.",
    type: "WidgetSurvey",
    library_excerpt:
      "Find out what your visitors think of your customer service.",
    library_quick_tips: [
      "Make sure to use targeting options",
      "Analyze results and check progress",
    ],
    points_count: 3,
    thumbnail_url:
      "https://assets.survicate.com/survey-templates/Happy-people.jpg",
    category_ids: [],
    subcategory_ids: [],
    has_sample_results: false,
    first_point:
      "Are you satisfied with the with the customer service provide?",
  },
  {
    id: "0234b1385932bc35",
    name: "Discover what other content you can put on the website.",
    comment:
      "This subtle open question is used to collect personal insight from the users. Use the feedback to locate issues and missing elements or learn new ways of meeting your audiences’ expectations.",
    type: "WidgetSurvey",
    library_excerpt: "Ask your visitors what is missing from your website.",
    library_quick_tips: [
      "Target pages visitors use to learn about your product and services.",
      "Use scroll trigger for longer page.",
      "Or time delay trigger for shorter ones.",
    ],
    points_count: 3,
    thumbnail_url:
      "https://assets.survicate.com/survey-templates/reading-content.jpg",
    category_ids: [],
    subcategory_ids: [],
    has_sample_results: false,
    first_point: "What other information would you like to see on this page?",
  },
  {
    id: "9fc270b69d2a2ac5",
    name: "See if your product meets user expectations",
    comment:
      "Find out if the content of your website or a web app meets expectations. Use the feedback to hone messaging, increase conversion rates, and make the most of your user acquisition efforts.",
    type: "WidgetSurvey",
    library_excerpt:
      "Find out if the content of your website or a web app meets expectations.",
    library_quick_tips: [],
    points_count: 4,
    thumbnail_url:
      "https://assets.survicate.com/survey-templates/templates-new.jpg",
    category_ids: [1, 2, 3],
    subcategory_ids: [2, 6, 7, 11, 37, 40, 41],
    has_sample_results: false,
    first_point: "Have you found what you're looking for? ",
  },
  {
    id: "359e3d54f595e30c",
    name: "Evaluate user experience",
    comment:
      "Keep tabs on your customers' / app users' experience with your digital product.",
    type: "WidgetSurvey",
    library_excerpt:
      "Keep tabs on your customers' / app users' experience with your digital product.",
    library_quick_tips: [],
    points_count: 7,
    thumbnail_url: "https://assets.survicate.com/survey-templates/UX.jpg",
    category_ids: [1, 3],
    subcategory_ids: [1, 9, 11, 37, 41],
    has_sample_results: false,
    first_point: "How easy or difficult to use is [product name]?",
  },
  {
    id: "342fb94c9a2ffa0f",
    name: "Get new ideas for your content. HIDDEN",
    comment:
      "Generate blog post ideas by asking what your audience want to read more about. Ask your blog visitors directly what topics they would like you to touch and automatically fight both content block and meet your reader's expectations.",
    type: "WidgetSurvey",
    library_excerpt: "Understand what your audience wants to read more about.",
    library_quick_tips: [
      "You may want to ask people that have read several articles already",
      "Or use scroll trigger on a blog post to ask engaged readers",
    ],
    points_count: 2,
    thumbnail_url:
      "https://assets.survicate.com/survey-templates/Studying-books.jpg",
    category_ids: [],
    subcategory_ids: [],
    has_sample_results: false,
    first_point: "What kind of topics would you like to read more about?",
  },
  {
    id: "1d1f4788b5b9b2fb",
    name: "Collect sign-ups for product updates",
    comment:
      "Give your visitor a chance to subscribe to updates with a lowkey contact form. Generate interest about your product where it matters and create leads out of your interested visitors.",
    type: "WidgetSurvey",
    library_excerpt: "Let your users subscribe to updates with a contact form.",
    library_quick_tips: [],
    points_count: 3,
    thumbnail_url:
      "https://assets.survicate.com/survey-templates/Paperwork.jpg",
    category_ids: [2],
    subcategory_ids: [7, 8],
    has_sample_results: false,
    first_point:
      "Would you like to receive updates on the latest changes to [product name]?",
  },
  {
    id: "e13a548a1407a6c9",
    name: "Gauge price sensitivity. HIDDEN. Duplicate",
    comment:
      "Find the perfect price for your product. This 4 question survey will help you to conduct pricing research.",
    type: "WidgetSurvey",
    library_excerpt: "A 4-question to help you conduct pricing research.",
    library_quick_tips: ["Collect data to run price sensitivity analysis"],
    points_count: 5,
    thumbnail_url: "https://assets.survicate.com/survey-templates/price-2.jpg",
    category_ids: [],
    subcategory_ids: [],
    has_sample_results: false,
    first_point:
      "At what price would you consider [your product] to be so expensive that you would not consider buying it?",
  },
  {
    id: "e9d83df41208c197",
    name: "Invite users to a demo call. HIDDEN",
    comment:
      "Widget with a simple invitation to arrange a demo call with your potential customer. A positive answer will lead to either a contact form or a calendar to choose a time that suits them. Let your user know you are always ready to make a step towards them.",
    type: "WidgetSurvey",
    library_excerpt:
      "Use this Contact Form to arrange a demo call with your leads.",
    library_quick_tips: [
      "Add link to the second question, so users can sign up for a demo call.",
    ],
    points_count: 3,
    thumbnail_url:
      "https://assets.survicate.com/survey-templates/Minimal-office.jpg",
    category_ids: [],
    subcategory_ids: [],
    has_sample_results: false,
    first_point: "Would you be interested in a quick demo call?",
  },
  {
    id: "238558bb27e4bb3c",
    name: "Gauge user satisfaction with a new feature",
    comment:
      "Improve users' satisfaction with the features your product offers. Detect potential issues and fix them before users start to churn. Perfect your product features to max out the value they give.",
    type: "WidgetSurvey",
    library_excerpt:
      "An ultra-short survey to gauge users' happiness with the features.",
    library_quick_tips: [],
    points_count: 4,
    thumbnail_url:
      "https://assets.survicate.com/survey-templates/templates-new.jpg",
    category_ids: [1, 2, 3],
    subcategory_ids: [1, 2, 6, 9, 11, 37, 41],
    has_sample_results: false,
    first_point: "How would you rate your satisfaction with the [feature]?",
  },
  {
    id: "8883f43f6457aec7",
    name: "Discover issues with order completion",
    comment:
      "Find out what hinders customers finalising orders. Act on feedback - remove potential frictions and improve conversion rates.",
    type: "WidgetSurvey",
    library_excerpt: "Find out what hinders customers finalising orders.",
    library_quick_tips: [
      "Target users who have added items to their carts but haven't placed orders.",
      "Use time delay based on an average order completion time.",
      "Consider using exit intent triggers.",
    ],
    points_count: 2,
    thumbnail_url:
      "https://assets.survicate.com/survey-templates/Laptop-coffee.jpg",
    category_ids: [2, 3, 1],
    subcategory_ids: [6, 11, 35, 36],
    has_sample_results: false,
    first_point: "What stopped you from completing you order? ",
  },
  {
    id: "100a5710eb0f9379",
    name: "Measure CES (Customer Effort Score) 3-point scale",
    comment:
      "The CES survey template will help you gauge a customer's efforts when interacting with your company or product. Ensure the ease of interactions to improve customer satisfaction.",
    type: "WidgetSurvey",
    library_excerpt:
      "Ask your users how easy it is to use your product for a better customer experience.",
    library_quick_tips: [
      "Trigger the survey after specific actions, such as purchasing a subscription, signaling a bug, or updating contact information.",
    ],
    points_count: 3,
    thumbnail_url: "",
    category_ids: [1, 2, 3],
    subcategory_ids: [1, 6, 9, 11, 34, 41, 67],
    has_sample_results: false,
    first_point: "How easy was it for you to [perform an action]?",
  },
  {
    id: "e794b19da54e3f4b",
    name: "Improve site navigation",
    comment:
      "Trigger this site navigation survey at critical touchpoints on your website. Discover how easy or difficult it is for visitors to navigate the site.   Easily spot and improve glitches and enjoy increased CTRs.",
    type: "WidgetSurvey",
    library_excerpt: "Improve user experience and conversion rates.",
    library_quick_tips: [],
    points_count: 3,
    thumbnail_url:
      "https://assets.survicate.com/survey-templates/templates-new.jpg",
    category_ids: [2, 3],
    subcategory_ids: [6, 7, 11, 40, 41],
    has_sample_results: false,
    first_point:
      "How easy or difficult was it for you to find the information you were looking for?",
  },
  {
    id: "47c789bfd59a0b6a",
    name: "Retention insights - change of roles. HIDDEN.",
    comment:
      "Discover activation ideas by asking your users how they would persuade others to use your product more. The customer knows best what makes them an avid user and possibly has convinced others around them to your product already. Their ideas might surprise you.",
    type: "WidgetSurvey",
    library_excerpt:
      "Discover activation ideas by asking your users how they would persuade others to use your product more.",
    library_quick_tips: [
      "Survey your top 20% active users.",
      "You may want to add questions that will help you segment anwers into personas.",
    ],
    points_count: 1,
    thumbnail_url:
      "https://assets.survicate.com/survey-templates/templates-new.jpg",
    category_ids: [],
    subcategory_ids: [],
    has_sample_results: false,
    first_point:
      "If you were in charge of our company, how would you persuade people like yourself to use us more often?",
  },
  {
    id: "2ef8ac4310ceb833",
    name: "Collect requests for new features",
    comment:
      "Find out what essential features your MVP is missing. Collect requests for new features as you're developing your product. Let users innovate the product.",
    type: "WidgetSurvey",
    library_excerpt: "Find out what features are missing most.",
    library_quick_tips: [],
    points_count: 3,
    thumbnail_url:
      "https://assets.survicate.com/survey-templates/templates-new.jpg",
    category_ids: [3],
    subcategory_ids: [11, 37, 38, 41],
    has_sample_results: false,
    first_point: "How would you rate your experience with our product?",
  },
  {
    id: "92df2b961f640c0b",
    name: "Get feedback about your new product",
    comment:
      "Let your potential customers tell you how satisfied they are with the product, how likely they are to recommend it, or what they feel can still be improved.",
    type: "WidgetSurvey",
    library_excerpt:
      "Evaluate product concept with an exhaustive question set.",
    library_quick_tips: [
      "Make sure you let customers use your product or service for some time before sending this survey.",
      "Add more follow up questions which are relevant to your product category.",
    ],
    points_count: 5,
    thumbnail_url:
      "https://assets.survicate.com/survey-templates/Researchers.jpg",
    category_ids: [3],
    subcategory_ids: [9, 37],
    has_sample_results: false,
    first_point: "How would you rate the overall quality of the product?",
  },
  {
    id: "059bcf15190c59b9",
    name: "Measure Help Center experience. HIDDEN",
    comment:
      "Collect your customers’ feedback on the self-study materials you provide and use the insights to meet your customers’ expectations.",
    type: "WidgetSurvey",
    library_excerpt: "Find ways to improve your Help Center content.",
    library_quick_tips: [],
    points_count: 3,
    thumbnail_url: "https://assets.survicate.com/survey-templates/Help.jpg",
    category_ids: [],
    subcategory_ids: [],
    has_sample_results: false,
    first_point: "How would you rate your experience with our Help Center?",
  },
  {
    id: "e2f0bbc47af7a241",
    name: "Test your idea for the brand's name",
    comment:
      "Test your brand's name with your target audience. Collect qualitative and quantitative data on your audience's perception of your brand's name.",
    type: "WidgetSurvey",
    library_excerpt: "Test your brand name with your target audience.",
    library_quick_tips: [],
    points_count: 2,
    thumbnail_url: "",
    category_ids: [2],
    subcategory_ids: [5],
    has_sample_results: false,
    first_point:
      "What adjectives come to your mind when you hear [a brand name]?",
  },
  {
    id: "1ccb4fca453dcff8",
    name: "Collect feedback on the design of your website or product",
    comment:
      "Run website design surveys to gather feedback on your site’s UX. Fine-tune it to improve website statistics and conversion rates.",
    type: "WidgetSurvey",
    library_excerpt:
      "Run website design surveys to gather feedback on your site’s UX.",
    library_quick_tips: [],
    points_count: 5,
    thumbnail_url:
      "https://assets.survicate.com/survey-templates/templates-new.jpg",
    category_ids: [2, 3],
    subcategory_ids: [6, 11],
    has_sample_results: false,
    first_point:
      "How would you rate the overall look & feel of our [website/product]?",
  },
  {
    id: "699859d57b0e7fd6",
    name: "Explore ease of use (Single Ease Question survey)",
    comment:
      "Single Ease Question surveys are used when running usability tests on life sites or when testing prototypes. Administer the survey to users after each completed task. For best results, collect both quantitative and qualitative responses.",
    type: "WidgetSurvey",
    library_excerpt:
      "Use the Single Ease Question survey during usability testing to measure the difficulty of tasks.",
    library_quick_tips: [],
    points_count: 2,
    thumbnail_url:
      "https://assets.survicate.com/survey-templates/templates-new.jpg",
    category_ids: [2, 3],
    subcategory_ids: [6, 11],
    has_sample_results: false,
    first_point: "Overall, how difficult or easy was the task to complete?",
  },
  {
    id: "2756c9fd00e7f710",
    name: "Keep track of the User Effort Score (UES)",
    comment:
      "Eliminate potential friction on the user journeys. Make sure the software is easy to use.",
    type: "WidgetSurvey",
    library_excerpt:
      "Eliminate potential friction on the user journeys. Make sure the software is easy to use.",
    library_quick_tips: [
      "Have the survey collect continuous feedback in strategic moments of the user journeys.",
      "When collecting feedback on the transactional screens, trigger it after a transaction is completed.",
    ],
    points_count: 4,
    thumbnail_url:
      "https://assets.survicate.com/survey-templates/templates-new.jpg",
    category_ids: [3],
    subcategory_ids: [9, 11, 37, 41],
    has_sample_results: false,
    first_point: "[Product] made it easy for me to [do a job].",
  },
  {
    id: "aba2778c638a05ea",
    name: "Collect feedback on your website",
    comment:
      "Find out what your audience thinks about your website and what can be improved.",
    type: "WidgetSurvey",
    library_excerpt: "Find out what your audience thinks about your website.",
    library_quick_tips: [],
    points_count: 8,
    thumbnail_url:
      "https://assets.survicate.com/survey-templates/Researchers.jpg",
    category_ids: [],
    subcategory_ids: [],
    has_sample_results: false,
    first_point: "How often do you visit our website?",
  },
  {
    id: "9aabf0dab5c574f1",
    name: "Identify visitor goals",
    comment:
      "Do you want to stay ahead of the competition? Whether you're looking to increase website traffic, improve user satisfaction, or boost sales, understanding the goals and challenges of your visitors will help you make better decisions.",
    type: "WidgetSurvey",
    library_excerpt:
      "Do you want to stay ahead of the competition? This survey will help you understand the motivations of your visitors and improve their experience.",
    library_quick_tips: [
      "Conduct a targeted website survey on specific URLs to enhance your product page, home page, or a pricing page of choice.",
      "Use advanced targeting to survey the audience with specific attributes or only new visitors.",
    ],
    points_count: 5,
    thumbnail_url: "",
    category_ids: [2, 3],
    subcategory_ids: [6, 9, 11],
    has_sample_results: false,
    first_point: "Have you achieved your goal on our website?",
  },
  {
    id: "4609b0558cfaee97",
    name: "Tailor content to meet your audience' needs",
    comment:
      "This quick survey helps you understand whether your audience likes your content – and if not, why.",
    type: "WidgetSurvey",
    library_excerpt: "Find out if your audience enjoys reading your content.",
    library_quick_tips: ["Analyze results and look for trends over time"],
    points_count: 4,
    thumbnail_url:
      "https://assets.survicate.com/survey-templates/templates-new.jpg",
    category_ids: [2],
    subcategory_ids: [6, 7],
    has_sample_results: false,
    first_point: "How relevant was the article/video/podcast to you?",
  },
  {
    id: "1f45cac3bb3291ac",
    name: "Discover churn reason (choices) 2",
    comment: "Find out the main reasons why customers cancel subscriptions.",
    type: "WidgetSurvey",
    library_excerpt:
      "Find out the main reasons why customers cancel subscriptions.",
    library_quick_tips: [
      "Consider offering special offers based on the answers given.",
    ],
    points_count: 5,
    thumbnail_url:
      "https://assets.survicate.com/survey-templates/templates-new.jpg",
    category_ids: [1],
    subcategory_ids: [1, 2],
    has_sample_results: false,
    first_point: "What made you cancel your subscription?",
  },
  {
    id: "ccd3cf555bb7039d",
    name: "Source ideas for innovative solutions",
    comment:
      "Looking to diversify your business model? On the lookout for new product ideas? Uncover innovation opportunities with a quick survey.",
    type: "WidgetSurvey",
    library_excerpt:
      "Looking to diversify your business model? On the lookout for new product ideas? Uncover innovation opportunities with a quick survey.",
    library_quick_tips: [],
    points_count: 9,
    thumbnail_url: "",
    category_ids: [2, 3, 4],
    subcategory_ids: [4, 9, 13, 42],
    has_sample_results: false,
    first_point:
      "👋 We're looking for ways to make your life easier! Would you like to answer a few questions?",
  },
  {
    id: "8cf126975be7ab3c",
    name: "Understand cart abandonment",
    comment:
      "Struggling with high cart abandonment? Collect customer feedback to find out why customers fail to complete purchases.",
    type: "WidgetSurvey",
    library_excerpt: "Understand why customers don't complete the purchase.",
    library_quick_tips: [
      "Trigger the survey when a customer is leaving a page.",
    ],
    points_count: 1,
    thumbnail_url:
      "https://assets.survicate.com/survey-templates/templates-new.jpg",
    category_ids: [1, 2, 3, 4],
    subcategory_ids: [2, 6, 11, 13, 35, 45],
    has_sample_results: false,
    first_point: "What stops you from completing the purchase?",
  },
  {
    id: "487423b9c169c45e",
    name: "Measure customer satisfaction with key aspects of your services",
    comment:
      "Learn how customers feel about the key building blocks of customer satisfaction: quality, customer service, and value for money.",
    type: "WidgetSurvey",
    library_excerpt:
      "Learn how customers feel about the key building blocks of customer satisfaction.",
    library_quick_tips: [
      "If needed, tweak the survey questions to better suit your needs.",
      "Keep the survey short.",
      "Measure the chosen aspects of your business regularly to track progress and detect potential problems early on.",
    ],
    points_count: 4,
    thumbnail_url: "https://assets.survicate.com/survey-templates/Effort.jpg",
    category_ids: [1, 4, 2, 3],
    subcategory_ids: [1, 2, 13, 34, 36, 37, 43, 45],
    has_sample_results: false,
    first_point: "How would you rate the quality of our product?",
  },
  {
    id: "c490b5d2c59d5907",
    name: "Uncover traffic sources (choices)",
    comment:
      "Find out where your clients first came from and which channels are worth investing resources in.",
    type: "WidgetSurvey",
    library_excerpt: "Find out where your clients first came from.",
    library_quick_tips: [],
    points_count: 7,
    thumbnail_url: "",
    category_ids: [2],
    subcategory_ids: [39],
    has_sample_results: false,
    first_point: "How did you discover our company?",
  },
  {
    id: "2fc594f82c5ad1ec",
    name: "Run beta feature research",
    comment:
      "Reduce guesswork when developing your MVP. Run this quick survey to collect feedback on beta features.",
    type: "WidgetSurvey",
    library_excerpt:
      "Run this quick survey to collect feedback on beta features.",
    library_quick_tips: [],
    points_count: 7,
    thumbnail_url:
      "https://assets.survicate.com/survey-templates/templates-new.jpg",
    category_ids: [1, 3],
    subcategory_ids: [2, 9, 11, 37, 41, 45],
    has_sample_results: false,
    first_point: "Have you tried out [beta feature] yet?",
  },
  {
    id: "6fa1e638be2363b4",
    name: "Customer Effort Score (CES) 7 point HIDDEN",
    comment:
      "Ask the customer how easy it was to solve their problem using your service. A game changer in evaluating feedback, CES is indispensable to customer success. Measure your products usefulness and efficiency, not only your customer satisfaction",
    type: "WidgetSurvey",
    library_excerpt:
      "Ask the customer how easy it was to solve their problem using your service.",
    library_quick_tips: [
      "Survey your customers on a regular basis.",
      "Ask to share your latest review with you.",
    ],
    points_count: 3,
    thumbnail_url:
      "https://assets.survicate.com/survey-templates/templates-new.jpg",
    category_ids: [],
    subcategory_ids: [],
    has_sample_results: false,
    first_point: "How would you rate your experience with our product?",
  },
  {
    id: "b7b8436d6ee913a1",
    name: "Improve the ease of use (5-point scale with NPS)",
    comment:
      "Measure the ease of use of your digital product. Collect additional feedback and ask the NPS question to complement the picture.",
    type: "WidgetSurvey",
    library_excerpt:
      "Measure the ease of use of your digital product. Collect additional feedback and ask the NPS question to complement the picture.",
    library_quick_tips: [],
    points_count: 5,
    thumbnail_url:
      "https://assets.survicate.com/survey-templates/templates-new.jpg",
    category_ids: [1, 2, 3, 4],
    subcategory_ids: [1, 6, 9, 11, 37, 41, 43],
    has_sample_results: false,
    first_point: "How easy or difficult is it to use [product name]?",
  },
  {
    id: "5d10052384597995",
    name: "Improve the checkout experience",
    comment:
      "Ask what users think about your checkout process and how they would improve it. Makes sure to use the gathered information to make the process smoother.",
    type: "WidgetSurvey",
    library_excerpt:
      "Ask what users think about your checkout process and how they would improve it.",
    library_quick_tips: [
      "Use this survey on your landing page after users complete check out process.",
    ],
    points_count: 3,
    thumbnail_url:
      "https://assets.survicate.com/survey-templates/templates-new.jpg",
    category_ids: [1, 2, 3],
    subcategory_ids: [2, 6, 9, 11, 35],
    has_sample_results: false,
    first_point: "How easy or difficult was it for you to check out?",
  },
  {
    id: "fd7ef463a8e4cba5",
    name: "Measure satisfaction after a completed purchase",
    comment:
      "Measure your customers' post-purchase satisfaction. Eliminate your weak points to improve overall customer satisfaction.",
    type: "WidgetSurvey",
    library_excerpt:
      "Measure your customers' post-purchase satisfaction. Eliminate your weak points to improve overall customer satisfaction.",
    library_quick_tips: [
      "Trigger the survey right after the purchase was completed",
    ],
    points_count: 9,
    thumbnail_url:
      "https://assets.survicate.com/survey-templates/Happy-people.jpg",
    category_ids: [2, 1, 4],
    subcategory_ids: [6, 35, 43, 44, 45],
    has_sample_results: false,
    first_point: "How happy are you with the overall purchase experience?",
  },
  {
    id: "6275bc10b53f50fa",
    name: "Measure Customer Effort Score (CES), 5-point scale",
    comment:
      "Ease-of-use is a fundamental factor affecting customer experience. Stay on top of the ease of interactions with your company or product. Improve the customer engagement, satisfaction, and the customer life-time value.",
    type: "WidgetSurvey",
    library_excerpt:
      "Stay on top of the ease of interactions with your company or product to improve the customer engagement .",
    library_quick_tips: [
      "Trigger the survey right after important interactions with your company or product.",
      "Use the survey to collect additional feedback on the touchpoint that generate low success metrics.",
      "Collect feedback on the touchpoints you want to improve but you need quantitive data to convince your stakeholders.",
    ],
    points_count: 3,
    thumbnail_url:
      "https://assets.survicate.com/survey-templates/templates-new.jpg",
    category_ids: [1, 4],
    subcategory_ids: [1, 43],
    has_sample_results: false,
    first_point: "How easy or difficult was it to interact with our company?",
  },
  {
    id: "1878e24bc14cbf69",
    name: "Understand frictions to try out your product",
    comment:
      "Check if your website visitors have any doubts about starting the trial period and why. Use this one question survey to learn what is keeping them from signing up. Use such findings to improve the number of prospects.",
    type: "WidgetSurvey",
    library_excerpt:
      "Check if your website visitors have any doubts about starting the trial period and why.",
    library_quick_tips: [
      "Run surveys on your main conversion pages.",
      "Use exit intent or time delay trigger.",
      "Once you know most popular resons, try single choice questions and calls to action.",
    ],
    points_count: 6,
    thumbnail_url:
      "https://assets.survicate.com/survey-templates/templates-new.jpg",
    category_ids: [2, 3],
    subcategory_ids: [6, 7, 9],
    has_sample_results: false,
    first_point:
      "Do you have any questions before starting a free 14-day trial?",
  },
  {
    id: "71c6fb89bdb209f8",
    name: "Collect reviews with an NPS survey",
    comment:
      "An NPS survey that also lets you get more reviews by asking your most satisfied customers to share their love on your brand's  profiles.",
    type: "WidgetSurvey",
    library_excerpt: "Collect positive reviews from your customers.",
    library_quick_tips: [
      "Customize follow-up questions based on NPS score",
      "Survey your customers on a regular basis",
      "Analyze results and look for trends over time",
    ],
    points_count: 6,
    thumbnail_url: "https://assets.survicate.com/survey-templates/Effort.jpg",
    category_ids: [1],
    subcategory_ids: [1, 2, 45],
    has_sample_results: false,
    first_point:
      "How likely is it that you will recommend our product to a friend or colleague?",
  },
  {
    id: "9c8507365d4af02a",
    name: "Measure System Usability with SUS",
    comment: "Collect quantitative data that will inform your design.",
    type: "WidgetSurvey",
    library_excerpt:
      "Complement usability testing rich insights with quantitative data.",
    library_quick_tips: [
      "Use the survey regularly - after every product iteration to keep track of how your UX improves over time.",
    ],
    points_count: 12,
    thumbnail_url:
      "https://assets.survicate.com/survey-templates/templates-new.jpg",
    category_ids: [2, 3],
    subcategory_ids: [6, 11],
    has_sample_results: false,
    first_point:
      "Thanks for taking part in the survey!   It comprises 10 statements.   Select the responses that best describe your experience with [a product name] ↓",
  },
  {
    id: "4ebc44f18a111ebb",
    name: "Verify the usefulness of the help articles",
    comment:
      "Keep tabs on the clarity of the help center section on your website or in the app. Reduce the frustration of your customers when they need your help. Prevent churn.",
    type: "WidgetSurvey",
    library_excerpt:
      "Find out if your help center section is useful to your customers.",
    library_quick_tips: [],
    points_count: 4,
    thumbnail_url:
      "https://assets.survicate.com/survey-templates/templates-new.jpg",
    category_ids: [1, 4],
    subcategory_ids: [1, 13, 34, 43],
    has_sample_results: false,
    first_point: "Was this article helpful?",
  },
  {
    id: "01973e23290df5a6",
    name: "Measure CSAT with 10-point rating scale",
    comment:
      "Use this simple rating question to discover how loyal customers are to your brand.",
    type: "WidgetSurvey",
    library_excerpt:
      "Use this simple rating question to discover how loyal customers are to your brand.",
    library_quick_tips: [],
    points_count: 3,
    thumbnail_url: "",
    category_ids: [],
    subcategory_ids: [],
    has_sample_results: false,
    first_point: "How would you rate your experience with our company?",
  },
  {
    id: "7e1d9dde7e8b001c",
    name: "Improve messaging clarity",
    comment:
      "Trigger the survey on your website to make sure the messaging is clear to your audience.",
    type: "WidgetSurvey",
    library_excerpt:
      "Make sure the messaging on your website is clear to your audience.",
    library_quick_tips: [],
    points_count: 4,
    thumbnail_url:
      "https://assets.survicate.com/survey-templates/templates-new.jpg",
    category_ids: [1, 3, 2],
    subcategory_ids: [1, 2, 11, 37, 40],
    has_sample_results: false,
    first_point:
      "Does the page tell you everything you need to know about the product?",
  },
  {
    id: "47121343948c035e",
    name: "Gauge price sensitivity with Van Westendorp's pricing questions",
    comment:
      "Van Westendorp price sensitivity questions have been successfully used by marketers for decades. Ask these 4 simple questions to find a price that is the sweet-spot price that brings the highest profit.",
    type: "WidgetSurvey",
    library_excerpt:
      "Verify your pricing assumptions with a tried and tested pricing technique.",
    library_quick_tips: [
      "When sending the survey to existing user base, segment the audience based on the pricing plans.",
    ],
    points_count: 6,
    thumbnail_url: "https://assets.survicate.com/survey-templates/price-2.jpg",
    category_ids: [1, 2],
    subcategory_ids: [35, 36],
    has_sample_results: false,
    first_point: "the price is too low for [product name] to be good quality?",
  },
  {
    id: "4db2a82b2a64527b",
    name: "Measure SUPR-Q of your website",
    comment:
      "Use the Standardized User Experience Percentile Rank Questionnaire to measure the quality of user experience and find out what impacts users' willingness to recommend.",
    type: "WidgetSurvey",
    library_excerpt:
      "Measure the quality of user experience and find out what impacts users' willingness to recommend.",
    library_quick_tips: [],
    points_count: 9,
    thumbnail_url:
      "https://assets.survicate.com/survey-templates/templates-new.jpg",
    category_ids: [1, 2, 3],
    subcategory_ids: [1, 6, 7, 8, 11, 39, 40],
    has_sample_results: false,
    first_point: "[Website] is easy to use.",
  },
  {
    id: "a7bc3cb4cbce3efe",
    name: "Assess the content of your blog articles",
    comment:
      "Develop a successful content strategy. Increase conversion rates by producing content that engages. Leverage readers’ satisfaction to collect contact details and grow a newsletter mailing list.",
    type: "WidgetSurvey",
    library_excerpt:
      "Benefit from the ready-to-use content assessment survey. Develop a successful content strategy, increase conversion rates, and grow a newsletter mailing list.",
    library_quick_tips: [
      "Allow website visitors some to get familiar with an article before you trigger the survey.",
    ],
    points_count: 11,
    thumbnail_url: "",
    category_ids: [2, 4],
    subcategory_ids: [6, 7, 43],
    has_sample_results: false,
    first_point: "How helpful is this blog post for you?",
  },
  {
    id: "91d3e3121c1beb89",
    name: "Improve the search experience",
    comment:
      "Run this search experience on your website or the web / mobile app. Collect quantitative and qualitative feedback to improve product findability or simply the experience of browsing your blog.",
    type: "WidgetSurvey",
    library_excerpt:
      "Provide an optimal search experience to your customers or website visitors.",
    library_quick_tips: [],
    points_count: 3,
    thumbnail_url:
      "https://assets.survicate.com/survey-templates/templates-new.jpg",
    category_ids: [2, 3, 1],
    subcategory_ids: [6, 11, 41, 45],
    has_sample_results: false,
    first_point: "How relevant are these results?",
  },
  {
    id: "ec99794ae7ad5453",
    name: "Measure the satisfaction of new users",
    comment:
      "Use the customer onboarding survey template to optimize the onboarding flows. Shorten the time to the first value, improve product adoption, and increase customer lifetime value (CLTV).",
    type: "WidgetSurvey",
    library_excerpt:
      "Use the customer onboarding survey template to optimize the onboarding flows.",
    library_quick_tips: [],
    points_count: 9,
    thumbnail_url:
      "https://assets.survicate.com/survey-templates/templates-new.jpg",
    category_ids: [1, 3, 4],
    subcategory_ids: [1, 9, 11, 37, 43],
    has_sample_results: false,
    first_point:
      "How would you rate your experience with [product name] so far?",
  },
  {
    id: "1d35c500d468fd7e",
    name: "Extended NPS survey",
    comment:
      "Run an in-depth survey to find out how customers assess your services and products.",
    type: "WidgetSurvey",
    library_excerpt: "Learn how customers assess your product & services.",
    library_quick_tips: [
      "Conduct this survey when the experience is fresh in your customer's minds.",
      "Use this survey often enough to get the most information, but not so often as to irritate the customer.",
      "Look for trends and differences by region or product.",
    ],
    points_count: 7,
    thumbnail_url:
      "https://assets.survicate.com/survey-templates/Customers.jpg",
    category_ids: [1, 3],
    subcategory_ids: [1, 11, 45],
    has_sample_results: false,
    first_point:
      "How likely is it that you will recommend [company / product name]\nto a friend or colleague?",
  },
  {
    id: "df488c976c7c63d1",
    name: "Grow your newsletter mailing list",
    comment:
      "Collect contact details from the audience happy with the content of your blog. Grow a mailing list to nurture leads or drive sales.",
    type: "WidgetSurvey",
    library_excerpt:
      "Grow your newsletter audience to start nurturing leads or drive more sales.",
    library_quick_tips: [
      "Set the survey to pop up on the website for readers who have already spent some time there, or scrolled far down the page.",
    ],
    points_count: 5,
    thumbnail_url:
      "https://assets.survicate.com/survey-templates/templates-new.jpg",
    category_ids: [2],
    subcategory_ids: [7, 8, 40],
    has_sample_results: false,
    first_point: "How helpful was what you've just read?",
  },
  {
    id: "c424557e36f7dd84",
    name: "Classic CSAT - Measure customer satisfaction",
    comment:
      "Survey your customers with a 7-point scale CSAT to improve their experience. Use the research tool regularly to ensure you deliver quality services or products.",
    type: "WidgetSurvey",
    library_excerpt:
      "Survey your customers with 7-point scale CSAT to improve their experience.",
    library_quick_tips: [
      "Measure CSAT systematically.",
      "Trigger the survey after important transactions or closing support tickets.",
    ],
    points_count: 4,
    thumbnail_url: "",
    category_ids: [3, 1, 4],
    subcategory_ids: [11, 34, 43, 45, 67],
    has_sample_results: false,
    first_point: "How satisfied are you with your experience with [product]?",
  },
  {
    id: "d4b855c22dc284fe",
    name: "Uncover Users’ Primary Benefits HIDDEN",
    comment:
      "Use this survey to find out what are the main benefits and core value you are providing to your Clients. Understand how they perceive it and let them to describe it in their own words.",
    type: "WidgetSurvey",
    library_excerpt:
      "Find out what are the main benefits and core value you are providing to your Clients.",
    library_quick_tips: [
      "Analyze results to get an understanding of your main benefits",
      "Use this feedback to improve your marketing communication",
    ],
    points_count: 2,
    thumbnail_url:
      "https://assets.survicate.com/survey-templates/templates-new.jpg",
    category_ids: [],
    subcategory_ids: [],
    has_sample_results: false,
    first_point:
      "What is the primary benefit that you have gained from our company?",
  },
  {
    id: "0bfe16cd31a9226b",
    name: "Quickly evaluate different product aspects",
    comment:
      "Show your customers that you care about their experiences with your product or service.",
    type: "WidgetSurvey",
    library_excerpt:
      "Ask users to evaluate your product across different areas.",
    library_quick_tips: [],
    points_count: 9,
    thumbnail_url:
      "https://assets.survicate.com/survey-templates/UX-workshop.jpg",
    category_ids: [3, 4],
    subcategory_ids: [9, 11, 43],
    has_sample_results: false,
    first_point: "How would you rate [product's] ease of use?",
  },
  {
    id: "a8883409567d0126",
    name: "Understand and quickly prevent churn",
    comment:
      "Stop customers from churning. Uncover the reasons customers opt out. Use the survey to offer them special deals and prevent churn.",
    type: "WidgetSurvey",
    library_excerpt:
      "Stop customers from churning. Understand why customers leave. Use the survey to offer them special deals and prevent churn.",
    library_quick_tips: [
      "Have the survey pop up in product when customers are closing their accounts.",
    ],
    points_count: 6,
    thumbnail_url: "",
    category_ids: [1, 4],
    subcategory_ids: [1, 2, 13, 35],
    has_sample_results: false,
    first_point:
      "Hey... 👋 Sorry to see you go... 🥹   Would you mind sharing your reasons with us? ",
  },
  {
    id: "8a6f48ae9e6dd41c",
    name: "Improve the sign-up experience",
    comment:
      "First impressions matter. Make sure you eliminate unexpected problems with sign-up. Improve the initial experience to activate users faster and increase customer life time value.",
    type: "WidgetSurvey",
    library_excerpt:
      "Improve the sign-up experience to activate users faster and increase their CLVs",
    library_quick_tips: [],
    points_count: 3,
    thumbnail_url:
      "https://assets.survicate.com/survey-templates/templates-new.jpg",
    category_ids: [1, 3],
    subcategory_ids: [2, 11, 37, 38],
    has_sample_results: false,
    first_point:
      "How would you rate the experience of signing up to [product name]?",
  },
  {
    id: "d772292a752b04f0",
    name: "Collect continuous feedback on your product or services",
    comment:
      "Collect continuous feedback on your product or services. Have new customer insights flow in all the time. Monitor them and build a customer-centric culture at your organization.",
    type: "WidgetSurvey",
    library_excerpt:
      "Collect continuous feedback on your product or services. Have new customer insights flow in all the time. Monitor them and build a customer-centric culture at your organization.",
    library_quick_tips: [],
    points_count: 5,
    thumbnail_url: "",
    category_ids: [1, 3, 2],
    subcategory_ids: [1, 9, 11, 40],
    has_sample_results: false,
    first_point: "Would you like to share thoughts?",
  },
  {
    id: "3be2090541870f04",
    name: "Find out what first impression you leave",
    comment:
      "A first impression can make or break a business. Find out what first impression your website or web app makes and improve the image it projects!",
    type: "WidgetSurvey",
    library_excerpt:
      "A first impression can make or break a business. Find out what first impression your website or web app makes and improve the image it projects!",
    library_quick_tips: [
      "Trigger the survey 5 seconds after the page load.",
      "Trigger it on the homepage and/or the most important pages of your website.",
      "Show the survey to new users only.",
    ],
    points_count: 5,
    thumbnail_url:
      "https://assets.survicate.com/survey-templates/templates-new.jpg",
    category_ids: [1, 2, 3, 4],
    subcategory_ids: [1, 6, 7, 9, 11, 37, 40, 43],
    has_sample_results: false,
    first_point:
      "We'd love to find out what your first impression of us is.   Would you like to answer 3 short questions?",
  },
  {
    id: "946a00d5f19e5834",
    name: "Measure users' satisfaction with your MVP",
    comment:
      "In need of innovating your product? Run a quick product research survey to: 1) Leverage the feedback from the disappointed users. 2) Make use of improvement ideas from the NPS passives. 3) Learn what not to change from the users that are satisfied with your product.",
    type: "WidgetSurvey",
    library_excerpt:
      "In need of innovating your product? Every user, no matter their satisfaction level, can help you innovate. Run a quick product research survey and leverage the insights you get.",
    library_quick_tips: [],
    points_count: 5,
    thumbnail_url: "",
    category_ids: [3, 4],
    subcategory_ids: [11, 37, 38, 41, 43],
    has_sample_results: false,
    first_point: "How satisfied are you with [product name]?",
  },
  {
    id: "910d6c4fcaccebee",
    name: "Evaluate your software across all dimensions",
    comment:
      "Let the users evaluate their experience with your software. Find out how they feel about its:  capabilities, ease of use, reliability, etc.",
    type: "WidgetSurvey",
    library_excerpt:
      "Let the users evaluate their experience with your digital product.",
    library_quick_tips: [],
    points_count: 8,
    thumbnail_url: "https://assets.survicate.com/survey-templates/feedback.jpg",
    category_ids: [1, 2, 3, 4],
    subcategory_ids: [1, 6, 11, 36, 37, 38, 40, 43],
    has_sample_results: false,
    first_point: "How satisfied are you with [product]'s capabilities?",
  },
  {
    id: "a03fc56af998dd78",
    name: "Verify your website's usability",
    comment:
      "Collect feedback on your website. Improve its usability. Boost conversion rates.",
    type: "WidgetSurvey",
    library_excerpt:
      "Collect feedback on your website. Improve its usability. Boost conversion rates.",
    library_quick_tips: [],
    points_count: 8,
    thumbnail_url: "",
    category_ids: [2, 4],
    subcategory_ids: [6, 43],
    has_sample_results: false,
    first_point:
      "👋 We'd like to ask you some questions about our website.\n  It'll take you 2 minutes and be of huge help for us. ",
  },
  {
    id: "928b86244d52a0d5",
    name: "Uncover your customers' motivations",
    comment:
      "Uncover users' main motivations and expectations of your app.  Hone better marketing messaging and plan future product design and development.",
    type: "WidgetSurvey",
    library_excerpt:
      "Uncover users' main motivations and expectations of your app.",
    library_quick_tips: [],
    points_count: 7,
    thumbnail_url:
      "https://assets.survicate.com/survey-templates/templates-new.jpg",
    category_ids: [1, 2, 3],
    subcategory_ids: [1, 2, 6, 8, 11, 38, 39, 45],
    has_sample_results: false,
    first_point:
      "Do you recall what motivated you to look for a solution like [product name]?",
  },
  {
    id: "f6fb5aa6fed63cd1",
    name: "Measure user satisfaction with product trials",
    comment:
      "Measure new users' satisfaction with the product. Find out who is ready to upgrade. Or detect problems early on and prevent churn.",
    type: "WidgetSurvey",
    library_excerpt:
      "Measure new users' satisfaction with the product. Find out who is ready to upgrade. Or, detect problems early on and prevent churn.",
    library_quick_tips: [],
    points_count: 4,
    thumbnail_url:
      "https://assets.survicate.com/survey-templates/templates-new.jpg",
    category_ids: [3, 2],
    subcategory_ids: [11, 36, 37],
    has_sample_results: false,
    first_point: "👋  How satisfied are you with your free trial so far?",
  },
  {
    id: "9b48887a4fb46e69",
    name: "Test the messaging on your homepage",
    comment:
      "Audit the way the messaging on your website communicates your value proposition. Check the clarity of product description and your understanding of the personas' challenges. Ask a NPS-like question to measure the effectiveness of the message on your homepage.",
    type: "WidgetSurvey",
    library_excerpt:
      "Audit the way the messaging on your website communicates your value proposition. Check the clarity of product description and your understanding of the personas' challenges.",
    library_quick_tips: [
      "Letting respondents know how long it takes to complete a survey may decrease your response rates, but it's increase the survey completion rates.",
      "If needed, use drag-and-drop to first ask the most important questions. Survicate records responses in real time. Rearrange the questions to make sure you obtain the feedback that matters to you most.",
    ],
    points_count: 8,
    thumbnail_url:
      "https://assets.survicate.com/survey-templates/templates-new.jpg",
    category_ids: [2],
    subcategory_ids: [6, 7, 40],
    has_sample_results: false,
    first_point:
      "Would you like to help us make sure our message comes across?   It'll take 2-3 minutes, and we'll be grateful forever! :)",
  },
  {
    id: "c5817fc061297277",
    name: "Improve search results accuracy",
    comment:
      "The search results accuracy is vital and directly correlated with website's conversion rates. Collect feedback on the search results on your website to improve the experience.",
    type: "WidgetSurvey",
    library_excerpt:
      "Collect feedback on the search results on your website to improve the experience.",
    library_quick_tips: [
      "Allow visitors to make a couple of searches before you trigger the survey.",
      "Use RegEx targeting or 'contains' rules.",
      "For more complex cases, reach out for help to Survicate's support team.",
    ],
    points_count: 4,
    thumbnail_url:
      "https://assets.survicate.com/survey-templates/templates-new.jpg",
    category_ids: [2, 3],
    subcategory_ids: [6, 11],
    has_sample_results: false,
    first_point: "How happy are you with the search results?",
  },
  {
    id: "d750c83e2918a7a5",
    name: "Uncover Traffic Sources (choices) HIDDEN. DUPLICATE",
    comment: "",
    type: "WidgetSurvey",
    library_excerpt: "",
    library_quick_tips: [],
    points_count: 6,
    thumbnail_url:
      "https://assets.survicate.com/survey-templates/Paper-plain.jpg",
    category_ids: [],
    subcategory_ids: [],
    has_sample_results: false,
    first_point: "How did you discover our company?",
  },
  {
    id: "2244e7433b2f24d1",
    name: "Create a user persona",
    comment:
      "Explore your app users' challenges and needs. Gain a deeper understanding of their context and build user-centric, innovative solutions they love and recommend.",
    type: "WidgetSurvey",
    library_excerpt:
      "Get to know your target audience to design truly user-centric solutions.",
    library_quick_tips: [
      "The survey is on the longer side. Make sure you state it clearly that taking it will benefit the respondents.",
      "Consider asking about the respondents' readiness to take part in an interview.",
      "Qualify the respondents for interviews based on their answers to the questions 3, 7, and 8.",
    ],
    points_count: 9,
    thumbnail_url:
      "https://assets.survicate.com/survey-templates/templates-new.jpg",
    category_ids: [3],
    subcategory_ids: [9, 37],
    has_sample_results: false,
    first_point:
      "👋 We've been losing nights of sleep, trying to figure out how to better meet your needs.   Would you like to answer 7 short questions and help us sleep better? ;)   It'll take max 5 minutes! ",
  },
  {
    id: "569e44e7c326d894",
    name: "See who visits your careers page",
    comment:
      "Ask your website visitors about their current place in their career path. The insight will help you build profiles of your visiting users and adapt the content or improve your product to meet the needs of all who visits.",
    type: "WidgetSurvey",
    library_excerpt:
      "Ask your website visitors about their current place in their career path.",
    library_quick_tips: [],
    points_count: 7,
    thumbnail_url:
      "https://assets.survicate.com/survey-templates/templates-new.jpg",
    category_ids: [4, 2],
    subcategory_ids: [12, 39],
    has_sample_results: false,
    first_point: "Which of the following best describes you?",
  },
  {
    id: "5ecdac200e15074d",
    name: "Prepare your event better",
    comment:
      "Make your next event one to remember. With pre-event surveys, you can better understand what your attendees expect. Create an event that will leave a lasting impression and solidify your brand's reputation for years.",
    type: "WidgetSurvey",
    library_excerpt:
      "Organize successful events based on the feedback from the future event attendees.",
    library_quick_tips: [
      "Send this pre-event survey at least 4 weeks before the event to ensure you have time to act on the suggestions of your attendees.",
      "Trigger the survey automatically after someone registers for the event.",
    ],
    points_count: 6,
    thumbnail_url: "",
    category_ids: [2, 4],
    subcategory_ids: [8, 13],
    has_sample_results: false,
    first_point: "How did you hear about the event?",
  },
  {
    id: "4c372fbb0abfbc5e",
    name: "Discover churn reason (choices) 1",
    comment:
      "Collect feedback from customers who churn. Ask personalized follow-up questions to quickly obtain more insights and improve your product.",
    type: "WidgetSurvey",
    library_excerpt:
      "Collect feedback from customers who churn. Ask personalized follow-up questions to quickly obtain more insights and improve your product.",
    library_quick_tips: [],
    points_count: 6,
    thumbnail_url:
      "https://assets.survicate.com/survey-templates/templates-new.jpg",
    category_ids: [1, 4],
    subcategory_ids: [1, 2, 13],
    has_sample_results: false,
    first_point: "What is the primary reason for canceling your subscription?",
  },
  {
    id: "b60d03663a3072f4",
    name: "Gauge task accomplishment",
    comment:
      "Increase user engagement and activation. Tigger the survey on important touchpoints in your app or on the www. Make sure users can achieve what they intend to.",
    type: "WidgetSurvey",
    library_excerpt:
      "Tigger the survey on important touchpoints in your app or on the www. Make sure users can achieve what they intend.",
    library_quick_tips: [],
    points_count: 6,
    thumbnail_url:
      "https://assets.survicate.com/survey-templates/templates-new.jpg",
    category_ids: [3],
    subcategory_ids: [9, 11, 37],
    has_sample_results: false,
    first_point: "Were you able to accomplish what you came here for? ",
  },
  {
    id: "46ec19ece6164a11",
    name: "See if your product meets customers’ needs",
    comment:
      "Ensure you answer customer needs for perfect product-market fit. Use actionable insights to build an irreplaceable product.",
    type: "WidgetSurvey",
    library_excerpt:
      "Ensure you answer customer needs for perfect product-market fit",
    library_quick_tips: [
      "Send this survey after a trial period or once a user completes onboarding. Learn what first impressions your product makes and prevent potential churn.",
      "Trigger the survey after specific events.",
      "Define the audience to target particular customer segments.",
    ],
    points_count: 4,
    thumbnail_url: "",
    category_ids: [1, 3],
    subcategory_ids: [1, 11, 35, 41, 67],
    has_sample_results: false,
    first_point: "How well does [product] meet your needs?",
  },
  {
    id: "15061c13daa0f3c7",
    name: "Measure transactional NPS (tNPS)",
    comment:
      "Measure customer loyalty after important interactions like completed purchases or contacting customer support. Stay on top of the quality of service at the touch points that are key to your business (or those that  are most problematic.)",
    type: "WidgetSurvey",
    library_excerpt: "Measure customer loyalty after important interactions.",
    library_quick_tips: [
      "Set the survey to pop up right after an interaction.",
    ],
    points_count: 6,
    thumbnail_url: "",
    category_ids: [],
    subcategory_ids: [],
    has_sample_results: false,
    first_point:
      "Based on the last interaction with [company name],  how likely are you to recommend our services to someone like you?",
  },
  {
    id: "3dae64baed893106",
    name: "Recruit research panel participants",
    comment:
      "Screen the potential participants of your next user research. Disseminate a survey to speed up the process.",
    type: "WidgetSurvey",
    library_excerpt: "Build the base of your next research participants.",
    library_quick_tips: [],
    points_count: 4,
    thumbnail_url:
      "https://assets.survicate.com/survey-templates/templates-new.jpg",
    category_ids: [3, 4],
    subcategory_ids: [9, 13],
    has_sample_results: false,
    first_point: "Would you be interested to join our research panel?",
  },
  {
    id: "b1d947b1bfd54bd7",
    name: "Discover your audience's social media habits",
    comment:
      "Learn what social media channels your customers are most active on, and how they consume content on them. Use the insights while you promote the content and increase audience engagement.",
    type: "WidgetSurvey",
    library_excerpt:
      "Learn what social media channels your customers are most active on, and how they consume content on them.",
    library_quick_tips: [
      "Adjust posting times to your audience's habits.",
      "Be mindful of the readers' context when you pen social media posts.",
    ],
    points_count: 5,
    thumbnail_url: "https://assets.survicate.com/survey-templates/socials.jpg",
    category_ids: [2, 3],
    subcategory_ids: [4, 8, 37],
    has_sample_results: false,
    first_point: "Which of the following social media platforms do you use?",
  },
  {
    id: "e2703e62372657ce",
    name: "Validate a name of a feature",
    comment:
      "Ensure you speak your customers' language. Validate the naming of features to improve the overall user experience.",
    type: "WidgetSurvey",
    library_excerpt: "Validate a name of a feature with your user base.",
    library_quick_tips: [],
    points_count: 2,
    thumbnail_url:
      "https://assets.survicate.com/survey-templates/templates-new.jpg",
    category_ids: [1, 3],
    subcategory_ids: [1, 9, 11, 41],
    has_sample_results: false,
    first_point:
      'What would you expect to be able to do with a "[...]" feature?',
  },
  {
    id: "87643594aa63f9d8",
    name: "Collect feedback on the UX of filtering",
    comment:
      "Collect feedback on the filters of your website. Have website visitors help you improve its design. Ensure great UX and boost conversion rates. Claim more value from the content you create.",
    type: "WidgetSurvey",
    library_excerpt:
      "Collect feedback on the filters of your website. Improve user experience and boost conversion rates.",
    library_quick_tips: [
      "Allow some time for visitors to browse the website before you trigger the survey.",
      "Make sure the survey does not cover important CTAs on your website.",
    ],
    points_count: 4,
    thumbnail_url: "",
    category_ids: [2, 3],
    subcategory_ids: [6, 8, 9, 11, 40],
    has_sample_results: false,
    first_point: "How happy are you with the filters on this page?",
  },
  {
    id: "844081aef0496ab8",
    name: "Improve users' onboarding experience",
    comment:
      "Successful user onboarding impacts the entire bottom line. Collect feedback on your user onboarding experience and reach out to users interested in user testing. Quickly arrange user tests.",
    type: "WidgetSurvey",
    library_excerpt:
      "Collect feedback on your user onboarding experience and reach out to users interested in user testing. Quickly arrange user tests.",
    library_quick_tips: [
      "Before you trigger the survey, allow users just enough time to get the first impression of your product without developing walkarounds.",
      "If you don’t want to add a contact form to this survey, do not set it as anonymous.",
    ],
    points_count: 7,
    thumbnail_url: "",
    category_ids: [1, 3],
    subcategory_ids: [2, 11, 37],
    has_sample_results: false,
    first_point: "How easy was it to get started with [product]?",
  },
  {
    id: "5da8055ced135258",
    name: "Learn how users describe your product. HIDDEN",
    comment:
      "Ask users to describe your product in their own words. The wide range of open-ended feedback may not only evaluate how your product is perceived, but it may also help you come up with a unique value proposition or new ways to market it.",
    type: "WidgetSurvey",
    library_excerpt: "Ask users to describe your product in their own words.",
    library_quick_tips: [
      "Survey your active users.",
      "You can add a question about the value their getting from your product.",
      "Or what jobs their getting done with it.",
    ],
    points_count: 2,
    thumbnail_url:
      "https://assets.survicate.com/survey-templates/templates-new.jpg",
    category_ids: [],
    subcategory_ids: [],
    has_sample_results: false,
    first_point: "How would you describe our product?",
  },
  {
    id: "098605f58774a0cf",
    name: "Check if users need onboarding assistance",
    comment:
      "Find out if users need help with product onboarding. Collect feedback needed to prepare for calls.",
    type: "WidgetSurvey",
    library_excerpt:
      "Find out if users need help with product onboarding. Collect feedback needed to prepare for calls.",
    library_quick_tips: [
      "Make sure you include information on the next steps! Your customers will want to know who, when, and how will contact them to arrange a call.",
    ],
    points_count: 6,
    thumbnail_url: "",
    category_ids: [4, 3, 1],
    subcategory_ids: [13, 37, 43, 45],
    has_sample_results: false,
    first_point: "How easy is using [product name] to you?",
  },
  {
    id: "1ebbabdbbd0c2b7c",
    name: "Improve the onboarding experience",
    comment:
      "Ensure intuitive user onboarding and align product strategy with users’ actual needs.",
    type: "WidgetSurvey",
    library_excerpt:
      "Ensure intuitive user onboarding and align product strategy with users’ actual needs.",
    library_quick_tips: [
      "Before you trigger the survey, allow users just enough time to get the first impression of your product without developing walkarounds.",
    ],
    points_count: 5,
    thumbnail_url: "",
    category_ids: [3, 4],
    subcategory_ids: [9, 11, 37, 43],
    has_sample_results: false,
    first_point:
      "How would you rate your experience getting started with [product name]?",
  },
  {
    id: "b2e7dcd9303ee5a4",
    name: "Improve in-product copy clarity",
    comment:
      "Hone your in-product copy. Enjoy higher conversion rates, product adoption, and ROI.",
    type: "WidgetSurvey",
    library_excerpt:
      "Hone your in-product copy to enjoy higher conversion rates.",
    library_quick_tips: [],
    points_count: 5,
    thumbnail_url:
      "https://assets.survicate.com/survey-templates/templates-new.jpg",
    category_ids: [1, 3, 2, 4],
    subcategory_ids: [1, 9, 11, 37, 40, 43],
    has_sample_results: false,
    first_point: "How clear is the language we use in [product name] app?",
  },
  {
    id: "5b5d4bcf0d14e088",
    name: "Identify sign-up barriers",
    comment:
      "Collect feedback from prospects that seem interested but hesitate. Qualify leads. Arrange sales calls and boost sales.",
    type: "WidgetSurvey",
    library_excerpt:
      "Collect feedback from prospects that seem interested but hesitate. Reach out to those with selling potential and sell.",
    library_quick_tips: [
      "Analyze visitor behavior on the website to decide what criteria should be met for the survey to pop up.",
    ],
    points_count: 11,
    thumbnail_url: "",
    category_ids: [2, 1],
    subcategory_ids: [8, 35, 36],
    has_sample_results: false,
    first_point: "How likely are you to give the [product name] a try?",
  },
  {
    id: "f4e75cfa1325b7aa",
    name: "Measure user experience with UMUX",
    comment:
      "UMUX (Usability Metric for User Experience) helps you assess the general usability of your digital product. Use it to test onboarding experience, new features, or after you've carried out usability tests.",
    type: "WidgetSurvey",
    library_excerpt:
      "UMUX (Usability Metric for User Experience) helps you assess the general usability of your digital product. Use it to test onboarding experience, new features, or after you've carried out usability tests.",
    library_quick_tips: [],
    points_count: 6,
    thumbnail_url: "",
    category_ids: [3],
    subcategory_ids: [9, 11, 37, 41],
    has_sample_results: false,
    first_point:
      "This [website's/ product's/ tool's/ software's] capabilities meet my requirements.",
  },
  {
    id: "203ee9ecb2e9dc20",
    name: "Test the messaging on your website (open-ended)",
    comment:
      "Test the copy on important pages. Ensure it resonates with your audience. Successfully communicate your selling points, address misgivings. Gain a deeper understanding of your personas’ goals, pains, and gains.",
    type: "WidgetSurvey",
    library_excerpt:
      "Test the copy of your homepage or other selling pages. Make sure the message resonates \r\nwith your audience.",
    library_quick_tips: [
      "Trigger the survey with delay. Ensure your website’s visitors have had enough time to get familiar with the content of the page you test.",
      "Consider sending the survey to first-time visitors only.",
      "Alternatively, narrow down the audience to traffic from specific sources.",
    ],
    points_count: 8,
    thumbnail_url: "",
    category_ids: [2],
    subcategory_ids: [6, 7, 8, 40],
    has_sample_results: false,
    first_point:
      "Would you like to help us make sure our message comes across?\n  It'll take 2-3 minutes, and we'll be grateful forever! ♾ ;)",
  },
  {
    id: "2ac71984847f3062",
    name: "Understand your customers' toolstack",
    comment:
      "Build a better understanding of your customers' tech ecosystem. Find out how you fit in and how you can benefit from it. Obtain integrations ideas and drive growth.",
    type: "WidgetSurvey",
    library_excerpt:
      "Build a better understanding of your customers' tech ecosystem. Find out how you fit in and how you can benefit from it.",
    library_quick_tips: [],
    points_count: 7,
    thumbnail_url:
      "https://assets.survicate.com/survey-templates/templates-new.jpg",
    category_ids: [3],
    subcategory_ids: [37, 38],
    has_sample_results: false,
    first_point:
      "We wonder what tools we should integrate with to better serve your needs...\n   Would you like to answer 2 questions and share your thoughts?",
  },
  {
    id: "eee6e29e8ed9c2a1",
    name: "Comprehensive CSAT",
    comment:
      "Keep the pulse of your customer's satisfaction with a detailed client satisfaction questionnaire.  Gather insights into customers' needs. Check their loyalty and willingness to buy again.",
    type: "WidgetSurvey",
    library_excerpt:
      "Keep the pulse of your customer's satisfaction with a detailed client satisfaction questionnaire.",
    library_quick_tips: [],
    points_count: 10,
    thumbnail_url: "",
    category_ids: [1, 3],
    subcategory_ids: [1, 2, 11, 45, 67],
    has_sample_results: false,
    first_point:
      "Overall, how satisfied or dissatisfied are you with our company?",
  },
  {
    id: "6ec733525a0b768d",
    name: "Measure customer satisfaction (1-3 CSAT)",
    comment:
      "A 3-point scale CSAT survey template to measure clients' happiness after interactions with your support team.",
    type: "WidgetSurvey",
    library_excerpt:
      "A 3-point scale CSAT survey template to measure clients' happiness after interactions with your support team.",
    library_quick_tips: [
      "To have a clear picture of how successful the interactions are, trigger the survey right after clients' contact with your support team or chat.",
    ],
    points_count: 4,
    thumbnail_url:
      "https://assets.survicate.com/survey-templates/templates-new.jpg",
    category_ids: [],
    subcategory_ids: [],
    has_sample_results: false,
    first_point: "How satisfied are your with your recent contact with us?",
  },
  {
    id: "ef16c332b086272c",
    name: "Segment customers effectively",
    comment:
      "Find out how your perceived value correlates with company sizes, your customers' role within your companies, or locations. Use the insights to target marketing campaigns and develop better business strategies.",
    type: "WidgetSurvey",
    library_excerpt:
      "Complete the picture of your clients to segment them effectively and understand what characterizes your best clients.",
    library_quick_tips: [
      "If needed, expand the survey with additional questions about customers' demographic.",
    ],
    points_count: 6,
    thumbnail_url: "",
    category_ids: [2, 4],
    subcategory_ids: [8, 13, 43],
    has_sample_results: false,
    first_point: "What industry does your company operate in?",
  },
  {
    id: "5606470eda01e30a",
    name: "Gauge product satisfaction and readiness to upgrade",
    comment:
      "Gauge customers’ satisfaction with your SaaS product. Detect potential improvement areas and find out which users are ready to upgrade.",
    type: "WidgetSurvey",
    library_excerpt:
      "Gauge customers’ satisfaction with your SaaS product. Find out which users are ready to upgrade.",
    library_quick_tips: [
      "Follow up on responses from happy customers with paid features trial offers.",
      "Fill the product team on what features users have problems with.",
      "Create explainer articles or other types of content on how to use problematic features.",
    ],
    points_count: 7,
    thumbnail_url: "",
    category_ids: [1, 3, 2, 4],
    subcategory_ids: [1, 2, 11, 36, 41, 43, 45],
    has_sample_results: false,
    first_point: "How happy are you with [product name]?",
  },
  {
    id: "5ed4f014488cb890",
    name: "Dig deep into the NPS score",
    comment:
      "Max out the most effective customer feedback survey. Discover what your biggest selling point is, what issues are most urgent ones, and grow a contact list for your next research panel.",
    type: "WidgetSurvey",
    library_excerpt:
      "Discover what your biggest selling point is, what issues are most urgent ones, and grow a contact list for your next research panel.",
    library_quick_tips: [
      "When sending the survey out to a large number of users, add a question qualifying respondents you’ll ask about the interviews.",
      "Depending on your audience and your product, ask qualifying questions about a company size, role within a company, depending on the keywords respondents use.",
    ],
    points_count: 8,
    thumbnail_url: "",
    category_ids: [],
    subcategory_ids: [],
    has_sample_results: false,
    first_point:
      "On a scale of 0 to 10, how likely are you to recommend [product name] to a friend or colleague?",
  },
  {
    id: "41b527aa40f58259",
    name: "Determine your activation points",
    comment:
      "Have limited or no product usage data? Run a quick quantitative survey to discover your user activation metrics. Start measuring the health of your business with confidence.",
    type: "WidgetSurvey",
    library_excerpt:
      "Have limited or no product usage data? Run a quick quantitative survey to discover your user activation metrics. Start measuring the health of your business with confidence.",
    library_quick_tips: [
      "Before you run the survey, brainstorm potential user actions that may influence user activation and include them in the survey.",
      "To determine the metrics, pick the milestones selected by the majority and see how they correlate with long-term retention.",
      "Narrowing down the number of answers to the first question will make it easier to interpret the survey results.",
    ],
    points_count: 5,
    thumbnail_url:
      "https://assets.survicate.com/survey-templates/templates-new.jpg",
    category_ids: [3],
    subcategory_ids: [11, 37, 41],
    has_sample_results: false,
    first_point:
      "Which of the following was the first moment you felt that [product name] solves your problem?",
  },
  {
    id: "22c596305ade9e09",
    name: "Uncover exit intent reason (subtle) HIDDEN. DUPLICATE",
    comment:
      "Find out why users are leaving your website without completing the expected actions. Let your users tell you what prevent them from continuing further or why their interest was lost at this step.",
    type: "WidgetSurvey",
    library_excerpt: "Find out why visitors are leaving your website.",
    library_quick_tips: [
      "Use exit intent targeting on people who visited just one page during the session.",
    ],
    points_count: 4,
    thumbnail_url:
      "https://assets.survicate.com/survey-templates/templates-new.jpg",
    category_ids: [],
    subcategory_ids: [],
    has_sample_results: false,
    first_point: "Did you find what you were looking for?",
  },
  {
    id: "d1f69ad6270a423a",
    name: "Plan your content marketing mix better",
    comment:
      "Find out straight what type of content your audience is interested to consume. Create personas-centric content marketing strategies.",
    type: "WidgetSurvey",
    library_excerpt:
      "Find out straight what type of content your audience is interested to consume.",
    library_quick_tips: [],
    points_count: 5,
    thumbnail_url:
      "https://assets.survicate.com/survey-templates/templates-new.jpg",
    category_ids: [2],
    subcategory_ids: [7, 8],
    has_sample_results: false,
    first_point:
      "👋  We'd love to tailor our newsletter to your specific needs. Would you help us understand them better?",
  },
  {
    id: "ebfc69a43a19cd6b",
    name: "Recruit research participants based on their experience level",
    comment:
      "Our recruiting research participants survey is structured to help you recruit users with diverse experiences and identify extreme users for your research. Have control over who you invite to participate and set your project up for success.",
    type: "WidgetSurvey",
    library_excerpt:
      "Have the right mix of users take part in your research. Ensure you diversify participants in terms of expertise. Source extreme users for the research study.",
    library_quick_tips: [],
    points_count: 8,
    thumbnail_url: "",
    category_ids: [3, 4],
    subcategory_ids: [9, 43],
    has_sample_results: false,
    first_point: "👋 Would you like to help us design a [category name] app?  ",
  },
  {
    id: "1516b681faeb737c",
    name: "Evaluate your customer support",
    comment:
      "Collect feedback on the performance of your customer service team and the processes. See if you meet customers' expectations.",
    type: "WidgetSurvey",
    library_excerpt:
      "Collect feedback on the performance of your customer service team and the processes. See if you meet customers' expectations.",
    library_quick_tips: [],
    points_count: 6,
    thumbnail_url:
      "https://assets.survicate.com/survey-templates/helpccenter.jpg",
    category_ids: [1, 4],
    subcategory_ids: [1, 34, 43],
    has_sample_results: false,
    first_point:
      "How would you rate your experience with our customer help team?",
  },
  {
    id: "4e1343866e207f09",
    name: "Discover your audience's buying criteria",
    comment: "",
    type: "WidgetSurvey",
    library_excerpt: "",
    library_quick_tips: [],
    points_count: 3,
    thumbnail_url: "",
    category_ids: [2, 1],
    subcategory_ids: [36, 67],
    has_sample_results: false,
    first_point:
      "Which of the following are the most important\nto you when buying software?",
  },
  {
    id: "d6ba57b902ba1264",
    name: "Hear the voice of the customer (VoC survey)",
    comment:
      "Brands that truly listen earn customers' loyalty.  Ask the customers about the key aspects of your business. The findings of this Voice of Customer survey will help you focus your strategy on what matters.",
    type: "WidgetSurvey",
    library_excerpt: "Learn what your customers actually think of your brand.",
    library_quick_tips: [
      "Send the survey regularly to monitor the health of your business.",
    ],
    points_count: 7,
    thumbnail_url:
      "https://assets.survicate.com/survey-templates/templates-new.jpg",
    category_ids: [3, 4],
    subcategory_ids: [9, 11, 43],
    has_sample_results: false,
    first_point:
      "How likely are you to recommend our product to someone like you?",
  },
  {
    id: "27750f4f2c86872d",
    name: "Understand customer journey better (new customers)",
    comment:
      "Stay up to date on how the customer journey changes. Build rapport with new users, and shorten the user activation time.",
    type: "WidgetSurvey",
    library_excerpt:
      "Stay up to date on how the customer journey changes. Build rapport with new users, and shorten the user activation time.",
    library_quick_tips: [
      "Consider the user journey while selecting the right survey type (email/link, product, or mobile).",
      "If you want to use the questions offering a call with your customer success team, connect Survicate to your email automation tool. And automate the follow-up messages.",
      "Activate Slack / Microsoft Teams notifications to keep track of incoming responses.",
    ],
    points_count: 11,
    thumbnail_url: "",
    category_ids: [2],
    subcategory_ids: [4, 8, 39],
    has_sample_results: false,
    first_point:
      "👋 Happy to have you as a customer!   Would you like to answer a couple of questions? (All you need is 2 minutes!)",
  },
  {
    id: "dc7c1bcb90aa3c35",
    name: "Intercept prospects before competition",
    comment:
      "Understand better the buying process. Find out what situations motivate your customers to buy and learn how they look for a solution like yours. Outsmart your competition - be the first one consumers find.",
    type: "WidgetSurvey",
    library_excerpt:
      "Understand better the buying process: what motivates customers to buy and how they search. Outsmart your competition - be the first one consumers find.",
    library_quick_tips: [],
    points_count: 6,
    thumbnail_url:
      "https://assets.survicate.com/survey-templates/templates-new.jpg",
    category_ids: [2],
    subcategory_ids: [4, 8, 36, 39],
    has_sample_results: false,
    first_point: "What does [product name] help you do?",
  },
  {
    id: "dc92d5fb67709103",
    name: "Find out if the product meets users' expectations",
    comment:
      "Stay on top of your users’ expectations. Analyze the feedback by the persona. Improve your product strategy, drive user activation, or - if needed - perfect your targeting. Maximize customers’ lifetime value and max out your customer acquisition budget.",
    type: "WidgetSurvey",
    library_excerpt:
      "Stay on top of your users’ expectations. Analyze the feedback by the persona. Improve your product strategy, drive user activation, or - if needed - perfect your targeting.",
    library_quick_tips: [
      "Inform your CS team about the survey so that they can arrange the product walkthrough call.",
    ],
    points_count: 9,
    thumbnail_url: "",
    category_ids: [1, 3],
    subcategory_ids: [1, 11, 37, 41],
    has_sample_results: false,
    first_point: "Does [product name] work as you expected it to?",
  },
  {
    id: "1eeeb4bb214f4969",
    name: "Understand future purchase intent",
    comment:
      "Predict the profitability of your business and how likely your customer is to order again from you. Learn more about their satisfaction and your product-market fit.",
    type: "WidgetSurvey",
    library_excerpt: "Predict the profitability of your business.",
    library_quick_tips: [
      "Trigger the survey on the checkout page after an order is completed.",
      "Measure future purchase intent regularly to keep track of customer satisfaction.",
    ],
    points_count: 3,
    thumbnail_url: "",
    category_ids: [1, 2],
    subcategory_ids: [2, 36],
    has_sample_results: false,
    first_point:
      "How likely are you to purchase from [brand] again in the next 3 months?",
  },
  {
    id: "5a14b6615c3fa7e0",
    name: "Evaluate each stage of user journey",
    comment:
      "Let users evaluate their experience with your  digital touchpoints by rating all journey stages. Find out which touchpoints require improvement.",
    type: "WidgetSurvey",
    library_excerpt:
      "Let users evaluate their experience with your digital touchpoints by rating all journey stages. Find out which touchpoints require improvement.",
    library_quick_tips: [],
    points_count: 8,
    thumbnail_url: "",
    category_ids: [1, 3],
    subcategory_ids: [1, 2, 9, 37, 67],
    has_sample_results: false,
    first_point: "The information on the website was clear to me",
  },
  {
    id: "a7cf46849f32e4f7",
    name: "Uncover the customer perceived value",
    comment:
      "Find out how customers perceive the value of your product. Better understand your actual value proposition to improve it and communicate it effectively.",
    type: "WidgetSurvey",
    library_excerpt:
      "Find out how customers perceive the value of your product. Better understand your actual value proposition to improve it and communicate it effectively.",
    library_quick_tips: [
      "Use the survey to understand how clients perceive the value of your product or services.",
      "Use the feedback to come up with product messaging.",
      "If necessary, revisit pricing based on the feedback.",
      "Do more research to deepen your understanding of a problem.",
    ],
    points_count: 6,
    thumbnail_url:
      "https://assets.survicate.com/survey-templates/templates-new.jpg",
    category_ids: [1, 3],
    subcategory_ids: [1, 2, 11, 45],
    has_sample_results: false,
    first_point: "Would you recommend [product name] to someone like you?",
  },
  {
    id: "9dacdc3681b71b81",
    name: "Discover why things matter to your customers",
    comment:
      "Dig deeper into customer sentiments. Find out how important your offering is to your customers. Gain insights into their preferences, draw conclusions, and perfect your offer.",
    type: "WidgetSurvey",
    library_excerpt:
      "Dig deeper into customer sentiments. Find out how important your offering is to your customers.",
    library_quick_tips: [],
    points_count: 5,
    thumbnail_url:
      "https://assets.survicate.com/survey-templates/templates-new.jpg",
    category_ids: [1, 4],
    subcategory_ids: [2, 43, 45],
    has_sample_results: false,
    first_point: "Would you miss [a feature/offer/product] if it was gone?",
  },
  {
    id: "6e86aa5e101f2c20",
    name: "Discover your customers' purchasing criteria",
    comment:
      "Find out which aspects are the most important when choosing software providers. Get insight into which areas to focus on to win new customers.",
    type: "WidgetSurvey",
    library_excerpt: "Discover what drives the software purchase decision.",
    library_quick_tips: [],
    points_count: 5,
    thumbnail_url: "",
    category_ids: [2, 4],
    subcategory_ids: [36, 43],
    has_sample_results: false,
    first_point:
      "Which aspects are the most important for you\nwhen buying software?",
  },
  {
    id: "2126c0c672e24e77",
    name: "Screen and recruit research participants in-house",
    comment:
      "Effectively screen the participants of your next research study. Avoid recruiting biased participants. Easily collect contact information and speed up the organizing process.",
    type: "WidgetSurvey",
    library_excerpt:
      "Effectively screen the participants of your next research study. Avoid recruiting biased participants. Easily collect contact information and speed up the organizing process.",
    library_quick_tips: [
      "Incentivize participants to take part in the study.",
      "To avoid bias, don’t ask yes / no questions or questions that reveal what type of participants you’re looking for.",
    ],
    points_count: 13,
    thumbnail_url: "",
    category_ids: [3, 4],
    subcategory_ids: [9, 13],
    has_sample_results: false,
    first_point:
      "👋 Would you be interested in helping us design an app?  Every person taking part in our user research will receive [compensation] ",
  },
  {
    id: "1a3e0b163a18664e",
    name: "Explore users' jobs, pains, and gains. (Extended version)",
    comment:
      "Benefit from this ready-to-use survey template to kickstart your research project: Explore your target audience’s jobs, pains, and gains - to innovate. Collect insights, effectively screen the right research participants, and quickly arrange user interviews.",
    type: "WidgetSurvey",
    library_excerpt:
      "Jobs-to-be-done framework helps you better understand your audience’s context so that you can innovate. Benefit from this ready-to-use survey template to kickstart your research project.",
    library_quick_tips: [],
    points_count: 12,
    thumbnail_url: "",
    category_ids: [3, 4, 1],
    subcategory_ids: [9, 43, 67],
    has_sample_results: false,
    first_point:
      "👋 We're looking for ways to help you with your tasks!   Have a minute to share your thoughts? ⏳☕️ ;)",
  },
  {
    id: "7c6e1e8d025fed6b",
    name: "Succeed at B2B messaging",
    comment:
      "Leverage qualitative research to succeed at B2B messaging. Find out what motivates your audience and what holds them back.",
    type: "WidgetSurvey",
    library_excerpt:
      "Leverage qualitative research to succeed at B2B messaging. Find out what motivates your audience and what holds them back.",
    library_quick_tips: [],
    points_count: 5,
    thumbnail_url: "",
    category_ids: [2],
    subcategory_ids: [4, 7, 8, 36],
    has_sample_results: false,
    first_point:
      "What is your main motivation for looking for [product category]?",
  },
  {
    id: "24c8344165a84109",
    name: "Measure usability with UMUX Lite (7-point scale)",
    comment:
      "Optimize your digital experience with a quick UMUX survey. Learn how intuitive your product or website is. Use insights to address user needs better.",
    type: "WidgetSurvey",
    library_excerpt:
      "Optimize your digital experience with a quick UMUX survey. Learn how intuitive your product or website is. Use insights to address user needs better.",
    library_quick_tips: [],
    points_count: 2,
    thumbnail_url: "",
    category_ids: [3],
    subcategory_ids: [9, 11, 38, 41],
    has_sample_results: false,
    first_point: "This [website/ software] capabilities meet my requirements.",
  },
  {
    id: "8d367a8b79afe035",
    name: "Measure usability with UMUX Lite (5-point scale)",
    comment:
      "Optimize your digital experience with a quick UMUX survey. Learn how intuitive your product or website is. Use insights to address user needs better.",
    type: "WidgetSurvey",
    library_excerpt:
      "Optimize your digital experience with a quick UMUX survey. Learn how intuitive your product or website is. Use insights to address user needs better.",
    library_quick_tips: [],
    points_count: 2,
    thumbnail_url: "",
    category_ids: [3],
    subcategory_ids: [11, 38, 41],
    has_sample_results: false,
    first_point: "This [website/ software] capabilities meet my requirements.",
  },
  {
    id: "566b3978e8fe39ca",
    name: "Learn what matters most for consumers (e-commerce)",
    comment:
      "Upgrading your online shop? Building a new one? Quickly collect insights into consumers’ expectations. Have a clear understanding of how to prioritize the roadmap. Gain new insights and improve your marketing messaging.",
    type: "WidgetSurvey",
    library_excerpt:
      "Upgrading your online shop? Building a new one? Quickly collect insights into consumers’ expectations and set your shop up for success!",
    library_quick_tips: [],
    points_count: 11,
    thumbnail_url: "",
    category_ids: [1, 2, 3],
    subcategory_ids: [1, 4, 11, 45, 67],
    has_sample_results: false,
    first_point:
      "👋 Fancy a coffee break? ☕️ ;)  We'd like to ask you a few of questions.   It'll take you 2-3 minutes and will help us improve your shopping experience with us!",
  },
  {
    id: "03f04c8678527936",
    name: "Discover media outlets your audience visits",
    comment:
      "Discover your audience interests so that you can develop more engaging content plans. Leverage the knowledge of who else your audience reads - enter in content collaborations and grow links.",
    type: "WidgetSurvey",
    library_excerpt:
      "Feeling stuck with your content strategy? Give yourself a head start. Discover your audience interests and be able to produce better content, faster.",
    library_quick_tips: [],
    points_count: 5,
    thumbnail_url: "",
    category_ids: [2, 4],
    subcategory_ids: [4, 7, 13],
    has_sample_results: false,
    first_point: "👋  Would you like to help us pen better articles for you?",
  },
  {
    id: "f377540c4154de6d",
    name: "Discover innovation opportunites",
    comment:
      "Ask 2 open-ended questions that will unlock your customers' imagination. Make them share how they'd need the product to work.",
    type: "WidgetSurvey",
    library_excerpt:
      "Ask 2 open-ended questions that will unlock your customers' imagination. Make them share how they'd need the product to work.",
    library_quick_tips: [
      "Send the survey to your most profitable customers.",
      "Consider sending the survey to the disgruntled customers. There's innovation potential in criticism.",
    ],
    points_count: 3,
    thumbnail_url:
      "https://assets.survicate.com/survey-templates/templates-new.jpg",
    category_ids: [3, 4, 1],
    subcategory_ids: [9, 13, 38, 67],
    has_sample_results: false,
    first_point: "What is the main thing [product name] helps you do?",
  },
  {
    id: "9078beddfecee8cf",
    name: "Find out how your audience describes you",
    comment:
      "Discover the most common words they use to talk about you. Leverage the findings to communicate with your target audience more effectively.",
    type: "WidgetSurvey",
    library_excerpt:
      "Discover the most common words they use to talk about you. Leverage the findings to communicate with your target audience more effectively.",
    library_quick_tips: [
      "Analyze responses with an automated word cloud to quickly notice the most frequent trends.",
    ],
    points_count: 4,
    thumbnail_url: "",
    category_ids: [2],
    subcategory_ids: [6, 7, 8, 40],
    has_sample_results: false,
    first_point:
      "If you were to choose 3 adjectives to describe [product name], what would they be?",
  },
  {
    id: "4d15626ad8ae9226",
    name: "Improve the checkout experience (open-ended)",
    comment:
      "Ask your customers what can be improved in your checkout process. Use open-ended responses to improve it and get more satisfied customers.",
    type: "WidgetSurvey",
    library_excerpt:
      "Find out how to improve the user journey at the checkout.. Improve conversion rates and drive revenue.",
    library_quick_tips: [
      "Use this survey on your landing page after users finish checking out.",
    ],
    points_count: 1,
    thumbnail_url: "",
    category_ids: [2, 3, 1, 4],
    subcategory_ids: [6, 11, 35, 36, 41, 44, 45],
    has_sample_results: false,
    first_point:
      "Is there anything about the checkout process we should improve? ",
  },
  {
    id: "2bda7a8df20ad473",
    name: "Evaluate the quality of the customer service you provide",
    comment:
      "Evaluate the quality of your customer service. Keep tabs of the customer service team's responsiveness and their ability to provide informative answers.",
    type: "WidgetSurvey",
    library_excerpt: "Evaluate the quality of your customer service.",
    library_quick_tips: [],
    points_count: 7,
    thumbnail_url:
      "https://assets.survicate.com/survey-templates/customer-service2.jpg",
    category_ids: [1],
    subcategory_ids: [34],
    has_sample_results: false,
    first_point:
      "How would you rate your most recent interaction with customer service?",
  },
  {
    id: "7c17e7324d2c6e50",
    name: "Uncover alternatives currently in use",
    comment:
      "Detect potential churn early on.  Uncover who your biggest immediate competition is.",
    type: "WidgetSurvey",
    library_excerpt:
      "Detect potential churn early on.  Uncover who your biggest immediate competition is.",
    library_quick_tips: [],
    points_count: 5,
    thumbnail_url:
      "https://assets.survicate.com/survey-templates/templates-new.jpg",
    category_ids: [1, 2],
    subcategory_ids: [2, 4],
    has_sample_results: false,
    first_point:
      "Are there any other companies offering [service/product name]\nthat you're considering?",
  },
  {
    id: "1a6f5954f876e68e",
    name: "Net Promoter Score (NPS) + Root Cause",
    comment:
      "Measure the customer's experience and predict business growth with a Net Promoter Score. This proven metric transformed the business world and now provides the core measurement for customer experience management programs the world round. It allows you to measure both customer satisfaction and brand loyalty.",
    type: "WidgetSurvey",
    library_excerpt:
      "Measure the customer's experience and predict business growth with a Net Promoter Score.",
    library_quick_tips: [
      "Analyze results and look for trends over the time",
      "Survey your customers on a regular basis",
      "Customize follow-up questions based on NPS score",
    ],
    points_count: 5,
    thumbnail_url:
      "https://assets.survicate.com/survey-templates/templates-new.jpg",
    category_ids: [],
    subcategory_ids: [],
    has_sample_results: false,
    first_point:
      "How likely is it that you will recommend our product to a friend or colleague?",
  },
  {
    id: "7adaf350faf51faa",
    name: "Have users select the next feature you build",
    comment:
      "Ask your users in an email which features they would want you to build first. A follow-up open-ended allows them to explain the motivation for their choice. Act upon the collected insight and make your product meet the needs of your customers first.",
    type: "WidgetSurvey",
    library_excerpt:
      "Ask your users which features they want you to build first.",
    library_quick_tips: [
      "Options should be features you're considering for your upcoming sprints.",
      "Add text questions so people can share more features",
      "Adding segmentation questions will enable you to filter by personas",
      "Survey customers you'd like to upsell to",
    ],
    points_count: 2,
    thumbnail_url:
      "https://assets.survicate.com/survey-templates/templates-new.jpg",
    category_ids: [],
    subcategory_ids: [],
    has_sample_results: false,
    first_point: "Which of the following features should we build first?",
  },
  {
    id: "06cb65a71e47a1a5",
    name: "Measure subscribers' satisfaction with their plans",
    comment:
      "Ask how your customers feel about their subscription plans. Detect sources of discontent early on. Hone your offer to prevent customer churn and build a loyal customer base.",
    type: "WidgetSurvey",
    library_excerpt:
      "Ask how your customers feel about their subscription plans. Prevent customer churn and build a loyal customer base.",
    library_quick_tips: [],
    points_count: 5,
    thumbnail_url:
      "https://assets.survicate.com/survey-templates/templates-new.jpg",
    category_ids: [1, 2, 4],
    subcategory_ids: [2, 35, 36, 43],
    has_sample_results: false,
    first_point:
      "How satisfied are you with your subscription to [product name]?",
  },
  {
    id: "a191614d12d94d47",
    name: "Research product development opportunities",
    comment:
      "In need of innovating your product? Run a quick product research survey to: 1) Leverage detractors’ disappointments. 2) Make use of improvement ideas from the NPS passives. 3) Learn what not to change from the users that are satisfied with your product.",
    type: "WidgetSurvey",
    library_excerpt:
      "In need of innovating your product? Every user, no matter their satisfaction level, can help you innovate. Run a quick product research survey and leverage the insights you get.",
    library_quick_tips: [],
    points_count: 7,
    thumbnail_url: "",
    category_ids: [3],
    subcategory_ids: [9, 38],
    has_sample_results: false,
    first_point:
      "How likely are you to recommend [product name] to someone like you?",
  },
  {
    id: "931f24ef78a10009",
    name: "Check if differences between products are clear",
    comment:
      "Check if users see the difference between the products or features you're offering. Understand in which areas the customer may need clearer explanations and reach out to those who may have missed the opportunities offered.",
    type: "WidgetSurvey",
    library_excerpt:
      "Check if users see the difference between the products or features you're offering.",
    library_quick_tips: [
      "Run the survey on your pricing page",
      "Survey people that have visited several product pages",
      "Survey your users visiting checkout section",
    ],
    points_count: 4,
    thumbnail_url:
      "https://assets.survicate.com/survey-templates/templates-new.jpg",
    category_ids: [],
    subcategory_ids: [],
    has_sample_results: false,
    first_point:
      "Is the difference between A (product/plan) and B clear to you?",
  },
  {
    id: "2d3d097ab702ae7f",
    name: "Find out how much are users willing to pay (open-ended)",
    comment:
      "About to launch a new product? Wanting to make the pricing right? Use the survey to find out how much are your future customers willing to pay. Strike the balance when it comes to the price.",
    type: "WidgetSurvey",
    library_excerpt:
      "About to launch a new product? Wanting to make the pricing right? Use the survey to find out how much are your future customers willing to pay.",
    library_quick_tips: [
      "Trigger the survey in the beta version of an app.",
      "Display it on a landing page advertising your new app",
    ],
    points_count: 4,
    thumbnail_url: "",
    category_ids: [2, 4, 1],
    subcategory_ids: [4, 36, 42, 67],
    has_sample_results: false,
    first_point:
      "What price would be so low that you would start to question [product name]’s quality?",
  },
  {
    id: "3c6fb6e3038445e8",
    name: "Catch weak points of a page",
    comment:
      "Find out if there are any elements that users dislike about your page. Get insight into the priority of elements to change and keep updating the answers after every improvement to bring your website to perfection.",
    type: "WidgetSurvey",
    library_excerpt:
      "Find out if there are any elements that users dislike about your page.",
    library_quick_tips: [
      "Run the survey on pages with high exit or bounce rate",
      "Add follow-up questions to uncover deeper insights",
    ],
    points_count: 3,
    thumbnail_url:
      "https://assets.survicate.com/survey-templates/templates-new.jpg",
    category_ids: [],
    subcategory_ids: [],
    has_sample_results: false,
    first_point: "Is there something you do not like about this page?",
  },
  {
    id: "f0d16fe41577d5c1",
    name: "Build content strategy that meets your readers' needs",
    comment:
      "Build a content strategy that meets your target audience's needs. Find out the topics your audience is interested in reading about next.",
    type: "WidgetSurvey",
    library_excerpt:
      "Build a content strategy that meets your target audience's needs. Find out the topics your audience is interested in reading about next.",
    library_quick_tips: [],
    points_count: 7,
    thumbnail_url:
      "https://assets.survicate.com/survey-templates/templates-new.jpg",
    category_ids: [],
    subcategory_ids: [],
    has_sample_results: false,
    first_point: "How happy are you with the content of our blog?",
  },
  {
    id: "046073e08528fa3d",
    name: "Collect customer testimonials for your website",
    comment:
      "Gather customer feedback and collect customer testimonials for your website along the way.",
    type: "WidgetSurvey",
    library_excerpt:
      "Gather customer feedback and collect customer testimonials for your website along the way.",
    library_quick_tips: [],
    points_count: 7,
    thumbnail_url:
      "https://assets.survicate.com/survey-templates/templates-new.jpg",
    category_ids: [2, 4],
    subcategory_ids: [6, 39, 43],
    has_sample_results: false,
    first_point:
      "How likely are you to recommend our product to someone like you?",
  },
  {
    id: "5e3770630f852391",
    name: "Collect feedback on the help desk",
    comment:
      "Evaluate the quality of service your customer support team provides.",
    type: "WidgetSurvey",
    library_excerpt:
      "Evaluate the quality of service your customer support team provides.",
    library_quick_tips: [],
    points_count: 6,
    thumbnail_url:
      "https://assets.survicate.com/survey-templates/templates-new.jpg",
    category_ids: [1],
    subcategory_ids: [34, 45],
    has_sample_results: false,
    first_point:
      "How would you rate your most recent interaction with our help desk?",
  },
  {
    id: "c3fbdb7a95e79674",
    name: "Improve user activation",
    comment:
      "The user activation survey template offers you an alternative way of discovering the reasons for the lack of user activation. Find out why users underuse your product to can upgrade accounts and improve CLVs.",
    type: "WidgetSurvey",
    library_excerpt:
      "Trigger surveys to uncover the reasons for the lack of user activation.",
    library_quick_tips: [],
    points_count: 6,
    thumbnail_url:
      "https://assets.survicate.com/survey-templates/templates-new.jpg",
    category_ids: [3],
    subcategory_ids: [37],
    has_sample_results: false,
    first_point: "How satisfied are you with [product name]?",
  },
  {
    id: "cb249c382372aced",
    name: "Improve the search experience",
    comment: "",
    type: "WidgetSurvey",
    library_excerpt: "Check the quality of user's search results",
    library_quick_tips: [
      "Launch on a search results URL",
      "Delay by 5-15 seconds to give user  a moment to access results",
    ],
    points_count: 3,
    thumbnail_url:
      "https://assets.survicate.com/survey-templates/templates-new.jpg",
    category_ids: [],
    subcategory_ids: [],
    has_sample_results: false,
    first_point: "How relevant are these search results?",
  },
  {
    id: "8f29b7f037ca9681",
    name: "Find out if customers ever refer your product. HIDDEN",
    comment:
      "Find out if a user recommends your company and why. If a user recommends you to others, find out what makes the user do it. If not, likewise, ask why not. What can be improved? What aspect of your product would prompt the user to do so?",
    type: "WidgetSurvey",
    library_excerpt: "Find out if a user recommends your company and why.",
    library_quick_tips: [],
    points_count: 3,
    thumbnail_url:
      "https://assets.survicate.com/survey-templates/templates-new.jpg",
    category_ids: [],
    subcategory_ids: [],
    has_sample_results: false,
    first_point: "Have you recommended us to anyone in the past?",
  },
  {
    id: "f2ae66e43773f6e2",
    name: "Evaluate the risk of increasing your prices HIDDEN (DUPLICATE)",
    comment:
      "Find out whether your clients and prospects are happy with your price, payment process, and subscription model.",
    type: "WidgetSurvey",
    library_excerpt:
      "Find out whether your clients and prospects are happy with your price, payment process, and subscription model.",
    library_quick_tips: [],
    points_count: 4,
    thumbnail_url:
      "https://assets.survicate.com/survey-templates/templates-new.jpg",
    category_ids: [],
    subcategory_ids: [],
    has_sample_results: false,
    first_point:
      "Would an increase in prices cause you to look elsewhere for the same product/services?",
  },
  {
    id: "4310ee1b93869ca8",
    name: "Capture your actual competitive advantage",
    comment:
      "Measure NPS while collecting feedback on your competitive advantage. Find out how your product differs from the competition and how loyal your customer base is.",
    type: "WidgetSurvey",
    library_excerpt:
      "Measure NPS while collecting feedback on your competitive advantage. Find out how your product differs from the competition and how loyal your customer base is.",
    library_quick_tips: [
      "Show the survey to users who have had enough time to get familiar with your product.",
      "Consider segmenting the audience based on the milestones completed.",
    ],
    points_count: 7,
    thumbnail_url: "",
    category_ids: [2, 4, 3],
    subcategory_ids: [5, 13, 41, 43],
    has_sample_results: false,
    first_point:
      "How likely are you to recommend our product to someone like you?",
  },
  {
    id: "c36a33977274a164",
    name: "Measure customer loyalty with an alternative NPS survey 1",
    comment:
      "Run this survey as an NPS alternative to measure your customer loyalty. Learn what your customers most like and dislike about your product.",
    type: "WidgetSurvey",
    library_excerpt:
      "Learn what your customers most like and dislike about your product.",
    library_quick_tips: ["Analyze the results and look for trends over time."],
    points_count: 4,
    thumbnail_url: "",
    category_ids: [],
    subcategory_ids: [],
    has_sample_results: false,
    first_point:
      "A friend asks you whether you would recommend [product]. Would you? ",
  },
  {
    id: "bc72877c832a1a34",
    name: "Measure customer loyalty with an alternative NPS survey 2",
    comment:
      "Leverage this alternative NPS survey to predict business growth based on past referrals. And discover why users/customers actually value and promote your product.",
    type: "WidgetSurvey",
    library_excerpt:
      "Leverage this alternative NPS survey to predict business growth based on past referrals. And discover why users/customers actually value and promote your product.",
    library_quick_tips: [
      "Embed the first question into an email for more responses.",
      "Customize follow-up questions based on the previous answer.",
      "Analyze results and look for trends over time.",
    ],
    points_count: 6,
    thumbnail_url: "",
    category_ids: [],
    subcategory_ids: [],
    has_sample_results: false,
    first_point:
      "Have you ever recommended [product] to a friend or colleague? ",
  },
  {
    id: "b97ff7059772c694",
    name: "Uncover benefits expected from your company. HIDDEN",
    comment:
      "Discover what the primary benefit your users expect from using your product is. Check what goals your users are reaching thanks to you, and what achievements are still within reach. Use the insight to improve your website communication and to set goals for the future.",
    type: "WidgetSurvey",
    library_excerpt:
      "Discover what the primary benefit your users expect from using your product is.",
    library_quick_tips: [
      "Run the survey on your product pages",
      "Use insights to find out which benefits to focus on",
    ],
    points_count: 2,
    thumbnail_url:
      "https://assets.survicate.com/survey-templates/templates-new.jpg",
    category_ids: [],
    subcategory_ids: [],
    has_sample_results: false,
    first_point:
      "What is the primary benefit you hope to get from our product?",
  },
  {
    id: "b791887cf9b49a3d",
    name: "Uncover Traffic Sources (open) HIDDEN",
    comment:
      "Find out how people discover your website.\r\nThe insight provided by this simple survey can be used to Research ways to improve your website traffic - your traffic might not be coming from where you expect it to.",
    type: "WidgetSurvey",
    library_excerpt: "Find out how people discover your website.",
    library_quick_tips: [
      "Target your direct traffic to uncover what brings people to your website.",
    ],
    points_count: 6,
    thumbnail_url:
      "https://assets.survicate.com/survey-templates/Paper-plain.jpg",
    category_ids: [],
    subcategory_ids: [],
    has_sample_results: false,
    first_point: "How did you hear about our website?",
  },
  {
    id: "ce8b384a895c8056",
    name: "Measure task complexity with the After Scenario Questionnaire",
    comment:
      "A usability testing survey developed by researchers at IBM. Run it after test participants finish testing a scenario.",
    type: "WidgetSurvey",
    library_excerpt:
      "A usability testing survey developed by researchers at IBM. Run it after test participants finish testing a scenario.",
    library_quick_tips: [],
    points_count: 4,
    thumbnail_url:
      "https://assets.survicate.com/survey-templates/templates-new.jpg",
    category_ids: [3, 4],
    subcategory_ids: [9, 11, 43],
    has_sample_results: false,
    first_point:
      "Overall, I am satisfied with the ease of completing the task in this scenario.",
  },
  {
    id: "69c4c668fb7526f9",
    name: "Gauge product satisfaction",
    comment: "",
    type: "WidgetSurvey",
    library_excerpt: "",
    library_quick_tips: [],
    points_count: 7,
    thumbnail_url: "",
    category_ids: [],
    subcategory_ids: [],
    has_sample_results: false,
    first_point: "How satisfied are you with [product name] ?",
  },
  {
    id: "a01d088bb2371bf6",
    name: "Do effective influencer marketing",
    comment: "Discover the influencers your audience follows.",
    type: "WidgetSurvey",
    library_excerpt: "Discover the influencers your audience follows.",
    library_quick_tips: [],
    points_count: 5,
    thumbnail_url:
      "https://assets.survicate.com/survey-templates/templates-new.jpg",
    category_ids: [2],
    subcategory_ids: [4, 8, 36, 39],
    has_sample_results: false,
    first_point:
      "How likely are you to be interested in software  because an influencer reviewed it online?",
  },
  {
    id: "51a8b290e2ad8f07",
    name: "Make sure your gives all necessary information. HIDDEN",
    comment:
      "Check if your readers found what they were looking for, how easy it was and what they think about the content.",
    type: "WidgetSurvey",
    library_excerpt: "Check if your readers found what they were looking for.",
    library_quick_tips: [
      "Target people that have seen several pages already",
      "Use with a longer time trigger on product pages",
      "Support section of your website is also a great place to run this survey",
    ],
    points_count: 4,
    thumbnail_url:
      "https://assets.survicate.com/survey-templates/Design-thinking.jpg",
    category_ids: [],
    subcategory_ids: [],
    has_sample_results: false,
    first_point: "Did you find what you were looking for on our website?",
  },
  {
    id: "73ed595184ca25af",
    name: "Understand purchase intentions",
    comment: "",
    type: "WidgetSurvey",
    library_excerpt: "",
    library_quick_tips: [],
    points_count: 4,
    thumbnail_url: "",
    category_ids: [],
    subcategory_ids: [],
    has_sample_results: false,
    first_point: "How likely are you to make a purchase on BRAND today?",
  },
  {
    id: "73433b0fd035f07a",
    name: "Uncover your true competitors HIDDEN",
    comment:
      "Check which competitors did your customers consider before choosing you. Follow up with a question about your advantages - use that feedback for communicating improvements both on your website and also when reaching out to potential customers.",
    type: "WidgetSurvey",
    library_excerpt:
      "Check which competitors did your customers consider before choosing you.",
    library_quick_tips: [
      "Learn more about your main competitors",
      "Analyze results to understand your strong and weak points",
    ],
    points_count: 3,
    thumbnail_url:
      "https://assets.survicate.com/survey-templates/templates-new.jpg",
    category_ids: [],
    subcategory_ids: [],
    has_sample_results: false,
    first_point:
      "Which other options did you consider before choosing our product?",
  },
  {
    id: "ed6ea88bb1032cda",
    name: "Identify the most lucrative jobs to be done",
    comment:
      "Looking for new product ideas or ways to innovate existing software? Leverage this survey to identify the most lucrative jobs to be done and speed up the research process.",
    type: "WidgetSurvey",
    library_excerpt:
      "Looking for new product ideas or ways to innovate existing software? Identify the most lucrative jobs to be done, collect contact info, and build the research participants’ base.",
    library_quick_tips: [],
    points_count: 10,
    thumbnail_url: "",
    category_ids: [3, 4],
    subcategory_ids: [9, 13, 38],
    has_sample_results: false,
    first_point:
      "👋 We're looking for ways to help you with your tasks! Have a minute to share your thoughts? ⏳☕️ ;)",
  },
  {
    id: "91436228cadef5c3",
    name: "Collect reviews with NPS survey",
    comment:
      "Ask your customers to leave you a review on a chosen review site (for ex. G2 or Capterra).",
    type: "WidgetSurvey",
    library_excerpt:
      "Ask your customers to leave you a review a chosen review site (for ex. G2 or Capterra).",
    library_quick_tips: [
      "Use this survey to measure your NPS score",
      "Ask respondents to give you a review online",
      "Gain credibility through showcasing client endorsements",
    ],
    points_count: 4,
    thumbnail_url:
      "https://assets.survicate.com/survey-templates/templates-new.jpg",
    category_ids: [],
    subcategory_ids: [],
    has_sample_results: false,
    first_point:
      "How likely is it that you will recommend our product to a friend or colleague?",
  },
  {
    id: "b921de66199b3f2e",
    name: "Evaluate self-service support effectiveness",
    comment:
      "Evaluate your Help Center and Developers documentation. Make sure you enable your users to effortlessly use your tool and find necessary information without reaching for help.",
    type: "WidgetSurvey",
    library_excerpt:
      "Evaluate your Help Center and Developers documentation. Make sure you enable your users to effortlessly use your tool.",
    library_quick_tips: [],
    points_count: 5,
    thumbnail_url: "",
    category_ids: [2, 3, 1],
    subcategory_ids: [6, 11, 34],
    has_sample_results: false,
    first_point: "It was easy to find the correct documentation",
  },
  {
    id: "3d0d59ce5e98ed98",
    name: "Gather insights to improve signup conversion. HIDDEN",
    comment:
      "Ask your users about any concerns or doubts they may have about using your product. Use findings to improve communication and built a strong FAQ section.",
    type: "WidgetSurvey",
    library_excerpt:
      "Ask your users about any concerns or doubts they may have about using your product.",
    library_quick_tips: [
      "Run the survey after signup to uncover fresh insights",
      "Great to find out blind spots in your communication",
      "Recommended to run each time you make major communication changes",
    ],
    points_count: 3,
    thumbnail_url:
      "https://assets.survicate.com/survey-templates/templates-new.jpg",
    category_ids: [],
    subcategory_ids: [],
    has_sample_results: false,
    first_point:
      "Before signing up, what was your biggest fear or concern about trying us?",
  },
  {
    id: "42f418a8f3e8de4e",
    name: "Improve the trial-user-to-customer conversion rates",
    comment:
      "Be proactive to boost conversion rates. Reach out to free trial users to check up on how they are doing using the product. Offer help with the product to those who need it and discounts for signing up early for those who are pleased with it.",
    type: "WidgetSurvey",
    library_excerpt:
      "Reach out to free trial users to check up on how they are doing using the product. Offer help with the product to those who need it and discounts for signing up early for those who are pleased with it.",
    library_quick_tips: [
      "Arrange product training sessions for users who feel disappointed with the product.",
      "Strike when the iron is hot! Offer satisfied users discounts for early sign-ups.",
    ],
    points_count: 9,
    thumbnail_url: "",
    category_ids: [2, 3, 4, 1],
    subcategory_ids: [8, 11, 13, 35, 43],
    has_sample_results: false,
    first_point:
      "How would you rate your experience with [product name] so far?",
  },
  {
    id: "e21d589f80a4ac8a",
    name: "Uncover Alternatives Currently In Use",
    comment:
      "Discover if your customers use only your product or if they use your competitors’ as well. Find out what makes your product stand out or what you could improve to make your product the only one your customers need.",
    type: "WidgetSurvey",
    library_excerpt:
      "Discover if your customers use only your product or if they use your competitors’ as well",
    library_quick_tips: [
      "Use this feedback to learn more about your strong and weak sides",
    ],
    points_count: 4,
    thumbnail_url:
      "https://assets.survicate.com/survey-templates/templates-new.jpg",
    category_ids: [],
    subcategory_ids: [],
    has_sample_results: false,
    first_point:
      "Are we the sole provider for [activity/goals] or do you also use alternative solutions?",
  },
  {
    id: "12e9815cea03429c",
    name: "Measure users' perceptions of your product with the SUPR-Q survey",
    comment:
      "Because a SURP-Q survey is brief and easy to use, it lets you collect a large sample of quantitative data. Trigger it in the product or email to your user base. Explore their perceptions of your product in terms of reliability, ease of use, and…",
    type: "WidgetSurvey",
    library_excerpt:
      "Leverage the brevity of the SURP-Q survey to accumulate a large sample of quantitative data and identify the key areas for improvement.",
    library_quick_tips: [],
    points_count: 8,
    thumbnail_url: "",
    category_ids: [3],
    subcategory_ids: [11, 37],
    has_sample_results: false,
    first_point:
      "Do you have a minute to spare?    We'd love to know what you think of [product name]! ",
  },
  {
    id: "0cb2e15ac3cc5267",
    name: "Verify the gravity of customers' pains",
    comment:
      "A Customer Development framework survey. Use it to test hypotheses about customers' pains, reduce uncertainty, and push the project in the right direction.",
    type: "WidgetSurvey",
    library_excerpt:
      "Customer discovery surveys are part of the Customer Development framework.",
    library_quick_tips: [
      "Before running the survey, form hypotheses about your personas' jobs, pains, and gains that you want to test.",
    ],
    points_count: 11,
    thumbnail_url: "https://assets.survicate.com/survey-templates/book3.jpg",
    category_ids: [],
    subcategory_ids: [],
    has_sample_results: false,
    first_point:
      "In the past 6 months, how often have you experienced [a pain point] ?",
  },
];
