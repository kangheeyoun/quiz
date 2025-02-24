import '../components/Results.css';

const Results = ({score,onRestart}) => {
    return (
        <div className="results">  
            <p>퀴즈종료</p>
            <img src={`${process.env.PUBLIC_URL}/images/bye.png`} alt="반려견 이미지" />
            <p>{score}점 / 30점 </p>
            <button onClick={(onRestart)}>다시 시작하기</button>
        </div>
    );
};

export default Results;