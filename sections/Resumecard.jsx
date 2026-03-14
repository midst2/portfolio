import { motion } from "framer-motion";

const SE = "'Special Elite', 'Courier New', monospace";
const CAV = "'Caveat', cursive";
const INK = "#1e180a";
const MUTED = "#5a4820";
const STAMP = "#2a7e6e";
const DOT = "#9a7840";

const STARS_H = Array(14).fill("★");
const STARS_V = Array(7).fill("★");

const RESUME = {
  licenseNo: "NO. DEV-TH-2024-001",
  initials: "AY",
  name: "Amir Yunuh",
  role: "Full Stack & Embedded AI Dev",
  education: "Electronic Computer Tech, KMUTNB",
  expertise: "Computer Vision, IoT, Cloud AI",
  available: "Immediately · Bangkok, TH",
  skills: [
    "React",
    "Flutter",
    "Python",
    "OpenCV",
    "YOLOv8",
    "Arduino",
    "Raspberry Pi",
    "Azure AI",
    "JavaScript",
    "Tailwind",
  ],
  contact: [
    "061-649-8077",
    "work.amiryunuh@gmail.com",
    "github.com/midst2",
    "Bangkok, Thailand",
  ],
  certText:
    "This is to Certify that the person named above is authorised to build AI systems, wire up microcontrollers, ship full-stack apps, and automate things that used to require three people.",
  stampLine1: "2ND PLACE",
  stampLine2: "YOLO AI COMP",
  projects:
    "Smart Room Automation (MobileNet-SSD + GPIO) · Embedded AI Bottle Sorter (YOLOv8) · Realtime Voice Chatbot (Azure OpenAI + CosmosDB) · E-Commerce Flutter App",
};

function Stars() {
  const s = { fontSize: 11, color: INK, opacity: 0.8, lineHeight: 1 };
  return (
    <>
      <div
        style={{
          position: "absolute",
          top: 11,
          left: 24,
          right: 24,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {STARS_H.map((x, i) => (
          <span key={i} style={s}>
            {x}
          </span>
        ))}
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 11,
          left: 24,
          right: 24,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {STARS_H.map((x, i) => (
          <span key={i} style={s}>
            {x}
          </span>
        ))}
      </div>
      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 11,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          padding: "32px 0",
        }}
      >
        {STARS_V.map((x, i) => (
          <span key={i} style={s}>
            {x}
          </span>
        ))}
      </div>
      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 11,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          padding: "32px 0",
        }}
      >
        {STARS_V.map((x, i) => (
          <span key={i} style={s}>
            {x}
          </span>
        ))}
      </div>
    </>
  );
}

function Field({ label, value, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.4 }}
      style={{
        display: "flex",
        alignItems: "baseline",
        gap: 5,
        marginBottom: 4,
      }}
    >
      <span
        style={{
          fontFamily: SE,
          fontSize: 8.5,
          letterSpacing: 1.5,
          color: MUTED,
          minWidth: 82,
          flexShrink: 0,
        }}
      >
        {label}
      </span>
      <span
        style={{ flex: 1, borderBottom: `1px dotted ${DOT}`, paddingBottom: 1 }}
      >
        <span
          style={{
            fontFamily: CAV,
            fontSize: 14,
            color: INK,
            display: "block",
            lineHeight: 1.2,
          }}
        >
          {value}
        </span>
      </span>
    </motion.div>
  );
}

function Skill({ label }) {
  return (
    <span
      style={{
        fontFamily: SE,
        fontSize: 7,
        color: STAMP,
        border: `1px solid ${STAMP}`,
        borderRadius: 3,
        padding: "2px 5px",
        marginRight: 3,
        marginBottom: 3,
        display: "inline-block",
        opacity: 0.85,
      }}
    >
      {label}
    </span>
  );
}

