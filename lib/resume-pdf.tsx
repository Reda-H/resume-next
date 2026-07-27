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

const styles = StyleSheet.create({
  page: {
    paddingVertical: 40,
    paddingHorizontal: 54,
    fontFamily: "Times-Roman",
    fontSize: 10.5,
    lineHeight: 1.35,
    color: "#000000",
  },
  name: { fontFamily: "Times-Bold", fontSize: 22, textAlign: "center" },
  rule: { borderBottomWidth: 1, borderBottomColor: "#000000", marginVertical: 6 },
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
    marginTop: 14,
    marginBottom: 4,
  },
  entryHead: { marginTop: 10 },
  row: { flexDirection: "row", justifyContent: "space-between" },
  org: { fontFamily: "Times-Bold", textTransform: "uppercase" },
  location: { fontFamily: "Times-Bold" },
  dates: { fontFamily: "Times-Italic" },
  bulletRow: { flexDirection: "row", marginTop: 3, paddingLeft: 12 },
  bulletDot: {
    width: 3,
    height: 3,
    borderRadius: 1.5,
    backgroundColor: "#000000",
    marginTop: 4.5,
    marginRight: 6,
  },
  bulletText: { flex: 1 },
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
            {profile.phone}
          </Link>
        </Text>
        <Text style={styles.contactLine}>
          <Link style={styles.link} src={`mailto:${profile.email}`}>
            {profile.email}
          </Link>
        </Text>
        <Text style={styles.contactLine}>
          <Link style={styles.link} src={profile.siteUrl}>
            {profile.site}
          </Link>
        </Text>

        <View style={styles.rule} />

        <Text style={styles.summary}>{profile.summary}</Text>

        <Text style={styles.sectionTitle}>Professional Experience</Text>
        {experience.map((entry) => (
          <EntryBlock key={entry.org} entry={entry} />
        ))}

        <View style={styles.rule} />
        <EntryBlock entry={education} />

        <Text style={styles.sectionTitle}>Additional Skills</Text>
        {skills.map((bullet, i) => (
          <BulletItem key={i} bullet={bullet} />
        ))}
      </Page>
    </Document>
  );
}
