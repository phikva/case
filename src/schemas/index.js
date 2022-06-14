import * as yup from "yup";

export const validation = yup.object().shape({
  registreringsNummer: yup
    .string()
    .required("Må fylles ut")
    .matches(/^[a-z]{2}[\d]{5}$/, "Må inneholde 2 bokstaver + 5 tall"),

  bonus: yup.number().required("Velg 1 bonus"),

  // nummber som starter på 0 blir ikke registrert
  fødselsNummer: yup
    .number()
    .positive("Kan ikke være et negativt tall")
    .required("Må være kun tall")
    .test(
      "len",
      "Må være 11 siffer",
      (val) => val && val.toString().length === 11
    ),

  fornavn: yup
    .string()
    .required("Må fylles ut")
    .min(2, "Minimum 2 bokstaver")
    .max(30),

  etternavn: yup
    .string()
    .required("Må fylles ut")
    .min(2, "Minimum 2 bokstaver")
    .max(30),

  epost: yup
    .string()
    .email("Skriv en gyldig e-postadresse")
    .required("Må fylles ut"),
});