export default function AmirResumeCard() {
  return (
    <div className="relative z-100 ">
        
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          padding: 32,
          gap: 24,
        }}
        className="bg-gray-200"
      >
    
        {/* <p className="text-lg font-semibold text-muted-foreground text-black">
          Here's my ID! Feel Free to download my resume and Transcript below.
        </p> */}
        <motion.div
          initial={{ opacity: 0, scale: 0.86, rotate: -3 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{
            scale: 1.012,
            rotate: 0.3,
            transition: { duration: 0.3 },
          }}
          style={{
            width: 700,
            borderRadius: 20,
            background:
              "radial-gradient(ellipse at 12% 88%,rgba(140,100,20,.18) 0%,transparent 45%), radial-gradient(ellipse at 80% 12%,rgba(190,160,60,.12) 0%,transparent 40%), linear-gradient(148deg,#f0e898 0%,#e2d47a 28%,#cfc262 54%,#dcd07e 80%,#ebe088 100%)",
            position: "relative",
            boxShadow:
              "0 28px 80px rgba(0,0,0,.42), 0 6px 24px rgba(0,0,0,.22)",
            overflow: "hidden",
            fontFamily: SE,
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 9,
              borderRadius: 13,
              border: "0.5px solid rgba(90,70,10,.25)",
              pointerEvents: "none",
              zIndex: 0,
            }}
          />
          <Stars />

          <div
            style={{
              position: "relative",
              zIndex: 1,
              display: "flex",
              padding: "38px 28px 26px 28px",
              gap: 20,
            }}
          >
            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -14 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.22, duration: 0.5 }}
              style={{
                width: 192,
                flexShrink: 0,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img
                src="src/assets/Portrait.jpg"
                alt="Amir Yunuh"
                style={{
                  width: 148,
                  height: 148,
                  borderRadius: "50%",
                  border: "2px solid #7a8898",
                  objectFit: "cover",
                  flexShrink: 0,
                }}
              />
              <div
                style={{
                  marginTop: 7,
                  fontSize: 7.5,
                  fontStyle: "italic",
                  color: MUTED,
                  textAlign: "center",
                }}
              >
                Photograph of Authorized Developer
              </div>
              <div
                style={{
                  height: "0.5px",
                  background: "rgba(140,100,30,.35)",
                  width: "100%",
                  margin: "9px 0",
                }}
              />
              <div
                style={{
                  fontSize: 8,
                  letterSpacing: 2,
                  color: MUTED,
                  marginBottom: 5,
                  alignSelf: "flex-start",
                }}
              >
                SKILLS
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
                {RESUME.skills.map((s) => (
                  <Skill key={s} label={s} />
                ))}
              </div>
              <div
                style={{
                  height: "0.5px",
                  background: "rgba(140,100,30,.35)",
                  width: "100%",
                  margin: "9px 0",
                }}
              />
              <div
                style={{
                  fontSize: 8,
                  letterSpacing: 2,
                  color: MUTED,
                  marginBottom: 5,
                  alignSelf: "flex-start",
                }}
              >
                CONTACT
              </div>
              <div
                style={{
                  fontSize: 7.5,
                  color: MUTED,
                  lineHeight: 1.9,
                  fontStyle: "italic",
                  alignSelf: "flex-start",
                }}
              >
                {RESUME.contact.map((c, i) => (
                  <span key={i}>
                    {c}
                    <br />
                  </span>
                ))}
              </div>
            </motion.div>

            {/* RIGHT */}
            <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                style={{
                  textAlign: "right",
                  fontSize: 9,
                  letterSpacing: 3.5,
                  color: INK,
                  marginBottom: 4,
                }}
              >
                PERMANENT LICENSE OF EMPLOYMENT
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                style={{
                  textAlign: "center",
                  fontSize: 16,
                  fontWeight: "bold",
                  color: INK,
                  marginBottom: 8,
                  letterSpacing: 1,
                }}
              >
                {RESUME.licenseNo}
              </motion.div>

              <Field label="Full Name" value={RESUME.name} delay={0.3} />
              <Field label="Role" value={RESUME.role} delay={0.36} />
              <Field label="Education" value={RESUME.education} delay={0.42} />
              <Field label="Expertise" value={RESUME.expertise} delay={0.48} />
              <Field label="Available" value={RESUME.available} delay={0.54} />

              <div
                style={{
                  height: "0.5px",
                  background: "rgba(140,100,30,.38)",
                  margin: "6px 0",
                }}
              />
              <div
                style={{
                  fontSize: 8,
                  letterSpacing: 3,
                  color: MUTED,
                  textAlign: "center",
                  marginBottom: 5,
                }}
              >
                LICENSE OF PROFESSIONAL CONDUCT
              </div>

              <div style={{ position: "relative" }}>
                <p
                  style={{
                    fontSize: 7.6,
                    lineHeight: 1.65,
                    color: MUTED,
                    fontStyle: "italic",
                    margin: "0 0 4px",
                    maxWidth: 235,
                    textDecoration: "line-through",
                    textDecorationColor: "rgba(74,58,24,.28)",
                  }}
                >
                  {RESUME.certText}
                </p>
                <motion.div
                  initial={{ opacity: 0, scale: 1.9, rotate: -18 }}
                  animate={{ opacity: 0.88, scale: 1, rotate: -18 }}
                  transition={{
                    delay: 0.95,
                    duration: 0.45,
                    ease: [0.34, 1.56, 0.64, 1],
                  }}
                  style={{
                    position: "absolute",
                    top: -14,
                    right: 0,
                    border: `2.5px solid ${STAMP}`,
                    borderRadius: 6,
                    padding: "5px 9px",
                    color: STAMP,
                    fontSize: 10,
                    fontWeight: "bold",
                    letterSpacing: 1,
                    textAlign: "center",
                    lineHeight: 1.55,
                  }}
                >
                  {RESUME.stampLine1}
                  <br />
                  {RESUME.stampLine2}
                </motion.div>
              </div>

              <div
                style={{
                  fontSize: 7.5,
                  letterSpacing: 2.5,
                  color: MUTED,
                  margin: "2px 0 2px",
                }}
              >
                NOTABLE PROJECTS
              </div>
              <p
                style={{
                  fontSize: 7.5,
                  lineHeight: 1.65,
                  color: MUTED,
                  fontStyle: "italic",
                  margin: "0 0 7px",
                  maxWidth: 245,
                }}
              >
                {RESUME.projects}
              </p>

              <motion.div
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.72 }}
              >
                <div
                  style={{
                    fontFamily: CAV,
                    fontSize: 28,
                    color: INK,
                    borderBottom: `1px dotted ${DOT}`,
                    display: "inline-block",
                    lineHeight: 1.1,
                  }}
                >
                  {RESUME.name}
                </div>
                <div
                  style={{
                    fontSize: 7.5,
                    letterSpacing: 1,
                    color: MUTED,
                    fontStyle: "italic",
                    marginTop: 3,
                  }}
                >
                  Signature of Authorized Developer
                </div>
              </motion.div>
            </div>
          </div>
          
        </motion.div>
        <div style={{ display: "flex", gap: 12, marginBottom: 8 }}>
        <a
            href="src/assets/Resume.pdf"
            download
            style={{
                background: "#2a7e6e",
                color: "#fff",
                fontFamily: SE,
                fontSize: 13,
                borderRadius: 6,
                padding: "8px 18px",
                textDecoration: "none",
                boxShadow: "0 2px 8px rgba(42,126,110,0.12)",
                transition: "background 0.2s",
            }}
        >
            <p className="font-heading">Download Resume</p>
        </a>
        <a
            href="src/assets/Transcript.pdf"
            download
            
            style={{
                background: "#9a7840",
                color: "#fff",
                fontFamily: SE,
                fontSize: 13,
                borderRadius: 6,
                padding: "8px 18px",
                textDecoration: "none",
                boxShadow: "0 2px 8px rgba(154,120,64,0.12)",
                transition: "background 0.2s",
            }}
        >
            <p className="font-heading">Download Transcript</p>
        </a>
    </div>
      </div>
    </div>
  );
}
