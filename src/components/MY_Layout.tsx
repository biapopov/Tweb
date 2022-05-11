import { Layout, Menu, Form, Input, Button, notification, List, Row } from 'antd';

import { Card } from 'antd';
import { observer } from 'mobx-react';
import { useEffect } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { useRootStore } from '..';
import './CSS_layout.css';
import { MyForm } from './form/form_1';
import { Form_MacBook } from './form/form_2';
import { Form_LogIN } from './form/form_login';
import { IContentModel } from './interface/interface';
import { ShowCardsIPad } from './menu_item_comp/ShowCardsIPad';
import { ShowTable } from './menu_item_comp/ShowTable';
import { CardCustom } from './show_edit_store';
import { ShowMacBook_Row } from './show_macbook';

import { cardDictionaries, dataMakBook } from './store_dict/store';

const { Header, Content, Footer } = Layout;


export const  MyCard = ({model, culoare, dimensiuni, rezolutie_ecran, wlan, url_imagine} : {model : string, culoare : string, dimensiuni : string, rezolutie_ecran : string, wlan : string, url_imagine : string}) => {
    return(
        <Card 
            title={ model }  
            bordered={ true } 
            hoverable={ true }
            size='default'
        >
            <img src={ url_imagine }   height="220px" width="auto"/> <br></br>
            <b><i>CULOARE</i>: </b>{ culoare } <br /> <br />
            <b><i>DIMENSIUNI</i>: </b>{ dimensiuni } <br /> <br />
            <b><i>REZOLUTIE_ECRAN</i>: </b>{ rezolutie_ecran } <br /> <br />
            <b><i>WLAN</i>: </b>{ wlan } <br /> <br />

        </Card>
    )
}


export const MY_Layout = observer(() => {
    const { contents, contents_notes } = useRootStore()

    useEffect(() => {
        console.log('>>contents_notes', contents_notes)
    }, [ contents_notes ])

    return(
        <Layout className="layout">
             <Header>
                <Menu theme='dark' mode='horizontal'>

                    <Menu.Item key={1}>
                        <Link to="/login">Login</Link>
                    </Menu.Item>
                    <Menu.Item key={2}>
                        <Link to="/myform">MyForm</Link>
                    </Menu.Item>
                    <Menu.Item key={3}>
                        <Link to="/form_macbook">Form MacBook</Link>
                    </Menu.Item>
                    <Menu.Item key={4}>
                        <Link to="/cards">Show Cards</Link>
                    </Menu.Item>
                    <Menu.Item key={5}>
                        <Link to="/table">Show Table</Link>
                    </Menu.Item>              
                </Menu>
            </Header>

            <Routes>
                <Route path='/login' element={ <Form_LogIN/> } />
                <Route path='/myform' element={<MyForm />} />
                <Route path='/form_macbook' element={<Form_MacBook/>} />
                <Route path='/cards' element={<ShowCardsIPad/>} />
                <Route path='/table' element={<ShowTable/>} />
            </Routes>          
            
      </Layout>
    )
})