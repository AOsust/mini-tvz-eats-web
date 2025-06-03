import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Pizza, Sandwich, Coffee, Star } from 'lucide-react';

const Jelovnik = () => {
  const [selectedCategory, setSelectedCategory] = useState('sve');

  const menuData = {
    pizza: [
      {
        id: 1,
        name: 'Margherita',
        description: 'Klasična pizza s rajčicom, mozzarellom i bosiljkom',
        price: '65 kn',
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=200&fit=crop',
        rating: 4.8,
        popular: true
      },
      {
        id: 2,
        name: 'Quattro Stagioni',
        description: 'Pizza s gljivama, šunkom, artičokama i maslinama',
        price: '75 kn',
        image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=300&h=200&fit=crop',
        rating: 4.7,
        popular: false
      },
      {
        id: 3,
        name: 'Prosciutto',
        description: 'Pizza s prosciuttom, rukolom i parmezanom',
        price: '80 kn',
        image: 'https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=300&h=200&fit=crop',
        rating: 4.9,
        popular: false
      }
    ],
    burgeri: [
      {
        id: 4,
        name: 'Classic Burger',
        description: 'Govežji pljeskavica, salata, rajčica, krastavac',
        price: '45 kn',
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&h=200&fit=crop',
        rating: 4.6,
        popular: true
      },
      {
        id: 5,
        name: 'Cheese Burger',
        description: 'Classic burger s dodatnim sirom',
        price: '50 kn',
        image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=300&h=200&fit=crop',
        rating: 4.5,
        popular: false
      },
      {
        id: 6,
        name: 'BBQ Burger',
        description: 'Burger s BBQ umakom, slaninom i cibulom',
        price: '55 kn',
        image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433a?w=300&h=200&fit=crop',
        rating: 4.7,
        popular: false
      }
    ],
    napici: [
      {
        id: 7,
        name: 'Coca Cola',
        description: 'Osvježavajući gaziran napitak',
        price: '15 kn',
        image: 'https://images.unsplash.com/photo-1581636625402-29b2a704ef13?w=300&h=200&fit=crop',
        rating: 4.3,
        popular: false
      },
      {
        id: 8,
        name: 'Cappuccino',
        description: 'Aromatična kava s mlijekom',
        price: '18 kn',
        image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=300&h=200&fit=crop',
        rating: 4.8,
        popular: false
      }
    ]
  };

  const categories = [
    { id: 'sve', label: 'Sve', icon: Star },
    { id: 'pizza', label: 'Pizza', icon: Pizza },
    { id: 'burgeri', label: 'Burgeri', icon: Sandwich },
    { id: 'napici', label: 'Napici', icon: Coffee }
  ];

  const getFilteredItems = () => {
    if (selectedCategory === 'sve') {
      return [...menuData.pizza, ...menuData.burgeri, ...menuData.napici];
    }
    return menuData[selectedCategory as keyof typeof menuData] || [];
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Naš Jelovnik
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Otkrijte našu bogatu ponudu ukusnih jela
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className="flex items-center gap-2"
              >
                <IconComponent className="h-4 w-4" />
                {category.label}
              </Button>
            );
          })}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {getFilteredItems().map((item) => (
            <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
              <div className="relative">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {item.popular && (
                  <Badge className="absolute top-2 right-2 bg-red-500 hover:bg-red-600">
                    Popularno
                  </Badge>
                )}
                <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded-md flex items-center gap-1">
                  <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm">{item.rating}</span>
                </div>
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg">{item.name}</CardTitle>
                  <span className="text-lg font-bold text-blue-600 dark:text-blue-400">
                    {item.price}
                  </span>
                </div>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full">
                  Dodaj u košaricu
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {getFilteredItems().length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Nema dostupnih stavki u ovoj kategoriji.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Jelovnik;