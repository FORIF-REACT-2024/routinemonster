const CommentInput = ({ value, onChange, darkMode }) => {
    return (
        <form>
            <div>
                <div className={`flex items-center ${darkMode? 'bg-gray-500' : 'bg-blue-50'} rounded-3xl p-4`}>
                    <label className="text-black flex items-center w-full">
                        오늘의 코멘트
                        <input 
                            id="commentInput"
                            type="text"
                            value={value}
                            onChange={(e) => onChange(e.target.value)}
                            placeholder="나는 오늘도 눈물을 흘린다...@@"
                            className={`flex-1 ${darkMode ? 'bg-white opacity-50' : 'bg-white'} rounded-2xl p-2 outline-none text-gray-800 ml-4`} 
                        />
                    </label>
                </div>
            </div>
        </form>
    );
};

export default CommentInput;
