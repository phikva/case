import { useFormik } from "formik";
import { validation } from "../schemas";

const onSubmit = async (values, actions) => {
  console.log(values);
  console.log(actions);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

const Form = () => {
  const {
    values,
    errors,
    touched,
    handleBlur,
    isSubmitting,
    handleChange,
    handleSubmit,
    resetForm,
  } = useFormik({
    initialValues: {
      registreringsNummer: "",
      bonus: "",
      fødselsNummer: "",
      fornavn: "",
      etternavn: "",
      epost: "",
    },
    validationSchema: validation,
    onSubmit,
  });

  console.log(errors);

  return (
    <section className="container">
      <div className="top-text">
        <h1>Kjøp Bilforsikring</h1>
        <p>
          Det er fire forskjellige forsikringer å velge mellom.
          Ansvarsforsikring er lovpålagt om kjøretøyet er registrert og skal
          brukes på veien. I tillegg kan du utvide forsikringen avhengig av hvor
          gammel bilen din er og hvordan du bruker den.
        </p>
      </div>

      <form noValidate onSubmit={handleSubmit} className="grid">
        <div className="row">
          <label htmlFor="registreringsNummer">
            Bilens registreringsnummer
          </label>
          <input
            value={values.registreringsNummer}
            onChange={handleChange}
            id="registreringsNummer"
            type="text"
            placeholder="E.g AB 12345"
            onBlur={handleBlur}
            className={
              errors.registreringsNummer && touched.registreringsNummer
                ? "input-error"
                : ""
            }
          />

          {errors.registreringsNummer && touched.registreringsNummer && (
            <p className="error-message">{errors.registreringsNummer}</p>
          )}
        </div>

        <div className="row">
          <label htmlFor="bonus">Din bonus</label>
          <div className="select-wrapper">
            <select
              value={values.bonus}
              onChange={handleChange}
              id="bonus"
              type="select"
              onBlur={handleBlur}
              className={errors.bonus && touched.bonus ? "input-error" : ""}
            >
              <option value="" hidden>
                Velg bonus
              </option>
              <option label="20%" value="20%" />
              <option label="30%" value="30%" />
              <option label="40%" value="40%" />
              <option label="50%" value="50%" />
              <option label="60%" value="60%" />
              <option label="70%" value="70%" />
              <option label="80%" value="80%" />
            </select>
          </div>
          {errors.bonus && touched.bonus ? (
            ""
          ) : (
            <p className="help-text">
              Startbonus på 20% når du kjøper forsikring
            </p>
          )}
          {errors.bonus && touched.bonus && (
            <p className="error-message">{errors.bonus}</p>
          )}
        </div>

        <div className="row">
          <label htmlFor="fødselsNummer">Fødselsnummer</label>
          <input
            value={values.fødselsNummer}
            onChange={handleChange}
            id="fødselsNummer"
            type="number"
            placeholder="11 siffer"
            onBlur={handleBlur}
            className={
              errors.fødselsNummer && touched.fødselsNummer ? "input-error" : ""
            }
          />
          {errors.fødselsNummer && touched.fødselsNummer && (
            <p className="error-message">{errors.fødselsNummer}</p>
          )}
        </div>

        <div className="row">
          <label htmlFor="fornavn">Fornavn</label>
          <input
            value={values.fornavn}
            onChange={handleChange}
            id="fornavn"
            type="text"
            placeholder=""
            onBlur={handleBlur}
            className={errors.fornavn && touched.fornavn ? "input-error" : ""}
          />
          {errors.fornavn && touched.fornavn && (
            <p className="error-message">{errors.fornavn}</p>
          )}
        </div>

        <div className="row lastname">
          <label htmlFor="etternavn">Etternavn</label>
          <input
            value={values.etternavn}
            onChange={handleChange}
            id="etternavn"
            type="text"
            placeholder=""
            onBlur={handleBlur}
            className={
              errors.etternavn && touched.etternavn ? "input-error" : ""
            }
          />
          {errors.etternavn && touched.etternavn && (
            <p className="error-message">{errors.etternavn}</p>
          )}
        </div>
        <div className="row">
          <label htmlFor="epost">E-post</label>
          <input
            value={values.epost}
            onChange={handleChange}
            id="epost"
            type="email"
            placeholder=""
            onBlur={handleBlur}
            className={errors.epost && touched.epost ? "input-error" : ""}
          />
          {errors.epost && touched.epost && (
            <p className="error-message">{errors.epost}</p>
          )}
        </div>

        <div className="row btngroup">
          <button disabled={isSubmitting} className="btn primary" type="submit">
            {isSubmitting ? "Beregner pris" : "Beregn pris"}
          </button>
          <button
            type="reset"
            onClick={resetForm}
            className="btn secondary"
            value="Avbryt"
          >
            Avbryt
          </button>
        </div>
      </form>
    </section>
  );
};
export default Form;
