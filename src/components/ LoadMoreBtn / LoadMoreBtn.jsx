import s from './ LoadMoreBtn.module.css';
console.log(s);

const  LoadMoreBtn = ({onClick}) => {
  return (
    <>
    <button onClick={onClick}>Load more</button>
    </>
  )
};

export default  LoadMoreBtn;
