import React from 'react';

import styles from './Menu.css';
import './Menu.css';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import classNames from 'classnames';
import { CaretDownIcon } from '@radix-ui/react-icons';

export function Menu() {
  return (
    <>
      <NavigationMenu.Root className="NavigationMenuRoot bg-greenx-500">
        <div className="w-full flex justify-center bg-greenx-350 p-4">
          <div className="w-52">
            <img src="/icon.svg" alt="" />
          </div>
        </div>

        <NavigationMenu.List className="NavigationMenuList gap-1 sm:gap-4 overflow-x-hidden text-white">
          <NavigationMenu.Item>
            <NavigationMenu.Link className="NavigationMenuLink" href="/">
              Home
            </NavigationMenu.Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <NavigationMenu.Trigger className="NavigationMenuTrigger">
              Estudos <CaretDownIcon className="CaretDown" aria-hidden />
            </NavigationMenu.Trigger>
            <NavigationMenu.Content className="NavigationMenuContent">
              <ul className="List two">
                <ListItem href="/estudos/especializati" title="EspecializaTI">
                </ListItem>
                <ListItem href="/estudos/alura" title="Alura">
                </ListItem>
                <ListItem href="/estudos/iaexpertacademy" title="IA Expert Academy">
                </ListItem>
                <ListItem href="/estudos/rocketseat" title="RocketSeat">
                </ListItem>
                <ListItem href="/estudos/digitalhouse" title="Digital House">
                </ListItem>
                <ListItem href="/estudos/mentorialaravelarchitect" title="Mentoria Laravel Architect">
                </ListItem>
              </ul>
            </NavigationMenu.Content>
          </NavigationMenu.Item>

          <NavigationMenu.Item>
            <NavigationMenu.Trigger className="NavigationMenuTrigger">
              Projetos <CaretDownIcon className="CaretDown" aria-hidden />
            </NavigationMenu.Trigger>
            <NavigationMenu.Content className="NavigationMenuContent">
              <ul className="List one">
                <ListItem title="Laravel" href="/projetos/laravel">
                </ListItem>
                <ListItem title="React" href="/projetos/react">
                </ListItem>
                <ListItem title="Vue" href="/projetos/vue">
                </ListItem>
                <ListItem title="HTML/CSS" href="/projetos/html_css">
                </ListItem>
              </ul>
            </NavigationMenu.Content>
          </NavigationMenu.Item>

          <NavigationMenu.Item>
            <NavigationMenu.Link className="NavigationMenuLink" href="https://www.linkedin.com/in/victordasilvafernandes/">
              Linkedin
            </NavigationMenu.Link>
          </NavigationMenu.Item>

          <NavigationMenu.Item>
            <NavigationMenu.Link className="NavigationMenuLink" href="https://github.com/VictordaSilvaf">
              Github
            </NavigationMenu.Link>
          </NavigationMenu.Item>

          <NavigationMenu.Indicator className="NavigationMenuIndicator">
            <div className="Arrow" />
          </NavigationMenu.Indicator>
        </NavigationMenu.List>

        <div className="ViewportPosition">
          <NavigationMenu.Viewport className="NavigationMenuViewport" />
        </div>
      </NavigationMenu.Root>
    </>
  );
};

interface ListItemProps {
  className?: string;
  title: string;
  href: string;
  children: React.ReactNode;
}

const ListItem = React.forwardRef(({ className, children, title, ...props }: ListItemProps, forwardedRef) => (
  <li>
    <NavigationMenu.Link asChild>
      <a className={classNames('ListItemLink', className)} {...props} >
        <div className="ListItemHeading">{title}</div>
        <p className="ListItemText">{children}</p>
      </a>
    </NavigationMenu.Link>
  </li>
));