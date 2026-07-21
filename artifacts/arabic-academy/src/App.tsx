import { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { Route, Switch, Router as WouterRouter, Redirect } from 'wouter';
import { I18nProvider } from '@/i18n/context';
import { Layout } from '@/components/layout';
import { Navigation } from '@/components/navigation';
import { ConsentBanner } from '@/components/consent-banner';
import { hasChosenCurriculum } from '@/lib/curriculum';
import { AuthProvider, useAuth } from '@/contexts/AuthContext';
import { initAdsScript } from '@/lib/ads';

import Home from '@/pages/home';
import GradePage from '@/pages/grade';
import LessonPage from '@/pages/lesson';
import PracticePage from '@/pages/practice';
import TutorPage from '@/pages/tutor';
import ProgressPage from '@/pages/progress';
import NotFound from '@/pages/not-found';
import CurriculumSelectPage from '@/pages/curriculum-select';
import LoginPage from '@/pages/login';
import RegisterPage from '@/pages/register';
import ForgotPasswordPage from '@/pages/forgot-password';
import DeleteDataPage from '@/pages/delete-data';

const queryClient = new QueryClient();

function Router() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <Switch>
      <Route path="/login" component={LoginPage} />
      <Route path="/register" component={RegisterPage} />
      <Route path="/forgot-password" component={ForgotPasswordPage} />
      <Route path="/delete-data" component={DeleteDataPage} />
      <Route>
        {() => {
          if (!user) return <Redirect to="/login" />;
          return (
            <div className="flex w-full h-full">
              <div className="hidden sm:block w-64 flex-shrink-0 relative">
                <Navigation />
              </div>
              <div className="flex-1 min-w-0">
                <Switch>
                  <Route path="/select-curriculum" component={CurriculumSelectPage} />
                  <Route path="/">
                    {() => hasChosenCurriculum() ? <Home /> : <Redirect to="/select-curriculum" />}
                  </Route>
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
        }}
      </Route>
    </Switch>
  );
}

function App() {
  useEffect(() => { initAdsScript(); }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <I18nProvider>
        <AuthProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
            <Layout>
              <Router />
            </Layout>
            <ConsentBanner />
          </WouterRouter>
          <Toaster />
        </AuthProvider>
      </I18nProvider>
    </QueryClientProvider>
  );
}

export default App;
