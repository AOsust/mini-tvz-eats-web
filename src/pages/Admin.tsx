import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Users, ShoppingCart, TrendingUp, Mail } from 'lucide-react';

const Admin = () => {
  const [stats, setStats] = useState({
    totalUsers: 142,
    totalOrders: 89,
    totalRevenue: 12450,
    pendingMessages: 7
  });

  const [users] = useState([
    {
      id: 1,
      name: 'Ana Marić',
      email: 'ana.maric@email.com',
      registrationDate: '2024-01-15',
      status: 'active',
      orders: 12
    },
    {
      id: 2,
      name: 'Marko Petrov',
      email: 'marko.petrov@email.com',
      registrationDate: '2024-01-20',
      status: 'active',
      orders: 8
    },
    {
      id: 3,
      name: 'Petra Novak',
      email: 'petra.novak@email.com',
      registrationDate: '2024-02-01',
      status: 'inactive',
      orders: 3
    },
    {
      id: 4,
      name: 'Ivan Horvat',
      email: 'ivan.horvat@email.com',
      registrationDate: '2024-02-10',
      status: 'active',
      orders: 15
    },
    {
      id: 5,
      name: 'Maja Jurić',
      email: 'maja.juric@email.com',
      registrationDate: '2024-02-15',
      status: 'active',
      orders: 6
    }
  ]);

  const [recentOrders] = useState([
    {
      id: 1,
      customerName: 'Ana Marić',
      items: 'Margherita Pizza, Coca Cola',
      total: '80 kn',
      status: 'delivered',
      date: '2024-03-01'
    },
    {
      id: 2,
      customerName: 'Marko Petrov',
      items: 'Classic Burger, Cappuccino',
      total: '63 kn',
      status: 'preparing',
      date: '2024-03-01'
    },
    {
      id: 3,
      customerName: 'Ivan Horvat',
      items: 'Quattro Stagioni, BBQ Burger',
      total: '130 kn',
      status: 'pending',
      date: '2024-03-01'
    }
  ]);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <Badge className="bg-green-500 hover:bg-green-600">Aktivan</Badge>;
      case 'inactive':
        return <Badge variant="secondary">Neaktivan</Badge>;
      case 'delivered':
        return <Badge className="bg-green-500 hover:bg-green-600">Isporučeno</Badge>;
      case 'preparing':
        return <Badge className="bg-yellow-500 hover:bg-yellow-600">Priprema</Badge>;
      case 'pending':
        return <Badge variant="outline">Na čekanju</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Admin Panel
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Upravljanje radionicama i prijavama djece
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Ukupno djece</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalUsers}</div>
              <p className="text-xs text-muted-foreground">
                +12% od prošlog mjeseca
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Aktivne radionice</CardTitle>
              <ShoppingCart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalOrders}</div>
              <p className="text-xs text-muted-foreground">
                +8% od prošlog mjeseca
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Mjesečni prihod</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalRevenue.toLocaleString()} kn</div>
              <p className="text-xs text-muted-foreground">
                +15% od prošlog mjeseca
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Poruke na čekanju</CardTitle>
              <Mail className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.pendingMessages}</div>
              <p className="text-xs text-muted-foreground">
                Nova poruka prije 2h
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Users Table */}
          <Card>
            <CardHeader>
              <CardTitle>Registrirani korisnici</CardTitle>
              <CardDescription>
                Popis svih registriranih korisnika
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Ime</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Narudžbe</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {users.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell>
                        <div>
                          <div className="font-medium">{user.name}</div>
                          <div className="text-sm text-muted-foreground">
                            {user.email}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        {getStatusBadge(user.status)}
                      </TableCell>
                      <TableCell>{user.orders}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Recent Orders */}
          <Card>
            <CardHeader>
              <CardTitle>Nedavne narudžbe</CardTitle>
              <CardDescription>
                Pregled najnovijih narudžbi
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentOrders.map((order) => (
                  <div key={order.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <div className="font-medium">{order.customerName}</div>
                      <div className="text-sm text-muted-foreground">
                        {order.items}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {order.date}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold">{order.total}</div>
                      <div className="mt-1">
                        {getStatusBadge(order.status)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Admin;