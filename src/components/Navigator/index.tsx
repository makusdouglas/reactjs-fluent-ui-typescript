import React from 'react';

// import { Container } from './styles';
import {Nav, INavLink, INavStyles, INavLinkGroup, initializeIcons} from '@fluentui/react'
import './styles.css';
const navStyles: Partial<INavStyles> = {
    root: {
      width: 208,
      height: '100vh',
      boxSizing: 'border-box',
      border: '1px solid #eee',
      overflowY: 'auto',
    },
  };

  const navLinkGroups: INavLinkGroup[] = [
    {
      links: [
        {
          name: 'Home',
          url: '',
          expandAriaLabel: 'Expand Home section',
          collapseAriaLabel: 'Collapse Home section',
          links: [
            {
              name: 'Activity',
              url: '',
              key: 'key1',
              target: '_blank',
            },
            {
              name: 'MSN',
              url: '',
              disabled: true,
              key: 'key2',
              target: '_blank',
            },
          ],
          isExpanded: true,
        },
        {
          name: 'Documents',
          url: '',
          key: 'key3',
          isExpanded: true,
          target: '_blank',
        },
        {
          name: 'Pages',
          url: '',
          key: 'key4',
          target: '_blank',
        },
        {
          name: 'Notebook',
          url: '',
          key: 'key5',
          disabled: true,
        },
        {
          name: 'Communication and Media',
          url: '',
          key: 'key6',
          target: '_blank',
        },
        {
          name: 'News',
          url: '',
          icon: 'News',
          key: 'key7',
          target: '_blank',
        },
      ],
    },
  ];

const Navigator: React.FC = () => {
    initializeIcons()
  return <Nav
  onLinkClick={_onLinkClick}
  selectedKey="key2"
  ariaLabel="Nav basic example"
  styles={navStyles}
  groups={navLinkGroups}
/>;
}

function _onLinkClick(ev?: React.MouseEvent<HTMLElement>, item?: INavLink) {
    if (item && item.name === 'News') {
      alert('News link clicked');
    }
  }

export default Navigator;