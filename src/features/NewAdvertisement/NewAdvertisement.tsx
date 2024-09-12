import React, { useState } from 'react';
import { Modal, Button, Form, Input, InputNumber, InputNumberProps } from 'antd';
import FormItem from 'antd/es/form/FormItem';
import { observer } from 'mobx-react-lite';
import { advertisementsStore } from '@app/store';

const NewAdvertisement: React.FC = observer(() => {
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [form] = Form.useForm();
  const onFinish = (values: any) => {
    advertisementsStore.addNewAdvertisement({...values, views: 0, likes: 0});
    form.resetFields();
    setOpen(false);
  }

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Новое объявление
      </Button>
      <Modal
        title='Новое объявление'
        open={open}
        onCancel={handleClose}
      >
        <Form
          form={form}
          layout='vertical'
          onFinish={onFinish}
        >
          <Form.Item
            label='Название'
            name='name'
            rules={[{required: true}]}
          >
            <Input placeholder='Введите название товара' />
          </Form.Item>
          <Form.Item
            label='Описание'
            name='description'
          >
            <Input.TextArea placeholder='Введите описание товара' />
          </Form.Item>
          <FormItem
            label='Цена'
            name='price'
          >
            <InputNumber prefix='₽' min={1} style={{width: '100%'}} />
          </FormItem>
          <Form.Item 
            label='Фотография'
            name='imageUrl'>
            <Input placeholder='Введите URL изображения' />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Разместить
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
});

export default NewAdvertisement;