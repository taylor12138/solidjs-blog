import type { Component } from 'solid-js';

import logo from './logo.svg';

const App: Component = () => {
  return (
    <div class='w-[100%] flex items-center justify-center'>
        <div class='nav flex items-center h-[40px] w-[400px] justify-around'>
            <div>主页</div>
            <div>博客</div>
            <div>请联系我</div>
        </div>
    </div>
  );
};

export default App;
