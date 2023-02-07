import React from 'react';
import classNames from 'classnames';

type ButtonProps = {
    children?: React.ReactNode;
    className: string;
}

const Button = (props: ButtonProps) => {
    const { className, ...restProps } = props;


    return (
        <button
            className={classNames({
                [className]: className
            })}
            {...restProps}
        />
    );
};

export default Button;
