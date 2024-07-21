import s from './ LoadMoreBtn.module.css';
console.log(s);

const LoadMoreBtn = ({pages}) => {
  return (
    <>
    <button className={s.btnloadmore} onClick={pages}>Load more</button>
    </>
  )
};

export default  LoadMoreBtn;
