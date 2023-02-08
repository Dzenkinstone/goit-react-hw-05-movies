import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from './SharedLayout.styled';
import { Header } from './SharedLayout.styled';
import { Navigation } from './SharedLayout.styled';
import { Link } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <Navigation>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">Movies</Link>
        </Navigation>
      </Header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default SharedLayout;
