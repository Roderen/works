import React from "react"
import {useDispatch} from "react-redux";
import {v4 as uuidv4} from 'uuid';
import {Formik, Form, Field} from 'formik';
import './style.scss';

const TodoForm = () => {
  const dispatch = useDispatch();

  const formSubmit = (values, {resetForm}) => {
    dispatch({
      type: 'ADD_CARD', payload: {
        id: uuidv4(),
        title: values.title,
        description: values.description,
        complete: false,
      }
    })
    resetForm();
  }

  const removeAllCards = () => {
    dispatch({type: 'REMOVE_ALL_CARDS'})
  }

  return (
      <Formik
          initialValues={{title: '', description: ''}}
          validate={values => {
            const errors = {};
            if (!values.title) {
              errors.title = true;
            }
            if (!values.description) {
              errors.description = true;
            }
            return errors;
          }}
          onSubmit={formSubmit}
      >
        {({
            values,
            errors,
          }) => (
            <Form id="todoForm">
              <div className="mb-3">
                <label className="form-label">Task title</label>
                <Field
                    type="text"
                    name="title"
                    className={errors.title ? "form-control invalid-form-control" : "form-control"}
                    placeholder="Title"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Task body</label>
                <Field
                    as="textarea"
                    style={{}}
                    name="description"
                    className={errors.description ? "form-control invalid-form-control" : "form-control"}
                    placeholder="Task body"
                    cols="30"
                    rows="10"
                />
              </div>
              <div className="d-flex justify-content-between">
                <div>
                  <Field
                      type="submit"
                      className="btn btn-primary"
                      value="Create Task!"
                  />
                  <Field
                      type="reset"
                      value="Очистить"
                      className="btn btn-warning"
                  />
                </div>
                <button type="button" className="btn btn-danger remove-all" onClick={removeAllCards}>Удалить все</button>
              </div>
            </Form>
        )}
      </Formik>
  );
};

export default TodoForm;