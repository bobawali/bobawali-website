export interface ExperienceStep {
  id: string
  title: string
  description: string
  tags?: string[]
}

export const experienceSteps: ExperienceStep[] = [
  {
    id: 'unique-drinks',
    title: 'Not Your Average Boba',
    description:
      'Milk teas, traditional Pakistani chai, matcha, lemonades, and fruit refreshers — all inspired by South Asian flavors.',
  },
  {
    id: 'live-service',
    title: 'Crafted Live at Your Event',
    description:
      "Our baristas roll up with the cart and serve fresh drinks on-site — you don't lift a finger.",
    tags: ['Weddings', 'Corporate', 'Birthdays', 'Parties', 'School Events', 'Festivals', '& More'],
  },
  {
    id: 'customization',
    title: 'Customized to Your Theme',
    description:
      'A curated drink menu and custom-designed stickers, tailored to match your event.',
  },
]

export const experienceConfig = {
  title: 'The Experience',
  subtitle:
    "We're not a traditional boba shop. We bring South Asian fusion drinks — crafted fresh, live at your event.",
  image: '/photos/cart-setup.jpeg',
  imageAlt: 'Boba Wali cart setup at event',
}
