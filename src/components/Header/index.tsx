import React from 'react';
import {
    Stack, 
    IStackTokens, 
    getTheme, 
    FontIcon, 
    mergeStyles, 
    Text, 
    ITextProps,
    Persona, 
    IPersonaSharedProps, 
    PersonaPresence, 
    ISearchBoxStyles,
    SearchBox,
    IButtonProps,
    CommandBar,
    ICommandBarItemProps} from '@fluentui/react'
    import { TestImages } from '@uifabric/example-data';
    // import { Container } from './styles';
    const theme = getTheme();  
    const searchBoxStyles: Partial <ISearchBoxStyles> = { root: { width: 300, marginLeft: 10, marginRight: 10 } };

const overflowProps: IButtonProps = { ariaLabel: 'More commands'};

const _items: ICommandBarItemProps[] = [
    {
      key: 'newItem',
      text: 'New',
      cacheKey: 'myCacheKey', // changing this key will invalidate this item's cache
      iconProps: { iconName: 'Add'},
      subMenuProps: {
        items: [
          {
            key: 'emailMessage',
            text: 'Email message',
            iconProps: { iconName: 'Mail' },
            ['data-automation-id']: 'newEmailButton', // optional
          },
          {
            key: 'calendarEvent',
            text: 'Calendar event',
            iconProps: { iconName: 'Calendar' },
          },
        ],
      },
    },
    {
      key: 'upload',
      text: 'Upload',
      iconProps: { iconName: 'Upload' },
      onClick: () => console.log('Upload')
    },
    {
      key: 'share',
      text: 'Share',
      iconProps: { iconName: 'Share' },
      onClick: () => console.log('Share'),
    },
    {
      key: 'download',
      text: 'Download',
      iconProps: { iconName: 'Download' },
      onClick: () => console.log('Download'),
    },
  ];
  
  const _overflowItems: ICommandBarItemProps[] = [
    { key: 'move', text: 'Move to...', onClick: () => console.log('Move to'), iconProps: { iconName: 'MoveToFolder' } },
    { key: 'copy', text: 'Copy to...', onClick: () => console.log('Copy to'), iconProps: { iconName: 'Copy' } },
    { key: 'rename', text: 'Rename...', onClick: () => console.log('Rename'), iconProps: { iconName: 'Edit' } },
  ];
  
  const _farItems: ICommandBarItemProps[] = [
    {
      key: 'tile',
      text: 'Grid view',
      // This needs an ariaLabel since it's icon-only
      ariaLabel: 'Grid view',
      iconOnly: true,
      iconProps: { iconName: 'Tiles' },
      onClick: () => console.log('Tiles'),
    },
    {
      key: 'info',
      text: 'Info',
      // This needs an ariaLabel since it's icon-only
      ariaLabel: 'Info',
      iconOnly: true,
      iconProps: { iconName: 'Info' },
      onClick: () => console.log('Info'),
    },
  ];


const stackTokens : IStackTokens = {
    padding: 8,
    maxWidth: '100%'
}; 
// const iconClass = mergeStyles({
//     fontSize: 50,
//     height: 50,
//     width: 50,
//     margin: '0 25px',
//   });
  const examplePersona: IPersonaSharedProps = {
    imageUrl: TestImages.personaMale,
    imageInitials: 'AL',
    text: 'Annie Lindqvist',
    secondaryText: 'Software Engineer',
    tertiaryText: 'In a meeting',
    optionalText: 'Available at 4:00pm',
  };
const Header: React.FC = () => {
    return (
    
    <Stack
        horizontal
        horizontalAlign={'space-between'}
        verticalAlign={'center'}
        styles={{
            root: {
                width: '100vw',
                height: '60px',
                background: theme.palette.blue
            }            
        }}
        tokens={stackTokens}>
            
        <Text 
        variant={"xLarge"} 
        styles={{
            root:{
                color:'#fff'
                }
        }}>
            MD_Project
        </Text>

        <Stack 
        horizontal
        verticalAlign="center"
        horizontalAlign="space-between"
        styles={{
            root:{
                width: '100%',
                paddingRight: '8px',
                paddingLeft: '8px',
            }
        }}
        >

        <SearchBox
            styles={searchBoxStyles}
            placeholder="Search"
            onEscape={ev => {
            console.log('Custom onEscape Called');
            }}
            onClear={ev => {
            console.log('Custom onClear Called');
            }}
            onChange={(_, newValue) => console.log('SearchBox onChange fired: ' + newValue)}
            onSearch={newValue => console.log('SearchBox onSearch fired: ' + newValue)}
        />
        <CommandBar
        items={_items}
        overflowItems={_overflowItems}
        overflowButtonProps={overflowProps}
        farItems={_farItems}
        ariaLabel="Use left and right arrow keys to navigate between commands"
      />
        </Stack>

        <Persona
        {...examplePersona}
        hidePersonaDetails={false}
        presence={PersonaPresence.online}
        imageAlt="Annie Lindqvist, status is busy"
        styles={{
            root:{
                // marginRight: '8px',
                width: '220px'
            }
        }}
      />
    </Stack>
  );
}

export default Header;