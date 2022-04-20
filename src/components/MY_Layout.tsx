import { Layout, Menu, Form, Input, Button, notification } from 'antd';

import { Card } from 'antd';
import './CSS_layout.css';

import { cardDictionaries } from './store_dict/store';

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

const MyForm = () => {

    const onFinish = (values: any) => {
        notification.open({
          message: 'Open Console.log CTRL+Shift+I',
        });
        console.log('Success:', values);
    };

    return(
        <Form
            name='basic'
            labelCol={{ span: 9 }}
            wrapperCol={{ span: 5}}
            onFinish={onFinish}
            autoComplete="off"
        >

<Form.Item
                label="MODEL:"
                name="model"
                rules={[
                    { required: true, message: 'Introdu  model!!!'}
                ]}
            >
                <Input type={ 'model' } />
            </Form.Item>

            <Form.Item
                label="CULOARE:"
                name="culoare"
                rules={[
                    { required: true, message: 'Introdu  culoare!!!'}
                ]}
            >
                <Input type={ 'culoare' } />
            </Form.Item>

            <Form.Item
                label="DIMENSIUNI:"
                name="dimensiuni"
                rules={[
                    { required: true, message: 'Introdu  dimensiuni!!!'}
                ]}
            >
                <Input type={ 'dimensiuni' } />
            </Form.Item>

            <Form.Item
                label="REZOLUTIE_ECRAN:"
                name="rezolutie_ecran"
                rules={[
                    { required: true, message: 'Introdu  rezolutie_ecran!!!'}
                ]}
            >
                <Input type={ 'rezolutie_ecran' } />
            </Form.Item>

            <Form.Item
                label="WLAN:"
                name="wlan"
                rules={[
                    { required: true, message: 'Introdu  wlan!!!'}
                ]}
            >
                <Input type={ 'wlan' } />
            </Form.Item>

            <Form.Item
                label="URL_IMAGINE:"
                name="url_imagine"
                rules={[
                    { required: true, message: 'Introdu  url_imagine!!!'}
                ]}
            >
                <Input type={ 'url_imagine' } />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 7}}>
                <Button type='primary' htmlType='submit' ghost>
                    Introdu
                </Button>

            </Form.Item>

        </Form>
    )
}

export const MY_Layout = () => {

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
               
                    <MyForm />
                    
                    <div className="site-layout-content grid-3">                   

                     
                        {
                            cardDictionaries.map((el, index) => {
                                return(

                                    <MyCard  model={ el.model }  culoare={ el.culoare }  dimensiuni={ el.dimensiuni }  rezolutie_ecran={ el.rezolutie_ecran }  wlan={ el.wlan }  url_imagine={ el.url_imagine }  />
                                )
                            })
                        }
                    </div>
                </Content>
            </main>

           
      </Layout>
    )
}