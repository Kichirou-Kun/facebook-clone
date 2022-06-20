import React, { SVGProps } from 'react';

interface Props {
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
}

const WidgetIcons = ({ Icon }: Props) => {
  return (
    <div className='flex items-center bg-gray-1 rounded-full p-2 cursor-pointer'>
      <Icon className='w-6 h-6 xl:h-5 xl:w-5 text-primary'/>
    </div>
  );
};

export default WidgetIcons;
