import { LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export function SignOutButton() {
  const { signOut } = useAuth();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleSignOut = async () => {
    await signOut();
    navigate('/signin');
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={handleSignOut}
      aria-label={t('nav.signout')}
      className="hidden md:flex items-center gap-2"
    >
      <LogOut className="h-4 w-4" />
      <span className="hidden lg:inline">{t('nav.signout')}</span>
    </Button>
  );
}
