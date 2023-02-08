import { BsArrowLeftShort } from 'react-icons/bs';

import { NavLink } from 'react-router-dom';
import { Button } from './BackButton.styled';

export const BackButton = ({ location }) => {
  console.log(location);
  return (
    <>
      <NavLink to={`${location}`}>
        <Button>
          <BsArrowLeftShort />
          Back
        </Button>
      </NavLink>
    </>
  );
};
