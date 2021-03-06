import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import CustomAppBar from '../components/CustomAppBar';

const styles = {
  root: {
    width: '100%',
  },
};

function Question({ match }) {
  return (
    <div>
      <CustomAppBar />
      <h3>Question: Message {match.params.id}</h3>
    </div>
  );
}

Question.propTypes = {
  match: PropTypes.object.isRequired,
};

export default withStyles(styles)(Question);
