import { Layout, Menu, Form, Input, Button, notification } from 'antd';
export const MyForm = () => {

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