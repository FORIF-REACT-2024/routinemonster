function CategoryButton({category}) {
	let categoryName, categoryColor;
	switch(category){
		case 1:
			categoryName = '독서';
			categoryColor = 'bg-purple-400';
			break;
		case 2:
			categoryName = '운동';
			categoryColor = 'bg-yellow-400';
			break;
		case 3:
			categoryName = '공부';
			categoryColor = 'bg-green-400';
			break;
	}

	return (
		<div>
			<button className={`font-medium w-10 h-7 rounded-lg ${categoryColor}`}>
				{categoryName}
			</button>
		</div>
	);
}

export default CategoryButton;

//카테고리 1: 독서 2: 운동 3: 공부