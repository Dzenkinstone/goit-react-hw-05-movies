import { BsArrowLeftShort } from 'react-icons/bs';

import { NavLink } from 'react-router-dom';
import { Button } from './BackButton.styled';

export const BackButton = ({ location }) => {
  console.log(location);
  const backLinkHref = location.state?.from ?? '/products';
  console.log(backLinkHref);
  return (
    <>
      <NavLink to={backLinkHref}>
        <Button>
          <BsArrowLeftShort />
          Back
        </Button>
      </NavLink>
    </>
  );
};
