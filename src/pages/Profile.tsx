import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/contexts/AuthContext';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Heart, History, MapPin, Star, Trash2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

export default function Profile() {
  const { user, isAdmin, isOwner } = useAuth();
  const { t } = useTranslation();

  // Mock data for user history and favorites
  const [favorites] = useState([
    { id: '1', title: 'Bella Italia Restaurant', category: 'Restaurant', rating: 4.8, image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80' },
    { id: '3', title: 'The Grand Hotel', category: 'Hotel', rating: 4.9, image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80' },
  ]);

  const [visitedHistory] = useState([
    { id: '1', title: 'Bella Italia Restaurant', category: 'Restaurant', visitedAt: '2024-02-15', image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80' },
    { id: '5', title: 'Sunrise Cafe', category: 'Cafe', visitedAt: '2024-02-14', image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80' },
    { id: '2', title: 'Urban Fitness Center', category: 'GYM', visitedAt: '2024-02-10', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80' },
  ]);

  const getInitials = (name: string) => {
    const parts = name.split(' ');
    if (parts.length >= 2) {
      return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
    }
    return name.substring(0, 2).toUpperCase();
  };

  const getUserRole = () => {
    if (isAdmin) return 'Admin';
    if (isOwner) return 'Owner';
    return 'User';
  };

  const fullName = user?.user_metadata?.full_name || user?.email?.split('@')[0] || 'User';
  const avatarUrl = user?.user_metadata?.avatar_url;

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <div className="flex-1 bg-muted/30">
        <div className="container mx-auto px-4 py-8">
          {/* Profile Header */}
          <Card className="mb-8">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center md:flex-row md:items-start gap-6">
                <Avatar className="h-24 w-24">
                  {avatarUrl ? (
                    <AvatarImage src={avatarUrl} alt={fullName} />
                  ) : null}
                  <AvatarFallback className="bg-primary text-primary-foreground text-2xl font-bold">
                    {getInitials(fullName)}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 text-center md:text-left">
                  <h1 className="text-3xl font-bold mb-2">{fullName}</h1>
                  <p className="text-muted-foreground mb-3">{user?.email}</p>
                  <Badge variant={isAdmin ? 'default' : 'secondary'}>
                    {getUserRole()}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Tabs for Favorites and History */}
          <Tabs defaultValue="favorites" className="space-y-4">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="favorites" className="flex items-center gap-2">
                <Heart className="h-4 w-4" />
                {t('nav.favorites')}
              </TabsTrigger>
              <TabsTrigger value="history" className="flex items-center gap-2">
                <History className="h-4 w-4" />
                {t('profile.history')}
              </TabsTrigger>
            </TabsList>

            {/* Favorites Tab */}
            <TabsContent value="favorites">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="h-5 w-5" />
                    {t('profile.myFavorites')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {favorites.map((item) => (
                      <Card key={item.id} className="overflow-hidden">
                        <div 
                          className="h-40 bg-cover bg-center"
                          style={{ backgroundImage: `url(${item.image})` }}
                        />
                        <CardContent className="p-4">
                          <h3 className="font-semibold mb-2">{item.title}</h3>
                          <div className="flex items-center justify-between">
                            <Badge variant="secondary">{item.category}</Badge>
                            <div className="flex items-center gap-1">
                              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              <span className="text-sm font-medium">{item.rating}</span>
                            </div>
                          </div>
                          <div className="mt-3 flex gap-2">
                            <Button size="sm" variant="outline" className="flex-1">
                              <MapPin className="mr-1 h-3 w-3" />
                              {t('common.view')}
                            </Button>
                            <Button size="sm" variant="ghost">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                  {favorites.length === 0 && (
                    <p className="text-center text-muted-foreground py-8">
                      {t('profile.noFavorites')}
                    </p>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            {/* History Tab */}
            <TabsContent value="history">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <History className="h-5 w-5" />
                    {t('profile.visitedHistory')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {visitedHistory.map((item) => (
                      <Card key={item.id} className="overflow-hidden">
                        <div className="flex flex-col md:flex-row">
                          <div 
                            className="h-32 md:h-auto md:w-48 bg-cover bg-center"
                            style={{ backgroundImage: `url(${item.image})` }}
                          />
                          <div className="flex-1 p-4">
                            <div className="flex items-start justify-between">
                              <div>
                                <h3 className="font-semibold mb-1">{item.title}</h3>
                                <Badge variant="secondary" className="mb-2">{item.category}</Badge>
                                <p className="text-sm text-muted-foreground">
                                  {t('profile.visited')}: {new Date(item.visitedAt).toLocaleDateString()}
                                </p>
                              </div>
                              <Button size="sm" variant="ghost">
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                  {visitedHistory.length === 0 && (
                    <p className="text-center text-muted-foreground py-8">
                      {t('profile.noHistory')}
                    </p>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <Footer />
    </div>
  );
}
