// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { surveyTemplates } from "@/utils/surveyTemplates";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  survey?: {};
  message?: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const survey = surveyTemplates.find((survey) => {
    return survey.survey.id === req.query.id;
  });
  if (!survey) {
    res.status(404).json({ message: "Not template match the ID provided" });
  } else {
    res.status(200).json(survey);
  }
}
