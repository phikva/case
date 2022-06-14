import { useFormik } from "formik";
import { useCallback, useState } from "react";

import { validation } from "../schemas";

const Form = () => {
  const [submitted, setSubmitted] = useState();
  const [loading, setLoading] = useState();
  const [result, setResult] = useState();
  const [price, setPrice] = useState();
  const [priceYear, setPriceYear] = useState();

  const onSubmit = async (values, actions) => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setLoading(false);
    setSubmitted("submitted");
    setResult([values]);
    actions.resetForm();

    function calcPrice() {
      const basisPris = 3000;
      let rabatt = values.bonus;
      let rabbatertPris = (basisPris * rabatt) / 100;
      let totalSum = basisPris - rabbatertPris;

      let totalSumYear = totalSum * 12;

      setPriceYear(totalSumYear.toLocaleString());
      setPrice(totalSum.toLocaleString());
    }
    calcPrice();
  };

  //scroll to content after load
  const scroll = useCallback((node) => {
    if (node !== null) {
      window.scrollTo({
        top: node.getBoundingClientRect().bottom,
        behavior: "smooth",
      });
    }
  }, []);

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
              <option label="20%" value="20" />
              <option label="30%" value="30" />
              <option label="40%" value="40" />
              <option label="50%" value="50" />
              <option label="60%" value="60" />
              <option label="70%" value="70" />
              <option label="80%" value="80" />
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

      {loading ? (
        <div className="loading lds-dual-ring">
          {" "}
          <span>Beregner pris..</span>
        </div>
      ) : (
        ""
      )}
      {submitted ? (
        <div className="price-container">
          <h2>Vår anbefaling</h2>
          <p>
            Vi har laget en anbefaling basert på bilens alder, din bonus, og hva
            vi vet om deg.
          </p>
          <div className="top-text-price">
            Priser med din {result[0].bonus}% bonus:
          </div>
          <ul className="grid gap">
            <li className="card">
              <h3>Ansvar</h3>
              <div className="small-text">Lovpålagt</div>
              <div>
                <div className="regular-text-price">{price}kr/mnd</div>
                <div className="small-text-price">{priceYear}kr/år</div>
              </div>
            </li>
            <li className="card">
              <h3>Minikasko</h3>
              <div className="small-text">Dekker brann/tyveri</div>
              <div className="regular-text-price">{price}kr/mnd</div>
              <div className="small-text-price">{priceYear}kr/år</div>
            </li>
            <li ref={scroll} className="card recomended">
              <h3>Kasko</h3>
              <div className="small-text">Dekker det viktigste</div>
              <div className="regular-text-price">{price}kr/mnd</div>
              <div className="small-text-price">{priceYear}kr/år</div>
            </li>
            <li className="card">
              <h3>Topkasko</h3>
              <div className="small-text">Vår beste forsikring</div>
              <div className="regular-text-price">{price}kr/mnd</div>
              <div className="small-text-price">{priceYear}kr/år</div>
            </li>
          </ul>
        </div>
      ) : (
        ""
      )}
    </section>
  );
};
export default Form;
