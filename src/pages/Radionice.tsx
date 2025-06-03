import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Paintbrush, Book, Users, School, Star, Computer, Music } from 'lucide-react';

const Radionice = () => {
  const [selectedCategory, setSelectedCategory] = useState('sve');

  const workshopData = {
    kreativne: [
      {
        id: 1,
        name: 'Crtanje i slikanje',
        description: 'Kreativno izražavanje kroz različite tehnike crtanja i slikanja',
        price: '80 kn',
        duration: '90 min',
        age: '6-12 godina',
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=200&fit=crop',
        rating: 4.9,
        popular: true
      },
      {
        id: 2,
        name: 'Ručni rad',
        description: 'Izrada kreativnih predmeta od različitih materijala',
        price: '70 kn',
        duration: '75 min',
        age: '5-10 godina',
        image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=300&h=200&fit=crop',
        rating: 4.7,
        popular: false
      },
      {
        id: 3,
        name: 'Keramičarska radionica',
        description: 'Rad s glinom i stvaranje vlastitih keramičkih djela',
        price: '100 kn',
        duration: '120 min',
        age: '8-14 godina',
        image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=300&h=200&fit=crop',
        rating: 4.8,
        popular: false
      }
    ],
    edukativne: [
      {
        id: 4,
        name: 'Robotika za početnike',
        description: 'Uvod u svijet robotike i programiranja za djecu',
        price: '120 kn',
        duration: '90 min',
        age: '8-14 godina',
        image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=200&fit=crop',
        rating: 4.9,
        popular: true
      },
      {
        id: 5,
        name: 'Eksperimenti',
        description: 'Zabavni znanstveni eksperimenti i demonstracije',
        price: '90 kn',
        duration: '75 min',
        age: '6-12 godina',
        image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=300&h=200&fit=crop',
        rating: 4.6,
        popular: false
      },
      {
        id: 6,
        name: 'Matematičke igre',
        description: 'Učenje matematike kroz zabavne igre i aktivnosti',
        price: '60 kn',
        duration: '60 min',
        age: '7-11 godina',
        image: 'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=300&h=200&fit=crop',
        rating: 4.5,
        popular: false
      }
    ],
    sportske: [
      {
        id: 7,
        name: 'Mini nogomet',
        description: 'Osnove nogometa i timska igra',
        price: '50 kn',
        duration: '60 min',
        age: '5-10 godina',
        image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=300&h=200&fit=crop',
        rating: 4.4,
        popular: false
      },
      {
        id: 8,
        name: 'Ples i pokret',
        description: 'Kreativni pokret i osnove plesa',
        price: '65 kn',
        duration: '45 min',
        age: '4-8 godina',
        image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=300&h=200&fit=crop',
        rating: 4.7,
        popular: false
      },
      {
        id: 9,
        name: 'Karate za djecu',
        description: 'Borilačke vještine i disciplina',
        price: '75 kn',
        duration: '60 min',
        age: '6-12 godina',
        image: 'https://images.unsplash.com/photo-1544717302-de2939b7ef71?w=300&h=200&fit=crop',
        rating: 4.6,
        popular: false
      },
      {
        id: 10,
        name: 'Plivanje',
        description: 'Učenje plivanja s profesionalnim instruktorom',
        price: '85 kn',
        duration: '45 min',
        age: '4-10 godina',
        image: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?w=300&h=200&fit=crop',
        rating: 4.8,
        popular: true
      }
    ],
    tehnološke: [
      {
        id: 11,
        name: 'Programiranje igrica',
        description: 'Stvaranje jednostavnih igrica u Scratch-u',
        price: '110 kn',
        duration: '90 min',
        age: '9-15 godina',
        image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=300&h=200&fit=crop',
        rating: 4.9,
        popular: true
      },
      {
        id: 12,
        name: '3D modeliranje',
        description: 'Osnove 3D modeliranja i printanja',
        price: '95 kn',
        duration: '75 min',
        age: '10-16 godina',
        image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=300&h=200&fit=crop',
        rating: 4.6,
        popular: false
      },
      {
        id: 13,
        name: 'Arduino radionice',
        description: 'Programiranje mikrokontrolera i elektronika',
        price: '130 kn',
        duration: '120 min',
        age: '12-18 godina',
        image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=300&h=200&fit=crop',
        rating: 4.7,
        popular: false
      }
    ],
    glazbene: [
      {
        id: 14,
        name: 'Gitara za početnike',
        description: 'Osnove sviranja gitare i čitanja nota',
        price: '80 kn',
        duration: '60 min',
        age: '7-14 godina',
        image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=200&fit=crop',
        rating: 4.5,
        popular: false
      },
      {
        id: 15,
        name: 'Klavir za djecu',
        description: 'Učenje klavira kroz igru i zabavu',
        price: '90 kn',
        duration: '45 min',
        age: '5-12 godina',
        image: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=300&h=200&fit=crop',
        rating: 4.8,
        popular: false
      },
      {
        id: 16,
        name: 'Pjevanje i vokali',
        description: 'Razvoj vokalne tehnike i samopozdana',
        price: '70 kn',
        duration: '60 min',
        age: '6-16 godina',
        image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=200&fit=crop',
        rating: 4.7,
        popular: false
      }
    ]
  };

  const categories = [
    { id: 'sve', label: 'Sve', icon: Star },
    { id: 'kreativne', label: 'Kreativne', icon: Paintbrush },
    { id: 'edukativne', label: 'Edukativne', icon: Book },
    { id: 'sportske', label: 'Sportske', icon: Users },
    { id: 'tehnološke', label: 'Tehnološke', icon: Computer },
    { id: 'glazbene', label: 'Glazbene', icon: Music }
  ];

  const getFilteredItems = () => {
    if (selectedCategory === 'sve') {
      return [...workshopData.kreativne, ...workshopData.edukativne, ...workshopData.sportske, ...workshopData.tehnološke, ...workshopData.glazbene];
    }
    return workshopData[selectedCategory as keyof typeof workshopData] || [];
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Naše Radionice
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Otkrijte našu bogatu ponudu edukativnih i zabavnih radionica
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

        {/* Workshop Items Grid */}
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
                <CardDescription className="space-y-1">
                  <p>{item.description}</p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Trajanje:</strong> {item.duration} | <strong>Uzrast:</strong> {item.age}
                  </p>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full">
                  Prijavi dijete
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

export default Radionice;