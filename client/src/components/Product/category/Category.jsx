import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCategory } from "../../../redux/actions/actions";
import styles from "./Category.module.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Category = () => {
  const dispatch = useDispatch();
  const [category, setCategory] = useState({
    name: "",
    description: "",
  });

  const handleChange = (event) => {
    event.preventDefault();
    setCategory({
      ...category,
      [event.target.name]: event.target.value,
    });
  };

  // const handleChangeCheckBox = (event) => {
  //     event.preventDefault();
  //     setCategory({...category, isActive : event.target.checked});
  //   }
  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(category);
    dispatch(addCategory(category));
    toast.success("¡Category created successfully!");
    setCategory({
      name: "",
      description: "",
    });
  };
  return (
    <div>
      <div className={styles.container}>
        <form onSubmit={handleSubmit} className={styles.formContainer}>
          <h4 style={{ fontFamily: "Poppins", marginBottom: "1rem" }}>
            New Category
          </h4>
          {/* <label htmlFor="isActive">active</label>
        <input
        className='form-check-input mt-10'
        type="checkbox"
        name='isActive'
        id='isActive'
        value={category.isActive}
        onChange={handleChangeCheckBox}
        />
        <br /> */}

          {/* Nombre de categoria */}
          <input
            className="form-control mb-3 w-75"
            type="text"
            name="name"
            placeholder="Category Name"
            value={category.name}
            onChange={handleChange}
          />

          {/* Descripcion de categoria */}
          <textarea
            type="textarea"
            name="description"
            className="form-control"
            style={{
              resize: "none",
              width: "75%",
              height: "30%",
              fontFamily: "Poppins",
            }}
            placeholder="Enter Category Description..."
            value={category.description}
            onChange={handleChange}
          />
          <br />
          <button className={styles.create}>Create</button>
        </form>
      </div>
    </div>
  );
};
