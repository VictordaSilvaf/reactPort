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

        <NavigationMenu.List className="NavigationMenuList gap-4 text-white">
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
                  CSS-in-JS with best-in-class developer experience.
                </ListItem>
                <ListItem href="/estudos/alura" title="Alura">
                  Beautiful, thought-out palettes with auto dark mode.
                </ListItem>
                <ListItem href="/estudos/iaexpertacademy" title="IA Expert Academy">
                  A crisp set of 15x15 icons, balanced and consistent.
                </ListItem>
                <ListItem href="/estudos/rocketseat" title="Rocket Seat">
                  A crisp set of 15x15 icons, balanced and consistent.
                </ListItem>
                <ListItem href="/estudos/digitalhouse" title="Digital House">
                  A crisp set of 15x15 icons, balanced and consistent.
                </ListItem>
                <ListItem href="/estudos/mentorialaravelarchitect" title="Mentoria Laravel Architect">
                  A crisp set of 15x15 icons, balanced and consistent.
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
                  Build high-quality, accessible design systems and web apps.
                </ListItem>
                <ListItem title="React" href="/projetos/react">
                  A quick tutorial to get you up and running with Radix Primitives.
                </ListItem>
                <ListItem title="Vue" href="/projetos/vue">
                  Unstyled and compatible with any styling solution.
                </ListItem>
                <ListItem title="HTML/CSS" href="/projetos/html_css">
                  Use CSS keyframes or any animation library of your choice.
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