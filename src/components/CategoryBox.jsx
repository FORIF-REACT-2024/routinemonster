import React from 'react';

function CategoryButton({ category, selectedCategory, onClick }) {
    let categoryName, categoryColor, selectedColor;

    switch (category) {
        case 1:
            categoryName = '독서';
            categoryColor = 'bg-purple-400';
            selectedColor = 'bg-purple-600'; // 선택된 상태일 때 더 진한 색
            break;
        case 2:
            categoryName = '운동';
            categoryColor = 'bg-yellow-400';
            selectedColor = 'bg-yellow-600'; // 선택된 상태일 때 더 진한 색
            break;
        case 3:
            categoryName = '공부';
            categoryColor = 'bg-green-400';
            selectedColor = 'bg-green-600'; // 선택된 상태일 때 더 진한 색
            break;
        default:
            break;
    }

    const isSelected = selectedCategory === category; // 선택 상태인지 확인

    return (
        <button
            onClick={() => onClick(category)} // 클릭 시 부모에 category 전달
            className={`font-medium w-10 h-7 rounded-lg ${
                isSelected ? selectedColor : categoryColor
            } transition-colors`}
        >
            {categoryName}
        </button>
    );
}

export default CategoryButton;


//카테고리 1: 독서 2: 운동 3: 공부