"use client";
import { useState, FormEvent } from "react";
import styles from "./styles/styles.module.css";
import { monserrat } from "@/app/fonts";

interface FormData {
  name: string;
  email: string;
  phone: string;
  consent: boolean;
}

export const FormSection = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    consent: false,
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <section id="contact" className={styles.formSection}>
      <div className={`${monserrat.className} ${styles.titleWraper}`}>
        <h2>
          ¿Necesitas más información?
          <span>Dejanos tus datos y nos pondremos en contacto contigo </span>
        </h2>
      </div>
      <div className={styles.container}>
        <h2 className={styles.title}>Contáctanos</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Nombre</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="phone">Celular</label>
            <input
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                checked={formData.consent}
                onChange={(e) =>
                  setFormData({ ...formData, consent: e.target.checked })
                }
                required
              />
              <span>Acepto el tratamiento de mis datos personales</span>
            </label>
          </div>

          <button type="submit" className={styles.submitButton}>
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
};

export default FormSection;
