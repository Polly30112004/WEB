import flowerIcon1 from './img/flower1.png';
import flowerIcon2 from './img/flower2.png';
import delivery from './img/delivery.png';

export const companyData = {
  name: "FlowerGarden",
  slogan: "Красота в каждом лепестке",
};

export const featuresData = [
  {
    id: 1,
    title: "Свежие цветы",
    description: "Мы получаем цветы напрямую от лучших поставщиков, чтобы обеспечить максимальную свежесть.",
    icon: <img src={flowerIcon1}></img>,
  },
  {
    id: 2,
    title: "Эксклюзивные букеты",
    description: "Только у нас вы найдете уникальные авторские композиции от наших флористов.",
    icon: <img src={flowerIcon2}></img>,
  },
  {
    id: 3,
    title: "Доставка по городу",
    description: "Быстрая и бережная доставка ваших цветов в любую точку города.",
    icon: <img src={delivery}></img>,
  }
];

export const productsData = [
  { id: 1, name: "Букет роз", price: "2500 ₽", description: "Классический букет из 11 красных роз в красивой упаковке." },
  { id: 2, name: "Весенний микс", price: "1800 ₽", description: "Яркая композиция из тюльпанов, нарциссов и гиацинтов." },
  { id: 3, name: "Романтический букет", price: "3200 ₽", description: "Нежный букет из пионов и розовых роз с зеленью." },
];


export const categories = ["Все", "Розы", "Тюльпаны", "Пионы"];