import React from "react";

const FormList = () => {
  return (
    <>
      <div className="form-group">
        <label className="mb-2" htmlFor="name">
          Nombre Completo:
        </label>
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Ingrese nombre completo"
          onChange={handleOnChange}
          value={formData.name}
          required
        />
      </div>
      <div className="form-group">
        <label className="mb-2 mt-2" htmlFor="phone">
          Teléfono:
        </label>
        <input
          type="text"
          name="phone"
          className="form-control"
          placeholder="Ingrese teléfono"
          onChange={handleOnChange}
          value={formData.phone}
          required
        />
      </div>
      <div className="form-group">
        <label className="mb-2 mt-2" htmlFor="email">
          Email:
        </label>
        <input
          type="email"
          name="email"
          className="form-control"
          placeholder="Ingrese email"
          onChange={handleOnChange}
          value={formData.email}
          required
        />
      </div>
      <div className="form-group">
        <label className="mb-2 mt-2" htmlFor="repetirEmail">
          Repetir Email:
        </label>
        <input
          type="email"
          name="repetirEmail"
          className="form-control"
          placeholder="Repetir el email"
          onChange={handleOnChange}
          value={formData.repetirEmail}
          required
        />
      </div>
      <button
        type="submit"
        className="btn btn-success mt-4"
        disabled={!emailMatch}
      >
        {" "}
        Generar orden{" "}
      </button>
    </>
  );
};

export default FormList;
