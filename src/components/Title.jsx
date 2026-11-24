import React from 'react'

const Title = (props) => {
  const { index } = props;
  let title, sub_title;

  if (index === '1') {
    title = "MD's Pick";
    sub_title = "시선을 사로잡는 스타일링, 제품들을 만나보세요.";
  } else if (index === '2') {
    title = "여름을 위한 컬렉션";
    sub_title = "가볍게, 시원하게 컬렉션으로 여름을 즐겨보세요.";
  }

  return (
    // Tailwind의 공간 배치 유틸리티(space-y)로 각 태그 사이의 간격을 조절합니다.
    <div className="mt-[70px] text-center space-y-2 mb-6">
      <h3 className="text-2xl font-bold text-gray-900 tracking-wider">
        {title}
      </h3>

      <p className="text-gray-500 text-sm md:text-base">
        {sub_title}
      </p>
    </div>
  )
}

export default Title
