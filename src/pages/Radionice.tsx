import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Paintbrush, Book, School, Star, Computer, Code } from 'lucide-react';

const Radionice = () => {
  const [selectedCategory, setSelectedCategory] = useState('sve');
  const navigate = useNavigate();

  const workshopData = {
    početničke: [
      {
        id: 1,
        name: 'Programiranje igara u Scratch-u',
        description: 'Prvi koraci u svijetu programiranja kroz kreiranje jednostavnih igara',
        price: '80 €',
        duration: '60 min',
        age: '7-10 godina',
        image: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=300&h=200&fit=crop',
        rating: 4.9,
        popular: true
      },
      {
        id: 2,
        name: 'Mali izumitelji',
        description: 'Upoznavanje s osnovama tehnologije kroz zabavne projekte',
        price: '70 €',
        duration: '60 min',
        age: '5-8 godina',
        image: 'https://images.unsplash.com/photo-1516110833967-0b5716ca1387?w=300&h=200&fit=crop',
        rating: 4.7,
        popular: false
      },
      {
        id: 3,
        name: 'Igraonica robotike',
        description: 'Upoznavanje s robotima i jednostavnim programiranjem',
        price: '90 €',
        duration: '60 min',
        age: '6-9 godina',
        image: 'https://images.unsplash.com/photo-1535378620166-273708d44e4c?w=300&h=200&fit=crop',
        rating: 4.8,
        popular: true
      }
    ],
    programiranje: [
      {
        id: 4,
        name: 'Python za djecu',
        description: 'Uvod u programiranje kroz Python jezik i zabavne zadatke',
        price: '100 €',
        duration: '75 min',
        age: '10-14 godina',
        image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=300&h=200&fit=crop',
        rating: 4.9,
        popular: true
      },
      {
        id: 5,
        name: 'Razvoj web stranica',
        description: 'Osnove HTML-a i CSS-a kroz izradu vlastite web stranice',
        price: '95 €',
        duration: '75 min',
        age: '11-15 godina',
        image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=300&h=200&fit=crop',
        rating: 4.6,
        popular: false
      },
      {
        id: 6,
        name: 'JavaScript za tinejdžere',
        description: 'Učenje interaktivnog programiranja kroz zanimljive projekte',
        price: '110 €',
        duration: '90 min',
        age: '13-17 godina',
        image: 'https://images.unsplash.com/photo-1536148935331-408321065b18?w=300&h=200&fit=crop',
        rating: 4.5,
        popular: false
      }
    ],
    robotika: [
      {
        id: 7,
        name: 'Lego Mindstorms radionice',
        description: 'Programiranje i izgradnja robota pomoću Lego setova',
        price: '120 €',
        duration: '90 min',
        age: '9-15 godina',
        image: 'https://images.unsplash.com/photo-1635016288720-c52507075ad8?w=300&h=200&fit=crop',
        rating: 4.9,
        popular: true
      },
      {
        id: 8,
        name: 'Arduino za početnike',
        description: 'Prvi koraci u elektronici i programiranju mikrokontrolera',
        price: '105 €',
        duration: '90 min',
        age: '12-16 godina',
        image: 'https://images.unsplash.com/photo-1553406830-ef2513450d76?w=300&h=200&fit=crop',
        rating: 4.7,
        popular: false
      },
      {
        id: 9,
        name: 'Mobilna robotika',
        description: 'Izrada i programiranje mobilnih robota',
        price: '130 €',
        duration: '100 min',
        age: '10-16 godina',
        image: 'https://images.unsplash.com/photo-1555664424-778a1e5e1b48?w=300&h=200&fit=crop',
        rating: 4.8,
        popular: false
      }
    ],
    digitalno: [
      {
        id: 10,
        name: 'Digitalna umjetnost',
        description: 'Kreiranje digitalne umjetnosti kroz računalne programe',
        price: '85 €',
        duration: '75 min',
        age: '8-14 godina',
        image: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=300&h=200&fit=crop',
        rating: 4.6,
        popular: false
      },
      {
        id: 11,
        name: '3D modeliranje za djecu',
        description: 'Izrada jednostavnih 3D modela i pripreme za 3D ispis',
        price: '95 €',
        duration: '80 min',
        age: '10-15 godina',
        image: 'https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6?w=300&h=200&fit=crop',
        rating: 4.5,
        popular: false
      },
      {
        id: 12,
        name: 'Animacija i filmovi',
        description: 'Stvaranje vlastitih animacija i digitalnih priča',
        price: '90 €',
        duration: '85 min',
        age: '9-14 godina',
        image: 'https://images.unsplash.com/photo-1616499370260-485b3e5ed3fd?w=300&h=200&fit=crop',
        rating: 4.7,
        popular: true
      }
    ],
    napredne: [
      {
        id: 13,
        name: 'Razvoj mobilnih aplikacija',
        description: 'Kreiranje jednostavnih mobilnih aplikacija s pravim alatima',
        price: '140 €',
        duration: '100 min',
        age: '14-18 godina',
        image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=300&h=200&fit=crop',
        rating: 4.8,
        popular: true
      },
      {
        id: 14,
        name: 'Game development',
        description: 'Razvoj 2D igara pomoću Unity game engine-a',
        price: '150 €',
        duration: '105 min',
        age: '13-18 godina',
        image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=300&h=200&fit=crop',
        rating: 4.9,
        popular: true
      },
      {
        id: 15,
        name: 'Umjetna inteligencija za mlade',
        description: 'Uvod u AI koncepte i primjenu kroz praktične primjere',
        price: '135 €',
        duration: '90 min',
        age: '14-18 godina',
        image: 'https://images.unsplash.com/photo-1677093685943-da40a25cea1f?w=300&h=200&fit=crop',
        rating: 4.6,
        popular: false
      }
    ]
  };

  const categories = [
    { id: 'sve', label: 'Sve', icon: Star },
    { id: 'početničke', label: 'Početničke', icon: Book },
    { id: 'programiranje', label: 'Programiranje', icon: Computer },
    { id: 'robotika', label: 'Robotika', icon: School },
    { id: 'digitalno', label: 'Digitalno', icon: Paintbrush },
    { id: 'napredne', label: 'Napredne', icon: Code }
  ];

  const getFilteredItems = () => {
    if (selectedCategory === 'sve') {
      return [...workshopData.početničke, ...workshopData.programiranje, ...workshopData.robotika, ...workshopData.digitalno, ...workshopData.napredne];
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
            Otkrijte našu bogatu ponudu informatičkih radionica za djecu
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
                <Button 
                  className="w-full"
                  onClick={() => navigate('/registracija')}
                >
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