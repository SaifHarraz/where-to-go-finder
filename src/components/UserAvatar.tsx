import { User } from '@supabase/supabase-js';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { LayoutDashboard, User as UserIcon, Heart, LogOut } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface UserAvatarProps {
  user: User;
}

export function UserAvatar({ user }: UserAvatarProps) {
  const { isAdmin, isOwner, signOut, userRoles } = useAuth();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const getInitials = (name: string) => {
    const parts = name.split(' ');
    if (parts.length >= 2) {
      return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
    }
    return name.substring(0, 2).toUpperCase();
  };

  const getUserRole = () => {
    if (isAdmin) return 'admin';
    if (isOwner) return 'owner';
    return 'user';
  };

  const getDashboardPath = () => {
    if (isAdmin) return '/dashboard';
    if (isOwner) return '/owner/my-listings';
    return '/profile';
  };

  const handleSignOut = async () => {
    await signOut();
    navigate('/signin');
  };

  const fullName = user.user_metadata?.full_name || user.email?.split('@')[0] || 'User';
  const avatarUrl = user.user_metadata?.avatar_url;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger 
        className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-full"
        aria-label={`User menu for ${fullName}`}
        aria-haspopup="true"
      >
        <Avatar className="h-10 w-10 cursor-pointer ring-2 ring-border hover:ring-primary transition-all">
          {avatarUrl ? (
            <AvatarImage src={avatarUrl} alt={fullName} />
          ) : null}
          <AvatarFallback className="bg-primary text-primary-foreground font-semibold">
            {getInitials(fullName)}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-64 bg-popover z-50">
        <DropdownMenuLabel className="flex flex-col items-center py-4">
          <Avatar className="h-16 w-16 mb-3">
            {avatarUrl ? (
              <AvatarImage src={avatarUrl} alt={fullName} />
            ) : null}
            <AvatarFallback className="bg-primary text-primary-foreground text-xl font-bold">
              {getInitials(fullName)}
            </AvatarFallback>
          </Avatar>
          <div className="text-center">
            <p className="font-semibold text-foreground">{fullName}</p>
            <p className="text-sm text-muted-foreground">{user.email}</p>
            <Badge variant={isAdmin ? 'default' : 'secondary'} className="mt-2">
              {getUserRole()}
            </Badge>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => navigate(getDashboardPath())} className="cursor-pointer">
          <LayoutDashboard className="mr-2 h-4 w-4" />
          {t('nav.dashboard')}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => navigate('/profile')} className="cursor-pointer">
          <UserIcon className="mr-2 h-4 w-4" />
          {t('nav.profile')}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => navigate('/favorites')} className="cursor-pointer">
          <Heart className="mr-2 h-4 w-4" />
          {t('nav.favorites')}
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleSignOut} className="cursor-pointer text-destructive focus:text-destructive">
          <LogOut className="mr-2 h-4 w-4" />
          {t('nav.signout')}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
