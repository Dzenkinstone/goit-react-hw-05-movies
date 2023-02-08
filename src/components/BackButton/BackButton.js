import { BsArrowLeftShort } from 'react-icons/bs';

import { NavLink } from 'react-router-dom';
import { Button } from './BackButton.styled';

export const BackButton = ({ backLinkHref }) => {
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
