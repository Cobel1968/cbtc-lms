import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import { CBTC_THEME } from './BrandTheme';

const styles = StyleSheet.create({
  page: { padding: 40, fontFamily: 'Helvetica' },
  // Branding
  headerBar: { height: 12, backgroundColor: CBTC_THEME.colors.navy, marginBottom: 20 },
  footerBar: { position: 'absolute', bottom: 40, left: 40, right: 40, borderTop: '1pt solid #EEE', paddingTop: 10 },
  
  // Certificate Styles
  certTitle: { fontSize: 32, color: CBTC_THEME.colors.navy, fontWeight: 'bold', textAlign: 'center', marginTop: 50 },
  magentaLine: { width: 100, height: 3, backgroundColor: CBTC_THEME.colors.magenta, alignSelf: 'center', marginVertical: 15 },
  
  // Transcript Table
  table: { marginTop: 20 },
  tableRow: { flexDirection: 'row', borderBottomWidth: 1, borderColor: '#EEE', paddingVertical: 5 },
  tableHeader: { backgroundColor: CBTC_THEME.colors.ice, fontWeight: 'bold' },
  cellWide: { width: '40%', fontSize: 10 },
  cellSmall: { width: '20%', fontSize: 10, textAlign: 'center' }
});

export const MasterReport = ({ student, assessments }) => (
  <Document>
    {/* PAGE 1: THE CERTIFICATE */}
    <Page size="A4" style={styles.page}>
      <View style={styles.headerBar} />
      <Text style={styles.certTitle}>CERTIFICATE OF ACHIEVEMENT</Text>
      <View style={styles.magentaLine} />
      <Text style={{ textAlign: 'center', fontSize: 14, marginTop: 20 }}>This is to certify that</Text>
      <Text style={{ textAlign: 'center', fontSize: 24, fontWeight: 'bold', marginVertical: 10 }}>{student.name}</Text>
      <Text style={{ textAlign: 'center', fontSize: 14 }}>has mastered the industrial requirements of</Text>
      <Text style={{ textAlign: 'center', fontSize: 18, color: CBTC_THEME.colors.navy, marginTop: 10 }}>HYD-01: Industrial Hydraulic Systems</Text>
      
      <View style={styles.footerBar}>
        <Text style={{ fontSize: 9, color: CBTC_THEME.colors.slate }}>Credential ID: {student.id}-HYD01 | Verified by Cobel AI Engine</Text>
      </View>
    </Page>

    {/* PAGE 2: THE TRANSCRIPT */}
    <Page size="A4" style={styles.page}>
      <Text style={{ fontSize: 18, color: CBTC_THEME.colors.navy, marginBottom: 20 }}>Technical Performance Transcript</Text>
      
      <View style={styles.table}>
        <View style={[styles.tableRow, styles.tableHeader]}>
          <Text style={styles.cellWide}>Competency Module</Text>
          <Text style={styles.cellSmall}>Score</Text>
          <Text style={styles.cellSmall}>Bilingual Friction</Text>
          <Text style={styles.cellSmall}>Latency</Text>
        </View>
        {assessments.map((mod, i) => (
          <View key={i} style={styles.tableRow}>
            <Text style={styles.cellWide}>{mod.module_name}</Text>
            <Text style={styles.cellSmall}>{mod.score}%</Text>
            <Text style={styles.cellSmall}>{mod.friction_index}</Text>
            <Text style={styles.cellSmall}>{mod.vocal_latency_ms}ms</Text>
          </View>
        ))}
      </View>

      <View style={{ marginTop: 40, padding: 15, backgroundColor: CBTC_THEME.colors.ice }}>
        <Text style={{ fontSize: 10, fontWeight: 'bold' }}>Institutional Summary:</Text>
        <Text style={{ fontSize: 9, marginTop: 5 }}>
          Feature 4 (Handwriting OCR): Verified | Feature 2 (Vocal Fluency): Verified
        </Text>
      </View>
    </Page>
  </Document>
);
