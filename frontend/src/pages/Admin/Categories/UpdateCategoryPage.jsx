import { Button, Form, Input } from "antd";

const UpdateCategoryPage = () => {
  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <Form name="basic" layout="vertical" autoComplete="off" onFinish={onFinish}>
      <Form.Item
        label="Kategori İsmi"
        name="name"
        rules={[
          {
            required: true,
            message: "Lütfen kategori adını girin!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Kategori Görseli (Link)"
        name="img"
        rules={[
          {
            required: true,
            message: "Lütfen kategori görsel linkini girin!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Button type="primary" htmlType="submit">
        Güncelle
      </Button>
    </Form>
  );
};

export default UpdateCategoryPage;
