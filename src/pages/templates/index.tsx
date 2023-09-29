import React from 'react';
import { TemplateSidebar } from '@/components/TemplateSidebar';
import { Wrapper } from '@/components/Wrapper';
import { DashboardProvider } from '@/context';
import { Sidebar } from '@/components/Sidebar';

const Templates = () => {
  return (
    <DashboardProvider>
      <div className="flex">
        <Sidebar>
          <TemplateSidebar />
        </Sidebar>
        <Wrapper />
      </div>
    </DashboardProvider>
  );
};

export default Templates;
