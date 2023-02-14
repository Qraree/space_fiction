import React from 'react';
import styles from './TabPanel.module.scss';

interface TabPanelProps {
    value: number;
    index: number;
    children?: React.ReactNode;
}

const TabPanel = (props: TabPanelProps) => {
    const { children, value, index, ...other } = props;

    return (
        <div
            className={styles.panelWrapper}
            hidden={value !== index}
            {...other}
        >
            {value === index && (
                <div>
                    {children}
                </div>
            )}
        </div>
    );
};

export default TabPanel;
