import * as React from 'react';
import * as PropTypes from 'prop-types';

import { mergeClassNames } from '../../../common/utils/ClassNameMerge';

export const ChevronLeft = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className={mergeClassNames('w-3', className)}
  >
    <path
      fillRule="evenodd"
      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
      clipRule="evenodd"
    />
  </svg>
);

ChevronLeft.propTypes = {
  className: PropTypes.string,
};

ChevronLeft.defaultProps = {
  className: '',
};