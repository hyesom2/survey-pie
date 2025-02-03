import { Layout, Menu } from 'antd';
import { useMemo } from 'react';
import { Link } from 'react-router-dom';
const { Header, Content, Sider } = Layout;

// const contentStyle = { padding: 45 };

function MainLayout({ children, selectedKeys }) {
  const contentStyle = useMemo(() => {
    return { padding: 45 };
  }, []);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider>
        <div className="logo" style={{ height: 64 }} />
        <Menu theme="dark" mode="inline" selectedKeys={selectedKeys}>
          <Menu.Item key="list">
            <Link to="/list">설문조사 관리</Link>
          </Menu.Item>
          <Menu.Item key="builder">
            <Link to="/builder">빌더 페이지</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header />
        {/* <Content style={{padding: 45/>}}>{children}</Content> */}
        <Content style={contentStyle}>{children}</Content>
      </Layout>
    </Layout>
  );
}
export default MainLayout;
