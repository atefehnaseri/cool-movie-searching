import React, {FC} from "react";
import './styles.css';

interface IFooterProps {
  className?: string
  fixed?: boolean
  children: any
}

const Footer: FC<IFooterProps> = ({className, children, fixed}: IFooterProps) => {

    return (
      <footer className={`footer ${fixed ? 'footer--fixed' : ''} ${className ? className : ''}`.trim()}>
        {children}
      </footer>
    )
  }
;

export default Footer;