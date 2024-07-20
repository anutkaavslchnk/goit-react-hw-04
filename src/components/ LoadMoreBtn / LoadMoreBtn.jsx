import s from './ LoadMoreBtn.module.css';
console.log(s);

const  LoadMoreBtn = ({pages}) => {
  return (
    <>
    <button onClick={pages}>Load more</button>
    </>
  )
};

export default  LoadMoreBtn;
