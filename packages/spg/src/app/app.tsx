import { Route, Routes, Link, useLocation } from 'react-router-dom';
import { Layout, Menu, Button } from '@org/ui';

const { Header, Content } = Layout;

export function App() {
  const location = useLocation();

  const menuItems = [
    { key: '/', label: <Link to="/">Home</Link> },
    { key: '/page-2', label: <Link to="/page-2">Page 2</Link> },
  ];

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
        <div style={{ color: '#fff', fontWeight: 600 }}>@org/spg</div>
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={[location.pathname]}
          items={menuItems}
          style={{ flex: 1, minWidth: 0 }}
        />
        <Button type="primary">Action</Button>
      </Header>
      <Content style={{ padding: 24 }}>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <h1>Home</h1>
                <p>React + Redux Toolkit + React Query + Axios + Ant Design</p>
                <Link to="/page-2">
                  <Button>Go to Page 2</Button>
                </Link>
              </div>
            }
          />
          <Route
            path="/page-2"
            element={
              <div>
                <h1>Page 2</h1>
                <Link to="/">
                  <Button>Back to Home</Button>
                </Link>
              </div>
            }
          />
        </Routes>
      </Content>
    </Layout>
  );
}

export default App;
