import { createSignal, type Component, lazy, onMount } from 'solid-js';
import cx from 'classnames';
import  './App.less'

import logo from './logo.svg';

const tabs = [
    {
        title: '主页',
        component: lazy(() => import("./pages/tab1"))
    },
    {
        title: '博客',
        component: lazy(() => import("./pages/tab2"))
    },
    {
        title: '请联系我',
        component: lazy(() => import("./pages/tab3"))
    }
];

const App: Component = () => {
    const [tab, setTab] = createSignal<number>(0);
    const [videoFlag, setVideoFlag] = createSignal(false)
    let videoRef:any;

    onMount(() => {
        videoRef?.addEventListener('ended', function () { //加载数据
            //视频播放结束
            console.log(videoRef, 'ended');
            setVideoFlag(true)
        });
    });

    return (
        <div class='relative'>
            <div class='w-[100%] flex items-center bg-black text-white p-[0_10px_0_50px] sticky top-0'>
                <img src={logo} class='logo w-[40px] h-[40px] mr-[7px]' alt="logo" />
                <div class='font-bold'>HelloのBlog</div>
                <div class='nav flex items-center h-[60px] w-[300px] justify-around'>
                    {tabs?.map((item, index: number) => {
                        return (
                            <div class={cx('item', tab() === index && 'active')} onclick={() => setTab(index)}>{item.title}</div>
                        )
                    })}
                </div>
            </div>
            <div class='w-[100%] absolute top-60'>
                <video src="https://asia.sega.com/p3r/cn/resources/img/top/fv_movie1_bef3ec38c6b4ba869207fc85cf95bc78.mp4" 
                    autoplay muted ref={videoRef} class={cx(videoFlag() && 'opacity-0')}
                />
            </div>
            <div class='w-[100%] absolute top-60'>
                <video src="https://asia.sega.com/p3r/cn/resources/img/top/fv_movie2_1aaf21a0de60678450744da0dbaf9ef4.mp4" 
                    autoplay muted loop class={cx('opacity-0', videoFlag() && 'opacity-100')} 
                />
            </div>
            <div>
                {/* @ts-ignore */}
                {tabs?.[tab()]?.component}
            </div>
        </div>
    );
};

export default App;
