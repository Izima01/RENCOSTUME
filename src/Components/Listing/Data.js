import { v4 } from 'uuid';

import nefertiti from '../../assets/nefertiti.png';
import igboCrown from '../../assets/Igbo crown.png';
import yorubaCrown from '../../assets/Yoruba crown.png';
import kembe from '../../assets/kembe.jpg';
import kaftan3 from '../../assets/Kaftan 3.jpg';
import kaftan2 from '../../assets/Kaftan 2.jpg';
import turban from '../../assets/hausa turban.png';
import Masquerade1 from '../../assets/Masquerade 1.jpg';
import Masquerade2 from '../../assets/Masquerade 2.jpg';
import Masquerade3 from '../../assets/Masquerade 3.jpg';
import Masquerade4 from '../../assets/Masquerade 4.jpg';
import MuslimF1 from '../../assets/Muslim F1.jpg';
import MuslimF2 from '../../assets/Muslim F2.jpg';
import MuslimM1 from '../../assets/Muslim M1.jpg';
import MuslimM2 from '../../assets/Muslim M2.jpg';
import tux1 from '../../assets/tux1.jpg';
import tux2 from '../../assets/tux2.jpg';
import tux3 from '../../assets/tux3.jpg';
import tux4 from '../../assets/tux4.jpg';
import gown1 from '../../assets/gown1.jpg';
import gown2 from '../../assets/gown2.jpg';
import gown3 from '../../assets/gown3.jpg';
import Priest1 from '../../assets/Priest1.jpg';
import Priest2 from '../../assets/Priest2.jpg';
import Priest3 from '../../assets/Priest3.jpg';
import yoruba1 from '../../assets/Yoruba 1.jpg';
import yoruba2 from '../../assets/Yoruba 2.jpg';
import ethiopia from '../../assets/image-carousel-parent@2x.png';


