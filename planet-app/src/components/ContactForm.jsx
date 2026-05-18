
 import { useState } from "react";

const MAX_CHARS = 100;

export default function ContactForm() {
  const [message, setMessage] = useState("");

  return (
    <section style={styles.section}>
      <h2 style={styles.title}>Have Questions About Planetary Science?</h2>
      <p style={styles.subtitle}>
        Interested in learning more about space, astronomy, or how planetary data is collected
        and analyzed? Reach out and we'll get back to you.
      </p>

      <div style={styles.form}>
        <div style={styles.grid}>
          <div style={styles.group}>
            <label style={styles.label}>Full Name <span style={styles.req}>*</span></label>
            <input style={styles.input} type="text" placeholder="Full name" />
          </div>
          <div style={styles.group}>
            <label style={styles.label}>Email <span style={styles.req}>*</span></label>
            <input style={styles.input} type="email" placeholder="example@example.com" />
          </div>
          <div style={styles.group}>
            <label style={styles.label}>Phone Number <span style={styles.req}>*</span></label>
            <input style={styles.input} type="tel" placeholder="Please enter a valid phone number..." />
          </div>
          <div style={styles.group}>
            <label style={styles.label}>Message <span style={styles.req}>*</span></label>
            <textarea
              style={styles.textarea}
              placeholder="Enter your message..."
              maxLength={MAX_CHARS}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <div style={styles.charCount}>{message.length} / {MAX_CHARS} characters</div>
          </div>
        </div>

        <button style={styles.submitBtn}>
          Submit <span>›</span>
        </button>
      </div>
    </section>
  );
}

const styles = {
  section: { padding: "70px 60px", background: "#f0f4ff" },
  title: {
    fontSize: 26,
    fontWeight: 700,
    color: "#0d47a1",
    textAlign: "center",
    margin: "0 0 10px",
  },
  subtitle: {
    fontSize: 14,
    color: "#555",
    textAlign: "center",
    maxWidth: 560,
    margin: "0 auto 40px",
    lineHeight: 1.7,
  },
  form: { maxWidth: 700, margin: "0 auto" },
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 20,
    marginBottom: 20,
  },
  group: { display: "flex", flexDirection: "column", gap: 6 },
  label: { fontSize: 13, fontWeight: 600, color: "#1a1a2e" },
  req: { color: "#e53935" },
  input: {
    border: "1px solid #cdd5e0",
    borderRadius: 6,
    padding: "10px 12px",
    fontSize: 13,
    outline: "none",
    width: "100%",
    boxSizing: "border-box",
    color: "#333",
  },
  textarea: {
    border: "1px solid #cdd5e0",
    borderRadius: 6,
    padding: "10px 12px",
    fontSize: 13,
    outline: "none",
    width: "100%",
    boxSizing: "border-box",
    resize: "vertical",
    minHeight: 100,
    color: "#333",
  },
  charCount: { fontSize: 11, color: "#999", textAlign: "right", marginTop: 2 },
  submitBtn: {
    background: "#1565c0",
    color: "#fff",
    border: "none",
    padding: "12px 28px",
    borderRadius: 6,
    fontSize: 14,
    fontWeight: 600,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: 8,
  },
};

