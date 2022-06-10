import { useFormik } from "formik";

const Form = () => {
  const { values, handleBlur, handleChange } = useFormik({
    initialValues: {
      registreringsnummer: "",
      bonus: "",
      fødselsnummer: "",
      fornavn: "",
      etternavn: "",
      epost: ""
    }
  });
  return (
    <form>
      <label htmlFor="registreringsnummer">Bilens registreringsnummer</label>
      <input
        value={values.registreringsnummer}
        onChange={handleChange}
        id="registreringsnummer"
        type="text"
        placeholder="E.g AB 12345"
        onBlur={handleBlur}
      />

      <label htmlFor="bonus">Din bonus</label>
      <select
        value={values.bonus}
        onChange={handleChange}
        id="bonus"
        type="select"
        onBlur={handleBlur}
      >
        <option value="" hidden selected>
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

      <label htmlFor="fødselsnummer">Fødselsnummer</label>
      <input
        value={values.fødselsnummer}
        onChange={handleChange}
        id="fødselsnummer"
        type="number"
        placeholder="11 siffer"
        onBlur={handleBlur}
      />

      <label htmlFor="fornavn">Fornavn</label>
      <input
        value={values.fornavn}
        onChange={handleChange}
        id="fornavn"
        type="text"
        placeholder=""
        onBlur={handleBlur}
      />

      <label htmlFor="etternavn">Etternavn</label>
      <input
        value={values.etternavn}
        onChange={handleChange}
        id="etternavn"
        type="text"
        placeholder=""
        onBlur={handleBlur}
      />

      <label htmlFor="epost">E-post</label>
      <input
        value={values.epost}
        onChange={handleChange}
        id="epost"
        type="email"
        placeholder=""
        onBlur={handleBlur}
      />
      <button type="submit">Beregn pris</button>
      <button type="button" value="Avbryt">Avbryt</button>
    </form>
  );
};
export default Form;
