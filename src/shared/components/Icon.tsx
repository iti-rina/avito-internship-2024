import React from 'react';
import { Space } from 'antd';

interface IconProps {
  icon: React.FC,
  textForIcon: string
}

const Icon: React.FC<IconProps> = ({ icon, textForIcon }) => {
  return (
    <Space>
      {React.createElement(icon)}
      {textForIcon}
    </Space>
  );
}

export default Icon;