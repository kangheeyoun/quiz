import '../components/CategorySelection.css';

const CategorySelection = ({ categories, onCategorySelect }) => {
    return (
        <div className="category-selection">
            <h1>"우리 가족, 반려견"</h1>            
            <h2>어디까지 알고 계신가요?</h2>             
            <img src={`${process.env.PUBLIC_URL}/images/hi.png`} alt="반려견 이미지" />
            <div className="ham-1"></div>
            <div className="start">
            </div>
            <p>퀴즈를 통해 반려동물의 습성에 대해 알아보아요</p>
            {
                categories.map((txt, idx) => {
                    return (
                        <button
                            key={idx}
                            onClick={() => { onCategorySelect(txt) }}
                        >
                            {txt}
                        </button>
                    );
                })
            }
        </div>
    );
};

export default CategorySelection;
