import React from 'react';
interface Props {
  Icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
  name: string;
  onClick?: () => {};
}

const SidebarRow = ({ Icon, name, onClick }: Props) => {
  return (
    <div
      className="flex max-w-fit items-center space-x-2 px-4 py-3 rounded-full cursor-pointer transition-all duration-200 hover:bg-gray-1 group"
      onClick={() => onClick?.()}
    >
      <Icon className="w-6 h-6 text-gray-3" />
      <p className=" hidden lg:inline-block text-base xl:text-lg text-gray-3 font-semibold">
        {name}
      </p>
    </div>
  );
};

export default SidebarRow;
