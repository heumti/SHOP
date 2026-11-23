import React from 'react'
import { useParams } from 'react-router-dom'

const Detail = (props) => {
  const { id } = useParams();
  console.log(id);
  const { shoes } = props;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="w-full">
          <img src={shoes[id].imgUrl} alt="상품 이미지" className="w-full h-auto" />
        </div>

        <div className="flex flex-col space-y-4">
          <h4 className="text-2xl font-bold text-gray-900">{shoes[id].title}</h4>
          <p className="text-gray-600 leading-relaxed">{shoes[id].content}</p>
          <p className="text-xl font-semibold text-gray-900">{shoes[id].price}원</p>

          <button className="bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-2.5 rounded-lg shadow-sm hover:shadow active:scale-95 transition">
            주문하기
          </button>
        </div>
      </div>
    </div>
  )
}

export default Detail
