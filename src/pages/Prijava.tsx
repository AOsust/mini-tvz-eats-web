import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { User, Mail, Lock, UserPlus } from 'lucide-react';

const Prijava = () => {
  const { toast } = useToast();
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });
  const [registerData, setRegisterData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateLogin = () => {
    const newErrors: Record<string, string> = {};
    
    if (!loginData.email.trim()) {
      newErrors.email = 'Email je obavezan';
    } else if (!/\S+@\S+\.\S+/.test(loginData.email)) {
      newErrors.email = 'Email format nije valjan';
    }
    
    if (!loginData.password.trim()) {
      newErrors.password = 'Lozinka je obavezna';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateRegister = () => {
    const newErrors: Record<string, string> = {};
    
    if (!registerData.name.trim()) {
      newErrors.name = 'Ime je obavezno';
    }
    
    if (!registerData.email.trim()) {
      newErrors.email = 'Email je obavezan';
    } else if (!/\S+@\S+\.\S+/.test(registerData.email)) {
      newErrors.email = 'Email format nije valjan';
    }
    
    if (!registerData.password.trim()) {
      newErrors.password = 'Lozinka je obavezna';
    } else if (registerData.password.length < 6) {
      newErrors.password = 'Lozinka mora imati najmanje 6 znakova';
    }
    
    if (registerData.password !== registerData.confirmPassword) {
      newErrors.confirmPassword = 'Lozinke se ne poklapaju';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateLogin()) {
      toast({
        title: "Uspješna prijava!",
        description: "Dobrodošli natrag!",
      });
      
      // Simulate login
      localStorage.setItem('user', JSON.stringify({
        email: loginData.email,
        name: 'Korisnik'
      }));
      
      setLoginData({ email: '', password: '' });
    }
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateRegister()) {
      toast({
        title: "Uspješna registracija!",
        description: "Vaš račun je kreiran. Možete se prijaviti.",
      });
      
      setRegisterData({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
    }
  };

  const handleInputChange = (form: 'login' | 'register', field: string, value: string) => {
    if (form === 'login') {
      setLoginData(prev => ({ ...prev, [field]: value }));
    } else {
      setRegisterData(prev => ({ ...prev, [field]: value }));
    }
    
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 flex items-center justify-center">
      <div className="max-w-md w-full mx-4">
        <div className="text-center mb-8">
          <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <User className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Dobrodošli natrag
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Prijavite se ili stvorite novi račun
          </p>
        </div>

        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Prijava</TabsTrigger>
            <TabsTrigger value="register">Registracija</TabsTrigger>
          </TabsList>
          
          <TabsContent value="login">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  Prijava
                </CardTitle>
                <CardDescription>
                  Unesite svoje podatke za prijavu
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleLogin} className="space-y-4">
                  <div>
                    <Label htmlFor="login-email">Email adresa</Label>
                    <Input
                      id="login-email"
                      type="email"
                      value={loginData.email}
                      onChange={(e) => handleInputChange('login', 'email', e.target.value)}
                      className={errors.email ? 'border-red-500' : ''}
                      placeholder="vas@email.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="login-password">Lozinka</Label>
                    <Input
                      id="login-password"
                      type="password"
                      value={loginData.password}
                      onChange={(e) => handleInputChange('login', 'password', e.target.value)}
                      className={errors.password ? 'border-red-500' : ''}
                      placeholder="••••••••"
                    />
                    {errors.password && (
                      <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                    )}
                  </div>

                  <Button type="submit" className="w-full">
                    <Lock className="h-4 w-4 mr-2" />
                    Prijavite se
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="register">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <UserPlus className="h-5 w-5" />
                  Registracija
                </CardTitle>
                <CardDescription>
                  Stvorite novi račun
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleRegister} className="space-y-4">
                  <div>
                    <Label htmlFor="register-name">Ime i prezime</Label>
                    <Input
                      id="register-name"
                      value={registerData.name}
                      onChange={(e) => handleInputChange('register', 'name', e.target.value)}
                      className={errors.name ? 'border-red-500' : ''}
                      placeholder="Vaše ime i prezime"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="register-email">Email adresa</Label>
                    <Input
                      id="register-email"
                      type="email"
                      value={registerData.email}
                      onChange={(e) => handleInputChange('register', 'email', e.target.value)}
                      className={errors.email ? 'border-red-500' : ''}
                      placeholder="vas@email.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="register-password">Lozinka</Label>
                    <Input
                      id="register-password"
                      type="password"
                      value={registerData.password}
                      onChange={(e) => handleInputChange('register', 'password', e.target.value)}
                      className={errors.password ? 'border-red-500' : ''}
                      placeholder="••••••••"
                    />
                    {errors.password && (
                      <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="register-confirm">Potvrdite lozinku</Label>
                    <Input
                      id="register-confirm"
                      type="password"
                      value={registerData.confirmPassword}
                      onChange={(e) => handleInputChange('register', 'confirmPassword', e.target.value)}
                      className={errors.confirmPassword ? 'border-red-500' : ''}
                      placeholder="••••••••"
                    />
                    {errors.confirmPassword && (
                      <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
                    )}
                  </div>

                  <Button type="submit" className="w-full">
                    <UserPlus className="h-4 w-4 mr-2" />
                    Registrirajte se
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Prijava;