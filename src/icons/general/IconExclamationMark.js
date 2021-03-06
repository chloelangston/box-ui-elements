// @flow
import * as React from 'react';

import AccessibleSVG from '../accessible-svg';

type Props = {
    className?: string,
    color?: string,
    height?: number,
    /** A text-only string describing the icon if it's not purely decorative for accessibility */
    title?: string | React.Element<any>,
    width?: number,
};

const IconExclamationMark = ({ className = '', color = '#999', height = 20, title, width = 20 }: Props) => (
    <AccessibleSVG
        className={`icon-exclamation-mark ${className}`}
        height={height}
        title={title}
        viewBox="0 0 20 20"
        width={width}
    >
        <path
            className="fill-color"
            d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-16a1 1 0 0 0-1 1v6a1 1 0 1 0 2 0V5c0-.6-.4-1-1-1zm0 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
            fill={color}
            fillRule="nonzero"
        />
    </AccessibleSVG>
);

export default IconExclamationMark;
