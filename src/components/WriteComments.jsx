const WriteComments = () => {
    return (
      <div className="max-w-3xl ">  {/* 최대 너비 제한 및 가운데 정렬 */}
        <div className="flex items-center bg-blue-50 rounded-3xl p-4">  {/* 더 둥근 테두리 */}
          <div className="text-gray-700 font-medium mr-4">오늘의 코멘트</div>
          <input 
            type="text"
            placeholder="나는 오늘도 눈물을 흘린다...@@"
            className="flex-1 bg-white rounded-2xl p-2 outline-none text-gray-700"
          />
        </div>
      </div>
    );
  };
  
  export default WriteComments;