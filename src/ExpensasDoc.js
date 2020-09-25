import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
    page: {
      flexDirection: 'row',
      backgroundColor: '#E4E4E4'
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1
    },
    table: { 
      display: "table", 
      width: "auto", 
      borderStyle: "solid", 
      borderWidth: 1, 
      borderRightWidth: 0, 
      borderBottomWidth: 0 
    },
    tableRow: { 
      margin: "auto", flexDirection: "row" 
    }, 
    tableCol: { 
      width: "25%", borderStyle: "solid", borderWidth: 1, borderLeftWidth: 0, borderTopWidth: 0
    }, 
    tableCell: { margin: "auto", marginTop: 5, fontSize: 10 }
  });
  
  // Create Document Component
function ExpensasDoc() {
    return(
        <Document>
          <Page size="A4" style={styles.page}>
          <View style={styles.table}> 
            <View style={styles.tableRow}>
             <View style={styles.tableCol}> 
                <Text style={styles.tableCell}>Product</Text> 
             </View> 
             <View style={styles.tableCol}> 
                <Text style={styles.tableCell}>Type</Text> 
             </View> 
             <View style={styles.tableCol}> 
                <Text style={styles.tableCell}>Period</Text> 
             </View> 
             <View style={styles.tableCol}> 
                <Text style={styles.tableCell}>Price</Text> 
             </View> 
              {/* TableContent */} 
             <View style={styles.tableRow}> 
              <View style={styles.tableCol}> 
                <Text style={styles.tableCell}>React-PDF</Text> 
              </View> 
              <View style={styles.tableCol}> 
                <Text style={styles.tableCell}>3 User </Text> 
              </View> 
              <View style={styles.tableCol}> 
                <Text style={styles.tableCell}>2019-02-20 - 2020-02-19</Text> 
              </View> 
              <View style={styles.tableCol}> 
                <Text style={styles.tableCell}>5€</Text> 
              </View> 
             </View> 
             </View>
          </View>
          </Page>
        </Document>
  );
}
  

export default ExpensasDoc;