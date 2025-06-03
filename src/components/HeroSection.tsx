import { useState, useEffect } from 'react';
import { ChefHat, Clock, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [currentText, setCurrentText] = useState(0);
  const animatedTexts = [
    'Najbolja hrana u gradu',
    'Brza dostava',
    'Svježi sastojci',
    'Odličan ukus'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % animatedTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 dark:from-blue-800 dark:via-blue-900 dark:to-purple-900 min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <div className="flex justify-center mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-full p-6">
              <ChefHat className="h-16 w-16 text-white" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Mini TVZ
            <span className="block text-3xl md:text-4xl font-normal mt-2 text-blue-200">
              Restoran
            </span>
          </h1>
          
          <div className="h-16 mb-8">
            <p className="text-xl md:text-2xl text-blue-100 animate-fade-in">
              {animatedTexts[currentText]}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
              <Clock className="h-8 w-8 text-blue-200 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Brza dostava</h3>
              <p className="text-blue-200">Dostava za 30 minuta</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
              <Star className="h-8 w-8 text-blue-200 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Kvaliteta</h3>
              <p className="text-blue-200">5 zvjezdica kvalitete</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
              <ChefHat className="h-8 w-8 text-blue-200 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Svježe</h3>
              <p className="text-blue-200">Dnevno svježi sastojci</p>
            </div>
          </div>

          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <Link to="/jelovnik">
              <Button size="lg" className="w-full sm:w-auto bg-white text-blue-600 hover:bg-blue-50 transition-all duration-300 transform hover:scale-105">
                Pogledaj jelovnik
              </Button>
            </Link>
            <Link to="/kontakt">
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                Kontaktiraj nas
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 animate-bounce opacity-20">
        <div className="w-4 h-4 bg-white rounded-full"></div>
      </div>
      <div className="absolute top-40 right-20 animate-bounce opacity-20" style={{ animationDelay: '1s' }}>
        <div className="w-6 h-6 bg-white rounded-full"></div>
      </div>
      <div className="absolute bottom-20 left-20 animate-bounce opacity-20" style={{ animationDelay: '2s' }}>
        <div className="w-3 h-3 bg-white rounded-full"></div>
      </div>
    </div>
  );
};

export default HeroSection;