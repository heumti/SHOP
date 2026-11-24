import './App.css'
import data from './data.js';
import { useState } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Home from './components/Home';
import Detail from './components/Detail';
import About from './components/About';
import Footer from './components/Footer';


function App() {
  // data.js의 상품 배열을 state로 보관
  const[shoes, setShoes] = useState(data);
  //console.log(shoes[0].price);
  const navigate = useNavigate();
  return (
    <div className="App">

      {/* ① 상단 메뉴바 (Tailwind 클래스로 꾸밈) */}
      {/* bg-gray-900: 진한 회색 배경 / text-white: 흰 글자 / px-4 py-3: 좌우·위아래 여백 / shadow-md: 그림자 */}
      <nav className="bg-gray-900 text-white px-4 py-3 shadow-md">
        {/* max-w-7xl mx-auto: 최대 폭을 정하고 가운데 정렬 / flex: 안의 요소를 가로로 나란히 */}
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a onClick={()=>{navigate('/')}} className="text-xl font-bold tracking-wide hover:text-gray-300 transition-colors cursor-pointer">
            ShoesShop
          </a>

          {/* space-x-6: 메뉴 사이 간격 / mr-auto: 남는 공간을 오른쪽으로 밀어서 메뉴를 왼쪽에 붙임 */}
          <div className="flex space-x-6 ml-6 mr-auto">
            {/* hover:text-white: 마우스를 올리면 흰 글자로 바뀜 */}
            {/*
            <a href="#home" className="text-gray-300 hover:text-white transition-colors font-medium">Home</a>
            <a href="#features" className="text-gray-300 hover:text-white transition-colors font-medium">Features</a>
            <a href="#pricing" className="text-gray-300 hover:text-white transition-colors font-medium">Pricing</a>
            */}
            {/*
            <Link to="/" className="text-gray-300 hover:text-white transition-colors font-medium">홈</Link>
            <Link to="/detail" className="text-gray-300 hover:text-white transition-colors font-medium">상세페이지</Link>
            */}
            <a onClick={()=>{navigate('/')}} className="text-gray-300 hover:text-white transition-colors font-medium cursor-pointer">
              Home
            </a>
            <a onClick={()=>{navigate('/about')}} className="text-gray-300 hover:text-white transition-colors font-medium cursor-pointer">
              About
            </a>
            <a onClick={()=>{navigate('/detail/0')}} className="text-gray-300 hover:text-white transition-colors font-medium cursor-pointer">
              Detail
            </a>
            <a onClick={()=>{navigate('/cart')}} className="text-gray-300 hover:text-white transition-colors font-medium cursor-pointer">
              Cart
            </a>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home shoes={shoes} setShoes={setShoes} />} />
        <Route path="/detail/:id" element={<Detail shoes={shoes} />} />
        <Route path="*" element={<div>없는 페이지입니다.</div>} />
        <Route path="/about" element={<About />} >
          <Route index element={<div>회사 소개 페이지입니다..</div>} />
          <Route path="member" element={<div>Member 페이지입니다..</div>} />
          <Route path="location" element={<div>Location 페이지입니다..</div>} />
        </Route>
      </Routes>

      <Footer />

    </div>
  );
}

export default App
