import { Layout, Menu, Form, Input, Button, notification, List, Row } from 'antd';

import { Card } from 'antd';
import { observer } from 'mobx-react';
import { useEffect } from 'react';
import { useRootStore } from '..';
import './CSS_layout.css';
import { MyForm } from './form/form_1';
import { Form_MacBook } from './form/form_2';
import { IContentModel } from './interface/interface';
import { CardCustom } from './show_edit_store';
import { ShowMacBook_Row } from './show_macbook';

import { cardDictionaries, dataMakBook } from './store_dict/store';

const { Header, Content, Footer } = Layout;


const MyCard = ({model, culoare, dimensiuni, rezolutie_ecran, wlan, url_imagine} : {model : string, culoare : string, dimensiuni : string, rezolutie_ecran : string, wlan : string, url_imagine : string}) => {
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
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                    {new Array(4).fill(null).map((_, index) => {
                    const key = index + 1;
                    return <Menu.Item key={key}>{`nav ${key}`}</Menu.Item>;
                    })}
                </Menu>
            </Header>
            
            <main>
                
                <Content style={{ padding: '0 50px' }}>
                    <div className="grid_my" >
                       <MyForm />
                       <Form_MacBook/>
                    </div>
                    
                    
                    <div className="site-layout-content grid-3">                   

                        {
                            cardDictionaries.map((el, index) => {
                                return(

                                    <MyCard  model={ el.model }  culoare={ el.culoare }  dimensiuni={ el.dimensiuni }  rezolutie_ecran={ el.rezolutie_ecran }  wlan={ el.wlan }  url_imagine={ el.url_imagine }  />
                                )
                            })
                        }
                    </div>

                    <div className="table-wrapper">
                        <table className="fl-table">
                            <thead>
                            <tr>
                                <th>MODEL</th>
                                <th>AUDIO</th>
                                <th>CAMERA_WEB</th>
                                <th>SEGMENT</th>
                                <th>CAPACITATE_SSD</th>
                                <th>TIP_DISPLAY</th>
                                <th>FRECVENTA_RAM</th>
                            </tr>
                            </thead>


                            <tbody>
                            {/* {
                                    dataMakBook.map((esl)=> {
                                        return(
                                           //{
                                              // console.log("--->> ",esl)
                                            <ShowMacBook_Row describe={esl} describe_extend={esl} />
                                           //}
                                        )
                                    })
                                   } */}
                                    { contents_notes.map((content: IContentModel) => {
                                        return (
                                            
                                                <ShowMacBook_Row describe={content} describe_extend={content} />
                                            
                                        )
                                    })
                                    }
                            </tbody>
                        </table>
                    </div>


                    {/* <div className='site-layout-content'> */}
                    <div className="site-layout-content grid-3"> 
                    {/* <Row gutter={ 16 }> */}
                        { contents.map((content: IContentModel) => {

                            return (
                                <CardCustom key={ content.id } content={ content } />
                            )
                        }) }
                    {/* </Row> */}
                    </div>
                    {/* </div> */}

                {/* <div>
                    { contents_notes.map((content: IContentModel) => {
                        return (
                            <List.Item>
                                <Note key={ content.id } content={ content } />
                            </List.Item>
                        )
                    })
                    }

                </div> */}

                </Content>
            </main>

           
      </Layout>
    )
})