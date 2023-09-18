import Home from '../screens/Home';
import { Wallet, User } from 'phosphor-react-native';
import Perfil from '../screens/Perfil';
import CreateWallet from '../screens/CreateWallet';

export const routesPrivatesTabs = [
  {
    name: 'Contas',
    component: Home,
    icon: Wallet,
  },
  {
    name: 'Perfil',
    component: Perfil,
    icon: User,
  },
];

export const routesPrivatesStacks = [
  {
    name: 'CadastrarConta',
    component: CreateWallet,
  },
];
