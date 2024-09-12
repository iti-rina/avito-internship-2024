import React, { useState } from 'react';
import { Modal, Button, Form, Input, InputNumber, InputNumberProps } from 'antd';
import FormItem from 'antd/es/form/FormItem';
import { observer } from 'mobx-react-lite';
import { advertisementsStore } from '@app/store';
import { AdvertisementType } from '@shared/types';

const EditAdvertisement: React.FC<AdvertisementType> = observer(({ name, imageUrl, description, price }) => {
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
        Редактировать объявление
      </Button>
      <Modal
        title='Редактировать объявление'
        open={open}
        onCancel={handleClose}
        footer={null}
      >
        <Form
          form={form}
          layout='vertical'
          // onFinish={onFinish}
        >
          <Form.Item
            label='Название'
            name='name'
            rules={[{required: true}]}
            initialValue={name}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label='Описание'
            name='description'
            initialValue={description}
          >
            <Input.TextArea />
          </Form.Item>
          <FormItem
            label='Цена'
            name='price'
            initialValue={price}
          >
            <InputNumber prefix='₽' min={1} style={{width: '100%'}} />
          </FormItem>
          <Form.Item 
            label='Фотография'
            name='imageUrl'
            initialValue={imageUrl}  
          >
            <Input />
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

export default EditAdvertisement;