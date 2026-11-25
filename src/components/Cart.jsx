import { useSelector, useDispatch } from 'react-redux'
import { changeName, increase, addCount, sortName } from '../store'
import Order from './Order'

function Cart() {
  const state = useSelector((state) => state);
  const { name, age } = state.user;
  const cart = state.cart;
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center w-full space-y-6">
      <h5 className="text-xl font-bold text-gray-800 tracking-tight flex items-center gap-1.5">
        {name} {age}의 장바구니
      </h5>

      <div className="flex flex-wrap justify-center gap-2.5 w-full">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm px-4 py-2.5 rounded-xl transition-all shadow-sm active:scale-95 transform" onClick={()=>{dispatch(changeName())}}>
          관우로 이름 바꾸기
        </button>

        <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-sm px-4 py-2.5 rounded-xl transition-all shadow-sm active:scale-95 transform flex items-center gap-1" onClick={()=>{dispatch(increase(1))}}>
          나이 +
        </button>

        <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium text-sm px-4 py-2.5 rounded-xl transition-all active:scale-95 transform flex items-center gap-1" onClick={()=>{dispatch(increase(-1))}}>
          나이 -
        </button>
      </div>

      <div className="w-full max-w-md">
        <h4 className="text-lg font-bold text-gray-800 mb-3">id 상품명 수량 변경하기</h4>
        <ul className="divide-y divide-gray-200 border border-gray-200 rounded-lg">
          {
            cart.map((a, i) =>
              <li key={i} className="flex items-center gap-4 px-4 py-2">
                <span className="w-6 text-gray-500">{a.id}</span>
                <span className="flex-1 text-gray-800">{a.item}</span>
                <span className="w-8 text-right font-semibold">{a.amount}</span>
                <button className="border border-gray-300 hover:bg-gray-100 text-sm px-2.5 py-0.5 rounded cursor-pointer" onClick={()=>{dispatch(addCount(a.id))}}>
                  +
                </button>
              </li>
            )
          }
        </ul>
        <button className="mt-3 border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white text-sm px-4 py-2 rounded transition-colors cursor-pointer" onClick={()=>{dispatch(sortName())}}>
          이름순정렬
        </button>
      </div>

      <Order />
    </div>
  )
}

export default Cart
