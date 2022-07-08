export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Thakali khaja',
    price: 7.99,
    description: 'Thakali Khaja is a combo meal of basic thakali foods such as rice, lentils, spinach, yogurt, curry, papads.',
    image: 'http://localhost:8080/thakali.jpg',
  },
  {
    id: 2,
    name: 'Samayabaji',
    price: 10.99,
    description: 'Samay Baji is an authentic traditional dish of Newar community in Nepal that consists a lot of items served with beaten rice on a single platter.',
    image: 'http://localhost:8080/samayabaji.jpg',
  },
  {
    id: 3,
    name: 'Steam Momo',
    price: 8.99,
    description: 'Momo are bite-size dumplings made with a spoonful of delicious stuffing wrapped in dough which are usually steamed.',
    image: 'http://localhost:8080/momo.jpg',
  },
  {
    id: 4,
    name: 'Sel Roti',
    price: 5.99,
    description: 'Sel roti is a traditional homemade ring-shaped sweet rice bread popular in Nepal which is mostly prepared during Dashain and Tihar.',
    image: 'http://localhost:8080/selroti.jpg',
  },
  {
    id: 5,
    name: 'Yamari',
    price: 6.99,
    description: 'Yamari is a delicacy of the Newar community in Nepal which is a steamed fish-shaped dumpling that consists of an external covering of rice flour with sweet fillings such as chaku.',
    image: 'http://localhost:8080/yamari.jpg',
  },
];

export default products;