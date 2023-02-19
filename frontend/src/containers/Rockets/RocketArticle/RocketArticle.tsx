import React, {Suspense} from 'react';
import styles from './RocketArticle.module.scss';
import {useRouter} from 'next/router';
import {Canvas} from '@react-three/fiber';
import Model from '@/components/models/planets/Model';
import {Environment, OrbitControls} from '@react-three/drei';

interface RocketArticleProps {
    img: string,
    title: string,
}


const RocketArticle = () => {

    const router = useRouter();

    return (
        <div className={styles.container}>
            <div className={styles.rocketCanvasWrapper}>
                <div className={styles.rocketCanvas}>
                    <Canvas>
                        <Suspense fallback={null}>
                            <Model />
                            <Environment preset="city" />
                        </Suspense>
                        <OrbitControls autoRotate />
                    </Canvas>
                </div>
            </div>
            <div className={styles.wrapper}>
                <h1>Saturn</h1>
                <hr />
                <br />
                <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer felis velit, hendrerit sed mi sit amet,</div><p> dignissim volutpat nibh. Sed posuere aliquet nibh, ut sodales neque euismod quis. Nam tincidunt laoreet arcu ut semper. Vestibulum tristique nulla sit amet consectetur feugiat. Vivamus dapibus a lorem tempor bibendum. Sed nec quam a ante bibendum cursus id sit amet ipsum. Sed at ultricies mi. Praesent pretium massa in eros viverra, vitae ultrices est viverra. Sed ac pellentesque erat, ut accumsan leo. Aenean id velit felis. Vestibulum et eros auctor, vestibulum dolor sed, eleifend quam. Nam ornare mi eget purus ultrices tristique. </p><p>Vestibulum id laoreet justo. Morbi ac turpis augue. In tincidunt mi nec dui ultricies facilisis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque vitae tortor semper, malesuada elit mollis, accumsan risus. Nulla massa sapien, pulvinar vel laoreet sed, euismod et dui. Donec tempor felis sit amet sem imperdiet tincidunt. Fusce fermentum, lorem ut dapibus sollicitudin, lectus mauris rhoncus libero, quis luctus turpis elit at nunc. Suspendisse tristique eleifend purus ut fringilla. Mauris tempor odio et turpis facilisis, at mollis orci ullamcorper. Nam vel arcu tellus. Ut at eros vel erat lacinia finibus. Donec nec velit posuere, consectetur nisi in, dapibus urna. Pellentesque lectus dolor, aliquam ut erat ac, ornare imperdiet lorem. Aliquam dictum, nulla quis porta tempus, massa tortor elementum nisi, in auctor tellus nisi ac tortor. Donec quis tellus non mi vestibulum eleifend et id lorem. Phasellus consectetur, odio in tempor vulputate, elit augue aliquam erat, sit amet scelerisque libero arcu at metus. </p><p>Ut luctus, felis hendrerit sagittis consectetur, leo risus mollis nibh, non posuere velit nunc eget metus. Praesent congue augue lacus, eu finibus ipsum volutpat ut. Aenean sit amet diam faucibus, consequat erat quis, finibus risus. Ut nec eros eget nisl blandit fringilla. Morbi gravida aliquet semper. Ut a gravida sem. Integer vehicula facilisis viverra. Vestibulum lobortis velit sit amet consequat dapibus. Morbi vitae mi nec nibh vestibulum imperdiet non ut augue. Quisque ullamcorper, dolor sed faucibus condimentum, libero sem interdum ipsum, at varius purus arcu non velit. Aenean quis laoreet nibh. Praesent vitae nisl sed orci accumsan pharetra. Fusce in lacinia mi, non faucibus mi. Aliquam sodales, sapien id iaculis interdum, purus felis varius odio, ac fringilla felis eros convallis metus. Praesent a molestie sem, nec hendrerit mauris. Praesent euismod erat leo, fringilla faucibus nulla blandit ut. Proin mi ipsum, finibus vel feugiat et, pharetra sed erat. Pellentesque laoreet dolor a convallis semper. Curabitur et </p><div>ligula mauris. Ut volutpat sit amet sapien quis euismod.
                </div>
                <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer felis velit, hendrerit sed mi sit amet, dignissim volutpat nibh. Sed posuere aliquet nibh, ut sodales neque euismod quis. Nam tincidunt laoreet arcu ut semper. Vestibulum tristique nulla sit amet consectetur feugiat. Vivamus dapibus a lorem tempor bibendum. Sed nec quam a ante bibendum cursus id sit amet ipsum. Sed at ultricies mi. Praesent pretium massa in eros viverra, vitae ultrices est viverra. Sed ac pellentesque erat, ut accumsan leo. Aenean id velit felis. Vestibulum et eros auctor, vestibulum dolor sed, eleifend quam. Nam ornare mi eget purus ultrices tristique. </div><p>Vestibulum id laoreet justo. Morbi ac turpis augue. In tincidunt mi nec dui ultricies facilisis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque vitae tortor semper, malesuada elit mollis, accumsan risus. Nulla massa sapien, pulvinar vel laoreet sed, euismod et dui. Donec tempor felis sit amet sem imperdiet tincidunt. Fusce fermentum, lorem ut dapibus sollicitudin, lectus mauris rhoncus libero, quis luctus turpis elit at nunc. Suspendisse tristique eleifend purus ut fringilla. Mauris tempor odio et turpis facilisis, at mollis orci ullamcorper. Nam vel arcu tellus. Ut at eros vel erat lacinia finibus. Donec nec velit posuere, consectetur nisi in, dapibus urna. Pellentesque lectus dolor, aliquam ut erat ac, ornare imperdiet lorem. Aliquam dictum, nulla quis porta tempus, massa tortor elementum nisi, in auctor tellus nisi ac tortor. Donec quis tellus non mi vestibulum eleifend et id lorem. Phasellus consectetur, odio in tempor vulputate, elit augue aliquam erat, sit amet scelerisque libero arcu at metus. Ut luctus, felis hendrerit sagittis consectetur, leo risus mollis nibh, non posuere velit nunc eget metus. Praesent congue augue lacus, eu finibus ipsum volutpat ut. Aenean sit amet diam faucibus, consequat erat quis, finibus risus. Ut nec eros eget nisl blandit fringilla. Morbi gravida aliquet semper. Ut a gravida sem. Integer vehicula facilisis viverra. Vestibulum lobortis velit sit amet consequat dapibus. Morbi vitae mi nec nibh vestibulum imperdiet non ut augue. Quisque ullamcorper, dolor sed faucibus condimentum, libero sem interdum ipsum, at varius purus arcu non velit. Aenean quis laoreet nibh. Praesent vitae nisl sed orci accumsan pharetra. Fusce in lacinia mi, non faucibus mi. Aliquam sodales, sapien id iaculis interdum, purus felis varius odio, ac fringilla felis eros convallis metus. Praesent a molestie sem, nec hendrerit mauris. Praesent euismod erat leo, fringilla faucibus nulla blandit ut. Proin mi ipsum, finibus vel feugiat et, pharetra sed erat. Pellentesque laoreet dolor a convallis semper.</p><div> Curabitur et ligula mauris. Ut volutpat sit amet sapien quis euismod.
                </div>
            </div>
            <div className={styles.rocketInfoWrapper}>
                <div className={styles.rocketInfo}>
                    <table className={styles.table}>
                        <tbody>
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
                            <tr className={styles.row}>
                                <td colSpan={2} className={styles.titleCell}>
                                    <h4 className={styles.tableRowTitle}>Info</h4>
                                </td>
                            </tr>
                            <tr className={styles.tableRow}>
                                <td>Country</td>
                                <td>USA</td>
                            </tr>
                            <tr className={styles.tableRow}>
                                <td>Length</td>
                                <td>12000m</td>
                            </tr>
                            <tr className={styles.tableRow}>
                                <td>Width</td>
                                <td>12000m</td>
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
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default RocketArticle;
