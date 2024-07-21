
import { Field, Form, Formik } from 'formik';
import toast, { Toaster } from 'react-hot-toast';
import s from './SearchBar.module.css';
import { BsFillSearchHeartFill, BsSearchHeartFill } from 'react-icons/bs';

const SearchBar = ({ onSubmit }) => {
  const initialValues = {
    query: '',
  };

  const errorFuncSubmit = (values) => {
    if (!values.query) {
      toast.error("You should search for something! Type something here");
    } else {
      onSubmit(values.query);  
    }
  };

  return (
    <header className={s.header}>
      <Toaster position="top-right" reverseOrder={false} />
      <Formik initialValues={initialValues} onSubmit={errorFuncSubmit} >
        <Form className={s.wrapper}>
          <Field  name="query" placeholder='Search images and photos' type='search' className={s.input} />
          <button type="submit" className={s.button}><BsFillSearchHeartFill size='30px' color="white" className={s.icon} /></button>
        </Form>
      </Formik>
    </header>
  );
};

export default SearchBar;
