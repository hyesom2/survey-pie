import { Layout, Menu } from 'antd';
const { Header, Content, Sider } = Layout;

function MainLayout({ children }) {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider>
        <div className="logo" style={{ height: 64 }} />
        <Menu theme="dark" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">설문조사 관리</Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header />
        <Content>{children}</Content>
      </Layout>
    </Layout>
  );
}
export default MainLayout;
