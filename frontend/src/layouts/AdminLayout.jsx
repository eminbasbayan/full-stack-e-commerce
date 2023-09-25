import { Button } from "antd";

const AdminLayout = () => {
  return (
    <div className="admin-layout">
      <Button type="primary">Primary Button</Button>
      <Button type="primary" danger>
        Primary Button
      </Button>
      <div>sidebar</div>
      <div>header</div>
      <div>content</div>
    </div>
  );
};

export default AdminLayout;
