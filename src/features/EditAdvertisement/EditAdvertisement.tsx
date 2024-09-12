// @ts-nocheck
import React, { useEffect, useState } from 'react';
import { Modal, Button, Form, Input, InputNumber } from 'antd';
import { observer } from 'mobx-react-lite';
import { advertisementsStore } from '@app/store';
import { AdvertisementType } from '@shared/types';

type Advertisement = {
  id: number;
  name: string;
  description?: string;
  price: number;
  imageUrl?: string;
};

interface EditAdvertisementProps {
  advertisement: AdvertisementType; 
  onClose: () => void;
}

const EditAdvertisement: React.FC<EditAdvertisementProps> = observer(({ advertisement, onClose }) => {
  const [open, setOpen] = useState(true);
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue(advertisement);
  }, [form, advertisement]);

  const handleClose = () => {
    setOpen(false);
    onClose();
  };

  const onFinish = (values: any) => {
    advertisementsStore.editAdvertisement(advertisement.id, values);
    form.resetFields();
    setOpen(false);
    onClose();
  };

  return (
    <Modal
      title="Редактировать объявление"
      open={open}
      onCancel={handleClose}
      footer={null}
    >
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
      >
        <Form.Item
          label="Название"
          name="name"
          rules={[{ required: true }]}
        >
          <Input placeholder="Введите название товара" />
        </Form.Item>
        <Form.Item
          label="Описание"
          name="description"
        >
          <Input.TextArea placeholder="Введите описание товара" />
        </Form.Item>
        <Form.Item
          label="Цена"
          name="price"
        >
          <InputNumber prefix="₽" min={1} style={{ width: '100%' }} />
        </Form.Item>
        <Form.Item 
          label="Фотография"
          name="imageUrl"
        >
          <Input placeholder="Введите URL изображения" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Обновить
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
});

export default EditAdvertisement;
