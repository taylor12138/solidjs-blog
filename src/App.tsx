import { createSignal, type Component, lazy } from 'solid-js';
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

    return (
        <>
            <div class='w-[100%] flex items-center bg-black text-white p-[0_10px_0_50px]'>
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
            {tabs?.[tab()]?.component}
        </>
    );
};

export default App;
