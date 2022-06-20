import React, { SVGProps } from 'react';
type Props = {
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  active?: boolean;
};

const MainFeedIcons = ({ Icon, active }: Props) => {
  return (
    <div className='group rounded-lg cursor-pointer w-full flex py-3 justify-center hover:bg-gray-1'>
      <Icon className={`w-6 h-6 ${active ? 'text-facebook' : 'text-gray-3'}`} />
    </div>
  );
};

export default MainFeedIcons;
