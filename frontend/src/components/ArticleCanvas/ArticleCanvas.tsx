import React from 'react';
import styles from './ArticleCanvas.module.scss';
import {Property} from 'csstype';
import Float = Property.Float;

type ArticleCanvasProps = {
    float?: Float;
    children: React.ReactNode;
}

const ArticleCanvas = ({float, children}: ArticleCanvasProps) => {
    return (
        <div className={styles.wrapper} style={{float: float}}>
            {children}
        </div>
    );
};

export default ArticleCanvas;