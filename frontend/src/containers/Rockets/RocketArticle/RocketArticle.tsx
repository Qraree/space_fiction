import React from 'react';
import styles from './RocketArticle.module.scss';

interface RocketArticleProps {
    img: string,
    title: string,
}


const RocketArticle = () => {
    return (
        <>
            <div className={styles.info}>
                <div className={styles.image}>

                </div>
                <table className={styles.table}>
                    <tr className={styles.row}>
                        <td colSpan={2} className={styles.titleCell}>
                            <h4 className={styles.tableRowTitle}>Info</h4>
                        </td>
                    </tr>
                    <tr className={styles.tableRow}>
                        <td>Country</td>
                        <td>USA</td>
                    </tr>
                    <tr className={styles.row}>
                        <td colSpan={2} className={styles.titleCell}>
                            <h4 className={styles.tableRowTitle}>Technical Details</h4>
                        </td>
                    </tr>
                    <tr className={styles.tableRow}>
                        <td>Length</td>
                        <td>12000m</td>
                    </tr>
                    <tr className={styles.tableRow}>
                        <td>Width</td>
                        <td>12000m</td>
                    </tr>
                </table>
            </div>
            <h2>Hello</h2>
            <hr />
            <p className={styles.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec enim augue, dignissim id libero vel, eleifend porta elit. Ut ut varius tellus, a accumsan nulla. Nulla facilisi. Nam vel nulla quis augue ultricies hendrerit. Curabitur non ullamcorper lectus, lacinia pulvinar felis. Vestibulum orci enim, auctor non erat vitae, fringilla sagittis sem. Nulla ultricies ultricies velit sit amet ultricies. Morbi sodales ullamcorper interdum. Nunc ultrices porttitor ipsum ac varius. Nam feugiat sapien massa, eu posuere quam gravida non.

                Ut semper eleifend enim, eu iaculis ligula iaculis posuere. Curabitur at blandit turpis. Proin ut dictum massa, quis varius ligula. Curabitur ullamcorper et ex eget consectetur. Sed id ipsum risus. Nullam porttitor ante sit amet neque egestas, quis aliquet ligula porta. Cras tortor turpis, vestibulum sed consequat et, venenatis quis dui. Suspendisse tincidunt arcu a est accumsan, in venenatis tellus porttitor. Sed tellus diam, dictum ac nisl sit amet, convallis hendrerit massa. Donec pulvinar ligula vitae justo ornare, at ultrices metus sodales. Nullam sapien leo, fringilla et vestibulum at, euismod mollis libero. Pellentesque vitae mauris mi. Aliquam vel leo nibh.

                Donec cursus diam at ligula convallis fringilla. Etiam hendrerit risus non nulla tempus, nec cursus neque sodales. Donec sit amet aliquet nisl. Praesent pellentesque tellus et ligula auctor placerat ut quis massa. Mauris tincidunt lacinia ullamcorper. Sed vel magna quis ligula vehicula placerat. Sed molestie feugiat purus, id finibus nibh faucibus vel. Nam dictum non leo non pellentesque. Aliquam ullamcorper metus purus, quis ornare urna rutrum sed. Fusce a dignissim tellus, in vestibulum justo. Proin in viverra massa. Quisque nec quam in sem mattis luctus sed id lacus. Mauris lectus eros, laoreet et tortor vitae, aliquet tristique arcu.

                Sed elit dui, aliquam in massa non, vehicula consequat nisi. Maecenas mauris mi, efficitur sed suscipit in, dignissim vitae dolor. In eu vehicula dolor. Etiam iaculis at dui at ultrices. Nam neque lacus, pretium in sollicitudin id, molestie euismod ligula. Etiam blandit tortor eget enim sodales, aliquet pretium nisi luctus. Vivamus molestie elit vitae sodales faucibus. Quisque porta consectetur ante in pharetra. Duis sit amet lorem feugiat, vehicula nulla vel, facilisis ipsum.

                Proin ac condimentum urna. Nam hendrerit eleifend diam in ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus bibendum, lorem nec sollicitudin porttitor, magna metus auctor velit, et placerat purus nunc ultrices tellus. Integer ac augue auctor, consequat nisl a, imperdiet ex. Vestibulum vitae sodales purus. Pellentesque vitae ipsum aliquet, dignissim urna in, porttitor libero. Cras tortor eros, vehicula quis sem ac, molestie ultricies ligula.
            </p>
            <h3>History</h3>
            <hr />
            <p className={styles.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec enim augue, dignissim id libero vel, eleifend porta elit. Ut ut varius tellus, a accumsan nulla. Nulla facilisi. Nam vel nulla quis augue ultricies hendrerit. Curabitur non ullamcorper lectus, lacinia pulvinar felis. Vestibulum orci enim, auctor non erat vitae, fringilla sagittis sem. Nulla ultricies ultricies velit sit amet ultricies. Morbi sodales ullamcorper interdum. Nunc ultrices porttitor ipsum ac varius. Nam feugiat sapien massa, eu posuere quam gravida non.

                Ut semper eleifend enim, eu iaculis ligula iaculis posuere. Curabitur at blandit turpis. Proin ut dictum massa, quis varius ligula. Curabitur ullamcorper et ex eget consectetur. Sed id ipsum risus. Nullam porttitor ante sit amet neque egestas, quis aliquet ligula porta. Cras tortor turpis, vestibulum sed consequat et, venenatis quis dui. Suspendisse tincidunt arcu a est accumsan, in venenatis tellus porttitor. Sed tellus diam, dictum ac nisl sit amet, convallis hendrerit massa. Donec pulvinar ligula vitae justo ornare, at ultrices metus sodales. Nullam sapien leo, fringilla et vestibulum at, euismod mollis libero. Pellentesque vitae mauris mi. Aliquam vel leo nibh.

                Donec cursus diam at ligula convallis fringilla. Etiam hendrerit risus non nulla tempus, nec cursus neque sodales. Donec sit amet aliquet nisl. Praesent pellentesque tellus et ligula auctor placerat ut quis massa. Mauris tincidunt lacinia ullamcorper. Sed vel magna quis ligula vehicula placerat. Sed molestie feugiat purus, id finibus nibh faucibus vel. Nam dictum non leo non pellentesque. Aliquam ullamcorper metus purus, quis ornare urna rutrum sed. Fusce a dignissim tellus, in vestibulum justo. Proin in viverra massa. Quisque nec quam in sem mattis luctus sed id lacus. Mauris lectus eros, laoreet et tortor vitae, aliquet tristique arcu.

                Sed elit dui, aliquam in massa non, vehicula consequat nisi. Maecenas mauris mi, efficitur sed suscipit in, dignissim vitae dolor. In eu vehicula dolor. Etiam iaculis at dui at ultrices. Nam neque lacus, pretium in sollicitudin id, molestie euismod ligula. Etiam blandit tortor eget enim sodales, aliquet pretium nisi luctus. Vivamus molestie elit vitae sodales faucibus. Quisque porta consectetur ante in pharetra. Duis sit amet lorem feugiat, vehicula nulla vel, facilisis ipsum.

                Proin ac condimentum urna. Nam hendrerit eleifend diam in ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus bibendum, lorem nec sollicitudin porttitor, magna metus auctor velit, et placerat purus nunc ultrices tellus. Integer ac augue auctor, consequat nisl a, imperdiet ex. Vestibulum vitae sodales purus. Pellentesque vitae ipsum aliquet, dignissim urna in, porttitor libero. Cras tortor eros, vehicula quis sem ac, molestie ultricies ligula.
            </p>
        </>
    );
};

export default RocketArticle;
