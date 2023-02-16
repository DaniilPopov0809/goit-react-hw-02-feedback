import PropTypes from 'prop-types';
import camelCase from 'camelcase';
import { ButtonList, Button, ButtonItem } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonList>
      {options.map(option => {
        return (
          <ButtonItem key={option}>
            <Button type="button" onClick={() => onLeaveFeedback(option)}>
              {camelCase(option, { pascalCase: true })}
            </Button>
          </ButtonItem>
        );
      })}
    </ButtonList>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
