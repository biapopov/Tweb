import { Form, Input, Button, notification } from 'antd';
import { useState } from 'react';

export const Form_MacBook = () => {

    const onFinish = (values: any) => {
        notification.open({
          message: 'Open Console.log',
        });
    };


    const [model, Set_model] = useState("");
    const [audio, Set_audio] = useState("");
    const [camera_web, Set_camera_web] = useState("");
    const [segment, Set_segment] = useState("");
    const [capacitate_ssd, Set_capacitate_ssd] = useState("");
    const [tip_display, Set_tip_display] = useState("");
    const [frecventa_ram, Set_frecventa_ram] = useState("");



    const submitMacBook= () => {
        const input_fild = {
            "1. model: ": model,
            "2. audio: ": audio,
            "3. camera_web: ": camera_web,
            "4. segment: ": segment,
            "5. capacitate_ssd: ": capacitate_ssd,
            "6. tip_display: ": tip_display,
            "7. frecventa_ram: ": frecventa_ram
        };

        console.log(input_fild)
    }

    return (
        <>
            <Form
                name='basic'
                labelCol={{ span: 9 }}
                wrapperCol={{ span: 5 }}
                autoComplete="off"
                onFinish={ onFinish}
            >

               <Form.Item
                    label="MODEL:"
                    name="model"
                    rules={[
                        { required: true, message: 'Insert MakBook model!!!' }
                    ]}
                >
                    <Input
                        type={"string"}
                        onChange={(e) => { Set_model(e.target.value) }}
                    />
                </Form.Item>


                <Form.Item
                    label="AUDIO:"
                    name="audio"
                    rules={[
                        { required: true, message: 'Insert MakBook audio!!!' }
                    ]}
                >
                    <Input
                        type={"string"}
                        onChange={(e) => { Set_audio(e.target.value) }}
                    />
                </Form.Item>


                <Form.Item
                    label="CAMERA_WEB:"
                    name="camera_web"
                    rules={[
                        { required: true, message: 'Insert MakBook camera_web!!!' }
                    ]}
                >
                    <Input
                        type={"string"}
                        onChange={(e) => { Set_camera_web(e.target.value) }}
                    />
                </Form.Item>


                <Form.Item
                    label="SEGMENT:"
                    name="segment"
                    rules={[
                        { required: true, message: 'Insert MakBook segment!!!' }
                    ]}
                >
                    <Input
                        type={"string"}
                        onChange={(e) => { Set_segment(e.target.value) }}
                    />
                </Form.Item>


                <Form.Item
                    label="CAPACITATE_SSD:"
                    name="capacitate_ssd"
                    rules={[
                        { required: true, message: 'Insert MakBook capacitate_ssd!!!' }
                    ]}
                >
                    <Input
                        type={"string"}
                        onChange={(e) => { Set_capacitate_ssd(e.target.value) }}
                    />
                </Form.Item>


                <Form.Item
                    label="TIP_DISPLAY:"
                    name="tip_display"
                    rules={[
                        { required: true, message: 'Insert MakBook tip_display!!!' }
                    ]}
                >
                    <Input
                        type={"string"}
                        onChange={(e) => { Set_tip_display(e.target.value) }}
                    />
                </Form.Item>


                <Form.Item
                    label="FRECVENTA_RAM:"
                    name="frecventa_ram"
                    rules={[
                        { required: true, message: 'Insert MakBook frecventa_ram!!!' }
                    ]}
                >
                    <Input
                        type={"string"}
                        onChange={(e) => { Set_frecventa_ram(e.target.value) }}
                    />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 7 }}>
                    <Button
                        type='primary'
                        htmlType='submit'
                        onClick={ submitMacBook}
                        ghost
                    >
                        Introdu
                    </Button>

                </Form.Item>

            </Form>
        </>
    );
}