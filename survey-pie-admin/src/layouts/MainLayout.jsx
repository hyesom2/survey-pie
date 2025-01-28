import { Layout, Menu } from 'antd';
const { Header, Content, Sider } = Layout;

function MainLayout({ children }) {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider>
        <div className="demo-logo-vertical" />
        <Menu defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1">Files</Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header />
        <Content style={{ margin: '0 16px' }}>{children}</Content>
      </Layout>
    </Layout>
  );
}
export default MainLayout;
