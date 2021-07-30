import React from 'react';

const OptionsIcon = ({ classes, width = '4', color = '#C3CAD9' }) => (
    <svg className={classes} width={width} viewBox="0 0 4 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0 8C0 8.53043 0.210714 9.03914 0.585787 9.41421C0.96086 9.78929 1.46957 10 2 10C2.53043 10 3.03914 9.78929 3.41421 9.41421C3.78929 9.03914 4 8.53043 4 8C4 7.46957 3.78929 6.96086 3.41421 6.58579C3.03914 6.21071 2.53043 6 2 6C1.46957 6 0.96086 6.21071 0.585787 6.58579C0.210714 6.96086 0 7.46957 0 8ZM0 2C0 2.53043 0.210714 3.03914 0.585787 3.41421C0.96086 3.78929 1.46957 4 2 4C2.53043 4 3.03914 3.78929 3.41421 3.41421C3.78929 3.03914 4 2.53043 4 2C4 1.46957 3.78929 0.960859 3.41421 0.585786C3.03914 0.210714 2.53043 0 2 0C1.46957 0 0.96086 0.210714 0.585787 0.585786C0.210714 0.960859 0 1.46957 0 2V2ZM0 14C0 14.5304 0.210714 15.0391 0.585787 15.4142C0.96086 15.7893 1.46957 16 2 16C2.53043 16 3.03914 15.7893 3.41421 15.4142C3.78929 15.0391 4 14.5304 4 14C4 13.4696 3.78929 12.9609 3.41421 12.5858C3.03914 12.2107 2.53043 12 2 12C1.46957 12 0.96086 12.2107 0.585787 12.5858C0.210714 12.9609 0 13.4696 0 14Z"
            fill={color}
        />
    </svg>
);

export default OptionsIcon;
