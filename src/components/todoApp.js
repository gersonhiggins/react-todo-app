import NotMatch from './noMatch';
import Layout from './layout'
import { Routes, Route } from 'react-router-dom';
import About from './about';
import Home from './home';

const TodoApp = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="*" element={<NotMatch />} />
            </Route>
        </Routes>
    )
};
export default TodoApp;