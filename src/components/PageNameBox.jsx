const PageNameBox = ({page}) => {
  const pageNames = ['오늘의 루틴', '캘린더', '마이페이지', '루틴 목록'];
  const pageName = pageNames[page];
  console.log('페이지번호',page);

  return (
    <p className='m-3 p-2 border-2 border-blue-200 rounded-xl w-[570px] text-center text-4xl'>
			{pageName}
    </p>
  )
}

export default PageNameBox;

