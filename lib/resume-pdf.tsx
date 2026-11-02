// The generated resume PDF — styled to match RESUME_HERRADI-REDA.pdf
// (serif Times, centered header with rules, blue links, disc bullets).
// Rendered client-side on demand via components/download-resume.tsx, so
// @react-pdf/renderer stays out of the main page bundle.
import {
  Document,
  Page,
  Text,
  View,
  Link,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";
import {
  profile,
  experience,
  education,
  skills,
  type Entry,
  type Bullet,
} from "./resume-data";

const BLUE = "#0563c1";

// react-pdf hyphenates by default, which breaks tokens like "React.js/Preact"
// into "Re-act.js/Preact" — unreadable, and no ATS keyword matches it. Return
// each word whole and let lines wrap at spaces instead.
Font.registerHyphenationCallback((word) => [word]);

const styles = StyleSheet.create({
  page: {
    paddingVertical: 36,
    paddingHorizontal: 54,
    fontFamily: "Times-Roman",
    fontSize: 10,
    lineHeight: 1.1,
    color: "#000000",
  },
  name: { fontFamily: "Times-Bold", fontSize: 20, textAlign: "center" },
  rule: { borderBottomWidth: 1, borderBottomColor: "#000000", marginVertical: 4 },
  contactLine: { textAlign: "center", lineHeight: 1.5 },
  link: { color: BLUE, textDecoration: "underline" },
  summary: { fontFamily: "Times-Italic", textAlign: "center" },
  sectionTitle: {
    fontFamily: "Times-Bold",
    fontSize: 11,
    textTransform: "uppercase",
    borderBottomWidth: 1,
    borderBottomColor: "#000000",
    paddingBottom: 2,
    marginTop: 10,
    marginBottom: 4,
  },
  entryHead: { marginTop: 6 },
  row: { flexDirection: "row", justifyContent: "space-between" },
  org: { fontFamily: "Times-Bold", textTransform: "uppercase" },
  location: { fontFamily: "Times-Bold" },
  dates: { fontFamily: "Times-Italic" },
  bulletRow: { flexDirection: "row", marginTop: 2, paddingLeft: 12 },
  bulletDot: {
    width: 3,
    height: 3,
    borderRadius: 1.5,
    backgroundColor: "#000000",
    marginTop: 4.5,
    marginRight: 6,
  },
  bulletText: { flex: 1 },
  skillLine: { marginTop: 2 },
  bold: { fontFamily: "Times-Bold" },
});

function BulletItem({ bullet }: { bullet: Bullet }) {
  return (
    <View style={styles.bulletRow}>
      <View style={styles.bulletDot} />
      <Text style={styles.bulletText}>
        {bullet.map((seg, i) =>
          seg.bold ? (
            <Text key={i} style={styles.bold}>
              {seg.text}
            </Text>
          ) : (
            seg.text
          )
        )}
      </Text>
    </View>
  );
}

function EntryBlock({ entry }: { entry: Entry }) {
  return (
    <View>
      <View style={styles.entryHead} wrap={false}>
        <View style={styles.row}>
          <Text style={styles.org}>{entry.org}</Text>
          <Text style={styles.location}>{entry.location}</Text>
        </View>
        <View style={styles.row}>
          <Text>{entry.title}</Text>
          <Text style={styles.dates}>{entry.dates}</Text>
        </View>
      </View>
      {entry.bullets?.map((bullet, i) => (
        <BulletItem key={i} bullet={bullet} />
      ))}
    </View>
  );
}

export function ResumeDocument() {
  return (
    <Document
      title={`${profile.name} — Resume`}
      author={profile.name}
      subject="Senior Software Engineer — resume"
      keywords="Reda Herradi, Senior Software Engineer, Oracle, Vue.js, React, Oracle APEX, TypeScript, Node.js, Frontend, Morocco"
      creator="herradi.com"
      producer="herradi.com"
    >
      <Page size="A4" style={styles.page}>
        <Text style={styles.name}>{profile.name}</Text>

        <View style={styles.rule} />

        <Text style={styles.contactLine}>
          <Link style={styles.link} src={`tel:${profile.phone}`}>
            {profile.phoneDisplay}
          </Link>
          {"  ·  "}
          <Link style={styles.link} src={`mailto:${profile.email}`}>
            {profile.email}
          </Link>
          {"  ·  "}
          <Link style={styles.link} src={profile.siteUrl}>
            {profile.site}
          </Link>
        </Text>
        <Text style={styles.contactLine}>
          <Link style={styles.link} src={profile.githubUrl}>
            {profile.github}
          </Link>
          {"  ·  "}
          <Link style={styles.link} src={profile.linkedinUrl}>
            {profile.linkedin}
          </Link>
        </Text>

        <View style={styles.rule} />

        <Text style={styles.summary}>{profile.summary}</Text>

        <Text style={styles.sectionTitle}>Professional Experience</Text>
        {experience.map((entry) => (
          <EntryBlock key={entry.org} entry={entry} />
        ))}

        <Text style={styles.sectionTitle}>Education</Text>
        <EntryBlock entry={education} />

        <Text style={styles.sectionTitle}>Skills</Text>
        {skills.map((group) => (
          <Text key={group.label} style={styles.skillLine}>
            <Text style={styles.bold}>{group.label}: </Text>
            {group.items}
          </Text>
        ))}
      </Page>
    </Document>
  );
}
