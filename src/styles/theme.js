const blue = '#07c';

const colors = {
  DARK_BLUE: '#0a2239',
  PRIMARY_BLUE: '#0d63a6',
};

export default {
  buttons: {
    primary: {
      color: '#fff',
      backgroundColor: blue,
    },
    outline: {
      color: blue,
      backgroundColor: 'transparent',
      boxShadow: 'inset 0 0 0 2px',
    },
    transparent: {
      backgroundColor: 'transparent',
      color: colors.DARK_BLUE,
      border: '1px solid transparent',
      fontWeight: '600',
      '&:hover': {
        backgroundColor: 'transparent',
        color: colors.PRIMARY_BLUE,
      },
      '&:focus': {
        backgroundColor: 'transparent',
        outline: 'none',
      },
      '&:active': {
        backgroundColor: 'transparent',
        color: colors.PRIMARY_BLUE,
      },
      '&.dropdown-open': {
        color: colors.PRIMARY_BLUE,
      },
    },
  },
};
