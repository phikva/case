import { useFormik } from "formik";

const Form = () => {
  const { values, handleBlur, handleChange } = useFormik({
    initialValues: {
      registreringsnummer: "",
      bonus: "",
      fødselsnummer: "",
      fornavn: "",
      etternavn: "",
      epost: "",
    },
  });
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

      <form className="grid">
        <div className="row">
          <label htmlFor="registreringsnummer">
            Bilens registreringsnummer
          </label>
          <input
            value={values.registreringsnummer}
            onChange={handleChange}
            id="registreringsnummer"
            type="text"
            placeholder="E.g AB 12345"
            onBlur={handleBlur}
          />
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
            >
              <option value="" hidden>
                Velg bonus
              </option>
              <option value="20">20%</option>
              <option value="30">30%</option>
              <option value="40">40%</option>
              <option value="50">50%</option>
              <option value="60">60%</option>
              <option value="70">70%</option>
              <option value="80">80%</option>
            </select>
          </div>
        </div>

        <div className="row">
          <label htmlFor="fødselsnummer">Fødselsnummer</label>
          <input
            value={values.fødselsnummer}
            onChange={handleChange}
            id="fødselsnummer"
            type="number"
            placeholder="11 siffer"
            onBlur={handleBlur}
          />
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
          />
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
          />
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
          />
        </div>
        <div className="row btngroup">
          <button className="btn primary" type="submit">
            Beregn pris
          </button>
          <button className="btn secondary" type="button" value="Avbryt">
            Avbryt
          </button>
        </div>
      </form>
    </section>
  );
};
export default Form;
