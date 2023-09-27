import React from 'react';
import { TemplateSidebar } from '@/components/TemplateSidebar';
import { Wrapper } from '@/components/Wrapper';
import { DashboardProvider } from '@/context';

const Templates = () => {
  return (
    <DashboardProvider>
      <div className="flex">
        <TemplateSidebar />
        <Wrapper />
      </div>
    </DashboardProvider>
  );
};

export default Templates;
