import React, {FC} from 'react';


interface IHeaderProps {
  className?: string
  fixed?: boolean
  children: any
}

const Header: FC<IHeaderProps> = ({className, children, fixed}: IHeaderProps) => {
  return (
    <header className={`header ${fixed ? 'header--fixed' : ''} ${className ? className : ''}`.trim()}>
      {children}
    </header>
  );
};

export default Header;