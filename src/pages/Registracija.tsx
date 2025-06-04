import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { UserPlus, Calendar, Users } from 'lucide-react';

const Registracija = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    childName: '',
    childAge: '',
    parentName: '',
    parentEmail: '',
    parentPhone: '',
    workshop: '',
    medicalInfo: '',
    emergencyContact: '',
    emergencyPhone: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const workshops = [
    'Kreativno crtanje i slikanje',
    'Robotika za početnike',
    'Kuhanje za djecu',
    'Glazbena radionica',
    'Sportske aktivnosti',
    'Programiranje Scratch',
    'Rukotvorine i crafting',
    'Prirodoslovlje za djecu'
  ];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.childName.trim()) {
      newErrors.childName = 'Ime djeteta je obavezno';
    }
    
    if (!formData.childAge.trim()) {
      newErrors.childAge = 'Dob djeteta je obavezna';
    } else if (isNaN(Number(formData.childAge)) || Number(formData.childAge) < 3 || Number(formData.childAge) > 15) {
      newErrors.childAge = 'Dob mora biti između 3 i 15 godina';
    }
    
    if (!formData.parentName.trim()) {
      newErrors.parentName = 'Ime roditelja je obavezno';
    }
    
    if (!formData.parentEmail.trim()) {
      newErrors.parentEmail = 'Email roditelja je obavezan';
    } else if (!/\S+@\S+\.\S+/.test(formData.parentEmail)) {
      newErrors.parentEmail = 'Email format nije valjan';
    }
    
    if (!formData.parentPhone.trim()) {
      newErrors.parentPhone = 'Telefon roditelja je obavezan';
    }
    
    if (!formData.workshop) {
      newErrors.workshop = 'Molimo odaberite radionicu';
    }
    
    if (!formData.emergencyContact.trim()) {
      newErrors.emergencyContact = 'Kontakt za hitne slučajeve je obavezan';
    }
    
    if (!formData.emergencyPhone.trim()) {
      newErrors.emergencyPhone = 'Telefon za hitne slučajeve je obavezan';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      toast({
        title: "Uspješna registracija!",
        description: `${formData.childName} je uspješno registriran/a za radionicu "${formData.workshop}".`,
      });
      
      // Reset form
      setFormData({
        childName: '',
        childAge: '',
        parentName: '',
        parentEmail: '',
        parentPhone: '',
        workshop: '',
        medicalInfo: '',
        emergencyContact: '',
        emergencyPhone: ''
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <UserPlus className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Registracija za radionice
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Prijavite svoje dijete za naše uzbudljive radionice
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Registracijski obrazac
            </CardTitle>
            <CardDescription>
              Molimo unesite sve potrebne podatke za registraciju
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Podaci o djetetu */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Podaci o djetetu
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="childName">Ime i prezime djeteta *</Label>
                    <Input
                      id="childName"
                      value={formData.childName}
                      onChange={(e) => handleInputChange('childName', e.target.value)}
                      className={errors.childName ? 'border-red-500' : ''}
                      placeholder="Ana Marić"
                    />
                    {errors.childName && (
                      <p className="text-red-500 text-sm mt-1">{errors.childName}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="childAge">Dob djeteta *</Label>
                    <Input
                      id="childAge"
                      type="number"
                      min="3"
                      max="15"
                      value={formData.childAge}
                      onChange={(e) => handleInputChange('childAge', e.target.value)}
                      className={errors.childAge ? 'border-red-500' : ''}
                      placeholder="8"
                    />
                    {errors.childAge && (
                      <p className="text-red-500 text-sm mt-1">{errors.childAge}</p>
                    )}
                  </div>
                </div>

                <div>
                  <Label htmlFor="workshop">Odaberite radionicu *</Label>
                  <Select value={formData.workshop} onValueChange={(value) => handleInputChange('workshop', value)}>
                    <SelectTrigger className={errors.workshop ? 'border-red-500' : ''}>
                      <SelectValue placeholder="Odaberite radionicu" />
                    </SelectTrigger>
                    <SelectContent>
                      {workshops.map((workshop) => (
                        <SelectItem key={workshop} value={workshop}>
                          {workshop}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.workshop && (
                    <p className="text-red-500 text-sm mt-1">{errors.workshop}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="medicalInfo">Medicinski podaci i alergije</Label>
                  <Textarea
                    id="medicalInfo"
                    value={formData.medicalInfo}
                    onChange={(e) => handleInputChange('medicalInfo', e.target.value)}
                    placeholder="Unesite alergije, lijekove ili druge važne medicinske informacije..."
                    rows={3}
                  />
                </div>
              </div>

              {/* Podaci o roditelju */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Podaci o roditelju/skrbniku
                </h3>
                
                <div>
                  <Label htmlFor="parentName">Ime i prezime roditelja *</Label>
                  <Input
                    id="parentName"
                    value={formData.parentName}
                    onChange={(e) => handleInputChange('parentName', e.target.value)}
                    className={errors.parentName ? 'border-red-500' : ''}
                    placeholder="Marko Marić"
                  />
                  {errors.parentName && (
                    <p className="text-red-500 text-sm mt-1">{errors.parentName}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="parentEmail">Email adresa *</Label>
                    <Input
                      id="parentEmail"
                      type="email"
                      value={formData.parentEmail}
                      onChange={(e) => handleInputChange('parentEmail', e.target.value)}
                      className={errors.parentEmail ? 'border-red-500' : ''}
                      placeholder="marko.maric@email.com"
                    />
                    {errors.parentEmail && (
                      <p className="text-red-500 text-sm mt-1">{errors.parentEmail}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="parentPhone">Telefon *</Label>
                    <Input
                      id="parentPhone"
                      type="tel"
                      value={formData.parentPhone}
                      onChange={(e) => handleInputChange('parentPhone', e.target.value)}
                      className={errors.parentPhone ? 'border-red-500' : ''}
                      placeholder="091 234 5678"
                    />
                    {errors.parentPhone && (
                      <p className="text-red-500 text-sm mt-1">{errors.parentPhone}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Hitni kontakt */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Kontakt za hitne slučajeve
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="emergencyContact">Ime i prezime *</Label>
                    <Input
                      id="emergencyContact"
                      value={formData.emergencyContact}
                      onChange={(e) => handleInputChange('emergencyContact', e.target.value)}
                      className={errors.emergencyContact ? 'border-red-500' : ''}
                      placeholder="Petra Marić"
                    />
                    {errors.emergencyContact && (
                      <p className="text-red-500 text-sm mt-1">{errors.emergencyContact}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="emergencyPhone">Telefon *</Label>
                    <Input
                      id="emergencyPhone"
                      type="tel"
                      value={formData.emergencyPhone}
                      onChange={(e) => handleInputChange('emergencyPhone', e.target.value)}
                      className={errors.emergencyPhone ? 'border-red-500' : ''}
                      placeholder="098 765 4321"
                    />
                    {errors.emergencyPhone && (
                      <p className="text-red-500 text-sm mt-1">{errors.emergencyPhone}</p>
                    )}
                  </div>
                </div>
              </div>

              <Button type="submit" className="w-full">
                <UserPlus className="h-4 w-4 mr-2" />
                Registriraj dijete
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Registracija;