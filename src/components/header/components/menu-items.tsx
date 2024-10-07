export type TMenuItems = {
  id: string,
  subItems: TMenuItem[],
  mainItem: TMenuItem
}

export type TMenuItem = {
  id: string,
  name: string,
  path: string
}

export const menuItems: TMenuItems[] = [
  {
    id: 'menu-1',
    subItems: [],
    mainItem: {
      id: 'menu-main-home',
      name: 'Home',
      path: '/'
    }
  },
  {
    id: 'menu-2',
    subItems: [
      {
        id: 'menu-item-about',
        name: 'About me',
        path: '/about'
      },
      {
        id: 'menu-item-education',
        name: 'Education & Experience',
        path: '/about#education'
      },
      {
        id: 'menu-item-toolkit',
        name: 'Toolkit',
        path: '/about#toolkit'
      },
      {
        id: 'menu-item-services',
        name: 'Services',
        path: '/about#services'
      },
    ],
    mainItem: {
      id: 'menu-main-about',
      name: 'About',
      path: '/about'
    }
  },
  {
    id: 'menu-3',
    subItems: [],
    mainItem: {
      id: 'menu-main-contact',
      name: 'Contact',
      path: '/about#contact'
    }
  },
]
