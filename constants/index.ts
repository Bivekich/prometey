import {Instagram, Mail, MapPin, MessageCircleHeart, Phone, Youtube} from "lucide-react";

export const navLinks = [
    {
        label: 'Главная',
        url: '/',
    },
    {
        label: 'О нас',
        url: '/about',
    },
    {
        label: 'Проекты',
        url: '/portfolio',
    },
    {
        label: 'Связаться',
        url: '/contact',
    },
]

export const socialLinks = [
    {
       id: 1,
       label: 'ВКонтакте',
       icon: MessageCircleHeart,
       url: '#',
    },
    {
        id: 2,
        label: 'Instagram',
        icon: Instagram,
        url: '#',
    },
    {
        id: 3,
        label: 'YouTube',
        icon: Youtube,
        url: '#',
    },
]

export const contactDetails = [
    {
      id: 1,
      icon: Phone,
      text: '+7 905 106 2946',
    },
    {
        id: 2,
        icon: Mail,
        text: 'surikov1984@list.ru',
    },
    {
        id: 3,
        icon: MapPin,
        text: 'Россия, Иваново',
    },
]