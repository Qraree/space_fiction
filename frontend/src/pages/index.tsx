import Head from 'next/head';
import HomeStarSky from "@/containers/Home/StarSky/HomeStarSky";
import HomeRocketScienceHistory from "@/containers/Home/RocketScienceHistory/HomeRocketScienceHistory";

export default function Home() {

    return (
        <>
            <Head>
                <title>Space Fiction</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <HomeStarSky />
            <HomeRocketScienceHistory />
        </>
    );
}
