import { useRoute } from "wouter";
import { Link } from "wouter";
import { AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/i18n/context";

export default function NotFound() {
  const { t } = useI18n();
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center p-8 text-center space-y-6">
      <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center text-muted-foreground mb-4">
        <AlertCircle className="w-12 h-12" />
      </div>
      <h1 className="text-4xl font-black text-foreground">
        404 - {t('not_found')}
      </h1>
      <p className="text-xl text-muted-foreground font-medium max-w-md">
        {t('page_moved')}
      </p>
      <Link href="/">
        <Button size="lg" className="mt-4 rounded-2xl px-8">
          {t('return_home')}
        </Button>
      </Link>
    </div>
  );
}
