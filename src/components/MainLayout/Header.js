import React from 'react';
import {Menu, Icon} from 'antd';
import { Link } from 'dva/router';
const Header = ({location}) =>{
    return (
      
        <Menu
            selectKeys = {[location.pathname]}
            mode = 'horizontal'
        >
            <Menu.Item key="/">
                <Link to="/"><Icon type="home" />首页</Link>
            </Menu.Item>
            <Menu.Item key="/users">
                <Link to="/users"><Icon type="bars" />用户管理</Link>
            </Menu.Item>
            <Menu.Item key="/404">
                <Link to="/page-you-dont-know"><Icon type="frown-circle" />404</Link>
            </Menu.Item>
            <Menu.Item key="/antd">
                <a href="https://github.com/dvajs/dva" target="_blank">dva</a>
            </Menu.Item>
            <Menu.Item key="/logout">
                <a href="/logout" >退出</a>
            </Menu.Item>
        </Menu>
     
    )
}

export default Header;