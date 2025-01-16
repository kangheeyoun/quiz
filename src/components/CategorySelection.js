import '../components/CategorySelection.css';

const CategorySelection = ({categories,onCategorySelect}) => {
    return (
        <div className="category-selection">
            <p>2025년 1월 셋째 주</p>
            <h1>짱구 어디까지 알고있니?</h1>
            <p>매주 월요일, 새로운 퀴즈가 시작돼요. 참여자 중 다섯 분께
            짱구 덕후 칭호로 불러드려요.</p>
            <img src='./image/start.jpg'></img>
            {/*1. 카테고리를 button으로 작성*/}
            {
                categories.map((txt,idx)=>{
                    return<button
                    key={idx}
                    onClick={()=>{onCategorySelect(txt)}}
                >{txt}</button>
            })
        }
        </div>
    );
};
export default CategorySelection;