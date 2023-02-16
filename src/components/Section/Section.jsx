import PropTypes from 'prop-types';
import { Title } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <>
      {{ title } && <Title>{title}</Title>}
      {children}
    </>
  );
};

Section.protoTypes = {
  title: PropTypes.string,
  children: PropTypes.object,
};

export default Section;
