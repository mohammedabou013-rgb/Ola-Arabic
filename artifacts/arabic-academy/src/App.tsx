import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { Route, Switch, Router as WouterRouter } from 'wouter';
import { I18nProvider } from '@/i18n/context';
import { Layout } from '@/components/layout';
import { Navigation } from '@/components/navigation';

import Home from '@/pages/home';
import GradePage from '@/pages/grade';
import LessonPage from '@/pages/lesson';
import PracticePage from '@/pages/practice';
import TutorPage from '@/pages/tutor';
import ProgressPage from '@/pages/progress';
import NotFound from '@/pages/not-found';

const queryClient = new QueryClient();

function Router() {
  return (
    <div className="flex w-full h-full">
      <div className="hidden sm:block w-64 flex-shrink-0 relative">
        <Navigation />
      </div>
      <div className="flex-1 min-w-0">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/grade/:gradeId" component={GradePage} />
          <Route path="/lesson/:lessonId" component={LessonPage} />
          <Route path="/practice" component={PracticePage} />
          <Route path="/tutor" component={TutorPage} />
          <Route path="/progress" component={ProgressPage} />
          <Route component={NotFound} />
        </Switch>
      </div>
      <div className="sm:hidden">
        <Navigation />
      </div>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <I18nProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Layout>
            <Router />
          </Layout>
        </WouterRouter>
        <Toaster />
      </I18nProvider>
    </QueryClientProvider>
  );
}

export default App;
