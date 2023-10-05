import { ThemeOption } from '@/types';
import { surveyTemplates } from '@/utils/templates';
import Integraflow, { PlacementType } from '@integraflow/web';
import { useRouter } from 'next/router';
import { createContext, useContext, useEffect, useState } from 'react';

type DashboardContext = ReturnType<typeof useDashboardContextFactory>;
const DashboardContext = createContext<DashboardContext>({
  activeTemplate: undefined,
  filterCategories: () => [],
  templates: [],
  activeCategory: '',
  setTheme: (option: string, value: string) => {},
  toggleProgressbar: (value: boolean) => {},
  changePlacement: (value: PlacementType) => {},
  updateSubmitText: (value: string|undefined) => {},
});

function useDashboardContextFactory() {
  const router = useRouter();
  const { id } = router.query;

  const [templates, setTemplates] = useState(surveyTemplates);
  const [activeTemplate, setActiveTemplate] = useState(
    templates.find((survey) => {
      if (!id) return;
      return survey.survey.id === +id;
    })
  );

  const [activeCategory, setActiveCategory] = useState<string | undefined>(
    'all categories'
  );
  useEffect(() => {
    setTemplates(surveyTemplates);
  }, []);

  useEffect(() => {
    if (id) {
      setActiveTemplate(
        templates.find((survey) => {
          return survey.survey.id === +id;
        })
      );
    }
  }, [templates, id]);

  useEffect(() => {
    const integraflow = Integraflow.init({
      surveys: templates.map((s) => {
        return s.survey;
      }),
    });
    if (activeTemplate) {
      integraflow.closeSurvey(activeTemplate?.survey.id);
    }
    if (id) {
      integraflow.showSurvey(+id);
      sessionStorage.setItem('session_id', id as string);
    } else {
      const sessionId = sessionStorage.getItem('session_id');
      if (sessionId) {
        integraflow.closeSurvey(+sessionId);
      }
    }
  }, [id, templates, activeTemplate]);

  const filterCategories = (options: {
    category?: string;
    subcategory?: string;
  }) => {
    const { category, subcategory } = options;
    setActiveCategory(category);

    if (category === 'all categories') {
      setTemplates(surveyTemplates);
      return surveyTemplates;
    }

    let filteredTemplates = surveyTemplates;
    if (category) {
      filteredTemplates = filteredTemplates.filter(
        (template) => template.category === category
      );
    }

    if (subcategory) {
      filteredTemplates = filteredTemplates.filter((template) =>
        template.subcategory?.includes(subcategory)
      );
    }

    setTemplates(filteredTemplates);
  };

  const setTheme = (option: ThemeOption, value: string) => {
    if (!activeTemplate) return;

    const updatedTemplate = { ...activeTemplate };

    if (!updatedTemplate.survey.theme) {
      updatedTemplate.survey.theme = {};
    }

    updatedTemplate.survey.theme[option] = value;

    const updatedTemplates = templates.map((template) =>
      template.survey.id === updatedTemplate.survey.id
        ? updatedTemplate
        : template
    );

    setTemplates(updatedTemplates);
    setActiveTemplate(updatedTemplate);
  };

  const toggleProgressbar = (value: boolean) => {
    if (!activeTemplate) return;

    const updatedTemplate = { ...activeTemplate };
    updatedTemplate.survey.settings.showProgressBar = value;

    setActiveTemplate(updatedTemplate);
  };

  const changePlacement = (value: PlacementType) => {
    if (!activeTemplate) return;

    const updatedTemplate = { ...activeTemplate };
    updatedTemplate.survey.settings.placement = value;

    setActiveTemplate(updatedTemplate);
  };

  const updateSubmitText=(value:string| undefined)=>{
     if (!activeTemplate) return;

    const updatedTemplate = { ...activeTemplate };
    updatedTemplate.survey.settings.submitText = value;
    setActiveTemplate(updatedTemplate);
  }

  return {
    filterCategories,
    activeCategory,
    templates,
    setTheme,
    activeTemplate,
    toggleProgressbar,
    changePlacement,
    updateSubmitText
  };
}

export function useDashboard(): DashboardContext {
  return useContext(DashboardContext);
}

export const DashboardProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const dashboardContext = useDashboardContextFactory();

  return (
    <DashboardContext.Provider value={dashboardContext}>
      {children}
    </DashboardContext.Provider>
  );
};
