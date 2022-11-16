import { Form, Input, Modal } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import React, { forwardRef, useImperativeHandle } from 'react'
import { toast } from 'react-toastify';
import { useAddPostsMutation } from '../../api/apiSlice';

const MODE = {
    ADD: 'ADD'
};


const FormAddPosts = ({},ref) => {
    const [addPosts, { isLoading: loading, error }] = useAddPostsMutation();
    const [form] = Form.useForm();
    const [visible, setVisible] = React.useState(false);
    const [title, setTitle] = React.useState('');
    const [mode, setMode] = React.useState(MODE.ADD);

    useImperativeHandle(ref, () => ({
        show: (caseForm) => {
            setVisible(true)
            if (caseForm === MODE.ADD) {
                setTitle("Thêm Posts");
                setMode(MODE.ADD);
            }
        },
        hide: () => {
            setVisible(false)
        }
    }));

    const onFinish = (values) => {
        const dataRequest = { ...values }

        switch (mode) {
            case MODE.ADD:
                addPosts(dataRequest).unwrap().then((res) => {
                    setVisible(false);
                    form.resetFields();
                    console.log(dataRequest);
                    toast.success("Thêm thành công.")
                }).catch((err) => {
                    console.log(err);
                    toast.error("Thêm thất bại")
                });
                break;
            default:
        }
    };

    return (
        <Modal
            title={title}
            open={visible}
            okType="default"
            destroyOnClose
            okText="Lưu"
            getContainer={false}
            confirmLoading={loading}
            onOk={() => {
                form.submit();
            }}
            onCancel={() => {
                setVisible(false);
                form.resetFields();
            }}
            okButtonProps={{
                className:
                    'tw-bg-sky-400 tw-text-slate-100 hover:tw-bg-sky-500 tw-border-none',
            }}
            cancelButtonProps={{ className: 'hover:tw-bg-transparent' }}>
            <Form form={form}
                onFinish={onFinish}
                layout="vertical"
                >
                <Form.Item label="Id người đăng" name="userId"
                    rules={[
                        {
                            required: true,
                            message: "Bạn cần nhập trường này"
                        }
                    ]}>
                    <Input />
                </Form.Item>
                <Form.Item label="Tiêu đề" name="title"
                    rules={[
                        {
                            required: true,
                            message: "Bạn cần nhập trường này"
                        }
                    ]}>
                    <Input />
                </Form.Item>
                <Form.Item label="Nội dung" name="body"
                    rules={[
                        {
                            required: true,
                            message: "Bạn cần nhập trường này"
                        }
                    ]}>
                    <TextArea rows={4} />
                </Form.Item>
            </Form>
        </Modal>
    )
}

export default forwardRef(FormAddPosts)