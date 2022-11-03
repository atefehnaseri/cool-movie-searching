import React, {FC, ReactNode, useState} from 'react';
import Header from "../Header";
import Footer from "../Footer";
import {Collapse, Container, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink} from 'reactstrap';

interface ILayoutProps {
  children: ReactNode
}

const Layout: FC<ILayoutProps> = ({children}: ILayoutProps) => {

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <Header>
        <Navbar expand="md" container color="danger">
          <NavbarBrand href="/">CMSearch</NavbarBrand>
          <NavbarToggler onClick={toggle}/>
          <Collapse isOpen={isOpen} navbar>
            <Nav className="me-auto" navbar>
              <NavItem>
                <NavLink href="/watch-later">watch later</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/favorites">
                  my favorites
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </Header>
      <section>
        <Container className="py-5 min-vh-100">
          {children}
        </Container>
      </section>
      <Footer fixed className="text-bg-danger text-center py-3 text-black">
        © 2022 CMSearch. All Rights Reserved.
      </Footer>
    </div>
  );
};

export default Layout;