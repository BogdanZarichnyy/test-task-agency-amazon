import client1 from '../images/clients/client_1.jpg';
import client2 from '../images/clients/client_2.jpg';
import client3 from '../images/clients/client_3.jpg';

import photo1 from '../images/photos/photo_1.jpg';
import photo2 from '../images/photos/photo_2.jpg';
import photo3 from '../images/photos/photo_3.jpg';

type ClientType= {
  id: number,
  clientLogo: string,
  clientName: string,
  text: string,
  photo: string,
  name: string,
  position: string,
}

const clientsReviews: Array<ClientType>= [
  {
    id: 1,
    clientLogo: client1,
    clientName: 'Serene Living Products',
    text: 'Sales Fortuna made managing sales easier and helped us focus on customers. Its tools have been crucial for our growth and client satisfaction.',
    photo: photo1,
    name: 'Ethan Morgan',
    position: 'Founder and CEO',
  },
  {
    id: 2,
    clientLogo: client2,
    clientName: 'Starlight Creations',
    text: 'Sales Fortuna has made sales so much easier for us. It saves time, simplifies the whole process, and helps us land more deals without extra hassle.',
    photo: photo2,
    name: 'Olivia Hayes',
    position: 'Owner',
  },
  {
    id: 3,
    clientLogo: client3,
    clientName: 'Opulent Living Croup',
    text: 'Sales Fortuna has simplified our lead generation, helping us attract qualified prospects effortlessly and drive consistent growth.',
    photo: photo3,
    name: 'Alexander Reed',
    position: 'Co-Founder',
  },
  {
    id: 4,
    clientLogo: client2,
    clientName: 'Starlight Creations',
    text: 'Sales Fortuna has made sales so much easier for us. It saves time, simplifies the whole process, and helps us land more deals without extra hassle.',
    photo: photo2,
    name: 'Olivia Hayes',
    position: 'Owner',
  },
  {
    id: 5,
    clientLogo: client3,
    clientName: 'Opulent Living Croup',
    text: 'Sales Fortuna has simplified our lead generation, helping us attract qualified prospects effortlessly and drive consistent growth.',
    photo: photo3,
    name: 'Alexander Reed',
    position: 'Co-Founder',
  },
  {
    id: 6,
    clientLogo: client1,
    clientName: 'Serene Living Products',
    text: 'Sales Fortuna made managing sales easier and helped us focus on customers. Its tools have been crucial for our growth and client satisfaction.',
    photo: photo1,
    name: 'Ethan Morgan',
    position: 'Founder and CEO',
  },
  {
    id: 7,
    clientLogo: client3,
    clientName: 'Opulent Living Croup',
    text: 'Sales Fortuna has simplified our lead generation, helping us attract qualified prospects effortlessly and drive consistent growth.',
    photo: photo3,
    name: 'Alexander Reed',
    position: 'Co-Founder',
  },
  {
    id: 8,
    clientLogo: client1,
    clientName: 'Serene Living Products',
    text: 'Sales Fortuna made managing sales easier and helped us focus on customers. Its tools have been crucial for our growth and client satisfaction.',
    photo: photo1,
    name: 'Ethan Morgan',
    position: 'Founder and CEO',
  },
  {
    id: 9,
    clientLogo: client2,
    clientName: 'Starlight Creations',
    text: 'Sales Fortuna has made sales so much easier for us. It saves time, simplifies the whole process, and helps us land more deals without extra hassle.',
    photo: photo2,
    name: 'Olivia Hayes',
    position: 'Owner',
  },
]

export default clientsReviews;