export const productList = [
    {
        id: v4(),
        name: 'Nefertiti Woven Crown',
        type: "rent",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod dolores at maiores vero eligendi cumque.",
        price: 15000,
        image: nefertiti,
        stock: 5,
        category: "headgear",
        gender: 'female',
        ethnicity: "african",
        role: 'royalty'
    },
    {
        id: v4(),
        name: 'Ethiopia Crown',
        type: "rent",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod dolores at maiores vero eligendi cumque.",
        price: 10000,
        image: ethiopia,
        stock: 3,
        category: "headgear",
        gender: 'female',
        ethnicity: "african",
        role: 'royalty'
    },
    {
        id: v4(),
        name: 'Igbo King Crown',
        type: "buy",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod dolores at maiores vero eligendi cumque.",
        price: 5000,
        image: igboCrown,
        stock: 4,
        category: "headgear",
        gender: "male",
        ethnicity: "igbo",
        role: 'royalty'
    },
    {
        id: v4(),
        name: 'Yoruba King Crown',
        type: "buy",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod dolores at maiores vero eligendi cumque.",
        price: 5000,
        image: yorubaCrown,
        stock: 3,
        category: "headgear",
        gender: "male",
        ethnicity: "yoruba",
        role: 'royalty'
    },
    {
        id: v4(),
        name: 'Hausa Turban',
        type: "rent",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod dolores at maiores vero eligendi cumque.",
        price: 5000,
        image: turban,
        stock: 3,
        category: "headgear",
        gender: "male",
        ethnicity: "hausa",
        role: 'royalty'
    },
    {
        id: v4(),
        name: 'Blue Kembe for men',
        type: "rent",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod dolores at maiores vero eligendi cumque.",
        price: 8000,
        image: kembe,
        stock: 3,
        category: "clothing",
        gender: "male",
        ethnicity: "yoruba",
        role: ''
    },
    {
        id: v4(),
        name: 'Green Kembe for men',
        type: "rent",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod dolores at maiores vero eligendi cumque.",
        price: 5000,
        image: kaftan3,
        stock: 3,
        category: "clothing",
        gender: "male",
        ethnicity: "yoruba",
        role: ''
    },
    {
        id: v4(),
        name: 'Wine Kembe for men',
        type: "buy",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod dolores at maiores vero eligendi cumque.",
        price: 5000,
        image: kaftan2,
        stock: 3,
        category: "clothing",
        gender: "male",
        ethnicity: "yoruba",
        role: ''
    },
    {
        id: v4(),
        name: 'Masquerade Costume 1',
        type: "buy",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod dolores at maiores vero eligendi cumque.",
        price: 10000,
        image: Masquerade1,
        stock: 3,
        category: "clothing",
        gender: "male",
        ethnicity: "yoruba",
        role: 'masquerade'
    },
    {
        id: v4(),
        name: 'Masquerade Costume 2',
        type: "buy",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod dolores at maiores vero eligendi cumque.",
        price: 12000,
        image: Masquerade2,
        stock: 3,
        category: "clothing",
        gender: "male",
        ethnicity: "yoruba",
        role: 'masquerade'
    },
    {
        id: v4(),
        name: 'Masquerade Costume 3',
        type: "buy",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod dolores at maiores vero eligendi cumque.",
        price: 13000,
        image: Masquerade3,
        stock: 3,
        category: "clothing",
        gender: "male",
        ethnicity: "igbo",
        role: 'masquerade'
    },
    {
        id: v4(),
        name: 'Masquerade Costume 4',
        type: "rent",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod dolores at maiores vero eligendi cumque.",
        price: 11000,
        image: Masquerade4,
        stock: 3,
        category: "clothing",
        gender: "male",
        ethnicity: "igbo",
        role: 'masquerade'
    },
    {
        id: v4(),
        name: 'Male Muslim 1',
        type: "rent",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod dolores at maiores vero eligendi cumque.",
        price: 5000,
        image: MuslimM1,
        stock: 3,
        category: "accessories",
        gender: "male",
        ethnicity: "hausa",
        role: 'muslim'
    },
    {
        id: v4(),
        name: 'Male Muslim 2',
        type: "rent",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod dolores at maiores vero eligendi cumque.",
        price: 5000,
        image: MuslimM2,
        stock: 3,
        category: "accessories",
        gender: "male",
        ethnicity: "hausa",
        role: 'muslim'
    },
    {
        id: v4(),
        name: 'Female Muslim 1',
        type: "buy",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod dolores at maiores vero eligendi cumque.",
        price: 5000,
        image: MuslimF1,
        stock: 3,
        category: "clothing",
        gender: "female",
        ethnicity: "hausa",
        role: 'muslim'
    },
    {
        id: v4(),
        name: 'Female Muslim 2',
        type: "buy",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod dolores at maiores vero eligendi cumque.",
        price: 5000,
        image: MuslimF2,
        stock: 3,
        category: "clothing",
        gender: "female",
        ethnicity: "hausa",
        role: 'muslim'
    },
    {
        id: v4(),
        name: 'Black Tuxedo',
        type: "rent",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod dolores at maiores vero eligendi cumque.",
        price: 25000,
        image: tux4,
        stock: 2,
        category: "clothing",
        gender: "male",
        ethnicity: "english",
        role: 'wedding'
    },
    {
        id: v4(),
        name: 'Blue Tuxedo',
        type: "rent",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod dolores at maiores vero eligendi cumque.",
        price: 25000,
        image: tux1,
        stock: 2,
        category: "clothing",
        gender: "male",
        ethnicity: "english",
        role: 'wedding'
    },
    {
        id: v4(),
        name: 'Green Tuxedo',
        type: "rent",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod dolores at maiores vero eligendi cumque.",
        price: 25000,
        image: tux2,
        stock: 1,
        category: "clothing",
        gender: "male",
        ethnicity: "english",
        role: 'wedding'
    },
    {
        id: v4(),
        name: 'Wine Tuxedo',
        type: "rent",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod dolores at maiores vero eligendi cumque.",
        price: 27000,
        image: tux3,
        stock: 1,
        category: "clothing",
        gender: "male",
        ethnicity: "english",
        role: 'wedding'
    },
    {
        id: v4(),
        name: 'Wedding Gown 1',
        type: "buy",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod dolores at maiores vero eligendi cumque.",
        price: 45000,
        image: gown1,
        stock: 1,
        category: "clothing",
        gender: "female",
        ethnicity: "english",
        role: 'wedding'
    },
    {
        id: v4(),
        name: 'Wedding Gown 2',
        type: "buy",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod dolores at maiores vero eligendi cumque.",
        price: 55000,
        image: gown2,
        stock: 1,
        category: "clothing",
        gender: "female",
        ethnicity: "english",
        role: 'wedding'
    },
    {
        id: v4(),
        name: 'Wedding Gown 3',
        type: "rent",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod dolores at maiores vero eligendi cumque.",
        price: 40000,
        image: gown3,
        stock: 1,
        category: "clothing",
        gender: "female",
        ethnicity: "english",
        role: 'wedding'
    },
    {
        id: v4(),
        name: 'Priest Attrire 1',
        type: "buy",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod dolores at maiores vero eligendi cumque.",
        price: 6000,
        image: Priest1,
        stock: 4,
        category: "clothing",
        gender: "male",
        ethnicity: "english",
        role: 'priest'
    },
    {
        id: v4(),
        name: 'Priest Attrire 2',
        type: "rent",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod dolores at maiores vero eligendi cumque.",
        price: 6000,
        image: Priest2,
        stock: 3,
        category: "clothing",
        gender: "male",
        ethnicity: "english",
        role: 'priest'
    },
    {
        id: v4(),
        name: 'Priest Attrire 3',
        type: "rent",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod dolores at maiores vero eligendi cumque.",
        price: 6000,
        image: Priest3,
        stock: 4,
        category: "clothing",
        gender: "male",
        ethnicity: "english",
        role: 'clergy'
    },
    {
        id: v4(),
        name: 'Iro and Buba Purple',
        type: "rent",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod dolores at maiores vero eligendi cumque.",
        price: 12000,
        image: yoruba1,
        stock: 3,
        category: "clothing",
        gender: "female",
        ethnicity: "yoruba",
        role: ''
    },
    {
        id: v4(),
        name: 'Iro and Buba Adire',
        type: "rent",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod dolores at maiores vero eligendi cumque.",
        price: 16000,
        image: yoruba2,
        stock: 3,
        category: "clothing",
        gender: "female",
        ethnicity: "yoruba",
        role: ''
    },
]