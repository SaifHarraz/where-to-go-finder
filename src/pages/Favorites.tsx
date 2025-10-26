import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart, MapPin, Star, Trash2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Favorites() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  // Mock favorites data
  const [favorites] = useState([
    { id: '1', title: 'Bella Italia Restaurant', category: 'Restaurant', rating: 4.8, image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80' },
    { id: '3', title: 'The Grand Hotel', category: 'Hotel', rating: 4.9, image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80' },
    { id: '5', title: 'Sunrise Cafe', category: 'Cafe', rating: 4.5, image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80' },
  ]);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <div className="flex-1 bg-muted/30">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="mb-2 text-3xl font-bold flex items-center gap-2">
              <Heart className="h-8 w-8 text-primary" />
              {t('nav.favorites')}
            </h1>
            <p className="text-muted-foreground">
              {t('profile.manageFavorites')}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {favorites.map((item) => (
              <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div 
                  className="h-48 bg-cover bg-center cursor-pointer"
                  style={{ backgroundImage: `url(${item.image})` }}
                  onClick={() => navigate(`/listings/${item.id}`)}
                />
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2 text-lg">{item.title}</h3>
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary">{item.category}</Badge>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{item.rating}</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="flex-1"
                      onClick={() => navigate(`/listings/${item.id}`)}
                    >
                      <MapPin className="mr-1 h-3 w-3" />
                      {t('common.view')}
                    </Button>
                    <Button 
                      size="sm" 
                      variant="ghost"
                      className="text-destructive hover:text-destructive"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {favorites.length === 0 && (
            <Card>
              <CardContent className="py-16 text-center">
                <Heart className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-xl font-semibold mb-2">{t('profile.noFavorites')}</h3>
                <p className="text-muted-foreground mb-6">
                  {t('profile.startSaving')}
                </p>
                <Button onClick={() => navigate('/listings')}>
                  {t('nav.listings')}
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
