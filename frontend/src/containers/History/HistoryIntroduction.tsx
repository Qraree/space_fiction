import React, {Suspense} from 'react';
import HistoryQuiz from '@/components/common/HistoryQuiz/HistoryQuiz';
import {HISTORY_QUIZ} from '@/constants/history';
import Model from '@/components/models/planets/Model';
import {Environment, OrbitControls} from '@react-three/drei';
import {Canvas} from '@react-three/fiber';
import {SecondModel} from '@/components/models/planets/SecondModel';
import ArticleCanvas from '@/components/ArticleCanvas/ArticleCanvas';

const HistoryIntroduction = () => {
    return (
        <>
            <h1>Introduction</h1>
            <hr />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nibh ipsum, rhoncus non lorem id, ultricies pretium risus.
                Praesent placerat viverra facilisis. Donec placerat varius faucibus. In vulputate sem libero, scelerisque porta augue bibendum non.
                Curabitur aliquet lobortis massa. Etiam blandit rhoncus condimentum. Maecenas risus turpis, tempus ut vestibulum in, scelerisque ut velit.
                Fusce est urna, condimentum vitae magna non, varius tristique augue. Suspendisse a interdum neque.
                In feugiat quam quam, eu tincidunt lorem fermentum vel. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam feugiat pharetra dapibus.
                Nunc sed sem eget turpis ultricies dapibus ut sed est. In efficitur blandit ullamcorper.
                Suspendisse mollis lacus at purus ornare, id fringilla purus facilisis. Vivamus eget pretium risus.
            </p>
            <ArticleCanvas float="right">
                {/*<Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 50 }}>*/}
                {/*    <Suspense fallback={null}>*/}
                {/*        <SecondModel />*/}
                {/*        <Environment preset="city" />*/}
                {/*    </Suspense>*/}
                {/*    <OrbitControls autoRotate />*/}
                {/*</Canvas>*/}
            </ArticleCanvas>
            <p>
                Integer blandit feugiat massa nec tempor. Quisque eu faucibus justo. Phasellus mi eros, blandit vitae mauris nec, convallis sagittis sapien. Fusce lacus est, vulputate ac pulvinar nec, accumsan id dolor.
                Nullam ut est massa. Sed et quam ut leo mattis dictum. Sed vulputate porta sem. Fusce porttitor vel lorem non faucibus.
                Aenean finibus ut elit in porta. Donec urna ex, luctus a blandit vitae, consectetur sit amet arcu. In tempor a elit ut accumsan.
                Morbi sagittis, enim ac suscipit convallis, magna sem convallis nunc, ut aliquam urna purus eu dui.
                Etiam ullamcorper turpis porta, varius mi hendrerit, ultrices mauris. Vivamus interdum, quam sed convallis scelerisque, mi ipsum porta diam, sit amet mattis ex mi sit amet arcu. Phasellus ut lorem magna.
                Proin diam ante, euismod in eleifend vel, ullamcorper a sem. Maecenas et tellus congue, efficitur purus quis, rutrum risus.
                Donec imperdiet rhoncus metus in iaculis. Cras euismod lectus interdum lacinia lacinia.
                Ut facilisis vestibulum bibendum. Fusce sem enim, blandit a imperdiet id, mattis quis augue. Sed id arcu mollis risus elementum varius.
                Etiam nec turpis id diam sollicitudin hendrerit in eget purus.
                In nec molestie leo. Morbi sollicitudin id lacus id ornare. Curabitur mollis placerat odio, at tristique leo tempor at. In bibendum dui et quam aliquam euismod. Nunc rhoncus lorem erat, id tempor ipsum dictum eu. Aenean finibus nisi et ullamcorper rhoncus. In hac habitasse platea dictumst.
                Duis ipsum sem, pulvinar sit amet tincidunt sed, ullamcorper non lorem. Aliquam at porta nibh.
            </p>
            <ArticleCanvas float="left" >
                {/*<Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 50 }}>*/}
                {/*    <Suspense fallback={null}>*/}
                {/*        <SecondModel />*/}
                {/*        <Environment preset="city" />*/}
                {/*    </Suspense>*/}
                {/*    <OrbitControls autoRotate />*/}
                {/*</Canvas>*/}
            </ArticleCanvas>
            <p>
                Nunc non ex volutpat, sagittis urna vulputate, commodo velit. Praesent fermentum laoreet lacus, sit amet ullamcorper urna pellentesque eu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                Praesent semper, nisi et molestie aliquet, sem odio volutpat nibh, vel consequat nisl risus ut sem. Pellentesque sem nunc, convallis at tempus rutrum, pulvinar ac felis. Morbi faucibus mi ac orci luctus, vel aliquet massa sodales. Duis placerat lorem neque, at volutpat arcu scelerisque at.
                Donec elementum convallis velit ut varius. Integer dictum molestie gravida. Quisque vehicula erat at pretium tristique. Donec nisl nisl, varius tempor ipsum non, dignissim semper felis. Integer iaculis bibendum consequat.
                Duis mauris nisi, lacinia a ligula eu, auctor imperdiet elit. Integer malesuada, libero ut imperdiet sodales, orci risus pellentesque lorem, sit amet pharetra risus magna sit amet erat.
                Donec ultricies vehicula pellentesque. Pellentesque finibus purus turpis. Nullam scelerisque lobortis purus, sed ultricies tellus ultrices vel. Maecenas ornare lectus ac auctor volutpat.
                Praesent ut leo vitae lorem tempus ultrices non at tortor. Quisque ac nunc arcu. Mauris justo est, ultricies quis condimentum eget, pellentesque vitae mi. Cras ut tellus pretium, sollicitudin quam in, porta elit. Vestibulum hendrerit aliquet ullamcorper.
                Vivamus nec nisi ac mauris lobortis pellentesque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </p>
            <p>
                Ut et mattis lacus, id malesuada nulla. Vestibulum dolor purus, consequat ac lorem et, blandit commodo dolor.
                Praesent metus nunc, aliquam sit amet turpis vel, aliquet lobortis ligula. Nullam ac purus ac enim aliquet tristique.
                Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed id magna rutrum, consequat arcu vitae, accumsan nisl. Maecenas commodo tortor eget pretium blandit.
                In placerat bibendum dui nec consequat. Nullam rutrum a turpis et condimentum. Pellentesque placerat rutrum ipsum, in aliquet dui tempor eget. In bibendum nec ligula ut volutpat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                Aliquam erat volutpat. Curabitur condimentum massa eget fringilla tincidunt. Donec faucibus risus a lacinia feugiat.
                Vestibulum sit amet elementum ante. Nullam porttitor efficitur dui consequat viverra. Nullam hendrerit tempus auctor. In sit amet erat massa. Aliquam erat volutpat. Mauris hendrerit sagittis neque, non imperdiet lorem egestas at. Phasellus fermentum turpis at eros congue viverra. Nam iaculis sit amet ipsum sit amet viverra.
                Integer tincidunt purus a nisl scelerisque gravida. In semper sit amet justo eget finibus. Nunc enim justo, auctor et luctus sit amet, tempus eget elit. Proin et rutrum leo. Pellentesque rutrum, nulla tempus pulvinar posuere, nulla risus sollicitudin mi, a ornare tortor ligula et massa. Maecenas vitae dolor a mi sollicitudin semper. Morbi malesuada mattis enim, vel suscipit turpis maximus nec. Suspendisse at sollicitudin leo. Etiam lacinia massa in odio tristique tincidunt. Phasellus sollicitudin turpis augue. Suspendisse porttitor scelerisque neque, et sagittis nunc egestas ac. Pellentesque non ullamcorper mi. Phasellus scelerisque condimentum sapien vitae volutpat. Nunc ut magna leo. Vestibulum ut imperdiet enim. Mauris ac augue sit amet felis luctus ultricies.
            </p>
            <HistoryQuiz Question={HISTORY_QUIZ.introduction}/>
        </>
    );
};

export default HistoryIntroduction;
