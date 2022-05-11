import { Form, Input, Button, notification, Card } from 'antd';
import { ExceptionMap } from 'antd/lib/result';
import { string } from 'mobx-state-tree/dist/internal';
import { useEffect, useState } from 'react';
import { store_mock_data } from '../store_dict/store_mock_data';


var data_log : any;

export const Form_LogIN = () => {

    const onFinish = (values: any) => {

        try{
            Array.from(JSON.parse(data_log)).map((el:any) => {
       
                if ( email==el.email && password==el.password ){
                
                    setTimeout(function() {
                        notification.open({
                            message: 'Welcome User '+el.first_name+" "+el.last_name,
                        })
                     }, 2000);

                    throw ExceptionMap;  
                }
            })
     
            setTimeout(function() {
            notification.open({
                message: 'User does not exist !!',
            })
            }, 2000);

        }catch(e){
        }
    };

    const [email, Set_email] = useState("");
    const [password, Set_password] = useState("");

    const submitLOG= () => {
        const input_fild = {
            "1. Email: ": email,
            "2. Password: ": password
        };
    }

    
    useEffect(() => {
        data_log=localStorage.getItem('mockDATA');
        if (data_log == null){
            localStorage.setItem('mockDATA',JSON.stringify(store_mock_data));
            data_log=localStorage.getItem('mockDATA');
        } 
    
    });

    return (
        <>
                <Card 
            title='User Login'
            bordered={ true } 
            hoverable={ true }
            size='default'
        >

        
            <Form
                name='basic'
                labelCol={{ span: 9 }}
                wrapperCol={{ span: 5 }}
                autoComplete="off"
                onFinish={ onFinish}
            >

                <Form.Item
                    label="Email:"
                    name="email"
                    rules={[
                        { required: true, message: 'Insert Email!!!' }
                    ]}
                >
                    <Input
                        type={"email"}
                        onChange={(e) => { Set_email(e.target.value) }}
                    />
                </Form.Item>


                <Form.Item
                    label="Password:"
                    name="password"
                    rules={[
                        { required: true, message: 'Insert Password!!!' }
                    ]}
                >
                    <Input
                        type={"password"}
                        onChange={(e) => { Set_password(e.target.value) }}
                    />
                </Form.Item>


                <Form.Item wrapperCol={{ offset: 8, span: 7 }}>
                    <Button
                        type='primary'
                        htmlType='submit'
                        onClick={ submitLOG }
                        ghost
                    >
                        Login
                    </Button>

                </Form.Item>

            </Form>
            </Card>
        </>
    );
}