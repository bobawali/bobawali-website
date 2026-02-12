// Carousel drink photos for menu section
export interface DrinkImage {
  src: string
  alt: string
}

export const drinkImages: DrinkImage[] = [
  { src: '/drink_pics/orange_drink_kendra_scott.jpeg', alt: 'Orange fusion drink at a Kendra Scott event' },
  { src: '/drink_pics/pink_drink_with_cream.jpeg', alt: 'Pink rose drink topped with cream' },
  { src: '/drink_pics/four_drinks_tray.jpeg', alt: 'Tray of four assorted bubble tea drinks' },
  { src: '/drink_pics/drinks_with_vases.jpeg', alt: 'Colorful drinks displayed alongside floral vases' },
  { src: '/drink_pics/brown_drink_in_hand.jpeg', alt: 'Brown sugar milk tea held in hand' },
  { src: '/drink_pics/pink_drink_with_straws.jpeg', alt: 'Pink lemonade drink with striped straws' },
  { src: '/drink_pics/drink_at_catering_event.jpeg', alt: 'Boba Wali drink served at a catering event' },
  { src: '/drink_pics/tan_brown_drink.jpeg', alt: 'Tan brown chai-based bubble tea' },
  { src: '/drink_pics/drink_closeup_1.jpeg', alt: 'Close-up of a Boba Wali signature drink' },
  { src: '/drink_pics/drink_closeup_2.jpeg', alt: 'Close-up of a fruity boba drink' },
  { src: '/drink_pics/drink_closeup_3.jpeg', alt: 'Close-up of a creamy bubble tea' },
  { src: '/drink_pics/drink_closeup_4.jpeg', alt: 'Close-up of a layered fusion drink' },
  { src: '/drink_pics/pink_and_brown_drinks.jpeg', alt: 'Pink and brown drinks side by side' },
  { src: '/drink_pics/drink_w_salam_cola.jpeg', alt: 'Boba drink alongside a Salam Cola' },
]

export const menuConfig = {
  fullMenuPdfUrl: process.env.NEXT_PUBLIC_MENU_URL || 'https://drive.google.com/file/d/1xVeqLmEDA5f0F1tLwyscPfAo7q4f8fPE/view',
}
