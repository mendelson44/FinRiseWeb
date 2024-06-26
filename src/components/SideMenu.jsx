import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import ReceiptIcon from '@mui/icons-material/Receipt';

const items = [
  {
    key: '1',
    icon: <AppstoreOutlined />,
    label: 'Lobi',
    children: [
      {
        key: '11',
        label: 'Documents',
      },
      {
        key: '12',
        label: 'My Customers',
      },
      {
        key: '13',
        label: 'Reports',
      },
    ],
  },
  {
    key: '2',
    icon: <ReceiptIcon style={{ fontSize: 'large' }} />,
    label: 'Income',
    children: [
      {
        key: '21',
        label: 'Option 1',
      },
      {
        key: '22',
        label: 'Option 2',
      },
      {
        key: '23',
        label: 'Submenu',
        children: [
          {
            key: '231',
            label: 'Option 1',
          },
          {
            key: '232',
            label: 'Option 2',
          },
          {
            key: '233',
            label: 'Option 3',
          },
        ],
      },
      {
        key: '24',
        label: 'Submenu 2',
        children: [
          {
            key: '241',
            label: 'Option 1',
          },
          {
            key: '242',
            label: 'Option 2',
          },
          {
            key: '243',
            label: 'Option 3',
          },
        ],
      },
    ],
  },
  {
    key: '3',
    icon: <PointOfSaleIcon style={{ fontSize: 'large' }} />,
    label: 'Expenses',
    children: [
      {
        key: '31',
        label: 'Option 1',
      },
      {
        key: '32',
        label: 'Option 2',
      },
      {
        key: '33',
        label: 'Option 3',
      },
      {
        key: '34',
        label: 'Option 4',
      },
    ],
  },

  {
    key: '4',
    icon: <SettingOutlined />,
    label: 'Settings',
    children: [
      {
        key: '31',
        label: 'Profil',
      },
      {
        key: '32',
        label: 'Option 2',
      },
      {
        key: '33',
        label: 'Option 3',
      },
      {
        key: '34',
        label: 'Option 4',
      },
    ],
  },

  
  
];

const getLevelKeys = (items1) => {
  const key = {};
  const func = (items2, level = 1) => {
    items2.forEach((item) => {
      if (item.key) {
        key[item.key] = level;
      }
      if (item.children) {
        func(item.children, level + 1);
      }
    });
  };
  func(items1);
  return key;
};

const levelKeys = getLevelKeys(items);

const SideMenu = () => {
  const [stateOpenKeys, setStateOpenKeys] = useState(['2', '23']);

  const onOpenChange = (openKeys) => {
    const currentOpenKey = openKeys.find((key) => stateOpenKeys.indexOf(key) === -1);

    // open
    if (currentOpenKey !== undefined) {
      const repeatIndex = openKeys
        .filter((key) => key !== currentOpenKey)
        .findIndex((key) => levelKeys[key] === levelKeys[currentOpenKey]);
      setStateOpenKeys(
        openKeys
          // remove repeat key
          .filter((_, index) => index !== repeatIndex)
          // remove current level all child
          .filter((key) => levelKeys[key] <= levelKeys[currentOpenKey]),
      );
    } else {
      // close
      setStateOpenKeys(openKeys);
    }
  };

  return (
    <Menu
      mode="inline"
      defaultSelectedKeys={['231']}
      openKeys={stateOpenKeys}
      onOpenChange={onOpenChange}
      style={{
        width: 256,
      }}
    >
      {items.map((item) => (
        <Menu.SubMenu key={item.key} icon={item.icon} title={item.label}>
          {item.children.map((child) => (
            <Menu.Item key={child.key}>
              {child.key === '12' ? ( // Check if key is '11' to add Link
                <Link to="/customerlist">{child.label}</Link>
              ) : (
                child.label
              )}
            </Menu.Item>
          ))}
        </Menu.SubMenu>
      ))}
    </Menu>
  );
};

export default SideMenu;
